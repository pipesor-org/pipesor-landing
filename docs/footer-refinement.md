# Footer composition and source-code license proposal

This is a footer-only iteration that reuses the existing landing-page verification. The owner approved the implementation and authorized committing, pushing a review branch, and opening a pull request. Production deployment and license adoption remain unapproved.

## Composition

The [Taste Skill website footer](https://www.tasteskill.dev/) was inspected as a compositional reference: a compact identity and description, grouped useful links, people, and a quiet copyright baseline. Pipesor keeps its own original wordmark, Sora typography, blue accent, page margins, and light/dark tokens. Reference copy, artwork, code, and exact proportions were not copied.

The existing Taste direction remains **Dressed as something else**, seed **1822661545**. The component rule permits refining this section without another page-wide draw. No direction was redrawn and no imagery was added.

Idea: **The footer closes Pipesor's investigation story with the project and people behind it.** The practical interaction is ordinary accessible navigation, with a clear difference between live links and planned information.

- Official branding and a concise description form one identity block.
- Project links include the product section and the exact supplied `pipesor-landing` repository URL.
- `pipesor-docs` is labeled as planned documentation and has no invented URL, link, or keyboard stop.
- Jhon Galvez and Ramiro Guzman link to the GitHub profiles supplied by the owner.
- Privacy Policy and Terms of Use are separate, visibly pending text entries, not fake links or policy pages.
- The licensing notice is secondary to navigation. It says approval is pending and excludes branding and product screenshots from the proposal.
- The copyright year is rendered at build time. Its holder remains an explicit placeholder until rights ownership is confirmed; contributor credit is not treated as proof of copyright ownership.

Desktop uses a compact identity column and three aligned information groups. Phone layouts give the identity its own row, pair project/contributor information, and place policy placeholders together below. A flat surface change closes the page without borders, decorative cards, or a large empty logo panel. Existing hover/focus behavior is retained; no new animation or JavaScript is needed.

## MIT evaluation: proposed, not adopted

**Assessment:** MIT is a reasonable candidate if the confirmed rights holders want broad, low-friction source-code reuse, including modification, distribution, and commercial/proprietary derivatives. Copies or substantial portions must retain the copyright and permission notices; the text includes warranty/liability disclaimers. It does not require downstream modifications to be published, and it contains no express patent-grant clause. These are reasons to confirm the intended reuse policy before choosing it. See the [official MIT text](https://opensource.org/license/mit).

Repository hosting and listing someone as a contributor do not themselves establish permission to relicense their work. The rights holder for the code and authorization covering each contributor's work must be confirmed. [GitHub's Choose a License guidance](https://choosealicense.com/no-permission/) explains why an absent license is not a general reuse grant.

Before any adoption, confirm:

1. Who owns or is authorized to license the repository's original source code.
2. Jhon Galvez's and Ramiro Guzman's approval, and permission for any other relevant contributions.
3. The intended code-only scope and the correct copyright notice.
4. Preservation of third-party license terms and explicit exclusions for supplied non-code assets.

The proposed software license must exclude `public/branding/`, `src/assets/product/`, brand-derived icons, and social artwork unless separately authorized. Bundled font license notices remain unchanged. Any future code license must clearly document those exclusions rather than implying one blanket license for the repository.

**Current state:** no `LICENSE` file or package license declaration was added. The site does not say MIT licensed or present MIT as an active project license. The proposal is documented here only. This document grants no license over the code, brand assets, or product captures.

## Validation scope

- `bun run check`: zero errors, warnings, or hints.
- `bun run test`: three existing tests and commit-message checks pass.
- `bun run build`: both static locales and optimized images build successfully.
- Taste source lint: zero failures or warnings. `git diff --check` passes.
- Production-preview Chrome verification is limited to the affected footer on desktop and phone; prior full-site audit, Lighthouse, performance, and interaction results were not rerun.

Chrome DevTools MCP verified the final production build at EN 1440×900/light and ES 390×844/dark. Both have zero horizontal overflow or offscreen footer controls. Secondary text contrast measures 4.97:1 and 6.79:1 respectively. The supplied repository/profile URLs match exactly; planned documentation and policies are nonfocusable text. Keyboard order, visible focus, hover feedback, product-anchor clearance beneath the sticky header, and back-to-top behavior pass. No console warnings or errors were observed.

The desktop screenshot and both phone footer captures were opened. The reviewed hierarchy is identity → project/people → pending policies → licensing/copyright. No additional visual changes were necessary for the measured targets; this does not constitute owner visual acceptance. Evidence is saved in the ignored `.taste-skill/refine/after/footer-targeted.json` and `footer-*.jpg` files. A filesystem/package assertion also confirmed that no root `LICENSE` or package license field was added.

Real-device/screen-reader checks, a full responsive/theme matrix, and remote GitHub availability were not checked in this footer-only pass. The copyright holder, policies, documentation destination, and source-code license adoption still require confirmation. The owner subsequently approved these visual changes for pull request submission.

GitHub destinations are the exact owner-supplied URLs. The web fetch of the landing repository returned a cache miss, so this iteration does not claim to confirm remote availability, visibility, repository ownership, or contributor authorization.
