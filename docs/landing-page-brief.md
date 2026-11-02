# Pipesor — Landing Page Design Brief

**Audience:** landing-page agent running a Taste Skill review
**Sources of truth:** `pipesor-frontend` repository (tokens, brand, product scope) and the approved Paper file **Pipesor** when accessible
**Date:** 30 October 2026
**Status:** working brief — open decisions in §11 must be confirmed before publishing

---

## 0. How to use this document

1. Read this brief fully before editing the page.
2. If not done, audit the current landing with Taste Skill: hierarchy, typographic rhythm, color restraint, density, alignment, states, responsiveness, accessibility.
3. Return a prioritized findings list **before** rewriting: **P0** truthfulness/correctness, **P1** taste and polish, **P2** optional. Include the reasoning and any proposed token changes.
4. Implement only approved direction; keep copy factual.
5. Verify against §10 and report what was and was not checked.

**What "good taste" means for this brand:** quiet confidence, editorial clarity, engineering credibility. Restraint over decoration. If a visual device does not improve comprehension, remove it. The page should look like it was designed by the same team that built the product — not by a landing-page template.

---

## 1. Product snapshot

Pipesor is an **AIOps interface for CI/CD operations**. It monitors GitHub Actions workflows, turns failing runs into incidents, correlates failure evidence, and proposes a diagnosis with a confidence level that a human validates. It keeps an operational history and surfaces recurring-context insights.

**Canonical domain distinctions — do not blur them in copy or visuals:**

| Concept | Meaning |
| --- | --- |
| Incident lifecycle | Open → analyzing → remediation/verification → resolved |
| Diagnosis validation | Separate human review state (Needs Validation), independent of lifecycle |
| Incident severity | Critical / High / Medium / Low |
| Pipeline criticality | A different property; never presented as severity |
| Workflow ownership | Team-owned workflow |
| Incident assignee | Person responsible for the incident |
| Start remediation | Records human work; it does **not** execute an automated fix |

**Primary audience:** DevOps, SRE and platform engineers running CI/CD on GitHub Actions; engineering leads accountable for delivery stability.

**Jobs to be done:** see what is broken now; know where to look first; avoid chasing inconclusive evidence; keep a durable record of what happened and how it was resolved; spot recurring failure patterns.

---

## 2. What is true today — claim rules

**Implemented:** Operations (Active Incidents, Needs Validation), History (Incidents and provisional Insights), Pipelines inventory with read-only detail and a local onboarding draft, responsive sidebar, English/Spanish, light/dark themes. All data comes from **local demo fixtures**.

**Not implemented:** accounts/authentication, backend, persistence, API, assignment, lifecycle commands, the diagnosis-validation action, incident workspace route, workflow registration, pipeline configuration saves.

**Allowed claims**
- Monitors GitHub Actions workflows and turns failures into incidents.
- Correlates evidence into a probable cause with confidence.
- Flags inconclusive diagnoses instead of guessing.
- Diagnoses are human-validated.
- Read-only GitHub access.
- Prototype / early access; illustrative demo data.
- Bilingual interface; light and dark themes.

**Not allowed without owner sign-off**
- MTTR reductions, percentage savings, ROI, or any performance metric.
- Customer names, logos, testimonials, user counts.
- Security/compliance certifications, SLAs, uptime guarantees.
- "Automatically fixes / remediates / resolves incidents."
- "Prevents incidents" or predictive claims.
- Support for GitLab, Bitbucket, Jenkins, CircleCI, etc. (GitHub Actions only).
- "AI agent that resolves incidents on its own."

**Demo honesty is a design feature.** Prototype/demo status must be visible near the hero and primary CTA — not buried in the footer. Follow the product's existing pattern of an explicit `Demo data` label; never present fixture numbers as live customer traffic.

---

## 3. Message hierarchy

One promise, three proof pillars, one action.

- **Headline territory** (choose one; ≤ 8 words / ~55 characters):
  - "See why your pipeline failed, not just that it did."
  - "CI/CD incidents, diagnosed with evidence."
  - "From failing pipeline to validated diagnosis."
- **Subhead** (1–2 sentences, ≤ 28 words): name the loop — workflow failure → incident → evidence-backed diagnosis with confidence → human validation.
- **Proof pillars**
  1. **Evidence-first triage** — failures correlated into one incident with a probable cause, not a black-box verdict.
  2. **Uncertainty made visible** — "inconclusive" is a first-class answer, so teams do not chase noise.
  3. **Operational memory** — resolved-incident history and recurring-context insights across rotations (label insights as provisional).
- **CTA:** one primary button plus one secondary text link to an in-page anchor. Never two competing primary buttons.

**Tone:** direct, technical, calm. Sentence case. No exclamation marks, emoji, or hype verbs ("revolutionize", "supercharge", "unleash"). Prefer concrete nouns — workflow run, job, log, evidence, diagnosis — over abstractions like "intelligence layer".

