# Stage 2 — Search evidence follow-up

Checked 2026-11-02 after PR #6 was merged. Read-only public checks only. No Google or Cloudflare account was connected and no property settings were changed.

## Later owner confirmation

After these initial read-only checks, the owner completed GSC verification and reported that initial data is processing. PR #7’s merged production build passed. Indexed URL Inspection fields and sitemap submission confirmation are still pending. The owner also supplied English X/WhatsApp screenshots and confirmed Spanish link previews; see [current Stage 2 status](STAGE_2_PROGRESS.md#owner-validation-and-current-handoff). The access limitations and setup instructions below describe the earlier research state, not a claim that property setup remains undone.

## Current public artifact

The approved Workers origin returned HTTP 200 for `/`, `/es/`, `/sitemap.xml`, `/robots.txt`, and `/social-card.png`. The image returned `image/png`; the sitemap returned `application/xml` and lists exactly the canonical English and Spanish routes. Both HTML pages currently expose matching self-canonical and `og:url` values, plus reciprocal `en`, `es`, and `x-default` alternates. The Spanish social-image alt text is localized. These observations verify the public declarations and availability only; they do not establish Google crawling, indexing, or its selected canonical.

## LAND-009 — Field data

Retried the anonymous PageSpeed Insights API for the approved English origin on mobile. Google returned HTTP 429: the API consumer's daily query quota was exhausted. No lab or field metrics were returned. A direct CrUX URL query returned HTTP 403 because the endpoint requires an API consumer identity (API key or another authorized identity). No key was supplied or inspected from local environment state. Thus CrUX record availability, its observation window, and mobile/desktop p75 LCP, INP, and CLS remain unknown. No analytics or RUM was enabled.

## LAND-014 — Search Console

