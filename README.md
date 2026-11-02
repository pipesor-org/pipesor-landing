# Pipesor landing

The bilingual public-facing landing page for Pipesor, an AIOps thesis project. This repository contains the Astro + React site and its static Cloudflare Workers deployment configuration.

## Current state

- English is served at `/`; Spanish at `/es/`.
- Product captures show prototype data; displayed metrics are illustrative. Copy still needs owner review.
- The early-access form is a local preview: submission is disabled and no data is sent.
- Production publication requires explicit approval. Deployment configuration does not confirm that a production site is live.
- No source-code license has been adopted. Ownership and contributor approval remain pending; the MIT proposal excludes brand assets and product screenshots.

## Requirements and setup

Run commands from the repository root. Use Bun exclusively for setup and dependency management.

- Bun: use the version pinned in [package.json](package.json).
- Node.js: use the version pinned in [.node-version](.node-version); the Astro/Cloudflare toolchain requires it.
- Standalone [Lefthook 2.2.2](https://github.com/evilmartians/lefthook/releases/tag/v2.2.2): install the binary for your OS/architecture on `PATH` and verify `lefthook version`. Hooks and commit-message validation run with Lefthook and Bun, without a Node.js launcher.

```sh
bun install --frozen-lockfile
bun run setup:hooks
bun run dev
```

Open the URL printed by Astro. TypeScript remains on major 6 for compatibility with the installed Astro checker.

For existing clones, inspect `git config --show-origin --get-all core.hooksPath`. If the local value is the former `.githooks`, remove only that value with `git config --local --unset core.hooksPath`, then rerun `bun run setup:hooks`. Resolve other hooks-path configurations before installing; do not reset global Git settings. Optional `lefthook-local.yml` overrides are ignored by Git.

## Verification

Before submitting changes:

```sh
bun run check
bun run test
SITE_URL=https://pipesor-landing.jhon-galvezchambi.workers.dev bun run build
```

These commands run Astro diagnostics, tests including commit-message hook checks, and the static build. After building, use `bun run preview --port 4321` for manual browser verification; it is an interactive server, not an automated check. Follow [AGENTS.md](AGENTS.md) for the required UI verification scope.

Builds require an explicit public HTTPS `SITE_URL`; development still works without it. The approved origin is currently `https://pipesor-landing.jhon-galvezchambi.workers.dev`. Change it only after a new origin is approved and configured. For agent sessions, use `bun run preview --port 4322 --ignore-lock` and retain the foreground command session while using Chrome DevTools. Astro's automatic background preview can terminate when the agent command exits. Choose an unused port; do not replace an existing preview.

For deployment configuration changes, also run `bun run wrangler deploy --dry-run` after building. The [Quality workflow](.github/workflows/quality.yml) checks commit and squash-message conventions, diagnostics, tests, the build, and deployment configuration. It does not deploy.

## Repository guide

| Location | Purpose |
| --- | --- |
| `src/components/` | Shared layout, screenshot viewer, branding, and local form preview |
| `src/i18n/content.ts` | English and Spanish copy |
| `src/styles/global.css` | Brand tokens and responsive styles |
| `src/assets/product/`, `public/branding/` | Product captures and approved logos |
| `public/licenses/` | Bundled font licenses |

Documentation:

- [Landing brief](docs/landing-page-brief.md): product and brand requirements.
- [Focused refinement](docs/focused-refinement.md): interaction and design decisions; [previous acceptance verification](docs/refinement-verification.md) records earlier checks.
- [Footer refinement and licensing proposal](docs/footer-refinement.md): footer decisions, pending ownership, and proposed code-only MIT scope.
- [Deployment guide](docs/deployment.md): Workers Builds settings, canonical origin, and preview visibility.
- [Agent guidance](AGENTS.md): boundaries, roles, skills, and verification expectations.

Verification reports record their original scope and results; they are not evidence that the current checkout has been retested.

## Deployment

[wrangler.jsonc](wrangler.jsonc) serves the static `dist/` output. The documented Workers Builds setup uses `main` for production and other branches for previews; it is separate from the staged service-promotion model. Configure or publish it only after approval, following the [deployment guide](docs/deployment.md).

## Contribution

Follow the [Pipesor contribution guidelines](https://github.com/pipesor-org/.github/blob/main/CONTRIBUTING.md) for branching, English Angular-style Conventional Commits, reviews, and squash merges. Use short-lived `feature/<topic>` or `fix/<topic>` branches from `main` and open PRs back into `main`.

Local commit-message checks are defined in [commitlint.config.js](commitlint.config.js) and [lefthook.yml](lefthook.yml): lowercase scopes and subjects, no trailing period, and a maximum 72-character header. CI also validates the PR title and prospective squash message. For agent work, committing, pushing, and publishing require explicit user approval as defined in [AGENTS.md](AGENTS.md).
