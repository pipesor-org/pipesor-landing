# Owner-supplied PageSpeed Insights reports

The owner supplied saved [desktop](https://pagespeed.web.dev/analysis/https-pipesor-landing-jhon-galvezchambi-workers-dev/u3rriv90e9?hl=es&form_factor=desktop) and [mobile](https://pagespeed.web.dev/analysis/https-pipesor-landing-jhon-galvezchambi-workers-dev/u3rriv90e9?hl=es&form_factor=mobile) reports for `https://pipesor-landing.jhon-galvezchambi.workers.dev/`. They were read in Chrome DevTools MCP without clicking Analyze, requesting indexing or invoking a new PageSpeed API analysis. Report timestamp displayed: 2 November 2026, 11:07 GMT-5. Only the English root URL was measured; no Spanish route result is inferred.

## Saved results

| Metric | Desktop | Mobile |
| --- | --- | --- |
| Real-user experience section | No data | No data |
| Lighthouse performance | 100 | 100 |
| Lighthouse accessibility | 100 | 100 |
| Lighthouse best practices | 100 | 100 |
| Lighthouse SEO | 100 | 100 |
| First Contentful Paint | 0.2 s | 0.9 s |
| Largest Contentful Paint | 0.3 s | 1.4 s |
| Total Blocking Time | 0 ms | 0 ms |
| Cumulative Layout Shift | 0 | 0 |
| Speed Index | 0.5 s | 2.2 s |

Scores and metrics are rounded as displayed in these two saved single-run laboratory reports. Desktop is emulated desktop with custom throttling; mobile is an emulated Moto G Power under slow 4G. Both report Lighthouse 13.6.0 and HeadlessChromium 153.0.8010.36. These lab scores are not p75 real-user Core Web Vitals; TBT is not INP. The reports show no field data in their displayed real-user section. They do not establish why, identify a CrUX observation window or prove definitively that neither a URL nor an origin CrUX record exists.

## Mobile findings and interpretation

The saved mobile report lists non-scoring opportunities: estimated image-delivery savings of 74 KiB and render-blocking CSS savings of 130 ms. These estimates are not measured savings or proven LCP reductions. The image list includes the 1900×920 hero served for the intentionally enlarged 980px screenshot crop; any smaller candidate must be compared visually, including high-DPR legibility, and benchmarked on a repeatable equivalent profile before changing it. The CSS request is approximately 5.1 KiB transferred. The mobile LCP subparts shown are approximately 0ms TTFB, 90ms resource load delay, 400ms resource loading and 750ms element render delay; these are a single run's displayed rounded figures, not an isolated cause or guarantee. The earlier reduced-motion follow-up did not establish a repeatable animation fix, so do not remove it from this report alone.

The 100 accessibility and SEO scores cover Lighthouse's automated checks. They do not replace manual WCAG/assistive-technology testing, establish GSC indexing or guarantee rankings. The report also lists manual/best-practice items for CSP, HSTS, isolation and framing; a score of 100 is not a reason to mark those policies as tested or deployed. No code, delivery policy, tracking, API quota setting or Search Console state changed during this review.

## Current decision

Keep the existing source for now. LAND-009 remains deferred as agreed, with field LCP/INP/CLS unknown; the owner-provided PSI results document the current absence of data in the displayed reports, not a proven cause. PageSpeed API quota investigation remains separate and is not reopened merely because these saved reports exist. LAND-014 remains pending actual GSC indexing/canonical evidence. Revisit field performance when usable public data or an authorized report with real-user metrics becomes available, including after the future custom-domain transition.
