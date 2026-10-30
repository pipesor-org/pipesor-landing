# Focused visual and UX refinement

The later [footer refinement](footer-refinement.md) supersedes this document's footer placeholder composition and records the source-code license proposal. Other verification findings remain as recorded below.

This iteration responds to the latest design feedback. It reuses the [previous broad verification](refinement-verification.md); it does not repeat the full-site audit, Lighthouse runs, performance traces, or viewport matrix. The user's latest direction permits more expressive composition, typography, and motion while retaining brand integrity, accessibility, and factual accuracy.

## Design decision

Taste direction: **Dressed as something else**, seed **1822661545**, borrowing the pace and hierarchy of an editorial investigation. The current sheet is in [direction.json](../.taste-skill/direction.json). Brand palette and Sora are retained. No direction slots were redrawn; the composition is adapted to the existing sections and real screenshots rather than rebuilding the site around the dealt fashion imagery or unsupported live product UI.

Idea: **Pipesor's incident evidence becomes an investigation the visitor follows toward human judgment.** The interactive workflow explains that investigation; the existing native screenshot gallery and the new lightbox let the visitor examine its real evidence. All imagery remains supplied Pipesor captures, with no stock, generated artwork, or external image credits.

## Changes

- **Hierarchy and rhythm:** the hero uses an 88px desktop display scale, shorter copy, line entrances, and a more prominent blue-toned product stage. Supporting information is integrated into the relevant explanation or caption. Removed the detached audience strip, isolated incident identifier, repeated Insights disclaimer, and standalone validation note.
- **Official branding:** the supplied light/dark SVG lockups are unchanged and byte-identical to the product assets. `Brand.astro` frames their oversized outer canvas with a proportional SVG viewport. It does not rebuild the symbol or typeset a replacement wordmark. Header controls use clear selection underlines and functional hover/focus feedback.
- **Workflow:** a connected, native disclosure sequence replaces the four static columns. The open diagnosis stage explains probable-cause and inconclusive outcomes. Human review retains the explanation that remediation records human work, and operational actions remain disconnected in the prototype.
- **Images:** screenshot buttons open one native modal dialog. There are no image links to new tabs or decorative hover outlines. Captions and demo/interface-language disclosures sit below the capture. The dialog provides fit and actual-size views, native panning, Escape/close/backdrop dismissal, and focus return. Focus outlines remain for accessibility.
- **Early access:** feedback starts on blur, then updates while correcting the value. Required/invalid messages use native email validity, `aria-invalid`, associated descriptions, and a polite status region. The format-check button is removed. Submission remains disabled, with no endpoint, email field name, email storage, or sending behavior.
- **Footer:** a compact proportional wordmark sits alongside clearly pending Legal, Licensing, and Contact information. These are requested placeholders, not official policies, a declared project license, or invented contact details. Existing font license files are unchanged.

No dependencies, backend, tracking, hosting configuration, or product functionality were added. Existing EN/ES routes, theme persistence, language anchors, native gallery selection, and prototype disclosures are retained. Motion respects reduced preferences and never gates reading. Without JavaScript, screenshots remain readable, gallery/workflow disclosures work, and registration stays disabled; enlargement and progressive feedback require JavaScript.

## Targeted verification

- `bun run check`: 0 errors, warnings, or hints.
- `bun run test`: 3 tests plus the existing commit-message checks pass. The existing form safety tests now also verify the initial quiet status region, its accessible association, and removal of the extra validation button.
- Final `bun run build`: both static routes and responsive images build successfully.
- Taste source lint: 0 FAIL, 0 WARN. `git diff --check` passes.
- Context7: MDN native-dialog guidance was consulted for modal focus, inert background, and Escape behavior.
- Chrome DevTools MCP checked the production preview, focusing on EN desktop at 1440px/light and ES phone at 390px/dark, plus a narrow 320px regression check.
- Screenshot buttons open the correct capture; initial focus lands on Close. Background controls cannot take focus. Escape, Close, and an outside-backdrop click restore the opener. Native keyboard navigation stays within the modal. Fit mode has no image overflow; actual-size mode pans in both axes. The stable scrollbar gutter prevents background movement.
- No image new-tab links remain, and pointer hover does not add an outline. Focus indication is retained. The official logo viewport preserves its aspect ratio.
- Form feedback is initially quiet. First invalid/empty blur produces the localized message and invalid state; correction immediately produces safe valid-format feedback. Enter does not send, the submit button stays disabled, and only the theme preference is stored. No submission/XHR/fetch/ping request was observed.
- Workflow Enter behavior opens the selected explanation and closes its sibling. Footer statuses are visibly pending. Reduced-motion checks settle with no active animation and automatic scrolling. No console errors were observed.

The phone check caught a Spanish heading wrapping to three lines at 320px. Removing its first-line period is the copy-first correction. The final narrow recheck confirms two lines, a 283px first line inside 288px, and no overflow. The final build also removes unnecessary thin dividers and makes the image viewer's letterbox follow the page theme, while preserving the screenshot itself; modal fit remains free of overflow.

Targeted evidence is saved under the existing ignored `.taste-skill/refine/after/iteration-*` paths. The complete standalone Taste inspector and earlier audit matrix were not rerun, following the requested focused verification scope. Previous Lighthouse and performance figures remain historical results, not measurements of this iteration.

## Visual critique

ROUND 1

Seen in one second: a confident diagnosis statement and authentic product evidence.

Idea (one sentence): the product's evidence is presented as a readable investigation ending in human judgment.

Live thing: the connected workflow disclosures, with genuine screenshots available for closer inspection in a keyboard-accessible viewer.

Layout words by section: hero=editorial title and stage / workflow=connected investigation / product=index and screen / uncertainty=close-up / memory=split / access=invitation and form / footer=identity and pending information.

Scores: design 8 · usability 8.5 · creativity 7 · content 8.5 → overall 8.0.

Caps applied: creativity remains at 7 because editorial software storytelling is an established approach. This is a focused self-critique, not an independent jury score or a complete-page meter result.

Top three problems (most visible first), each with its screenshot and fix:

1. Initial desktop hero: the official SVG's large canvas weakened the visible wordmark. Frame the original asset proportionally and establish a stronger display scale.
2. Initial phone image viewer: white letterboxing dominated the dark screen. Use the page ground around the unchanged capture; provide actual-size panning for detail.
3. Narrow Spanish hero: punctuation pushed the first authored line over its width. Shorten the line before reducing the type scale.

Remaining limits: dense desktop captures still need actual-size viewing on phones; no genuine native-phone or dark product captures were supplied. Other browser engines, real hardware, screen readers, and full WCAG conformance were not tested. Registration remains disabled pending privacy/data-handling approval. Legal, project licensing, and contact placeholders require confirmed information before being replaced.

At the time of this verification, no commit, push, or deployment had been performed. The owner subsequently authorized committing the approved iterations, pushing a review branch, and opening a pull request. Production deployment remains unapproved.
