# pipesor-landing

The bilingual landing page for Pipesor, an AIOps thesis project. Built with Astro + React and deployed as static assets on Cloudflare Workers.

## Development

Use the Bun version pinned in `package.json` and Node version in `.node-version`. Use Bun exclusively for setup and dependency management.

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

## Content and assets

See the [landing brief](docs/landing-page-brief.md) for requirements and [acceptance verification](docs/refinement-verification.md) for design decisions and outstanding approvals. Product data and metrics are illustrative; copy needs owner review.

- `src/components/Landing.astro`: shared page layout.
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

Use trunk-based development: make small changes and integrate into `main`, using short-lived branches when appropriate. Write commit messages in English using the Angular-style format `type(scope): subject`; scope is optional. Supported types are `build`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, and `test`. For breaking changes, explain the change in a `BREAKING CHANGE:` footer.

The setup command above enables the native `commit-msg` hook using Commitlint's Angular preset. It sets this clone's `core.hooksPath` to `.githooks`, replacing any existing hooks path. Use a lowercase subject without a trailing period and keep the header within 72 characters. All messages are validated; squash or rebase integration should produce a conventional commit.

The `Quality` workflow validates all PR commits and the latest commit on pushes to `main`, then runs diagnostics, tests (including hook checks), the static build, and a Wrangler dry run. It does not deploy. Maintainers can require the `quality` check before merging. Commit, push, and publication actions require explicit user approval.
