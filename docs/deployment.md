# Cloudflare Workers deployment

This guide describes the landing page's static deployment setup. It does not confirm that Workers Builds is connected or that production publication has been approved. Run commands from the repository root after completing the [README setup](../README.md#requirements-and-setup).

## Workers Builds configuration

After publication is approved, connect `pipesor-org/pipesor-landing` to Workers Builds. Grant the Cloudflare GitHub app access to this repository and use the Worker name `pipesor-landing` to match [wrangler.jsonc](../wrangler.jsonc).

| Setting | Value |
| --- | --- |
| Root directory | Repository root |
| Production branch | `main` (automatic deployments enabled) |
| Preview builds | Enabled for non-production branches |
| Build variable | `SKIP_DEPENDENCY_INSTALL=1` |
| Build variable | `SITE_URL=https://<approved-production-host>` |
| Build command | `bun install --frozen-lockfile && bun run build` |
| Deploy command | `bun run wrangler deploy` |
| Preview command | `bun run wrangler preview` |

Enabling automatic production deployments allows changes merged into `main` to publish. Obtain publication approval before enabling that setting; the Quality workflow itself does not deploy.

Use the assigned `workers.dev` hostname until a custom domain is available. Set `SITE_URL` for production and preview builds to the approved production origin for canonical links. Local builds default to `http://localhost:4321`; rebuild after changing the origin.

## Validation and visibility

Validate deployment configuration without deploying:

```sh
bun run build
bun run wrangler deploy --dry-run
```

A successful dry run does not verify a live deployment, GitHub app permissions, or remote Workers Builds settings.

Previews are public by default; use Cloudflare Access if private reviews are needed. The site requires no application secrets. Any future secrets must stay out of static output and use separate production/preview settings.

The documented setup targets the Free plan. Confirm account settings and applicable limits before publishing using Cloudflare's [build configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/), [branch builds](https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/), and [limits and pricing](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/).

Return to the [README](../README.md) for local verification and contribution rules.
