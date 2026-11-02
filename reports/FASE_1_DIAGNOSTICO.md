# Phase 1 — Landing page reconnaissance and current-state diagnosis

Audit date: 1 November 2026, America/Lima; production HTTP responses were captured on 2 November 2026 UTC. Repository baseline: `d787133` (`docs(readme): standardize repository onboarding`). The working tree was clean before the inspection.

Production: <https://pipesor-landing.jhon-galvezchambi.workers.dev/>

## 1. Scope and evidence boundaries

This document completes **Phase 1 only**: repository reconnaissance, available execution checks, HTTP verification, and a current-state diagnosis. It does not contain the category audit, scores, prioritized backlog, roadmap, or deliverables from Phases 2–6. Application source, dependencies, configuration, and environment files were not edited. No deployment, commit, push, analytics integration, or form submission was performed.

Documentation is in English under `AGENTS.md`. Evidence comes from the inspected source, installed dependency tree, command output, generated build, and anonymous HTTP GET requests. Temporary response bodies and inspection artifacts were written under `/tmp`; generated build and Astro state are ignored artifacts, not source changes. Findings below include their evidence directly and do not depend on those temporary files remaining available.

Status terminology:

- **Confirmed:** directly observed in code, command output, or HTTP responses.
- **Partial:** a capability exists, but its complete runtime behavior was not demonstrated.
- **Intentional pending capability:** explicitly withheld by the approved brief, rather than an accidental regression.
- **Not verified:** available evidence cannot support a pass or a failure.
- **Risk/inference:** a possible future consequence, distinguished from an observed defect.

No visual, WCAG-conformance, Core Web Vitals, conversion-rate, or Google-indexing conclusions are claimed. Earlier verification documents are historical records and were not counted as tests executed in this audit.

## 2. Product, audience, and conversion context

The README identifies Pipesor as an AIOps thesis project. The content describes an early-stage prototype for GitHub Actions incident diagnosis: failed workflow → incident and correlated evidence → probable cause/confidence or an inconclusive result → human validation. Product screenshots contain illustrative demo data. The landing does not provide the product backend or an operational GitHub integration.

**Provisional audience inference:** engineering teams responsible for CI/CD pipelines, including DevOps/platform engineers and people reviewing failed GitHub Actions workflows. This is inferred from `src/i18n/content.ts:13`, `:21–35`, and the approved brief; no audience research or acquisition data was available.

**Intended conversion:** an early-access registration within the page. This is an explicit owner decision in `docs/landing-page-brief.md:248–251`. **Current actual outcome:** users can explore explanatory material and a form preview; they cannot register. The same brief requires submissions to remain disabled until the responsible entity, data handling, disclosures, and destination are approved (`:273–282`). A missing submission is therefore intentional, while the page is not a working lead-acquisition funnel.

## 3. Repository and architecture inventory

### 3.1 Installed versions and setup

Versions were obtained using `bun --version`, `node --version`, and `bun pm ls`, rather than inferred from version ranges.

| Component | Actual version / evidence |
| --- | --- |
| Bun | `1.4.4`; matches `packageManager` in `package.json:6` |
| Node.js | `24.22.2`; matches `.node-version:1` |
| Astro | `7.4.4` |
| Astro React integration | `@astrojs/react@7.1.2` |
| React / React DOM | `19.3.1` / `19.3.1` |
| Astro checker | `@astrojs/check@0.9.12` |
| TypeScript | `6.0.3` |
| Wrangler | `4.156.0` |
| Font packages | Sora and JetBrains Mono, both `5.3.0` |
| Commitlint | CLI and conventional config, both `21.2.4` |
| Lefthook | Standalone `2.2.2` required by README; binary unavailable on this environment's `PATH` |

`bun.lock` exists. `bun install --frozen-lockfile` exited successfully: “Checked 347 installs across 446 packages (no changes)”. This confirms the existing installation agrees with the frozen lockfile; it was **not** a clean installation into an empty dependency directory. No dependency upgrade or vulnerability scan was performed, so neither latest-version status nor absence of advisories is established.

### 3.2 Rendering and deployment

