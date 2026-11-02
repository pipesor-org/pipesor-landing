# Cloudflare Workers deployment

This guide describes the landing page's static deployment setup and intended build configuration. Publication requires explicit approval. Run commands from the repository root after completing the [README setup](../README.md#requirements-and-setup).

Configure `SITE_URL` in Workers Builds before releasing the build validation below. A missing origin intentionally stops the build.

## Workers Builds configuration

After publication is approved, connect `pipesor-org/pipesor-landing` to Workers Builds. Grant the Cloudflare GitHub app access to this repository and use the Worker name `pipesor-landing` to match [wrangler.jsonc](../wrangler.jsonc).

| Setting | Value |
| --- | --- |
| Root directory | Repository root |
| Production branch | `main` (automatic deployments enabled) |
| Preview builds | Enabled for non-production branches |
| Build variable | `SKIP_DEPENDENCY_INSTALL=1` |
| Build variable | `SITE_URL=https://pipesor-landing.jhon-galvezchambi.workers.dev` |
| Build command | `bun install --frozen-lockfile && bun run build` |
| Deploy command | `bun run wrangler deploy` |
| Preview command | `bun run wrangler preview` |

Enabling automatic production deployments allows changes merged into `main` to publish. Obtain publication approval before enabling that setting; the Quality workflow itself does not deploy.

The currently approved public origin is `https://pipesor-landing.jhon-galvezchambi.workers.dev`. Use it for production and preview builds so canonical, hreflang and social-image URLs identify the public site rather than a preview. `pipesor.com` is a future migration, not the current origin.

Every static build requires an explicit `SITE_URL`. Missing, malformed, non-HTTPS, local/IP, or non-origin values (credentials, path, query or fragment) stop the build. Local development, checks and preview startup can omit it; development then uses `http://localhost:4321`. Preview serves the already-built metadata, so rebuild after changing the origin. See the [README verification commands](../README.md#verification) for local use.

## Validation and visibility

Validate deployment configuration without deploying:

```sh
SITE_URL=https://pipesor-landing.jhon-galvezchambi.workers.dev bun run build
bun run wrangler deploy --dry-run
```

A successful dry run does not verify a live deployment, GitHub app permissions, or remote Workers Builds settings.

Previews are public by default; use Cloudflare Access if private reviews are needed. The site requires no application secrets. Any future secrets must stay out of static output and use separate production/preview settings.

The documented setup targets the Free plan. Confirm account settings and applicable limits before publishing using Cloudflare's [build configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/), [branch builds](https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/), and [limits and pricing](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/).

Return to the [README](../README.md) for local verification and contribution rules.

## Static recovery and response headers

The site remains assets-only. Astro uses `build.format: 'preserve'` to keep the existing locale index routes while producing `dist/404.html` and `dist/es/404.html`. Workers `assets.not_found_handling: "404-page"` serves the nearest recovery page with status 404, including nested missing paths. The recovery pages contain localized home/product links and `noindex`; they are not sitemap entries. See Cloudflare's [static 404 routing](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/).

`public/_headers` declares `X-Content-Type-Options: nosniff` and `Referrer-Policy: strict-origin-when-cross-origin` for static responses. MIME types must remain correct for CSS and JavaScript. The referrer policy makes the normal modern-browser policy explicit: same-origin requests retain the full referrer, cross-origin HTTPS requests use the origin, and downgrades omit it. This does not establish general security compliance. CSP and HSTS require separate compatibility and hostname-scope decisions; this configuration does not change the previously reviewed HTTP transport behavior. See Cloudflare's [header handling](https://developers.cloudflare.com/workers/static-assets/headers/).

Verify the built output with the README's local Wrangler command, including missing root/Spanish paths, recovery links, existing locale pages, sitemap, verification file, theme, screenshot viewer and form preview. Astro preview alone does not verify Workers routing or these headers. Remote response verification follows an approved publication.
