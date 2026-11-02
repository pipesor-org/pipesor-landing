# LAND-014 — indexing and quota diagnostic

Date: 2026-11-02 UTC. Scope: the approved `workers.dev` origin's English `/` and Spanish `/es/` pages. Read-only public HTTP checks and repository/workflow inspection; no indexing request, PageSpeed Insights API request, production change, credential inspection or setting change occurred during this investigation.

## Owner update after initial investigation

The owner reports that the submitted `sitemap.xml` has been **successfully processed by Google**. This resolves the sitemap-submission/processing follow-up, based on the owner report; no direct Search Console integration was available to independently inspect it. The GSC Indexing → Pages report is still pending, and indexing of `/` and `/es/`, last crawl, and Google-selected canonicals have not been confirmed. Successful sitemap processing does not establish that either page is indexed.

After the original HTTP observations below, PR #10 added a `Sitemap:` directive to the production `robots.txt`; the resulting public response returned 200 with that directive. The original Cloudflare comments-only notice was no longer present. Cloudflare documentation describes that default notice as expressing no specific content-use preferences; no active crawl restrictions were removed in the earlier sampled response.

The owner now has PageSpeed reports for a separate later review. No further PSI calls or quota investigation were performed with this update. No indexing request or SEO setting change was made.

## Confirmed observations from the initial investigation

- The owner reports Search Console says Google does not recognize either URL, and that manual indexing requests return a daily quota-exceeded message. At that time we could not independently inspect the property or establish Google-selected canonicals, last crawl, sitemap status or exact quota identity. The owner later confirmed successful sitemap processing as recorded above.
- Both exact HTTPS pages return direct 200 `text/html`, without a Location redirect, `X-Robots-Tag`, robots meta/noindex or challenge indicator. Normal and Googlebot-user-agent samples returned the same body. A user-agent string can be spoofed and does not prove access from a verified Googlebot IP.
- Both initial HTML documents contain localized title/description, self-canonical, reciprocal `en` / `es` / `x-default` hreflang, and standard language-switcher anchors to both routes. The approved origin appears in the canonical declarations.
- `/robots.txt` returns 200 `text/plain`; the response consists of comments with no active `User-agent`, `Disallow` or `Sitemap` directive. No robots directive blocks either URL in the sampled response. The precise Cloudflare management setting/provenance has not been independently verified; do not overwrite it without reviewing its existing contents and ownership policy.
- `/sitemap.xml` returns 200 `application/xml`; its XML parses and contains exactly the two public canonical URLs. The pages include a sitemap link in their HTML, but `robots.txt` does not advertise the sitemap. Search Console submission and processing status are unknown. A sitemap is a discovery hint, not an indexing guarantee.
- The latest prior anonymous PSI retry returned HTTP 429. That is separate from the owner's Search Console request-indexing quota message. Earlier manual agent investigations, including the previous turn, made anonymous PSI requests; they may have used shared quota, but the limited evidence cannot attribute exhaustion to a particular caller, project or API key. This investigation sent no further PSI request.

## Automation and quota scope

The checked tracked source and workflows contain no PSI, CrUX, Search Console inspection, Google indexing API automation, API-key configuration or 429 retry handler. The only active GitHub Actions workflow is Quality; it runs on pull requests and pushes to main, with no scheduled trigger. Its `curl --retry 3` downloads Lefthook and is unrelated to Google APIs. Searches exclude local `reports/`, vendored skill data, lockfiles and SVG assets. The report branch is an older source snapshot, so the current main workflow and sitemap source were also inspected read-only via GitHub; the remote workflow inventory contains only Quality.

The scan does not cover other machines, external services, personal scripts, Cloudflare/account-level integrations or all branches and historical environments. No Google Cloud project/key or quota dashboard was available; key enablement/restrictions, actual quotas, usage and consumers are unknown. Do not infer no Google account automation exists or expose/share keys to investigate.

Relevant source locations at the initial investigation: `src/components/Landing.astro` (head metadata and language links), `src/pages/sitemap.xml.ts` (two-route sitemap), `astro.config.mjs` (site origin), `wrangler.jsonc` and `public/_headers` (static delivery), `.github/workflows/quality.yml` and `package.json` (quality commands). There was no authored `public/robots.txt` in the observed main tree at that time; PR #10 subsequently added it.

## Assessment and priorities

1. **Discovery, resolved for sitemap processing:** The owner reports that `https://pipesor-landing.jhon-galvezchambi.workers.dev/sitemap.xml` was submitted and successfully processed. No resubmission is needed for this follow-up. Submission is a hint, not proof of crawling. Google documents sitemap submission and the optional `Sitemap:` robots directive at https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap. The missing robots directive is an improvement opportunity, not proof of an indexing defect. Any robots change is a separate reviewed production change.
2. **Actual Google access, high:** Run GSC's live URL test for each locale and record page fetch, crawl/indexing allowed and any blocked resources, HTTP responses or visible challenge. Live test is distinct from Request indexing and cannot establish the canonical Google will select after indexing. Review Cloudflare security events for relevant verified Googlebot requests if accessible. No IP allowlist or WAF change is justified without evidence. Confirm bot identity rather than trusting its user-agent.
3. **Indexing status, medium:** Google describes an unknown URL as one it has not seen. Check property exact scheme/host, sitemap processing, indexed report and last crawl when available; allow time for discovery and recrawl. Do not repeatedly request indexing or assume quota caused non-indexing. Google says requests are quota-limited and do not guarantee indexing: https://support.google.com/webmasters/answer/9012289 and https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl.
4. **Quota ownership, medium:** In Google Cloud Console, inspect the relevant project's PageSpeed Insights API enablement, quota/usage metrics and credential restrictions without sharing the API key. Determine whether the failing calls were authenticated or anonymous and identify caller/client where telemetry permits. The GSC UI request-indexing quota, Google Cloud API quota, PSI quota and the specialized Indexing API quota must not be assumed to be the same. Google limits its Indexing API to qualifying job postings or livestream pages: https://developers.google.com/search/apis/indexing-api/v3/quickstart.
5. **Future automation only, low:** If PSI automation is later introduced, use an authorized project/key with appropriate restrictions, a bounded request rate and clear failure reporting. Honor `Retry-After` where provided and use capped exponential backoff with jitter for transient 429s; stop and surface a daily quota exhaustion rather than retrying repeatedly. There is no existing PSI handler here to patch.

## Validation checklist

- [x] Owner reports that the exact root sitemap was submitted and successfully processed in GSC. Last-read timestamp was not supplied; no independent GSC access.
- [ ] For both URLs, record live-test result, page fetch, crawl and indexing permissions, and any rendered-resource/security failures.
- [ ] Review indexed inspection again after Google processes/discovers the URLs; record date, crawl/index state, user-declared and Google-selected canonical when provided.
- [ ] Inspect relevant Google Cloud API usage and configured quotas/credentials without transmitting secrets; distinguish anonymous requests from project-key traffic.
- [ ] If Googlebot-specific errors are confirmed, correlate with verified bot identity and Cloudflare security events before proposing a narrowly scoped fix.
- [ ] Preserve robots contents and search-discovery controls if any separately approved change is proposed; validate both locale pages, sitemap and robots afterward.

Open indexing issues: actual GSC live tests, verified Googlebot/edge events where relevant, and Google's discovery/indexing decisions for each page. Sitemap processing is resolved by owner report. PageSpeed reports and any quota questions remain a separate follow-up. No root cause for non-indexing has been established.
