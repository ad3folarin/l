# DTC creative portfolio

An original responsive one-page portfolio built with Vite, semantic HTML, CSS, and JavaScript. No UI framework, external fonts, stock photos, or animation dependencies.

## Run

Use Node.js 20.19+ or 22.12+ (validated with Node 24).

```sh
npm ci --cache /tmp/npm-cache
npm run dev
```

`npm run build` creates `dist/`. `npm run preview` serves that production build. Deploy the contents of `dist/` to any static host.

## Personalize

- `src/content.js`: name, introduction name, email, LinkedIn, portfolio folder, intro video, confirmed tools, all six selected videos, eight format samples, editable concept services, and Moriel’s Oasis project facts.
- Put videos in `public/videos/` and set `src` to `/videos/your-file.mp4`, or use a direct HTTPS media URL. The video player supports direct browser-playable files, not YouTube or Vimeo page URLs. Video bytes are only requested when a visitor opens a sample. Nothing autoplays.
- Each video has a `captions` field for a WebVTT file and a `transcript` field. Add accurate captions and transcripts for spoken content.
- `index.html`: section copy, page title, SEO description, Open Graph tags and image URL. The name in text metadata updates from the profile at runtime, but replace the static placeholders too for social crawlers that do not execute JavaScript.
- `src/style.css`: colors, typography, layouts, and concept illustrations.

All illustrated products and the storefront are original CSS placeholders, not actual portfolio work, brands, or a screenshot of Moriel’s Oasis. Replace them with your supplied artwork/posters when available. No external logo licenses are needed. Higgsfield is the only confirmed tool; remove brackets and confirm others before publishing. The eight formats are offered directions, not a claim of completed client work.

Contact and portfolio controls open an explanatory dialog until real destinations are supplied; with actual content they become links. The provided Moriel’s Oasis URL is active. Results remain explicitly pending verification; add only a verified metric with timeframe and source, or remove that fact row. No testimonials or performance results have been invented. No structured data is emitted while identity is unknown.

## Accessibility and behavior

Anchor navigation, visible focus states, skip link, native modal with Escape dismissal and focus restoration, user-initiated video playback, transcript disclosures, reserved poster dimensions, and reduced-motion support are included. Missing media opens a clearly named placeholder rather than a broken player. Below-the-fold placeholders require no image or video downloads.

## Before publishing

Supply your identity, links, videos, captions, posters, confirmed tool list, Open Graph image, and specific project contribution. Review all service claims and replace or remove bracketed placeholders. Preserve the distinction between actual work, recreations, and concept samples. No sales or conversion outcomes are claimed.
