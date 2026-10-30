# Landing refinement and acceptance verification

This records the previous broad verification pass. The [focused refinement](focused-refinement.md) supersedes its screenshot-viewer, form-validation, workflow, branding-frame, and footer descriptions. Its full audit, performance trace, and Lighthouse results were not repeated for the focused iteration.

Verified on 30 October 2026 against the static production preview at `http://localhost:4321`. The [approved brief](landing-page-brief.md) remains the product and brand source of truth.

## Audit and changes

- **P0:** Preserve prototype/demo disclosures, independent diagnosis validation and incident lifecycle, and disabled registration. Screenshot browsing must not imply a live integration.
- **P1:** The non-sticky navigation disappeared while reading; plain preference controls lacked clear selection feedback. The hero introduced the product too low, and the middle repeated one heading-plus-screenshot composition.
- **P1:** Reduced desktop screenshots were hard to inspect on phones. Use meaningful evidence crops and an authentic screenshot viewer.
- **P2:** Give the form and footer a deliberate close without inventing contact, legal, or commercial information.

The result has sticky navigation; EN/ES selection; native System/Light/Dark radios; a stronger split hero and large product stage; a keyboard-operable three-view screenshot gallery; a tonal uncertainty close-up; an operational-memory split; clearer disclosures and form presentation; and a large unmodified footer wordmark.

Phone/tablet navigation uses a stable two-row grid. Anchor and skip targets clear it. Phone crops show actual diagnosis evidence. Full-contrast captions fix the initial 4.3:1 contrast on tinted stages. Functional hover, focus, press, and selection states accompany restrained entrances; reduced motion removes travel. The form logic, disabled submission, static stack, approved tokens, and supplied logos are preserved. No dependencies, backend, analytics, or deployment configuration were added.

Engineering implemented the refinement, quality independently verified it, repository support audited release requirements, and the coordinator integrated the final fixes. Existing user edits to `AGENTS.md`, `README.md`, and `.codex/` were preserved.

## Taste direction and argument

Direction: **The product performs**, seed **740878643**, with brand palette and type kept. The current sheet is [direction.json](../.taste-skill/direction.json).

Inventory: the Pipesor mark; GitHub Actions failures; team-owned workflows; local incident fixtures; confidence; inconclusive diagnosis; separate Needs Validation; human remediation; resolved history; Insights Preview; EN/ES; system/light/dark preferences.

Idea: **On this page, Pipesor's inconclusive diagnoses and separate Needs Validation queue become an evidence viewer for its diagnosis story.**

The live thing is the native radio screenshot gallery: Active Incidents, Human Review, and Incident History. Thumb selection and keyboard arrows work without JavaScript. It changes the capture being viewed, not product data or operational state. Full-resolution image links remain available. The History link selects the history capture.

The argument follows its proof: diagnosis needs context (Operations hero); investigation ends in human judgment (four-stage flow); different queues answer different questions (gallery); insufficient evidence is visible (diagnosis close-up); context survives a shift (history and experimental Insights); registration remains forthcoming (disabled local form). The bilingual copy deck lives in `src/i18n/content.ts`.

Eight redraws were recorded:

1. Three hero redraws rejected a page-reading control, an overwhelmingly empty narrow column, and live typography controls: each contradicted supplied assets, product scope, or the brief. The final **Fragment on a shaped stage** supplies the large product-stage composition.
2. How-it-works changed from an unavailable progressing ticket to the fragment/sequence alternative, adapted into the brief's compact static flow.
3. Showcase changed from an unsupported typed query/answer to an output index of genuine screenshots.
4. Features changed from configurable live output to evidence panels and explanatory notes.
5. CTA changed from a functional inline submission to the first-step composition with the approved disabled form.
6. Footer changed from legal/contact/location tiles with unavailable content to columns and a large supplied wordmark.

The approved compact radii, technical identifiers, screenshot borders, and minimal motion override conflicting generic house rules. No fake product UI, parallax, scroll-jacking, looping background, or third-party animation package was introduced. No scroll scenes were dealt, so the scenes gate does not apply.

## Imagery

All images are supplied Pipesor artwork. No found photography, footage, generated artwork, stock image, or replacement drawing is used; no external image credits are required.

