# Stage 2 — Search and field evidence

Read-only research for LAND-009, LAND-014, LAND-031, and decision context for LAND-012/LAND-032. Captured 2026-11-02 UTC after the public metadata correction. This report records current observations and access limits; it does not alter the backlog, approve product decisions, claim indexing or rankings, or establish performance pass/fail. Raw response details are summarized in [the evidence record](stage-2-search/evidence.md).

## Findings by backlog item

### LAND-009 — Field-performance availability

**Status: not established; retain unknown.** The anonymous PageSpeed Insights API request to the current EN origin returned HTTP 429 because the service reported its daily query quota exhausted/zero. It yielded no Core Web Vitals. No CrUX API key was supplied, and no local environment values were inspected. The CrUX API requires a Google Cloud API key; this access limit does not tell us whether the site has a CrUX record. There is no connected RUM/analytics path, and none was enabled. Therefore current origin/page records, CrUX observation window, mobile/desktop p75 LCP/INP/CLS all remain unknown. Do not treat CLI request timing or HTTP cache responses as field performance. Retry with an authorized public-data quota or owner-provided report; if no CrUX record exists, record that as insufficient data rather than a CWV failure.

### LAND-014 — Google indexing and canonical selection

**Status: public markup checked; Google state unknown.** On 2026-11-02, both public localized routes responded HTTPS 200. `/` declares itself canonical at the approved origin; `/es/` declares its own localized URL canonical. Both advertise reciprocal `hreflang` entries for EN, ES, and `x-default`. Google-selected canonicals, crawl/index status, and live URL Inspection blockers remain unverified because there is no connected Search Console or URL Inspection access. A connected-tool inventory found no direct Search Console capability. Plugin discovery surfaced Windsor.ai as an unconnected third-party reporting option; this is not property access and does not supply URL Inspection evidence. No account was connected. A `site:` query would be a limited spot-check, not exhaustive proof, and is not substituted here.

Google's URL Inspection guidance says the indexed-version report is needed to learn the Google-selected canonical; the live test cannot predict that selection. Keep this item open until read-only inspection is available for **both** URLs. Reinspect after any future separately approved publication if these URLs change.

### LAND-031 — Audience and search-intent evidence

The approved brief names DevOps, SRE, and platform engineers operating GitHub Actions CI/CD, plus engineering leads accountable for delivery stability. It identifies jobs around finding current failures, knowing where to investigate, avoiding inconclusive evidence, retaining resolution context, and spotting recurring failures. The English and Spanish landing copy both focus on GitHub Actions failures, evidence-backed probable diagnosis, and human validation, while explicitly identifying the product as an early prototype using demo data.

Official GitHub documentation corroborates that workflow owners need to inspect failed-step logs and troubleshoot workflow triggers/runs, with relevant documentation available in English and Spanish. This is **problem-domain evidence only**: it supports testing hypotheses such as “GitHub Actions workflow failure troubleshooting/logs” and “solucionar problemas de flujos de trabajo de GitHub Actions/registros de ejecución.” It does not show that people search these exact phrases, establish query demand/volume, validate this audience's purchasing intent, or demonstrate current SERP/ranking performance. No Search Console query data, keyword-volume dataset, user interviews, or SERP study was available. Keep segment/locale priority and query selection as owner decisions; do not rewrite copy or make demand claims from these sources alone.

### LAND-012 — Sitemap decision context

`/sitemap.xml` and `/sitemap-index.xml` currently return 404. The site has two localized content routes, both reachable from the landing's navigation and each responding 200; `/robots.txt` currently advertises no sitemap. Google's guidance says a sitemap is often useful and can help with discovery, particularly for new sites with few external links, but says small sites (about 500 pages or fewer) with all important pages comprehensively linked may not need one. A sitemap does not guarantee crawling or indexing.

**Recommendation: implement a minimal EN/ES sitemap, subject to the owner's product decision.** It is not required for a two-page, fully linked site, but it is a small, maintainable URL inventory that can support later Search Console submission and makes both localized canonical URLs explicit. Google says sitemaps can help discovery (especially for new sites with few external links) but do not guarantee crawling or indexing. Current robots.txt is a Cloudflare-generated content-signals document with no sitemap directive, so adding a sitemap alone would not advertise its location there; publication/submission through Search Console remains separate and currently unavailable. If approved, include only these two public canonical HTTPS 200 URLs. Do not treat implementation as a fix for the unknown Google indexing state.

### LAND-032 — Structured-data decision context

No JSON-LD was found in the reviewed current page metadata. Google's guidance makes structured data an eligibility mechanism for specific supported Search appearances, not a ranking guarantee; markup must match visible content and satisfy feature-specific policies. Google documents Organization markup as a way to help understand/disambiguate an organization's details, but current repository documentation says the legal owner/copyright holder remains pending. No supported rich-result feature requirement has been established, and the page does not provide verified organization identity fields, ratings, pricing, or testimonials for us to mark up.

**Recommendation for owner decision: defer JSON-LD until a concrete supported Search feature or verified entity fact creates a purpose.** The current evidence does not justify adding speculative schema. If reconsidered, choose only the precise type/properties that match the public page and confirmed facts; never add illustrative prototype values as product facts or promise a rich result. No owner decision is made here.

## Decision and follow-up summary

- Keep LAND-009 and LAND-014 open as evidence gaps. The current status is unknown, not pass or fail.
- For LAND-031, treat the audience from the approved brief as provisional positioning and the official docs as problem-taxonomy evidence only. Owner confirmation and actual query/user evidence remain outstanding.
- Record the sitemap recommendation (implement a minimal two-URL sitemap) and JSON-LD recommendation (defer) for owner decision; do not change `BACKLOG_LANDING.csv` or implement either item from this research.
- No trackers were introduced. No Cloudflare, Search Console, Google Cloud, or other account settings were changed.
