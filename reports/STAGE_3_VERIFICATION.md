# Stage 3 — focused browser verification

Date: 2026-11-02. Baseline checkout: `2818691804840805d214218fd88ae4b60fac3b4b`; branch `feature/landing-availability`. Scope is the localized early-access CTA and private-repository footer state. No source edits, publication, account connections, collection or tracking were performed by QA.

## Baseline

Approved-origin `bun run build` passed, followed by retained Astro production preview at `http://localhost:4322/`. Chrome DevTools MCP checked `/` and `/es/` at actual 1440, 768 and 390 CSS-pixel widths, DPR approximately 1, with light color scheme and reduced motion for stable captures. Hero and footer viewport screenshots were saved and visually inspected for all six locale/width cases. Existing layout is retained; no new art direction was drawn for this copy/component correction.

Baseline probes in [before-probes.json](stage-3-evidence/before-probes.json) show the header and hero invite early access while the nearby availability notice says registration is not open. The footer exposes the private repository as an anchor. There was no document overflow in any of the six cases. Screenshot files are `before-{en,es}-{1440,768,390}-light-{hero,footer}.jpg` under [stage-3-evidence/](stage-3-evidence/).

## Tool boundaries

Taste source lint on `Landing.astro` and `content.ts` passed with 0 FAIL / 0 WARN. Taste `inspect.mjs` was attempted against the built preview, but could not launch because no local Chrome/Edge/Chromium executable was installed. It did not produce rendered measurements or a gate pass. Chrome DevTools MCP's remote browser remained available and was used for the focused browser checks. Direct MCP screenshot file export rejected the repository path as outside its server workspace roots; returned JPEG image bytes were saved in this checkout instead. The upstream skill was not changed.

## Final verification

The coordinator confirmed the integrated approved-origin build passed after the CTA and footer edits. The retained production preview served that rebuilt output; these are local artifact checks, not a production release claim.

Chrome DevTools MCP exercised **12 cases**: EN/ES × 390/768/1440 CSS pixels × light/dark. Each used actual viewport probes, DPR approximately 1 and reduced motion for stable captures. All 24 final hero/footer screenshots were opened and visually inspected. The full Spanish CTA fits at the measured phone and tablet widths, short header labels fit the navigation, private-repository notes remain readable, and no document overflow was reported. These viewport checks are not real-device certification.

- Header visible labels are `Preview` / `Vista previa`, with the full approved localized CTA in `aria-label`. Hero links use the full visible `Preview early access` / `Vista previa del acceso anticipado` text. Both link to the existing `#early-access` section.
- The private project destination is absent from all page anchors; the footer shows `pipesor-landing` followed by `Private repository` / `Repositorio privado` as non-link text. Documentation stays explicitly planned, with legal notices and contributor links preserved.
- There were no console warnings or errors in any of the twelve navigation cases. [After probes and console results](stage-3-evidence/after-probes.json) retain the exact observations.
- In both locales at width 390, the header CTA was programmatically focused and activated with a native keyboard Enter event. The destination became `#early-access`; section top was approximately 152px, below the sticky header's approximately 120px bottom. This verifies anchor clearance and keyboard activation, not a full tab-order or screen-reader audit.
- The existing email preview was focused; a synthetic `qa@example.invalid` value was inserted and input validation triggered. Native Enter then Tab left the submit button disabled, with `method="dialog"`, no action and no input name. No submit event or fetch/XHR/beacon resource request was observed. Equivalent EN/ES feedback explicitly says registration remains disabled and nothing was sent or stored. No real personal data was entered. [Keyboard/form evidence](stage-3-evidence/keyboard-form.json) records these checks.
- Final Taste source lint remained **0 FAIL / 0 WARN**. The rendered Taste inspector remains unavailable for the local-Chrome reason above; no rendered inspector pass or full-page score is claimed.

## Focused visual critique

The before/after geometry, palette, product captures and typography remain consistent with the approved design. Before, the hero invited an unavailable registration action; after, the verb names a preview and the persistent availability sentence explains registration is closed. Before, the private repository name was an apparently actionable dead end; after, a localized status directly beneath the name explains its availability. No additional art direction, new imagery or layout correction was necessary. This is a component/copy assessment, not an Awwwards-style whole-site score or a representative-user comprehension result.

## Limits and cleanup

The coordinator separately reported `bun run check` with no diagnostics and 25 tests plus commit-message checks passing; QA did not independently rerun that suite. No deployment configuration was changed, so a new deployment dry run was not needed. Public release verification, manual WCAG/screen-reader testing, real devices/other browser engines, analytics behavior, real registration delivery and representative-user comprehension remain outside this pass. The localhost preview was stopped; browser emulation was reset and the isolated task tab closed after testing.

## Post-release response check by coordinator

The owner merged PR #8 as `a0293cffb5a16eb2fa1b7683e3b2b048e449c4a9`. GitHub Quality and the production Workers build passed for that merge, independently of the earlier failed branch build. The coordinator fetched both public locales anonymously after deployment: HTTP 200, exact approved CTA and localized private-repository note present, repository anchor absent and submit still disabled. No post-release browser or broader device/accessibility pass is claimed.
