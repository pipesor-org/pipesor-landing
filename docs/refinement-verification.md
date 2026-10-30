# Landing refinement and acceptance verification

Source of truth: [landing-page-brief.md](landing-page-brief.md), supported by read-only inspection of `pipesor-frontend/src/app/styles/tokens.css`, its branding SVGs, and incident fixtures. No files in that repository were modified. The approved Paper source was not directly accessible; unimplemented Incident Workspace design exports were deliberately excluded.

## Prioritized audit

- **P0:** The previous invented P mark, red accent, fabricated interface, and older provider-agnostic messaging contradicted the current brand and product scope. Early access, EN/ES, and theme support were missing.
- **P1:** Typography and large empty areas did not match the product's compact engineering interface. Restore Sora, JetBrains Mono identifiers, the blue accent, restrained surfaces, and authentic demo evidence.
- **P2:** Supply favicon derivatives, local font licenses, social artwork, and localized metadata without inventing a domain, contact channel, or legal entity.

The user authorized routine implementation; no new approval was needed to apply the brief's already-approved direction.

## Change rationale

1. Restored the exact light/dark product tokens and unmodified monochrome SVGs (§5). Removed the invented mark, red marketing accent, old font packages, and fabricated diagnosis components.
2. Rewrote the promise around GitHub Actions failures → incident → diagnosis with confidence → human review (§§1–3). Prototype/demo status and unavailable registration are visible beside the hero action.
3. Used genuine product captures (§§4, 7), with demo labels, meaningful alt descriptions, intrinsic dimensions, responsive WebP delivery, and full-resolution links. Screenshots contain fixture data, not adoption or performance proof.
4. Kept lifecycle, human diagnosis validation, severity, and pipeline properties distinct (§1). Explained inconclusive diagnoses and labeled Insights Preview experimental (§11).
5. Replaced the large empty hero with a compact title, audience context, action, and dominant product image (§5.3). The flow, evidence crops, native disclosures, and form use the product's spacing and radius scale.
6. Rendered `/` and `/es/` through one Astro page component using native Astro i18n routing (§§8, 11). Language links preserve the section anchor. Headlines remain concise in both languages.
7. Applied system/light/dark preferences before visible rendering and persisted only the theme under `pipesor.theme` (§11). Keyboard selection and OS preference changes work.
8. Built a safe form preview (§11): native email validation, explicit local-only feedback, permanently disabled submit, no submission endpoint, no field name, no data storage or external service. React hydrates only this small island near the viewport.
9. Added approved-brand favicon derivatives, a 1200×630 social card rendered with Sora and the unmodified lockup, font OFL licenses, and origin-configurable canonical/hreflang/Open Graph URLs (§7).
10. Preserved accessibility and restrained motion (§§5.4, 8): visible accent focus rings, one h1, semantic sections, native keyboard-operable controls, descriptive screenshots and text equivalents, and reduced-motion rules. No parallax, looping decoration, analytics, or third-party requests were introduced.

## Taste methodology

Direction: **The product performs**, seed **1079362392**, with palette and type kept from the approved brand. The chosen composition lets real operational evidence carry the explanation. No direction redraws were made. The screenshot source requirement overrides the dealt interactive-fragment suggestion; the brief's density, typography, borders, and minimal motion override conflicting generic house rules. The form preview adapts “First step, already open” while keeping submissions disabled.

Inventory: the approved interlocking mark; GitHub Actions; team-owned workflows; incident assignees; read-only access; local fixtures; probable causes with confidence; an inconclusive state; independent Needs Validation; resolved history; experimental Insights Preview; EN/ES and theme parity.

Idea: **On this page, Pipesor's operational evidence becomes the proof of its diagnosis story.** The live element is the local-only early-access form preview, alongside native disclosures and full-size screenshot links. No interactive product functionality is simulated.

