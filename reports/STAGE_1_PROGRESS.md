# Stage 1 — implementation and verification

Date: 2 November 2026 UTC (1 November, America/Lima). Branch: `fix/stage-1-readiness`, based on `5f3360f84f7a32db536f6be75c49932d855555d4`, with uncommitted changes. The original audit documents remain historical evidence; this report records subsequent work. No commit, push, deployment, remote setting change, registration activation or tracking was performed.

The owner approved `https://pipesor-landing.jhon-galvezchambi.workers.dev` as the current public origin and deferred LAND-007. `pipesor.com` is a future migration, not a configured destination.

## Item status

| Item | Result | Remaining work |
| --- | --- | --- |
| LAND-001 | Implemented and verified in local production artifacts | Set the approved remote build variable before the separately authorized release; verify public HTML afterward. |
| LAND-002 | Investigated; still open | Choose and authorize a platform/edge solution. Public HTTP root and `/es/` still return 200. |
| LAND-004 | Corrected and verified locally in EN/ES and both themes | Public verification after release; this is not a complete WCAG assessment. |
| LAND-005 | Core local browser checks completed; failure-mode limits retained | Cached/offline-image caveat below; repeat relevant public checks after release. |
| LAND-006 | Required 16-case matrix captured and inspected | Independent browser engines and physical devices belong to LAND-033. |
| LAND-007 | Deferred by owner | Manual WCAG/AT assessment remains open, including screen reader, zoom/reflow and comprehensive focus review. |
| LAND-010 | Local and isolated-source-copy suites passed | New remote CI execution requires an authorized push; prior green CI is identified separately below. |

## Changes

- `astro.config.mjs` rejects missing, malformed, HTTP, local/reserved, IP-literal and non-origin `SITE_URL` values for builds. Credentials, paths, queries and fragments are rejected. Development/check/preview startup can omit the variable. This is syntax/local-address validation, not DNS verification or proof of ownership.
- Twenty focused origin tests cover allowed/rejected inputs and local modes. The existing three form/localization tests remain intact.
- CI supplies the approved public origin. README and deployment instructions explain explicit build configuration and the retained foreground preview session.
- The email border uses the existing `--secondary` token rather than the decorative `--border` token. No brand colors, form collection behavior, content or disabled-button styling changed.

## Metadata evidence

[Generated metadata](stage-1-evidence/metadata.json) records the two built documents. Each has the expected HTTPS self-canonical, reciprocal EN/ES links, root x-default and absolute social-card URL on the approved origin. None of these metadata URLs uses localhost. The local PNG is 1200×630; the current public social-card URL returned 200 with `image/png`.

An actual build without `SITE_URL` exited 1 at the build guard, before generating a release. The approved-origin build exited 0. The remote build trigger was previously inspected and has no build variables: publishing the guard before supplying `SITE_URL` will intentionally stop its build. Remote values were not changed.

## Field contrast evidence

Computed colors were read from the browser, with transitions allowed to settle. Before correction, the border-to-form-surface contrast was 1.240:1 light and 1.332:1 dark. The input was enabled, empty and editable; its background provided little alternative separation from the form.

| Theme | New border | Input fill | Form surface | Border vs fill | Border vs surface |
| --- | --- | --- | --- | --- | --- |
| Light | `#667085` | `#f7f8fa` | `#ffffff` | 4.682:1 | 4.975:1 |
| Dark | `#98a2b3` | `#0e1116` | `#151a21` | 7.343:1 | 6.786:1 |

The persistent boundary exceeds 3:1 against both adjacent colors. [Empty/focused computed styles](stage-1-evidence/field-states.json) show the same border in both locales and a visible 2px accent focus outline. [Validation evidence](stage-1-evidence/functional.json) includes missing/invalid and valid states. Invalid states retain the stronger primary-ink border and explicit localized feedback. The disabled submit button remains disabled and is not evaluated as an active control.

## Browser and responsive evidence

Production-build preview: `http://localhost:4322/` and `/es/`. Browser: Chrome 156.0.8078.74 on Windows, reached through Chrome DevTools MCP; existing DevTools Protocol access supplemented artifact capture and failure-condition emulation. Viewports use DPR 1 and desktop viewport emulation, not physical phones. The 16-case screenshot matrix uses reduced motion for stable inspection; a separate 1024px pass exercises normal motion.

The preview command was retained in a foreground tool session with `--ignore-lock`. Astro's agent-detected background process otherwise disappears when its command session exits. No firewall, browser permission or public-host change was needed.

