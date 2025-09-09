# Nadeem Ahmed — Portfolio (GitHub Pages)

Live site: https://nadeemahmed-dev.github.io

## How this site works
- Plain **HTML/CSS/JS** (no build step). Fast, free, and simple.
- Content lives in:
  - `index.html` — sections & copy (Projects section removed by design)
  - `assets/js/main.js` — Certifications array
  - `assets/css/style.css` — theme, layout, colors
  - `docs/Resume.pdf` — resume (download only)

## Update content
- **Text**: edit sections in `index.html`.
- **Resume**: replace `/docs/Resume.pdf` (the page links to it; no embedded preview).
- **Certifications**:
  1. Place badge file in `/assets/img/certs/` (PNG/JPG).
  2. Add to `CERTS` in `assets/js/main.js` with `{ title, img, url, provider }`.

## Re-adding Projects (optional)
- Add a `<section id="projects">` in `index.html`.
- In `assets/js/main.js`, add a `PROJECTS` array and render it into a container with `id="projectGrid"`.

## Local preview
- Python: `python3 -m http.server 8080` → http://localhost:8080  
- VS Code: Live Server → “Open with Live Server”.

## Troubleshooting
- **404**: verify `index.html` in repo root; wait 1–2 minutes after pushing.
- **Broken images/CSS/JS**: check case-sensitive paths (e.g., `/assets/img/certs/`).
- **Cache**: hard refresh (Ctrl/Cmd+Shift+R) or append `?v=2` to asset URLs.