Argument: a failing workflow needs context (hero Operations screenshot); an investigation has four distinct stages (ordered workflow); uncertainty is explicit (genuine inconclusive-row crop); human review is separate (Needs Validation screenshot); context survives rotations (History and provisional Insights); registration remains gated (form preview). The bilingual copy deck is maintained in `src/i18n/content.ts`.

### Assets

All images are project-supplied; no found photography, footage, AI artwork, or attribution-sensitive stock is used. Source PNGs remain intact in `temp/`. Crops remove outer empty canvas or isolate an actual table region; no product text or behavior is altered. The new WebP copies are in `src/assets/product/`:

| Asset | Supplied source |
| --- | --- |
| operations.webp | operations_queue=active_EN |
| uncertainty.webp | The header and first three incident rows of the same Active Incidents capture |
| validation.webp | operations_queue=validation_EN |
| history-en.webp / history-es.webp | history_view=incidents_EN / ES |
| insights-en.webp / insights-es.webp | history_view=insights_EN / ES |

The available captures are light-theme desktop images. The page does not invert or reconstruct them in dark mode. Operations and validation remain English on both routes, explicitly labeled “English interface” in Spanish; History and Insights use the supplied Spanish captures. No dark/mobile captures were available. Product screenshots are exceptions to the no-text-in-images rule: equivalent claims are provided in HTML, captions, and alt descriptions.

## Technical checks

- `bun run check`: zero errors, warnings, or hints.
- `bun run test`: three rendering/localization tests pass; existing commit-message checks pass.
- `bun run build`: both static routes and responsive images build successfully.
- Taste source lint: zero failures and warnings, with documented source exceptions for the brief's required identifiers, borders, and reading dividers.
- Context7: available; current Astro native i18n routing guidance consulted.
- Approved SVG copies were preserved byte for byte. `pipesor-frontend` remained clean.

## Browser verification

Chrome DevTools MCP inspected the **production preview**, not only the development server. Full-page desktop/mobile screenshots were opened for both locales and themes. Automated measurements covered **16 combinations**: EN/ES × light/dark × 1440/1024/768/390 pixels.

| Check | Result |
| --- | --- |
| Horizontal overflow / clipped headings | None across the matrix; all headings at most two lines |
| Theme selection and persistence | Keyboard End/Enter selected dark; dark persisted on reload |
| System preference | System followed light → dark → light OS emulation changes |
| Language switch | Navigation to `/es/#workflow` preserved the current section and preference |
| Form validation | Invalid input rejected; valid input produced localized local-only feedback; submit stayed disabled |
| No data collection | No email in localStorage; only `pipesor.theme`; no submission request in the inspected network log |
| Native disclosures | Insights Preview opened with Enter, loaded the genuine screenshot, and displayed the experimental/demo caption |
| Anchors and semantics | No broken local anchors; one main and h1; no missing image alt attributes |
| Reduced motion | No running animations; no scroll motion dependencies |
| Browser errors | No console errors or warnings observed |
| Lighthouse navigation audits | EN and ES: 100 accessibility, 100 best practices, 100 SEO; 56 passed, zero failed |
| Theme accessibility snapshots | Spanish light and dark: 100 accessibility; zero failed snapshot audits |

A first cold-cache trace exposed font-swap layout shift. Preloading the three used Sora weights removed it in the final measured run: **LCP 1,992ms and CLS 0.00**, mobile 390px, Slow 4G, 4× CPU slowdown, cache bypassed. This is a local lab observation, not a field guarantee or a claim about Pipesor's diagnosis performance. Other devices, deployment infrastructure, browsers, and screen readers have not been independently tested.

### Taste inspection limits

The standalone `inspect.mjs` was attempted and could not launch because no Linux Chrome executable exists; Chrome is provided through the Windows DevTools connection. Taste's unmodified `probe` and `layout` functions were therefore evaluated through MCP, then judged locally. Findings and screenshots are saved under `.taste-skill/refine/after/` (ignored artifacts).

