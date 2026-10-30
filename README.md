# Fepru

**Financial & Audit platform. Your data stays home.**

Fepru is an on-premise, privacy-first AI audit platform for regulated finance. This repository contains the public marketing website: a lightweight, multi-page front-end built with plain HTML, CSS and JavaScript. There is no framework and no build step.

> **Status:** The product is **soon to be launched**. The Services page shows a launch notice and a notify-me form instead of a feature list.

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero with the brand video, core principles, links to the other pages |
| About us | `about.html` | Who Fepru is, what we believe, where we’re going |
| What we solve | `problems.html` | The four audit problems Fepru addresses and our answer to each |
| Services | `services.html` | “Soon to be launched” and the notify-me form |

## Project structure

```
fepru/
├── index.html
├── about.html
├── problems.html
├── services.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── logo.png
│   ├── favicon.png
│   ├── hero.mp4
│   └── hero-poster.jpg
└── README.md
```

## Getting started

No installation is required.

**Option 1: open directly**

Open `index.html` in any modern browser.

**Option 2: local server**

```bash
cd fepru
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploying to GitHub Pages

1. Push the contents of this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select your main branch and the `/ (root)` folder.
4. Save. The site will be live at the URL GitHub shows.

## Tech stack

- **HTML5** with semantic markup and a shared header and footer on every page
- **CSS3** with custom properties, Grid and Flexbox, responsive layouts and a light/dark theme
- **Vanilla JavaScript** for the theme toggle, mobile menu, scroll-reveal animations, video play/pause control and form validation
- **Google Fonts**: Archivo and Cormorant Garamond, loaded from the CDN with system-font fallbacks

## Design system

The palette comes from the Fepru brand colours.

| Name | Hex | Used for |
|------|-----|----------|
| Ice Silver | `#DDE3E8` | Light background, dark-theme text |
| Deep Aubergine | `#3A0F34` | Light-theme text, dark background |
| Marigold | `#EAAA00` | Accents, hover states, markers |

Colours, fonts and spacing are defined as CSS custom properties at the top of `css/style.css`. Dark mode follows the visitor’s system setting and can be overridden with the **Theme** button, which remembers the choice in `localStorage`.

## Customising

- **Brand video:** replace `assets/hero.mp4` and `assets/hero-poster.jpg`. Keep the video muted, short and compressed for the web.
- **Logo:** replace `assets/logo.png` (header) and `assets/favicon.png`.
- **Copy:** edit the text directly in the HTML files.
- **Colours:** change the variables in the `:root` block of `css/style.css`.

## Accessibility and performance

- Respects `prefers-reduced-motion`: animations are disabled and the hero video starts paused
- Visible Pause/Play control for the hero video
- Keyboard-friendly navigation, labelled form fields and live-region form messages
- Compressed, muted hero video with a poster frame, and deferred JavaScript

## Known limitations

- The **Notify me** form on the Services page validates input in the browser only. It does not send data anywhere yet. Connect it to your backend or a form service before launch.
- Fonts load from Google Fonts. Self-host them if the site must work without external requests.

## Roadmap

- [ ] Connect the notify-me form to a backend
- [ ] Publish the Services page with launched offerings
- [ ] Add a contact page
- [ ] Add Urdu language support

## License

All rights reserved © 2026 Fepru. Add a license file here if you plan to open-source this repository.
