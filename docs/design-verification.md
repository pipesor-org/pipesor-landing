# Design and verification

## Direction

Taste: **The product performs**, seed **1332353459**. League Spartan display type, Figtree body, white and black fields with signal red for the primary action and failure evidence. Fonts ship locally. The product-fragment style draw was **Framed sheet**, seed **2130649728**; fragments are cropped evidence panels rather than a full application shell.

Inventory: Pipesor; AIOps; a thesis in development; CI/CD failures; pipeline logs; pipeline events; probable root causes; developer review; diagnosis time as a research goal; evidence behind an explanation. No project screenshots, benchmarks, customer proof, or product video were supplied.

Idea: **On this page, Pipesor’s proposed log-to-cause investigation becomes a readable evidence trail that visitors can explore.** The thesis status constrains the demonstration: all examples are explicitly illustrative. This is a product-specific treatment, though the evidence-trail idea is shared with the wider observability category.

The live example switches between diagnosis, logs, and events. A range input and named stage buttons walk through collection, error location, event context, and explanation. Both use the same sample investigation. The default diagnosis and first workflow stage are server rendered.

Redraws:

- Hero: the original split-sentence reel put explanatory copy at the screen bottom and required a reel that the supplied material could not honestly fill. Redrawn to **Fragment on a shaped stage**, with copy and action above the fold.
- About: **Founder’s letter** required a portrait, founder identity, and personal account not provided. Replaced with **Side facts, wide paragraph**, using research scope and status.

- FAQ: the separate answer pane conflicted with native disclosure layout after reload in Chrome. Replaced with **Accordion of filled tiles** so answers remain in document flow.

House-rule adjustments: the footer returns the large product name; the FAQ uses native exclusive disclosures with inline answers at every width. The evidence statement sticks alongside its source rows on desktop. A small scroll-linked movement on the hero panel and 18 observed section entrances provide motion, with reduced-motion support. No scroll scenes were dealt.

## Argument and copy

| Section | Claim | Evidence |
| --- | --- | --- |
| Failed pipeline. Clearer diagnosis. | Pipesor explores CI/CD failure diagnosis. | Labeled, interactive sample investigation. |
| Follow the evidence | A diagnosis needs logs and event context. | Four explorable stages of one failed run. |
| A cause you can inspect | A probable cause should be reviewable. | Failed job, authentication evidence, next checks. |
| Research, in progress | This is a thesis with an evaluation goal. | Explicit scope and unvalidated status. |
| Project questions | Visitors need clear boundaries. | Answers on availability, integrations, remediation, evaluation. |

The primary action is **Explore example** and links to the local demonstration. No signup or invented contact address is used.

Imagery consists of five HTML interface fragments: the hero diagnosis, workflow evidence, failed job, registry response, and next check. No found or bundled photography, generated raster artwork, stock footage, or external image assets are used, so no image credits are needed. The mark and favicon are original code-drawn P symbols. Replace the sample fragments with confirmed product output when available.

## Technical verification

- `bun run check`: zero errors, warnings, or hints.
- `bun run test`: two sample-rendering/data tests pass; existing commit-message checks pass.
- `bun run build`: static production build succeeds.
- Taste source lint: zero failures and warnings.
- Context7 was available; Astro React configuration and client hydration were verified against its documentation.

## Browser verification

The production build was served with Astro preview and inspected with the configured Chrome DevTools MCP, using Windows Chrome. Full-page screenshots were opened at **1440×900**, **768×1024**, and **390×844**. A further **320px** check found no horizontal overflow. All three main layouts have no horizontal overflow, and the hero remains two lines.

Verified all three investigation views, all four workflow stages, a range change with the ArrowRight key, all four FAQ answers, and all local anchor destinations. The browser reported no warnings or errors. Local fonts loaded. A reduced-motion phone check showed `scroll-behavior: auto`, no running animations, and visible content. The normal desktop scroll recorded 18 section entrance animations.

The final mobile Lighthouse audit reported **100 accessibility, 100 best practices, 100 SEO**, with 49 passed audits and zero failed audits. Performance was not audited; these are automated checks, not a substitute for assistive-technology testing.

Taste’s standalone `inspect.mjs` was attempted but could not launch: no Linux Chrome executable is installed. Instead, its unmodified `probe` and `layout` functions were evaluated through Chrome DevTools, and their results passed through Taste’s `judge` and `judgeLayout` functions locally. Those checks reported **zero FAILs at 1440, 768, and 390**. This is not a claim that the complete standalone inspector ran.

Remaining measurement warnings and rationale:

- Typeface count includes the system monospace used only for real log/code blocks, an explicit house-rule exception.
- Size count includes application fragment text and the oversized product wordmark; marketing content still uses display, heading, lead, body, and secondary roles. Further consolidation is possible.
- No photography or footage: no physical subject or confirmed product video was supplied; readable HTML evidence fragments carry the software story.
- Desktop/tablet optical-margin warnings: direct DOM measurements confirmed matching section margins (32px on each side, within 0.34px rounding). The text-based probe also includes the scrollbar and shorter text endpoints.

## Screenshot critique

ROUND 1

Seen in one second: a failed pipeline and a plausible diagnosis.

Idea (one sentence): Follow one sample run from failure to evidence and a next check.

Live thing: investigation views and a four-stage walkthrough.

Layout words by section: hero=offset stage / workflow=interactive split / evidence=stacked source rows / research=facts and statement / questions=disclosures / footer=large name.

Scores: design 7 · usability 8 · creativity 7 · content 8 → overall 7.4.

Caps applied: none; no unsupported proof or clipped content observed.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. Desktop evidence rows looked too thin in the first desktop full-page screenshot. Added concrete job statuses, error timestamps, and a verification step.
2. The research statement ran four lines at tablet width. Shortened it to “Less searching. More context for the developer.”
3. Desktop FAQ answers were confined to the question column. Tried an adjacent answer pane; the reload check exposed overlap, so the final version uses filled native disclosures.

ROUND 2

Seen in one second: a professional CI/CD diagnosis research concept with an explorable example.

Idea (one sentence): The thesis’s proposed investigation becomes a traceable sample evidence trail.

Live thing: switch evidence views, then follow the diagnosis stages.

Layout words by section: hero=offset stage / workflow=interactive split / evidence=pinned statement and source stack / research=facts and statement / questions=filled disclosures / footer=large name.

Scores: design 7.5 · usability 8.5 · creativity 7 · content 8 → overall 7.8.

Caps applied: none after fixing the disclosure overlap found in the last screenshot pass. Scores are a self-critique, not an independent jury result.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. The final desktop hero has substantial air below the short left column. It supports the offset composition, but confirmed product media could make the first screen stronger.
2. The final tablet workflow wraps long log lines. Content remains readable; a future real log viewer could offer line expansion.
3. The final phone page is a long read. All sections carry relevant content, but actual evaluation results should eventually replace some conceptual explanation.

## Remaining scope

This delivers the landing page, not the AIOps engine. No live CI/CD connection, upload processing, AI model calls, remediation, or lead-capture backend was implemented. The sample service, build number, timestamps, and errors must remain labeled until replaced by real product output. No commit, push, or publication was performed.
