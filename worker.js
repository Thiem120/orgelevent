/**
 * OrgelEvent — Cloudflare Worker
 * Verwerkt ticketbestellingen via Mollie + Supabase.
 * Alle andere requests worden doorgestuurd naar de statische assets.
 */

const PRIJZEN = {
  dag:     1250, // €12,50
  concert:  750, // € 7,50
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/checkout' && request.method === 'POST') {
      return handleCheckout(request, env);
    }

    if (url.pathname === '/api/mollie-webhook' && request.method === 'POST') {
      return handleWebhook(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

// ---------------------------------------------------------------------------
// Checkout: formulier verwerken → Mollie betaling → Supabase opslaan → redirect
// ---------------------------------------------------------------------------
async function handleCheckout(request, env) {
  try {
    const form        = await request.formData();
    const voornaam    = (form.get('voornaam')    ?? '').trim();
    const achternaam  = (form.get('achternaam')  ?? '').trim();
    const email       = (form.get('email')       ?? '').trim().toLowerCase();
    const ticket_type = ['dag', 'concert'].includes(form.get('ticket_type'))
      ? form.get('ticket_type')
      : 'dag';
    const aantal = Math.max(1, Math.min(10, parseInt(form.get('aantal') ?? '1', 10)));

    if (!voornaam || !achternaam || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return errorPage('Vul alle verplichte velden correct in.');
    }

    const bedrag_per_ticket = PRIJZEN[ticket_type];
    const totaal            = bedrag_per_ticket * aantal;

    const omschrijving = ticket_type === 'dag'
      ? `OrgelEvent 2027 — Dagticket × ${aantal}`
      : `OrgelEvent 2027 — Slotconcert × ${aantal}`;

    // 1. Mollie betaling aanmaken
    const mollieRes = await fetch('https://api.mollie.com/v2/payments', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.MOLLIE_API_KEY}`,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify({
        amount:      { currency: 'EUR', value: (totaal / 100).toFixed(2) },
        description: omschrijving,
        redirectUrl: `${env.BASE_URL}/betaling/succes`,
        webhookUrl:  `${env.BASE_URL}/api/mollie-webhook`,
        locale:      'nl_NL',
        metadata:    { voornaam, achternaam, email, ticket_type, aantal: String(aantal) },
      }),
    });

    if (!mollieRes.ok) {
      const err = await mollieRes.text();
      console.error('Mollie error:', err);
      return errorPage('Er ging iets mis bij het aanmaken van de betaling. Probeer het opnieuw.');
    }

    const payment = await mollieRes.json();

    // 2. Supabase record opslaan (pending)
    const sbRes = await fetch(`${env.SUPABASE_URL}/rest/v1/orgelevent_tickets`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        'apikey':        env.SUPABASE_SERVICE_ROLE_KEY,
        'Content-Type':  'application/json',
        'Prefer':        'return=minimal',
      },
      body: JSON.stringify({
        voornaam,
        achternaam,
        email,
        ticket_type,
        aantal,
        bedrag_per_ticket,
        totaal_bedrag:     totaal,
        mollie_payment_id: payment.id,
        mollie_status:     'open',
      }),
    });

    if (!sbRes.ok) {
      // Log maar blokkeer niet — Mollie betaling loopt door, webhook herstelt record indien nodig
      console.error('Supabase insert error:', await sbRes.text());
    }

    // 3. Doorsturen naar Mollie checkout
    return Response.redirect(payment._links.checkout.href, 302);

  } catch (err) {
    console.error('Checkout error:', err);
    return errorPage('Er is een onverwachte fout opgetreden. Probeer het opnieuw.');
  }
}

// ---------------------------------------------------------------------------
// Webhook: Mollie POST → status ophalen → Supabase bijwerken
// ---------------------------------------------------------------------------
async function handleWebhook(request, env) {
  try {
    const form       = await request.formData();
    const payment_id = form.get('id');

    if (!payment_id || !/^tr_/.test(payment_id)) {
      return new Response('Bad request', { status: 400 });
    }

    // Haal actuele status op bij Mollie (nooit vertrouwen op de POST-body zelf)
    const mollieRes = await fetch(`https://api.mollie.com/v2/payments/${payment_id}`, {
      headers: { 'Authorization': `Bearer ${env.MOLLIE_API_KEY}` },
    });

    if (!mollieRes.ok) {
      return new Response('Mollie lookup failed', { status: 500 });
    }

    const payment = await mollieRes.json();

    // Supabase record bijwerken
    await fetch(
      `${env.SUPABASE_URL}/rest/v1/orgelevent_tickets?mollie_payment_id=eq.${encodeURIComponent(payment_id)}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
          'apikey':        env.SUPABASE_SERVICE_ROLE_KEY,
          'Content-Type':  'application/json',
          'Prefer':        'return=minimal',
        },
        body: JSON.stringify({
          mollie_status: payment.status,
          updated_at:    new Date().toISOString(),
        }),
      },
    );

    return new Response('OK', { status: 200 });

  } catch (err) {
    console.error('Webhook error:', err);
    return new Response('Error', { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// Hulpfunctie: foutpagina in OrgelEvent-stijl
// ---------------------------------------------------------------------------
function errorPage(message) {
  const html = `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fout — OrgelEvent</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,400&family=Jost:wght@300;400&display=swap" rel="stylesheet" />
  <style>
    body { font-family: 'Jost', system-ui, sans-serif; background: #F8F6F2; color: #17170E;
           display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 24px; }
    .kaart { max-width: 520px; }
    h1 { font-family: 'Cormorant Garamond', serif; font-size: 42px; font-style: italic; font-weight: 400;
         line-height: 1.1; margin-bottom: 16px; }
    p { font-size: 16px; font-weight: 300; color: #585850; line-height: 1.65; margin-bottom: 32px; }
    a { display: inline-block; color: #fff; background: #1C5450; padding: 12px 24px;
        font-size: 14px; font-weight: 500; text-decoration: none; border-radius: 1px; }
  </style>
</head>
<body>
  <div class="kaart">
    <h1>Er ging iets mis</h1>
    <p>${message}</p>
    <a href="/#aanmelden">&larr; Terug naar het formulier</a>
  </div>
</body>
</html>`;
  return new Response(html, {
    status: 400,
    headers: { 'Content-Type': 'text/html;charset=UTF-8' },
  });
}