- `astro.config.mjs:1–7` installs only the React integration and defines EN as the default locale, ES as the alternative, with no EN prefix.
- There is no `output` override, server adapter, middleware, API endpoint, or SSR route declaration in application source. The executed build explicitly printed `output: "static"` and `mode: "static"`, then generated two pages.
- `src/pages/index.astro` renders `Landing locale="en"`; `src/pages/es/index.astro` renders the same template with `locale="es"`.
- `wrangler.jsonc:1–7` declares Worker `pipesor-landing`, compatibility date `2026-10-30`, `assets.directory: "./dist"`, and an empty `previews` object. It has no application entrypoint, runtime bindings, storage, secret declaration, or backend service.
- The observed architecture is **Astro static output served by Cloudflare Workers Static Assets**. Absence of a Cloudflare SSR adapter is consistent with the actual static application; it is not a missing requirement.
- `docs/deployment.md:9–22` describes Workers Builds, production on `main`, branch previews, Bun build commands, and the production origin supplied at build time. These instructions do not prove that the corresponding account configuration is active.

### 3.3 Application structure and responsibilities

| Location | Observed purpose |
| --- | --- |
| `src/pages/` | Two localized entry pages; no additional content or API routes |
| `src/layouts/` | Absent; `Landing.astro` owns the document shell and page composition |
| `src/components/Landing.astro` | Metadata, header, hero, workflow, screenshot browser, uncertainty, history/insights, FAQ, form section, footer, theme/language scripts |
| `src/components/Brand.astro` | Approved light/dark SVG wordmarks referenced through SVG images |
| `src/components/ProductImage.astro` | Astro image optimization, alt text, captions, lazy/eager policy, lightbox triggers |
| `src/components/ImageLightbox.astro` | Native dialog, enlarged screenshots, zoom/fit, close handling and focus restoration |
| `src/components/EarlyAccess.tsx` | React local email-format validation and a permanently disabled submit button |
| `src/i18n/content.ts` | Shared EN/ES copy and the `Locale` type |
| `src/styles/global.css` | Global layout, light/dark tokens, typography, control states, responsive rules and reduced-motion handling |
| `src/assets/product/` | Seven WebP screenshots: operations, validation, uncertainty, localized history and insights |
| `public/` | Four brand SVGs, PNG icons at 32/180/512, social card, and two font licenses |
| `tests/` | Three content/form-rendering tests and a shell script for commit-message validation |
| `.github/workflows/quality.yml` | Quality checks on PRs and pushes to `main`; no deployment job |
| `docs/` | Approved brief, deployment instructions, design decisions and historical checks |

Shared components are actually referenced by the page. No unused application component was identified. The absence of a separate layouts directory is a structural choice, not an observed defect.

### 3.4 Styles, assets, and client execution

The page uses plain CSS, Sora text, JetBrains Mono for code, approved blue accent tokens, and light/dark surfaces (`global.css:1–31`). Responsive rules exist at 1100, 900, 800, 700, and 360px (`:199–313`). The header is sticky; the small-screen header uses a grid. Mobile product images deliberately use cropped desktop screenshots (`:270–286`); whether those crops remain useful requires browser inspection.

Source includes a skip link, semantic landmarks, heading IDs, labels, `:focus-visible` styles, radio-group selection, native `details` and `dialog`, and reduced-motion overrides. These are implementation observations, not evidence that keyboard use, contrast, zoom, screen readers, or WCAG 2.2 pass at runtime.

`ProductImage.astro:8–12` supplies image dimensions, WebP variants, `srcset`/`sizes`, eager/high-priority loading for the hero, and lazy loading elsewhere. The build generated 28 optimized image variants. Full-size source screenshots are also shipped for the lightbox. Fonts are imported from installed Fontsource packages and self-hosted; three Sora WOFF2 resources are preloaded (`Landing.astro:2–9`, `:36`). Font license files are present.

There is one React island, `EarlyAccess`, using `client:visible` (`Landing.astro:113`). The rest of the behavior uses native elements, CSS, and page scripts. There is no application `fetch`/Axios call, submission API, analytics SDK, or external form integration in inspected source. The theme preference uses `localStorage` key `pipesor.theme` and guards storage exceptions (`Landing.astro:45–51`, `:143–154`).

