# Stage 3 — owner decisions and registration prerequisites

Read against the approved landing brief, current backlog and existing static preview on 2026-11-02; updated with the owner's Stage 3 decisions. This records decisions and prerequisites; it is not a legal review or approval to enable registration.

## Current boundaries

- The form is client-side only, uses `method="dialog"`, prevents submission, has a disabled submit button and does not give the email input a `name` or submission destination. It can display format validation, but valid formatting does not send or store anything.
- The approved brief says registration remains disabled until the responsible entity, data handling, required privacy disclosures and submission destination are approved. It prohibits integrating an external form service or inventing backend behavior.
- Owner approved changing the interim CTA to “Preview early access” / “Vista previa del acceso anticipado”, still linked to the disabled form preview. Registration and tracking remain disabled.
- Owner approved showing the private landing repository as non-link text labeled “Private repository” / “Repositorio privado”, while documentation remains marked planned. The organization repository list contained no `pipesor-docs` repository; do not invent a docs URL or make a private repository public.
- Owner explicitly deferred contact: no official channel is approved yet. The approved brief also says the legal entity, Privacy Policy and Terms of Service are not finalized. Do not invent an address, identity, policy or response commitment.

## Decisions still needed

| Backlog item | Fact or decision required | Safe current state / next step |
| --- | --- | --- |
| LAND-003 | A public project destination, if the owner wants one | Owner approved an accurate non-link private-repository label in both locales. No anonymous dead-end link remains necessary; no public destination was supplied. |
| LAND-017 | Responsible entity; registration purpose; data flow and destination; required disclosures; retention, access and deletion process; applicable expert/privacy review | These future registration facts remain unapproved. Owner must supply and approve them, with appropriate expert validation for intended jurisdictions. No generic policy template can settle legal applicability. Keep collection disabled. |
| LAND-018 | None for current stage; official contact destination may be reconsidered when available | Owner explicitly deferred contact. Keep it absent; do not substitute contributor profiles or create an address. |
| LAND-019 | LAND-017 approvals, approved destination, implementation authorization and server-side handling/test plan | Do not implement or enable registration yet. When prerequisites are met and separately authorized, validate with mock/staging submissions only, including server validation, duplicates, errors/retry and accessible EN/ES states. Production activation remains separately approved. |
| LAND-020 | None for interim CTA wording | Owner approved “Preview early access” / “Vista previa del acceso anticipado” while registration stays unavailable. A conversion benefit has not been measured. |
| LAND-021 | Owner review of full bilingual copy, audience and product terminology; optionally representative-reader comprehension evidence | The CTA decision is resolved, but full copy/audience review remains open. Preserve prototype/demo-data, GitHub Actions scope and human-review statements. Record comprehension testing as pending unless actual readers participate. |
| LAND-023 | No current analytics approval; revisit only if owner changes tracking decision under LAND-022 | Owner approved keeping tracking disabled. Record LAND-023 as deferred; do not add events, scripts, pixels or a click-as-registration conversion. |
| LAND-030 | None for current stage; publishable docs destination may be reconsidered when available | Owner approved keeping documentation marked planned. Keep “Documentation planned” / “Documentación prevista” as non-link text until a real destination is approved and anonymously reachable. |

## Approval order

1. Implement the approved interim CTA and private-repository label in EN/ES; keep docs/contact deferred as approved.
2. Keep registration disabled unless the complete LAND-017 fact set and LAND-019 implementation scope are explicitly approved.
3. Decide analytics separately under LAND-022 before considering LAND-023. Approval to instrument does not create an approved registration flow.
4. Complete the still-pending owner review of the full EN/ES copy and audience. Test comprehension with representative readers before claiming that wording improves conversion.

These boundaries preserve the current no-collection preview. Approval to edit source does not, by itself, approve public publication, data collection, analytics or activation.