---

## 4. Page structure and creative freedom

The landing page must communicate the product clearly, establish credibility, and guide visitors toward early-access registration.

The following elements are required:

- **Header:** Pipesor branding, accessible navigation, language switcher, theme toggle, and primary CTA.
- **Hero:** A compelling value proposition, concise supporting copy, a prominent early-access CTA, and a clear indication that Pipesor is an early-stage prototype.
- **Product explanation:** Communicate the problem Pipesor addresses, its core capabilities, and how its diagnosis workflow operates. All descriptions must reflect the actual product scope.
- **Product visuals:** Incorporate authentic screenshots of the Pipesor interface, with appropriate demo-data labeling.
- **Final CTA:** Reinforce the early-access invitation without introducing unsupported claims.
- **Footer:** Branding and available verified information. Do not invent legal or contact details.

### Creative direction

The sections above establish **content requirements, not a mandatory layout or section order**.

Use `$design-taste-frontend` to determine the most effective information architecture, visual hierarchy, composition, storytelling, and transitions between sections.

You may combine, reorder, expand, or reinterpret sections when doing so improves clarity, engagement, or visual quality.

Additional sections are welcome when they serve a clear communication purpose. Avoid filler, repetitive feature grids, and unnecessary visual complexity.

Maintain consistency with Pipesor's established brand identity, design tokens, and factual product claims.

The goal is not to reproduce a predefined landing-page template, but to create a distinctive, cohesive experience grounded in the actual product.

---

## 5. Visual direction

### 5.1 Color tokens (authoritative, from `src/app/styles/tokens.css`)

| Token | Light | Dark |
| --- | --- | --- |
| App background | `#f7f8fa` | `#0e1116` |
| Surface | `#ffffff` | `#151a21` |
| Surface subtle | `#f1f3f5` | `#1b222b` |
| Surface tint | `#edeff2` | `#1b222b` |
| Border | `#e4e7ec` | `#29313d` |
| Text primary | `#17191c` | `#f4f6f8` |
| Text secondary | `#667085` | `#98a2b3` |
| Accent | `#3157d5` | `#6c8cff` |
| Accent hover | `#2747b6` | define a darker/lighter step with ≥ 4.5:1 on text |
| Info | `#2684ff` | inherit |
| Success | `#16875b` | `#32b67a` |
| Warning | `#d97706` | `#f4a340` |
| Critical | `#d92d20` | `#f97066` |

Rules:
- One accent family. Severity colors are **status semantics only** — never decorative, never used for marketing emphasis.
- Prefer borders and surface contrast over shadows. Shadows exist only for overlays/popovers.
- Do not introduce gradients, glassmorphism, glow, neon, mesh backgrounds, or a second accent hue.
- The accent is the only "brand color" in UI: use it for links, focus, primary CTA, and the 3px inset selection bar.

### 5.2 Typography

- **Sora** for all UI and marketing text. **JetBrains Mono** for technical identifiers only: IDs (`INC-1042`), repository/workflow names, durations, confidence values, log fragments.
- Loaded weights today: Sora 400/500/600/700; JetBrains Mono 400/500. No other family, no italic display faces, no decorative serif.
- Existing product scale: page title 24/32, body 14–16, table 12–13, labels 12. The landing may extend this into a display scale, keeping the same family and rhythm:
  - Display 48–56 / 1.05–1.1 (mobile 32–36)
  - H2 32–36 / 1.15
  - H3 20 / 1.3
  - Body 16 / 1.6
  - Small 14 / 1.55
  - Mono labels 12–13, letter-spacing `0.02em`, uppercase only for short eyebrow labels
- Headline weight 600; avoid 700+ everywhere. Never justify text. Measure 60–75 characters for body copy.

### 5.3 Layout, rhythm and components

- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96. No arbitrary values.
- Content max-width ~1120–1200px; gutters 24px mobile, 32px desktop (product uses 32px content padding).
- Radii: 4px (`sm`), 5px (`md`), 6px (`lg`). Nothing above 8px; no pill buttons or oversized rounded cards.
- Buttons: height 36–40px, 1px border, 12px horizontal padding, 14px label, 120ms `ease` transitions. Primary = accent fill; secondary = surface with border.
- Density is a feature: the product is calm but information-dense. Prefer aligned columns, hairline dividers and a strong baseline grid over spacious empty hero layouts.
- Signature pattern worth echoing: active/selected rows use a **3px inset accent bar** on the leading edge rather than a filled background.
- Icons: 18px, 1.5px stroke, 22×22 viewBox, `currentColor`, outline only. No filled icon set, no mixed icon libraries, no emoji as icons.

### 5.4 Motion

