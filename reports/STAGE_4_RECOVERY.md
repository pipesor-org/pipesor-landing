# Stage 4 — static recovery and scoped CSS cleanup

Date: 2026-11-02. Branch: `feature/landing-recovery`, based on merged main `a0293cffb5a16eb2fa1b7683e3b2b048e449c4a9`. The coordinator confirmed owner approval for simple bilingual recovery copy with home/product links. This report records implementation preparation for LAND-011 and LAND-028, not publication or runtime acceptance.

## Implementation

- `src/components/NotFound.astro` supplies a small shared recovery document with localized title, explanation, link labels and document language. Root links return to `/` and `/#product`; Spanish links return to `/es/` and `/es/#product`. No incoming path or query is interpolated into the page.
- `src/pages/404.astro` selects English; `src/pages/es/404.astro` selects Spanish. Both use ordinary static Astro pages. The document has one `h1`, semantic header/main/navigation, `noindex` and real links. It includes no form, collection, redirect, tracking or hydration island.
- Existing Sora fonts, global brand tokens, responsive heading sizes, focus styles and the unmodified `Brand` component are reused. The short existing theme initialization pattern honors `pipesor.theme` and OS preference before paint. No new theme control, animation, illustration or design direction is introduced. The existing direction remains **Dressed as something else**, seed **1822661545**; this functional recovery surface uses the skill's component exception rather than a new page-wide draw.
- `wrangler.jsonc` adds only `assets.not_found_handling: "404-page"`, retaining static assets and the existing compatibility date. No Worker entry point, assets binding, adapter or SSR was added.
- A caller search across source/tests found `secondary-button` only in its two definitions in `src/styles/global.css`. Those two rules were removed; other button states were preserved. This is a tiny maintenance cleanup, not a claimed performance improvement.

## Static output decision

Context7 was available and returned official Astro documentation for [`build.format`](https://docs.astro.build/en/reference/configuration-reference/#buildformat). With `preserve`, index source pages remain `index.html` in their directories and non-index source pages produce flat HTML files. The installed Astro implementation confirms only root `/404` is a special status-code path under the default directory format; it does not make `/es/404` special. Consequently the default format would not produce the nested `es/404.html` required for localized fallback.

The coordinator added `build: { format: 'preserve' }` in `astro.config.mjs` under separate ownership. This should produce `dist/404.html` and `dist/es/404.html`, while retaining `dist/index.html`, `dist/es/index.html` and the existing endpoint output. No manual file-copy hook or route-wide redirect was introduced. Final output is to be verified by the coordinator's build.

Cloudflare documents that [`not_found_handling: "404-page"`](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/#custom-404-pages) serves the nearest `404.html` with a genuine 404 response. This allows missing `/es/…` paths to use the Spanish document without request-time application code. It must be tested using Workers asset routing; an Astro preview alone cannot establish the deployed platform behavior.

## Checks completed by engineering

- Repository guidance, current brief and design-taste skill read; upstream skill files unchanged.
- Caller search before deletion: no live `secondary-button` caller found.
- `git diff --check`: passed for the implementation at handoff.
- Taste source lint for `NotFound.astro`: **0 FAIL / 0 WARN**.

No build, diagnostics, unit suite, Wrangler dry run or browser session was run by this role, to avoid competing with the coordinator's integrated build and the serialized QA session. The coordinator owns those final checks.

## Required integrated routing and browser checks

1. Assert exact output files `dist/404.html` and `dist/es/404.html`, expected `lang`, `noindex`, one heading, localized recovery text, and home/product links. Confirm the original two successful locale routes, sitemap and Google verification file remain intact.
2. Exercise Workers asset routing for root and Spanish unknown paths, including nested paths, trailing slash and query variants. Require HTTP 404 and meaningful language-appropriate HTML; successful locale pages must stay HTTP 200. No SPA 200 fallback or redirect loop is acceptable.
3. Check missing asset/non-navigation requests separately and record their actual 404 status/body behavior rather than assuming it matches document navigation.
4. Through Chrome DevTools MCP, check recovery pages at phone/tablet/desktop widths, both theme preferences and locales: readable wrapping, visible keyboard focus, working home/product navigation, no overflow and no runtime errors. Report tool or independent browser/device limits honestly.
5. Run the required diagnostics, tests, production build and `wrangler deploy --dry-run`. Actual Workers responses after a separately approved publication remain a release verification step.

No HTTP-to-HTTPS enforcement or HSTS change was attempted; the owner's earlier transport rollback remains respected. Neither the CSS removal nor the existence of a custom 404 page establishes general performance, security or accessibility compliance.
