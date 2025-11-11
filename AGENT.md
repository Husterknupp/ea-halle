# Quick orientation for AI coding agents

This is an Astro-based static site starter tailored for church websites. Keep instructions short and action-oriented; reference these files and patterns when making edits.

- Framework: Astro (see `package.json`) with Tailwind CSS (`@astrojs/tailwind` in `astro.config.mjs`). Use Node 18+. Dev server: `npm run dev` (default port noted in README: <http://localhost:4321>).
- Content model: Astro Content Collections defined in `src/content/config.ts`. Collections: `staff`, `events`, `ministries`, `siteInfo`. Follow Zod schemas in that file exactly (image fields expect `/uploads/...` prefixes).
- Content location: `src/content/*` — add Markdown files with frontmatter matching the schemas. Example patterns are in `README.md` and enforced by `src/content/config.ts` (e.g., staff images must start with `/uploads/staff/`). Use `draft: true` to hide drafts.

- Routing & pages: Pages live in `src/pages/`. Dynamic routes use Astro params (e.g. `src/pages/events/[slug].astro`, `src/pages/ministries/[slug].astro`). When creating new content, ensure generated slugs match the filename or frontmatter `slug` field.

- Layouts and SEO: The main layout is `src/layouts/BaseLayout.astro`. SEO helper/component: `src/components/UI/Seo.astro`. Use the layout props (title, description, image, type, canonicalUrl) when generating pages.

- Global components: header, footer, navigation live under `src/components/Global/` (see `Header.astro`, `Footer.astro`, `Navigation.astro`). Footer demonstrates `getCollection("siteInfo")` and rendering frontmatter content (e.g., `office-hours` item) — prefer using `getCollection` when injecting content-driven blocks.

- Styling: Tailwind utilities + `src/assets/styles/global.css`. Keep style changes small and prefer adding Tailwind classes over custom CSS unless necessary; theme config in `tailwind.config.cjs`.

- Images: Stored under `public/uploads/*` (staff/events/ministries). Paths in frontmatter must match these prefixes; many components rely on that convention for fallbacks and image optimization.

- Build & deploy commands (from `package.json`):

  - `npm run dev` — local dev server
  - `npm run build` — static build
  - `npm run preview` — preview built site

- Error handling and assumptions the code makes:

  - Some pages/components assume collections exist; `getCollection` calls may throw during first setup — components often catch this (see `Footer.astro`). Keep that pattern if adding similar features.
  - Zod schemas are authoritative — changes to frontmatter must reflect schema updates in `src/content/config.ts`.

- When editing content-driven pages, prefer updating Markdown in `src/content/` rather than hard-coding content in components.

- Quick examples to reference in edits:

  - Add a staff member: create `src/content/staff/jane-doe.md` with frontmatter fields (name, title, image `/uploads/staff/jane-doe.webp`, order, draft).
  - Office hours: create or edit `src/content/siteInfo/office-hours.md` (Footer looks for id `office-hours`).

- Conventions to preserve:
  - Image path prefixes (e.g., `/uploads/staff/`) — used by Zod and UI components.
  - `draft: true/false` frontmatter for publishing control.
  - Keep site URL in `astro.config.mjs` accurate for canonical/meta tags (used by `Seo.astro`).

If you modify content schemas (`src/content/config.ts`), also update any code that relies on those fields (layouts, lists, `getCollection` usages). After substantive changes, run `npm run build` and `npm run preview` to validate the SSG output.

If anything in this file is unclear or you'd like more examples (page templates, component contracts, or common refactors), tell me which area and I will expand the instructions.
