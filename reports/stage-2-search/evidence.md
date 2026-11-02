# Stage 2 search evidence

Read-only observations captured 2026-11-02 (UTC), against the currently approved origin. These snapshots are not an indexing report, search-volume study, or performance lab run. Request identifiers, Cloudflare diagnostic payloads, and unrelated headers are omitted.

## Public responses

| Resource | Result | Selected evidence |
| --- | --- | --- |
| `/` | HTTPS 200; 33,194 bytes; Cloudflare cache HIT | Canonical is `https://pipesor-landing.jhon-galvezchambi.workers.dev/`; `hreflang` links point to EN `/`, ES `/es/`, and `x-default` EN. English title, description, and `og:locale=en_US` are present. |
| `/es/` | HTTPS 200; 33,977 bytes; Cloudflare cache HIT | Canonical is `https://pipesor-landing.jhon-galvezchambi.workers.dev/es/`; same EN/ES/`x-default` alternate set. Spanish title, description, and `og:locale=es_ES` are present. |
| `/robots.txt` | HTTPS 200; 1,248 bytes | Cloudflare returned a content-signals comment document; it contains no `User-agent`, `Allow`, `Disallow`, or `Sitemap` directive. No sitemap URL is advertised there. |
| `/sitemap.xml` | HTTPS 404 | No sitemap at this common endpoint. |
| `/sitemap-index.xml` | HTTPS 404 | No sitemap index at this common endpoint. |

The two localized pages are publicly linked through the page's language navigation and reciprocal `hreflang` elements. HTTP reachability and self-declared canonical tags do not establish Google crawling, indexing, or Google-selected canonical status.

## Field performance access

- An anonymous PageSpeed Insights API request for the current EN origin URL on mobile returned HTTP 429, `RESOURCE_EXHAUSTED`; the response reports the service's per-day query quota as zero/exceeded. No API key or environment credential was read, supplied, or changed. The request returned no metrics.
- Search Console / URL Inspection is not callable in the connected tool catalog. Plugin discovery found a third-party Windsor.ai connector that advertises Search Console reporting, but it is not connected here and does not establish access to this property's URL Inspection report. No account was connected.
- CrUX URL/origin availability, observation window, and mobile/desktop p75 LCP/INP/CLS remain unknown. PSI quota failure is not evidence that CrUX has no record. The CrUX API requires a Google Cloud API key; none was supplied or sought from local credentials.
- No RUM, analytics, or other measurement code was enabled. Do not use the existing CLI samples as user percentiles.

## Research scope

Official GitHub documentation describes relevant workflow-owner problems in both languages: workflow-run logs can identify failed steps and support troubleshooting, while Spanish workflow troubleshooting documents trigger and run failures. This supports the product-problem vocabulary as a reasonable research hypothesis. It is not keyword-volume, demand, audience-validation, SERP, or ranking evidence.

Primary references:

- GitHub Docs, [Using workflow run logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs)
- GitHub Docs, [Solución de problemas de flujos de trabajo](https://docs.github.com/es/actions/how-tos/troubleshoot-workflows)
- Google Search Central, [What Is a Sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- Google Search Central, [General Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- Google Search Central, [Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- Google Search Console Help, [URL Inspection tool](https://support.google.com/webmasters/answer/9012289)
- Chrome for Developers, [CrUX API](https://developer.chrome.com/docs/crux/api/)
- Google for Developers, [PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started)

