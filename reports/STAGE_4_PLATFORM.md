# Stage 4 — remote platform and response policy review

Read-only observations on 2026-11-02. Worker: `pipesor-landing`; approved production origin: `https://pipesor-landing.jhon-galvezchambi.workers.dev`. Source branch `feature/landing-recovery` is based on merged `a0293cffb5a16eb2fa1b7683e3b2b048e449c4a9`. No remote setting, binding, build variable, access policy, repository protection, deployment or transport control was modified. Environment and secret values were not retrieved for this review.

## Resolution update

The owner added the approved `SITE_URL` to Cloudflare Preview base build settings. A new branch `feature/test-preview-site-url` inherited the correct public origin, and its Cloudflare Preview build `ba16771f-2994-45f3-b2dc-af55b65d3523` completed successfully. The previous Preview for `feature/landing-reports` retained its old settings and still lacked `SITE_URL` at the last check; update it individually if it needs another build. No bulk Preview update was performed.

LAND-015's inspection and documentation are resolved with explicit limitations: GitHub branch-protection/ruleset endpoints returned plan-related HTTP 403, so required-check enforcement is unknown; remote build/deploy command differences from the documented Bun workflow remain recorded, not changed. A sampled preview was publicly accessible with `noindex`; this is not access control or a guarantee about every Preview. Cloudflare's documented default content-signals notice expressed no specific preferences when no origin robots file was present. PR #10 subsequently added a sitemap-only origin file and the default notice disappeared; the owner accepted that outcome. Do not infer unpublished bot policies or current settings from this response alone.

## Later read-only build-variable verification

The owner observed that production builds succeed while short-lived branch builds fail. A subsequent Cloudflare MCP inspection confirmed that production build settings contain a non-secret `SITE_URL` matching the approved production origin, while the Preview base configuration contains no `SITE_URL`. The listed existing Preview for `feature/landing-reports` also has no `SITE_URL` in its own settings. Preview builds are enabled. Production and Preview build commands are both `bun run build`; the respective deploy commands are `npx wrangler deploy` and `npx wrangler preview`. Only the relevant variable's presence and a comparison against the approved public origin were reported; no secret values were recorded.

This directly explains why the inspected Preview configuration cannot pass the build-only origin guard. Previously observed branch build logs failed at that guard, although this inspection does not prove every historical branch had identical settings. The production trigger's `branch_includes: [main]` in the older observation applies to that trigger; the separate Preview configuration is enabled, so it must not be interpreted as proof that branch builds are disabled.

