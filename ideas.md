# 67 Tours & Travel — Design Direction

## Three possible directions

### Theme Name: Field Notes Modernism
Very Brief Intro: An editorial, field-tested visual system that treats travel planning as a practical discipline: warm paper, ink, route marks, and crisp operational detail. It feels credible to institutions without losing a sense of place.
Probability: 0.07

### Theme Name: Coastal Ledger
Very Brief Intro: A sun-washed, coastal-led identity built around blue water, mineral neutrals, and documentary photography. It would lean more leisure-forward while keeping a structured, itinerary-first voice.
Probability: 0.03

### Theme Name: Signal & Savanna
Very Brief Intro: A dark, high-contrast route-planning system with amber wayfinding marks and precise interface cues. It would feel more expeditionary and technical, with risk and logistics at the center.
Probability: 0.08

## Selected direction: Field Notes Modernism

### Design Movement
Contemporary editorial modernism with the material language of field notebooks, printed maps, and institutional reports. The interface should feel assembled by someone who has checked a route, counted seats, and briefed a group—not by a generic travel campaign.

### Core Principles
1. **Operational clarity first.** Every visual choice makes a route, service, decision, or next step easier to understand.
2. **Editorial hierarchy.** Use confident display type for statements and a calm sans for practical details, with deliberate rhythm instead of card-heavy repetition.
3. **Material warmth, not nostalgia.** Paper-like backgrounds, ink, muted green, and a single safety-orange signal color create place and trust without becoming rustic.
4. **Specificity over spectacle.** Use documentary-style scenes, route fragments, and concrete destination references. Avoid generic postcard language.

### Color Philosophy
The base is warm limestone rather than pure white: it reduces interface glare and echoes printed route sheets. Deep ink green is the trust color for headings and navigation because it suggests terrain, stewardship, and calm decision-making. Oxide orange is reserved for action and wayfinding; it should feel like a high-visibility field marker, not decoration. Muted sage and pale sand support data, process, and destination labels without competing with the single primary CTA.

### Layout Paradigm
A left-anchored editorial rail replaces the usual centered marketing grid. Each page uses wide, asymmetric compositions: a narrow metadata column, a strong content column, and occasional full-bleed imagery that breaks the rhythm. On the homepage, the hero works as a split field note: text and capability statements on the left, a tall documentary image with a pinned route annotation on the right. Sections use offset blocks and short dividers rather than uniform cards.

### Signature Elements
- **Route ticks:** tiny orange line segments and numbered markers used as section anchors, map-like metadata, and hover states.
- **Field labels:** uppercase micro-labels such as `CAPABILITY / 01` and `KENYA / ON THE GROUND` in compact sans type.
- **Notebook rules:** fine horizontal rules, corner brackets, and paper grain used sparingly to make the page feel considered and tactile.

### Interaction Philosophy
Interactions should communicate readiness and control. Buttons respond with a short press and a clear color shift. Navigation exposes the site map without drama. Destination and service links reveal their route marker on hover. Accordions and the quote form expand cleanly, preserving the reader’s position. No interaction should feel like a surprise or sales trick.

### Animation
Use short, low-amplitude transitions only: text and route markers can enter with a 20px upward settle and staggered 50ms delays; images may shift 6px on hover with a 220ms ease-out; buttons scale to 0.97 on press; accordion content uses opacity plus a modest height transition. Honor `prefers-reduced-motion`. Do not use looping parallax, large zooms, or decorative loading animations.

### Typography System
- **Display:** `Fraunces`, 600–700, used for page titles, section headlines, and a few high-intent statements. Its editorial character gives the brand a point of view without feeling playful.
- **Body/UI:** `Manrope`, 400–700, used for navigation, body copy, labels, form fields, and metadata. It is clean at small sizes and supports operational scanning.
- **Hierarchy:** eyebrow labels at 11px with 0.18em tracking; body at 16–18px with generous line height; section heads at clamp(2rem, 4vw, 4.6rem); page titles at clamp(3.4rem, 8vw, 8rem) with tight leading.

### Brand Essence
A Kenya-based destination management company for schools, NGOs, and groups that need local coordination to be as dependable as the itinerary. Personality: **grounded, exacting, observant**.

### Brand Voice
Headlines are direct and decision-led. CTAs use verbs and name the useful next step. Microcopy anticipates the information a coordinator needs to provide and avoids filler, inflated promises, and tourist-brochure phrasing.

Example headline: “The Kenya side of the trip, planned properly.”

Example CTA: “Request a route-specific quote.”

### Wordmark & Logo
The mark is a compact `67` monogram built from two offset route strokes: the 6 is a closed loop with an orange waypoint notch, and the 7 is a green diagonal that doubles as a compass bearing. The wordmark is set in uppercase Manrope with generous tracking and a small `TOURS & TRAVEL` descriptor beneath. In the UI, the mark appears as a bold square seal rather than a tiny decorative favicon.

### Signature Brand Color
**Waypoint Orange — #D96A32.** It is ownable, legible on limestone, and reserved for the moments that require movement: quote requests, route markers, active states, and the occasional field note.

## Content guardrails

All copy must lead with the reader’s decision or operational concern. Do not invent credentials, years, people, certifications, partnerships, awards, client logos, reviews, ratings, or results. Keep destinations concrete and describe them through route and program relevance. Keep one primary CTA per page: `Request a quote`.

## Style Decisions

- Every page includes at least one route-sheet artifact beyond its eyebrow label: a pinned route-sheet stamp, a route card, or a field-brief form header.
- Internal capability pages share the same editorial system but use distinct content signatures: education as a programme brief, NGO as a logistics control sheet, and safari/coast as a route handover ledger.
- The header mark is treated as a compact institutional seal, with a square silhouette and enough visual weight to register before the navigation.
