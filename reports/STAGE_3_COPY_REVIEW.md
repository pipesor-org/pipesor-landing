# Stage 3 — bilingual copy review

Reviewed 2026-11-02 on `feature/landing-availability`, based on merged main `2818691804840805d214218fd88ae4b60fac3b4b`. This is a source-based review and proposed copy deck for LAND-020/021, not owner approval, participant research, browser verification, or proof of improved conversion. No application files were changed by this review.

## Scope and source of truth

Read `AGENTS.md`, `README.md`, the approved `docs/landing-page-brief.md`, the design-taste skill and its copy reference, `src/i18n/content.ts`, `src/components/Landing.astro` and `src/components/EarlyAccess.tsx`. The brief's product facts and explicit owner decisions take precedence over generic copy heuristics. No new design direction, imagery, layout, benefit claim, integration, legal text or contact destination is proposed.

The provisional audience remains DevOps, SRE and platform engineers operating GitHub Actions, plus engineering leads responsible for delivery stability. Their existing GitHub Actions/run/job/log vocabulary is appropriate to that brief. Reader comprehension, audience fit, query demand and locale priority remain unvalidated; the copy review cannot settle them.

The page's argument is already supported by its material:

| Existing claim | Existing proof or boundary |
| --- | --- |
| A failing workflow can be investigated through evidence and a probable diagnosis. | Genuine product captures and the four-part investigation explanation. |
| Inconclusive evidence stays explicit. | The inconclusive demo incident and uncertainty section. |
| Diagnosis review differs from incident lifecycle. | Separate review-state explanation and product capture. |
| Historical context can be revisited. | Incident history capture; Insights remains explicitly experimental and illustrative. |
| The visitor can explore a prototype now. | Screenshots, in-page navigation and a disabled form preview; no active registration. |

## Findings and smallest recommendation

1. **Observed wording/action mismatch:** the hero says `Get Early Access` / `Obtener acceso anticipado`, while `availability`, the last FAQ and the form all say registration is closed. Both primary links land at `#early-access`, where the form has `method="dialog"`, prevents submission and has a disabled submit button. The mismatch is source-confirmed; confusion or lost conversions are hypotheses, not measured outcomes. The owner approved changing the brief’s CTA to the preview action recorded below; registration and tracking remain disabled.
2. **Supporting invitation language:** `Before you join` / `Antes de registrarte` and `Follow what comes next` / `Sigue lo que viene` reinforce a future registration invitation. They are understandable alongside the notices, but neutral prototype/preview headings would make the immediate action more consistent. This is an editorial recommendation, not a separately proven functional defect.
3. **Product semantics and translation:** EN/ES consistently distinguish probable cause, uncertainty, human validation, lifecycle and illustrative data. Neither locale promises an automatic fix. Retain the current product explanation and all relevant prototype/demo/experimental notices. The current Spanish use of `workflow`, `Job`, `Log` and `Insights Preview` is technical vocabulary aligned with the brief, not an established translation bug. No broad terminology rewrite is justified without reader feedback.

The Spanish label `Vista previa del acceso anticipado` is materially longer than the English label. Check the header and hero at narrow widths before finalizing it; this review does not establish fit. Do not silently replace owner-approved wording or shrink the site's typography to make the label fit.

## Proposed owner-review deck

The coordinator confirmed owner approval for the exact hero CTA below, keeping registration and tracking disabled. The coordinator will use a short visible header label with the full CTA as its accessible name. Other companion edits remain optional proposals and are not covered by the CTA approval. The existing anchor and disabled preview behavior remain the destination and behavior.

| Location / content key | English proposal | Spanish proposal | Decision |
| --- | --- | --- | --- |
| Hero primary link, `cta` | Preview early access | Vista previa del acceso anticipado | Approved by owner, per coordinator handoff. |
| Header primary link, `headerCta` | Preview | Vista previa | Coordinator implementation choice: retain the full approved CTA as `aria-label`; verify label-in-name, narrow-header fit and anchor behavior. |
| Hero, `availability` | Explore the concept today. Registration is not open yet. | Explora el concepto. El registro aún no está abierto. | Retain current text. |
| FAQ section, `questionsHeading` | About the prototype | Sobre el prototipo | Optional companion change for owner review. |
| Early-access section, `accessHeading` | Preview early access | Vista previa del acceso anticipado | Optional companion change; check heading wraps before adopting. |
| Early-access section, `accessText` | Explore the form preview. Registration is not open; nothing is sent or stored. | Explora la vista previa del formulario. El registro no está abierto; no se envía ni guarda nada. | Optional companion change; describes the available action instead of future availability. |
| Form title, `formLegend` | Early-access form preview | Vista previa del formulario | Retain current text. |
| Form disabled action, `disabled` | Registration unavailable | Registro no disponible | Retain current text. |

Keep the existing last FAQ answer, form notice, email-format hints and no-send/no-storage validation feedback. Those notices explain different points in the journey; there is no evidence here that reducing their repetition would improve comprehension. Do not replace preview validation feedback with success, subscription, confirmation-email or waitlist wording.

The existing English form notice says approvals “are being approved,” whereas Spanish says submissions stay disabled until approval. If the owner has not started that process, an equivalent neutral English sentence would be: `Development preview only. Submission remains disabled until data handling, privacy disclosures, and the destination are approved.` This is optional precision, not a required claim that a review process is active.

## Owner review still needed for LAND-021

Obtain explicit EN/ES sign-off on the intended audience and GitHub Actions-only scope; probable-cause/confidence terminology; no-auto-fix wording; demo/prototype and Insights notices; current-availability wording; and any proposed companion copy changes. The exact CTA itself is approved. This review supplies a concrete deck and checks for source-level inconsistencies; it does not substitute for that approval. No new benefits, customer proof, numbers, guarantees, integrations or legal promises are proposed.

## Short comprehension protocol

Run the same task with representative EN and ES readers who were not involved in writing the page. Keep responses in the reports without names or personal contact details. Record reader count, locale, relevant role/background, tested commit and viewport, exact prompts, answers, and any prompted clarification. Do not claim statistical conversion or language-population conclusions from a small qualitative sample.

1. Show the first screen for five seconds, then ask: “What is Pipesor, who is it for, and what can you do now?” / “¿Qué es Pipesor, para quién es y qué puedes hacer ahora?”
2. Before clicking the primary link, ask what they expect it to do. Then let them follow it and ask whether the result matches that expectation.
3. Ask whether they can register today and whether entering a sample email in this preview sends or stores it. Do not enter personal data or make a real submission. The expected reading is that registration is closed and the preview does not submit or save an email.
4. Ask whether Pipesor automatically fixes incidents, whether the screenshots show live data, and whether Insights values are validated product results. The expected answers are no; demo data; and no.
5. Record misunderstandings verbatim, adjust only the implicated copy after owner review, and repeat the affected task. If no readers are available, explicitly defer comprehension testing rather than marking it passed.

## Verification and limits

This report changes documentation only. Source references and EN/ES equivalence were reviewed; no tests, production build, browser session, screenshot inspection or participant session was run for this document. The coordinator/quality role must verify final approved strings in the production-built preview, affected locales, responsive header/hero/section layouts, keyboard anchor behavior and console output before claiming implementation verified. No performance, SEO, demand or conversion improvement is established.
