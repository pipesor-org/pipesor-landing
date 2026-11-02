# Landing audit — executive summary

**Provisional evidence-based reference: 64.17/100. Weighted evidence-bearing coverage: 78.51%; coverage-adjusted credit: 50.80/100.** Partial source/code evidence counts toward coverage; this is not browser-test coverage, a Lighthouse result or certification. The [scoring ledger](FASE_3_PUNTUACIONES.md) explains every rubric decision.

Pipesor is a functioning static Astro/React bilingual prototype presentation on Cloudflare Workers Static Assets. Initial content and assets are served, the static build/check/dry run passed within the documented environment, and no known advisories were reported by the prior registry scan. It is **not an operational early-access acquisition flow**: registration is deliberately disabled pending owner decisions. No fixes or new measurements were performed while assembling the final report.

## Five most important issues

1. **Incorrect public metadata origin — confirmed (LAND-001).** Both locales publish canonical/hreflang/social-image URLs pointing to localhost, undermining public discovery/share signals. Actual Google index exclusion is not established.
2. **HTTP does not redirect to HTTPS — confirmed (LAND-002).** The sampled HTTP root serves the same full HTML with 200. No exploit or form-data leak was reproduced. A separate confirmed public defect is the repository footer link's anonymous 404 (LAND-003).
3. **The intended registration outcome is unavailable by design (LAND-017/019).** Resolve entity, privacy/data-handling and approved destination before an authorized implementation; keep collection disabled until then. This is not a P0 regression.
4. **Core browser/accessibility/responsive evidence is missing (LAND-004–007/033).** Chrome could not connect, so functional controls, focus/AT, zoom and all four viewport classes remain unverified. The low-contrast email boundary is a source-supported concern, not a browser-confirmed WCAG failure.
5. **Current Core Web Vitals are unknown (LAND-008/009).** No successful browser trace/PSI result; PSI returned quota exceeded. CLI TTFB and source precautions do not establish LCP/INP/CLS or actual user performance.

## Pending work and blockers

**33 distinct records: P0 0; P1 10; P2 16; P3 7.** They include confirmed defects, verification gaps, owner decisions and optional improvements, not 33 confirmed bugs. Every item has acceptance criteria, references, impact, effort, dependencies and confidence in [the full backlog](FASE_4_PENDIENTES.md) and [Excel-compatible CSV](BACKLOG_LANDING.csv).

Main blockers are approved registration/data-handling decisions, browser/AT/device access, complete quality-suite tooling (Lefthook), and relevant read-only Search Console/Cloudflare/CI access. Field data may legitimately be unavailable for a small site. Analytics remains unapproved; no tracker or cookie banner should be introduced automatically.

## Before acquisition spending and concrete next steps

First prepare reviewable metadata/transport corrections and close the public repository dead end; restore browser/tooling access and complete functional, responsive, accessibility and performance evidence. Obtain owner decisions for the real conversion before campaigns promise registration. Decide whether measurement is permitted; if not, disclose the inability to measure a funnel. No monetary ROI, conversion uplift or release date is supported by current evidence.

Follow [the four-stage roadmap](FASE_5_ROADMAP.md): critical corrections/verification, SEO/performance, UX/conversions, then quality/maintenance. Dependencies override stage numbering; start required owner/platform decisions early. After separately authorized changes, recheck public responses and runtime behavior, inspect search state after recrawl, and monitor only approved performance/conversion/error data. Optional sitemap, JSON-LD, cache refinement, license/documentation decisions and minor cleanup retain their documented priority; they do not justify invented claims or architecture migration.

See [AUDITORIA_LANDING.md](AUDITORIA_LANDING.md) for the consolidated evidence, scoring, all detailed records and roadmap. The code remains unchanged and no publication, registration or analytics activation was performed. Readiness is conditional, with the stated unverified areas still open.
