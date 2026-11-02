# Stage 3 — UX and conversion expectations

Date: 2026-11-02. Source branch: `feature/landing-availability`, based on merged main `2818691804840805d214218fd88ae4b60fac3b4b`. Source and reports are reviewed separately. The owner authorized committing and publishing the source branch and separately committing the reports on their branch. Source commit `28e4e1b` was pushed and PR #8 opened against `main`: https://github.com/pipesor-org/pipesor-landing/pull/8. It contains the two source files and two approved `docs/` updates, with no reports. The owner merged PR #8 as `a0293cffb5a16eb2fa1b7683e3b2b048e449c4a9` at `2026-11-02T08:32:04Z`. No merge, manual deployment, collection, trackers, policy changes or repository visibility changes were performed by the agent. The branch Quality check passed; its Cloudflare build failed. The merge’s independent production build and Quality run subsequently passed. Final anonymous HTTP checks returned 200 for EN/ES with the new localized CTAs and private-repository notes, no repository anchor and the submit button still disabled. The earlier branch build failure did not recur in the successful production build. These public response checks do not replace the local browser matrix with a post-release browser certification.

## Owner-approved scope

- Replace the closed-registration invitation with “Preview early access” / “Vista previa del acceso anticipado”, linking to the existing disabled form preview. Compact header labels are “Preview” / “Vista previa”, with the full approved label as the accessible name.
- Present `pipesor-landing` as non-link text labeled “Private repository” / “Repositorio privado”. Authenticated GitHub metadata confirmed the repository is private; its visibility is unchanged.
- Keep documentation marked planned and defer an official contact channel; no channel or public docs destination was supplied.
- Keep registration and tracking disabled. Approval for this interim copy does not establish future data-handling approvals or registration/analytics implementation authorization.

## Implementation

Only `src/i18n/content.ts` and `src/components/Landing.astro` change site behavior: labels explain the available action and the inaccessible external repository link is replaced by the existing planned-item footer pattern. The original anchor, form safety, prototype/demo notices, styling, screenshots and interactions are retained. `docs/landing-page-brief.md` and `docs/footer-refinement.md` record the updated owner-approved wording and repository state. No dependency, backend, endpoint, tracking, contact or policy content was added.

## Coordination and evidence

The engineering role reviewed the bilingual copy and produced [a review deck](STAGE_3_COPY_REVIEW.md), without source edits. The repository role recorded [decisions and prerequisites](STAGE_3_DECISIONS.md). The quality role owns the serialized Chrome DevTools baseline/final checks and [browser evidence](STAGE_3_VERIFICATION.md). The main agent owns implementation, integration and this status report. Optional companion headings in the review deck were not implemented because they were not part of the approved change.

## Status by item

| Item | Result | Remaining dependency |
| --- | --- | --- |
| LAND-003 | Private repository link replaced by approved EN/ES non-link restricted state | Built-preview verification passed; PR #8 is merged; production build passed and the final public EN/ES HTTP checks confirmed the new non-link state. |
| LAND-017 | Future registration facts and approval checklist recorded | Responsible entity, purpose, destination, retention/access/deletion and required disclosures remain unapproved. No legal sufficiency claim. |
| LAND-018 | Owner explicitly deferred official contact | Revisit when an approved monitored channel exists. |
| LAND-019 | Deferred; registration remains disabled as approved | LAND-017 facts, approved destination, explicit implementation scope and controlled verification precede any activation. LAND-007 remains deferred. |
| LAND-020 | Approved preview CTA implemented in both locales, brief aligned | Built-preview labels, responsive fit and keyboard anchor behavior passed; PR #8 is merged; production build passed and final public EN/ES HTTP checks confirmed the localized CTA. Representative-reader comprehension has not been tested and no conversion improvement is claimed. |
| LAND-021 | Source-based EN/ES review and concrete copy deck prepared | Broader owner sign-off on copy/audience and representative-reader testing or an explicit testing deferral remain pending. |
| LAND-023 | Deferred; owner approved keeping tracking disabled | Future event implementation requires a separate LAND-022 policy decision; registration completion also requires LAND-019. |
| LAND-030 | Owner approved keeping documentation planned and unlinked | Revisit only with an approved anonymously reachable destination. |

## Integration checks

- `bun run check`: passed, zero errors/warnings/hints.
- `bun run test` with standalone Lefthook on PATH: 25 tests plus commit-message cases passed.
- Approved-origin `bun run build`: passed; static EN/ES pages, sitemap and Google verification file retained.
- `git diff --check`: passed before final browser checks.
- No deployment configuration changed, so Wrangler dry run was not repeated.
- Chrome DevTools MCP final checks passed for EN/ES at 390, 768 and 1440 CSS pixels in light/dark themes (12 cases): correct visible/accessible CTA labels, private-repository non-link note, no document overflow, no console warnings/errors, and keyboard navigation to the preview. Synthetic format validation retained the disabled form with no submit/fetch/XHR/beacon observed. See the quality report for exact scope and screenshot evidence.
- Taste source lint: 0 FAIL / 0 WARN. Rendered Taste inspector could not launch a local Chrome executable; the remote MCP browser supplied targeted evidence. No full automated Taste pass is claimed.
- The main agent reviewed the source diff and representative final ES phone / EN desktop captures. QA stopped its preview and reset/closed its browser session.

Stage 3 is not fully complete. The interim presentation can be reviewed independently of future registration and analytics. Broader copy approval, any reader-test deferral and owner facts for registration remain distinct decisions. The owner-authorized merged release is tracked separately from those prerequisites.
