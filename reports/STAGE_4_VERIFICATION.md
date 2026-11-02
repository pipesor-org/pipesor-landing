# Stage 4 — recovery, runtime and browser verification

Date: 2026-11-02. Branch: `feature/landing-recovery`, based on merged `a0293cffb5a16eb2fa1b7683e3b2b048e449c4a9`. The quality role owns this report and `stage-4-evidence/`; it makes no application changes, commits, deployments or account connections.

## Supported matrix and availability

The owner approved Chromium, Firefox, Safari/WebKit and one physical phone as the intended matrix, with unavailable cases recorded explicitly. Remote Chrome DevTools MCP is callable. Its user-agent reports Windows Chrome `156.0.0.0`; no independent browser executable build version was queried. `Safari/537.36` in that Chromium user-agent is not Safari test evidence.

A read-only PATH inventory found no `chromium`, `chromium-browser`, `google-chrome`, `firefox`, `webkit2gtk-driver` or `playwright` executable. The conventional `~/.cache/ms-playwright` directory is absent; the bounded `/opt`/`/usr/bin` filename scan found no browser executable, with an unreadable `/opt/containerd` directory excluded. No browser was installed. No physical-device interface or owner-provided device session is available. Firefox, Safari/WebKit and physical-phone coverage remain unavailable, not passed. Viewport emulation in remote Chromium cannot establish those results.

See [browser-inventory.json](stage-4-evidence/browser-inventory.json).

## Public baseline

An anonymous GET to the approved public origin at `/stage4-unknown` returned HTTP 404, a zero-byte body and no content type. Remote Chrome navigated to its internal `chrome-error://chromewebdata/` page. This confirms missing recovery content at the sampled route; no exploit or broader routing failure is claimed. See [baseline-http.json](stage-4-evidence/baseline-http.json).

## Final artifact verification

The coordinator completed the approved-origin build, diagnostics, 25 tests plus commit-message checks, and Wrangler deployment dry run for the integrated source. QA did not independently rerun that suite or modify the source. The artifact includes static `404.html` and `es/404.html`, the scoped licensing notices and the two declared response headers.

The preceding quality pass tested the parent-managed Wrangler local runtime at `http://localhost:8788/`. Its saved [HTTP results](stage-4-evidence/final-http.json), [recovery probes](stage-4-evidence/final-recovery-probes.json), [footer probes](stage-4-evidence/final-footer-probes.json) and 24 screenshots survived the usage interruption. This resumed pass parsed both 12-case probe files, confirmed no document overflow in their results, and opened representative Spanish phone recovery/footer screenshots. The prior agent's handoff reported visual inspection of the full captured matrix; the resumed agent did not recreate or independently inspect every screenshot.

- Recovery matrix: EN/ES × 390/768/1440 CSS pixels × light/dark, with matching language, localized heading and home/product links, `noindex`, Sora and no document overflow. The Spanish phone heading fits in two lines. The console entries on these missing-route navigations are the expected document HTTP 404 resource diagnostic; they are not an unhandled JavaScript exception or a blocked CSS/script resource.
- Footer matrix: the same 12 locale/width/theme combinations, with the approved 2026 copyright holders, equivalent MIT source-code notices, explicit excluded assets and third-party-license retention. The saved probes show no document overflow or offscreen footer elements. The phone screenshot shows the longer notice wrapping within the existing layout. Saved footer console checks reported no warnings/errors.
- HTTP routing: root and nested missing paths returned real 404 responses with nonempty localized bodies, `noindex`, `nosniff` and `strict-origin-when-cross-origin`. Known locale pages, sitemap and social image returned 200 with appropriate MIME types. The Google verification entry in the earlier HTTP summary is the final response after redirects: its `.html` URL first returns the existing same-origin 307 to the extensionless URL, which returns 200 with the verification body. The coordinator confirmed the same redirect in the public baseline; no new GSC routing regression is claimed. Do not read that entry as a direct 200 without a redirect.

## Resumed runtime checks

After the interruption, the coordinator restarted the same built artifact under Wrangler locally at `http://localhost:8789/`. No source or artifact changes were made by QA. Chrome DevTools MCP exercised the following focused cases; returned observations are saved in [resumed-runtime.json](stage-4-evidence/resumed-runtime.json):

- Theme: clicking the existing dark radio updated the theme and saved `pipesor.theme`; the preference persisted from EN to ES navigation. Selecting light updated the effective and stored preference again.
- Viewer: a programmatically focused hero opener was activated with native keyboard Enter in both locales. The dialog opened, zoom changed to actual-size mode with its localized fit label, and native Escape closed it and returned focus to the opener. This exercises the shipped script under the declared headers; it is not a complete focus-trap or screen-reader audit.
- Island/form: scrolling to the form hydrated the existing React island in both locales. EN used the browser fill tool and native Tab; ES used a synthetic input value with input/blur events. Both returned equivalent valid-format feedback while registration stayed disabled, with `method="dialog"`, no submission action or email name. No submission event was observed in the EN guarded sample; no fetch/XHR/beacon Resource Timing entry was observed in either form sample. The address was `qa@example.invalid`, not personal data. These observations do not assert that all possible network activity was intercepted.
- Recovery keyboard: native Enter on the focused English home link reached `/`; native Enter on the focused Spanish product link reached `/es/#product`. Both recovery links had a visible solid focus outline. The Spanish recovery page still declared `lang="es"` and `noindex`.
- Landing console checks in EN and ES reported no warnings or errors during the resumed interaction samples. No CSP was added or tested; these checks do not claim CSP enforcement. Firefox/WebKit and physical-phone results remain unavailable.

The existing component-scoped Taste source lint was reported as 0 FAIL / 0 WARN by engineering. The rendered Taste inspector could not run because a local Chrome executable is absent; remote Chrome DevTools provided the targeted browser evidence. No full rendered Taste gate or whole-page design score is claimed.

## Limits

No public release verification of these Stage 4 changes, full accessibility audit, screen reader, non-Chromium engine, physical device or representative-user session has been performed. QA started no server and left the parent-managed Wrangler session running for the coordinator to stop. The resumed isolated browser task tab was closed and emulation reset after verification. These are local Wrangler/Chromium results, not proof of the eventual edge release or the entire approved browser matrix.
