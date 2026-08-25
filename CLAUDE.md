# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn                 # install (yarn.lock is the committed lockfile; CI uses yarn)
yarn dev             # Vite dev server
yarn build           # tsc (typecheck only, noEmit) then vite build -> dist/
yarn preview         # serve the built dist/

yarn run eslint . --ext .js,.ts    # exactly what CI runs
```

There is no test suite in this repo — no test runner, no test files.

Note that the lint command CI runs only covers `.js`/`.ts`, so the `.tsx` component files are not actually linted. Use `--ext .js,.ts,.tsx` when you want to lint components locally.

A `package-lock.json` may be present but is untracked and unused; do not commit it or use npm to add dependencies.

## CI and deploy

- `.github/workflows/CI.yml` runs on every push: ESLint plus Lighthouse CI against the built site.
- `.lighthouserc.json` asserts **accessibility score of 1.0 as an error** (performance and best-practices are warnings at 0.9). Any markup change that costs an accessibility point breaks the build — keep `aria-label`/`title` on icon-only links and buttons, keep heading levels sequential, and keep `alt` text on images.
- `.github/workflows/Deploy.yml` deploys only on a **tag push**, publishing `dist/` to GitHub Pages. Pushing to a branch never deploys.
- Husky pre-commit runs `lint-staged`, which runs `prettier --write` over all staged files.

## Architecture

A static single-page personal site: React 18 + TypeScript + Vite, no router, no data layer, no backend.

- `src/main.tsx` mounts `App` into `#root` (throws if the element is missing). `src/App.tsx` renders `Header`, then `About`/`Experience`/`Projects` inside `<main>`, then `Footer`. Navigation is anchor links to the `id` on each section (`#about`, `#experience`, `#projects`) — there is no routing.
- **Repeating content lives in `src/content/`, not in JSX.** Positions, projects, skills, education, awards, certifications, and the nav links are typed data; the components map over it. Updating the site's information means editing `src/content/*.ts`. Prose that is not a repeating record — the About paragraphs, the header tagline — stays in JSX by choice.
- `src/content/types.ts` is the schema. `OrganizationName` is a union of the canonical names, so a misspelled employer fails `yarn build` rather than shipping. `CONTEXT.md` is the glossary those names come from — read it before inventing a term.
- Positions reference Projects by `ProjectId`, so a project's name and links are defined once even though Experience and Projects both talk about it.
- `Menu.tsx` holds the only component state in the app: a boolean toggling the mobile nav. Both it and `Header.tsx` render from `src/content/navigation.ts`, so nav changes are made once.

### Keeping the resume PDF in sync

`public/resume.pdf` is authored outside this repo and is **not** generated from `src/content/` — see `docs/adr/0001-resume-and-site-content-are-decoupled.md` for why. Nothing catches drift between them automatically, and they have drifted badly before. **When `resume.pdf` is replaced, check these against the new PDF:**

- [ ] Employer and organization names match `OrganizationName` in `src/content/types.ts`
- [ ] Position titles, start dates, and end dates in `src/content/experience.ts`
- [ ] Any figures that appear in both (team sizes, headcounts, reach)
- [ ] Languages and technologies in `src/content/skills.ts`
- [ ] Education, awards, and certifications in `src/content/credentials.ts`
- [ ] Project names and URLs in `src/content/projects.ts`
- [ ] **Every URL in the PDF still points somewhere you control.** The current PDF links `hawaiizoningatlas.com`, which has been typosquatted; the site's HTML deliberately links `zoningatlas.org/atlas` instead. Replacing the PDF is what fixes this.

The site is a **superset** of the resume: the resume omits things for space (the EVL research assistantship, coding styles), and those omissions are not retractions. Facts the PDF states win; facts it merely leaves out do not get deleted.

### Styling

- One global stylesheet, `src/styles.css`, imported by `main.tsx` (and redundantly by a couple of components). No CSS modules, no styled-components, no Tailwind.
- Class names follow a BEM-ish convention: `block__element--modifier` (e.g. `page__header__title--ltr`, `section--dark`). Reuse the existing `page`/`page__container`/`page__item` layout primitives rather than introducing new layout classes.
- Colors come from CSS custom properties declared on the `*, *::after, *::before` rule at the top of the file. Add new colors there rather than hard-coding hex values.
- The single responsive breakpoint is `@media screen and (min-width: 56.25em)` (900px), which matches the `media="(min-width: 900px)"` on the `<picture>`/`<source>` elements in `Projects.tsx`. Keep both in sync.

### Assets and external dependencies

- `vite.config.ts` sets `base: ""`, so the built site uses relative URLs and works under a GitHub Pages subpath. Reference everything in `public/` with a leading `./` (e.g. `./assets/hza.png`, `./resume.pdf`) — a leading `/` will break the deployed site.
- `assetsInclude: ["**/*.pdf"]` is what lets `public/resume.pdf` be treated as an asset.
- Font Awesome is loaded from a CDN `<script>` in `index.html`; icons are plain `<i className="fa-solid ...">` elements with no React package behind them. Icon class names are unchecked by the type system.
- Images in `public/assets/` are pre-sized (e.g. `mike_300x300.png`, `code_500x500.png`); add sized variants rather than scaling large images in CSS, since Lighthouse performance is asserted in CI.

### TypeScript

`tsconfig.json` is strict with `noUnusedLocals`, `noUnusedParameters`, and `noImplicitReturns`. Unused imports or variables fail `yarn build` even though the dev server tolerates them.