Build inventory, **uncompressed file sizes**, not measured browser transfer or per-visit consumption:

| Output | Files / bytes |
| --- | --- |
| EN HTML | 33,034 bytes |
| ES HTML | 33,817 bytes |
| CSS | One file, 19,739 bytes |
| Client JavaScript | Three files, 235,870 bytes combined |
| React client chunk | 212,836 bytes |
| EarlyAccess chunk | 15,125 bytes |
| Shared React chunk | 7,909 bytes |
| WebP output across both locales and all variants | 1,524,530 bytes |
| WOFF / WOFF2 output | 83,772 / 65,948 bytes |

The distribution contains 59 files, including both HTML documents and 57 other files. Hidden panels, lazy images, dynamic island imports, font-format selection, and lightbox originals mean the entire distribution is not loaded on every visit. Browser execution was unavailable, so no unused-CSS percentage or actual network waterfall is reported.

### 3.5 Environment, APIs, CI and repository workflow

Application configuration references one build-time variable, `SITE_URL`, in `astro.config.mjs:5`. Its private environment value was not read or disclosed. No `.env*` or `.dev.vars*` files were found in the repository search outside excluded dependency/Git directories. These patterns are ignored by Git. There are no application runtime bindings in Wrangler.

CI uses `ASTRO_TELEMETRY_DISABLED` and `CLOUDFLARE_SEND_METRICS` for tooling, and standard GitHub PR/commit context for commit checks. The deployment guide names `SKIP_DEPENDENCY_INSTALL` as a build-service setting. These are distinct from application credentials. No secret value or account credential was requested or printed. This was not a full secret-history scan.

The Quality workflow (`.github/workflows/quality.yml:1–62`) installs a checksum-verified standalone Lefthook binary, sets up the pinned Node/Bun toolchain, performs a frozen install, validates commit messages, runs `check`, `test`, `build`, and runs a Wrangler dry run. It grants `contents: read` and disables persisted checkout credentials. It does not publish. Remote workflow executions, branch protection, Workers Builds connectivity, and build/deployment permissions were not inspected.

## 4. Executed checks and outcomes

### 4.1 Commands

| Check actually executed | Result | Interpretation |
| --- | --- | --- |
| `bun install --frozen-lockfile` | Exit 0, no changes | Existing dependency installation is consistent with lockfile |
| `bun run check` | Initial exit 1 | Tooling attempted to create `/home/jhon/.config/astro`, unavailable in restricted execution |
| `ASTRO_TELEMETRY_DISABLED=1 bun run check` | Exit 0: 12 files, 0 errors, 0 warnings, 0 hints | Checker succeeds with the same telemetry setting used in CI |
| `bun run test` | Exit 127 overall; 3 tests passed, 0 failed before shell phase | `tests/commit-msg.sh:11`: `lefthook: not found`; complete suite did not pass |
| `bun run build` | Initial exit 1 | Same Astro telemetry-directory restriction |
| `ASTRO_TELEMETRY_DISABLED=1 bun run build` | Exit 0; two static pages; build reported 1.59s | Compilation succeeds; build reused image-cache entries and is not a cold-build benchmark |
| `ASTRO_TELEMETRY_DISABLED=1 bun run dev --port 4322` | CLI announced a background server; initial HTTP connection failed | Announcement alone was not accepted as a successful runtime check |
| `ASTRO_TELEMETRY_DISABLED=1 bun run preview --port 4321` | Same initial background/connection limitation | Retested in foreground below |
| `ASTRO_TELEMETRY_DISABLED=1 bun run dev --port 4322 --ignore-lock` | Ready; GET `/` and `/es/` returned 200 | Development server confirmed over HTTP |
| `ASTRO_TELEMETRY_DISABLED=1 bun run preview --port 4321 --ignore-lock` | Ready; both localized documents returned 200 and matched build bytes | Static production-build preview confirmed over HTTP |
| `CLOUDFLARE_SEND_METRICS=false bun run wrangler deploy --dry-run` | Initial restricted execution failed to create `.config/.wrangler`; retry with approved escalation exited 0 | Output: assets read, no bindings, `--dry-run: exiting now`; no publication performed |
| `bun .agents/skills/design-taste-frontend/scripts/lint.mjs --help` | Script actually scanned 11 source files: 0 FAIL, 0 WARN | This invocation runs the skill's source lint despite `--help`; it is not a visual, accessibility or performance audit |
| `bun .agents/skills/design-taste-frontend/scripts/inspect.mjs <production-url> --out /tmp/pipesor-taste-before --widths 1440,768,390 --json` | Exit 1: no Chrome/Edge/Chromium executable found | No inspection screenshots or layout results were produced |
| Chrome DevTools MCP `new_page` for production | Error: could not connect to Chrome at `127.0.0.1:9222` | No rendered-page, console or browser-network verification was possible |

