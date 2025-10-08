# Mark Alan Prior - Personal Website

A modern, clean personal portfolio website showcasing projects and adventures.

## Tech Stack

- **Next.js** - React framework with SSR and routing
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vercel** - Deployment platform

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
markalanprior-com/
├── pages/
│   ├── _app.tsx          # Global app wrapper
│   └── index.tsx         # Home page
├── data/
│   └── projects.ts       # Project data
├── styles/
│   └── globals.css       # Global styles with Tailwind
├── public/               # Static assets (images, favicon)
├── docs/                 # Project documentation
└── images/               # Project images
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Adding New Projects

Edit `data/projects.ts` to add or modify projects. Each project requires:

- **name**: Display name
- **link**: URL to the project
- **thumbnail**: Path to image in `/public/images/projects/`
- **description**: Short description

## Images Setup

Place your project thumbnails in `/public/images/projects/` and your profile photo at `/public/profile_med.PNG`.

Required project images:
- prior-adventures-map.jpg
- prior-adventures-videos.jpg
- orienteering-maps.jpg
- big-road-climbs.jpg
- countries.jpg
- photos.jpg
- san-diego-orienteering.jpg

