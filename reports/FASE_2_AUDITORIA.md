# Phase 2 — Landing page category audit

Assessment date: 1 November 2026, America/Lima; new production requests: 2 November 2026 UTC, approximately 01:36–01:38. Production: <https://pipesor-landing.jhon-galvezchambi.workers.dev/>.

## Scope, method and evidence

This document evaluates **only Phase 2**, categories A–H of the master brief. It uses [the Phase 1 diagnosis](FASE_1_DIAGNOSTICO.md), reinspection of the connected source, additional read-only production requests, dependency checks, and official guidance. It deliberately contains **no category/global score, weighted compliance calculation, prioritized backlog, effort estimates, or roadmap**; those belong to later phases. No application code, configuration, dependencies, environment files, or production settings were changed. No deployment or real form submission was performed.

Current checkout: `5f3360f` (`docs(readme): standardize repository onboarding (#4)`). The Phase 1 baseline was `d787133`; `git diff --stat d787133 HEAD -- src public tests astro.config.mjs wrangler.jsonc package.json bun.lock .github` returned no application/configuration differences. Both newly retrieved production documents have the same SHA-256 as Phase 1:

- EN: `e8b4ad61ef66003a754204e2fc96953d61defbed8b3242f1adf9cae9b0333583`.
- ES: `51e75610e5249becc5ad7d9cbeb17d597ea8d27ca13020306fd2a083c54bc908`.

This supports reusing Phase 1 evidence for the inspected application. It does not identify the remote deployment commit. The Phase 1 report was preserved.

The product remains an early-stage AIOps thesis prototype for evidence-backed GitHub Actions incident diagnosis, with illustrative screenshots and human validation. The provisional audience is CI/CD-owning engineering/platform/DevOps teams. Intended conversion is early-access registration; actual submissions are intentionally disabled pending owner-approved data handling and destination. These constraints come from `docs/landing-page-brief.md:248–251,273–288`. They constrain recommendations throughout this audit.

### Reading the statuses

| Status | Meaning |
| --- | --- |
| **Correct within evidence** | The specified property was verified in source or HTTP. This is not a browser or overall compliance certification. |
| **Defective — confirmed** | A directly observed implementation or public-response error. |
| **Partial** | Some requirements are implemented; important behavior or coverage is incomplete. |
| **Absent** | The feature is missing. The text states whether it is required, intentional, or optional. Absence alone is not a defect. |
| **Not verifiable** | The required measurement, tool, access, or observation was unavailable. It is not counted as passed. |
| **Recommendation / hypothesis** | A proposed improvement or conditional concern, not a demonstrated business result or failure. |
| **Not applicable** | The behavior does not exist in the current approved scope, with the reason stated. |

Objective code/HTTP evidence, numerical CSS calculations, heuristic copy/UX judgments, and unmeasured CRO hypotheses are kept distinct. Repeated effects of a shared cause are cross-referenced, rather than presented as unrelated implementation work.

### Evidence ledger and new verification

| Evidence | Result and limits |
| --- | --- |
| Phase 1 execution | Frozen install, Astro check, static build and Wrangler dry run succeeded as documented there. Three content/form tests passed; the overall test command stopped because standalone Lefthook was missing. These commands were not rerun in Phase 2 because application/tooling files did not change. |
| Production GETs | EN/ES 200; `/es` 307 to `/es/`; nonexistent route 404 with empty body; robots 200; sitemap 404. Metadata still references localhost. |
| Initial HTML parsing | Each locale has one H1, no duplicate IDs, no broken fragment target, seven `img` elements with alt attributes (including the initially empty image in the closed dialog). No meta robots or external `script src` was found. |
| Additional redirect checks | `/index.html` → 307 `/`; `/es/index.html` → 307 `/es/`. **Plain HTTP `/` returns 200 rather than redirecting, with bytes identical to HTTPS.** |
| External links, anonymous | Public repository URL 404; both contributor profiles 200. No authenticated GitHub inspection was used. |
| Repeated CLI timings | Three compressed GET samples per localized route, reported in B. No browser, mobile device, or network/CPU throttling. |
| `bun audit --json` | Exit 0, output `{}`: no advisories reported by the registry response for this lockfile. No fixes or updates requested. This does not exclude unknown vulnerabilities or application-level flaws. |
| `bun outdated` | Exit 0; Wrangler `4.156.0` versus latest `4.156.1`; TypeScript `6.0.3` versus latest `7.0.2`. No other outdated package was listed. This is not evidence of a vulnerability. |
| Taste source lint | `bun .agents/skills/design-taste-frontend/scripts/lint.mjs src`: nine files, 0 FAIL, 0 WARN. This evaluates selected source patterns, not rendered design or WCAG. |
| CSS contrast calculation | sRGB relative-luminance calculations for explicit foreground/background tokens; values and limitations in D. No screenshot pixel sampling or computed-style verification. |
| Chrome DevTools MCP retry | `new_page` for production failed: unable to fetch Chrome WebSocket information from `127.0.0.1:9222`, connection timeout. Browser-dependent checks remained blocked. |
| PageSpeed Insights fallback | Public `runPagespeed` API requested for production EN, mobile, performance category; returned HTTP 429 with daily quota exceeded. No `lighthouseResult` was returned. No score, trace or field-data result was obtained. Repeating desktop requests against the exhausted quota was skipped. |
| Context7 and official references | Cloudflare Workers library resolved and queried for Static Assets headers/caching. Google Search Central, W3C, web.dev, Cloudflare, MDN and Bun documentation were consulted for the judgments below. |

Earlier repository Lighthouse scores and traces are historical and are **not** presented as current results. No fresh Lighthouse, axe, assistive-technology, browser console, browser network, keyboard or screenshot audit ran successfully. The design skill's visual critique requires rendered screenshots; no visual jury score or invented screenshot finding is provided. Approved brand constraints take precedence over optional stylistic preferences.

## A. Technical SEO

