# Bites

Local repo for the Bites web app (React + Vite + React Router).

This project is configured to run from the repository root. The application source lives in `app/`, and all dependencies, scripts, and config files are managed from the root directory.

## Quick start (macOS, zsh)

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build

```bash
npm run preview
```

## Project layout

- `app/` — application source files
- `public/` — static assets
- `package.json` — root package and scripts
- `vite.config.ts`, `tsconfig.json`, `tailwind.config.cjs`, `postcss.config.cjs` — root configuration files

## Notes

- Keep local-only files uncommitted; `.gitignore` is defined at the repository root.
- If you use a different package manager, run the equivalent commands from the repo root.
