# Consolidated landing audit — Astro and Cloudflare Workers

Production assessed: https://pipesor-landing.jhon-galvezchambi.workers.dev/. Evidence collection: 1 November 2026 America/Lima / 2 November UTC, as recorded in Phases 1–2. Consolidation introduces no fresh application measurement. Recorded application checkout: `5f3360f`.

## 1. Executive summary

Provisional rubric score **64.17/100**, weighted evidence-bearing coverage **78.51%**, coverage-adjusted evidence credit **50.80/100**. The underlying assessment has 144 criteria: 34 supported within stated scope, 62 partial, four failed/unavailable intended-outcome determinations, 27 unknown and 17 excluded optional/inapplicable criteria. These are audit-rubric categories, not 144 browser tests or an official compliance score.

The static bilingual prototype presentation works at the verified build/HTTP level. Confirmed public issues are localhost metadata destinations, an HTTP root serving content without HTTPS redirect, and a public repository link returning 404. Registration is intentionally unavailable, while actual browser interactions, accessible operation, responsive quality and current CWV are not established. The field-boundary contrast concern is supported by CSS calculations, with rendered conformance still pending.

The consolidated backlog has **33 items: 0 P0, 10 P1, 16 P2, 7 P3**. It distinguishes actual defects, verification tasks, owner decisions and optional enhancements. Registration/analytics approval limits remain in force. A prototype score is not proof of readiness to collect leads or scale traffic.

## 2. Scope and limitations

This completes the master prompt’s Phase 5 plan and Phase 6 documents, using the preserved Phase 1–4 evidence. It is diagnosis/planning only. No application, dependency, environment or remote setting was changed; no commit, push, deployment, real form submission, telemetry integration or product decision was made. Reports are in English under repository guidance.

Sources are [Phase 1](FASE_1_DIAGNOSTICO.md), [Phase 2](FASE_2_AUDITORIA.md), [Phase 3 scoring ledger](FASE_3_PUNTUACIONES.md) and [Phase 4 detailed backlog](FASE_4_PENDIENTES.md). Their evidence and original dates remain authoritative; this report consolidates rather than silently retesting them. Official-source references are retained in the detailed categories. No new external research is represented as executed here.

Scores are explicitly chosen rubric calculations over previous observations, not invented tool results. Coverage counts partial evidence, not full runtime assurance. Security advisories are a scoped registry result, not a security guarantee; no legal sufficiency, Google indexing, aesthetic quality, conversion effect or real-user performance is certified. Unknown tests and conditional future scope remain separately visible. Actual future changes need their appropriate checks and approvals; the roadmap is not implementation authorization.

## 3. Current application state

Astro 7.4.4 with React integration 7.1.2 and React/DOM 19.3.1 generates static EN `/` and ES `/es/` pages; Wrangler 4.156.0 serves `dist` through Workers Static Assets with no custom backend, SSR adapter or bindings. Node 24.22.2 and Bun 1.4.4 match pins. Shared landing, image viewer, product-image, branding and local-validation components use common i18n and plain CSS. Images and fonts are self-hosted; the form is the only React island (`client:visible`).

The product is an early-stage AIOps thesis prototype for evidence-backed GitHub Actions incident diagnosis and human validation, with explicit demo/experimental labels. Engineering/platform/DevOps teams responsible for CI/CD are a provisional audience inference, not validated market research. Intended conversion is early-access registration, while the current approved outcome is concept exploration and a safe disabled preview.

Working evidence includes frozen existing-dependency install, static build/check/dry run, initial localized content, primary routes and fragment targets, production asset availability, sampled compression/cache hits and safe preview markup. Browser execution and wider accessibility/performance remain partial or unknown. Legal identity, official contact, rights/license, documentation destination, analytics and actual collection are explicitly pending decisions, not permission to invent them. No need for SSR or hosting migration was demonstrated.

## 4. Executed test results

### Commands and HTTP verification inherited from Phase 1

#### 4.1 Commands

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

#### 4.2 Reproducible HTTP observations

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

#### 4.3 Initial HTML and links

Production HTML contains the localized content, FAQ, email form markup, screenshot captions, and the disabled submit control before client JavaScript executes. Both pages have the appropriate `html lang`, one H1, localized titles/descriptions, Open Graph fields, a large-image Twitter card declaration, canonical and EN/ES/x-default alternate links. No `meta robots` noindex or `X-Robots-Tag` was observed on the captured documents. No JSON-LD is implemented; its absence is an inventory fact, not an automatic defect.

Parsing every internal fragment link in each initial HTML document found **zero missing target IDs**. This verifies target existence only; scrolling, focus placement, and sticky-header overlap remain untested.

Anonymous external-link checks:

| Link exposed in footer | Result |
| --- | --- |
| `https://github.com/pipesor-org/pipesor-landing` | 404 |
| `https://github.com/Chaomeum` | 200 |
| `https://github.com/RamiroGuzmanCh` | 200 |

The repository link's anonymous 404 is a confirmed public dead end. A private repository, renamed repository, or unavailable path could explain it; no authenticated visibility check was performed.

#### 4.4 HTTP delivery observations

Production EN and ES documents returned `HTTP/2 200`, `Content-Type: text/html`, `Server: cloudflare`, `CF-Cache-Status: HIT`, and `Cache-Control: public, max-age=0, must-revalidate`.

The CSS and React client JavaScript were also individually requested with `curl --compressed`. Both returned 200, matching content types, `Content-Encoding: zstd`, ETags and the same revalidation cache policy. Thus compression and edge-cache hits were directly observed; a long browser-cache lifetime for fingerprinted resources was not observed. This sample is not a complete CDN/cache-policy audit.

The captured HTML responses did not include CSP, HSTS, `X-Content-Type-Options`, or `Referrer-Policy`. There is no repository `_headers` file. HTTPS retrieval succeeded. Absence of those headers in this sample does not prove an exploit, absence of security controls elsewhere, or a need to enable every header without assessing compatibility. Cloudflare `NEL`/`Report-To` response headers were present; these are distinct from an application analytics SDK or a measured conversion funnel.

One initial curl GET reported TTFB `0.426928s`. This is a single unthrottled CLI observation from the audit environment, not a mobile benchmark, representative percentile, or real-user metric. LCP, INP, CLS, TBT, Lighthouse and field CWV were not measured.

### Additional read-only checks from Phase 2

The two production HTML hashes remained identical to Phase 1, and the inspected application/configuration had no diff between the recorded revisions. New parsing found unique IDs and no broken fragment targets in EN/ES. Index-file routes normalized by 307; plain HTTP root returned 200 with identical HTTPS bytes. The repository URL remained anonymous 404; profiles were 200. `bun audit --json` exited 0 with `{}` and `bun outdated` reported the historical Wrangler patch/TypeScript major availability; neither output proves universal security or a required update. Taste source lint: nine files, zero failures/warnings.

Three compressed CLI TTFB samples per locale gave median 0.228997s EN and 0.233561s ES. These are unthrottled audit-environment samples, not mobile/desktop browser or field measurements. Chrome DevTools retry failed at localhost:9222. PSI mobile returned 429 with no Lighthouse result. No screenshots, accessibility engine, screen-reader session, current LCP/INP/CLS or field percentile was obtained. The category detail below preserves measurement conditions and exact limitations; historical repository audits were not reused as fresh measurements.

## 5. Category scores and methodology

### Method and interpretation

Each of the 144 criterion rows in Phase 2 A-H is retained below, in original order, with a stable category/ordinal ID. Each non-excluded row has equal unit weight within its category; category weights are A20/B15/C20/D15/E10/F10/G5/H5. Grouped rows retain Phase 2 granularity rather than introducing favorable new checks.

| Code | Definition | Credit |
| --- | --- | --- |
| S | Property supported at its stated source/HTTP/editorial scope | 1 |
| P | Actual partial implementation/evidence; complete criterion not established | 0.5 |
| F | Observed failure or unavailable intended conversion outcome | 0 |
| N | No sufficient evidence for the requested result | None; excluded from observed-score denominator |
| X | Optional enhancement, inapplicable behavior or deliberately unapproved scope | Excluded; no penalty or automatic pass |

Half credit is a transparent rubric choice, not a claim that exactly half the users, WCAG requirements or performance targets pass. S is scoped: e.g. a successful advisory lookup or clear copy is not universal safety or measured comprehension. P preserves missing runtime assurance even where source code is sound. N remains unknown; tool unavailability is never recorded as an application failure.

For each category, let V=S+P+F (rows with assessable evidence), T=V+N (applicable rows), and E=S+0.5P (rubric credit). Then:

```text
Observed evidence credit (%) = 100 * E / V
Provisional category points  = category_weight * E / V
Evidence-bearing coverage (%) = 100 * V / T
Coverage-adjusted credit     = category_weight * E / T
Global reference score      = sum(provisional category points)
Weighted coverage (%)       = sum(category_weight * V / T)
Global adjusted credit      = sum(coverage-adjusted credit)
```

The global reference normalizes only the observed portions, so it can look stronger than the full evidence supports; the adjusted figure withholds credit for N without labeling N a defect. Coverage counts P as an evidence-bearing row, **not** as a fully tested requirement. Many rows are partial, so coverage is not browser-test coverage. Use unrounded arithmetic and round only displayed results.

Scope distinction: C18 receives zero intended-conversion readiness credit because no registration can complete, while respecting the approved disabled-form safety design. It is not a regression or P0 incident. Request-state features, unavailable testimonials, unapproved contact/legal details and analytics scope are excluded where the current brief makes them optional/inapplicable; their future decisions remain in the backlog. Thus the score is not a measurement of a live acquisition funnel.

Repeated effects can affect several weighted categories as requested (e.g. origin/HTTP/link), but their implementation backlog is consolidated by root cause. Optional cache/metadata/schema improvements do not create automatic scoring penalties. No security exploitation, index exclusion, failed CWV or visual defect is inferred from missing tools.

### Category results

| Category | Points / max | Evidence credit on V | Coverage V/T | S / P / F / N / X | Risk | Main evidence / findings |
| --- | --- | --- | --- | --- | --- | --- |
| A. Technical SEO | 12.94 / 20 | 64.71% (11/17) | 89.47% (17/19) | 7 / 8 / 2 / 2 / 2 | High | Wrong public origin and repository 404; indexing unknown. Phase 2 A/A1; LAND-001/002/003/012/013/014/015/031/032. |
| B. Performance and Core Web Vitals | 9.64 / 15 | 64.29% (4.5/7) | 41.18% (7/17) | 2 / 5 / 0 / 10 / 0 | Undetermined; high verification risk | No CWV/browser metrics; working delivery mechanisms and dead CSS only. Phase 2 B/B1; LAND-008/009/027/028. |
| C. UX/UI and conversion | 13.33 / 20 | 66.67% (12/18) | 85.71% (18/21) | 7 / 10 / 1 / 3 / 3 | High for intended acquisition | Registration deliberately unavailable; visual/behavioral outcomes unverified. Phase 2 C; LAND-003/005/006/017/018/019/020/021/030. |
| D. Accessibility | 9.00 / 15 | 60.00% (9/15) | 83.33% (15/18) | 3 / 12 / 0 / 3 / 1 | Undetermined; potentially high | Input-boundary concern and missing keyboard/AT/reflow evidence. Phase 2 D/D1; LAND-004/007. |
| E. Content and copywriting | 7.08 / 10 | 70.83% (8.5/12) | 100.00% (12/12) | 5 / 7 / 0 / 0 / 2 | Medium | Owner copy approval and availability wording; no evidence of invented claims. Phase 2 E; LAND-013/016/017/018/020/021/031. |
| F. Functionality and QA | 5.42 / 10 | 54.17% (6.5/12) | 66.67% (12/18) | 1 / 11 / 0 / 6 / 1 | High verification risk | Core browser matrix unknown; external dead end and empty recovery. Phase 2 F; LAND-003/005/006/007/010/011/033. |
| G. Astro and Cloudflare Workers | 3.75 / 5 | 75.00% (10.5/14) | 100.00% (14/14) | 7 / 7 / 0 / 0 / 2 | Medium; shared origin defect material | Static architecture fits; remote policies not verified. Phase 2 G; LAND-001/011/015/025/027/028/029. |
| H. Analytics, privacy and security | 3.00 / 5 | 60.00% (3/5) | 62.50% (5/8) | 2 / 2 / 1 / 3 / 6 | High for confirmed transport gap | HTTP root is not redirected; legal/analytics scope deliberately pending. Phase 2 H/H1-H3; LAND-002/016/017/022/023/024/025/026. |

