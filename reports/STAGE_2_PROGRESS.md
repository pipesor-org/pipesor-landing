# Stage 2 — implementation and remaining evidence

Initial measurement date: 2026-11-02, based on merged main `791c98db9b534ea91a6259c1190e51737c9f051d`. The initial preparation below made no commits, pushes or deployments. The subsequently authorized source changes were committed on `feature/seo-discovery` and merged by the owner in PR #6 as `bef79b026740c0d35c6ed47df50c89dec4c5adf2`. GitHub Quality and the production Workers build passed. Reports are maintained separately on `feature/landing-reports`; the owner authorized pushing this temporary reports branch after the social and Search Console setup checks. Reports are excluded from source PRs and `main`.

## Post-release follow-up

Fresh quality and repository agents resumed the two tasks that previously hit usage limits. Their findings are recorded in [performance follow-up](STAGE_2_PERFORMANCE_FOLLOWUP.md) and [search follow-up](STAGE_2_SEARCH_FOLLOWUP.md). Initially, neither Search Console access nor a field-performance report was available. The owner subsequently completed Search Console verification; reports are processing, and no indexed inspection results or field report have been supplied. Current public EN/ES declarations, social image and the two-URL sitemap were verified after release. No additional source or remote configuration changes were made during this follow-up.

Cloudflare's read-only deployment list identified deployment `3f659fe0-5c1a-412b-9fe9-9e02be39e39a`, created `2026-11-02T07:16:22.599975Z`, serving version `02bc3e04-52be-406f-80d9-b5f13c4c324c` at 100%. The successful Workers build check is attached to merged commit `bef79b0`. These release observations do not establish Google indexing or field CWV results.

## Coordination

The main agent assigned separate engineering, quality and repository agents. Engineering completed localized social metadata and the minimal sitemap. Repository research was saved in [the search report](STAGE_2_SEARCH.md) before its usage limit. Quality began the browser baseline but also hit a usage limit; the main agent completed the replacement measurements and integration after taking over the browser session. Browser work was serialized. The main agent reviewed changes and ran the integrated suite.

## Changes prepared for review

- `src/components/Landing.astro` shares its canonical URL with `og:url`, reads localized social-image alt text and links to the sitemap.
- `src/i18n/content.ts` keeps the English social-image description and supplies a literal equivalent Spanish description. The original English social-card bitmap is unchanged; this is not a localized image redesign.
- `src/pages/sitemap.xml.ts` prerenders exactly the public canonical `/` and `/es/` URLs from configured `site`, escapes XML text and includes the standard sitemap namespace. It adds no dependency, invented dates, priorities, private/preview URLs, SSR or adapter.
- `tests/sitemap.test.ts` checks route inventory, namespace, MIME declaration, configured-origin handling and escaping.

The owner asked to evaluate both optional additions and continue. The sitemap was prepared because it provides a small canonical URL inventory for later submission. JSON-LD was evaluated and deferred: no concrete supported search appearance or settled entity facts justify it yet. The current Cloudflare-managed robots response was not overwritten. An HTML sitemap link is a discovery aid, not proof of Google discovery or a substitute for Search Console submission.

## Backlog status

