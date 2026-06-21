# Daniel Nguyen — Portfolio

A premium, dark-mode-first personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** + **Vite** — fast dev server and build
- **Tailwind CSS** — custom design tokens (colors, fonts, animations) in `tailwind.config.js`
- **Framer Motion** — scroll reveals, staggered hero animation, tilt-on-hover project cards, animated timeline
- **lucide-react** — icon set

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── content.js          # ← all editable copy lives here
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── ui/
            ├── AnimatedBackground.jsx
            ├── Section.jsx       # Section wrapper + Reveal (scroll animation)
            ├── GlassCard.jsx
            └── ProjectCard.jsx   # mouse-tracked tilt card
```

## Editing Your Content

Everything you'll want to change as you update your resume lives in **`src/data/content.js`**:
profile info, stats, experience entries, projects, and skill groups. You generally
won't need to touch the component files unless you want to change layout or styling.

To swap the placeholder links (email, LinkedIn, GitHub, project links, resume), edit
the `profile` object and each project's `links` field in `content.js`.

## Setup

Requires **Node.js 18+**.

```bash
# install dependencies
npm install

# start local dev server (http://localhost:5173)
npm run dev

# build for production → outputs to /dist
npm run build

# preview the production build locally
npm run preview
```

## Deployment

### Vercel (recommended)

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — framework preset: **Vite**, build command `npm run build`,
   output directory `dist`. Click **Deploy**.
4. Every push to your main branch will auto-deploy.

Or via CLI:
```bash
npm i -g vercel
vercel
```

### Netlify

1. Push this project to a GitHub repo.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Build command: `npm run build`, publish directory: `dist`.
4. Click **Deploy site**.

Or via CLI:
```bash
npm i -g netlify-cli
netlify deploy --build --prod
```

### Custom domain

Both Vercel and Netlify let you attach a custom domain (e.g. `danielnguyen.com`) for
free under **Project/Site Settings → Domains** — just point your domain's DNS at the
records they provide.

## Notes

- Dark mode is the only mode by design (`class="dark"` set on `<html>` in `index.html`) — this is intentional for the aesthetic, not a toggle that needs wiring.
- Reduced-motion users automatically get animations minimized via the `prefers-reduced-motion` media query in `src/index.css`.
- Replace `public/favicon.svg` with your own mark if you have one.
- All placeholder links (`#`) in `content.js` should be swapped for your real resume PDF, live project URLs, and GitHub repos before going live.
