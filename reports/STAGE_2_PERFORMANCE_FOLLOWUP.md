# Stage 2 — LCP follow-up

Measured 2026-11-02 after merged PR #6, checkout `bef79b026740c0d35c6ed47df50c89dec4c5adf2`. This follow-up resolves the previously suspicious approximately 3.2-second laboratory results as **not reproducible in the current session**. It does not establish why the earlier environment behaved differently, a production speedup, or field Core Web Vitals compliance. No application file, Cloudflare policy, dependency, tracker or form behavior was changed.

## Reproduction method

Chrome DevTools MCP was used against both the production-built local preview (`http://localhost:4322/`) and the current public origin (`https://pipesor-landing.jhon-galvezchambi.workers.dev/`). The approved-origin `bun run build` passed immediately before starting a retained foreground Astro preview. The browser user agent identifies Windows Chrome 156.0.0.0; the full executable version was not independently queried. Public and local resources use the same fingerprinted CSS and hero-image URLs.

Unlike the earlier pass, this session's MCP directly supports viewport emulation and `ignoreCache: true` during trace reloads. No retained secondary CDP session or conflicting profile controller was used. Each measured public navigation used `performance_start_trace` with `reload`, `ignoreCache` and `autoStop` all true. Viewport and DPR were independently read from each profile; requested CPU/network settings were recorded by the trace tool, not independently calibrated against physical hardware.

| Profile | Actual viewport / DPR | Requested CPU | Requested network | Browser cache |
| --- | --- | --- | --- | --- |
| Desktop | 1440×900 / approximately 1 | 1× | No throttle | Bypassed on reload |
| Mobile | 390×844 / 3, mobile/touch | 4× slowdown | MCP Slow 4G; navigator reported 1.6 Mbps / 150 ms | Bypassed on reload |

These are laboratory profiles on the available host, not representative-device certification. OS, TCP/TLS connection and edge caches were not cleared; this is a browser HTTP-cache-bypass test, not a completely fresh network connection. Full raw event traces were not exported during this follow-up. Complete returned MCP trace summaries are retained under [stage-2-performance-followup/](stage-2-performance-followup/); these are summaries, not a full trace archive.

## Current public baseline

| Profile | Run 1 LCP | Run 2 LCP | Run 3 LCP | Median LCP | Reported CLS |
| --- | --- | --- | --- | --- | --- |
| Desktop | 251 ms | 269 ms | 258 ms | **258 ms** | 0.00 in all runs |
| Mobile | 2032 ms | 2024 ms | 2063 ms | **2032 ms** | 0.00 in all runs |

Evidence: `public-desktop-1/2/3.json`, `public-mobile-1/2/3.json`, and `public-desktop-profile.json` / `public-mobile-profile.json` in the linked evidence directory. Mobile run 3 contains an initial `NO_NAVIGATION` set; its LCP comes from `NAVIGATION_1`, the real reload. No empty insight set is counted as a load result.

The current public sample meets the proposed laboratory LCP ≤2.5-second and CLS ≤0.1 targets under these requested profiles. CLS is rounded by the tool; it is not proof of literally no movement. Field availability remains a separate LAND-009 question. A local unthrottled desktop diagnostic trace observed 79 ms LCP (5 ms TTFB, 7 ms load delay, 9 ms resource load, 58 ms render delay); it was a reachability/isolation observation rather than a three-run acceptance baseline.

Public desktop run 3 splits LCP into 68 ms TTFB, 8 ms discovery/load delay, 91 ms resource load and 90 ms render delay. Public mobile run 1 splits it into 68 ms TTFB, 572 ms discovery/load delay, 1314 ms resource load and 78 ms render delay. The mobile image is the same 1900w WebP variant (64,884 browser-reported transfer bytes) used for the established 980px crop at DPR 3; desktop selected the 1200w variant (32,400 transferred bytes). The hero remains eager/high priority. No crop or image-fidelity sacrifice was tested or recommended.

## Animation diagnostic

The existing hero-stage `enter` animation lasts 500 ms with a 120 ms delay; its initial opacity is 0.7, so the image remains paintable. To test whether motion caused the previous approximately one-second render delay, the public mobile profile was repeated three times with only `prefers-reduced-motion: reduce` added through browser emulation. This uses the existing accessibility fallback and changes no source file.

Reduced-motion LCP observations were **2042 / 2001 / 2022 ms**, median **2022 ms**, versus baseline median 2032 ms. Render delays were 99 / 46 / 66 ms. This approximately 10 ms median difference is within the observed run variation and supplies no useful case for removing the approved animation. This is a diagnostic of the whole existing reduced-motion fallback, not a controlled estimate of one CSS selector's cost.

The earlier approximately 1.0–1.3-second render delay is absent in the current normal-motion baseline as well. Current desktop discovery is about 7–8 ms instead of the earlier approximately 736 ms. Consequently the old mobile/desktop similarity cannot be attributed to the source's animation, fonts or image delivery with current evidence. Earlier direct-CDP/MCP profile interaction and execution-environment behavior remain possible explanations, not proven root causes. Preserve the old results with their original caveats rather than treating the new sample as a code optimization or erasing contrary observations.

**Recommendation: retain current source and delivery policy.** There is no reproducible failing LCP target here and no demonstrated improvement worth a change. Do not remove font preloads, replace React, lower screenshot fidelity or remove motion merely to close a ticket. Reprofile if a representative device or field report exposes a repeatable failure.

## Built-preview checks and boundaries

- EN and ES metadata were checked at 390×844 / DPR 3: correct document language, equivalent social-image alt, self-canonical exactly matching `og:url`, approved-origin image/sitemap links and reciprocal EN/ES/x-default alternates. Both hero images completed, viewer buttons were enabled and document width did not overflow.
- Both locales were also spot-checked at 1440×900 / DPR approximately 1, with matching canonical/Open Graph URLs and no document overflow.
- In Spanish mobile preview, keyboard Enter opened the hero viewer; Escape closed it and returned focus to its opener. No warnings or errors appeared in the preserved local console messages for the recent navigations. These checks are retained as `local-*.json` and `keyboard-*.json`.
- No application/tooling edits occurred, so diagnostics, tests and deployment dry run were not repeated. This follow-up ran the production build and focused browser measurements. No full screenshot/accessibility matrix, real-device calibration, field INP measurement, font-preload removal experiment, search-console inspection or social-platform debugger was performed.
- The local preview was stopped when measurements finished. Browser emulation was reset and tabs created for this task were closed. No production configuration or deployment occurred.
