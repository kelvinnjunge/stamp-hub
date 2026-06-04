# Rubber Stamp Landing Page

A modern landing page for a Kenya-based rubber stamp business built with:

- **React 19**
- **Vite**
- **TanStack Start** for server-side rendering and middleware
- **TanStack Router** for route-driven rendering
- **Tailwind CSS** for responsive styling
- **Radix UI** primitives and custom UI components
- **React Query** for shared client/server state context

This repository showcases a polished product landing experience with a hero section, product grid, contact CTA, WhatsApp ordering, and error handling.

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Key files](#key-files)
- [Deployment](#deployment)
- [Notes](#notes)
- [Useful links](#useful-links)

## Features

- Server-side rendering with TanStack Start
- Route-based React rendering using TanStack Router
- Custom root layout with metadata and HTML shell
- 404 Not Found route and error boundary UI
- Product showcase with image assets and WhatsApp order links
- Mobile-first responsive design
- Global error middleware for SSR

## Tech stack

- `react`, `react-dom`
- `vite`
- `@tanstack/react-start`
- `@tanstack/react-router`
- `@tanstack/react-query`
- `@lovable.dev/vite-tanstack-config`
- `tailwindcss`, `@tailwindcss/vite`
- `lucide-react`
- `@radix-ui/react-*`
- `zod`, `react-hook-form`, `date-fns`

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

### Lint and format

```bash
npm run lint
npm run format
```

## Scripts

- `npm run dev` — start Vite development server
- `npm run build` — create production build
- `npm run build:dev` — build using development mode
- `npm run preview` — preview production output locally
- `npm run lint` — run ESLint over the project
- `npm run format` — run Prettier formatting

## Project structure

```text
src/
  assets/               # Vite-managed image assets
  components/           # reusable UI and Radix wrapper components
  hooks/                # custom reusable React hooks
  lib/                  # shared utilities and error helpers
  routes/               # route files and page components
  server.ts             # custom SSR server entry with middleware
  start.ts              # TanStack Start instance configuration
  router.tsx            # router creation and shared app context
  styles.css            # global app styles
vite.config.ts          # configured Vite setup via Lovable preset
package.json            # dependencies, scripts, and metadata
tsconfig.json           # TypeScript config and path aliases
```

## Key files

### `src/server.ts`

Sets up the server entry for TanStack Start and wraps requests in middleware that catches unexpected errors. When a server error occurs, it returns a friendly HTML error page from `src/lib/error-page.ts`.

### `src/start.ts`

Creates the TanStack Start instance and defines a server middleware layer for error handling.

### `src/router.tsx`

Creates the TanStack Router with `routeTree`, injects a shared `QueryClient`, and enables scroll restoration.

### `src/routeTree.gen.ts`

A generated route registry from TanStack Router. It wires the root route and page route together, defines route metadata, and enables automatic route typing.

### `src/routes/__root.tsx`

Defines the root route shell, including:

- HTML `<head>` metadata
- `<Outlet />` for nested routes
- `QueryClientProvider`
- custom not found and error UI

### `src/routes/index.tsx`

Implements the landing page for the rubber stamp business, including:

- hero section with image background and CTA buttons
- product cards with pricing and WhatsApp ordering
- contact information and phone links
- about, benefits, and trust messages
- responsive sticky navigation

### `src/lib/error-page.ts`

Returns a static fallback error page used if the server-side renderer fails before React can hydrate.

### `vite.config.ts`

Uses `@lovable.dev/vite-tanstack-config` to provide the baseline plugin setup for React, Tailwind, Nitro, and TanStack Start. It also redirects the Start server entry to `src/server.ts`.

## How it works

1. `vite` loads `src/start.ts` through the `@lovable.dev/vite-tanstack-config` preset.
2. `src/start.ts` creates a TanStack Start instance and registers server middleware.
3. `src/server.ts` is the SSR entrypoint that handles requests using the Start instance and middleware.
4. `src/router.tsx` creates the TanStack Router using the generated `routeTree` and a shared `QueryClient` context for React Query.
5. `src/routes/__root.tsx` defines application metadata, page shell, error boundaries, and the root layout.
6. `src/routes/index.tsx` renders the landing page content and product offerings.
7. If an error occurs during SSR, `src/lib/error-page.ts` returns a static HTML error response.

## Generated routes

- `__root__` — root route layout and app shell
- `/` — index page route rendered by `src/routes/index.tsx`

The generated `src/routeTree.gen.ts` file contains route registration, typed route maps, and integration with TanStack Start.

## Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. Preview the build locally:

   ```bash
   npm run preview
   ```

3. Deploy the production output to your chosen hosting provider.

## Notes

- The project uses the `@/` alias to import files from `src/`.
- No environment variables are required by default.
- `@lovable.dev/vite-tanstack-config` already includes the React, Tailwind, Nitro, and TanStack Start plugin configuration.
- For new pages, add files under `src/routes/` and integrate them into the route tree if needed.

## Useful links

- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
