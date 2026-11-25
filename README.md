# Pipesor landing

The bilingual public-facing landing page for Pipesor, an AIOps thesis project. This repository contains the Astro + React site and its static Cloudflare Workers deployment configuration.

## Current state

- English is served at `/`; Spanish at `/es/`.
- The primary action signs in to the Pipesor dashboard with GitHub; the landing itself collects no data.
- Product captures come from the deployed dashboard with the public `Chaomeum/pipesor-demo` repository. Product claims mirror the dashboard's About pages; see the [Ink on paper redesign](docs/ink-on-paper-redesign.md).
- Production publication requires explicit approval. Deployment configuration does not confirm that a production site is live.
- Source code is licensed under the [MIT License](LICENSE), copyright 2026 Jhon Alexander Galvez Chambi and Ramiro Alexander Guzman Chavez. The Pipesor name, logo, branding, visual identity, product screenshots and social media artwork are excluded and remain All Rights Reserved. Third-party materials retain their own licenses; see [licensing scope](docs/licensing.md).

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

For deployment configuration changes, also run `bun run wrangler deploy --dry-run` after building. [CI](.github/workflows/ci.yml) runs the shared [pipesor-ci](https://github.com/pipesor-org/pipesor-ci) conventions (canonical commitlint/Lefthook, PR title of at most 65 characters, squash message, commits, actionlint, zizmor) and checks diagnostics, tests, the build and the deployment configuration with actions pinned by SHA. It does not deploy. Run `bun run test:hooks` for commit-hook changes.

For localized 404 routing and response headers, use `bun run wrangler dev --local --port 8788` against the built output. Astro preview does not reproduce Workers Static Assets routing or `_headers` processing. Unknown root paths should return the English 404; unknown `/es/` paths should return the Spanish 404. Verify real 404 status and working home/product links. Stop the local server when finished.

## Repository guide

| Location | Purpose |
| --- | --- |
| `src/components/` | Page layout, evidence replay, screenshot viewer and branding |
| `src/i18n/content.ts` | English and Spanish copy, outbound links and the replayed run |
| `src/styles/` | Ink on paper tokens, fonts and responsive styles |
| `src/assets/product/`, `public/branding/` | Product captures and approved logos |
| `src/fonts/`, `public/licenses/` | Geist fonts and their license |

Documentation:

- [Landing brief](docs/landing-page-brief.md): product and brand requirements.
- [Ink on paper redesign](docs/ink-on-paper-redesign.md): current direction, claim sources, assets and verification.
- [Focused refinement](docs/focused-refinement.md): earlier interaction and design decisions; [previous acceptance verification](docs/refinement-verification.md) records earlier checks.
- [Footer refinement](docs/footer-refinement.md): footer composition and code-only licensing scope.
- [Licensing](docs/licensing.md): MIT source-code grant, excluded assets and third-party notices.
- [Deployment guide](docs/deployment.md): Workers Builds settings, canonical origin, and preview visibility.
- [Agent guidance](AGENTS.md): boundaries, roles, skills, and verification expectations.

Verification reports record their original scope and results; they are not evidence that the current checkout has been retested.

## Deployment

[wrangler.jsonc](wrangler.jsonc) serves the static `dist/` output. The documented Workers Builds setup uses `main` for production and other branches for previews; it is separate from the staged service-promotion model. Configure or publish it only after approval, following the [deployment guide](docs/deployment.md).

## Contribution

Follow the [Pipesor contribution guidelines](https://github.com/pipesor-org/.github/blob/main/CONTRIBUTING.md) for branching, English Angular-style Conventional Commits, reviews, and squash merges. Use short-lived `feature/<topic>` or `fix/<topic>` branches from `main` and open PRs back into `main`.

Local commit-message checks are defined in [commitlint.config.js](commitlint.config.js) and [lefthook.yml](lefthook.yml): lowercase scopes and subjects, no trailing period, and a maximum 72-character header. CI also validates the PR title and prospective squash message. For agent work, committing, pushing, and publishing require explicit user approval as defined in [AGENTS.md](AGENTS.md).
