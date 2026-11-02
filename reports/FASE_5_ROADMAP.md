# Phase 5 — Action roadmap

This is a planning deliverable based on the frozen evidence and 33 records in [the Phase 4 backlog](FASE_4_PENDIENTES.md) and [CSV](BACKLOG_LANDING.csv). No new measurement, fix, deployment, collection or tracker activation occurred. Existing IDs, priorities, effort estimates and acceptance criteria are unchanged. The scoring remains provisional as documented in [Phase 3](FASE_3_PUNTUACIONES.md).

Stages organize work by purpose, not an inflexible waterfall or a calendar promise. Dependencies take precedence over stage numbering: platform access and owner decisions can start in parallel, and critical accessibility verification is brought forward rather than postponed to a final polish pass. Suggested responsibility is a role recommendation, not an assignment to a named person. Capacity and access are unknown, so no invented dates, velocity, savings or ROI percentages are supplied.

## Stage 1 — Critical corrections and essential verification

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

## Stage 2 — Technical SEO and performance

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

## Stage 3 — UX and conversions

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

## Stage 4 — Quality, maintenance and incremental improvements

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

## Ten items with the greatest potential return

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

## Dependency sequence and decision gates

- Metadata: approved origin → LAND-001 reviewed build → separately approved publication → LAND-014 reinspection and LAND-013 real social preview. LAND-012/032 are optional and do not delay correction of the origin defect.
- Transport: read actual routing/settings (LAND-015 where access is needed) → LAND-002 reviewed redirect solution → approval for remote changes/publication → HTTP/HTTPS verification. LAND-025 hardening must preserve scripts and controls.
- QA: obtain browser/AT/tooling access → LAND-005/006/007/008 and LAND-010 evidence; LAND-004 supplies field-specific contrast evidence to LAND-007. LAND-033 extends independent engine/device coverage. An unknown case is not a pass.
- Registration: LAND-017 and approved destination/implementation scope → LAND-019 controlled tests → completed runtime/accessibility checks → explicit activation approval. Preserve disabled collection until then. LAND-020/021 keep the interim invitation truthful.
- Measurement: LAND-022 approve or decline technologies/purposes → LAND-023 events / LAND-024 monitoring / LAND-009 RUM only if allowed. A real registration-completion event additionally depends on LAND-019; a click is not a completed registration.
- Optimization: LAND-008 measured resource evidence → retain or implement narrowly justified caching/preload/image/hydration changes; LAND-027 covers cache policy. LAND-028 is only a tiny dead-style cleanup. A newer package version does not require a major migration (LAND-029).

Full item-specific dependencies and approvals remain in the backlog/CSV. No task here authorizes committing, publishing, changing remote infrastructure or changing product decisions.

## Quick wins — low effort, potentially useful impact

| Item | Smallest useful action | Limit / dependency |
| --- | --- | --- |
| LAND-001 | Correct the approved build origin and inspect both generated metadata sets | Confirmed defect; a public fix still needs publication approval |
| LAND-002 | Confirm the applicable HTTPS redirect control and validate route preservation | Remote access/approval may dominate otherwise small effort |
| LAND-003 | Use a verified public destination or honest restricted/planned state | Requires owner visibility decision; never expose a private repository automatically |
| LAND-004 | Verify the rendered field cue and, if needed, strengthen that cue | The numeric concern is confirmed; rendered WCAG outcome still needs a browser |
| LAND-020 | Review interim CTA wording against the actual disabled preview | Owner approval and comprehension evidence; no claimed uplift |
| LAND-010 | Supply documented Lefthook and rerun the existing complete suite | Environment prerequisite; does not replace browser QA |

Tiny cleanups and optional metadata are not promoted to high-return launch requirements merely because they are easy. Dates and monetary gains depend on access, evidence and approval and are not estimated here.

## Before investing in acquisition traffic

For campaigns promising early access, **do not treat the current page as an operational signup funnel**. Require the LAND-017 decisions and authorized LAND-019 flow, plus passing control/error/accessibility/responsive checks and truthful EN/ES promises. If the owner deliberately chooses an informational campaign instead, its objective and copy must reflect the prototype and unavailable registration; it must not be reported as lead acquisition.

Correct the confirmed public-origin and transport issues (LAND-001/002), resolve the public project dead end (LAND-003), and obtain LAND-005/006/007/008 core browser/lab evidence with actual blocking defects addressed. Resolve the rendered field concern under LAND-004. Complete project checks (LAND-010), applicable security/release reviews (LAND-015/025/026) and the agreed browser matrix (LAND-033), or explicitly document accepted limits; unknown tests cannot be called passed. This is a recommended readiness gate, not evidence those items are now complete.

Before claiming organic-search readiness, inspect current/corrected indexing and canonical selection (LAND-014); do not promise ranking or wait for a particular rank as an artificial launch condition. Before claiming measurable ROI, decide measurement policy (LAND-022) and use LAND-023 only if approved. Declining analytics remains valid, with its measurement limitation disclosed. Optional sitemap/JSON-LD, testimonials, pricing and a custom domain are not blanket prerequisites.

Publication and enabling registration, tracking or remote policies still require the repository/product approvals. The audit creates reviewable plans and acceptance criteria, not authority for those changes.

## After authorized changes — monitoring and revalidation

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