`--ignore-lock` was selected after reading the installed Astro CLI implementation: `node_modules/astro/dist/cli/preview/index.js:36–48` and `cli/dev/index.js:97–108` describe agent backgrounding and this foreground option. No project script was changed. Initial local connection failures were resolved with this invocation; they are not classified as an application outage.

The three passing tests in `tests/diagnosis.test.ts:1–33` cover safe EN/ES form markup and translation shape/headline limits. They do not execute React event handlers, browser validation, the lightbox, responsive CSS, or a real conversion. Missing Lefthook is an unmet documented environment prerequisite; the existing CI explicitly installs it. No failing remote CI run was established.

### 4.2 Reproducible HTTP observations

The following are anonymous curl GETs without following redirects, against production and the local static preview. No POST or form submission was issued.

| Path | Production | Local preview on 4321 | Notes |
| --- | --- | --- | --- |
| `/` | 200; 33,034-byte HTML | 200; identical to `dist/index.html` | English |
| `/es/` | 200; 33,817-byte HTML | 200; identical to `dist/es/index.html` | Spanish |
| `/es` | 307; `Location: /es/` | 200 | Environment-specific slash normalization |
| `/en/` | 404; empty body | Not requested | Expected EN entry is `/`, not `/en/` |
| `/audit-missing-20261101` | 404; empty body | 404; 4,316-byte body | No custom 404 page exists in source |
| `/robots.txt` | 200; 1,248-byte text | 404 | Production response does not originate from a repository asset |
| `/sitemap.xml` | 404; empty body | 404 | No sitemap file or integration in source |
| `/sitemap-index.xml` | 404; empty body | Not requested | Alternative common sitemap location checked |

The development server on 4322 also returned 200 for `/`, `/es/`, and `/es`, and 404 for the nonexistent route, `/robots.txt`, and `/sitemap.xml`. Its EN/ES HTML was about 97KB, including development instrumentation; that is not production payload size.

Example reproduction:

```sh
curl -sS -D /tmp/pipesor-headers -o /tmp/pipesor-body \
  https://pipesor-landing.jhon-galvezchambi.workers.dev/
curl -sS -D /tmp/pipesor-es-headers -o /tmp/pipesor-es-body \
  https://pipesor-landing.jhon-galvezchambi.workers.dev/es/
curl -sS -D /tmp/pipesor-missing-headers -o /tmp/pipesor-missing-body \
  https://pipesor-landing.jhon-galvezchambi.workers.dev/audit-missing-20261101
```

One initial Python `urllib` request series received identical 403 responses, including at `/`. Independent curl requests repeatedly received the actual 200/307/404 responses shown above. The 403s are a client/access-path limitation of that series, not sufficient evidence of a general production outage or a crawler block. Its source was not established.

All **57 non-HTML build files** were downloaded from their production paths and compared with local bytes; all 57 matched. This includes styles, JavaScript chunks, images, fonts, icons, SVG wordmarks, and font licenses. This proves availability of those files in these requests; it does not substitute for observing the resource requests a browser actually chooses.