| Item | Result | Remaining limit / dependency |
| --- | --- | --- |
| LAND-008 | Original baseline and new three-run public mobile/desktop follow-up, resource costs and short interaction samples recorded | Fresh median LCP 2032ms mobile / 258ms desktop; earlier ~3.2s result was not reproduced. These are environment-specific lab observations, not a measured code improvement or field pass. See follow-up for profile differences and limits. |
| LAND-009 | Field-data access evaluated | PSI quota error; no authorized CrUX API key/data. Origin availability, window and p75 metrics remain unknown. |
| LAND-012 | Minimal sitemap merged and verified publicly: XML 200, exactly two canonical locale URLs | Owner now has a verified GSC property; sitemap submission has not been confirmed. |
| LAND-013 | Complete: public metadata checks plus owner-confirmed EN/ES social previews | English X/WhatsApp screenshots retained; Spanish previews confirmed by owner without screenshots. Shared bitmap remains English; localized page metadata is equivalent. WhatsApp compact layout accepted, no code change requested. |
| LAND-014 | GSC ownership verified by owner after PR #7; public declarations verified | GSC is processing initial reports; both indexed URL Inspection results and Google-selected canonicals remain pending. |
| LAND-027 | Current revalidation policy retained after repeat-visit check | No evidence-backed immutable-header change or savings claim. |
| LAND-031 | Four-query EN/ES public result sample mapped to existing content; official troubleshooting and vendor-tool intents recorded | No query-demand, keyword-volume or representative-user evidence; audience/locale priorities remain provisional. |
| LAND-032 | JSON-LD evaluated; defer recommended | Reconsider only for a supported use with verified facts; no ranking/rich-result promise. |

See the original [performance evidence](STAGE_2_PERFORMANCE.md) and [search evidence](STAGE_2_SEARCH.md), with the post-release follow-ups linked above. These results do not establish full Stage 2 completion, search readiness, field CWV compliance or conversion effectiveness.

## Integration validation

- `bun run check`: exit 0, no errors, warnings or hints.
- `bun run test` with standalone Lefthook: exit 0, 25 tests plus commit-message cases.
- Approved-origin `bun run build`: exit 0; both static locale pages and `dist/sitemap.xml` generated.
- `bun run wrangler deploy --dry-run`: exit 0, 64 static files, no bindings and no deployment.
- Chrome DevTools MCP verified both built-preview locale heads: correct localized title/description/alt, `og:url` exactly equal to self-canonical, approved-origin sitemap link, and sitemap response 200 with XML MIME (`text/xml` from Astro's static preview). DOMParser reported no XML error and exactly the two expected URLs. [EN](stage-2-search/local-en-metadata.txt), [ES](stage-2-search/local-es-metadata.txt).
- Built-preview keyboard viewer open/Escape close worked, with no console errors observed. No visible layout/style changes were introduced; the previous full screenshot matrix was not repeated for metadata-only changes.
- Anonymous request with a Twitterbot user-agent reached the current public social image: 200, `image/png`, 48198 bytes; local dimensions remain 1200×630. This is a spoofed-client HTTP check, not an actual social crawler/share-debugger result.

## Owner validation and current handoff

The owner supplied [X](twitter.jpeg) and [WhatsApp](whatsapp.png) screenshots of the English root URL, then confirmed that Spanish links show the corresponding Spanish information. These are actual platform-preview observations, distinct from the earlier spoofed-user-agent HTTP check. The owner accepted WhatsApp’s compact presentation; no large-preview workaround is required. The shared social-card bitmap remains English by the existing implementation scope.

PR #7 merged as `2818691804840805d214218fd88ae4b60fac3b4b`; GitHub Quality and the production Workers build passed for that merge. The owner reports successful Search Console setup and initial data processing. This proves neither indexing nor Google-selected canonicals. Submit `sitemap.xml` if not already submitted, then record indexed URL Inspection fields for `/` and `/es/` when available; do not infer submission from ownership verification.

**Three of eight Stage 2 items remain pending or partial: LAND-009, LAND-014 and LAND-031.** No additional source fix is justified by current evidence. LAND-008 has current lab measurements with explicit limits; LAND-012 is implemented and published; LAND-013 is validated; LAND-027 retains caching after evaluation; LAND-032 records a justified JSON-LD deferral. Field data, indexing outcomes and audience fit remain unknown.

## Next decisions

The four source files were merged and published separately from the local evidence. Search Console inspection results are needed to resolve indexing/canonical questions; authorized CrUX/PSI data or an owner-provided report is needed for field results. No source performance fix is justified by the fresh lab results; retain the old observations and profile differences rather than claiming a code speedup or field pass. Future commits/pushes/publication require authorization. LAND-007 remains deferred, and registration/tracking remain disabled.
