## 🏗️ Framework

**Next.js (React-based)**

* Handles routing automatically — `/pages/about.tsx` → `/about`
* Pre-renders pages for top-tier performance and SEO
* Works seamlessly with Vercel for instant, zero-config deployment
* Lets you scale later (add blog, photo gallery, etc.) without rebuilding

## 🎨 Styling

**Tailwind CSS**

* Utility-first CSS framework for rapid, consistent design
* Inline classes instead of separate CSS files

  ```jsx
  <h1 className="text-3xl font-bold text-gray-900">Hello!</h1>
  ```
* Built-in responsive, hover, and dark-mode utilities
* Tree-shaken: unused styles are stripped in production

## ⚙️ Tooling

**TypeScript (optional but recommended)**

* Adds safety and autocompletion to React components

**ESLint + Prettier**

* Ensures clean, consistent code formatting

**Vercel CLI / GitHub Deploy**

* Push to `main` → auto-deploy live site
* Includes preview builds for each branch

## 🗂️ Folder Structure

```
my-site/
│
├── pages/
│   ├── index.tsx         # Home page
│   ├── about.tsx         # About page
│   └── _app.tsx          # Global layout / Tailwind import
│
├── public/               # Static assets (images, favicon, etc.)
│
├── styles/
│   └── globals.css       # Tailwind base styles
│
├── package.json
└── tailwind.config.js
```

## 🚀 Commands

```bash
# 1. Create project
npx create-next-app my-site --typescript

# 2. Install Tailwind
cd my-site
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Enable Tailwind (tailwind.config.js)
content: ["./pages/**/*.{js,ts,jsx,tsx}"]

# 4. Import in globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# 5. Run locally
npm run dev
# Visit: http://localhost:3000
```

## 🌍 Deployment

* Connect repo to **Vercel**
* Each push to `main` = automatic build and deploy
* Free SSL, CDN, and rollbacks included
