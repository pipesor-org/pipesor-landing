# Phase 4 — Evidence-based pending-work register

This register derives only from [Phase 1](FASE_1_DIAGNOSTICO.md) and [Phase 2](FASE_2_AUDITORIA.md), with no new application measurements. It records the 33 distinct outstanding decisions, defects, verification gaps and optional improvements in those reports; it does not claim to discover every possible defect. The application and previous reports were not changed. No fixes, data collection, remote configuration, publication or roadmap are included. Documentation follows the repository English-language rule.

The exact same records, including every acceptance criterion and dependency, are available in [BACKLOG_LANDING.csv](BACKLOG_LANDING.csv), UTF-8 with BOM and quoted CRLF-separated records for Excel/import tools.

## Priority and status rules

- **P0:** confirmed severe failure of current authorized operation/conversion or severe data/security failure. No such finding was demonstrated. Disabled prototype registration is not reclassified as a regression.
- **P1:** substantial confirmed impact, explicit acquisition prerequisite, or missing evidence for a core acceptance requirement; the finding type distinguishes these.
- **P2:** material non-blocking improvement, owner decision or narrower verification need.
- **P3:** optional/contextual enhancement or low-impact cleanup.

Priority for a verification item means urgency to obtain evidence, not a claim that the unknown behavior is defective. Effort is a coarse estimate, not a measured duration; medium/high can be dominated by access, review and external approval. Confidence in a gap is separate from confidence that a bug exists.

Status vocabulary: Absent, Defective, Partial, Not verifiable, Improvement suggested. Absent can be intentional. Conditional work is explicitly deferred unless its scope/approval prerequisites are met; this report is not approval to implement it. Recommendations may close with a justified retain/defer decision where their acceptance criteria permit that.

## Counts

| Priority | Items |
| --- | --- |
| P0 | 0 |
| P1 | 10 |
| P2 | 16 |
| P3 | 7 |
| Total | 33 |

## Register by priority

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

## Shared causes and release boundaries

LAND-001 owns canonical/hreflang/social-image origin together. LAND-002 owns scheme normalization. LAND-003 owns the same public link across SEO/UX/QA. LAND-004 owns the one field-boundary concern. Runtime functionality (005), baseline responsive/visual inspection (006), accessibility including AT/reflow (007), performance (008), and cross-engine checks (033) have different acceptance evidence, although they share access prerequisites; discovering a defect there does not pre-create a speculative fix.

LAND-008 includes profiling the single React island, preloads, mobile crops, unused-CSS coverage and actual resource selection: these are hypotheses to measure, not separate invented performance bugs. LAND-021 includes the audience/benefit/repetition editorial hypotheses; LAND-031 supplies search/audience evidence and LAND-020 owns the CTA-specific expectation issue.

Registration campaigns remain conditional on LAND-017 and LAND-019, with LAND-005/006/007/008 core QA evidence; public-discovery correction LAND-001 and transport correction LAND-002 remain distinct confirmed needs. LAND-014 is necessary for claims about organic readiness. Analytics is conditional on LAND-022, never a reason to bypass the no-tracking brief. No automatic SSR/hosting migration, public repository disclosure, cookie banner, customer proof or commercial claim is prescribed. This is an acceptance/dependency statement, not a Phase 5 roadmap.

## Detailed records

<a id="land-001"></a>

### LAND-001 — Correct the shared public metadata origin

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

### LAND-002 — Enforce the approved HTTPS origin

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

### LAND-004 — Verify and resolve the email-field boundary contrast concern

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

### LAND-005 — Complete functional browser and network verification

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

### LAND-006 — Verify responsive design and rendered visual quality

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

### LAND-007 — Complete manual WCAG 2.2 A/AA verification

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

### LAND-008 — Measure current mobile/desktop performance and resource cost

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

### LAND-014 — Verify actual indexing and Google canonical selection

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

### LAND-017 — Approve identity and data-handling/privacy prerequisites

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

### LAND-019 — Implement real registration only after approval

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

### LAND-003 — Remove the public project-link dead end

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

### LAND-009 — Establish field-performance evidence availability

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

### LAND-010 — Complete the documented quality suite and clean-environment evidence

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

### LAND-011 — Provide useful not-found recovery content

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

### LAND-015 — Verify remote builds, edge policy and preview visibility

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

### LAND-016 — Resolve source-code ownership and license decision

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

### LAND-018 — Confirm an official contact/support destination

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

### LAND-020 — Resolve CTA expectations while registration is closed

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

### LAND-021 — Complete owner bilingual copy and audience review

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

### LAND-022 — Decide analytics, consent and monitoring policy

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

### LAND-023 — Instrument approved CTA and registration funnel events

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

### LAND-024 — Decide and validate approved JavaScript error visibility

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

### LAND-025 — Review compatible static-response security headers

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

### LAND-026 — Complete a read-only exposure review of publishable artifacts/history

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

### LAND-031 — Validate target audience and search intent with actual evidence

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

### LAND-033 — Verify the agreed browser-engine and real-device matrix

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

### LAND-012 — Decide whether to publish a sitemap

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

### LAND-013 — Finish localized social metadata and validate previews

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

### LAND-027 — Evaluate longer browser caching for fingerprinted assets

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

### LAND-028 — Remove the unused secondary-button styles during an authorized cleanup

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

### LAND-029 — Review available toolchain updates without forcing a major migration

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

### LAND-030 — Confirm the planned project-documentation destination

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

### LAND-032 — Decide whether truthful structured data serves a supported purpose

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
