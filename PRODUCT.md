# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, deployed as a Cloudflare Worker (`worker.js` serving static assets). Mollie for ticket payments (iDEAL, credit card). Supabase for order storage. No build step — single `index.html` entry point. Domain: orgelevent.nl.

## Users

**Primary:** Dutch organ enthusiasts — organists, church musicians, and organ lovers active in and around the Protestant Reformed church community (gereformeerde gemeenten). They follow organ music closely, know the featured musicians by name, and attend concerts and church services regularly.

**Secondary:** Curious newcomers open to discovering organ music; visitors drawn by the exhibitors (music publishers, instrument builders, associations).

Both groups are Dutch-speaking and expect the site in Dutch.

## Product Purpose

OrgelEvent is the event website and ticket shop for the first-edition OrgelEvent on Saturday 29 May 2027 in the Grote of Sint-Janskerk in Schiedam. The site's job is to inform potential visitors about the programme and persuade them to buy a ticket.

The event itself is a full-day celebration of organ music: concerts and lectures by three featured organists (Sietze de Vries, Minne Veldman, Gert van Hoef), stands by organ companies, publishers, and associations, and a closing concert at 19:00. It is organised by KoraalBoek.nl.

## Positioning

The only event in the Netherlands that gathers the entire organ world — musicians, instrument builders, publishers, and associations — together with their audience for a single shared day. The combination of stands, lectures, concerts, and community meeting in a historic church is what no neighbouring event offers.

## Operating Context

Visitors arrive via social media, church networks, and word of mouth within the Dutch Reformed organ community. They are planning a day out and need to: understand what OrgelEvent is, find out who is performing, check the programme, and buy a ticket. Most arrive on mobile.

The site is live well before the event date (May 2027). Exact times per programme item are not yet confirmed; the site acknowledges this. Ticket sales go through the `/api/checkout` endpoint (Cloudflare Worker → Mollie → email confirmation). Organisers manage orders through Supabase and Mollie dashboards.

## Capabilities and Constraints

- Single-page static site; no CMS or dynamic content beyond the checkout API.
- Ticket types: Dagticket (€12,50 — full day including closing concert) and Slotconcert (€7,50 — closing concert only).
- Payment provider: Mollie (iDEAL, credit card, and other Dutch/EU methods).
- Exact programme times TBD; the site notes this explicitly.
- Three confirmed musicians: Sietze de Vries (lecture & concert), Minne Veldman (chorale book preview), Gert van Hoef (closing concert).
- Ten confirmed exhibitors, listed on the page.
- Language: Dutch only.
- Cloudflare Workers deployment — no server-side rendering beyond the checkout handler.

## Brand Commitments

- **Name:** OrgelEvent — one word, capital O and E, used consistently.
- **Organizer brand:** KoraalBoek.nl — mentioned as the organising party and linked in the ticket section.
- **Voice:** Editorial, warm, and respectful of the audience's knowledge. Dutch. No marketing clichés; the copy trusts that organ enthusiasts are the reader.
- **Existing visual world:** Warm white + gold + deep green palette; Cormorant Garamond (serif headlines) + Jost (sans UI text). Church photo hero. Full-bleed editorial layout. This visual identity is in place and should be preserved unless a redesign is requested.

## Evidence on Hand

- Artist photos: `./assets/sietze-de-vries.png`, `./assets/minne-veldman.jpg`, `./assets/gert-van-hoef.webp`
- Church interior photo: `./assets/kerk.jpg`
- Ten confirmed exhibitor names (listed in `index.html`)
- Ticket prices confirmed: €12,50 dag, €7,50 slotconcert
- Event confirmed: 29 mei 2027, Grote of Sint-Janskerk, Korte Nieuwstraat 51, 3111 XE Schiedam
- Closing concert confirmed: 19:00, Gert van Hoef

**Absent:** Exact programme times; additional press or testimonials; event capacity.

## Product Principles

1. **The audience already cares.** Organ enthusiasts are insiders — write for someone who knows Sietze de Vries, not someone who needs organ music explained from scratch.
2. **Community first, commerce second.** The event is about meeting the organ world; ticket sales follow naturally from that conviction, not the reverse.
3. **One honest day.** Everything on the page is confirmed or explicitly labelled as forthcoming. No invented times, inflated claims, or generic event copy.
4. **The church as context.** The Grote of Sint-Janskerk is not just a venue; it is the reason the event has the character it has. Design choices should honour the gravity and beauty of that setting.
5. **Mobile-first purchase path.** Most visitors arrive on mobile, possibly via social media. The route from landing to purchased ticket must be short and clear.

## Accessibility & Inclusion

No specific statutory requirement stated. The site uses `lang="nl"`, `aria-label` attributes, `:focus-visible` styles, and `prefers-reduced-motion` support. Standard WCAG 2.1 AA compliance is the working floor.
