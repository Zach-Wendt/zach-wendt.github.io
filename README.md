# zach-wendt.github.io

Personal site. Astro, static, deployed to GitHub Pages on push to `main`.

- Profile content (bio, projects, CV, certs): `src/data.ts`
- Posts: `src/content/writing/*.md` (`draft: true` hides a post in production)
- Homepage simulation: `src/components/Game.astro`

```sh
npm install
npm run dev     # http://localhost:4321
npm run build
```
