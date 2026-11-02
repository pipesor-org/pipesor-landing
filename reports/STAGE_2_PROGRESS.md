# Stage 2 — implementation and remaining evidence

Date: 2026-11-02. Branch: `fix/social-metadata`, based on merged main `791c98db9b534ea91a6259c1190e51737c9f051d`. No commits, pushes, deployments, remote policy changes, trackers or form activation occurred. Reports remain local-only and are not referenced from publishable source or documentation.

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
| LAND-008 | Three mobile and three desktop cold-load observations, resource costs and short interaction samples recorded | LCP target missed; calibrated critical-path profiling and an evidence-backed improvement remain open. Full trace export unavailable. |
| LAND-009 | Field-data access evaluated | PSI quota error; no authorized CrUX API key/data. Origin availability, window and p75 metrics remain unknown. |
| LAND-012 | Minimal sitemap implemented and verified locally | Publish only after approval; submit through Search Console when property access exists. |
| LAND-013 | Localized social metadata and canonical-aligned `og:url` implemented | Real share-debugger/crawler validation unavailable; public verification after release. |
| LAND-014 | Correct public EN/ES declarations confirmed after the merged release | Search Console/URL Inspection unavailable; Google-selected canonicals and index state unknown. |
| LAND-027 | Current revalidation policy retained after repeat-visit check | No evidence-backed immutable-header change or savings claim. |
| LAND-031 | Existing audience/problem vocabulary mapped to official EN/ES GitHub guidance | No query-demand, keyword-volume, SERP or representative-user evidence; audience/locale priorities remain provisional. |
| LAND-032 | JSON-LD evaluated; defer recommended | Reconsider only for a supported use with verified facts; no ranking/rich-result promise. |

See [performance evidence](STAGE_2_PERFORMANCE.md) and [search evidence](STAGE_2_SEARCH.md). These results do not establish full Stage 2 completion, search readiness, field CWV compliance or conversion effectiveness.

## Integration validation

- `bun run check`: exit 0, no errors, warnings or hints.
- `bun run test` with standalone Lefthook: exit 0, 25 tests plus commit-message cases.
- Approved-origin `bun run build`: exit 0; both static locale pages and `dist/sitemap.xml` generated.
- `bun run wrangler deploy --dry-run`: exit 0, 64 static files, no bindings and no deployment.
- Chrome DevTools MCP verified both built-preview locale heads: correct localized title/description/alt, `og:url` exactly equal to self-canonical, approved-origin sitemap link, and sitemap response 200 with XML MIME (`text/xml` from Astro's static preview). DOMParser reported no XML error and exactly the two expected URLs. [EN](stage-2-search/local-en-metadata.txt), [ES](stage-2-search/local-es-metadata.txt).
- Built-preview keyboard viewer open/Escape close worked, with no console errors observed. No visible layout/style changes were introduced; the previous full screenshot matrix was not repeated for metadata-only changes.
- Anonymous request with a Twitterbot user-agent reached the current public social image: 200, `image/png`, 48198 bytes; local dimensions remain 1200×630. This is a spoofed-client HTTP check, not an actual social crawler/share-debugger result.

## Next decisions

Review the four publishable files and the local evidence separately. Search Console read-only access is needed to resolve indexing/canonical questions; authorized CrUX/PSI data or an owner-provided report is needed for field results. Keep LCP improvement open rather than promoting the laboratory baseline to a pass. Publication and any later commits/push/PR still require authorization. LAND-007 remains deferred, and registration/tracking remain disabled.
