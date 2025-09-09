# Nadeem Ahmed — Portfolio (GitHub Pages)

Live site: https://nadeemahmed-dev.github.io

## How this site works
- Plain **HTML/CSS/JS** (no build step). Fast, free, and simple.
- Content lives in:
  - `index.html` — sections & copy
  - `assets/js/main.js` — Certifications & Projects arrays
  - `assets/css/style.css` — theme, layout, colors
  - `docs/Resume.pdf` — resume served directly

## Update content
- **Text**: edit sections in `index.html`.
- **Resume**: replace `/docs/Resume.pdf` or change the link in `index.html`.
- **Projects**: update the `PROJECTS` array in `assets/js/main.js`.
- **Certifications**:
  1. Place badge file in `/assets/img/certs/` (PNG/JPG).
  2. Add to `CERTS` in `assets/js/main.js` with `{ title, img, url, provider }`.
  3. Use short, lowercase, hyphenated filenames.

## Colors, fonts, sections
- Theme variables at top of `assets/css/style.css` (e.g., `--accent`, `--bg`).
- Duplicate a `<section>` to add new sections.
- System font stack for speed; add Google Fonts if you prefer.

## Custom domain (optional)
1. In **Settings → Pages**, enter your domain.
2. Create `CNAME` file in repo root (contains only your domain).
3. At your registrar, add a **CNAME** to `nadeemahmed-dev.github.io`.
4. Enable **Enforce HTTPS** once certificate is issued.

## Troubleshooting
- **404**: wait a minute; verify `index.html` exists in the repo root.
- **Broken images/CSS/JS**: check case-sensitive paths (e.g., `/assets/img/certs/`).
- **Cache**: hard refresh (Ctrl/Cmd+Shift+R) or add `?v=2` to asset URLs.
- **SSL**: custom domains may take a bit to issue certs; toggle Enforce HTTPS after.

## Local preview
- Python: `python3 -m http.server 8080` → http://localhost:8080  
- VS Code: Live Server → “Open with Live Server”.


