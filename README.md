# pipesor-landing

The bilingual landing page for Pipesor, an AIOps thesis project. Built with Astro + React and deployed as static assets on Cloudflare Workers.

## Development

Use the Bun version pinned in `package.json` and Node version in `.node-version`. Use Bun exclusively for setup and dependency management. Install the standalone [Lefthook 2.2.2 binary](https://github.com/evilmartians/lefthook/releases/tag/v2.2.2) for your OS/architecture on `PATH` and verify `lefthook version` before setup. Lefthook and commit-message validation run without Node.js; Node remains required by the Astro/Cloudflare toolchain.

```sh
bun install --frozen-lockfile
bun run setup:hooks
bun run dev
```

Open the URL printed by Astro. Before submitting changes, run:

```sh
bun run check
bun run test
bun run build
bun run preview --port 4321
```

English is served at `/`, Spanish at `/es/`. The React early-access form is a local preview: it sends no data and submission remains disabled. TypeScript stays on major 6 for compatibility with the installed Astro checker.

The sticky header preserves section links when switching languages. System/light/dark preferences use `pipesor.theme`; the native product screenshot selector and workflow disclosures work without JavaScript. Screenshot buttons open an accessible in-page viewer with fit/actual-size modes. Email feedback starts on blur and updates while correcting the address; registration remains disabled. Product captures retain their original theme and language, identified by their captions.

## Content and assets

See the [landing brief](docs/landing-page-brief.md), [focused refinement](docs/focused-refinement.md), and [previous acceptance verification](docs/refinement-verification.md) for design decisions, checks, and outstanding approvals. Product data and metrics are illustrative; copy needs owner review.

The [footer refinement and MIT evaluation](docs/footer-refinement.md) records the current footer and proposed source-code licensing scope. MIT has not been adopted; rights ownership and contributor approval remain pending. Brand assets and product screenshots are excluded from the proposal.

- `src/components/Landing.astro`: shared page layout.
- `src/components/ProductImage.astro` and `ImageLightbox.astro`: responsive screenshots, demo labels, and the in-page image viewer.
- `src/components/Brand.astro`: proportional viewport for the unmodified official wordmark.
- `src/i18n/content.ts`: EN/ES copy.
- `src/components/EarlyAccess.tsx`: form preview.
- `src/styles/global.css`: brand tokens and responsive styles.
- `src/assets/product/` and `public/branding/`: product captures and approved logos.
- `public/licenses/`: bundled font licenses.

## Cloudflare Workers deployment

`wrangler.jsonc` serves Astro's static `dist/` output through Workers Static Assets. Workers Builds handles production and branch previews.

After publication is approved, connect `pipesor-org/pipesor-landing` to Workers Builds. Grant the Cloudflare GitHub app access to this repository and use the Worker name `pipesor-landing` to match Wrangler. Configure:

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

Use the assigned `workers.dev` hostname until a custom domain is available. Set `SITE_URL` for production and preview builds to the approved production origin for canonical links; local builds default to `http://localhost:4321`. Validate deployment configuration without deploying:

```sh
bun run build
bun run wrangler deploy --dry-run
```

Previews are public by default; use Cloudflare Access if private reviews are needed. The site requires no application secrets. Any future secrets must stay out of static output and use separate production/preview settings.

This setup uses the Free plan. See Cloudflare's [build configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/), [branch builds](https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/), and [current limits](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/).

## Agent guidance

See [AGENTS.md](AGENTS.md) for agent boundaries, skill usage, and verification expectations.

Codex discovers the `engineering`, `quality`, and `repository` roles in `.codex/agents/`, where each role sets its model and reasoning effort. Permissions and MCP connections come from the coordinating session; the main agent delegates independent work and integrates the results.

## Git workflow

Use trunk-based development: create short-lived `feature/<topic>` or `fix/<topic>` branches from `main`, open reviewed PRs back into `main`, and use squash merge. GitHub deletes merged branches automatically. Write commit messages in English using the Angular-style format `type(scope): subject`; scope is optional. Supported types are `build`, `ci`, `chore`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, and `test`. Mark breaking changes with `!` and/or a `BREAKING CHANGE:` footer, and explain the migration in the PR body. GitHub uses the PR title and body as the default squash message.

The setup command above installs the Lefthook-managed `commit-msg` hook from `lefthook.yml`. Commitlint's pinned Conventional Commits preset runs directly with Bun, without a Node.js launcher.

On existing clones, check `git config --show-origin --get-all core.hooksPath`; if the local value is this repository's former `.githooks`, remove only that value with `git config --local --unset core.hooksPath`, then rerun `bun run setup:hooks`. Resolve any other hooks-path configuration deliberately before installing; do not reset global Git settings. Local overrides in `lefthook-local.yml` are ignored by Git.

Use a lowercase subject without a trailing period and keep the header within 72 characters. All messages are validated; the final squash commit must also follow this convention.

The `Quality` workflow validates all PR commits, the PR title alone, the prospective squash message (title plus body), and the latest commit on pushes to `main`, then runs diagnostics, tests (including hook checks), the static build, and a Wrangler dry run. It does not deploy. Maintainers can require the `quality` check before merging. Commit, push, and publication actions require explicit user approval.
