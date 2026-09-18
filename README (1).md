# VOC Research World V5

V5 is the next architectural step for VOC Research World.

## What changed
- Author profile architecture
- Structured article records
- Article detail pages with references
- Research-project records and detail pages
- Scientific diagram support (SVG)
- Dedicated submission page prepared for a future backend
- Shared JavaScript data layer designed to be replaceable by an API/CMS later
- Responsive navigation and layout
- GitHub Pages compatible: no build step required

## Important
V5 is still a static GitHub Pages site. The submission form is a preparation interface only; it does not publish to a central database.

## Future backend path
1. Keep the front-end structure.
2. Move article/author/project data from `assets/js/data.js` to an API or CMS.
3. Add authentication and editorial roles.
4. Add database storage, media storage and moderation.
5. Add DOI/reference metadata and version history.
