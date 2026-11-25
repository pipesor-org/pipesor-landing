# Ink on paper redesign

This redesign brings the landing back in line with the product as it stands on 24 November 2026. It supersedes the visual and copy decisions of the [focused refinement](focused-refinement.md) and the [footer refinement](footer-refinement.md); their licensing scope still applies.

## Why

The previous page described the prototype of late October: local demo fixtures, no accounts or backend, a diagnosis "with confidence", an "inconclusive" outcome and a disabled early-access form. Since then `pipesor-frontend` integrated GitHub sign-in, the services, lifecycle steps and diagnosis review, removed its fixtures, published privacy and terms pages, and adopted the "Ink on paper" design system (Geist, ink primary actions, accent for interaction only). The dashboard shows no confidence score; reviews are Confirmed, Corrected or Rejected. The brief says the repository wins when they disagree.

## Owner decisions (24 November 2026)

- The product is open: the primary action is **Sign in with GitHub**, linking to the dashboard at `https://dashboard.bravepond-f9f279f5.westus3.azurecontainerapps.io/login`. The early-access form is removed.
- The footer links the dashboard's public Privacy policy and Terms of use, and its How it works, AI transparency and Security pages.
- The landing adopts "Ink on paper" and may be bold to win attention.
- New screenshots are taken from the dashboard.
- The thesis evaluation figures, with their caveats, may appear on the landing (confirmed on 25 November 2026).

## Sources of every claim

All product statements mirror the dashboard's public About pages (`pipesor-frontend` `src/shared/i18n/locales/{en,es}/about.ts`), which describe the implemented system. The evaluation figures (17 of 20, 64–95 % interval, 33 s median, 4 of 20 actionable, 10 scenarios, one reviewer per case) are quoted with the caveats that the AI transparency page already publishes. Run, incident and log values come from incidents INC-1084 and INC-1083 of the public `Chaomeum/pipesor-demo` repository; its host and password are demo values.

## Direction

Taste skill direction **One motif**, seed `1025539266`, with the brand's palette and type kept; the sheet is in [direction.json](../.taste-skill/direction.json). Inspector output is kept locally under the ignored `.taste-skill/inspect/ink-*` folders. Idea: *on this page, the redaction bar Pipesor puts over a secret before any AI reads the log becomes the motif*: the hero's giant block, the bullets, the buttons, the protection band, the time bar and the `[redacted]` token in running text.

The live thing is the hero's replay of run #45538080390: the real log streams in, the host and password are masked, the probable cause appears and a person confirms it, in under five seconds, with a Replay button. The server renders the finished state, so the page reads completely without script, and assistive technology only ever receives the masked text.

Adjustments to the dealt sheet, with reasons:

- **Motif colour:** ink, not the accent. In Ink on paper the accent marks interaction only, and a redaction is black. In dark mode the two large fields (hero block, protection band) use a raised dark field with light bars instead of an inverted white block.
- **Showcase:** the "square plate" became a full-width tone stage, because the pictures are wide interface captures that are illegible in a half-width square.
- **Features:** the "sentences with switches" blueprint would have implied settings the product does not have; the bands keep the sentence-and-consequence form without fake toggles.
- **CTA:** no form exists, so the closing sentence is followed by one large ink action instead of an inline field.
- **Footer:** the official symbol is enlarged unmodified instead of rebuilding the wordmark from blocks, which the brand rules forbid.

## Microinteractions

Added after the first review, all with reduced-motion fallbacks:

- A reading-progress bar in ink under the header (the motif filling as the reader scrolls).
- The navigation marks the section in view (`aria-current="location"`) and underlines links on hover.
- The header gains a subtle elevation once content scrolls under it; on phones it steps aside while reading down and returns on scroll up or focus (not under reduced motion).
- A floating back-to-top button appears after the first screen and leaves when the footer, which has its own, arrives.
- The showcase tab indicator slides to the chosen tab; questions open and close with their height where `interpolate-size` is supported.
- Theme changes cross-fade with the View Transitions API. Cross-document transitions for the language switch were tried and dropped: Chrome logged an aborted-transition error.
- Screenshots show an "Enlarge screenshot" chip on hover or focus, and always on touch screens.
- The footer closes with one large official lockup and the description, replacing the enlarged symbol that repeated the small lockup below it.

## Assets

- Screenshots in `src/assets/product/`: five views (`workspace`, `evidence`, `resolution`, `corrected`, `history`) × EN/ES × light/dark, cropped at 2× from the deployed dashboard with only `Chaomeum/pipesor-demo` data. The profile avatar and other repositories are excluded. The light or dark capture follows the page theme.
- Fonts: Geist and Geist Mono variable WOFF2 copied from `pipesor-frontend`, licence in `public/licenses/Geist-OFL.txt`. `@fontsource/sora` and `@fontsource/jetbrains-mono` were removed.
- `public/social-card.png` was regenerated in the new style.
- GitHub mark in the sign-in actions: `mark-github` from `@primer/octicons` (GitHub's own icon set, MIT code), inlined at build time by `src/components/GitHubMark.astro`. It follows [GitHub's logo guidelines](https://brand.github.com/foundations/logo) for showing an integration: monochrome (the button's text colour, black or white), unmodified, smaller than the Pipesor logo, and with no implied endorsement (the FAQ states there is none). Below 480 px the header action shows only the mark; its accessible name stays "Sign in with GitHub".

## Verification (24 November 2026)

- `bun run check`, `bun run test` and `SITE_URL=… bun run build` pass. The tests cover EN/ES structure parity, banned stale claims, outbound links and the replay's server-rendered masked state.
- Taste lint: 0 FAIL, 0 WARN (brand exceptions for Geist Mono and the dialog shadow are commented in place). Taste inspector on the production preview, EN and ES at 1440, 768 and 390 px: 0 FAIL; two warnings kept on purpose: *card rows* (the results board and the three ordered start steps) and *no footage* (the replay is the moving picture; no honest clip exists).
- Lighthouse (navigation): Accessibility, Best practices and SEO 100 for EN (mobile) and ES (desktop), no failed audits after fixing the language links' accessible names. After the microinteractions, a dark-mode mobile navigation audit flagged two replay labels at 4.04:1, measured while the result was still fading in; a snapshot audit after the replay finished scores 100 (the final pair, #a2a7af on #1f2126, is about 6.6:1).
- Chrome DevTools against the production preview: EN and ES, light and dark, 1440, 768, 390 and 360 px; no horizontal overflow; headings at most two lines; replay sequence and Replay button; showcase tabs with arrow keys and visible focus; no console errors (Chrome reports an advisory "lazy images without dimensions" issue although every image has `width` and `height`). Locally measured LCP is the headline at about 0.4 s.
- Not verified: Workers routing and `_headers` with `wrangler dev`, real 4G performance, and the page on a deployed origin.

## Open items

- The dashboard origin is the Azure development environment; update `links` in `src/i18n/content.ts` if it changes.
- The demo screenshots reflect INC-1083 and INC-1084 as of 25 November 2026 (UTC); retake them if the dashboard UI changes.