| Viewport | EN light | EN dark | ES light | ES dark |
| --- | --- | --- | --- | --- |
| 320×568 | [Capture](stage-1-evidence/en-light-320x568.jpg) | [Capture](stage-1-evidence/en-dark-320x568.jpg) | [Capture](stage-1-evidence/es-light-320x568.jpg) | [Capture](stage-1-evidence/es-dark-320x568.jpg) |
| 390×844 | [Capture](stage-1-evidence/en-light-390x844.jpg) | [Capture](stage-1-evidence/en-dark-390x844.jpg) | [Capture](stage-1-evidence/es-light-390x844.jpg) | [Capture](stage-1-evidence/es-dark-390x844.jpg) |
| 768×1024 | [Capture](stage-1-evidence/en-light-768x1024.jpg) | [Capture](stage-1-evidence/en-dark-768x1024.jpg) | [Capture](stage-1-evidence/es-light-768x1024.jpg) | [Capture](stage-1-evidence/es-dark-768x1024.jpg) |
| 1440×900 | [Capture](stage-1-evidence/en-light-1440x900.jpg) | [Capture](stage-1-evidence/en-dark-1440x900.jpg) | [Capture](stage-1-evidence/es-light-1440x900.jpg) | [Capture](stage-1-evidence/es-dark-1440x900.jpg) |

All 16 full-page captures were opened and inspected. [Geometry and image results](stage-1-evidence/responsive.json) show no page-level horizontal overflow or out-of-bounds ordinary content. Headers, CTA, title wrapping, margins, product labels and form content remain readable without clipping. Visible images were loaded after scrolling. Intentional enlarged product-image crops were preserved; they are not page overflow. The four additional 1024×768 first-screen captures are in the same evidence directory. The viewer bounds also fit at 320×568 and at desktop size.

[Functional evidence](stage-1-evidence/functional.json) covers EN/ES × light/dark: CTA anchor clears the sticky header, locale switching preserves `#early-access`, system mode follows the emulated preference, manual theme persists across reload, grouped disclosures change correctly, product radio panels switch, the history shortcut selects history, the viewer opens/zooms/fits/closes, Escape returns focus to its opener, and blur/edit email feedback hydrates and remains localized. Synthetic data only (`stage1@example.invalid`); submission stays disabled. Normal-flow request capture contains only same-origin GETs, no fetch/XHR submission, and no uncaught JavaScript errors.

Basic keyboard checks through MCP and supplemental native CDP key events exercised radio arrows, Enter to open a viewer/disclosure, Tab to blur the email and Escape to close the viewer in both locales/themes. [Additional keyboard/motion results](stage-1-evidence/keyboard-motion-offline.json) record those checks and small-screen dialog bounds. The history shortcut selects the intended panel, but native anchor navigation subsequently leaves focus on the document body in the recorded scripted sequence; comprehensive keyboard/focus acceptance is retained under deferred LAND-007 rather than declared passed.

[Failure-state evidence](stage-1-evidence/failure-states.json): denied localStorage does not break theme controls or the viewer; disabling page JavaScript preserves content, native disclosures and disabled submission, with localized noscript guidance and disabled viewer buttons. Explicitly blocking the enlarged image produces the expected failed image request; alt text/caption and Close remain available. Throttling image delivery to 600ms latency / 50KB/s does not prevent closing the viewer. Four deliberately blocked image requests are expected diagnostics, not unexpected application errors.

Offline limitation: legacy whole-page offline emulation retained an already decoded image in the additional test, so it does not prove cold-cache offline behavior. The separate targeted image-block test establishes the unavailable-resource outcome. There is no custom retry/error panel; the browser's broken-image/alt presentation and caption are the current fallback. No screen reader, independent engine, physical phone, comprehensive WCAG result or Core Web Vitals result is claimed.

### Scoped visual review

The required design skill was applied as a component correction within the approved brand, without a new composition draw or redesign. Its source lint returned 0 failures and 0 warnings. Its standalone inspector could not launch because this Linux execution environment has no installed Chrome/Edge/Chromium executable; the connected Windows browser supplied the screenshots and measurements instead. No inspector pass is claimed.

