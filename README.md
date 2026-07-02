# Bites

This repository is structured as two separate applications:

- frontend: the React app lives at the repository root
- backend: the Spring Boot app lives in `Spring/`

## Install frontend dependencies

```bash
npm install
```

## Run frontend

```bash
npm run dev
```

Open `http://localhost:5173`.

## Run backend

```bash
cd Spring
mvn spring-boot:run
```

Open `http://localhost:8080`.

## Notes

- All npm dependencies are installed from the repository root.
- The Spring backend is contained in `Spring/` and uses `pom.xml` for dependencies.
- Frontend and backend are separate applications and communicate through REST APIs.
- CORS can be enabled in the Spring backend configuration when needed.

## Project structure

- `app/` — frontend application source files
- `public/` — frontend static assets
- `package.json`, `package-lock.json` — frontend dependencies and scripts
- `vite.config.ts`, `tsconfig.json`, `postcss.config.cjs`, `tailwind.config.cjs`, `vitest.config.ts` — frontend config
- `Spring/` — Spring Boot backend application