Assessment basis: [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), and [localized-version guidance](https://developers.google.com/search/docs/specialty/international/localized-versions). HTTP accessibility and supplied metadata are observable; rankings, Google-selected canonicals and actual indexing require search-platform evidence.

| Criterion | Status | Evidence and evaluation |
| --- | --- | --- |
| Unique descriptive titles | Correct within evidence | EN “Pipesor — Evidence-backed CI/CD diagnosis”; ES “Pipesor — Diagnóstico CI/CD con evidencias”. They identify product and topic and differ by language (`content.ts:3,65`; `Landing.astro:44`). No arbitrary character limit is treated as a hard ranking rule. |
| Meta descriptions | Correct within evidence | Localized descriptions explicitly describe GitHub Actions, evidence, human validation and prototype/demo status (`content.ts:4,66`; `Landing.astro:37`). Whether Google displays them is not verifiable. |
| H1/H2/H3 hierarchy | Correct within source/HTML | One H1 per locale; H2s identify main sections, H3s workflow/form, H4s diagnosis branches. No rank jump was found in parsed initial HTML. Closed disclosure/dialog headings are not proof of their rendered accessibility exposure. |
| Canonical URLs | **Defective — confirmed** | Production canonicals point to `http://localhost:4321/` and `/es/`. Cause shared with hreflang/social URLs: `astro.config.mjs:5`; `Landing.astro:39–42`. See A1. |
| Robots.txt | Partial | Production returns 200 with comments about content signals; no active crawler disallow rule or sitemap declaration in the captured body. No repository robots asset exists. Its edge provenance/settings remain unverified. A missing repository file is not equivalent to a production block. |
| Sitemap XML | Absent; contextual recommendation | `/sitemap.xml` and Phase 1 `/sitemap-index.xml` return 404; no integration/file exists. A sitemap would make discovery/submission explicit, but a small, linked two-page site does not automatically require one to be indexable. |
| Meta robots/noindex | Correct within sampled public HTML | No noindex meta or `X-Robots-Tag` in EN/ES responses. An explicit `index,follow` is not necessary. Preview-host directives and bot-specific policies were not inspected. |
| Indexability | Partial / not verifiable end to end | Public 200 documents contain content and no observed noindex. Incorrect canonicals/hreflang weaken signals. No Search Console, URL Inspection or verified Googlebot access test; actual inclusion/exclusion is unknown. |
| HTTP status and redirects | Partial | Valid routes 200; `/es`, `/index.html` and `/es/index.html` normalize via 307; nonexistent routes 404. HTTP origin also serves 200, creating an additional reachable scheme version; see H1. A stable 301/308 normalization can be considered, but 307 alone is not proof of SEO failure. |
| Internal links | Correct target structure; runtime partial | All fragment targets exist in both initial documents; locale links point to `/` and `/es/`. Scroll/focus and header overlap are unverified (`Landing.astro:55–76,105–137`). |
| Broken links | **Defective — confirmed** | Footer public repository destination returns anonymous 404 (`Landing.astro:124`). Contributor profile links return 200. Cause may be privacy, rename or missing repository; not established. |
| URL quality | Correct within scope | Short EN root and ES subdirectory, without query-driven localization. No requirement to add an `/en/` route. Custom domain is an owner decision, not an automatic migration requirement. |
| Open Graph | Partial / defective image destination | Title, description, type, locale, image dimensions/alt exist. `og:image` points to localhost; the public asset itself exists. `og:url` is absent: completeness recommendation, not a proven ranking defect (`Landing.astro:39`). |
| Twitter/X Cards | Partial | `summary_large_image` exists; OG title/description/image can supply shared metadata. The inherited OG image destination is unusable externally. No real social crawler/share-debugger validation was available. Separate duplicate Twitter tags are not inherently required. |
| HTML language and hreflang | Partial / defective alternates | Correct `lang=en/es`; both pages list EN, ES and x-default, but every alternate points to localhost. Fix the shared origin rather than treating this as three independent bugs. `og:locale` uses en_US/es_ES; regional audience fit is not established. |
| Structured data JSON-LD | Absent; optional | No JSON-LD. Evaluate truthful software/project markup only if it serves a supported search feature. No requirement to invent Organization details, prices, ratings or reviews. Generic FAQ markup is not assumed to earn a rich result. |
| Image alt text | Correct baseline; visual equivalence partial | All product images have descriptive localized alt text; logo links have accessible names. The closed viewer starts with empty alt and gets thumbnail alt on open. Fine-grained screenshot information equivalence is not fully verified. ES social-image alt is English (`Landing.astro:39`). |
| Content in initial HTML | Correct within evidence | Main copy, headings, FAQ, image captions and form preview are already present; React hydrates only the form. Content is not dependent on a client SPA fetch. |
| Duplicate content | Partial | Main content is translated; EN/ES are not duplicates merely because layout matches. Index-file redirects reduce file-path duplication. HTTP and HTTPS both serve content, and canonicals are wrong. Unknown preview domains cannot be assessed. |
| Search intent | Heuristic / not verifiable for demand | Copy is relevant to CI/CD/GitHub Actions incident diagnosis. No keyword research, query data, SERP assessment or traffic segmentation was available, so competitiveness and target-query coverage are not proven. |
| Title–heading–content consistency | Correct as a copy heuristic | Titles, “CI/CD diagnosis” H1 and evidence/human-review sections describe the same scope. Do not replace that technical specificity with unsupported general AI promises. |

### A1. Shared metadata-origin defect

Confirmed on both new production GETs:

```html
<meta property="og:image" content="http://localhost:4321/social-card.png">
<link rel="alternate" hreflang="en" href="http://localhost:4321/">
<link rel="alternate" hreflang="es" href="http://localhost:4321/es/">
<link rel="alternate" hreflang="x-default" href="http://localhost:4321/">
<link rel="canonical" href="http://localhost:4321/">
```

Spanish uses the same four absolute destinations and `canonical=http://localhost:4321/es/`. Root cause in source is the localhost fallback used by `Astro.site`. The remote reason for producing that effective origin is unknown. **Recommendation:** supply/validate the approved public origin at build time and validate the resulting EN/ES HTML before any approved future publication. This is a corrective recommendation, not a deployment performed by this audit. Google can choose another canonical; the evidence does not establish deindexing. Canonical and localization semantics follow the [Google canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) and [hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions) guidance.

### A2. Contextual SEO recommendations

A sitemap can help explicit discovery, particularly after content growth, but its absence is not a launch-blocking defect for this tiny linked site. This distinction follows [Google's sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview). Optional structured data should describe only established facts and relevant supported features; adding JSON-LD is not a substitute for fixing public URLs. See [Google's structured-data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data).

## B. Performance and Core Web Vitals

**No current CWV pass/fail can be assigned.** The browser connection failed and PSI returned 429, not a performance result. The good-experience reference values are LCP ≤2.5s, INP ≤200ms and CLS ≤0.1, evaluated at the 75th percentile separately for mobile and desktop when field data exists. See [web.dev Web Vitals](https://web.dev/articles/vitals). No TBT value is being used as INP.

| Criterion | Status | Evidence and evaluation |
| --- | --- | --- |
| LCP | Not verifiable | No new trace, Lighthouse performance result or field dataset. Hero image is eager/high priority and text is static, but the actual LCP element/time cannot be inferred reliably. |
| INP | Not verifiable | No measured interactions or real-user distribution. A disabled submit button does not imply good INP for radios/dialogs/theme controls. |
| CLS | Not verifiable | Intrinsic image dimensions and reserved form-feedback space reduce plausible risks, but no layout-shift observation was made. Source precautions do not equal CLS=0. |
| TTFB | Measured CLI sample only | Three EN and three ES samples below. Not a mobile/desktop browser measurement or a field percentile. |
| Total page weight | Partial | Decoded initial HTML is 33,034 EN / 33,817 ES bytes; compressed GET body transfer 9,368 / 9,577 bytes. Total browser visit weight is unknown because chosen image variants, fonts, hydration and scroll behavior were not observed. |
| Client JavaScript | Confirmed inventory; impact unmeasured | Phase 1 build: 235,870 uncompressed bytes across three files, including a 212,836-byte React client chunk and 15,125-byte form chunk. Inline Astro/page scripts are also in HTML. Only the form uses React `client:visible`. No parse/execute time measurement. |
| Unnecessary CSS | Small confirmed dead rule; broader coverage unknown | `.secondary-button` plus hover occurs only in `global.css:77–78`, with no component use. One emitted CSS file is 19,739 bytes. No runtime coverage trace; do not call the entire stylesheet unused. |
| Image optimization, sizes and formats | Correct implementation baseline / partial | Seven WebP source screenshots; Astro generates responsive variants with intrinsic dimensions (`ProductImage.astro:8–9`). Full originals are shipped for the viewer. Whether screenshot compression is the best quality/size tradeoff requires visual inspection. |
| Image responsive selection | Partial | `srcset`/`sizes` exist. Mobile hero deliberately renders a 980px crop; uncertainty uses 1400px (`global.css:270–286`, `Landing.astro:78,102`). Larger-than-viewport downloads may be intentional for readable cropping, not automatically erroneous. Device DPR and actual selected resource are unknown. |
| Lazy loading | Correct implementation baseline | Hero eager/high; below-fold images lazy. Hidden screenshot panels use `display:none`; actual requests while selecting panels remain unverified. |
| Web fonts | Partial / optimization candidate | Self-hosted Latin Sora 400/500/600 plus JetBrains Mono 400; three Sora preloads. Font files include WOFF and WOFF2 alternatives; their sum is not a single visit's cost. Actual font usage and whether all three preloads help need a waterfall. |
| Render-blocking resources | Partial | Main CSS and an inline early theme initializer are in the head. Fonts are preloaded. No blocking-duration measurement; do not label ordinary stylesheet loading a defect by itself. |
| HTTP cache/CDN | Working baseline; optimization candidate | Cloudflare HIT and `public, max-age=0, must-revalidate` observed for HTML and sampled fingerprinted CSS/JS. Revalidation is a documented safe default; longer immutable browser caching could reduce repeat-request latency for versioned files. |
| Compression | Correct within samples | `Content-Encoding: zstd` on new HTML requests; Phase 1 compressed CSS/JS samples also used zstd. No universal claim for every format/response. |
| Unnecessary network requests | Not verifiable comprehensively | No external script source or runtime API call found in inspected code. Browser waterfall unavailable. Fonts/preloads, hidden panels and original viewer requests need measurement before calling them waste. |
| Excessive hydration | Recommendation / hypothesis | A single island is restrained in scope. React's supporting bytes are material relative to a local-only email preview; reusing native validity handling is a possible future simplification. No proven responsiveness failure or justification for an architecture migration. |
| Mobile and desktop performance | Not verifiable | No device-specific lab run or CrUX/RUM result. PSI mobile returned no result; desktop was not retried after quota exhaustion. |

### B1. Repeated TTFB observations

Tool: curl, anonymous HTTPS GET, `--compressed`, each request in a new curl process, no explicit connection reuse between processes, network/CPU unthrottled, browser cache absent. Tests were sequential from this audit environment after initial route requests. Initial sampled response headers showed Cloudflare HIT. No globally representative location or hardware model is claimed.

| Route | Three `time_starttransfer` values (seconds) | Median | Range |
| --- | --- | --- | --- |
| `/` | 0.220477, 0.228997, 0.560628 | 0.228997s | 0.220477–0.560628s |
| `/es/` | 0.233561, 0.560178, 0.229387 | 0.233561s | 0.229387–0.560178s |

All six requests returned 200. `size_download` was 9,368 bytes for EN and 9,577 for ES; decoded sizes were verified separately. These values exclude the rest of the page and are not total transfer including headers. TTFB is a supporting connection/server metric, not a Core Web Vital; see [web.dev TTFB](https://web.dev/articles/ttfb).

Reproduction of the request shape:

```sh
curl -sS --compressed --max-time 25 -o /dev/null \
  -w '%{http_code} %{time_starttransfer} %{size_download}\n' \
  https://pipesor-landing.jhon-galvezchambi.workers.dev/
```

**Recommendations, not demonstrated performance failures:** measure a cold/warm production-build visit on mobile and desktop before changing preloads or image sizes; consider immutable caching only for content-hashed assets, keeping HTML refreshable; remove the tiny unused rule when a future authorized code change warrants it. Cloudflare documents the current default and `_headers` overrides in [Static Assets headers](https://developers.cloudflare.com/workers/static-assets/headers/). No quantified performance gain is claimed.

## C. UX/UI and conversion

The following is primarily a **source/copy heuristic review**, constrained by the actual prototype. Browser-rendered appearance and behavior were unavailable. A well-structured DOM is not proof that a first-time visitor notices or understands it.

| Criterion | Status | Evidence and evaluation |
| --- | --- | --- |
| What the hero offers | Clear in copy; first-impression test unverified | “CI/CD diagnosis. Evidence first.” plus the GitHub Actions subhead describes diagnosis and human review (`content.ts:11–15,73–77`). Actual five-second comprehension was not tested. |
| Intended audience | Partial / heuristic recommendation | Team workflows, GitHub Actions and shift handover signal an engineering audience, but the hero does not name a role/team explicitly. Test whether adding an accurate audience cue helps qualified visitors; no measured confusion. |
| Main benefit | Present, cautiously expressed | Evidence and explicit uncertainty help users evaluate a probable cause rather than accept a black-box verdict. Copy avoids unapproved speed/cost savings. |
| Differentiated value | Present as product positioning | Human validation, diagnosis/lifecycle separation and inconclusive outcomes are specific positioning. No competitor comparison proves uniqueness. |
| Objections | Substantially covered in copy | FAQ explains current scope, GitHub Actions only, no automatic fix, disabled registration; screenshots are labeled demo. Data-access/privacy details are still pending and must not be invented. |
| Reading sequence | Coherent in source | Hero → workflow → product views → uncertainty → operational memory → questions → access preview. This supports an explanation before the action. Scroll depth and comprehension evidence are absent. |
| Principal CTA visibility and clarity | Partial | Header/hero links exist and point to `#early-access`. The wording requests access while registration is unavailable. Notices disclose that near the hero. Actual above-fold visibility across screens is unverified. |
| Secondary actions | Appropriate baseline | “Explore the workflow” and product/history anchors offer a useful exploration path when registration is unavailable. No competing purchase action or invented contact channel. |
| Message consistency | Partial, confirmed availability tension | The CTA says “Get Early Access” / “Obtener acceso anticipado”; availability and form say registration is closed. Both facts are observable. Whether that reduces trust/conversion is an unmeasured hypothesis. |
| Form comprehension | Good implementation baseline | Explicit label, valid-format hint, preview notice, disabled submission text, and feedback copy (`EarlyAccess.tsx:9–17`; `content.ts:49–54,111–116`). No misleading success promise in the source. |
| Validation and error feedback | Partial | Native email validity is checked on blur and after edits, with required/invalid/valid messages. Runtime hydration, timing and assistive announcements are unverified. Valid syntax does not prove a work-domain address or ownership; neither is claimed. |
| Loading/success/request-error states | Intentionally absent / not applicable today | No request is allowed, so no legitimate server success/loading/error exists. The valid-format message explicitly says nothing was sent. These states become required only if submission is authorized and implemented. |
| Trust signals | Partial | Authentic prototype screenshots, demo disclosures, thesis status and named contributors support honest context. The repository link is publicly unavailable, which weakens that inspection path. |
| Testimonials/cases | Absent; not a demonstrated defect | No verified customer evidence is available. Do not add fabricated quotes, logos or numbers; testimonials are not mandatory for this prototype. |
| FAQ | Present / interaction unverified | Four relevant questions in both locales using native disclosures. Content is available in initial HTML. |
| Contact information | Intentionally absent | Official contact/identity not finalized. Contributor profiles exist but are not asserted to be official support channels. An approved channel could resolve future questions; no address should be invented. |
| Friction-reduction messages | Present, some potential redundancy | Prototype/availability, data-handling preview notices and no-auto-fix explanations set expectations. Repetition may reassure or distract; needs user testing. |
| Complete conversion flow | **Not operational by approved design** | Main action reaches a preview and cannot register. This is a business-readiness limit, not an accidental submit regression. No funnel or conversion baseline exists. |
| Visual hierarchy, spacing, alignment | Not verifiable visually | CSS defines a display H1, section H2s, grids and shared frame. Actual visual dominance, collisions, blank space or misalignment cannot be diagnosed without screenshots. |
| Typography and consistency | Source-consistent; rendered readability unverified | Sora/JetBrains Mono, shared scale, token colors and control styles. Source lint is clean. Loaded fonts, wrapping, density and crop legibility remain unknown. |
| Contrast | Partial | Token calculations in D support sampled text pairs and identify a field-boundary concern; this is not a complete visual contrast audit. |
| Responsive composition | Not verifiable visually | Mobile grids/crops and breakpoints exist. No claim that tablet or small-mobile navigation fits. See F's blocked viewport matrix. |
| Hover/focus feedback | Present in source; runtime unverified | Global focus outlines, link/button hover, radio selection and disabled styles exist (`global.css:45–80,131–134`). Visibility/occlusion is not demonstrated. |
| Content distribution / image quantity | Content-specific, visual judgment withheld | Real screenshots explain evidence, validation, uncertainty and history. No basis to prescribe stock photos, more sections or a generic feature-card grid merely to imitate other pages. |

### C1. Recommendations and CRO hypotheses

- **Confirmed corrective need:** make the existing project-inspection link publicly useful or clearly reflect its intended visibility. This removes a demonstrated dead end; it does not establish a numerical trust uplift.
- **Copy hypothesis:** until registration opens, consider owner-approved CTA wording that accurately describes the available preview/exploration action. Preserve the explicit decision to collect nothing. Test expectation/comprehension first; this audit does not change the approved CTA.
- **Audience hypothesis:** test an accurate role/team cue near the hero if qualified visitors cannot identify relevance. No evidence justifies broadening the product to other CI/CD platforms.
- **Trust hypothesis:** an approved project/contact destination could answer questions that cannot be resolved while registration is closed. Do not substitute invented legal text or testimonials.

No A/B test ran, no visitor interview was conducted, and no behavioral data was collected. These hypotheses must not be described as proven conversion improvements. Visual redesign recommendations are withheld until the screenshot critique can be performed.

## D. Accessibility — WCAG 2.2 A/AA

Reference: [WCAG 2.2](https://www.w3.org/TR/WCAG22/). This is a targeted code/markup and token review, **not** a conformance statement or a complete success-criterion audit. Automated checks cannot replace manual keyboard and assistive-technology evaluation; here no browser accessibility engine could run at all.

| Criterion / relevant SC | Status | Evidence and limits |
| --- | --- | --- |
| Semantic landmarks and relationships — 1.3.1 | Correct source baseline / partial | Header, named navs, main, sections, footer, fieldsets, legends and native disclosures/dialog. Parsed initial markup has unique IDs; rendered tree unverified. |
| Page title and headings — 2.4.2, 2.4.6 | Correct source baseline | Localized page title, one H1, logical nested H2/H3/H4 and descriptive section headings. Visual wrapping is not a heading-rank failure. |
| Bypass repeated blocks — 2.4.1 | Partial | First skip link points to main, with focus CSS (`Landing.astro:55,72`; `global.css:183–184`). Actual focus/scroll behavior with the sticky header remains untested. |
| Keyboard operability and traps — 2.1.1, 2.1.2 | Not verifiable end to end | Native links/radios/details/dialog support a plausible baseline. No Tab, arrow-key, Enter/Space or Escape execution; modal containment and exit not demonstrated. |
| Focus order, visible focus and obscuration — 2.4.3, 2.4.7, 2.4.11 | Partial | Two-pixel outlines and dedicated hidden-radio label outlines exist. Lightbox saves/restores opener focus. Sticky header and visually hidden inputs require actual runtime inspection. |
| Text contrast — 1.4.3 | Correct for sampled token pairs only | Calculations below exceed 4.5:1 for sampled normal text. Other backgrounds, hover states, screenshot text and rendered composites were not comprehensively measured. |
| Non-text contrast — 1.4.11 | **Partial: source-supported concern** | Active email field boundary/fill has low contrast in both themes; numeric evidence below. Likely identification problem, with final rendered SC determination pending. Disabled submit contrast is exempt under this criterion. |
| Labels/instructions — 3.3.2 | Correct source baseline | Explicit label, preview notice and email hint tied with `aria-describedby`; no placeholder-only label (`EarlyAccess.tsx:11–15`). |
| Input purpose — 1.3.5 | Conditional recommendation | `type=email`, but `autoComplete="off"` lacks a personal/work-email purpose token (`EarlyAccess.tsx:13`). Current field is a non-collecting format preview; do not assert a confirmed SC failure. Reassess `autocomplete=email` if actual user-data collection is enabled. |
| Text alternatives — 1.1.1 | Partial | Descriptive screenshot alts/captions, decorative SVGs hidden from AT and named brand links. Image-only detailed product facts and viewer announcements need manual review. Authentic screenshots are not automatically a blanket images-of-text violation. |
| Names/roles/values and ARIA — 4.1.2 | Correct markup baseline / partial | Buttons have names, dialog references existing title/caption, radio groups use legends, language current state uses `aria-current`. Dynamic names/states were not inspected in accessibility tree. |
| Label in name — 2.5.3 | Correct source baseline | Header CTA's longer aria-label contains its visible localized CTA wording; image controls use descriptive labels. Voice-input runtime not tested. |
| Target size — 2.5.8 | Partial | Mobile language/theme controls are styled at ≥28×40px; general buttons ≥40px high, email field ≥48px. These selected source sizes exceed 24×24px. All rendered targets, overlaps and spacing are unknown. WCAG AA is not a universal 44px requirement. |
| Resize/reflow/text spacing — 1.4.4, 1.4.10, 1.4.12 | Not verifiable | Viewport does not disable zoom; responsive CSS exists. No 200% text resize, 400%/320px reflow, text-spacing override or clipping test succeeded. |
| Reduced motion / moving content — 2.2.2 where applicable | Source baseline present | Reduced-motion rule removes animations/transitions/smooth scroll (`global.css:314–316`); entrances are short and functional. No observed persistent auto-moving content. Actual OS preference changes and timing not tested; animation-from-interaction SC 2.3.3 is AAA, not part of the requested AA target. |
| Error identification/suggestion — 3.3.1, 3.3.3 | Partial | Required/invalid messages, `aria-invalid`, and an example email exist. Runtime announcement, blur timing and whether a valid field recovers its state remain untested. |
| Status messages — 4.1.3 | Partial | `role=status` feedback and explicit “not sent” valid-format message exist. No screen-reader announcement was heard. |
| Page and part language — 3.1.1, 3.1.2 | Partial | Correct root language; language-switch links carry their languages. ES labels disclose English product screenshots. Technical product terms/identifiers are not automatically translation failures. Social-image alt remains English in ES. |
| Screen readers and inaccessible controls | Not verifiable | No NVDA, VoiceOver, TalkBack, accessibility-tree snapshot or real assistive session. Source review did not establish an inaccessible control, but cannot prove absence. |

### D1. Token contrast calculations

Method: normalize sRGB channels to 0–1; linearize at 0.04045; relative luminance `0.2126R + 0.7152G + 0.0722B`; ratio `(lighter + 0.05)/(darker + 0.05)`. All are solid author-defined colors in `global.css:1–31`; these values do not account for screenshots, antialiasing, browser overrides or transient states. Criteria context: [W3C text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

| Pair | Theme | Ratio | Narrow conclusion |
| --- | --- | --- | --- |
| Primary text `#17191c` / page `#f7f8fa` | Light | 16.576:1 | Above 4.5:1 |
| Secondary text `#667085` / page `#f7f8fa` | Light | 4.682:1 | Above 4.5:1 |
| Secondary text `#667085` / surface `#ffffff` | Light | 4.975:1 | Above 4.5:1 |
| CTA text `#ffffff` / accent `#3157d5` | Light | 6.079:1 | Above 4.5:1 |
| Primary text `#f4f6f8` / page `#0e1116` | Dark | 17.457:1 | Above 4.5:1 |
| Secondary text `#98a2b3` / page `#0e1116` | Dark | 7.343:1 | Above 4.5:1 |
| Secondary text `#98a2b3` / surface `#151a21` | Dark | 6.786:1 | Above 4.5:1 |
| CTA text `#0e1116` / accent `#6c8cff` | Dark | 6.153:1 | Above 4.5:1 |

**Active email-field boundary concern:** `global.css:161–165` styles the input on the form surface with `background:var(--bg)` and a one-pixel `var(--border)` outline. In light mode the border is only **1.167:1 against field fill** and **1.240:1 against form surface**; fill versus surface is **1.063:1**. Dark mode is **1.442:1**, **1.332:1**, and **1.082:1**, respectively. The label text is readable but does not itself delineate the editable area. No other persistent identifying cue is apparent in source for the empty, unfocused field.

The numbers confirm low contrast of the authored field boundary; they support a **likely SC 1.4.11 issue**, not an assertion that a browser audit proved the complete component fails. Check the rendered empty, valid, invalid and focused states before declaring conformance. **Recommendation:** provide a sufficiently distinguishable editable-field cue/boundary in both themes; preserve the focus/error treatment. Do not require 3:1 on every decorative rule or an inactive submit button. See [W3C non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

Target-size judgments use [W3C SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), including its exceptions. The future email-purpose recommendation uses [W3C SC 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html); it is not justification to start collecting personal information.

## E. Content and copywriting

Evaluation is editorial/heuristic unless explicitly backed by source or HTTP. It is not a user-comprehension study or a factual verification of the separate product implementation.

| Criterion | Status | Assessment and evidence |
| --- | --- | --- |
| Message clarity | Good heuristic baseline | Product purpose is explicit: evidence-backed diagnosis for GitHub Actions, with a human decision. Technical audience inference is plausible; unfamiliar visitors may not know AIOps, so avoid relying on that acronym alone. |
| Tone consistency | Consistent within inspected EN/ES copy | Calm technical language, prototype disclaimers, no hype or unsupported numeric promises (`content.ts`). |
| Benefits versus features | Partial / editorial opportunity | Evidence, uncertainty and context across shifts express useful outcomes. Some captions focus on queue/state vocabulary. A concise owner-approved explanation of how this helps the target team could help, without inventing time savings. |
| Commercial proposition | Intentionally limited | No pricing, service guarantee, availability date or production-ready claim. Early access is future intent. This accurately reflects current approved scope. |
| Scanability | Source baseline present; visual result unverified | Specific headings, captions, four-step workflow and four FAQ items support scanning. Closed/open disclosures and mobile line wrapping cannot be judged visually. |
| Legibility | Partial | Body 16px/1.6, hero subhead 18px desktop and 16px phone; several secondary labels 13–14px. Size alone does not establish a failure. Contrast samples are in D; screenshot/caption readability at each viewport remains open. |
| Redundancy | Heuristic improvement candidate | Prototype, demo-data and registration disclaimers repeat in hero, FAQ, form and footer. Preserve notices at the point of action; test trimming repetition elsewhere if readers lose the main explanation. No demonstrated abandonment. |
| Spelling and grammar | No clear typo confirmed in inspected copy | No lorem ipsum/TODO text; EN/ES read coherently. This is not professional translation certification. English UI terms within ES are partly intentional product terminology. |
| Microcopy | Mostly explicit | Invalid/empty/valid email feedback separates format validity from submission success. The “preview” and “nothing sent/stored” notices are specific. No actual browser messages were observed. |
| Button wording | Partial, availability tension confirmed | Requesting access while registration is closed is observable. “Follow what comes next” does not provide a working follow action. The CTA was owner-approved; recommend review, not unilateral replacement. |
| Missing content | Intentional pending items, not invented replacements | Verified contact/identity/privacy/terms and documentation destination are not finalized. No evidence supports adding pricing, social proof or customer outcomes. |
| Search intent coherence | Topic coherent; market demand unknown | Diagnosis/evidence/GitHub Actions recur consistently across title, hero and body. Target query, locale and search-demand evidence are absent. |
| Unsupported commercial claims | No numerical/guarantee violation identified | Demo metrics and experimental Insights are labeled illustrative. No customer testimonials, uptime, automatic-remediation or savings claims found. Present-tense feature wording remains constrained by nearby prototype disclaimers; it is not independent evidence that live integrations exist. |
| EN/ES parity | Correct structure; semantic/visual completeness partial | Matching keys and item counts were tested in Phase 1. Main content equivalent on inspection; English shared screenshots are disclosed. ES social-image alt is English. No runtime truncation or native-speaker review. |

### Section disposition, with reasons

| Section | Assessment / recommendation |
| --- | --- |
| Hero | **Keep** technical promise and prototype notice. **Consider adjustment** to available-action wording and audience cue, subject to owner review and comprehension testing. |
| Workflow | **Keep** the failure → evidence → diagnosis → human-review explanation; it answers how the concept works and does not promise automatic fixes. |
| Product browser | **Keep** authentic evidence/review/history captures. **Verify** crop and zoom legibility before prescribing any layout change. |
| Uncertainty | **Keep** explicit inconclusive outcomes: a specific differentiating idea, without claiming market exclusivity. |
| Memory/Insights | **Keep** provisional labels and context benefit. **Adjust only if research supports it**: clarify that this is prototype exploration, not validated product analytics. |
| FAQ | **Keep** practical objections and scope limitations. **Consider moving** a short current-availability clarification closer to the CTA only if readers miss the existing notice; reordering the whole page is not justified by current evidence. |
| Early-access preview | **Keep disabled** under the brief. **Review** invitation/preview wording while the registration action is unavailable. No mail service or backend should be introduced by an audit. |
| Footer | **Correct** the public project dead end; **add verified information only when approved**. Pending policies/license should not be replaced with invented boilerplate. |

No new testimonial, pricing, case-study, countdown, guarantee, or generic marketing section is recommended without relevant product evidence. A future approved contact/current-availability statement could help users resolve questions, but its benefit remains a hypothesis.

## F. Functionality and QA

### Functional coverage

| Criterion | Status | Evidence and remaining check |
| --- | --- | --- |
| Internal navigation | Correct links/targets; interaction partial | Fragment targets and IDs valid in initial EN/ES HTML. Actual click/keyboard focus, scroll position and sticky-header clearance untested. |
| Buttons and CTAs | Partial | Links target real sections; preview submit is intentionally disabled; screenshot triggers are enabled only after viewer script initialization. Actual handler execution untested. |
| External links | Partial / confirmed public dead end | Repository 404; both contributor profiles 200. No third-party page behavior is certified beyond status. |
| Menus/navigation | Partial | Static named nav and responsive grid, with no JS hamburger to open. Overflow, touch and focus behavior untested. |
| Locale switching | Partial | Correct localized routes and language links; script preserves current fragment (`Landing.astro:155–158`). Cross-locale execution/preserved focus untested. |
| Theme selection/persistence | Partial | Early script and change listeners support system/light/dark, localStorage exceptions guarded (`Landing.astro:45–51,143–154`). Reload persistence and denied-storage fallback not executed in browser. |
| Workflow/FAQ disclosures | Partial | Native `details`/`summary` with grouping names and initial state. Keyboard behavior and target browser support not verified. |
| Product views/history shortcut | Partial | Radio-driven CSS panels and history-link selection are implemented. Correct selected panel, keyboard operation and focus after shortcut unverified. |
| Screenshot viewer | Partial | Native dialog, zoom/fit, close form, backdrop-close handling and opener focus restoration exist. No opening/closing/zooming interaction ran. |
| Form validation | Partial | Safe rendering tests passed in Phase 1. Empty, invalid and valid branches exist. Blur/input transitions require browser testing using synthetic data only. |
| Form submission | Not applicable / intentionally unavailable | Disabled button, no action destination, prevented submit, no email `name`. No real or synthetic submission issued. |
| Error handling | Partial | Storage errors guarded; form has local error feedback; public not-found response has no recovery content. Offline JS/image-loading errors were not simulated. |
| Empty/loading states | Scope-dependent | No server-backed data/list state exists in the landing. Validating form needs no request spinner. Viewer has no explicit loading/error UI in source; actual slow/broken image experience remains unverified. |
| Missing resources | Correct within Phase 1 asset sample | All 57 build assets matched production in Phase 1; unchanged application and identical HTML hashes support reuse. Browser-selected paths were not observed anew. |
| Screen-size compatibility | Not verifiable | All required viewport cases below remain blocked; CSS breakpoints are not passing tests. |
| Failure of network | Not verifiable | No browser offline/slow-network test. Static initial content reduces API dependency; failed scripts can still remove image enlargement and custom email feedback. Source defaults keep screenshot buttons disabled until initialized. |
| Browser compatibility | Not verifiable | No successful Chrome session or other engine/real device. No claim of Chrome, Safari or Firefox compatibility. |
| Console errors | Not verifiable | No browser executed the code. Passing build/check and successful downloads cannot establish zero runtime errors. |
| Automated QA | Partial | Existing checks cover TypeScript/Astro and safe markup/localization, not end-to-end behavior. Full test command was environment-blocked by Lefthook in Phase 1; no failing remote CI run established. |

### Reproducible confirmed defects and gaps

These are test cases and observations within Phase 2, not a prioritized backlog. Shared causes are referenced rather than duplicated.

| Case | Steps to reproduce | Actual result | Expected behavior / limit | Evidence |
| --- | --- | --- | --- | --- |
| Metadata origin | GET HTTPS `/` and `/es/`; inspect canonical, alternates, `og:image` in initial HTML | Five localhost URLs per page | Public metadata resolves to the approved public origin and appropriate locale | A1; `astro.config.mjs:5`, `Landing.astro:39–42` |
| Public project link | Read footer repository URL; anonymous GET with redirects followed | 404 | If presented as a public project resource, destination should be inspectable by that visitor, or its restricted/planned state made accurate | `Landing.astro:124`; new anonymous curl |
| Empty not-found page | GET `/phase2-missing` | 404, zero-byte body | Preserve 404; a professional site can provide localized recovery navigation rather than an empty response. Recovery content is a usability recommendation, not a route-status failure | No custom 404 source; new response |
| Insecure scheme remains usable | GET `http://pipesor-landing.jhon-galvezchambi.workers.dev/` without `-L` | 200, 33,034-byte HTML identical to HTTPS, no Location | Redirect to approved HTTPS route before serving the document; assess platform controls and browser upgrade behavior separately | H1; new HTTP/1.1 response |

For the preview form, “CTA → form → cannot submit” is **expected under the approved brief**. It is not a regression test failure. For the input-boundary contrast concern, code/numeric evidence is in D1; no browser test result is fabricated.

### Required viewport and manual-test matrix

| Representative viewport | EN/light | EN/dark | ES/light | ES/dark | Result |
| --- | --- | --- | --- | --- | --- |
| Small mobile 320×568 | Not executed | Not executed | Not executed | Not executed | Blocked: no reachable Chrome |
| Mobile 390×844 | Not executed | Not executed | Not executed | Not executed | Same limitation |
| Tablet 768×1024 | Not executed | Not executed | Not executed | Not executed | Same limitation |
| Desktop 1440×900 | Not executed | Not executed | Not executed | Not executed | Same limitation |

The browser page could not be created, so no viewport was actually emulated. These cases record missing mandatory coverage, not simulated executions. Once a browser is available, each case needs header/hero/CTA visibility, full-page overflow, screenshot crop/zoom, disclosure/radio states, form validation and console/network inspection. Keyboard-only navigation, skip link, Escape/focus restoration, reduced motion, 200% text size and 400% reflow require additional explicit runs. Use a production build preview and compare edge-specific behavior against the live deployment; do not send forms.

## G. Astro and Cloudflare Workers

Actual stack: Astro `7.4.4`, React integration `7.1.2`, React/DOM `19.3.1`, TypeScript `6.0.3`, Wrangler `4.156.0`, Node `24.22.2`, Bun `1.4.4`, as verified in Phase 1 and unchanged in the inspected configuration. No SSR assumption is made.

| Criterion | Status | Assessment |
| --- | --- | --- |
| Astro configuration | Correct static baseline with confirmed origin defect | React integration and EN/ES routing fit the site; `site` fallback produces wrong public metadata. No other config error established. |
| Static/SSR strategy | Appropriate to current scope | Build explicitly outputs static pages; no runtime data/API. No demonstrated reason to introduce SSR, backend or framework migration. |
| Cloudflare adapter | Not applicable | No server rendering/runtime routes; absence of SSR adapter is appropriate, not a missing dependency. |
| Wrangler | Correct within dry-run evidence | Assets directory points at `dist`; compatibility date declared; Phase 1 dry run succeeds with no bindings. A dry run does not validate remote account policies. |
| Runtime compatibility | Correct build/deploy-model baseline | Static assets do not run a custom Node server in Workers. Browser support remains unverified; passing build is not browser compatibility. |
| Routing and 404 | Partial | Production normalizes directory/index routes and emits real 404; body is empty. Astro preview differs. No SPA fallback masking missing routes was observed. |
| Asset management | Correct within sampled delivery | Astro optimizes imported screenshots; public icons/branding/licenses copied; hashed CSS/JS served and all 57 non-HTML assets matched in Phase 1. |
| Cache policy | Working default / optional improvement | Edge HIT and revalidation headers observed. A fingerprinted-asset immutable policy can be configured without adding a server adapter. HTML and unversioned assets need a separate freshness policy. |
| HTTP headers | Partial | Correct content types and compression; security-header recommendations in H. No `_headers` file. Do not assume headers must be implemented through SSR. |
| Variables and bindings | Simple scope; origin validation gap | Only application build variable found is `SITE_URL`; no application secrets/bindings. Build-origin mistakes can be published silently. Remote values were not read. |
| Error handling | Partial | Static 404 status works; no custom recovery page; storage exceptions guarded. No backend exists to audit for API error handling. |
| Local/production parity | Partial and bounded | Initial HTML and asset comparison agree, excluding generated island UID, in Phase 1; new HTML hashes unchanged. Redirects, robots and 404 bodies differ; remote commit/build settings remain unknown. |
| Components and maintenance | Reasonable current structure | Shared `Landing`, image/viewer/brand/form components and common i18n/CSS prevent EN/ES duplication. A separate layouts directory or extra abstraction is not justified by a demonstrated maintenance problem. Tiny unused style noted in B. |
| Toolchain freshness | Informational, not confirmed risk | `bun outdated`: Wrangler patch `4.156.1` available; TypeScript major `7.0.2` available. README explicitly keeps TS6 for checker compatibility. Do not recommend automatic TS7 migration without compatibility evidence. |
| Known dependency advisories | No findings reported in current scan | `bun audit --json` exit 0 `{}`; see H for limits. Version age alone does not establish vulnerability. |
| CI/CD and remote deployment | Source workflow exists; remote status unknown | Quality workflow checks commits/install/check/test/build/dry run and does not publish. Workers Builds is described separately. No remote execution history, permissions, branch protection or preview isolation evidence. |

Context7 returned Cloudflare's documented Static Assets defaults and `_headers` behavior. Recommendations use that static deployment model, not a generic Worker-fetch backend. See [Cloudflare headers](https://developers.cloudflare.com/workers/static-assets/headers/) and [HTML handling](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/). Astro static/site settings were already verified against [Astro's configuration reference](https://docs.astro.build/en/reference/configuration-reference/) in Phase 1; the current build mode is supported by actual output, not merely documentation defaults.

## H. Analytics, privacy and security

| Criterion | Status | Evidence, impact and boundary |
| --- | --- | --- |
| Web analytics | Intentionally absent | No application analytics SDK/beacon or tag manager in inspected source/HTML; brief withholds approval. Cannot assert what account-level Cloudflare analytics/logging exists. |
| Main CTA events | Absent | No event instrumentation; CTA interactions cannot currently be measured from this application. This is a measurement limitation, not permission to enable tracking. |
| Conversion events | Intentionally absent / not operational | No actual registration success occurs, so clicks must not be reported as completed registrations. |
| Form tracking | Absent by design | No submission or analytics destination; local validation state only. No email values were sent during this audit. |
| Funnel measurement | Absent | No first-party event/funnel implementation or usable analytics dataset. CRO recommendations remain hypotheses. |
| JavaScript error visibility | Partial / unknown runtime | No application error monitoring; console unverified because browser unavailable. Adding third-party monitoring needs explicit approval under the brief. |
| Secret exposure | No obvious source indication; full scan unverified | Source references only build origin, not API credentials. Environment files are ignored; no values read. This is not a repository-history, account-secret, or exhaustive generated-bundle secret scan. |
| Dependency vulnerabilities | No known findings reported | `bun audit --json` returned `{}` with exit 0. This is registry-advisory coverage of the lockfile, not proof of safe business logic, supply-chain integrity or zero unknown vulnerabilities. |
| Security headers | Partial / hardening recommendation | Captured HTTPS documents lack CSP, HSTS, `X-Content-Type-Options` and Referrer-Policy. No `_headers` source. Their absence alone is not proof of exploitable XSS/data exposure. Review a compatible policy; see H2. |
| HTTPS | Available, but **HTTP enforcement defective in sampled route** | HTTPS works; plain HTTP serves identical HTML with 200, without redirect. See H1. No personal-data collection endpoint exists, so no transmitted form-data leak was demonstrated. |
| Third-party scripts | None observed in source/initial HTML | Fonts are self-hosted; no external `script src`. Browser runtime network unavailable, so dynamically injected edge scripts cannot be categorically excluded for every context. NEL/Report-To are edge reporting headers, not application conversion events. |
| Consent/privacy disclosures | Pending owner/legal decisions | Form collection disabled; no behavioral trackers deliberately added. No blanket requirement for a cookie banner can be established without actual technologies, jurisdiction and purpose. |
| Local storage | Limited preference use in source | Theme key only, storage failures guarded. No email stored by application code. Browser/OS autofill behavior and platform logs are outside the “no app storage” claim. |
| Future trust boundary | Conditional risk | Enabling collection would require approved entity, purpose, retention/disclosures and endpoint, plus server-side validation, abuse/error handling appropriate to that endpoint. Those requirements must not be simulated by client validation or a fake success state. |

### H1. HTTP page is served without an HTTPS redirect — confirmed

Reproduced twice with anonymous curl, no redirect following:

```sh
curl -sS --max-time 20 -D /tmp/pipesor-http-headers \
  -o /tmp/pipesor-http-body \
  http://pipesor-landing.jhon-galvezchambi.workers.dev/
```

Observed: `HTTP/1.1 200 OK`, `Content-Type: text/html`, no `Location`; 33,034-byte body identical to the HTTPS English document. The HTTPS response also did not supply HSTS. The confirmed defect is lack of HTTP-to-HTTPS redirection on this route. Browser HTTPS-First behavior, inherited/preloaded parent-host policies, and other routes were not measured, so browser-specific downgrade exposure is not asserted as a reproduced exploit.

**Recommendation:** enforce the approved HTTPS origin through the applicable platform/static routing controls and verify both locales and redirect preservation. Assess HSTS only for the hostname actually controlled and compatible deployment policy; do not prescribe parent-domain preload or broad `includeSubDomains` on a shared hosting domain. [MDN HSTS guidance](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) explains browser transport upgrading; HSTS and a server redirect address different entry cases.

### H2. Hardening recommendations, not confirmed exploits

Consider appropriate MIME-sniffing, referrer, framing and content-loading policies on the actual static responses. A CSP must accommodate or hash the existing inline theme initializer, Astro hydration/bootstrap and page scripts; an untested strict policy could break themes, image enlargement and the form. Evaluate with report-only testing where appropriate rather than inventing a universal header snippet. Source: [MDN CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP). Static Assets can apply custom headers without a new backend through [Cloudflare's header mechanism](https://developers.cloudflare.com/workers/static-assets/headers/).

The advisory scan is explicitly read-only: [Bun's audit documentation](https://bun.com/docs/pm/cli/audit) describes lockfile advisory checking and the raw JSON option. No `audit fix`, dependency update or lockfile edit occurred.

### H3. Legal and measurement limits

No opinion on GDPR, local privacy law, cookie-consent applicability or final policy sufficiency is asserted. The responsible entity, jurisdictions, platform logging practices, future data flow and lawful purposes are not established. The current no-submission constraint remains in force. Any future measurement proposal needs owner approval and must avoid email/raw personal information in event payloads. Defining a desired event model is a recommendation; no events were installed or sent.

## Audit boundaries and disposition

All eight requested categories were evaluated against the available evidence. The main **confirmed cross-category defects** remain the localhost metadata origin and public repository dead end; this phase additionally confirms that the HTTP root serves content without redirecting to HTTPS. Empty not-found recovery, missing optional discovery metadata, browser-cache refinement, copy expectation management and the source-supported email-boundary contrast concern are separately characterized above rather than promoted to critical failures without evidence.

Current good evidence includes static initial localized content, valid primary routes/fragment IDs, optimized image infrastructure, sampled compression/edge caching, consistent shared components, safe disabled form markup, and no advisories reported by the current registry scan. These strengths do not close the missing runtime tests.

Still unverified: rendered UX at all four size classes/themes/locales; keyboard/focus/zoom and screen-reader behavior; browser console/network/hydration; actual LCP/INP/CLS and field percentiles; full browser payload; search indexing/selected canonical; remote builds/settings/edge policies; complete legal applicability. Chrome availability and PSI quota are documented tool limitations, not silently passed checks.

The application was not changed. Phase 3 scoring, Phase 4 backlog, Phase 5 roadmap, and the other Phase 6 deliverables were not started.