The two production HTML files differ from local output only in the generated `uid` attribute of `<astro-island>`. Splitting the HTML into tag segments isolated that difference; replacing only that attribute made each complete document identical. No other content/configuration divergence was found in this comparison. This does not identify the deployment commit or attest remote build configuration.

### 4.3 Initial HTML and links

Production HTML contains the localized content, FAQ, email form markup, screenshot captions, and the disabled submit control before client JavaScript executes. Both pages have the appropriate `html lang`, one H1, localized titles/descriptions, Open Graph fields, a large-image Twitter card declaration, canonical and EN/ES/x-default alternate links. No `meta robots` noindex or `X-Robots-Tag` was observed on the captured documents. No JSON-LD is implemented; its absence is an inventory fact, not an automatic defect.

Parsing every internal fragment link in each initial HTML document found **zero missing target IDs**. This verifies target existence only; scrolling, focus placement, and sticky-header overlap remain untested.

Anonymous external-link checks:

| Link exposed in footer | Result |
| --- | --- |
| `https://github.com/pipesor-org/pipesor-landing` | 404 |
| `https://github.com/Chaomeum` | 200 |
| `https://github.com/RamiroGuzmanCh` | 200 |

The repository link's anonymous 404 is a confirmed public dead end. A private repository, renamed repository, or unavailable path could explain it; no authenticated visibility check was performed.

### 4.4 HTTP delivery observations

Production EN and ES documents returned `HTTP/2 200`, `Content-Type: text/html`, `Server: cloudflare`, `CF-Cache-Status: HIT`, and `Cache-Control: public, max-age=0, must-revalidate`.

The CSS and React client JavaScript were also individually requested with `curl --compressed`. Both returned 200, matching content types, `Content-Encoding: zstd`, ETags and the same revalidation cache policy. Thus compression and edge-cache hits were directly observed; a long browser-cache lifetime for fingerprinted resources was not observed. This sample is not a complete CDN/cache-policy audit.

The captured HTML responses did not include CSP, HSTS, `X-Content-Type-Options`, or `Referrer-Policy`. There is no repository `_headers` file. HTTPS retrieval succeeded. Absence of those headers in this sample does not prove an exploit, absence of security controls elsewhere, or a need to enable every header without assessing compatibility. Cloudflare `NEL`/`Report-To` response headers were present; these are distinct from an application analytics SDK or a measured conversion funnel.

One initial curl GET reported TTFB `0.426928s`. This is a single unthrottled CLI observation from the audit environment, not a mobile benchmark, representative percentile, or real-user metric. LCP, INP, CLS, TBT, Lighthouse and field CWV were not measured.

## 5. Current-state observations and incomplete elements

### D1 — Published absolute metadata points at localhost (confirmed defect)

Evidence: `astro.config.mjs:5` falls back to a localhost origin. `Landing.astro:39–42` uses `Astro.site` to construct the social-image, alternate and canonical URLs. Production returned these exact values:

```html
<!-- English response -->
<meta property="og:image" content="http://localhost:4321/social-card.png">
<link rel="alternate" hreflang="en" href="http://localhost:4321/">
<link rel="alternate" hreflang="es" href="http://localhost:4321/es/">
<link rel="alternate" hreflang="x-default" href="http://localhost:4321/">
<link rel="canonical" href="http://localhost:4321/">
<!-- Spanish canonical -->
<link rel="canonical" href="http://localhost:4321/es/">
```

The tags exist but reference an origin that external visitors and crawlers cannot use to reach this deployment. This undermines canonical/localization signals and social-image retrieval. It does not prove that Google has excluded the page: Search Console was unavailable. `docs/deployment.md:15–22` already documents the build-time origin requirement. The output establishes the effective incorrect origin, but not whether the remote variable was missing, incorrectly set, or whether a previous build was deployed. No environment value was inspected or changed.

### D2 — Early access is a safe preview, not an operational conversion (intentional pending capability)

Evidence: `EarlyAccess.tsx:9–17` prevents submit, uses `method="dialog"`, has no destination, and disables the submit button. `Landing.astro:69`, `:76`, `:112–113` points the main CTAs at that preview. `content.ts:15`, `:49–54` and Spanish equivalents disclose that registration is unavailable. Unit rendering tests confirm the safe markup in both locales.

