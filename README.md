# Abhishekth Reddy Thanam — AI/ML Engineer Portfolio

A modern, responsive personal portfolio built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**, showcasing AI/ML experience, featured projects, skills, and education.

## Features

- Full-screen gradient hero with an animated constellation/particle background
- Sections: About, Skills, Experience, Projects, Education & Certifications
- Brand-colored technology icons, gradient accents, and hover-animated cards
- Fully responsive (mobile → desktop) and fast, statically rendered
- Deploys to Vercel with zero extra configuration

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Font:** Nunito Sans (via `next/font`)
- **Deployment:** Vercel

## Getting Started

> This is a **Node.js / Next.js** project. Dependencies are declared in
> [`package.json`](package.json) and installed with **npm** — there is no pip step.
> A [`requirements.txt`](requirements.txt) is included only as a human-readable
> list of the packages; the actual install command is `npm install`.
>
> **Prerequisite:** [Node.js](https://nodejs.org) 18.18+ (Node 20 or 22 LTS recommended), which includes npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it.

### Production build

```bash
npm run build
npm run start
```

## Project Structure

```
My_Portfolio/
├── app/
│   ├── page.tsx        # Full portfolio (hero, about, skills, experience, projects, education, footer)
│   ├── layout.tsx      # Root layout, metadata, Nunito Sans font, theme color
│   └── globals.css     # Theme tokens, gradients, card/chip/animation styles
├── public/             # Static assets
├── next.config.ts
├── package.json
└── README.md
```

## Customization

All content lives in the data objects near the top of `app/page.tsx`
(`CONTACT`, `NAV`, `ABOUT`, `SKILLS`, `EXPERIENCE`, `PROJECTS`, `EDUCATION`).
Edit those to update text, links, bullet points, tags, and dates.
Theme colors are defined as CSS variables in `app/globals.css`.

## Deployment

Push to GitHub and import the repository at [vercel.com](https://vercel.com).
Vercel auto-detects Next.js and configures the build. No environment variables are required.
