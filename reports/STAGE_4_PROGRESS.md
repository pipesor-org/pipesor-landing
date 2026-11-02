# Stage 4 — quality, maintenance and recovery

Date: 2026-11-02. Source branch `feature/landing-recovery`, based on merged main `a0293cffb5a16eb2fa1b7683e3b2b048e449c4a9`. Source commits `2a79911` and `7447830` were pushed for review in PR #9: https://github.com/pipesor-org/pipesor-landing/pull/9. No merge, production deployment, remote policy update, collection or tracking activation has occurred. Reports are committed separately on their dedicated branch.

## Owner decisions

- Approved a simple EN/ES recovery page: “Page not found” / “Página no encontrada”, with localized home/product links.
- Approved the intended compatibility matrix: Chromium, Firefox, Safari/WebKit and one physical phone, with unavailable tests explicitly recorded.
- Approved MIT licensing exclusively for original source code, year 2026, copyright Jhon Alexander Galvez Chambi and Ramiro Alexander Guzman Chavez. The owner also confirmed Ramiro explicitly approved these exact terms. The Pipesor name, logo, branding, visual identity, product screenshots and social-media artwork remain All Rights Reserved. Third-party licenses remain intact. This records supplied approval rather than an independent authorship investigation.
- The earlier owner decision to keep application tracking and registration disabled remains in force. No continuous monitoring or new consent mechanism was approved or implemented.

## Implementation prepared

- A shared static recovery component and EN/ES 404 pages reuse the existing brand, Sora, theme preference and accessible controls. There is no backend, adapter, Worker entrypoint, form or product claim on the recovery pages.
- Astro `build.format: 'preserve'` produces root and nested `404.html` files while preserving existing locale index routes. Workers `assets.not_found_handling: '404-page'` selects the nearest recovery page with a genuine 404 status; root and Spanish nested misses are covered.
- Exactly two unused `.secondary-button` CSS rules were removed after checking callers. No meaningful speedup is claimed.
- `public/_headers` adds `nosniff` and an explicit `strict-origin-when-cross-origin` referrer policy. CSP, HSTS, transport redirects, frame policy and cross-origin isolation were not added. The earlier HTTPS transport rollback remains respected.
- A scoped root `LICENSE`, licensing documentation, package metadata and equivalent EN/ES footer notices implement the approved code-only terms. The copyright year is fixed at the approved 2026 value. Existing branding, screenshot and font assets remain unchanged.
- README and deployment/footer documentation explain the current licensing scope, recovery output and local Workers verification. No dependency or lockfile update was justified by the maintenance review.

## Coordination

The engineering role implemented recovery and removed the unused CSS rules; the main agent reviewed the diff, added Astro output configuration and headers, integrated license notices and documentation, and ran required checks. The repository role reviewed bounded source/history/build exposure and toolchain updates, then prepared licensing files after the owner confirmed approval. The quality role exercised the local Worker and captured the recovery/footer matrices. A fresh quality agent resumed the unfinished runtime checks after a usage interruption, preserving prior evidence. Chrome sessions were serialized; no agent delegated further work.

## Status by item

| Item | Result | Remaining limit / dependency |
| --- | --- | --- |
| LAND-011 | Approved localized recovery prepared; Workers-local routing and browser checks passed | Public response verification after separately approved source publication remains pending. |
| LAND-015 | Worker, deployment, build trigger and sampled preview read-only checks recorded | Remote commands/branch policy differ from intended Bun workflow; preview-origin failure class confirmed. GitHub protection APIs return a feature-related 403; exact managed robots setting and enforced check protection remain unknown. No remote changes made. |
| LAND-016 | Code-only MIT scope, both names and owner-reported approvals recorded; LICENSE and EN/ES notices prepared | Source review/publication pending. No claim that every file's rights were independently investigated. |
| LAND-022 | Current release retains the explicit no-application-tracking decision | No app analytics/RUM/error collector; provider infrastructure telemetry is distinct and is not represented as nonexistent. Future monitoring needs separate approval. |
| LAND-024 | Manual console/network verification retained as current error-visibility method | Continuous real-user error monitoring remains deferred; no data collector or report destination added. |
| LAND-025 | Minimal headers prepared and verified in local Workers responses; MIME/runtime checks passed | Actual public HTTPS headers after an approved release remain pending; CSP/HSTS require separate compatibility/scope work. No security certification. |
| LAND-026 | Bounded tracked-source/reachable-history/final-artifact pattern review completed | Dedicated scanners unavailable; no matches in the searched patterns is not universal secret-absence assurance. Public GSC ownership file is intentional. |
| LAND-028 | Exactly two unused rules removed; caller search and project checks passed | Source review/publication pending; no meaningful performance gain claimed. |
| LAND-029 | Current toolchain retained after review; Bun audit reported no advisories in 431 packages | Wrangler patch is optional and TypeScript major crosses the documented checker policy. No version vulnerability inferred from availability alone. |
| LAND-033 | Owner-approved matrix recorded; remote Chromium recovery/footer/runtime checks completed | Firefox, Safari/WebKit and physical phone unavailable. No cross-engine/device or full accessibility pass is claimed. |

## Validation and artifacts

- `bun run check`: passed, zero errors/warnings/hints on 18 files.
- `bun run test` with standalone Lefthook: 25 tests plus commit-message cases passed.
- Approved-origin `bun run build`: passed; static EN/ES landing pages, root/ES 404 files, sitemap and verification file present.
- `bun run wrangler deploy --dry-run`: passed, 68 asset-directory entries reported, no bindings and no deployment.
- Local Wrangler parsed the header rule. The sandboxed attempt could not write Wrangler's required log/registry directories, so the local-only server was rerun with approval. After the usage interruption it was restarted on port 8789.
- The retained routing self-check verifies missing root/nested/ES routes as 404 with correct locale, noindex and home/product links, existing routes and sitemap, header-file non-exposure, exact Google verification content and representative MIME-correct CSS/JS/fonts/images. The test was corrected to accept the production's already-existing same-origin 307 for the GSC `.html` URL and the valid `text/javascript` MIME, rather than imposing unsupported expectations. These corrections required no website changes.
- Browser evidence covers 12 recovery cases plus 12 localized-footer cases, followed by resumed theme/form/viewer/keyboard checks. Expected missing-document HTTP 404 resource messages are distinguished from application runtime errors. See the quality report for exact observations and remaining limits.
- Taste source lint passed for the assigned recovery files; the rendered local inspector is unavailable because local Chrome is absent. The remote DevTools browser supplied focused visual checks instead; no full automated Taste gate is claimed.
- Main agent reviewed the source diff and representative final Spanish phone recovery/footer captures. No imagery or existing landing layout was redesigned. The resumed QA browser was closed/reset and the parent-managed local Wrangler server was stopped after verification.

Reports: [recovery implementation](STAGE_4_RECOVERY.md), [platform/header review](STAGE_4_PLATFORM.md), [licensing/exposure/toolchain review](STAGE_4_MAINTENANCE.md), [browser verification](STAGE_4_VERIFICATION.md). Routing checks and selected results are under [stage-4-evidence/](stage-4-evidence/).

Stage 4 is not fully closed: public release verification, remote configuration/protection/robots limits and the unavailable engine/device cases remain explicit. PR #9 awaits review and separately approved merge; reports are kept separate. Registration and application tracking remain disabled.