```text
ROUND 1
Seen in one second: evidence-backed CI/CD diagnosis with a clearly marked prototype.
Idea: the incident investigation supplies the page's sequence and real product proof.
Live thing: grouped workflow disclosures, product views and the screenshot viewer.
Layout: hero=stacked proof / workflow=investigation / product=radio comparison /
uncertainty=crop / memory=split proof / FAQ=disclosures / access=preview form.
Scores: design 7 · usability 7 · creativity 6.5 · content 8 → overall 6.5 (capped).
Caps applied: Spanish title spans three lines at 320px; this is an aesthetic rubric cap,
not a clipping failure or a WCAG verdict. The unavailable inspector is unscored.
Top three observations:
1. Faint editable-field boundary in the baseline form screenshot: fixed with an existing
   brand token; final light/dark screenshots and computed colors verify the change.
2. Three-line Spanish title at 320px: preserve readable type and all words; no new
   marketing-layout change is needed for the scoped Stage 1 correction.
3. Invitation still leads to a disabled form: honest notices remain visible; actual
   registration and CTA decisions stay in LAND-017/019/020, not silently enabled here.
```

## HTTPS investigation and release constraints

Anonymous HTTP GETs with a query string returned 200 and no Location for both `/` and `/es/`. This is still a confirmed public defect. HTTPS works; nothing has been released from this branch.

Read-only MCP checks returned no account zones or custom Worker domains, while workers.dev and preview URLs are enabled. Worker script settings expose no scheme-redirect control. The [static redirect syntax](https://developers.cloudflare.com/workers/static-assets/redirects/) matches file paths, not the request scheme, and does not support domain-level source rules. A catch-all path redirect back to the same HTTPS origin would also match HTTPS requests and could loop. It was not added.

Cloudflare's [Always Use HTTPS](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/always-use-https/) is a zone setting. No owner-controlled zone is currently available here for applying it to this workers.dev hostname. The remaining choices are an explicitly approved minimal request-handling Worker that redirects only HTTP and delegates HTTPS to static assets, or an approved HTTPS policy after the custom domain is acquired/configured. The former adds request-handling code and an assets binding; it was not introduced under the current static-only scope. HSTS is a separate decision and was not enabled for a shared parent domain.

The observed remote build trigger follows `main`, builds with `bun run build`, deploys with `npx wrangler deploy`, and has no build variables. These are observed differences from the documented Bun workflow; no remote correction occurred. Before any authorized release, set the approved `SITE_URL` and review the Bun deploy-command correction. Merging/pushing main can trigger production publication, so publication approval must precede it.

## Quality evidence

Versions: Bun 1.4.4, Node v24.22.2, standalone Lefthook 2.2.2, Wrangler 4.156.0. Lefthook's downloaded release binary matched the published checksum and was used from `/tmp`; Git hooks and configuration were not changed.

| Command | Working tree | Isolated source copy |
| --- | --- | --- |
| `bun install --frozen-lockfile` | Exit 0, existing install unchanged | Exit 0 after retry with `--network-concurrency 8` |
| `bun run check` | Exit 0, no errors/warnings/hints | [Exit 0](stage-1-evidence/clean-check.log) |
| `bun run test` | Exit 0, 23 tests plus commit-message cases | [Exit 0](stage-1-evidence/clean-test.log) |
| Approved-origin `bun run build` | Exit 0, two static routes | [Exit 0](stage-1-evidence/clean-build.log) |
| `bun run wrangler deploy --dry-run` | Exit 0, no deployment | [Exit 0](stage-1-evidence/clean-dry-run.log) |

The isolated copy at `/tmp/pipesor-stage1-clean.W5YOYD` started without node_modules, dist or Astro output. It contains the modified source/config/tests and a separate temporary Git repository for commit-message checks. It shares the machine and package cache, so it is not a fresh OS/remote runner. The initial sandbox install failed on Bun's temp/cache directory; checks attempted before dependencies existed failed for that reason. An authorized retry outside the sandbox stalled with default concurrency; a bounded-concurrency retry completed, then the full suite passed. Wrangler also needed host diagnostic-log access for its dry run. No check was bypassed.

The prior [Quality run 41362040311](https://github.com/pipesor-org/pipesor-landing/actions/runs/41362040311) succeeded for base revision `5f3360f84f7a32db536f6be75c49932d855555d4`, including its frozen install, check/test/build/dry run. It does not validate these unpushed changes. GitHub's branch-protection endpoint returned a plan-related 403; required-check enforcement was not confirmed.

## Remaining gates

Stage 1 is ready for local review, not fully closed: LAND-002 remains open, LAND-007 is owner-deferred, the cold-offline caveat remains explicit, and public changes require a separately approved release and recheck. No audit scores were recomputed. Stage 2 performance/indexing, later product/privacy decisions and LAND-033 cross-engine/device coverage remain outside this pass.
