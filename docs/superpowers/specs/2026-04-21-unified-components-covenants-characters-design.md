# Design: Unified Components + Covenants + Characters

Date: 2026-04-21

## Goal

Refactor the app to use a single `app-card` and `app-list` component across all domains (prophecies, references, covenants, characters). Add two new feature domains: Alianzas (/covenants) and Red de Personajes (/network). Delete unused components.

## Architecture

### Unified `app-card`

- **File**: `src/app/components/app-card/app-card.ts`
- **Input**: discriminated union `{ kind: 'prophecy' | 'reference' | 'covenant' | 'character', data: Prophecy | CrossReference | Covenant | BibleCharacter }`
- **Renders**: title, importance stars (1–5), chip badges (category/role/type), 2–3 metadata rows (icon + text), description truncated to ~160 chars, "Ver detalles" button
- **Navigation**: internal `Router.navigate()` based on `kind` → `/prophecy/:id`, `/reference/:id`, `/covenant/:id`, `/character/:id`
- **Replaces**: `ProphecyCard`, `ReferenceCard`, partial `covenant-card` stub

### Unified `app-list`

- **File**: `src/app/components/app-list/app-list.ts`
- **Input**: `entityType: 'prophecy' | 'reference' | 'covenant' | 'character'`
- **Behavior**: injects all four services, uses the correct one based on `entityType`; exposes search field + filter chips + results count + card grid using `app-card`
- **Filters per type**:
  - `prophecy` → `ProphecyCategory` chips
  - `reference` → reference type chips
  - `covenant` → no filter chips (7 items, search sufficient)
  - `character` → `CharacterRole` chips
- **Replaces**: `PropheciesList`, `ReferencesList`
- **Routes that use it**: `/` (prophecy), `/references` (reference), `/covenants` (covenant)
- **Note**: `/network` does NOT use app-list — it uses `character-network` directly

### Detail Pages (kept separate, domain-specific layout)

| Component | Route | Status |
|---|---|---|
| `prophecy-detail` | `/prophecy/:id` | exists, keep as-is |
| `reference-detail` | `/reference/:id` | exists, keep as-is |
| `covenant-detail` | `/covenant/:id` | new |
| `character-detail` | `/character/:id` | new |

**covenant-detail** shows: name, mediator, parties, period, sign, promise, condition, AT reference, NT reference (or "sin cumplimiento"), fulfillmentNotes, chain to previousCovenantId (link).

**character-detail** shows: name, role badge, testament, period, description, connections list (type + label + linked character name), linked prophecy count, linked reference count.

### New Components

**`character-network`** (`/network`):
- SVG full-viewport visualization using `CharactersService.buildNetwork()`
- Nodes: circles colored by `character.color`, radius proportional to connection count, label below
- Edges: lines colored by `ConnectionType` (tipo=blue, cumplimiento=gold, genealogía=green, contemporáneo=gray, tipológico=purple)
- Click on node → `Router.navigate(['/character', node.id])`
- Legend for edge types
- Resize-aware (HostListener on window:resize)

**`covenant-detail`** — routed page, `ActivatedRoute` + `CovenantsService.getById()`

**`character-detail`** — routed page, `ActivatedRoute` + `CharactersService.getById()`

### Routes

Each list route passes `data: { entityType }`. `app-list` reads it via `inject(ActivatedRoute).snapshot.data['entityType']` (no `withComponentInputBinding` needed).

```ts
{ path: '',               loadComponent: AppList, data: { entityType: 'prophecy' } }
{ path: 'prophecy/:id',   loadComponent: ProphecyDetail }   // unchanged
{ path: 'references',     loadComponent: AppList, data: { entityType: 'reference' } }
{ path: 'reference/:id',  loadComponent: ReferenceDetail }  // unchanged
{ path: 'covenants',      loadComponent: AppList, data: { entityType: 'covenant' } }
{ path: 'covenant/:id',   loadComponent: CovenantDetail }   // new
{ path: 'network',        loadComponent: CharacterNetwork }  // new
{ path: 'character/:id',  loadComponent: CharacterDetail }  // new
{ path: 'charts',         loadComponent: UnifiedChart }     // unchanged
{ path: '**',             redirectTo: '' }
```

### Navigation (`app.html`)

Add two nav links:
- `routerLink="/covenants"` — icon: `handshake` — label: Alianzas
- `routerLink="/network"` — icon: `hub` — label: Personajes

### Cleanup

Before implementing, grep for usages of:
- `ProphecyCard` → delete if only used from PropheciesList (which is being replaced)
- `ReferenceCard` → same
- `covenant-card` stub → delete (replaced by app-card)
- `ProphecyChart`, `ReferenceChart` → check if referenced anywhere; delete if unused
- `ProphecyDetailDialog` → check if used; delete if unused
- `PropheciesList`, `ReferencesList` → delete after app-list replaces them

## Testing

- Tests in Spanish (describe/it strings), Vitest globals imported explicitly
- `app-card.spec.ts`: renders correct fields for each kind, navigates to correct route on button click
- `app-list.spec.ts`: filters work for each entityType, search updates results
- `covenant-detail.spec.ts`: displays covenant fields, shows "sin cumplimiento" when NT null
- `character-detail.spec.ts`: displays character fields, lists connections
- `character-network.spec.ts`: renders SVG nodes and edges, click navigates

## Conventions

- `inject()` not constructor injection
- No `.component` suffix on class filenames
- `provideAnimationsAsync()` in tests with Material
- `TestBed.resetTestingModule()` in `afterEach` when multiple describe blocks