With the explicit brand exceptions `hairline` and `outlined-box`, and a documented mobile `eyebrow` false positive, those measurements reported **zero remaining FAILs in all 16 combinations**. The eyebrow detector mistakes a full-size screenshot link inside the native Insights disclosure for a label above the following FAQ; no such eyebrow appears in the screenshots. This is not a claim that the complete standalone inspector ran.

Remaining warnings: no footage is supplied or warranted by the brief; desktop optical margins differ because the probe measures text endpoints and includes the scrollbar. The actual content frame uses equal margins and a 1200px inner maximum. Motion-count expectations from Taste are intentionally superseded by the brief's minimal functional motion requirement.

## Screenshot critique

ROUND 1

Seen in one second: a bold diagnosis concept with a red invented identity.

Idea (one sentence): a sample investigation shows a probable cause.

Live thing: fabricated diagnosis and workflow switches.

Layout words by section: hero=offset panel / workflow=split / evidence=stack / research=split / FAQ=accordion / footer=large type.

Scores: design 6 · usability 7 · creativity 6 · content 5 → overall 6.2.

Caps applied: content capped at 5 because messaging and represented functionality conflict with the current product brief.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. Before desktop: invented red P identity contradicts approved assets. Restore exact logos, type, and tokens.
2. Before desktop/mobile: fabricated evidence panels imply an experience different from the product. Use genuine labeled screenshots.
3. Before mobile: no Spanish, theme selector, or early-access form. Implement equivalent routes, preferences, and a safe disabled form preview.

ROUND 2

Seen in one second: a calm GitHub Actions diagnosis prototype with visible demo status.

Idea (one sentence): actual incident evidence supports a story about uncertainty and human review.

Live thing: a locally validated early-access preview with no submissions.

Layout words by section: hero=title and product stage / workflow=ordered flow / uncertainty=table crop / validation=review queue / history=archive and disclosure / FAQ=reading list / access=inset form.

Scores: design 7.5 · usability 8.5 · creativity 7 · content 8.5 → overall 7.9.

Caps applied: none after correcting the initial refinements. Scores are self-critique, not independent jury results.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. First Spanish phone capture: image labels and open links ran together. Stack them with an explicit gap on phones.
2. Tablet measurements at 768px: two Spanish headings wrapped to three lines. Stack the narrow heading/form columns at the product's 800px breakpoint.
3. Initial light form capture and contrast measurement: secondary text on the tinted form was below 4.5:1. Use primary ink for the field hint.

Final desktop and phone screenshots in both themes were opened after those fixes. No further visible defect was found. Remaining visual limitations are the small screenshot text on phones (full-size links are available) and the lack of supplied dark/mobile product imagery.

## Acceptance and unresolved requirements

The required messaging, primary action to the local form preview, prototype labels, brand tokens, typography, radii, unchanged logos, EN/ES routes, theme behavior, keyboard controls, alt descriptions, contrast checks, responsive widths, console checks, and local lab LCP target were verified. Repeated primary buttons all lead to the same early-access section; the hero's secondary action is an in-page text link. No unsupported metrics, third-party platform promises, fabricated product UI, legal details, contact channels, pricing, or analytics were added.

The following remain intentionally unresolved:

- **Public registration:** disabled pending responsible entity, data handling, privacy disclosures, and the submission destination. No live backend is implemented.
- **Final origin:** the owner has not selected a domain. Builds use the actual local preview origin by default; set `SITE_URL` and rebuild before any future publication. Production metadata and hosting cannot be finalized until then.
- **Copy approval:** the EN/ES copy is a conservative factual draft, not a claim of owner editorial approval.
- **Assets:** dark/mobile product captures and Spanish Operations/validation captures were not supplied; no replacements were invented.
- **Legal/contact/analytics:** omitted while unapproved, as required. No legal review or full WCAG conformance audit is claimed.

No commit, push, deployment, or publication was performed.