Cloudflare documents that updating Preview base settings affects future Previews, while existing Previews need an explicit existing-preview update or individual adjustment. No configuration was changed. A proposed minimal correction is the approved production origin as `SITE_URL` in Preview base settings, with the existing Preview handled as needed; a successful new branch build is required to validate it. Any remote update remains subject to owner approval. [Cloudflare Workers Builds API](https://developers.cloudflare.com/workers/ci-cd/builds/api-reference/)

## LAND-015 — remote state and release association

The Cloudflare MCP discovered the Worker by exact name and returned its settings, subdomain state, build trigger, deployment and version metadata. Returned script settings report compatibility date `2026-10-30`, no compatibility flags and no bindings. The settings response did not expose an assets-routing configuration; this is not evidence that the deployed static assets are absent. The production Workers URL and version-preview URLs are enabled.

The active deployment was `3ca897a7-98ac-4db1-8973-4f1d4daa49c9`, created `2026-11-02T08:32:43.844894Z`, with version `7010b1a2-a5b5-42ad-b405-1b7b2397e153` serving 100% of traffic. The version reports that a preview exists. The successful production Workers build check is associated with merged commit `a0293cf`; deployment timing and the public Stage 3 labels agree with that release. No cryptographic artifact digest-to-commit association was exposed by these observations.

The active GitHub-linked build trigger reports:

| Setting | Observed value |
| --- | --- |
| Repository | `pipesor-org/pipesor-landing` |
| Root directory | `/` |
| Branch includes | `main` |
| Branch excludes | Empty |
| Path includes / excludes | `*` / empty |
| Build command | `bun run build` |
| Deploy command | `npx wrangler deploy` |

These are observed remote command strings, not commands executed in this task. They differ from the repository's intended Bun-only setup (`bun install --frozen-lockfile && bun run build`, `bun run wrangler deploy`, and separate non-production preview builds). No remote change was made. The older trigger observation alone does not describe separate Preview settings; the later inspection above confirms Previews are enabled.

The failed Stage 3 branch build `b621ab77-6940-4678-9d92-e02b62326378` stopped at the public-origin guard (`Builds require SITE_URL` in `astro:config:setup`). The log was reduced to known error-class flags; no variable values or unrelated logs were retained. This establishes the failure class, not the absent/malformed variable's exact cause. The merged production build passed independently. Public canonical metadata and the repository CI environment use the approved origin; private remote variable values were not inspected.

The existing version URL `https://7010b1a2-pipesor-landing.jhon-galvezchambi.workers.dev/` returned anonymous HTTP 200 with `X-Robots-Tag: noindex`. It therefore is publicly readable at this sampled URL; no Access login was required. `noindex` is a crawler instruction, not access control. This does not establish every alias or future preview's visibility. See Cloudflare's [preview URL behavior](https://developers.cloudflare.com/workers/previews/).

GitHub's `branches/main/protection` and repository `rulesets` read endpoints both returned HTTP 403 with a plan/visibility feature restriction. Required-check enforcement remains unknown through these endpoints; passing Quality checks does not prove that they are a merge prerequisite. No protection setting or repository visibility was changed.

The public `/robots.txt` response remains a comments-only content-signals document, with no active User-agent, Disallow or Sitemap directive. It is absent from source/build output and arrives through Cloudflare. This is consistent with provider-generated behavior, but the exact managing account/zone setting was not exposed or independently verified. No application robots override was added.

## LAND-025 — prepared static response headers

The reviewed source adds two headers through `public/_headers`, applying to static responses:

- `X-Content-Type-Options: nosniff`: requires the declared MIME types to be respected. Actual CSS and JavaScript MIME types and landing hydration/viewer behavior must be verified under Workers handling, rather than inferred from header presence.
- `Referrer-Policy: strict-origin-when-cross-origin`: makes the normal modern-browser referrer policy explicit. It retains full same-origin referrers, sends only the origin to cross-origin HTTPS destinations and omits the referrer on downgrade.

The local Wrangler routing self-check passed for root/Spanish nested missing routes, real locale pages, sitemap, Google verification body and representative CSS/JS/WOFF2/WebP assets. It accepts valid `text/javascript` and `application/javascript` types. Google verification retains the pre-existing same-origin 307 from `.html` to the extensionless URL, then HTTP 200 with exact content; the same redirect was independently observed on current production. `_headers` itself is not exposed as a public file.

The new headers have not been published by this task. Browser compatibility results and limits belong to [the verification report](STAGE_4_VERIFICATION.md); the machine assertions/results are in [the routing check](stage-4-evidence/static-routing-check.mjs) and [result snapshot](stage-4-evidence/static-routing-results.json).

CSP was evaluated and left out of this patch: existing theme boot and Astro/React hydration include inline scripts, so a restrictive policy requires a separate tested allowance/hash strategy. No untested enforcement or report endpoint was added. HSTS scope and HTTP redirect changes remain outside this patch, preserving the prior transport rollback. No `includeSubDomains`, preload, framing or cross-origin isolation policy was introduced without a specific need. Header presence is not a claim of general security compliance.

Sources: [Cloudflare static response headers](https://developers.cloudflare.com/workers/static-assets/headers/), [MDN nosniff](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options), [MDN Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy).

## LAND-022 / LAND-024 — current measurement decision

The owner's Stage 3 approval explicitly keeps application tracking disabled. For the current release, retain that decision: no application analytics, RUM, behavioral events or remote JavaScript-error collector is added. LAND-023 remains deferred. Current error visibility is controlled manual console/network verification, with its limits recorded by QA. This closes the current decision scope; continuous real-user error visibility is not established.

Cloudflare's existing public responses include provider-managed NEL/Report-To headers. They are infrastructure behavior observed before this patch, not a new application integration. The no-application-tracking decision is not a blanket claim that the hosting provider processes no technical request data. Any future application monitoring or policy covering provider telemetry needs its own explicit review; no cookie banner was invented as part of this task.

## Remaining platform work

- Agree and separately authorize any remote changes needed to align the actual trigger commands/branch-preview configuration with the documented Bun workflow; changing production build settings is not part of this read-only review.
- Resolve preview-build `SITE_URL` configuration through an authorized settings review before assuming branch builds work.
- Obtain an authoritative view of protection enforcement and managed robots settings if required; current API limits remain recorded.
- Verify the new recovery and header responses publicly only after a separately approved source release. Current local Worker behavior is not a production deployment claim.
