# Shivada Manoj P — Portfolio

Personal portfolio website showcasing my work in AI/ML, LLM applications, computer vision, and Python backend development.

**Live site:** https://shivada-2707.github.io/PORTFOLIO/
*(If the link 404s, GitHub Pages hasn't been enabled yet for this repo — see [Deployment](#deployment) below.)*

---

## About

I'm an MCA graduate from Government Engineering College, Thrissur, specializing in applied AI/ML. This site is where I showcase my projects, skills, and background as I look for Software Engineer / Python Developer / AI-ML Engineer roles.

## Features

- Responsive single-page layout (mobile, tablet, desktop)
- Animated hero with a typewriter role rotation
- Scroll-based section highlighting in the navbar
- Skills section with animated proficiency bars
- Project cards with tech-stack tags
- Contact form that opens the visitor's email client with the message pre-filled
- No build step or dependencies — pure HTML, CSS, and vanilla JavaScript

## Tech Stack

| Layer      | Tools |
|------------|-------|
| Markup     | HTML5 |
| Styling    | CSS3 (custom properties, Grid, Flexbox) |
| Behavior   | Vanilla JavaScript |
| Icons      | [Font Awesome 6](https://fontawesome.com/) |
| Font       | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |

## Project Structure

```
PORTFOLIO/
├── index.html      # Page markup and content
├── style.css       # All styling
├── script.js       # Interactivity (nav, animations, contact form)
├── photo.png       # Profile photo
└── README.md
```

## Getting Started

No build tools or package installs required.

1. Clone the repo
   ```bash
   git clone https://github.com/shivada-2707/PORTFOLIO.git
   cd PORTFOLIO
   ```
2. Open `index.html` directly in a browser, or serve it locally:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

## Deployment

This site is set up to deploy for free with **GitHub Pages**:

1. In the repo, go to **Settings → Pages**.
2. Under **Source**, select the `main` branch and `/ (root)` folder.
3. Click **Save**. GitHub will publish the site at:
   ```
   https://shivada-2707.github.io/PORTFOLIO/
   ```
4. It can take a minute or two for the first deploy to go live. Any future push to `main` redeploys automatically.

## Featured Projects

- **LaTeX WriteSense AI** — AI-powered academic writing assistant using LLaMA3 and NLLB-200 behind a FastAPI backend, shipped as a Chrome extension.
- **YOLOv5 Foggy-Scene Detection** — Computer vision pipeline combining CLAHE and AOD-Net dehazing with YOLOv5, improving detection accuracy ~55% in low-visibility scenes.
- **Fresh Home** — Organic farming & distribution platform with a SQL-driven recommendation engine and CNN-based pest/crop forecasting.

## Contact

- **Email:** [shivadamanoj0@gmail.com](mailto:shivadamanoj0@gmail.com)
- **LinkedIn:** [shivada-manoj-p](https://www.linkedin.com/in/shivada-manoj-p-082274339)
- **GitHub:** [@shivada-2707](https://github.com/shivada-2707)

## License

This project is open for reference. If you reuse the code structure, a credit back to this repo is appreciated.