No account creation, lead storage, submission endpoint, delivery confirmation, loading state for a request, or request-error handling exists. Those request states are not currently applicable because no request can be made. The explicit owner constraints require this condition; this audit did not enable collection. **Business implication:** the deployed page can communicate the concept but cannot complete the intended registration. Whether CTA wording creates avoidable disappointment is a CRO hypothesis for a later phase, not a measured conversion defect.

### D3 — Footer project link is inaccessible anonymously (confirmed public defect)

Evidence: `Landing.astro:124` links to the repository; anonymous curl with redirects followed returned 404. Contributor profile links returned 200. Visitors cannot inspect the linked repository through the current public link. Cause and intended repository visibility remain unverified.

### D4 — Legal identity, policies, documentation and licensing are pending (confirmed, intentionally incomplete)

Evidence: `Landing.astro:125`, `:132–138`; `content.ts:55–60` and Spanish equivalents. `pipesor-docs` is plain text marked planned, Privacy Policy and Terms are plain text marked pending, and licensing/copyright-holder text explicitly remains unresolved. They are not anchors to missing legal pages. No official contact email, pricing, testimonials, customer results, or unsupported commercial guarantee was found.

These reflect owner constraints in `docs/landing-page-brief.md:273–282` and the licensing discussion in `docs/footer-refinement.md`. No jurisdiction-specific legal conclusion is possible from the repository. No cookie banner is implemented; the brief explicitly says not to introduce one without an applicable need. Policy and analytics absence must not be treated as proof of a legal violation.

### D5 — Crawl assets differ between source and production (confirmed inventory/delivery difference)

Neither `public/robots.txt` nor a sitemap generator/file exists. Production nevertheless serves `robots.txt` containing explanatory “content signals” comments, with no active `User-agent`, `Disallow` or `Sitemap` directives in the captured body. A Cloudflare-managed response is a plausible explanation, but its provenance cannot be confirmed without account settings. The response itself does not contain a search disallow rule.

Both common sitemap endpoints return 404. These are missing discovery assets in the current implementation; their absence does not by itself make a two-page site unindexable. Remote crawler policy, sitemap submission, actual indexing and the selected canonical remain unverified.

### D6 — Not-found status is correct, but production recovery content is absent (confirmed)

Evidence: GET `/audit-missing-20261101` returns 404 with `Content-Length: 0` in production; no `src/pages/404.astro` exists. The static preview provides a generic 404 body. There is no demonstrated soft-404/SPA fallback to the landing. A visitor following an invalid production path receives no site-provided recovery navigation. This is a response-content gap, not a failure of the valid landing routes.

### D7 — Runtime interactions are implemented but not browser-proven (partial verification)

Source behavior is present for native FAQ/workflow disclosures; CSS radio selection for screenshots; theme initialization/persistence; language switching with hash preservation; a link that selects history; lightbox open/zoom/close and focus restoration; and local email feedback. Evidence: `Landing.astro:83–110`, `:143–169`; `ImageLightbox.astro:17–55`; `EarlyAccess.tsx:4–17`; `global.css:126–137`.

No browser could be reached. Consequently the audit cannot claim that those handlers execute, hydration succeeds, keyboard order is correct, focus returns, error announcements work, controls remain visible, or the console is clean. Source presence and passing static tests are insufficient to close these checks.

### D8 — Automated coverage is narrow and this environment lacks Lefthook (confirmed limitation)

Evidence: all three `diagnosis.test.ts` tests passed, but `bun run test` exited 127 in the commit-message script. There are no browser/E2E tests in the inspected project and CI does not run a browser. The workflow includes its own Lefthook installation, so the local missing binary is not proof of broken CI. A complete local suite result requires that documented prerequisite; browser behavior requires separate testing.

### D9 — A small unused style and incomplete localization detail exist (confirmed source observations)

`.secondary-button` and its hover rule occur only in `global.css:77–78`; no Astro/React source uses the class. This is a small unused style, not evidence of a significant performance problem. The search found no TODO/FIXME/XXX markers or lorem-ipsum text in application source/public assets; a clean marker search cannot prove functional completeness.

