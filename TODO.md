# Project TODOs — EAH Webseite (from chat)

This file collects actionable tasks we discussed in the chat and a couple of extra items you asked to add.

- [x] Familiarize with Astro template

  - Read `README.md`, scan `package.json`, `astro.config.mjs`, `src/content/config.ts`, `src/layouts/BaseLayout.astro`, and `src/components/Global/*`.

- [x] Start dev server locally

  - Install deps and run: `npm install` then `npm run dev` (local port 4321).

- [x] Inspect "events" mechanism

  - Review `src/content/config.ts` (events schema), `src/Sections/EventList.astro`, `src/pages/events/index.astro`, and `src/pages/events/[slug].astro`.

- [x] Define structure for Allianzgebetswoche events

  - Decide series vs single-day entries. Create sample markdown in `src/content/events/` (e.g., `allianzgebetswoche-2026-day-1.md`). Consider a `series` field or `tags: ["allianzgebetswoche"]`.

- [ ] delete unnecessary pages

- [ ] "Customization" checklist (see README.md)

- [ ] Logo: gather & add to site

  - Place logo in `public/uploads/` or `src/assets/`; update `src/components/Global/Header.astro` and `Footer.astro`.

- [ ] Hero image: asset & placement

  - Add optimized hero image to `public/uploads/` and wire it into `src/Sections/HeroSection.astro` or `src/pages/index.astro`.

- [ ] Headline text

  - Define primary headline/subhead and update `HeroSection.astro` and `Seo.astro` props.

- [ ] Structure for Allianzgebetswoche events (schedule)

  - Create schedule layout or event-series page aggregating items with the Allianz tag/series.

- [ ] Plan remaining elements

  - Add initial `src/content/` files: events, siteInfo (e.g., `office-hours`), probably more.

- [ ] Accessibility, SEO & meta checks

  - Verify `Seo.astro` usage, alt text, ARIA, `astro.config.mjs` site URL, and sitemap generation.
  - Accessibility: confirm alt text and keyboard focus patterns for hero and navigation.

- [ ] Build & preview verification

  - Run `npm run build` and `npm run preview` to validate SSG output.

- [ ] Deployment plan

  - Choose Vercel/Netlify/GitHub Pages and set build/publish settings.

- [ ] Upgrade Tailwind from v3 to v4

  - use tailwind migration script
  - Plan dependency updates, adjust `tailwind.config.cjs` if breaking changes, and test styles.

- [ ] Fix CTA button issues (see "register for event" action)

  - Investigate the register button on event cards/pages; fix onClick, link target, or form submission behavior.

- [ ] Questions to clarify with customer

  - Confirm content priority from `EAH Webseite Planung.pdf`, logo/hero image sources and formats, registration/payment requirements, timezone/recurrence rules, and localization needs.

- [ ] Timezones and date display: confirm display format and timezone handling for event dates in the UI.

- [ ] Localization: will the site be multi-lingual? If so we should plan content file naming and routing.

- [ ] Update robots.txt to point to correct sitemap location.

- [ ] Update fonts and colors to align better with Evangelische Allianz in Deutschland e.V. branding.

  - fonts: OfficinaSerITCStd / OfficinaSansITCStd

---

Notes

- Use the Zod schemas in `src/content/config.ts` as the authoritative contract for frontmatter fields (image path prefixes like `/uploads/events/` are enforced).

- Prefer content-first updates in `src/content/` rather than hard-coding content in components.
