# Agent guidance

- Keep changes inside this landing-page repository. Use Astro + React with static output and Cloudflare Workers Static Assets. Add SSR, adapters, or a backend only when requested.
- Use Bun exclusively for project setup and dependency management. Do not use npm, npx, yarn, or pnpm.
- Use Context7 when current framework, library, or tooling documentation is needed. Verify availability and report unavailable tools rather than assuming current behavior.
- Verify user-visible changes through Chrome DevTools MCP against the production preview: affected locales, responsive layouts, keyboard behavior, and console errors. Report unavailable tools and verification limits.
- For design and UI work, read `.agents/skills/design-taste-frontend/SKILL.md` and follow it with the approved brief's brand constraints. Preserve upstream skill files; justify any additional skill.
- Write repository documentation and commit messages in English. Keep setup and workflow details in the README.
- Follow the README's trunk-based workflow and Angular commit convention. Make routine scoped changes autonomously; obtain user approval before committing, pushing, publishing, or changing product decisions.
- Respect existing changes and the approved brief; keep EN/ES content equivalent and preserve accessibility. Do not invent product claims or enable data collection without approval.
- Run `bun run check`, `bun run test`, and `bun run build` for code or tooling changes; run `bun run wrangler deploy --dry-run` for deployment configuration. Report results and remaining limits.

## Coordination

The main agent owns scope, integration, and the final report. Use the `engineering`, `quality`, and `repository` roles in `.codex/agents/` only for independent tasks with clear file ownership and expected results; handle small or dependent work directly. Subagents return results without further delegation. Serialize work on shared files and Chrome DevTools sessions, and review delegated changes before reporting completion.