| Asset | Use |
| --- | --- |
| `operations.webp` | Hero and Active Incidents gallery |
| `validation.webp` | Default Human Review gallery |
| `uncertainty.webp` | Actual diagnosis-row close-up |
| `history-en.webp` / `history-es.webp` | Localized Incident History gallery |
| `insights-en.webp` / `insights-es.webp` | Localized experimental Insights Preview |

Four real product pictures are visible by default. CSS crops preserve the represented functionality; responsive resolution hints keep close-ups sharp. Images have intrinsic dimensions, demo labels, descriptive alt text, captions, and full-size links.

The captures are light desktop UI. They remain authentic light images in dark mode. Operations, validation, and uncertainty are explicitly labeled as English interfaces on the Spanish route; History and Insights use supplied Spanish captures. No native dark/mobile product captures were supplied. All displayed numbers remain illustrative fixture data.

## Validation

| Check | Result |
| --- | --- |
| `bun run check` | 0 errors, warnings, or hints |
| `bun run test` | 3 rendering/localization tests and commit-message checks pass |
| `bun run build` | Both static routes and responsive images build |
| `bun run wrangler deploy --dry-run` | Pass; 63 static files read; no deployment |
| `git diff --check` | Clean |
| Taste source lint | 0 FAIL, 0 WARN |
| Final production Taste inspector | 0 FAIL, 1 WARN at 1440/768/390 |
| Context7 | Available; Astro responsive Image guidance consulted |
| Chrome DevTools MCP | Available; production-preview checks completed |

Linux has no Chrome executable. Under the user's explicit exception, the unmodified inspector ran with installed Windows Node/Chrome. Upstream skill files were unchanged. The final command used `--allow outlined-box,still-page`: screenshot/control edges and restrained section motion follow the approved brand brief. The only remaining warning is `no-footage`: no honest Pipesor footage was supplied, and unrelated looping footage would not explain this interface.

The first inspector run found a stale font-direction warning; updating the root direction sheet removed it. The final run confirms Sora loaded correctly. Every final inspector screenshot was opened.

Ignored evidence is in `.taste-skill/refine/before/`, `.taste-skill/refine/inspect/`, and `.taste-skill/refine/after/`. Quality artifacts are `quality-matrix.json`, `quality-interactions.json`, and `quality-responsive-final.json`.

### Browser verification

EN/ES × light/dark × 1440/1024/768/390/320: **20 combinations**. After the last header-grid/footer fix, the affected 768/390/320 cases were checked again.

- Zero horizontal overflow, clipped header controls, missing alt attributes, broken anchors, or h1–h3 headings beyond two lines.
- One h1. Section/skip targets clear the sticky header. The two-row header groups consistently; footer branding spans the content frame.
- Keyboard theme selection, reload persistence, OS preference changes, and language section-hash preservation pass.
- Gallery arrows select one genuine screenshot without scroll jumps. History selection/focus and FAQ Enter behavior pass.
- Invalid email is rejected; valid input gives localized local-only feedback. Submission remains disabled. No email storage or submission request was observed.
- Script-free production HTML retains reading, CSS gallery selection, disabled submission, and noscript guidance.
- Reduced motion has zero running animations and automatic scrolling.
- Full-size image URLs respond successfully. No console errors or warnings observed.
- Four Lighthouse mobile **snapshot** audits, EN/ES × light/dark: 100 accessibility, best practices, SEO, and agentic browsing; 37 passed, zero failed. Snapshots exclude navigation-only checks and do not establish full WCAG conformance.

One cold-cache mobile trace on the final build measured **LCP 2,313ms and CLS 0.00**, at 390px with Slow 4G, 4× CPU slowdown, and HTTP cache bypassed. This is a local lab observation, not a field guarantee or a product diagnosis-performance claim.

### Before and after

| Measure | Before | Final |
| --- | --- | --- |
| Desktop header | Non-sticky, 96px | Sticky, 80px |
| Phone header | Non-sticky, 164px | Sticky, about 121px |
| Desktop hero media in first viewport | 30% | 41% |
| Product presentation | Repeated static screenshots | Three-view viewer and varied evidence compositions |
| Phone evidence | Whole desktop UI reduced to fit | Readable diagnosis crops with full-size links |