**Total: 64.17/100; weighted coverage 78.51%; coverage-adjusted credit 50.80/100.**

Across rows: S=34, P=62, F=4, N=27, X=17. Only S+F=38 rows have full scoped determinations; 62 carry half-credit limits. No current metric supports interpreting B's points as a Lighthouse performance score or a CWV pass.

### Objective versus heuristic evidence

A/D/F/G/H primarily use source, HTML, commands or HTTP evidence within stated limits. C and E include explicit editorial judgments: offer clarity, positioning, sequence, tone, benefits and microcopy are heuristics from the existing review, not measured comprehension or conversion. Those judgments receive S/P only at that editorial scope. B mixes implementation evidence and small CLI samples; all LCP/INP/CLS, total visit cost and actual device-performance outcomes remain N.

The detailed ledger provides the scoring choice for every original row; the original Phase 2 row remains its evidence source. Broad criteria with missing runtime verification receive P or N rather than silently passing. Status codes are decisions by this audit rubric, not tool results.

The complete one-row-per-criterion classification with source line references is preserved in [FASE_3_PUNTUACIONES.md](FASE_3_PUNTUACIONES.md). Unrounded calculations produced the displayed total; adding individually rounded category values can differ by 0.01.

## 6. Detailed category findings and evidence

The following reproduces the Phase 2 assessments and references at their original evidence scope. An absent feature is not automatically a defect; recommendations, editorial hypotheses and unknown outcomes remain labeled.

### A. Technical SEO

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

#### A1. Shared metadata-origin defect

Confirmed on both new production GETs:

```html
<meta property="og:image" content="http://localhost:4321/social-card.png">
<link rel="alternate" hreflang="en" href="http://localhost:4321/">
<link rel="alternate" hreflang="es" href="http://localhost:4321/es/">
<link rel="alternate" hreflang="x-default" href="http://localhost:4321/">
<link rel="canonical" href="http://localhost:4321/">
```

Spanish uses the same four absolute destinations and `canonical=http://localhost:4321/es/`. Root cause in source is the localhost fallback used by `Astro.site`. The remote reason for producing that effective origin is unknown. **Recommendation:** supply/validate the approved public origin at build time and validate the resulting EN/ES HTML before any approved future publication. This is a corrective recommendation, not a deployment performed by this audit. Google can choose another canonical; the evidence does not establish deindexing. Canonical and localization semantics follow the [Google canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) and [hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions) guidance.

#### A2. Contextual SEO recommendations

A sitemap can help explicit discovery, particularly after content growth, but its absence is not a launch-blocking defect for this tiny linked site. This distinction follows [Google's sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview). Optional structured data should describe only established facts and relevant supported features; adding JSON-LD is not a substitute for fixing public URLs. See [Google's structured-data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data).

### B. Performance and Core Web Vitals

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

#### B1. Repeated TTFB observations

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

### C. UX/UI and conversion

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

#### C1. Recommendations and CRO hypotheses

- **Confirmed corrective need:** make the existing project-inspection link publicly useful or clearly reflect its intended visibility. This removes a demonstrated dead end; it does not establish a numerical trust uplift.
- **Copy hypothesis:** until registration opens, consider owner-approved CTA wording that accurately describes the available preview/exploration action. Preserve the explicit decision to collect nothing. Test expectation/comprehension first; this audit does not change the approved CTA.
- **Audience hypothesis:** test an accurate role/team cue near the hero if qualified visitors cannot identify relevance. No evidence justifies broadening the product to other CI/CD platforms.
- **Trust hypothesis:** an approved project/contact destination could answer questions that cannot be resolved while registration is closed. Do not substitute invented legal text or testimonials.

No A/B test ran, no visitor interview was conducted, and no behavioral data was collected. These hypotheses must not be described as proven conversion improvements. Visual redesign recommendations are withheld until the screenshot critique can be performed.

### D. Accessibility — WCAG 2.2 A/AA

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

#### D1. Token contrast calculations

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

### E. Content and copywriting

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

#### Section disposition, with reasons

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

### F. Functionality and QA

#### Functional coverage

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

#### Reproducible confirmed defects and gaps

These are test cases and observations within Phase 2, not a prioritized backlog. Shared causes are referenced rather than duplicated.

| Case | Steps to reproduce | Actual result | Expected behavior / limit | Evidence |
| --- | --- | --- | --- | --- |
| Metadata origin | GET HTTPS `/` and `/es/`; inspect canonical, alternates, `og:image` in initial HTML | Five localhost URLs per page | Public metadata resolves to the approved public origin and appropriate locale | A1; `astro.config.mjs:5`, `Landing.astro:39–42` |
| Public project link | Read footer repository URL; anonymous GET with redirects followed | 404 | If presented as a public project resource, destination should be inspectable by that visitor, or its restricted/planned state made accurate | `Landing.astro:124`; new anonymous curl |
| Empty not-found page | GET `/phase2-missing` | 404, zero-byte body | Preserve 404; a professional site can provide localized recovery navigation rather than an empty response. Recovery content is a usability recommendation, not a route-status failure | No custom 404 source; new response |
| Insecure scheme remains usable | GET `http://pipesor-landing.jhon-galvezchambi.workers.dev/` without `-L` | 200, 33,034-byte HTML identical to HTTPS, no Location | Redirect to approved HTTPS route before serving the document; assess platform controls and browser upgrade behavior separately | H1; new HTTP/1.1 response |

For the preview form, “CTA → form → cannot submit” is **expected under the approved brief**. It is not a regression test failure. For the input-boundary contrast concern, code/numeric evidence is in D1; no browser test result is fabricated.

#### Required viewport and manual-test matrix

| Representative viewport | EN/light | EN/dark | ES/light | ES/dark | Result |
| --- | --- | --- | --- | --- | --- |
| Small mobile 320×568 | Not executed | Not executed | Not executed | Not executed | Blocked: no reachable Chrome |
| Mobile 390×844 | Not executed | Not executed | Not executed | Not executed | Same limitation |
| Tablet 768×1024 | Not executed | Not executed | Not executed | Not executed | Same limitation |
| Desktop 1440×900 | Not executed | Not executed | Not executed | Not executed | Same limitation |

The browser page could not be created, so no viewport was actually emulated. These cases record missing mandatory coverage, not simulated executions. Once a browser is available, each case needs header/hero/CTA visibility, full-page overflow, screenshot crop/zoom, disclosure/radio states, form validation and console/network inspection. Keyboard-only navigation, skip link, Escape/focus restoration, reduced motion, 200% text size and 400% reflow require additional explicit runs. Use a production build preview and compare edge-specific behavior against the live deployment; do not send forms.

### G. Astro and Cloudflare Workers

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

### H. Analytics, privacy and security

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

#### H1. HTTP page is served without an HTTPS redirect — confirmed

Reproduced twice with anonymous curl, no redirect following:

```sh
curl -sS --max-time 20 -D /tmp/pipesor-http-headers \
  -o /tmp/pipesor-http-body \
  http://pipesor-landing.jhon-galvezchambi.workers.dev/
```

Observed: `HTTP/1.1 200 OK`, `Content-Type: text/html`, no `Location`; 33,034-byte body identical to the HTTPS English document. The HTTPS response also did not supply HSTS. The confirmed defect is lack of HTTP-to-HTTPS redirection on this route. Browser HTTPS-First behavior, inherited/preloaded parent-host policies, and other routes were not measured, so browser-specific downgrade exposure is not asserted as a reproduced exploit.

**Recommendation:** enforce the approved HTTPS origin through the applicable platform/static routing controls and verify both locales and redirect preservation. Assess HSTS only for the hostname actually controlled and compatible deployment policy; do not prescribe parent-domain preload or broad `includeSubDomains` on a shared hosting domain. [MDN HSTS guidance](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) explains browser transport upgrading; HSTS and a server redirect address different entry cases.

#### H2. Hardening recommendations, not confirmed exploits