Minimal and functional: 120ms `ease` for hover/focus/state; one subtle entrance per section at most. No parallax, no scroll-jacking, no looping background animation. Respect `prefers-reduced-motion` (the app already does).

---

## 6. Reference material

- Product reference screenshots (captured using full size screenshot from the running app in Chrome):
  - `temp/landing-refs/`
- Product reference branding:
  - `temp/branding/`

---

## 7. Inputs the agent needs (asset and content checklist)

| # | Input | Why it matters | Current status |
| --- | --- | --- | --- |
| 1 | `pipesor_lockup_primary_light_v1.0.svg` | Primary wordmark on light surfaces | Provided — `src/shared/assets/branding/` |
| 2 | `pipesor_lockup_primary_dark_v1.0.svg` | Wordmark on dark surfaces | Provided |
| 3 | `pipesor_symbol_primary_light_v1.0.svg` | Symbol for favicon, nav, small spaces | Provided |
| 4 | `pipesor_symbol_primary_dark_v1.0.svg` | Symbol on dark | Provided |
| 5 | Favicon set: 32, 180 (apple-touch), 512 | Only a 32px PNG exists today | Partial — extend |
| 6 | Open Graph / social card 1200×630 | Link previews | Missing — must be produced |
| 7 | Sora 400/500/600/700, JetBrains Mono 400/500 (WOFF2) | Typography parity, performance | Available via Google Fonts; self-host for the landing and ship OFL license files |
| 8 | Product screenshots, EN, light + dark, 1440 and 390 | Hero and product sections must show the real UI | Provided |
| 9 | Approved product copy (EN) + Spanish translation | No invented claims; ES parity | Pending |
| 10 | Final CTA destination + domain | Primary action must be real | Pending |
| 11 | Legal pages (privacy, terms), contact email, GitHub org link | Footer completeness and trust | Pending |
| 12 | Analytics and consent decision | Avoid unapproved tracking | Pending |
| 13 | GitHub trademark usage guidance | Correct naming of GitHub Actions | Pending |

**Brand asset rules:** use supplied SVGs as-is; never redraw, recolor, distort, or rebuild the logo. The mark is monochrome (`#17191c` light / `#f4f6f8` dark) — it is not accent blue. Keep clear space of at least the symbol's inner stroke width around the lockup. Do not place the light lockup on mid-tone or photographic backgrounds.

---

## 8. Technical and accessibility requirements

- The landing is a **separate surface**. Do not add marketing routes to the app router, and do not import app widgets into it.
- Static-first, responsive, no layout shift. Optimize LCP (< 2.5s on 4G), lazy-load below-the-fold imagery, declare intrinsic image dimensions, subset fonts, avoid heavy animation libraries.
- Breakpoints consistent with the product: 1200 / 1100 / 900 / 800 / 700. Verify 1440, 1024, 768, 390.
- Light theme default; honor `prefers-color-scheme`; if a toggle is exposed, persist it under `pipesor.theme` with the same `system` / `light` / `dark` semantics.
- Accessibility: WCAG 2.2 AA. Body text ≥ 4.5:1; large text ≥ 3:1. Visible `:focus-visible` ring (2px accent, 2px offset). Semantic landmarks, single `h1`, logical heading order, labelled controls, keyboard-operable navigation and language switch, descriptive alt text, no text baked into images, `prefers-reduced-motion` respected.
- Localization: English default, Spanish parity, no truncation at either locale. Do not translate product name, IDs, repository names or technical values.
- Performance/quality gate: no console errors, no broken anchors, no unused CSS, no placeholder lorem ipsum.

---

## 9. Deliverables from the agent

1. Implemented landing page: responsive, light/dark, EN/ES, real copy.
2. A ≤ 10-bullet change rationale mapping decisions back to this brief.
3. A list of remaining placeholders and open decisions.

---

## 10. Acceptance checklist

- [ ] Headline is one promise, ≤ 8 words; subhead explains the workflow → incident → diagnosis → validation loop.
- [ ] Every claim is in the allowed list of §2; no metrics, logos, testimonials, or unsupported platform claims.
- [ ] Prototype/demo status is visible near the hero and CTA.
- [ ] One primary CTA; destination is real.
- [ ] Palette uses the tokens of §5.1 only; severity colors are not decorative.
- [ ] Typography uses Sora + JetBrains Mono with the defined hierarchy; no third family.
- [ ] Radii ≤ 8px; borders over shadows; no gradients, glassmorphism or glow.
- [ ] Icons are 18px outline, 1.5px stroke, `currentColor`.
- [ ] Logo SVGs are used unmodified, with correct light/dark variant and clear space.
- [ ] Responsive at 1440 / 1024 / 768 / 390 with no overflow or clipped text.
- [ ] Light and dark themes both pass contrast and look intentional, not inverted.
- [ ] EN and ES render without truncation; language switch works and is keyboard-accessible.
- [ ] Focus states visible; headings ordered; images have alt text; reduced motion respected.
- [ ] No fabricated UI for our landing page sections.
- [ ] Performance and console checks pass.

