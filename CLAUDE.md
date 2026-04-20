# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server
npm run build      # production build
npm test           # run all tests (Vitest via Angular CLI)
ng test --include="**/prophecies-list.spec.ts"  # single test file
```

## Architecture

Angular 21 standalone app (no NgModules). Two parallel feature domains with identical structure:

**Prophecies** (`/`) — Catholic biblical prophecies (OT→NT fulfillment)
**Cross-References** (`/references`) — Typed cross-references between verses

Both domains follow the same pattern:
- `data/*.data.ts` — static in-memory dataset (source of truth, no HTTP)
- `services/*.ts` — `Injectable` using Angular signals (`signal`, `computed`) for search/filter state; `getById(id)` for route lookups
- `models/*.model.ts` — shared interfaces (`Prophecy`, `CrossReference`, `BibleVerse`)
- `components/*-list/` — list page with search input + category/type chip filters + embedded chart
- `components/*-card/` — card shown inside the list
- `components/*-detail/` — routed detail page (uses `ActivatedRoute` + service `getById`)
- `components/*-detail-dialog/` — `MatDialog` wrapper receiving data via `MAT_DIALOG_DATA`
- `components/*-chart/` — visual chart component

Routes are lazy-loaded via `loadComponent`. Wildcard redirects to `/`.

## Testing

Framework: **Vitest** (not Jasmine/Karma). Import Vitest globals explicitly when needed:

```ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
```

`TestBed.resetTestingModule()` in `afterEach` when multiple `describe` blocks share the module. Use `provideAnimationsAsync()` whenever Material components are involved. Use `provideRouter(routes)` in app-level tests.

Test language: Spanish (describe/it strings in Spanish, variable names in Spanish).

## Conventions

- Component class filenames have no `.component` suffix (e.g. `prophecy-card.ts`, not `prophecy-card.component.ts`)
- Services injected via `inject()`, not constructor injection
- Prettier: `printWidth: 100`, `singleQuote: true`
- `importance: number` field (1–5) exists on both `Prophecy` and `CrossReference`; services sort descending by it
