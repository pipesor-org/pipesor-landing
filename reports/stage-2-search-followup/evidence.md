# Stage 2 search follow-up evidence

Date: 2026-11-02. Approved public origin: `https://pipesor-landing.jhon-galvezchambi.workers.dev`.

## Public HTTP checks

Read-only `curl` checks returned:

| Path | Status | Content type |
| --- | --- | --- |
| `/` | 200 | `text/html` |
| `/es/` | 200 | `text/html` |
| `/sitemap.xml` | 200 | `application/xml` |
| `/robots.txt` | 200 | `text/plain; charset=utf-8` |
| `/social-card.png` | 200 | `image/png` |

Sitemap response:

```xml
<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://pipesor-landing.jhon-galvezchambi.workers.dev/</loc></url><url><loc>https://pipesor-landing.jhon-galvezchambi.workers.dev/es/</loc></url></urlset>
```

Extracted head declarations for each page showed its canonical and `og:url` equal to the current public locale URL. Both pages listed alternate links for `en`, `es`, and `x-default`. The English image alt is “Pipesor — CI/CD incidents, diagnosed with evidence. Early-stage prototype. Demo data.” The Spanish alt is “Pipesor — Incidentes CI/CD, diagnosticados con evidencias. Prototipo en desarrollo. Datos de demostración.”

## Field-data requests

- Anonymous PSI mobile request to `https://www.googleapis.com/pagespeedonline/v5/runPagespeed` for the EN origin: HTTP 429, `Quota exceeded for quota metric 'Queries' and limit 'Queries per day'` for `pagespeedonline.googleapis.com`. No metrics returned.
- Anonymous CrUX URL query to `https://chromeuxreport.googleapis.com/v1/records:queryRecord` with the public URL: HTTP 403, `Method doesn't allow unregistered callers`. No record lookup occurred. No API key or credential was available for this request.

## Public query research

Four practical queries were submitted to the connected public web search tool on 2026-11-02. Search provider personalization/geography, query volume, and ranking position were not measured. Returned results included:

| Locale/query | Representative returned URLs and types | Intent indicated by page content |
| --- | --- | --- |
| EN — `GitHub Actions failed workflow logs diagnose troubleshoot` | [GitHub workflow run logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs) (official how-to); [GitHub workflow troubleshooting](https://docs.github.com/en/actions/how-tos/troubleshoot-workflows) (official troubleshooting guide) | Find a failed step and inspect/search its logs. |
| EN — `CI pipeline failure root cause analysis tools logs incidents` | [Datadog CI job failure analysis](https://docs.datadoghq.com/continuous_integration/guides/use_ci_jobs_failure_analysis/) (vendor product docs); [CICube root-cause analysis](https://cicube.io/github-actions-monitoring-docs/ai-root-cause-analysis/) (vendor feature page) | Evaluate failure classification/root-cause tooling that uses CI logs. |
| ES — `falló workflow GitHub Actions registros error solucionar problemas` | [Registros de GitHub Actions](https://docs.github.com/es/actions/how-tos/monitor-workflows/use-workflow-run-logs) (official localized how-to); [solución de problemas de workflows](https://docs.github.com/es/actions/how-tos/troubleshoot-workflows) (official localized troubleshooting guide) | Find the failed step and diagnose a workflow using its logs. |
| ES — `diagnosticar causa raíz fallos pipeline CI/CD logs herramientas` | [Azure Pipelines log review](https://learn.microsoft.com/es-es/azure/devops/pipelines/troubleshooting/review-logs) (official localized how-to); [Datadog CI Visibility](https://docs.datadoghq.com/es/continuous_integration/search/) (vendor product docs) | Review logs to diagnose pipeline errors or evaluate CI visibility tooling; examples include non-GitHub CI products. |

Mapping to current copy: the EN/ES hero and `#workflow` describe GitHub Actions workflow failure, log/job evidence, probable cause, confidence and human review. `#product` shows incident/review/history views; the uncertainty section visibly preserves inconclusive results. The FAQ states GitHub Actions is the supported integration scope and that the landing/prototype is not connected to GitHub. Do not infer permission to add adjacent CI integrations from the Spanish query result.

This result sample maps observed problem intent to current page sections only. It is not evidence of query demand, ranking, audience fit or locale priority. No tool connected to Search Console was present in the available integrations inventory.

## Access instructions verified against Google documentation

- No Search Console property is currently available. The owner must create the exact URL-prefix property `https://pipesor-landing.jhon-galvezchambi.workers.dev/` and complete an ownership-verification method offered by Google. A method that changes deployed page content/files requires separate approval. After verification, the owner can inspect `/` and `/es/` and share/export indexed URL Inspection fields without requesting indexing. No connector/account interface is available here, so granting agent access is not required. [Property setup](https://support.google.com/webmasters/answer/34592?hl=en) · [Ownership verification](https://support.google.com/webmasters/answer/9008080?hl=en) · [URL Inspection](https://support.google.com/webmasters/answer/9012289/).
- CrUX API setup in Google Cloud Console: select/create project, enable Chrome UX Report API, create API key under Credentials, query and share the response with the key redacted. [Google CrUX API codelab](https://developers.google.com/codelabs/chrome-web-vitals-psi-crux).