Consider appropriate MIME-sniffing, referrer, framing and content-loading policies on the actual static responses. A CSP must accommodate or hash the existing inline theme initializer, Astro hydration/bootstrap and page scripts; an untested strict policy could break themes, image enlargement and the form. Evaluate with report-only testing where appropriate rather than inventing a universal header snippet. Source: [MDN CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP). Static Assets can apply custom headers without a new backend through [Cloudflare's header mechanism](https://developers.cloudflare.com/workers/static-assets/headers/).

The advisory scan is explicitly read-only: [Bun's audit documentation](https://bun.com/docs/pm/cli/audit) describes lockfile advisory checking and the raw JSON option. No `audit fix`, dependency update or lockfile edit occurred.

#### H3. Legal and measurement limits

No opinion on GDPR, local privacy law, cookie-consent applicability or final policy sufficiency is asserted. The responsible entity, jurisdictions, platform logging practices, future data flow and lawful purposes are not established. The current no-submission constraint remains in force. Any future measurement proposal needs owner approval and must avoid email/raw personal information in event payloads. Defining a desired event model is a recommendation; no events were installed or sent.

## 7. Complete pending-work backlog

The records below are identical in substance to [BACKLOG_LANDING.csv](BACKLOG_LANDING.csv), which remains the existing UTF-8 BOM/quoted CRLF import artifact. Every record preserves ID, category, priority, status, evidence, source references, impact, recommendation, acceptance, effort, dependencies and confidence, with type and priority rationale. Repeated root-cause effects share an item rather than duplicate implementation work.

### Priority and status rules

- **P0:** confirmed severe failure of current authorized operation/conversion or severe data/security failure. No such finding was demonstrated. Disabled prototype registration is not reclassified as a regression.
- **P1:** substantial confirmed impact, explicit acquisition prerequisite, or missing evidence for a core acceptance requirement; the finding type distinguishes these.
- **P2:** material non-blocking improvement, owner decision or narrower verification need.
- **P3:** optional/contextual enhancement or low-impact cleanup.

Priority for a verification item means urgency to obtain evidence, not a claim that the unknown behavior is defective. Effort is a coarse estimate, not a measured duration; medium/high can be dominated by access, review and external approval. Confidence in a gap is separate from confidence that a bug exists.

Status vocabulary: Absent, Defective, Partial, Not verifiable, Improvement suggested. Absent can be intentional. Conditional work is explicitly deferred unless its scope/approval prerequisites are met; this report is not approval to implement it. Recommendations may close with a justified retain/defer decision where their acceptance criteria permit that.

### Counts

| Priority | Items |
| --- | --- |
| P0 | 0 |
| P1 | 10 |
| P2 | 16 |
| P3 | 7 |
| Total | 33 |

### Register by priority

| ID | Priority | Type | Pending item |
| --- | --- | --- | --- |
| [LAND-001](#land-001) | P1 | Confirmed defect | Correct the shared public metadata origin |
| [LAND-002](#land-002) | P1 | Confirmed defect | Enforce the approved HTTPS origin |
| [LAND-004](#land-004) | P1 | Source-supported accessibility concern | Verify and resolve the email-field boundary contrast concern |
| [LAND-005](#land-005) | P1 | Verification gap | Complete functional browser and network verification |
| [LAND-006](#land-006) | P1 | Verification gap | Verify responsive design and rendered visual quality |
| [LAND-007](#land-007) | P1 | Verification gap | Complete manual WCAG 2.2 A/AA verification |
| [LAND-008](#land-008) | P1 | Verification gap | Measure current mobile/desktop performance and resource cost |
| [LAND-014](#land-014) | P1 | Verification gap | Verify actual indexing and Google canonical selection |
| [LAND-017](#land-017) | P1 | Conditional acquisition blocker / owner decision | Approve identity and data-handling/privacy prerequisites |
| [LAND-019](#land-019) | P1 | Intentional pending conversion capability | Implement real registration only after approval |
| [LAND-003](#land-003) | P2 | Confirmed defect | Remove the public project-link dead end |
| [LAND-009](#land-009) | P2 | Verification gap / conditional measurement | Establish field-performance evidence availability |
| [LAND-010](#land-010) | P2 | Environment/verification gap | Complete the documented quality suite and clean-environment evidence |
| [LAND-011](#land-011) | P2 | Observed usability gap | Provide useful not-found recovery content |
| [LAND-015](#land-015) | P2 | Remote-configuration verification gap | Verify remote builds, edge policy and preview visibility |
| [LAND-016](#land-016) | P2 | Owner/legal decision | Resolve source-code ownership and license decision |
| [LAND-018](#land-018) | P2 | Owner decision / trust hypothesis | Confirm an official contact/support destination |
| [LAND-020](#land-020) | P2 | Confirmed wording tension / CRO hypothesis | Resolve CTA expectations while registration is closed |
| [LAND-021](#land-021) | P2 | Approval gap / editorial hypotheses | Complete owner bilingual copy and audience review |
| [LAND-022](#land-022) | P2 | Owner/privacy decision | Decide analytics, consent and monitoring policy |
| [LAND-023](#land-023) | P2 | Conditional measurement capability | Instrument approved CTA and registration funnel events |
| [LAND-024](#land-024) | P2 | Conditional observability recommendation | Decide and validate approved JavaScript error visibility |
| [LAND-025](#land-025) | P2 | Hardening recommendation | Review compatible static-response security headers |
| [LAND-026](#land-026) | P2 | Verification gap | Complete a read-only exposure review of publishable artifacts/history |
| [LAND-031](#land-031) | P2 | Research gap / positioning hypothesis | Validate target audience and search intent with actual evidence |
| [LAND-033](#land-033) | P2 | Compatibility verification gap | Verify the agreed browser-engine and real-device matrix |
| [LAND-012](#land-012) | P3 | Optional improvement | Decide whether to publish a sitemap |
| [LAND-013](#land-013) | P3 | Optional completeness/localization improvement | Finish localized social metadata and validate previews |
| [LAND-027](#land-027) | P3 | Optional optimization | Evaluate longer browser caching for fingerprinted assets |
| [LAND-028](#land-028) | P3 | Confirmed low-impact dead style | Remove the unused secondary-button styles during an authorized cleanup |
| [LAND-029](#land-029) | P3 | Maintenance review | Review available toolchain updates without forcing a major migration |
| [LAND-030](#land-030) | P3 | Owner-planned capability | Confirm the planned project-documentation destination |
| [LAND-032](#land-032) | P3 | Optional SEO enhancement | Decide whether truthful structured data serves a supported purpose |

### Detailed records

<a id="land-001"></a>

#### LAND-001 — Correct the shared public metadata origin

**Category:** A; G

**Priority:** P1

**Status:** Defective

**Finding type:** Confirmed defect

**Problem / pending matter:** Published canonical, EN/ES/x-default alternates and social image point to localhost in both locales.

**Technical evidence and source:** Phase 2 A1: five localhost absolute URLs per document; Phase 1 D1. Remote variable/deployment cause not inspected.

**Related files and lines:** astro.config.mjs:5; src/components/Landing.astro:39-42; docs/deployment.md:15-22

**User / business impact:** Invalid canonical/localization signals and externally unusable social-image destination.

**Recommended solution:** Use the approved public build origin and prevent release artifacts silently accepting localhost; inspect generated HTML before publication.

**Verifiable acceptance criteria:** Both built locales contain correct public HTTPS self-canonicals, reciprocal EN/ES/x-default links and a reachable absolute social image; no localhost URL remains in public metadata. A release-build check rejects missing/invalid/local origins while local development still works. Any production publication requires separate approval.

**Estimated effort:** Low

**Dependencies / authorization:** Approved public origin; publication approval only if publishing

**Confidence:** High: source and public HTML agree

**Priority rationale:** Confirmed cross-locale SEO/share failure, although deindexing is not established.

**Acquisition gate:** Yes: public discovery/share readiness

<a id="land-002"></a>

#### LAND-002 — Enforce the approved HTTPS origin

**Category:** H; A; G

**Priority:** P1

**Status:** Defective

**Finding type:** Confirmed defect

**Problem / pending matter:** Plain HTTP root serves the same document as HTTPS with 200 and no redirect.

**Technical evidence and source:** Phase 2 H1: two anonymous HTTP checks, 33034-byte body identical to HTTPS; browser upgrade/preload exposure unknown.

**Related files and lines:** wrangler.jsonc:1-7; docs/deployment.md:9-22; remote Cloudflare routing settings (not inspected)

**User / business impact:** Unencrypted entry point and duplicate scheme version; no form-data leak or exploit was demonstrated.

**Recommended solution:** Use applicable platform/static routing controls to normalize HTTP to HTTPS; review hostname-specific HSTS separately under LAND-025.

**Verifiable acceptance criteria:** Anonymous HTTP GETs for / and /es/ produce one non-looping permanent redirect to the approved HTTPS equivalent, preserving path/query; HTTPS routes return 200. Verify from headers and browser. Do not change shared parent-domain policy or publish without authorization.

**Estimated effort:** Low

**Dependencies / authorization:** Read access to actual routing configuration; approval for remote changes

**Confidence:** High for root response; other routes not measured

**Priority rationale:** Confirmed transport enforcement gap; prioritize before traffic.

**Acquisition gate:** Yes: HTTPS delivery

<a id="land-004"></a>

#### LAND-004 — Verify and resolve the email-field boundary contrast concern

**Category:** D; C

**Priority:** P1

**Status:** Partial

**Finding type:** Source-supported accessibility concern

**Problem / pending matter:** Author-defined border/fill provides little differentiation for the active empty email field in either theme.

**Technical evidence and source:** Phase 2 D1: border versus form surface 1.240:1 light and 1.332:1 dark; actual computed render not inspected.

**Related files and lines:** src/styles/global.css:1-31,161-168; src/components/EarlyAccess.tsx:12-15

**User / business impact:** Users with low vision may not recognize the editable field; full WCAG failure is not yet browser-confirmed.

**Recommended solution:** Inspect actual empty/valid/invalid/focused fields; provide a persistent sufficiently contrasted identifying cue if the rendered control depends on the low-contrast boundary.

**Verifiable acceptance criteria:** Record computed colors and rendered identification cues in both themes; necessary control cues meet SC 1.4.11 at least 3:1 against adjacent colors, or document a valid alternative that satisfies the criterion. Keep clear focus/error text and disabled submission. Do not apply active-control rules to the disabled submit button.

**Estimated effort:** Low

**Dependencies / authorization:** Reachable browser; code-change authorization if correction is warranted

**Confidence:** High for numeric colors; medium for rendered failure

**Priority rationale:** Potential exclusion from a core control warrants prompt validation, not an unsupported conformance claim.

**Acquisition gate:** No

<a id="land-005"></a>

#### LAND-005 — Complete functional browser and network verification

**Category:** F

**Priority:** P1

**Status:** Not verifiable

**Finding type:** Verification gap

**Problem / pending matter:** No browser session established hydration, interaction, console or failure-mode behavior.

**Technical evidence and source:** Phase 2 evidence ledger and F: Chrome DevTools connection timeout; source/tests cover markup only.

**Related files and lines:** src/components/Landing.astro:83-113,143-169; src/components/ImageLightbox.astro:17-55; src/components/EarlyAccess.tsx:4-17; tests/diagnosis.test.ts:8-33

**User / business impact:** Runtime defects could remain undetected; none of these failures has been demonstrated.

**Recommended solution:** Connect Chrome DevTools to the production-build preview and exercise the implemented controls and failure states without submitting data.

**Verifiable acceptance criteria:** For EN/ES and both themes, record CTA/anchor navigation, locale+hash switching, system/light/dark persistence, disclosures, product radios/history shortcut, dialog open/fit/zoom/close, and blur/edit email feedback with synthetic data. Inspect console/network after hydration and scrolling. Test denied storage, blocked JS and slow/offline viewer assets; record actual results and limitations. No real submission, hidden data request or false registration success.

**Estimated effort:** Medium

**Dependencies / authorization:** Reachable Chrome DevTools; built preview

**Confidence:** High that evidence is missing; runtime outcome unknown

**Priority rationale:** Core functionality and reliability are unverified.

**Acquisition gate:** Yes: core interaction evidence

<a id="land-006"></a>

#### LAND-006 — Verify responsive design and rendered visual quality

**Category:** C; F

**Priority:** P1

**Status:** Not verifiable

**Finding type:** Verification gap

**Problem / pending matter:** No current viewport screenshot/geometry inspection establishes readable, unclipped layouts.

**Technical evidence and source:** Phase 2 C and F: all four size classes times EN/ES times light/dark are not executed; source breakpoints alone do not pass.

**Related files and lines:** src/styles/global.css:33-145,199-313; src/components/Landing.astro:54-139; src/components/ImageLightbox.astro:57-85

**User / business impact:** Small-screen navigation, CTA visibility, crop legibility and overflow could affect usability; no visual defect confirmed.

**Recommended solution:** Capture and inspect the production build at the defined viewports; critique only actual screenshots under the approved brand brief.

**Verifiable acceptance criteria:** Record 320x568, 390x844, 768x1024 and 1440x900 for both locales/themes (16 cases), plus 1024px if needed. Check full-page overflow, header/CTA, title wrapping, margins, spacing, screenshot crops, product labels and dialog bounds. Preserve intentional screenshot crops. Log each observed defect with screenshot and expected outcome; do not claim aesthetic scores from source.

**Estimated effort:** Medium

**Dependencies / authorization:** Reachable Chrome DevTools; production-build preview; approved brief

**Confidence:** High that visual coverage is missing

**Priority rationale:** Responsive regressions would affect significant traffic but remain unknown.

**Acquisition gate:** Yes: primary viewport coverage

<a id="land-007"></a>

#### LAND-007 — Complete manual WCAG 2.2 A/AA verification

**Category:** D

**Priority:** P1

**Status:** Not verifiable

**Finding type:** Verification gap

**Problem / pending matter:** Keyboard, assistive announcements, zoom/reflow, full rendered contrast and target geometry have not been tested.

**Technical evidence and source:** Phase 2 D and F: code mechanisms exist; no browser accessibility audit or screen-reader run succeeded.

**Related files and lines:** src/components/Landing.astro:55-113,143-169; src/components/ImageLightbox.astro:6-55; src/components/EarlyAccess.tsx:9-17; src/styles/global.css:45-71,126-137,183-184,314-316

**User / business impact:** Potential barriers cannot be ruled out or certified away by source lint.

**Recommended solution:** Run browser automation as support, then manual keyboard and representative screen-reader checks against WCAG A/AA.

**Verifiable acceptance criteria:** Document Tab/Shift+Tab, arrow radios, Enter/Space/Escape, skip destination, visible/unobscured focus, modal containment and opener return. Check labels/names/roles, dynamic errors/status, screenshot alternatives, 200% text resize, 400%/320px reflow, text spacing, target size and reduced motion in EN/ES/themes. Use at least one named screen-reader/browser pairing. Record results by SC; automated passes alone do not certify conformance. LAND-004 tracks the field-specific concern.

**Estimated effort:** High

**Dependencies / authorization:** Reachable browser; assistive technology access; LAND-004 evidence

**Confidence:** High that evidence is missing; violations other than token concern unknown

**Priority rationale:** Accessibility is an explicit acceptance requirement and may exclude users.

**Acquisition gate:** Yes: core accessibility evidence

<a id="land-008"></a>

#### LAND-008 — Measure current mobile/desktop performance and resource cost

**Category:** B

**Priority:** P1

**Status:** Not verifiable

**Finding type:** Verification gap

**Problem / pending matter:** Current LCP/INP/CLS and full page/network cost are unknown; only source inventory and CLI TTFB were obtained.

**Technical evidence and source:** Phase 2 B: browser unavailable, PSI 429; React chunks total 235870 uncompressed bytes; three font preloads; mobile image crops render 980/1400px widths.

**Related files and lines:** src/components/Landing.astro:2-9,36,78,102,113; src/components/ProductImage.astro:8-9; src/styles/global.css:270-286; reports/FASE_2_AUDITORIA.md (B)

**User / business impact:** Performance readiness and proposed JS/font/image savings have no measured basis yet.

**Recommended solution:** Restore a browser trace/Lighthouse/PSI path; measure a production build before selecting optimizations.

**Verifiable acceptance criteria:** Record tool/version, viewport/DPR, network/CPU profile, cache state and URL for at least three comparable mobile and desktop load runs; report representative LCP/CLS with raw evidence. Exercise interactions and label lab latency correctly; never substitute TBT for INP. Record actual transferred/decoded JS/CSS/fonts/image variants and blocking requests, including scroll/island/viewer. Evaluate React preview cost, preload use, crop fidelity and optional simplifications against evidence. Use LCP<=2.5s, CLS<=0.1 and INP<=200ms as targets where validly measured; failed targets create evidence-backed fixes, not invented measurements.

**Estimated effort:** Medium

**Dependencies / authorization:** Reachable browser or available PSI quota; built preview

**Confidence:** High for missing measurements; performance quality unknown

**Priority rationale:** Largest performance evidence gap; no basis to declare CWV passed.

**Acquisition gate:** Yes: lab performance evidence

<a id="land-014"></a>

#### LAND-014 — Verify actual indexing and Google canonical selection

**Category:** A

**Priority:** P1

**Status:** Not verifiable

**Finding type:** Verification gap

**Problem / pending matter:** Public HTTP/HTML alone cannot establish inclusion or the canonical Google selects.

**Technical evidence and source:** Phase 2 A: no Search Console/URL Inspection; published canonical origin invalid.

**Related files and lines:** astro.config.mjs:5; src/components/Landing.astro:37-42; docs/deployment.md:15-22

**User / business impact:** Organic readiness cannot be certified from supplied markup.

**Recommended solution:** Use read-only Search Console/URL Inspection for the approved public property and distinguish current defects from post-correction observations.

**Verifiable acceptance criteria:** Record both localized URLs, inspection date, crawl/index status, user-declared versus Google-selected canonical, live-test blockers and property access limits. Reinspect corrected public artifacts only after a separately authorized release. Do not report a site: query alone as exhaustive indexing evidence or promise rankings.

**Estimated effort:** Low

**Dependencies / authorization:** Property access; LAND-001 correction/release for final reinspection

**Confidence:** High for missing platform evidence; index outcome unknown

**Priority rationale:** SEO is a primary audit objective and incorrect canonical evidence increases verification importance.

**Acquisition gate:** Yes: organic-acquisition claims

<a id="land-017"></a>

#### LAND-017 — Approve identity and data-handling/privacy prerequisites

**Category:** H; C; E

**Priority:** P1

**Status:** Absent

**Finding type:** Conditional acquisition blocker / owner decision

**Problem / pending matter:** Entity, collection purpose/process, privacy disclosures and destination have not been approved; terms applicability is unresolved.

**Technical evidence and source:** Phase 2 H3 and C: brief explicitly prohibits enabling collection before these decisions.

**Related files and lines:** docs/landing-page-brief.md:248-251,273-282; src/i18n/content.ts:49-60,111-122; src/components/Landing.astro:132-134

**User / business impact:** Registration cannot responsibly open under the existing product instructions.

**Recommended solution:** Define the actual data flow and responsible entity; validate applicable legal requirements with appropriate expertise; publish only approved truthful information.

**Verifiable acceptance criteria:** Owner approves responsible entity, purpose, destination, retention/access/deletion process and required disclosures for intended jurisdictions. Record whether terms/consent/banner are required and why. No invented policy/guarantee and no collection before approval; legal sufficiency is not inferred from a generic template.

**Estimated effort:** High

**Dependencies / authorization:** Product owner; privacy/legal validation; actual intended data flow

**Confidence:** High for explicit pending approvals; legal applicability unknown

**Priority rationale:** Explicit dependency for the main future conversion, not evidence of current unlawful collection.

**Acquisition gate:** Yes: registration prerequisite

<a id="land-019"></a>

#### LAND-019 — Implement real registration only after approval

**Category:** C; F; H

**Priority:** P1

**Status:** Absent

**Finding type:** Intentional pending conversion capability

**Problem / pending matter:** The intended registration outcome is impossible because submissions are deliberately disabled and no endpoint/persistence exists.

**Technical evidence and source:** Phase 2 C18/F: disabled submit, method dialog, preventDefault and no destination; safe markup tested.

**Related files and lines:** src/components/EarlyAccess.tsx:9-17; tests/diagnosis.test.ts:8-23; src/i18n/content.ts:49-54,111-116; docs/landing-page-brief.md:248-251

**User / business impact:** Cannot acquire early-access registrations today; this is expected prototype scope, not a regression.

**Recommended solution:** Keep disabled now. After prerequisites and explicit implementation authorization, choose the smallest approved delivery design; do not assume SSR/backend migration is required.

**Verifiable acceptance criteria:** Before any enabling change, LAND-017 approvals and destination are recorded. In a controlled mock/staging test (no real submissions), verify server-side validation, required/invalid states, loading, confirmed success only after accepted delivery, duplicate prevention and network/server-error retry behavior; accessible EN/ES feedback and suitable autocomplete purpose are provided. Preserve preview safety tests until the approved mode changes. Production activation requires separate approval.

**Estimated effort:** High

**Dependencies / authorization:** LAND-017; approved destination/implementation scope; LAND-005 and LAND-007 before activation

**Confidence:** High: disabled by explicit design

**Priority rationale:** High business impact for future acquisition; no P0 because current approved preview is functioning as intended.

**Acquisition gate:** Yes: campaigns promising registration

<a id="land-003"></a>

#### LAND-003 — Remove the public project-link dead end

**Category:** F; C; A

**Priority:** P2

**Status:** Defective

**Finding type:** Confirmed defect

**Problem / pending matter:** The repository link presented in the footer returns 404 anonymously.

**Technical evidence and source:** Phase 2 A and F: public repository 404; both contributor profiles 200. Private versus renamed/missing cause unknown.

**Related files and lines:** src/components/Landing.astro:124; src/i18n/content.ts:55-60,117-122

**User / business impact:** Visitors cannot inspect the project via the advertised link, weakening that trust path.

**Recommended solution:** Confirm intended visibility; use an existing approved public destination or accurately represent a private/planned resource. Do not make a private repository public automatically.

**Verifiable acceptance criteria:** Anonymous visitors either reach a relevant approved 200 destination or see an accurate non-link restricted/planned state in EN/ES; no anonymous 404 remains behind the public project link.

**Estimated effort:** Low

**Dependencies / authorization:** Owner decision on repository visibility/destination

**Confidence:** High for public 404; cause unknown

**Priority rationale:** Real visitor dead end, but does not block valid routes or the current preview.

**Acquisition gate:** No

<a id="land-009"></a>

#### LAND-009 — Establish field-performance evidence availability

**Category:** B

**Priority:** P2

**Status:** Not verifiable

**Finding type:** Verification gap / conditional measurement

**Problem / pending matter:** No current CrUX or approved real-user distribution is available.

**Technical evidence and source:** Phase 2 B: no field dataset retrieved; six curl samples are not user percentiles.

**Related files and lines:** reports/FASE_2_AUDITORIA.md (B); docs/landing-page-brief.md:279-282

**User / business impact:** Cannot establish real mobile/desktop p75 CWV from laboratory or CLI observations.

**Recommended solution:** Check public field-data availability; consider RUM only under the analytics/privacy approval decision.

**Verifiable acceptance criteria:** Record CrUX URL/origin availability and observation window. If available report p75 LCP/INP/CLS separately for mobile/desktop with source; if insufficient data explicitly retain unknown status. Any RUM requires LAND-022 approval and must not collect email. Lack of sufficient field samples is an allowed documented outcome, not a failed CWV result.

**Estimated effort:** Medium

**Dependencies / authorization:** Public field data if sufficient; LAND-022 only if RUM is proposed

**Confidence:** High for missing field evidence

**Priority rationale:** Important post-release evidence, but a low-traffic prototype may have no field samples.

**Acquisition gate:** No

<a id="land-010"></a>

#### LAND-010 — Complete the documented quality suite and clean-environment evidence

**Category:** F; G

**Priority:** P2

**Status:** Partial

**Finding type:** Environment/verification gap

**Problem / pending matter:** The full test command stopped at the missing Lefthook executable; existing install/build/check evidence is not a clean-runner or remote CI result.

**Technical evidence and source:** Phase 1 checks: three tests pass, overall exit 127 at tests/commit-msg.sh:11; CI source explicitly installs Lefthook.

**Related files and lines:** README.md:13-43; tests/commit-msg.sh:11; tests/diagnosis.test.ts:8-33; .github/workflows/quality.yml:25-62; package.json:7-14

**User / business impact:** Cannot record a complete green local suite or prove clean-runner reproducibility; not proof CI is broken.

**Recommended solution:** Provide the documented standalone Lefthook prerequisite and retain existing scripts; inspect an authorized read-only CI run or use an isolated clean runner.

**Verifiable acceptance criteria:** Record pinned Bun/Node/Lefthook versions, successful frozen install, bun run check, bun run test (including commit-message cases), bun run build and applicable Wrangler dry run, with exit codes. Record clean-runner/CI evidence separately from warm local results. Do not alter Git hooks/settings or bypass tests just to obtain green status.

**Estimated effort:** Low

**Dependencies / authorization:** Documented Lefthook binary; clean runner or read-only CI access

**Confidence:** High: exact environment error recorded

**Priority rationale:** Closes a known verification block, not an observed production outage.

**Acquisition gate:** No

<a id="land-011"></a>

#### LAND-011 — Provide useful not-found recovery content

**Category:** F; C; G

**Priority:** P2

**Status:** Improvement suggested

**Finding type:** Observed usability gap

**Problem / pending matter:** Production emits a correct 404 status but an empty body on an invalid route.

**Technical evidence and source:** Phase 2 F: /phase2-missing is 404 with zero body; Phase 1 confirms no custom 404 source.

**Related files and lines:** src/pages/ (no 404.astro); wrangler.jsonc:5; reports/FASE_2_AUDITORIA.md (F)

**User / business impact:** Visitors following invalid links receive no page-level route back to the project.

**Recommended solution:** When authorized, add accessible EN/ES-aware recovery with real links while retaining a genuine 404 response.

**Verifiable acceptance criteria:** Unknown root and /es/ paths return 404 with meaningful language-appropriate explanation and a working home/product link; no 200 SPA fallback and no redirect loop. Confirm actual Workers static behavior, not only Astro preview.

**Estimated effort:** Low

**Dependencies / authorization:** Approved recovery copy; publication approval if publishing

**Confidence:** High for empty response; recommendation is contextual

**Priority rationale:** Recoverability improves without changing successful routes.

**Acquisition gate:** No

<a id="land-015"></a>

#### LAND-015 — Verify remote builds, edge policy and preview visibility

**Category:** G; A; H

**Priority:** P2

**Status:** Not verifiable

**Finding type:** Remote-configuration verification gap

**Problem / pending matter:** Repository instructions do not establish active Workers Builds, effective origin, managed robots provenance, branch/preview policies or remote checks.

**Technical evidence and source:** Phase 2 G/A: public robots consists of comments absent from source; local and edge slash/404 behavior differ; account settings not inspected.

**Related files and lines:** docs/deployment.md:3-37; wrangler.jsonc:1-7; .github/workflows/quality.yml:1-62; astro.config.mjs:5

**User / business impact:** Release assumptions and preview discovery/access behavior may differ from documented intent; no remote misconfiguration besides public evidence is claimed.

**Recommended solution:** Inspect configuration read-only, compare active build/deploy identity and policies against documentation, and record differences without revealing variable values.

**Verifiable acceptance criteria:** Document production branch/build commands, source revision/artifact association where available, whether required quality checks protect release, preview visibility/index policy, managed robots origin, and declared public-origin configuration without secret values. Record inaccessible settings as unknown and request explicit approval before any remote policy change.

**Estimated effort:** Medium

**Dependencies / authorization:** Read-only Cloudflare/GitHub settings access; owner preview policy

**Confidence:** High for missing access/evidence

**Priority rationale:** Important release assurance, not a reason to migrate hosting.

**Acquisition gate:** No

<a id="land-016"></a>

#### LAND-016 — Resolve source-code ownership and license decision

**Category:** H; E

**Priority:** P2

**Status:** Absent

**Finding type:** Owner/legal decision

**Problem / pending matter:** Source-code license and copyright holder are explicitly pending; proposed MIT excludes branding/screenshots.

**Technical evidence and source:** Phase 1 D4 and Phase 2 E: pending text in footer and README; no adopted license.

**Related files and lines:** README.md:8-11; docs/footer-refinement.md:19-27; src/i18n/content.ts:59-60,121-122; src/components/Landing.astro:137-138

**User / business impact:** Public reuse permissions and attribution cannot be represented as settled.

**Recommended solution:** Obtain rights-holder and contributor authorization; adopt only an approved license and accurate ownership text, or retain an explicit pending status.

**Verifiable acceptance criteria:** Record verified owner/contributor permissions and approved code/asset scopes; footer and repository license state agree in EN/ES. Do not present the MIT proposal as adopted or treat contributor credit as ownership proof. An explicit owner deferral is recorded rather than fabricated legal information.

**Estimated effort:** Medium

**Dependencies / authorization:** Rights-holder/contributor decision

**Confidence:** High for current pending state; rights not independently verified

**Priority rationale:** Legal/project clarity, not a demonstrated operational failure.

**Acquisition gate:** No

<a id="land-018"></a>

#### LAND-018 — Confirm an official contact/support destination

**Category:** C; E

**Priority:** P2

**Status:** Absent

**Finding type:** Owner decision / trust hypothesis

**Problem / pending matter:** No official contact channel is finalized; contributor profiles are not designated as support.

**Technical evidence and source:** Phase 2 C/E and brief list contact as pending; only named profiles are public.

**Related files and lines:** docs/landing-page-brief.md:273-277; src/components/Landing.astro:128-134; src/i18n/content.ts:55-60,117-122

**User / business impact:** Interested visitors may lack a verified way to ask project questions; conversion effect is unmeasured.

**Recommended solution:** Confirm a publishable monitored contact channel or explicitly defer it without inventing an address.

**Verifiable acceptance criteria:** Record owner-approved channel and purpose; if published it works anonymously, names the same destination in EN/ES and does not imply unsupported service/response commitments. Otherwise record the approved deferral.

**Estimated effort:** Low

**Dependencies / authorization:** Owner channel/identity decision

**Confidence:** High for absence; medium for user impact

**Priority rationale:** Useful for trust/questions, but not mandatory to the current static preview.

**Acquisition gate:** No

<a id="land-020"></a>

#### LAND-020 — Resolve CTA expectations while registration is closed

**Category:** C; E

**Priority:** P2

**Status:** Improvement suggested

**Finding type:** Confirmed wording tension / CRO hypothesis

**Problem / pending matter:** Get Early Access / Obtener acceso anticipado invites an action that notices and form explicitly say is unavailable.

**Technical evidence and source:** Phase 2 C/E: CTA wording versus availability messages; no user abandonment or conversion-rate data.

**Related files and lines:** src/i18n/content.ts:11-15,49-54,73-77,111-116; src/components/Landing.astro:69,76,112-113

**User / business impact:** May confuse first-time visitors despite honest notices; uplift from alternate wording is unproven.

**Recommended solution:** Obtain owner review of CTA/availability wording against the actual available preview/exploration action; keep notices and collection restriction.

**Verifiable acceptance criteria:** Record approved EN/ES wording and an expectation/comprehension check: the described immediate action matches what visitors can do, the current availability is clear, and no fake follow/signup success exists. Retaining the current wording needs explicit rationale; no click uplift is claimed without data.

**Estimated effort:** Low

**Dependencies / authorization:** Owner copy/product approval; LAND-019 if registration opens

**Confidence:** High for textual tension; low for CRO effect

**Priority rationale:** Affects expectation setting near the primary action without proving conversion loss.

**Acquisition gate:** No

<a id="land-021"></a>

#### LAND-021 — Complete owner bilingual copy and audience review

**Category:** E; C

**Priority:** P2

**Status:** Partial

**Finding type:** Approval gap / editorial hypotheses

**Problem / pending matter:** Copy still needs owner review; role cue, benefits versus state vocabulary, and repeated notices have not been validated with the audience.

**Technical evidence and source:** README: copy needs owner review; Phase 2 C/E identifies these as heuristics, not measured defects.

**Related files and lines:** README.md:8; src/i18n/content.ts:1-127; docs/landing-page-brief.md:248-288

**User / business impact:** Potential comprehension and language-quality issues remain unconfirmed.

**Recommended solution:** Approve equivalent EN/ES copy and test the specific audience/benefit/repetition hypotheses without expanding product claims.

**Verifiable acceptance criteria:** Owner signs off audience/scope, terminology, grammar, benefits and current-availability wording in both locales; preserve no-auto-fix/demo/experimental notices at relevant actions. Record comprehension-test protocol/results or explicitly defer testing. No unsupported figures, testimonials, guarantees or integrations are introduced; account for social alt separately under LAND-013.

**Estimated effort:** Medium

**Dependencies / authorization:** Owner review; representative EN/ES readers; LAND-020 for CTA decision

**Confidence:** High for approval gap; low for proposed CRO gains

**Priority rationale:** Content quality matters, but proposed wording improvements remain hypotheses.

**Acquisition gate:** No

<a id="land-022"></a>

#### LAND-022 — Decide analytics, consent and monitoring policy

**Category:** H

**Priority:** P2

**Status:** Absent

**Finding type:** Owner/privacy decision

**Problem / pending matter:** Analytics and behavioral/error monitoring are not approved; there is no event or consent policy.

**Technical evidence and source:** Phase 2 H1-H5/H3: explicit brief prohibition on adding trackers now.

**Related files and lines:** docs/landing-page-brief.md:279-282; src/components/Landing.astro:142-171; src/components/EarlyAccess.tsx:4-17

**User / business impact:** Cannot measure funnels today, but enabling collection without approval would violate project scope.

**Recommended solution:** Document an explicit no-tracking decision or approve narrowly defined technologies/purposes and legal/consent requirements first.

**Verifiable acceptance criteria:** Owner records whether analytics, RUM and error monitoring are allowed, their purposes/data fields/retention and applicable consent/disclosure needs. No cookie banner or third-party tool is mandated without a justified need. A no-tracking decision closes this decision item while related implementation items remain deferred/out of scope.

**Estimated effort:** Medium

**Dependencies / authorization:** Owner decision; privacy validation; LAND-017 if personal data is involved

**Confidence:** High for current intentional absence

**Priority rationale:** Measurement-enabling decision, not a current technical defect.

**Acquisition gate:** No

<a id="land-023"></a>

#### LAND-023 — Instrument approved CTA and registration funnel events

**Category:** H; C

**Priority:** P2

**Status:** Absent

**Finding type:** Conditional measurement capability

**Problem / pending matter:** No CTA, form or true conversion events exist; funnel effectiveness is unmeasurable.

**Technical evidence and source:** Phase 2 H: no event instrumentation or actual registration outcome.

**Related files and lines:** src/components/Landing.astro:69,76,112-113; src/components/EarlyAccess.tsx:9-17; docs/landing-page-brief.md:279-282

**User / business impact:** Cannot distinguish visits, intent clicks, form attempts and accepted registrations.

**Recommended solution:** Only if LAND-022 authorizes it, define and implement the minimal approved event model, with registration success conditional on an actual approved endpoint.

**Verifiable acceptance criteria:** Document event names, triggers, locale and allowed fields; controlled tests show one event per intended action, no raw email/personal values, and no conversion event for disabled preview or mere CTA click. Accepted-registration event requires LAND-019. Honor approved consent behavior. If tracking remains unapproved, retain explicit deferred status rather than installing anything.

**Estimated effort:** Medium

**Dependencies / authorization:** LAND-022; LAND-019 only for real conversion completion; approved provider/destination

**Confidence:** High for instrumentation absence; benefits unmeasured

**Priority rationale:** Important to evaluate future acquisition, conditional on approval.

**Acquisition gate:** Conditional: if measurement is an acquisition requirement

<a id="land-024"></a>

#### LAND-024 — Decide and validate approved JavaScript error visibility

**Category:** H; F

**Priority:** P2

**Status:** Improvement suggested

**Finding type:** Conditional observability recommendation

**Problem / pending matter:** No application error-monitoring integration exists and no runtime session establishes current errors.

**Technical evidence and source:** Phase 2 H/F: console unavailable, error-monitoring authorization pending.

**Related files and lines:** src/components/Landing.astro:45-51,142-171; src/components/ImageLightbox.astro:17-55; docs/landing-page-brief.md:279-282

**User / business impact:** Future real-user failures may be hard to diagnose; no current JavaScript error is confirmed.

**Recommended solution:** Use LAND-005 console evidence now; consider an approved privacy-conscious monitoring option only if the owner needs continuous visibility.

**Verifiable acceptance criteria:** Record the decision. If approved, a synthetic controlled error reaches the intended destination with useful build/context and no email, sensitive DOM contents or prohibited identifiers; verify disclosure/consent needs and absence of control-flow breakage. Otherwise document manual console verification as the current method.

**Estimated effort:** Medium

**Dependencies / authorization:** LAND-022; LAND-005 for present runtime evidence

**Confidence:** High for missing integration; runtime defects unknown

**Priority rationale:** Reliability improvement, not justification for an unapproved third-party script.

**Acquisition gate:** No

<a id="land-025"></a>

#### LAND-025 — Review compatible static-response security headers

**Category:** H; G

**Priority:** P2

**Status:** Improvement suggested

**Finding type:** Hardening recommendation

**Problem / pending matter:** Sampled HTML lacks CSP, HSTS, nosniff and referrer policy; no author _headers file exists.

**Technical evidence and source:** Phase 2 H2: absence observed; no exploit or leakage demonstrated; inline theme/hydration scripts need compatibility.

**Related files and lines:** public/ (no _headers); src/components/Landing.astro:39-51,142-171; src/components/ImageLightbox.astro:17-55; wrangler.jsonc:5

**User / business impact:** Defense-in-depth opportunities exist; an untested restrictive policy could also break the page.

**Recommended solution:** Choose policies suited to static assets, framing/referrers/MIME and existing script sources; review only the hostname actually controlled.

**Verifiable acceptance criteria:** Record policy rationale; if implemented, headers appear on actual HTTPS documents/assets as intended. Validate no new CSP violations and working theme/island/viewer; use report-only testing where useful. HSTS scope is approved and compatible with shared hosting. Do not assert security solely from header presence.

**Estimated effort:** Medium

**Dependencies / authorization:** LAND-005 browser verification; LAND-002 transport decision; remote/publish approval if required

**Confidence:** High for sampled absence; exploitability unknown

**Priority rationale:** Contextual hardening after confirmed delivery defects, not a critical vulnerability claim.

**Acquisition gate:** No

<a id="land-026"></a>

#### LAND-026 — Complete a read-only exposure review of publishable artifacts/history

**Category:** H

**Priority:** P2

**Status:** Not verifiable

**Finding type:** Verification gap

**Problem / pending matter:** Source inspection found no obvious credential references but did not exhaustively inspect generated artifacts or Git history.

**Technical evidence and source:** Phase 2 H7 explicitly limits secret-exposure assurance; environment values were not read.

**Related files and lines:** .gitignore:1-8; astro.config.mjs:5; dist/ (generated); Git history (not exhaustively scanned)

**User / business impact:** Cannot certify absence of accidentally published secrets; no actual exposure is alleged.

**Recommended solution:** Perform a scoped read-only credential/exposure review with redacted reporting; distinguish public configuration from secrets.

**Verifiable acceptance criteria:** Record scan/review scope, revision and artifact set; triage any candidates without printing values; report only redacted identifiers/path evidence. Do not read live environment values merely to prove a negative. If no findings, state scope/limitations rather than declaring universal absence of secrets.

**Estimated effort:** Medium

**Dependencies / authorization:** Read-only artifact/history access; approved redaction method

**Confidence:** High for coverage gap; presence of secrets unknown

**Priority rationale:** Security evidence gap to close before broad release, not an invented vulnerability.

**Acquisition gate:** No

<a id="land-031"></a>

#### LAND-031 — Validate target audience and search intent with actual evidence

**Category:** A; E; C

**Priority:** P2

**Status:** Not verifiable

**Finding type:** Research gap / positioning hypothesis

**Problem / pending matter:** CI/CD and GitHub Actions wording is topical, but demand, target queries and audience/locale fit are not established.

**Technical evidence and source:** Phase 2 A20/E12/C2: no keyword/SERP, query or user-research evidence.

**Related files and lines:** src/i18n/content.ts:3-15,65-77; docs/landing-page-brief.md (audience/message constraints)

**User / business impact:** Organic and copy decisions cannot be tied to a verified acquisition intent or segment.

**Recommended solution:** Validate the provisional CI/CD-owning engineering audience and relevant EN/ES queries; use product evidence and authorized research rather than keyword stuffing.

**Verifiable acceptance criteria:** Document chosen audience/locale, intended user problem, query/intent evidence and content mapping; distinguish observed search data from owner hypotheses. If data is unavailable record that limit. No ranking guarantee, unsupported integration or invented keyword-volume figure.

**Estimated effort:** Medium

**Dependencies / authorization:** Owner audience decision; public research or LAND-014 data when available

**Confidence:** High for evidence gap; positioning outcome unknown

**Priority rationale:** Guides relevant acquisition without proving current copy is wrong.

**Acquisition gate:** No

<a id="land-033"></a>

#### LAND-033 — Verify the agreed browser-engine and real-device matrix

**Category:** F

**Priority:** P2

**Status:** Not verifiable

**Finding type:** Compatibility verification gap

**Problem / pending matter:** No Chrome, Safari/WebKit, Firefox or physical-device behavior was verified.

**Technical evidence and source:** Phase 2 F: browser compatibility explicitly unknown; native dialog/details grouping and modern CSS require actual target checks.

**Related files and lines:** src/components/ImageLightbox.astro:6-55; src/components/Landing.astro:83-110; src/styles/global.css:36,45,50,199-316

**User / business impact:** Behavior for the eventual supported audience may differ by engine/device; no incompatibility demonstrated.

**Recommended solution:** Agree a realistic support matrix and run the functional/accessibility cases on independent target engines and a representative phone.

**Verifiable acceptance criteria:** Record supported engine/browser/OS versions and at least Chromium, Firefox, Safari/WebKit where supported plus one real phone, or explicitly mark unavailable cases. Exercise disclosures, dialog/zoom, radios, locale/theme, validation and layout. Cite actual defects separately; do not infer cross-browser success from a Chromium run.

**Estimated effort:** Medium

**Dependencies / authorization:** Owner support matrix; LAND-005 scenarios; target browser/device access

**Confidence:** High that compatibility is unverified

**Priority rationale:** Material QA coverage beyond the first available browser, not an assumed failure.

**Acquisition gate:** No

<a id="land-012"></a>

#### LAND-012 — Decide whether to publish a sitemap

**Category:** A

**Priority:** P3

**Status:** Absent

**Finding type:** Optional improvement

**Problem / pending matter:** Neither common sitemap endpoint exists, but only two linked content pages are present.

**Technical evidence and source:** Phase 2 A: /sitemap.xml and /sitemap-index.xml 404; no file/integration.

**Related files and lines:** astro.config.mjs:1-7; public/ (no sitemap); src/pages/index.astro; src/pages/es/index.astro

**User / business impact:** An explicit discovery/submission inventory is missing, without proving an indexing block.

**Recommended solution:** Choose a minimal sitemap only if useful for discovery; do not add an integration merely to satisfy a generic checklist.

**Verifiable acceptance criteria:** Record the decision. If implemented, valid XML lists only public canonical 200 EN/ES URLs on approved HTTPS origin and is referenced/submitted where applicable; no localhost, preview, missing or private routes. Explicit deferral for a small site is acceptable.

**Estimated effort:** Low

**Dependencies / authorization:** LAND-001; owner sitemap decision

**Confidence:** High for absence; usefulness contextual

**Priority rationale:** Optional discovery aid, not a critical requirement.

**Acquisition gate:** No

<a id="land-013"></a>

#### LAND-013 — Finish localized social metadata and validate previews

**Category:** A; E

**Priority:** P3

**Status:** Partial

**Finding type:** Optional completeness/localization improvement

**Problem / pending matter:** og:url is absent; social-image alt remains English in Spanish; real share-crawler behavior is unverified.

**Technical evidence and source:** Phase 2 A/E: shared fixed og:image:alt in source and no og:url; main broken image origin is LAND-001.

**Related files and lines:** src/components/Landing.astro:39-42; src/i18n/content.ts:3-4,65-66; public/social-card.png

**User / business impact:** Social preview consistency and Spanish descriptive text can be improved; no ranking loss was measured.

**Recommended solution:** After the origin fix, use localized truthful metadata and assess whether explicit og:url adds useful completeness; verify actual social crawler access.

**Verifiable acceptance criteria:** EN/ES social title/description/image/alt are accurate and language-appropriate; image URL returns correct image MIME/dimensions; og:url if added matches public self-canonical. Record a real share-debugger/crawler test or explicitly retain its unavailable status. Do not require duplicate Twitter fields if OG fallback works.

**Estimated effort:** Low

**Dependencies / authorization:** LAND-001; approved localized copy; share-validator access

**Confidence:** High for missing/localization fields; preview behavior unknown

**Priority rationale:** Secondary polish after correcting the shared origin.

**Acquisition gate:** No

<a id="land-027"></a>

#### LAND-027 — Evaluate longer browser caching for fingerprinted assets

**Category:** B; G

**Priority:** P3

**Status:** Improvement suggested

**Finding type:** Optional optimization

**Problem / pending matter:** Hashed CSS/JS revalidate with max-age=0 despite successful edge-cache HIT.

**Technical evidence and source:** Phase 2 B/G: sampled Cache-Control public,max-age=0,must-revalidate; documented Cloudflare default.

**Related files and lines:** public/ (potential _headers location, not implemented); wrangler.jsonc:5; docs/deployment.md:24-35

**User / business impact:** Repeat visits may incur avoidable revalidation latency; no cache failure or measured savings.

**Recommended solution:** Use LAND-008 measurements to decide a narrow immutable policy for content-hashed output, without applying it to HTML/unversioned files.

**Verifiable acceptance criteria:** Record retain/change decision and repeat-visit evidence. If changed, fingerprinted resources have an appropriate immutable lifetime, HTML stays refreshable, changed content receives a new URL, and Workers responses show the intended policy. Do not use distribution byte totals as a savings claim.

**Estimated effort:** Low

**Dependencies / authorization:** LAND-008 for measured benefit; publication approval if changing live delivery

**Confidence:** High for policy; benefit conditional

**Priority rationale:** Working default; secondary optimization.

**Acquisition gate:** No

<a id="land-028"></a>

#### LAND-028 — Remove the unused secondary-button styles during an authorized cleanup

**Category:** B; G

**Priority:** P3

**Status:** Improvement suggested

**Finding type:** Confirmed low-impact dead style

**Problem / pending matter:** secondary-button and hover rules have no component caller.

**Technical evidence and source:** Phase 2 B: class appears only in global stylesheet at lines 77-78.

**Related files and lines:** src/styles/global.css:77-78

**User / business impact:** Tiny avoidable CSS maintenance cost; no demonstrated meaningful performance issue.

**Recommended solution:** Remove only the unused rules when a scoped code cleanup is authorized; do not add an abstraction.

**Verifiable acceptance criteria:** Search still confirms no live callers; two unused rules removed, surrounding button states preserved; required project checks pass for the code change. No significant performance gain is claimed.

**Estimated effort:** Low

**Dependencies / authorization:** Code-change authorization; current caller search

**Confidence:** High for source finding

**Priority rationale:** Small refinement with low user impact.

**Acquisition gate:** No

<a id="land-029"></a>

#### LAND-029 — Review available toolchain updates without forcing a major migration

**Category:** G

**Priority:** P3

**Status:** Improvement suggested

**Finding type:** Maintenance review

**Problem / pending matter:** An available Wrangler patch and TypeScript major are informational; TS6 is deliberately retained for checker compatibility.

**Technical evidence and source:** Phase 2 bun outdated: Wrangler 4.156.0 -> 4.156.1, TypeScript 6.0.3 -> 7.0.2; bun audit JSON returned no advisories.

**Related files and lines:** package.json:24-32; bun.lock; README.md:27; wrangler.jsonc:1-5

**User / business impact:** Maintenance review may prevent future drift; no vulnerability or current incompatibility established.

**Recommended solution:** Assess relevant patch release notes and keep TS6 until current checker compatibility justifies changing it; recheck current versions at implementation time.

**Verifiable acceptance criteria:** Document retain/update rationale. Any actual Bun-managed update preserves compatible pins/lockfile and passes check,test,build plus applicable Wrangler dry run. Do not update TypeScript solely because a newer major exists or mislabel these versions as vulnerable.

**Estimated effort:** Low

**Dependencies / authorization:** Current official release/compatibility evidence at review time; LAND-010 prerequisites

**Confidence:** High for historical version output; version freshness changes over time

**Priority rationale:** Optional maintenance, not an urgent defect.

**Acquisition gate:** No

<a id="land-030"></a>

#### LAND-030 — Confirm the planned project-documentation destination

**Category:** C; E

**Priority:** P3

**Status:** Absent

**Finding type:** Owner-planned capability

**Problem / pending matter:** pipesor-docs is non-interactive planned text rather than an available documentation link.

**Technical evidence and source:** Phase 2 E and Phase 1 D4: footer marks Documentation planned; no fabricated URL.

**Related files and lines:** src/components/Landing.astro:125; src/i18n/content.ts:57,119

**User / business impact:** Visitors cannot inspect detailed documentation yet; the existing label is honest.

**Recommended solution:** Ask the owner to supply an existing verified destination when ready, or explicitly keep this planned. Do not turn the landing into a documentation app.

**Verifiable acceptance criteria:** Record availability decision; any future link is relevant, anonymously reachable and equivalent in EN/ES. If not ready, keep accurate planned non-link text; no fake URL or unrequested docs platform.

**Estimated effort:** Low

**Dependencies / authorization:** Owner documentation availability decision

**Confidence:** High for current planned state

**Priority rationale:** Secondary project information, not a broken link.

**Acquisition gate:** No

<a id="land-032"></a>

#### LAND-032 — Decide whether truthful structured data serves a supported purpose

**Category:** A

**Priority:** P3

**Status:** Improvement suggested

**Finding type:** Optional SEO enhancement

**Problem / pending matter:** No JSON-LD exists; no mandatory rich-result feature has been established.

**Technical evidence and source:** Phase 2 A16/A2: schema is optional; identity, prices and ratings are not approved facts.

**Related files and lines:** src/components/Landing.astro:33-53; src/i18n/content.ts:3-4,65-66; docs/landing-page-brief.md:273-288

**User / business impact:** Possible machine-readable context, without evidence of a ranking or rich-result loss.

**Recommended solution:** Only add a truthful relevant type if supported and beneficial; otherwise record a justified deferral.

**Verifiable acceptance criteria:** Record the decision and current official feature eligibility. If implemented, structured data validates, matches visible EN/ES content and includes only confirmed facts; no fabricated Organization identity, reviews, pricing, guarantees or FAQ rich-result promise.

**Estimated effort:** Low

**Dependencies / authorization:** LAND-001 public URLs; confirmed product/entity facts where needed

**Confidence:** High for absence; value contextual

**Priority rationale:** Optional enhancement after verified SEO defects.

**Acquisition gate:** No

## 8. Four-stage roadmap and potential-return priorities

Stages are workstreams, not a rigid calendar. Dependencies and owner decisions override numbering; there is no evidence for deadlines or financial ROI. Detailed acceptance criteria remain in Section 7 and the unchanged CSV. Suggested responsibilities do not assign work to named people. No item is completed by being placed in this plan.

### Stage 1 — Critical corrections and essential verification

Remove the confirmed public-origin/transport defects and obtain core runtime, responsive and accessibility evidence. No P0 incident was demonstrated; this stage uses the master brief’s critical-corrections label for the highest-impact P1 work and its prerequisites.

**Suggested responsibility:** Engineering for public metadata/transport/field cue; QA for browser and accessibility; repository/tooling owner for the full check suite.

**Prerequisites and coordination:** Approved build origin and read access to actual routing; reachable Chrome/AT; documented Lefthook. LAND-015 read-only remote inspection may start immediately to supply routing/build context.

| Pending item | Priority | Status / nature | Existing effort |
| --- | --- | --- | --- |
| [LAND-001](FASE_4_PENDIENTES.md#land-001) — Correct the shared public metadata origin | P1 | Defective; Confirmed defect | Low |
| [LAND-002](FASE_4_PENDIENTES.md#land-002) — Enforce the approved HTTPS origin | P1 | Defective; Confirmed defect | Low |
| [LAND-004](FASE_4_PENDIENTES.md#land-004) — Verify and resolve the email-field boundary contrast concern | P1 | Partial; Source-supported accessibility concern | Low |
| [LAND-005](FASE_4_PENDIENTES.md#land-005) — Complete functional browser and network verification | P1 | Not verifiable; Verification gap | Medium |
| [LAND-006](FASE_4_PENDIENTES.md#land-006) — Verify responsive design and rendered visual quality | P1 | Not verifiable; Verification gap | Medium |
| [LAND-007](FASE_4_PENDIENTES.md#land-007) — Complete manual WCAG 2.2 A/AA verification | P1 | Not verifiable; Verification gap | High |
| [LAND-010](FASE_4_PENDIENTES.md#land-010) — Complete the documented quality suite and clean-environment evidence | P2 | Partial; Environment/verification gap | Low |

**Exit evidence:** LAND-001/002 acceptance demonstrated on reviewable artifacts and, after separately approved publication, public responses. LAND-004 concern resolved or validly explained with rendered evidence. LAND-005/006/007 outcomes recorded, with any actual blocking defects fixed and retested before readiness is claimed. LAND-010 has complete command results. Unknown tests cannot be closed as passed.

### Stage 2 — Technical SEO and performance

Measure the performance baseline, validate public discovery/indexing evidence and evaluate optional enhancements only after confirmed origin problems are addressed.

**Suggested responsibility:** SEO/content owner for query/indexing and metadata; QA/performance engineer for traces; engineering for evidence-justified delivery changes.

**Prerequisites and coordination:** LAND-001 for valid public URLs; browser or usable PSI quota; Search Console access; owner audience/locale input. Field data may be insufficient; do not enable RUM without LAND-022.

| Pending item | Priority | Status / nature | Existing effort |
| --- | --- | --- | --- |
| [LAND-008](FASE_4_PENDIENTES.md#land-008) — Measure current mobile/desktop performance and resource cost | P1 | Not verifiable; Verification gap | Medium |
| [LAND-009](FASE_4_PENDIENTES.md#land-009) — Establish field-performance evidence availability | P2 | Not verifiable; Verification gap / conditional measurement | Medium |
| [LAND-012](FASE_4_PENDIENTES.md#land-012) — Decide whether to publish a sitemap | P3 | Absent; Optional improvement | Low |
| [LAND-013](FASE_4_PENDIENTES.md#land-013) — Finish localized social metadata and validate previews | P3 | Partial; Optional completeness/localization improvement | Low |
| [LAND-014](FASE_4_PENDIENTES.md#land-014) — Verify actual indexing and Google canonical selection | P1 | Not verifiable; Verification gap | Low |
| [LAND-027](FASE_4_PENDIENTES.md#land-027) — Evaluate longer browser caching for fingerprinted assets | P3 | Improvement suggested; Optional optimization | Low |
| [LAND-031](FASE_4_PENDIENTES.md#land-031) — Validate target audience and search intent with actual evidence | P2 | Not verifiable; Research gap / positioning hypothesis | Medium |
| [LAND-032](FASE_4_PENDIENTES.md#land-032) — Decide whether truthful structured data serves a supported purpose | P3 | Improvement suggested; Optional SEO enhancement | Low |

**Exit evidence:** LAND-008 contains reproducible mobile/desktop measurements and resource evidence; genuine failures receive corrective work, without assuming success from source. LAND-014 separates current indexing from post-release inspection. LAND-012/013/027/032 have documented implement/retain/defer decisions and validation where implemented; optional items do not become launch blockers solely for being absent. LAND-031 records evidence versus hypotheses.

### Stage 3 — UX and conversions

Remove the public project dead end and align the invitation with actual availability. Resolve owner prerequisites before considering a real registration flow.

**Suggested responsibility:** Product owner and appropriate privacy/legal expertise for entity/data handling; content owner for EN/ES; engineering/QA only for separately authorized implementation.

**Prerequisites and coordination:** LAND-017 approval precedes LAND-019; LAND-005/007 verification precedes activation. LAND-020 and LAND-021 settle truthful messaging. LAND-022 from Stage 4 must be decided before LAND-023; lack of analytics approval is not permission to instrument.

| Pending item | Priority | Status / nature | Existing effort |
| --- | --- | --- | --- |
| [LAND-003](FASE_4_PENDIENTES.md#land-003) — Remove the public project-link dead end | P2 | Defective; Confirmed defect | Low |
| [LAND-017](FASE_4_PENDIENTES.md#land-017) — Approve identity and data-handling/privacy prerequisites | P1 | Absent; Conditional acquisition blocker / owner decision | High |
| [LAND-018](FASE_4_PENDIENTES.md#land-018) — Confirm an official contact/support destination | P2 | Absent; Owner decision / trust hypothesis | Low |
| [LAND-019](FASE_4_PENDIENTES.md#land-019) — Implement real registration only after approval | P1 | Absent; Intentional pending conversion capability | High |
| [LAND-020](FASE_4_PENDIENTES.md#land-020) — Resolve CTA expectations while registration is closed | P2 | Improvement suggested; Confirmed wording tension / CRO hypothesis | Low |
| [LAND-021](FASE_4_PENDIENTES.md#land-021) — Complete owner bilingual copy and audience review | P2 | Partial; Approval gap / editorial hypotheses | Medium |
| [LAND-023](FASE_4_PENDIENTES.md#land-023) — Instrument approved CTA and registration funnel events | P2 | Absent; Conditional measurement capability | Medium |
| [LAND-030](FASE_4_PENDIENTES.md#land-030) — Confirm the planned project-documentation destination | P3 | Absent; Owner-planned capability | Low |

**Exit evidence:** Anonymous project destination works or is accurately restricted/planned. Approved EN/ES copy matches current action. Registration remains disabled until all LAND-019 prerequisites and controlled tests are satisfied and activation is explicitly authorized. Contact/docs are verified or explicitly deferred. Analytics clicks are never mislabeled as registrations; LAND-023 is deferred if tracking remains unapproved.

### Stage 4 — Quality, maintenance and incremental improvements

Close remote-policy/security/compatibility evidence gaps, clarify ownership and measurement policy, and make small justified refinements.

**Suggested responsibility:** QA for engine/device coverage; security/platform owner for exposure/headers/remote policy; product/rights holders for license/analytics; engineering for approved cleanup.

**Prerequisites and coordination:** Relevant read-only platform/CI access, target engines/devices, owner decisions. Start LAND-015 and LAND-022 early when they unblock other stages. LAND-025 requires runtime regression evidence; LAND-029 requires compatible tooling and full checks.

| Pending item | Priority | Status / nature | Existing effort |
| --- | --- | --- | --- |
| [LAND-011](FASE_4_PENDIENTES.md#land-011) — Provide useful not-found recovery content | P2 | Improvement suggested; Observed usability gap | Low |
| [LAND-015](FASE_4_PENDIENTES.md#land-015) — Verify remote builds, edge policy and preview visibility | P2 | Not verifiable; Remote-configuration verification gap | Medium |
| [LAND-016](FASE_4_PENDIENTES.md#land-016) — Resolve source-code ownership and license decision | P2 | Absent; Owner/legal decision | Medium |
| [LAND-022](FASE_4_PENDIENTES.md#land-022) — Decide analytics, consent and monitoring policy | P2 | Absent; Owner/privacy decision | Medium |
| [LAND-024](FASE_4_PENDIENTES.md#land-024) — Decide and validate approved JavaScript error visibility | P2 | Improvement suggested; Conditional observability recommendation | Medium |
| [LAND-025](FASE_4_PENDIENTES.md#land-025) — Review compatible static-response security headers | P2 | Improvement suggested; Hardening recommendation | Medium |
| [LAND-026](FASE_4_PENDIENTES.md#land-026) — Complete a read-only exposure review of publishable artifacts/history | P2 | Not verifiable; Verification gap | Medium |
| [LAND-028](FASE_4_PENDIENTES.md#land-028) — Remove the unused secondary-button styles during an authorized cleanup | P3 | Improvement suggested; Confirmed low-impact dead style | Low |
| [LAND-029](FASE_4_PENDIENTES.md#land-029) — Review available toolchain updates without forcing a major migration | P3 | Improvement suggested; Maintenance review | Low |
| [LAND-033](FASE_4_PENDIENTES.md#land-033) — Verify the agreed browser-engine and real-device matrix | P2 | Not verifiable; Compatibility verification gap | Medium |

**Exit evidence:** Record remote build/preview/robots provenance without secret values, compatible header rationale and rendered results if changed, redacted exposure review, and agreed engine/device outcomes. Record ownership/license and analytics decisions without inventing them. LAND-011/028/029 refinements follow their existing acceptance criteria; a justified deferral of optional work is explicit.

### Ten items with the greatest potential return

This is a qualitative impact order, not measured financial ROI or proven conversion uplift. High-return verification tasks may confirm that no code change is needed. LAND-003 remains a quick win despite falling outside this ten-item list.

| Order | Item | Why it could matter | Evidence of completion / benefit |
| --- | --- | --- | --- |
| 1 | [LAND-001](FASE_4_PENDIENTES.md#land-001) | One shared fix repairs both locale canonicals, language alternates and the public social-image destination. | Inspect built and public metadata; no localhost; approved public 200 destinations. |
| 2 | [LAND-002](FASE_4_PENDIENTES.md#land-002) | Removes a confirmed unencrypted entry and scheme inconsistency. | HTTP redirect path/query preservation; HTTPS 200; no loops. |
| 3 | [LAND-017](FASE_4_PENDIENTES.md#land-017) | Resolves explicit owner prerequisites that currently prevent lawful/approved collection decisions. | Signed-off entity/data flow/disclosures/destination decision; no invented legal facts. |
| 4 | [LAND-019](FASE_4_PENDIENTES.md#land-019) | Unlocks the intended registration outcome only after approval; currently impossible by design. | Controlled accepted-delivery, validation/loading/error cases; explicit activation approval. |
| 5 | [LAND-005](FASE_4_PENDIENTES.md#land-005) | Tests core interactions and runtime errors that source checks cannot establish. | EN/ES/theme control and network/console evidence; no actual submissions. |
| 6 | [LAND-006](FASE_4_PENDIENTES.md#land-006) | Checks whether visitors can read and use the primary action on the target screens. | 16 locale/theme/viewport cases with rendered evidence and defect-specific retests. |
| 7 | [LAND-007](FASE_4_PENDIENTES.md#land-007) | Checks that keyboard and assistive-technology users can operate the experience. | Documented WCAG A/AA manual results, including dialog focus, errors and reflow. |
| 8 | [LAND-008](FASE_4_PENDIENTES.md#land-008) | Replaces performance guesses with measurements and focuses optimization on actual costs. | Comparable mobile/desktop lab runs and resource/interaction evidence; no TBT-as-INP. |
| 9 | [LAND-004](FASE_4_PENDIENTES.md#land-004) | Addresses a concrete low-contrast field cue concern with a small potential correction. | Rendered cue evidence in both themes; necessary contrast or valid alternative. |
| 10 | [LAND-020](FASE_4_PENDIENTES.md#land-020) | Makes the immediate CTA promise fit current availability while registration remains closed. | Owner-approved equivalent wording and documented expectation/comprehension check. |

### Dependency sequence and decision gates

- Metadata: approved origin → LAND-001 reviewed build → separately approved publication → LAND-014 reinspection and LAND-013 real social preview. LAND-012/032 are optional and do not delay correction of the origin defect.
- Transport: read actual routing/settings (LAND-015 where access is needed) → LAND-002 reviewed redirect solution → approval for remote changes/publication → HTTP/HTTPS verification. LAND-025 hardening must preserve scripts and controls.
- QA: obtain browser/AT/tooling access → LAND-005/006/007/008 and LAND-010 evidence; LAND-004 supplies field-specific contrast evidence to LAND-007. LAND-033 extends independent engine/device coverage. An unknown case is not a pass.
- Registration: LAND-017 and approved destination/implementation scope → LAND-019 controlled tests → completed runtime/accessibility checks → explicit activation approval. Preserve disabled collection until then. LAND-020/021 keep the interim invitation truthful.
- Measurement: LAND-022 approve or decline technologies/purposes → LAND-023 events / LAND-024 monitoring / LAND-009 RUM only if allowed. A real registration-completion event additionally depends on LAND-019; a click is not a completed registration.
- Optimization: LAND-008 measured resource evidence → retain or implement narrowly justified caching/preload/image/hydration changes; LAND-027 covers cache policy. LAND-028 is only a tiny dead-style cleanup. A newer package version does not require a major migration (LAND-029).

Full item-specific dependencies and approvals remain in the backlog/CSV. No task here authorizes committing, publishing, changing remote infrastructure or changing product decisions.


## 9. Quick wins and acquisition gates

### Quick wins — low effort, potentially useful impact

| Item | Smallest useful action | Limit / dependency |
| --- | --- | --- |
| LAND-001 | Correct the approved build origin and inspect both generated metadata sets | Confirmed defect; a public fix still needs publication approval |
| LAND-002 | Confirm the applicable HTTPS redirect control and validate route preservation | Remote access/approval may dominate otherwise small effort |
| LAND-003 | Use a verified public destination or honest restricted/planned state | Requires owner visibility decision; never expose a private repository automatically |
| LAND-004 | Verify the rendered field cue and, if needed, strengthen that cue | The numeric concern is confirmed; rendered WCAG outcome still needs a browser |
| LAND-020 | Review interim CTA wording against the actual disabled preview | Owner approval and comprehension evidence; no claimed uplift |
| LAND-010 | Supply documented Lefthook and rerun the existing complete suite | Environment prerequisite; does not replace browser QA |

Tiny cleanups and optional metadata are not promoted to high-return launch requirements merely because they are easy. Dates and monetary gains depend on access, evidence and approval and are not estimated here.

### Before investing in acquisition traffic

For campaigns promising early access, **do not treat the current page as an operational signup funnel**. Require the LAND-017 decisions and authorized LAND-019 flow, plus passing control/error/accessibility/responsive checks and truthful EN/ES promises. If the owner deliberately chooses an informational campaign instead, its objective and copy must reflect the prototype and unavailable registration; it must not be reported as lead acquisition.

Correct the confirmed public-origin and transport issues (LAND-001/002), resolve the public project dead end (LAND-003), and obtain LAND-005/006/007/008 core browser/lab evidence with actual blocking defects addressed. Resolve the rendered field concern under LAND-004. Complete project checks (LAND-010), applicable security/release reviews (LAND-015/025/026) and the agreed browser matrix (LAND-033), or explicitly document accepted limits; unknown tests cannot be called passed. This is a recommended readiness gate, not evidence those items are now complete.

Before claiming organic-search readiness, inspect current/corrected indexing and canonical selection (LAND-014); do not promise ranking or wait for a particular rank as an artificial launch condition. Before claiming measurable ROI, decide measurement policy (LAND-022) and use LAND-023 only if approved. Declining analytics remains valid, with its measurement limitation disclosed. Optional sitemap/JSON-LD, testimonials, pricing and a custom domain are not blanket prerequisites.

Publication and enabling registration, tracking or remote policies still require the repository/product approvals. The audit creates reviewable plans and acceptance criteria, not authority for those changes.


## 10. Risks, unknowns and post-change monitoring

Highest uncertainty is current browser/runtime/accessibility/performance quality: unavailable Chrome and exhausted PSI quota are tool limitations, not passed tests. Field data may be absent at current traffic levels. Indexing and Google canonical selection require property evidence; remote builds/robots/previews/security policies require appropriate read-only access. Full exposure/history and legal applicability were not verified. The existing test-suite interruption is a known missing Lefthook prerequisite, not proof that remote CI fails.

Future collection expands the trust boundary and is gated by owner/entity/data-handling/destination approval. Analytics/monitoring remains conditional on a separate policy decision. A restrictive CSP or broad shared-domain HSTS policy can break or overreach the actual deployment, so compatibility and control scope must be verified. The build-time origin mistake demonstrates why a runtime-only change cannot rewrite already generated metadata.

### After authorized changes — monitoring and revalidation

| Area | What to observe | Timing / interpretation | Approval or data limit |
| --- | --- | --- | --- |
| Public metadata and transport | Canonical/hreflang/social image, HTTP redirect, public 200/404 and asset delivery | Verify each approved release and hostname/build-origin change | Anonymous HTTP checks need no user data; don't infer Google selection from markup |
| Organic search | URL Inspection, indexed/crawl state, selected canonicals, relevant EN/ES queries where available | Compare after recrawl with recorded dates; indexing can lag | Read-only property access; no ranking guarantee |
| Lab performance | Repeat the same mobile/desktop load/interaction protocol after asset/script changes | Compare like-for-like cold/warm runs, keeping raw evidence | LCP<=2.5s, CLS<=0.1; INP<=200ms only with valid interaction/field evidence; no TBT substitution |
| Field performance | p75 LCP/INP/CLS by device and observation window | Use a sufficient real-user window, not the six CLI TTFB requests | Public CrUX if available; RUM only if approved; insufficient volume stays unknown |
| Registration reliability | Accepted delivery, server/network errors, duplicates/retries, accessibility of feedback | Controlled staging checks before activation; observe production only through approved processes | Never submit real data as part of this diagnostic audit; no email values in events/logs |
| Funnel/CRO | Distinct CTA intent, form attempt and accepted registration; locale/device context if permitted | Use a documented baseline/sample and hypothesis protocol before claiming uplift | LAND-022/023 approval; click is not registration; no invented percentages |
| Runtime and browser quality | Console/network, hydration, dialogs, keyboard/focus, zoom/reflow, small-screen fit | Regression checks after relevant changes; agreed engines/real phone | Manual QA without tracking is possible; production error monitoring requires policy approval |
| Security and maintenance | Relevant advisories, scoped exposure review, headers and CSP compatibility, build-origin/preview policy drift | At releases and periodic owner-agreed reviews; patch only where justified | Redact findings; no automatic major updates, parent-domain policy or remote changes |

No monitoring service is installed by this plan. Owners should set review cadence, permitted telemetry and response responsibilities before activation; this audit has no evidence to assign a real operational SLA.


## 11. Conclusion and production readiness

Pipesor is a working static prototype presentation within the verified build/HTTP scope. It is **not demonstrated ready for a professional registration/acquisition launch or traffic scaling**: the intended signup cannot complete by design, confirmed public delivery/metadata/link issues remain open, and essential browser/accessibility/performance evidence is missing. This does not mean CWV or keyboard behavior was tested and failed.

The smallest professional path is to correct confirmed defects, obtain the missing evidence, settle owner prerequisites, and authorize only the collection/measurement actually required. Optional schemas, sitemap, cache refinement, documentation and maintenance should follow their contextual value rather than inflate critical scope. No new testimonials, metrics, guarantees, integrations, backend or SSR migration is justified by this diagnosis alone.

Final artifacts are this report, [BACKLOG_LANDING.csv](BACKLOG_LANDING.csv) and [RESUMEN_EJECUTIVO.md](RESUMEN_EJECUTIVO.md); [FASE_5_ROADMAP.md](FASE_5_ROADMAP.md) provides a standalone plan. Prior phase documents are preserved as the evidence trail. These deliverables complete the authorized audit and planning work; they do not close any implementation or verification item.