---

## 11. Open decisions (owner must confirm)

1. Primary CTA and its destination — early-access form, waitlist, demo request, or contact email?
Owner response: While registration is closed, the primary CTA is "Preview early access" / "Vista previa del acceso anticipado", directing users to the early-access form preview within the landing page. The compact header labels are "Preview" / "Vista previa", with the full CTA as the accessible name. This replaces the previously approved "Get Early Access" wording for the current preview.
The form should be designed and validated as part of the landing experience, but submissions must remain disabled until the data handling process, privacy requirements, and submission destination are approved.
Do not integrate external form services or invent backend functionality.

2. Final domain and whether the landing lives in this repository or a separate one.
Owner response: The final domain has not been selected. The landing page will remain in the independent `pipesor-landing` repository and will be deployed using Cloudflare, with Cloudflare Pages as the preferred hosting option.
Keep deployment configuration independent of any specific domain. Do not purchase domains, configure production infrastructure, or deploy without explicit approval.

3. Can the page show the real app UI (screenshots) or must it use abstract UI illustrations?
Owner response: Use real screenshots of the existing Pipesor application rather than fabricated interface illustrations.
The screenshots are temporarily stored in a `temp` directory. Review them and relocate the selected assets into an appropriate location within the Astro project's asset structure, following established architectural conventions.
Preserve image fidelity and avoid modifying the represented product functionality. Optimize assets for web delivery where appropriate, and clearly label screenshots containing demo data.
Do not modify the original application repository.

4. Is pricing mentioned at all? If yes, it needs approved numbers and a disclaimer.
Owner response: Pricing has not been defined or approved. Do not include pricing sections, subscription tiers, payment-related CTAs, or speculative commercial plans.
Keep the landing focused on communicating the product's value and its early-access availability. Pricing may be introduced in a future iteration once the business model is established.

5. Default language for the root URL and the URL strategy for Spanish (`/es`, subdomain, toggle only).
Owner response: English is the default language at `/`, with Spanish available under `/es`. Use Astro's native i18n routing and provide an accessible language switcher that preserves the current page when an equivalent localized route exists. Include appropriate `hreflang` metadata. Both languages must have equivalent content and functionality.

6. Is a dark-mode toggle exposed on the landing, or does it follow the OS only?
Owner response: Provide an accessible light/dark theme toggle. Follow the operating system preference by default, while allowing users to override it. Persist the selected preference in localStorage using the existing `pipesor.theme` convention (`system`, `light`, `dark`). Apply the effective theme before the page becomes visible to prevent theme flashing. Both themes must meet accessibility contrast requirements.

7. Which legal pages, company identity and contact channels are publishable now?
Owner response: The legal entity, official contact channels, Privacy Policy, and Terms of Service have not yet been finalized.
Do not invent legal information, contact addresses, or policy content. The landing may include a non-functional early-access form preview during development, clearly identified as such.
Public collection of personal information must remain disabled until the responsible entity, data handling process, required privacy disclosures, and submission destination have been approved.
Only publish verified contact information and applicable legal pages.

8. Is analytics/consent required at launch, and under which policy?
Owner response: Analytics and consent requirements are not finalized. Do not integrate analytics, advertising trackers, or third-party behavioral monitoring at this stage.
Cloudflare Web Analytics may be evaluated later as a privacy-oriented option, subject to verification of its data practices and applicable legal requirements.
Do not display a cookie consent banner unless the implemented technologies and applicable regulations require one. Any future analytics integration must be explicitly approved before deployment.

9. Approved phrasing for GitHub Actions references and any third-party trademark notices.
Owner response: GitHub Actions may be referenced by its official name to describe the supported CI/CD integration. Pipesor must not imply any official partnership, endorsement, or certification by GitHub. Use text references by default, and avoid GitHub branding or logos unless their usage complies with the applicable trademark guidelines.

10. Whether "Insights" may be presented before its metrics are finalized, and with what provisional label.
Owner response: Insights may be presented as an experimental prototype capability under the label “Insights Preview”. Any visualizations must use clearly identified illustrative demo data. Do not present provisional metrics as validated product results or imply that analytics capabilities are production-ready.

---

## 12. Non-goals

- Redesigning the product UI, tokens or brand.
- Recoloring, redrawing or "modernizing" the logo.
- Inventing customers, metrics, benchmarks, certifications or integrations.
- Promoting unimplemented capabilities as available.
- Adding a second design system, icon library or animation framework.
- Turning the landing into a documentation site or an app entry point.

---

*Prepared from the `pipesor-frontend` source of truth. Where this brief and the repository disagree, the repository wins; where it and an approved design disagree, ask the owner.*