The available connected-tool inventory contains no Google Search Console or URL Inspection integration. Public HTTP checks cannot answer index coverage or Google-selected canonical. Google documents that the selected canonical is reported in the indexed URL Inspection result; its live test cannot predict that selection. Read-only inspection of both locale URLs still requires access to the verified Search Console property. [Google URL Inspection guidance](https://support.google.com/webmasters/answer/9012289/)

## LAND-031 — Search-intent research

Public web searches in English and Spanish surfaced the official GitHub workflow-log documentation in English and Spanish. It directly describes reviewing failed-step build logs to troubleshoot failed runs. This corroborates that logs and troubleshooting are part of the workflow problem domain. It does **not** establish demand for Pipesor, query volume, conversion intent, relative EN/ES opportunity, or representative-user fit. Search snippets are not a keyword study or reliable measurement of ranking.

Candidate phrases to test with actual query data or readers, not approved target keywords:

| Locale | Candidate query hypothesis | Problem represented |
| --- | --- | --- |
| EN | GitHub Actions failed workflow logs; troubleshoot GitHub Actions workflow failures | Find the failed step and evidence in run logs |
| ES | registros de flujos de trabajo fallidos en GitHub Actions; solucionar problemas de flujos de trabajo de GitHub Actions | Find the failed step and evidence in run logs |

The official English and Spanish docs describe the same troubleshooting task: [EN workflow run logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs) and [ES workflow run logs](https://docs.github.com/es/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/using-workflow-run-logs). This source validates terminology for the task only. Keep audience choice and locale priority provisional pending owner review and query or reader evidence.

### Bounded public result sample

On 2026-11-02, four practical problem queries (two per locale) were sent to the connected public web search tool. Representative result links and page types below show what the result set addressed. The tool's result ordering is not treated as rank; personalization, geography, query volume, and result coverage were not measured.

| Locale and query | Representative results returned (type) | Observed intent | Existing landing content that maps to it |
| --- | --- | --- | --- |
| EN — `GitHub Actions failed workflow logs diagnose troubleshoot` | [GitHub workflow run logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs) (official how-to); [GitHub troubleshooting workflows](https://docs.github.com/en/actions/how-tos/troubleshoot-workflows) (official troubleshooting guide) | Locate the failed step and inspect/search its logs to diagnose a failed run. | Workflow failure and run/job/log inputs in `#workflow`; hero framing of a failed GitHub Actions workflow. |
| EN — `CI pipeline failure root cause analysis tools logs incidents` | [Datadog CI job failure analysis](https://docs.datadoghq.com/continuous_integration/guides/use_ci_jobs_failure_analysis/) (vendor product documentation); [CICube AI root cause analysis](https://cicube.io/github-actions-monitoring-docs/ai-root-cause-analysis/) (vendor feature/product page) | Evaluate tooling that classifies failed CI jobs and surfaces plausible causes from logs. | Evidence-backed probable diagnosis and visible confidence in hero/`#workflow`; screenshot/product views in `#product`; explicit inconclusive state in uncertainty section. The wording must preserve prototype/demo status. |
| ES — `falló workflow GitHub Actions registros error solucionar problemas` | [Registros de ejecución de GitHub Actions](https://docs.github.com/es/actions/how-tos/monitor-workflows/use-workflow-run-logs) (official localized how-to); [solución de problemas de workflows](https://docs.github.com/es/actions/how-tos/troubleshoot-workflows) (official localized troubleshooting guide) | Find which step failed and use its logs to troubleshoot the workflow run. | Equivalent Spanish workflow steps and execution/job/log labels in `#workflow`; Spanish hero copy says it turns a GitHub Actions failure into an evidence-backed diagnosis and human review. |
| ES — `diagnosticar causa raíz fallos pipeline CI/CD logs herramientas` | [Azure Pipelines: revisión de registros para diagnosticar problemas](https://learn.microsoft.com/es-es/azure/devops/pipelines/troubleshooting/review-logs) (official localized how-to); [Datadog CI Visibility](https://docs.datadoghq.com/es/continuous_integration/search/) (vendor product documentation) | Diagnose pipeline errors by reviewing logs, or evaluate CI visibility/failure-analysis tools. The surfaced examples include non-GitHub CI products. | The landing's supported scope is explicitly GitHub Actions, with failure-to-human-review workflow and evidence-backed diagnosis. Keep FAQ scope wording and prototype limitations visible; this query does not authorize adding integrations. |

This sample is enough to map plausible problem language to existing content and reveal adjacent tool-category intent. It does not establish that these are target audience queries, that Pipesor appears for them, or that either locale has greater demand. User validation and query-volume evidence remain open.

## LAND-012 and LAND-032

The published sitemap is now available at the root and contains the two public canonical URLs. Search Console submission remains unavailable without property access. Google notes that a sitemap can aid discovery but is not required for a small, comprehensively linked site and does not guarantee crawling or indexing. [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)

The existing recommendation to defer JSON-LD still stands: no supported appearance or verified entity facts were identified that justify adding markup.

## Remaining evidence needed

- LAND-009: retry PSI with available quota, or provide a CrUX API key / owner-supplied CrUX report. A missing CrUX record is an insufficient-data outcome, not a CWV failure.
- LAND-014: grant read-only Search Console property access for the current origin and inspect both locale URLs. This can establish indexed status and selected canonicals; request indexing is not part of this read-only check.
- LAND-031: Search Console query data after the property has data, a keyword dataset with source/method, or representative EN/ES reader research. Do not convert the candidate phrases into approved copy or product claims without that evidence and owner review.

## Short access path

- **Search Console:** because there is no existing property available, the owner would first create the URL-prefix property `https://pipesor-landing.jhon-galvezchambi.workers.dev/` and complete one of Google's offered ownership-verification methods. Verification that requires changing deployed page content or files needs separate approval before implementation or publication. Once the property is verified, the owner can inspect `/` and `/es/` in URL Inspection and share/export the indexed report fields (index status, last crawl, user-declared and Google-selected canonical). Do not press “Request indexing” for this read-only evidence pass. No Search Console connector or account interface is available here, so adding agent access is not a prerequisite. [Add a property](https://support.google.com/webmasters/answer/34592?hl=en) · [Verify ownership](https://support.google.com/webmasters/answer/9008080?hl=en) · [URL Inspection fields](https://support.google.com/webmasters/answer/9012289/).
- **CrUX:** in Google Cloud Console, select/create a project, enable **Chrome UX Report API**, and create an API key. Query URL-level and origin-level data for mobile and desktop, then share the JSON response with the key removed. Do not send the key. A valid response may still say the URL/origin has insufficient data. [Google CrUX API setup](https://developers.google.com/codelabs/chrome-web-vitals-psi-crux).

Raw observations are in [the evidence record](stage-2-search-followup/evidence.md). No backlog statuses were edited and no implementation changes were made.