EN/ES content has matching top-level keys and equal workflow/FAQ item counts in tests. Spanish history/insights assets are localized; shared English screenshots are explicitly labeled as English (`Landing.astro:25–29`). `og:image:alt` remains English in both locales (`:39`). Translation shape is verified; complete linguistic quality and visual truncation are not.

### D10 — Historical documentation cannot certify the current deployment (confirmed evidence boundary)

README and deployment guide deliberately describe setup rather than attest production state. Older design reports contain Lighthouse and trace results, and the brief's original asset checklist lists items that now exist. `docs/refinement-verification.md:3` itself says later refinements supersede earlier checks. Those are useful history, not fresh measurements or a reliable current missing-asset inventory. This audit verified the supplied live URL independently.

## 6. Answers to the ten runtime reconnaissance questions

| Question | Phase 1 answer |
| --- | --- |
| 1. Does installation and compilation work? | Frozen install passes against existing dependencies. Static build and Astro check pass with CI-equivalent telemetry disabled. Complete tests are blocked by missing Lefthook. Clean-room install was not tested. |
| 2. Does it run locally? | Yes: foreground dev and static preview both served EN/ES over HTTP. Initial agent-backgrounded attempts were not reachable; foreground invocation resolved that. |
| 3. Console or network errors? | Browser console/network not verifiable. CLI checks and anonymous asset downloads succeeded as described; this does not establish an error-free browser session. |
| 4. Do routes work? | `/` and `/es/` return 200; production `/es` redirects to `/es/`; nonexistent production route returns 404. `/en/` is not an implemented route. |
| 5. Do assets load? | All 57 non-HTML build files matched bytes downloaded from production. Actual responsive browser resource selection and loading were not observed. |
| 6. Local/production differences? | Production adds robots response, normalizes `/es`, and has empty 404 bodies. Valid HTML matches local build except generated island UID; absolute metadata is wrong in both because of the effective build origin. |
| 7. Is content in initial HTML? | Yes, both locales include main content and form markup without client execution; one H1 each, no missing fragment IDs. Wrong absolute metadata is separately confirmed. |
| 8. Do interactions execute? | Implementations exist, but browser execution was not demonstrated. No real submission was attempted. |
| 9. Responsive defects? | Cannot determine visually. Responsive styles exist, including deliberate screenshot crops. No screenshots or viewport measurements could be obtained. |
| 10. Conversion-affecting errors? | Registration is intentionally unavailable and the public repository link returns 404. Metadata points at localhost. Conversion-rate effects, wording friction, and responsive interaction issues were not measured. |

## 7. Initial-state register

| State | Diagnosis |
| --- | --- |
| Working, directly verified | Existing frozen dependency setup; Astro diagnostics; static compilation; local HTTP serving; EN/ES production routes; initial localized content; internal fragment IDs; production asset availability; sampled compression/edge-cache delivery; deployment dry-run validation |
| Working partially / only by source evidence | Form validation, theme/language interaction, screenshot browser, dialogs and FAQ; localization parity beyond test shape; accessibility mechanisms; CI definition without remote run verification |
| Confirmed defects | Public canonical/hreflang/social-image origin points at localhost; anonymous repository link returns 404 |
| Confirmed gaps | No source sitemap; empty production 404 response; minor unused CSS; English social-image alt in ES |
| Intentionally not implemented | Live registration and data collection; backend/GitHub connections; finalized entity/contact/policies/license; project documentation destination; application analytics and conversion tracking |
| Not verifiable | Browser console/network and hydration, responsive rendering, keyboard/focus, full accessibility, real browser form feedback, visual quality, user metrics, actual indexing, remote builds/settings, secret history and vulnerability status |

## 8. Architectural and operational risks to carry forward

These are reconnaissance risks, not a prioritized implementation plan:

