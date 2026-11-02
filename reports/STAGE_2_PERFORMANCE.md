# Stage 2 — laboratory performance and delivery evidence

Measured 2026-11-02 against the merged production build at `https://pipesor-landing.jhon-galvezchambi.workers.dev/`, based on `791c98db9b534ea91a6259c1190e51737c9f051d`. Current public EN/ES canonicals, language alternates and social-image URLs were confirmed on the approved HTTPS origin before measurement. No production configuration or measurement service was changed.

## Method and limits

Chrome 156.0.8078.74 on Windows, accessed through Chrome DevTools MCP, supplied the load traces. A retained direct CDP connection applied viewport, CPU/network emulation and disabled the browser cache. Effective viewport/DPR was checked from the page; this was necessary because the MCP emulation status initially differed from the page's actual metrics. Earlier `desktop-*.txt` files are rejected as mislabeled mobile runs. Earlier `mobile-*.txt` files and the agent's initial 2082ms observation are not used in the comparison below. Only `verified-*` summaries are counted.

| Profile | Viewport / DPR | CPU | Network | Cache |
| --- | --- | --- | --- | --- |
| Mobile | 390×844 / 3; mobile/touch emulation | Requested 4× slowdown | Requested 150ms latency, 200,000 bytes/s down, 93,750 bytes/s up | Disabled for all three runs |
| Desktop | 1440×900 / 1 | Requested 1× | No artificial network throttle requested | Disabled for all three runs |

These are execution-environment observations, not calibrated phone/desktop hardware benchmarks. Viewport/DPR was independently checked; CPU/network settings are requested protocol settings, not independently measured hardware/network guarantees. Similar timings across profiles warrant caution about environment overhead. Raw MCP trace summaries are retained below. Full event-trace export was unavailable because the MCP file export failed its workspace-path authorization; no full trace-file archive is claimed.

## Cold-load results

| Profile | Run 1 LCP | Run 2 LCP | Run 3 LCP | Median LCP | Reported CLS |
| --- | --- | --- | --- | --- | --- |
| Mobile | 3167ms | 3124ms | 3136ms | **3136ms** | 0.00 in all three |
| Desktop | 3234ms | 3280ms | 3212ms | **3234ms** | 0.00 in all three, rounded by the trace summary |

Raw evidence: [mobile 1](stage-2-performance/verified-mobile-1.txt), [2](stage-2-performance/verified-mobile-2.txt), [3](stage-2-performance/verified-mobile-3.txt); [desktop 1](stage-2-performance/verified-desktop-1.txt), [2](stage-2-performance/verified-desktop-2.txt), [3](stage-2-performance/verified-desktop-3.txt).

The 2.5s LCP target was not met in this environment. Reported CLS is below 0.1; the rounded summary is not proof of literally zero layout movement. No field CWV pass/fail is inferred. The trace tool supplied no field metrics; separate public-data access limits remain in [the search report](STAGE_2_SEARCH.md).

The LCP element was the hero product image, already eager and high priority. Mobile run 3 divides LCP into TTFB 72ms, discovery/load delay 735ms, resource load 1309ms, and render delay 1020ms. Desktop run 3 reports 83ms, 736ms, 1122ms and 1271ms respectively. These identify the critical path; they do not prove which proposed code change would remove each delay. Image-delivery insight estimates did not establish LCP savings.

**Performance follow-up remains open:** isolate the image discovery/decode/render path under a calibrated repeatable environment, then test a single candidate change against the same baseline. Preserve the approved crop and compare visual fidelity before changing image variants. A font-preload experiment or hero-animation experiment must show an actual improvement before implementation. No unproven resource reduction, React replacement, crop degradation or claimed speedup was shipped during this pass.

## Actual resource phases

[Mobile resource records](stage-2-performance/resource-phases.txt) and [desktop records](stage-2-performance/desktop-resources.txt) contain resource URLs, selected image variants, loading states and per-resource Resource Timing values. Totals below exclude the HTML navigation itself and count external resources observed at that point. `transferSize` is browser-reported transfer accounting, including its header-size allowance; it is not packet-level wire-byte measurement. Decoded size means HTTP-decoded payload, not decoded image bitmap memory.

| Profile / phase | Requests | Transfer bytes | Decoded payload bytes |
| --- | --- | --- | --- |
| Mobile initial load | 8 | 126445 | 151208 |
| Mobile after scrolling to the form | 14 | 293530 | 475480 |
| Mobile after opening hero viewer | 15 | 389922 | 571572 |
| Desktop initial load | 7 | 92513 | 116385 |
| Desktop after scrolling | 14 | 221731 | 403624 |

Mobile initial navigation separately reported 9683 transferred bytes and 33194 decoded HTML bytes. The initial load contained no external JS request. After scroll-triggered form hydration, three JS resources totalled 77783 transferred / 235870 decoded bytes. The viewer added the original screenshot request; those bytes are separate from its responsive thumbnail. This establishes the React preview's deferred cost, not a demonstrated reason to replace it.

Mobile initial CSS was 5641 transferred / 19742 decoded bytes. Three Sora font preloads totalled 45680 transferred / 44780 decoded bytes; existing body, button and heading weights use these faces. Source and measured requests establish actual loading, but this pass does not establish that removing any preload would improve LCP. Image resources totalled 75124 transferred bytes initially and 260818 after viewer opening. The larger mobile thumbnail choice is consistent with DPR 3 and the intentional enlarged crop. Changing it solely to match the visible viewport width risks degrading screenshot legibility.

## Interactions

[Native keyboard event observations](stage-2-performance/interactions.txt), under the mobile profile, recorded event durations of 160ms for the viewer-opening interaction and up to 224ms for closing. The viewer closed and returned focus to its opener. These are rounded, short-session Event Timing observations with a 16ms threshold, **not real-user p75 INP**, and are not substituted by TBT or a Lighthouse performance score. Broader interaction/accessibility acceptance remains separate.

## LAND-027 — caching decision

The current fingerprinted assets revalidate using `public, max-age=0, must-revalidate`. A normal repeat reload with browser cache enabled produced [repeat-visit records](stage-2-performance/repeat-visit.txt). Seven URLs were common to the cold and repeat samples: browser-reported transfer fell from 124998 to 2100 bytes, with no new response-body bytes reported in the repeat sample. The repeat page rendered successfully. Request durations overlap, so summing them is not wall-clock latency or a savings estimate.

**Retain the current cache policy for this release.** Cached bodies are already reused. Immutable fingerprinted-asset caching may avoid additional revalidation, but this pass does not establish a user-visible benefit sufficient to add a delivery-policy change. No `_headers` file was added, HTML refreshability was preserved, and no speedup/ROI claim is made. If revisit cost becomes a demonstrated issue, test a narrowly scoped immutable policy on fingerprinted output only, with asset-version and HTML-refresh checks after an authorized publication.