## Screenshot critique

ROUND 0

Seen in one second: a technical heading above a sequence of product screenshots.

Idea (one sentence): real captures explain an evidence-backed diagnosis prototype.

Live thing: local email-format preview and native disclosures.

Layout words by section: hero=title and screen / workflow=columns / uncertainty=heading and screen / validation=heading and screen / history=heading and screen / FAQ=disclosures / access=inset form.

Scores: design 6.5 · usability 7.5 · creativity 6 · content 8.5 → overall 6.9.

Caps applied: creativity limited by the repeated software-page composition.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. Before fold captures: product evidence starts too low. Move supporting copy beside the desktop headline and remove the sparse audience aside.
2. Before full-page captures: the middle repeats one geometry. Introduce an index, close-up, and memory split.
3. Before mobile fold: plain controls and disappearing navigation weaken orientation. Add sticky navigation and explicit preference states.

ROUND 1

Seen in one second: a stronger promise beside a real product stage.

Idea (one sentence): an evidence viewer connects uncertainty, review, and operational context.

Live thing: native three-view screenshot selection.

Layout words by section: hero=split and stage / workflow=flow / product=index and screen / uncertainty=tonal close-up / memory=split / FAQ=disclosures / access=field and form / footer=wordmark.

Scores: design 7 · usability 7 · creativity 7 · content 8.5 → overall 7.2.

Caps applied: usability held down by the wrapping phone header and covered anchors.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. Round-one mobile fold: three-row header. Use a deterministic two-row grid and shorter header CTA label.
2. Round-one phone evidence: the crop shows navigation instead of diagnosis. Reposition the authentic image over its evidence column.
3. Round-one tinted stages: captions measure 4.3:1. Use full ink; correct the responsive anchor offsets and Spanish closing heading found during verification.

ROUND 2

Seen in one second: CI/CD diagnosis supported by readable product evidence.

Idea (one sentence): Pipesor's uncertainty and independent review queue become material a visitor can inspect.

Live thing: keyboard- and thumb-operated browsing of genuine incident, review, and history captures.

Layout words by section: hero=split and stage / workflow=flow / product=index and screen / uncertainty=tonal close-up / memory=split / FAQ=disclosures / access=field and form / footer=large wordmark.

Scores: design 7.5 · usability 8.5 · creativity 7 · content 8.5 → overall 7.8.

Caps applied: creativity stays at 7 because screenshot-led software storytelling is an established approach; the approved motion constraint overrides the generic motion floor.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. Final phone gallery: full table text is small. Evidence close-ups and full-size links provide a fallback; authentic phone captures would improve it.
2. Final dark captures: light product images contrast strongly with the page. Retain fidelity until genuine dark captures are supplied.
3. Final form: registration remains unavailable. This is disclosed accurately; activating it requires the approved data-handling destination and privacy process.

All final inspector images and final locale/theme captures were opened. Tablet header grouping and footer-logo sizing defects found in the visual pass were fixed and rechecked. Scores are self-critique, not independent jury results.

## Publication status

This report records verification before Git publication. The owner subsequently authorized committing the approved iterations, pushing a review branch, and opening a pull request. No production deployment or production configuration change is authorized.

Suggested commit: `feat(landing): refine product storytelling and navigation`.

Planned scope: Landing, ProductImage, localized content, global styles, the current direction sheet, this document, and the README clarification. Review existing user agent-setup changes separately when staging.

Before publication:

1. Obtain explicit production deployment approval under `AGENTS.md` and the README. Commit, review-branch push, and pull request submission have been approved.
2. Approve final EN/ES copy and the production host. Set `SITE_URL` and rebuild so canonical, alternate, and social metadata use that origin.
3. Ensure the documented commit hook is configured before committing; the clone's `core.hooksPath` is now `.githooks`.
4. Keep registration disabled until entity, data handling, privacy disclosures, and destination are approved. Legal/contact details and analytics remain omitted while unapproved.

Real hardware, other browser engines, screen readers, field performance, and full WCAG conformance were not independently verified.