1. **Build-origin dependency:** `SITE_URL` controls several public metadata fields at compilation. The fallback silently creates publishable HTML with a local origin. The current deployment demonstrates that risk. Changing only a runtime variable would not rewrite already-built static documents.
2. **Environment mismatch:** Astro preview is useful for content but does not reproduce Workers slash normalization, managed robots, headers, or 404 bodies. A successful preview cannot certify all production behavior.
3. **Future registration changes the trust boundary:** the current static form collects nothing. Enabling submissions would introduce a destination, data-handling obligations, request/error states, abuse considerations and approvals that do not exist today. This is not justification for adding SSR or a backend during this diagnosis.
4. **Client dependency for a small preview feature:** React hydrates the email-format preview and ships its supporting chunks. The size is measured above; actual interaction cost, hydration success and impact on performance are not measured. No architecture migration is justified by this inventory alone.
5. **Automation misses browser behavior:** present tests/checks can pass without exercising keyboard controls, responsive states or browser console errors. Current browser unavailability leaves that evidence gap open.
6. **Remote configuration is outside the repository evidence:** Workers Builds, edge-managed robots and production/preview visibility cannot be reconstructed reliably from Wrangler and setup instructions alone.

## 9. Unavailable checks and requirements to complete reconnaissance

| Unverified area | Concrete limitation | Needed to verify |
| --- | --- | --- |
| Rendered production/build preview | Chrome DevTools MCP could not connect; skill inspector found no browser executable | A reachable Chrome DevTools MCP browser and the production/build-preview page |
| Responsive behavior | No browser screenshots or DOM geometry | At least 320px small mobile, 390px mobile, 768px tablet, and 1440px desktop, EN/ES and light/dark; include 1024px where useful |
| Keyboard, focus, dialog and error feedback | Source inspected, no browser interaction | Tab/Shift+Tab, radio arrow keys, Enter/Space/Escape, focus return and no-submit validation checks |
| Console and browser network | CLI HTTP checks do not execute JavaScript | Fresh page loads, scrolling into the hydrated island, and interaction sessions with console/network inspection |
| Complete test command | Standalone Lefthook not on PATH | README's Lefthook prerequisite, then `bun run test`; no hook installation or Git setting was changed here |
| Screen readers and other engines | No assistive technology or browser engines available | Manual assistive-technology testing and explicit supported-browser matrix |
| CWV and representative performance | No trace/Lighthouse/field-data run | Browser-based lab tests and separate real-user/CrUX evidence where available; historical reports cannot replace these |
| Google index status | No Search Console access | Property access and URL inspection; raw HTML alone cannot establish indexing |
| Remote deployment origin and policy | No account inspection | Read-only Workers Builds/deployment settings and edge policy access, without exposing secret values |
| Dependency security and history | No advisory or repository-history secret scan | Dedicated read-only checks; no absence-of-vulnerability claim is made |
| CRO or legal conclusions | No funnel data, user research or applicable-jurisdiction analysis | Approved product decisions, analytics policy and relevant evidence in later work |

## 10. Reference documentation consulted

Context7 was available: the Astro library was resolved as `/withastro/docs` and queried for static output and origin configuration. Its results were checked against the actual installed version/build rather than used to assume project settings. Official documentation was also opened for the specific observed behavior:

- [Astro configuration reference](https://docs.astro.build/en/reference/configuration-reference/): static output and `site` configuration. The executed build confirms which mode this repository actually uses.
- [Cloudflare Workers Static Assets HTML handling](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/): context for asset-path handling; the route table records the actual responses rather than assuming all preview behavior matches Workers.
- [Google Search Central: canonical URL declarations](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls): canonical annotations are signals about the preferred URL; the observed localhost values are not a claim about Google's eventual indexing decision.

## 11. Phase 1 conclusion

The repository builds a functioning, small, static bilingual product presentation, and the public deployment serves its current assets and initial content. It is an explicitly limited prototype presentation: early-access registration is not operational by design. Production has a confirmed metadata-origin error and an anonymously inaccessible project link. Local tool prerequisites and browser availability prevent a complete QA pass; browser behavior, responsive quality, accessibility and performance remain open, not passed.

This completes reconnaissance to the extent supported by the available tools. No scoring, detailed category evaluation, prioritized backlog, roadmap, or application correction has been performed.
