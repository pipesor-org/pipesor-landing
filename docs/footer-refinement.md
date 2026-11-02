# Footer composition and source-code licensing

The footer retains the approved composition and distinguishes live links from private or planned resources. The owner approved code-only MIT licensing for 2026 and confirmed Ramiro’s approval of the same terms. Publication of subsequent changes still requires approval.

## Composition

The [Taste Skill website footer](https://www.tasteskill.dev/) was inspected as a compositional reference: a compact identity and description, grouped useful links, people, and a quiet copyright baseline. Pipesor keeps its own original wordmark, Sora typography, blue accent, page margins, and light/dark tokens. Reference copy, artwork, code, and exact proportions were not copied.

The existing Taste direction remains **Dressed as something else**, seed **1822661545**. The component rule permits refining this section without another page-wide draw. No direction was redrawn and no imagery was added.

Idea: **The footer closes Pipesor's investigation story with the project and people behind it.** The practical interaction is ordinary accessible navigation, with a clear difference between live links and planned information.

- Official branding and a concise description form one identity block.
- The product section remains linked. The owner subsequently confirmed that `pipesor-landing` is private and approved showing its name as non-link text labeled "Private repository" / "Repositorio privado".
- `pipesor-docs` is labeled as planned documentation and has no invented URL, link, or keyboard stop.
- Jhon Galvez and Ramiro Guzman link to the GitHub profiles supplied by the owner.
- Privacy Policy and Terms of Use are separate, visibly pending text entries, not fake links or policy pages.
- The licensing notice is secondary to navigation. It identifies the MIT source-code license and explicitly reserves rights in the Pipesor name, logo, branding, visual identity, product screenshots and social media artwork. Third-party materials retain their own licenses.
- The copyright notice uses the approved 2026 year and the full names Jhon Alexander Galvez Chambi and Ramiro Alexander Guzman Chavez. The owner supplied the rights-holder names and confirmed contributor approval; contributor profile links alone are not treated as evidence of ownership.

Desktop uses a compact identity column and three aligned information groups. Phone layouts give the identity its own row, pair project/contributor information, and place policy placeholders together below. A flat surface change closes the page without borders, decorative cards, or a large empty logo panel. Existing hover/focus behavior is retained; no new animation or JavaScript is needed.

## Approved source-code license

The root [LICENSE](../LICENSE) grants MIT rights exclusively to the original source code, copyright 2026 Jhon Alexander Galvez Chambi and Ramiro Alexander Guzman Chavez. The owner approved these terms and confirmed Ramiro’s explicit approval. This records the supplied authorization rather than an independent authorship investigation.

The Pipesor name, logo, branding, visual identity, product screenshots and social media artwork remain All Rights Reserved. The scope includes exclusions for `public/branding/`, brand-derived icons, `src/assets/product/` and `public/social-card.png`, wherever the excluded material is used. Bundled font licenses and other third-party terms remain in effect. [Licensing scope](licensing.md) documents the exclusions and equivalent EN/ES notices; package metadata points to the scoped license file instead of implying a blanket asset grant.

The page retains its existing layout and uses equivalent localized notices. No policy pages or contact addresses are introduced by this licensing decision.

## Historical footer-only validation

The following records the earlier footer iteration before the approved licensing update. It does not certify the current license notices or current source; use the README verification workflow for later changes. Statements about pending ownership and the absence of a license below describe that earlier state.

- `bun run check`: zero errors, warnings, or hints.
- `bun run test`: three existing tests and commit-message checks pass.
- `bun run build`: both static locales and optimized images build successfully.
- Taste source lint: zero failures or warnings. `git diff --check` passes.
- Production-preview Chrome verification is limited to the affected footer on desktop and phone; prior full-site audit, Lighthouse, performance, and interaction results were not rerun.

Chrome DevTools MCP verified the final production build at EN 1440×900/light and ES 390×844/dark. Both have zero horizontal overflow or offscreen footer controls. Secondary text contrast measures 4.97:1 and 6.79:1 respectively. The supplied repository/profile URLs match exactly; planned documentation and policies are nonfocusable text. Keyboard order, visible focus, hover feedback, product-anchor clearance beneath the sticky header, and back-to-top behavior pass. No console warnings or errors were observed.

The desktop screenshot and both phone footer captures were opened. The reviewed hierarchy is identity → project/people → pending policies → licensing/copyright. No additional visual changes were necessary for the measured targets; this does not constitute owner visual acceptance. Evidence is saved in the ignored `.taste-skill/refine/after/footer-targeted.json` and `footer-*.jpg` files. A filesystem/package assertion also confirmed that no root `LICENSE` or package license field was added.

Real-device/screen-reader checks, a full responsive/theme matrix, and remote GitHub availability were not checked in this footer-only pass. The copyright holder, policies, documentation destination, and source-code license adoption still require confirmation. The owner subsequently approved these visual changes for pull request submission.

GitHub destinations are the exact owner-supplied URLs. The web fetch of the landing repository returned a cache miss, so this iteration does not claim to confirm remote availability, visibility, repository ownership, or contributor authorization.
