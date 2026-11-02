# Stage 4 — exposure and toolchain review

Reviewed 2026-11-02. The initial source/history pass used merged source commit `a0293cffb5a16eb2fa1b7683e3b2b048e449c4a9`; a follow-up scan covered the final Stage 4 build and 15 current publishable worktree paths described below. These were read-only checks; no dependencies, source, deployments or settings were changed, and no live credential values were read.

## LAND-026 — bounded credential-pattern review

The review covered Git-tracked publishable source and reachable Git history in this checkout, excluding `reports/`, vendored skill data, generated output and ignored/local files. A bounded pattern search for common GitHub tokens, AWS access-key IDs, private-key headers and credential-like strings returned no matches in source or reachable history. No dedicated `gitleaks` or `trufflehog` executable was installed, so this was not a full secret-scanner run. This does not certify the absence of secrets, untracked/generated artifacts or values outside the searched patterns. No suspected credential was found or disclosed. Google’s public Search Console verification file/token is an intentionally public ownership-verification mechanism, not an account credential.

The final Stage 4 build output was generated on 2026-11-02 at 03:46:28. A bounded pattern scan covered 63 of its 64 files; it excluded `dist/googlece11464d35f7cf12.html` from credential classification because this is the intentional public Google Search Console ownership-verification file. The file's presence was confirmed without reading or reproducing its token. No supported pattern matched the other 63 output files.

The same pattern set was applied to current publishable source, docs, public assets and configuration, including the new `LICENSE` and `docs/licensing.md`; it returned no matching file. At the time of the scan, the source tree was based on `a0293cffb5a16eb2fa1b7683e3b2b048e449c4a9` with 15 uncommitted publishable paths: `README.md`, `astro.config.mjs`, `docs/deployment.md`, `docs/footer-refinement.md`, `LICENSE`, `package.json`, `public/_headers`, `src/components/Landing.astro`, `src/components/NotFound.astro`, `src/i18n/content.ts`, `src/pages/404.astro`, `src/pages/es/404.astro`, `src/styles/global.css`, `wrangler.jsonc`, and `docs/licensing.md`. Local-only `reports/` was excluded.

## LAND-029 — toolchain review

The repository pins Bun `1.4.4`, Wrangler `4.156.0`, Astro `^7.4.4` and TypeScript `^6`. `bun outdated` reports a Wrangler patch update `4.156.0 → 4.156.1` and TypeScript `6.0.3 → 7.0.2`; Bun audit checked 431 packages and reported no vulnerabilities.

The Wrangler `4.156.1` release notes describe a narrow fix for CRLF handling in `wrangler types --check`, plus dependency and default compatibility-date updates. The project does not currently declare generated Worker types or use `wrangler types --check`, and the repository has already built successfully with `4.156.0`. This patch is optional; no current defect or security advisory warrants an isolated update in this Stage 4 pass. [Official Wrangler release notes](https://github.com/cloudflare/workers-sdk/releases)

TypeScript 7 is a major compiler generation and exceeds the explicit repository policy in [README.md](../README.md): the installed Astro checker is kept on TypeScript 6 for compatibility. Keep TypeScript 6 until the project's Astro checker is deliberately validated against the new major and the README policy is revised with evidence. Do not change only the version/lockfile as a maintenance exercise. [Astro TypeScript guidance](https://docs.astro.build/en/guides/typescript/) · [TypeScript 7 announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)

## Result and limits

- No supported credential pattern was found within the stated tracked-source and reachable-history scope; this is a bounded search, not certification.
- No dependency change is recommended. The only same-major update found is an optional Wrangler patch; the TypeScript update crosses the project's documented compatibility boundary.
- Cloudflare remote settings, other browser engines and physical hardware were outside this pass. Remote configuration requires its own read-only evidence; no values were retrieved here.

## LAND-016 — licensing handoff

The owner supplied and approved a code-only MIT license for 2026 naming Jhon Alexander Galvez Chambi and Ramiro Alexander Guzman Chavez, with Pipesor branding, product captures and social artwork excluded. The owner also confirmed Ramiro's explicit approval of those terms. The repository-root [LICENSE](../LICENSE) and [licensing documentation](../docs/licensing.md) now record that scope and confirmation. This report records the owner's confirmation; it does not independently verify authorship or rights in individual files. Package metadata and active EN/ES page notices are handled by the main Stage 4 implementation.
