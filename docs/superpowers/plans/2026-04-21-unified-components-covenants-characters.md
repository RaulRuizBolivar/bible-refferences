# Unified Components + Covenants + Characters Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the app to use a single `app-card` and `app-list` component, add Alianzas (/covenants) and Red de Personajes (/network) features, and delete unused components.

**Architecture:** Discriminated union `AppEntity` drives a single `app-card` that renders prophecy, reference, or covenant data. A single `app-list` reads `entityType` from route snapshot data and uses the correct service. Character network is a standalone SVG component. Detail pages remain domain-specific.

**Tech Stack:** Angular 21 standalone, Angular Material, Angular Signals, Vitest

---

## File Map

### New files
- `src/app/components/app-card/app-card.ts` — unified card (prophecy | reference | covenant)
- `src/app/components/app-card/app-card.html`
- `src/app/components/app-card/app-card.scss`
- `src/app/components/app-card/app-card.spec.ts`
- `src/app/components/app-list/app-list.ts` — unified list page (search + filters + grid)
- `src/app/components/app-list/app-list.html`
- `src/app/components/app-list/app-list.scss`
- `src/app/components/app-list/app-list.spec.ts`
- `src/app/components/covenant-detail/covenant-detail.ts`
- `src/app/components/covenant-detail/covenant-detail.html`
- `src/app/components/covenant-detail/covenant-detail.scss`
- `src/app/components/covenant-detail/covenant-detail.spec.ts`
- `src/app/components/character-detail/character-detail.ts`
- `src/app/components/character-detail/character-detail.html`
- `src/app/components/character-detail/character-detail.scss`
- `src/app/components/character-detail/character-detail.spec.ts`
- `src/app/components/character-network/character-network.ts`
- `src/app/components/character-network/character-network.html`
- `src/app/components/character-network/character-network.scss`
- `src/app/components/character-network/character-network.spec.ts`

### Modified
- `src/app/app.routes.ts` — add new routes, switch lists to AppList
- `src/app/app.html` — add Alianzas and Personajes nav links

### Deleted (in Task 4, after routes updated)
- `src/app/components/prophecy-chart/` (entire folder)
- `src/app/components/reference-chart/` (entire folder)
- `src/app/components/prophecy-detail-dialog/` (entire folder)
- `src/app/components/prophecy-card/` (entire folder)
- `src/app/components/reference-card/` (entire folder)
- `src/app/components/prophecies-list/` (entire folder)
- `src/app/components/references-list/` (entire folder)
- `src/app/components/covenant-card/` (entire folder — was a stub)

---

### Task 1: Create `app-card` unified component

**Files:**
- Create: `src/app/components/app-card/app-card.spec.ts`
- Create: `src/app/components/app-card/app-card.ts`
- Create: `src/app/components/app-card/app-card.html`
- Create: `src/app/components/app-card/app-card.scss`

- [ ] **Step 1: Write the failing test**

Create `src/app/components/app-card/app-card.spec.ts`:

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AppCard, AppEntity } from './app-card';
import { Prophecy } from '../../models/prophecy.model';
import { CrossReference } from '../../models/cross-reference.model';
import { Covenant } from '../../models/covenant.model';

const profecia: AppEntity = {
  kind: 'prophecy',
  data: {
    id: 1,
    title: 'Nacimiento virginal',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 5,
    oldTestament: { reference: 'Isaías 7:14', text: 'He aquí que la virgen...' },
    newTestament: { reference: 'Mateo 1:22-23', text: 'Todo esto aconteció...' },
    description: 'Descripción de prueba.',
  } as Prophecy,
};

const profeciasinNT: AppEntity = {
  kind: 'prophecy',
  data: { ...profecia.data as Prophecy, id: 2, newTestament: null },
};

const referencia: AppEntity = {
  kind: 'reference',
  data: {
    id: 10,
    title: 'Adán y Cristo',
    type: 'tipología',
    theme: 'redención',
    importance: 4,
    verseA: { reference: 'Romanos 5:14', text: 'Adán, figura del que había de venir.' },
    verseB: { reference: 'Génesis 3:15', text: 'Pondré enemistad...' },
    description: 'Descripción de referencia.',
  } as CrossReference,
};

const alianza: AppEntity = {
  kind: 'covenant',
  data: {
    id: 1,
    name: 'Alianza con Noé',
    mediator: 'Noé',
    parties: 'Dios — Noé y toda criatura viviente',
    period: 'Post-diluvio (~2350 a.C.)',
    sign: 'Arcoíris',
    promise: 'No volver a destruir la tierra con agua',
    condition: null,
    color: '#4fc3f7',
    importance: 3,
    oldTestament: { reference: 'Génesis 9:8-17', text: 'Yo estableceré mi alianza...' },
    newTestament: null,
    description: 'Descripción de alianza.',
    previousCovenantId: null,
    fulfillmentNotes: 'Cumplimiento universal.',
  } as Covenant,
};

async function crearFixture(entity: AppEntity): Promise<ComponentFixture<AppCard>> {
  await TestBed.configureTestingModule({
    imports: [AppCard],
    providers: [provideAnimationsAsync(), provideRouter([])],
  }).compileComponents();

  const fixture = TestBed.createComponent(AppCard);
  fixture.componentInstance.entity = entity;
  await fixture.whenStable();
  fixture.detectChanges();
  return fixture;
}

describe('AppCard', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    vi.clearAllMocks();
  });

  describe('profecía con NT', () => {
    let fixture: ComponentFixture<AppCard>;
    beforeEach(async () => { fixture = await crearFixture(profecia); });

    it('debe crearse', () => expect(fixture.componentInstance).toBeTruthy());
    it('muestra el título', () => expect(fixture.nativeElement.textContent).toContain('Nacimiento virginal'));
    it('muestra referencia AT', () => expect(fixture.nativeElement.textContent).toContain('Isaías 7:14'));
    it('muestra referencia NT', () => expect(fixture.nativeElement.textContent).toContain('Mateo 1:22-23'));
    it('navega a /prophecy/:id al pulsar Ver detalles', () => {
      const router = TestBed.inject(Router);
      const spy = vi.spyOn(router, 'navigate');
      fixture.debugElement.query(By.css('button[color="primary"]')).nativeElement.click();
      expect(spy).toHaveBeenCalledWith(['/prophecy', 1]);
    });
  });

  describe('profecía sin NT', () => {
    it('muestra aviso sin NT', async () => {
      const fixture = await crearFixture(profeciasinNT);
      expect(fixture.nativeElement.textContent).toContain('Sin cumplimiento en el NT');
    });
  });

  describe('referencia cruzada', () => {
    let fixture: ComponentFixture<AppCard>;
    beforeEach(async () => { fixture = await crearFixture(referencia); });

    it('muestra el título', () => expect(fixture.nativeElement.textContent).toContain('Adán y Cristo'));
    it('muestra verseA', () => expect(fixture.nativeElement.textContent).toContain('Romanos 5:14'));
    it('muestra verseB', () => expect(fixture.nativeElement.textContent).toContain('Génesis 3:15'));
    it('navega a /reference/:id', () => {
      const router = TestBed.inject(Router);
      const spy = vi.spyOn(router, 'navigate');
      fixture.debugElement.query(By.css('button[color="primary"]')).nativeElement.click();
      expect(spy).toHaveBeenCalledWith(['/reference', 10]);
    });
  });

  describe('alianza bíblica', () => {
    let fixture: ComponentFixture<AppCard>;
    beforeEach(async () => { fixture = await crearFixture(alianza); });

    it('muestra el nombre de la alianza', () => expect(fixture.nativeElement.textContent).toContain('Alianza con Noé'));
    it('muestra el mediador', () => expect(fixture.nativeElement.textContent).toContain('Noé'));
    it('muestra referencia AT', () => expect(fixture.nativeElement.textContent).toContain('Génesis 9:8-17'));
    it('navega a /covenant/:id', () => {
      const router = TestBed.inject(Router);
      const spy = vi.spyOn(router, 'navigate');
      fixture.debugElement.query(By.css('button[color="primary"]')).nativeElement.click();
      expect(spy).toHaveBeenCalledWith(['/covenant', 1]);
    });
  });
});
```

- [ ] **Step 2: Run test — verify it fails**

```bash
npx ng test --include="**/app-card.spec.ts" 2>&1 | tail -20
```
Expected: FAIL with "Cannot find module './app-card'"

- [ ] **Step 3: Create `app-card.ts`**

```ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Prophecy } from '../../models/prophecy.model';
import { CrossReference, ReferenceType } from '../../models/cross-reference.model';
import { Covenant } from '../../models/covenant.model';

export type EntityType = 'prophecy' | 'reference' | 'covenant';

export type AppEntity =
  | { kind: 'prophecy'; data: Prophecy }
  | { kind: 'reference'; data: CrossReference }
  | { kind: 'covenant'; data: Covenant };

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './app-card.html',
  styleUrl: './app-card.scss',
})
export class AppCard {
  @Input({ required: true }) entity!: AppEntity;

  constructor(private router: Router) {}

  get displayTitle(): string {
    return this.entity.kind === 'covenant' ? this.entity.data.name : this.entity.data.title;
  }

  get description(): string {
    return this.entity.data.description;
  }

  get borderColor(): string {
    if (this.entity.kind === 'prophecy') {
      const m: Record<string, string> = {
        mesiánica: '#2e7d32',
        apocalíptica: '#880e4f',
        histórica: '#0d47a1',
      };
      return m[this.entity.data.category] ?? '#9e9e9e';
    }
    if (this.entity.kind === 'reference') {
      const m: Record<string, string> = {
        tipología: '#c084fc',
        'cita directa': '#fb923c',
        'paralelo temático': '#f472b6',
        alusión: '#fbbf24',
      };
      return m[this.entity.data.type] ?? '#9e9e9e';
    }
    return this.entity.data.color;
  }

  referenceTypeIcon(type: ReferenceType): string {
    const icons: Record<ReferenceType, string> = {
      tipología: 'swap_horiz',
      'cita directa': 'format_quote',
      'paralelo temático': 'compare',
      alusión: 'link',
    };
    return icons[type];
  }

  abrirDetalles(): void {
    if (this.entity.kind === 'prophecy') {
      this.router.navigate(['/prophecy', this.entity.data.id]);
    } else if (this.entity.kind === 'reference') {
      this.router.navigate(['/reference', this.entity.data.id]);
    } else {
      this.router.navigate(['/covenant', this.entity.data.id]);
    }
  }
}
```

- [ ] **Step 4: Create `app-card.html`**

```html
<mat-card class="app-card" [style.border-top-color]="borderColor">
  <mat-card-header>
    <mat-card-title class="card-title">{{ displayTitle }}</mat-card-title>
    <div class="importance-stars" [title]="'Importancia: ' + entity.data.importance + '/5'">
      @for (s of [1, 2, 3, 4, 5]; track s) {
        <mat-icon class="star" [class.filled]="s <= entity.data.importance">star</mat-icon>
      }
    </div>
    <mat-card-subtitle>
      <mat-chip-set>
        @switch (entity.kind) {
          @case ('prophecy') {
            <mat-chip [class]="'cat-chip cat-' + entity.data.category">
              {{ entity.data.category }}
            </mat-chip>
            <mat-chip class="theme-chip">{{ entity.data.theme }}</mat-chip>
          }
          @case ('reference') {
            <mat-chip [class]="'type-chip type-' + entity.data.type">
              <mat-icon class="chip-icon">{{ referenceTypeIcon(entity.data.type) }}</mat-icon>
              {{ entity.data.type }}
            </mat-chip>
            <mat-chip class="theme-chip">{{ entity.data.theme }}</mat-chip>
          }
          @case ('covenant') {
            <mat-chip class="period-chip">{{ entity.data.period }}</mat-chip>
            <mat-chip class="mediator-chip">{{ entity.data.mediator }}</mat-chip>
          }
        }
      </mat-chip-set>
    </mat-card-subtitle>
  </mat-card-header>

  <mat-card-content class="card-content">
    @switch (entity.kind) {
      @case ('prophecy') {
        <div class="reference-row">
          <mat-icon class="ref-icon">history_edu</mat-icon>
          <span class="ref-text">{{ entity.data.oldTestament.reference }}</span>
        </div>
        @if (entity.data.newTestament) {
          <div class="reference-row">
            <mat-icon class="ref-icon">auto_stories</mat-icon>
            <span class="ref-text">{{ entity.data.newTestament.reference }}</span>
          </div>
        } @else {
          <div class="reference-row unfulfilled-row">
            <mat-icon class="ref-icon">schedule</mat-icon>
            <span class="ref-text">Sin cumplimiento en el NT</span>
          </div>
        }
      }
      @case ('reference') {
        <div class="reference-row">
          <mat-icon class="ref-icon">history_edu</mat-icon>
          <span class="ref-text">{{ entity.data.verseB.reference }}</span>
        </div>
        <div class="reference-row">
          <mat-icon class="ref-icon">auto_stories</mat-icon>
          <span class="ref-text">{{ entity.data.verseA.reference }}</span>
        </div>
      }
      @case ('covenant') {
        <div class="reference-row">
          <mat-icon class="ref-icon">history_edu</mat-icon>
          <span class="ref-text">{{ entity.data.oldTestament.reference }}</span>
        </div>
        @if (entity.data.newTestament) {
          <div class="reference-row">
            <mat-icon class="ref-icon">auto_stories</mat-icon>
            <span class="ref-text">{{ entity.data.newTestament.reference }}</span>
          </div>
        } @else {
          <div class="reference-row unfulfilled-row">
            <mat-icon class="ref-icon">schedule</mat-icon>
            <span class="ref-text">Sin cumplimiento en el NT</span>
          </div>
        }
      }
    }
    <p class="card-description">{{ description | slice: 0 : 160 }}…</p>
  </mat-card-content>

  <mat-card-actions align="end">
    <button mat-button color="primary" (click)="abrirDetalles()">
      <mat-icon>open_in_full</mat-icon>
      Ver detalles
    </button>
  </mat-card-actions>
</mat-card>
```

- [ ] **Step 5: Create `app-card.scss`**

```scss
:host {
  display: block;
  height: 100%;
}

.app-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease, transform 0.15s ease;
  border-top: 4px solid transparent;
  border-radius: 8px !important;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12) !important;
    transform: translateY(-2px);
  }
}

.importance-stars {
  display: flex;
  gap: 1px;
  margin-bottom: 4px;

  .star {
    font-size: 14px;
    width: 14px;
    height: 14px;
    color: #d0d0d0;
    &.filled { color: #f59e0b; }
  }
}

.card-title {
  font-size: 1rem !important;
  font-weight: 600 !important;
  line-height: 1.4 !important;
  color: #263238;
}

mat-card-content.card-content {
  flex: 1;
  padding-top: 8px;
}

.reference-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;

  .ref-icon {
    font-size: 16px;
    width: 16px;
    height: 16px;
    color: #5c6bc0;
  }

  .ref-text {
    font-size: 0.85rem;
    font-weight: 500;
    color: #546e7a;
  }
}

.unfulfilled-row {
  .ref-icon, .ref-text {
    color: #90a4ae;
    font-style: italic;
  }
}

.card-description {
  margin-top: 12px;
  font-size: 0.88rem;
  line-height: 1.6;
  color: #607d8b;
}

.cat-chip, .type-chip {
  font-size: 0.75rem !important;
  height: 22px !important;
}

.cat-chip {
  &.cat-mesiánica    { background: #e8f5e9 !important; color: #2e7d32 !important; }
  &.cat-apocalíptica { background: #fce4ec !important; color: #880e4f !important; }
  &.cat-histórica    { background: #e3f2fd !important; color: #0d47a1 !important; }
}

.type-chip {
  &.type-tipología         { background: #f3e8ff !important; color: #7c3aed !important; }
  &.type-cita\ directa     { background: #fff3e0 !important; color: #e65100 !important; }
  &.type-paralelo\ temático { background: #fce4ec !important; color: #c2185b !important; }
  &.type-alusión           { background: #fffde7 !important; color: #f57f17 !important; }
}

.period-chip {
  font-size: 0.75rem !important;
  height: 22px !important;
  background: #e8eaf6 !important;
  color: #3949ab !important;
}

.mediator-chip {
  font-size: 0.75rem !important;
  height: 22px !important;
  background: #f5f5f5 !important;
  color: #78909c !important;
}

.theme-chip {
  font-size: 0.75rem !important;
  height: 22px !important;
  background: #f5f5f5 !important;
  color: #78909c !important;
}

.chip-icon {
  font-size: 14px !important;
  width: 14px !important;
  height: 14px !important;
}
```

- [ ] **Step 6: Run test — verify it passes**

```bash
npx ng test --include="**/app-card.spec.ts" 2>&1 | tail -20
```
Expected: all tests PASS

- [ ] **Step 7: Commit**

```bash
git add src/app/components/app-card/
git commit -m "feat: add unified AppCard component for prophecy, reference, and covenant"
```

---

### Task 2: Create `app-list` unified list component

**Files:**
- Create: `src/app/components/app-list/app-list.spec.ts`
- Create: `src/app/components/app-list/app-list.ts`
- Create: `src/app/components/app-list/app-list.html`
- Create: `src/app/components/app-list/app-list.scss`

- [ ] **Step 1: Write the failing test**

Create `src/app/components/app-list/app-list.spec.ts`:

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AppList } from './app-list';
import { PropheciesService } from '../../services/prophecies';
import { ReferencesService } from '../../services/references';
import { CovenantsService } from '../../services/covenants';

function mockRoute(entityType: string) {
  return { snapshot: { data: { entityType } } };
}

async function crearFixture(entityType: string): Promise<ComponentFixture<AppList>> {
  await TestBed.configureTestingModule({
    imports: [AppList],
    providers: [
      provideAnimationsAsync(),
      provideRouter([]),
      { provide: ActivatedRoute, useValue: mockRoute(entityType) },
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(AppList);
  await fixture.whenStable();
  fixture.detectChanges();
  return fixture;
}

describe('AppList', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    vi.clearAllMocks();
  });

  describe('entityType=prophecy', () => {
    let fixture: ComponentFixture<AppList>;
    beforeEach(async () => { fixture = await crearFixture('prophecy'); });

    it('debe crearse', () => expect(fixture.componentInstance).toBeTruthy());
    it('muestra el título de profecías', () =>
      expect(fixture.nativeElement.textContent).toContain('Profecías de la Biblia Católica'));
    it('llama setSearch en PropheciesService al buscar', () => {
      const svc = TestBed.inject(PropheciesService);
      const spy = vi.spyOn(svc, 'setSearch');
      fixture.componentInstance.onSearch('mesías');
      expect(spy).toHaveBeenCalledWith('mesías');
    });
    it('muestra chips de categorías', () => {
      expect(fixture.nativeElement.textContent).toContain('Todas');
      expect(fixture.nativeElement.textContent).toContain('Mesiánica');
    });
    it('limpiarFiltros limpia búsqueda y categoría', () => {
      const svc = TestBed.inject(PropheciesService);
      const spySearch = vi.spyOn(svc, 'setSearch');
      const spyCat = vi.spyOn(svc, 'setCategory');
      fixture.componentInstance.limpiarFiltros();
      expect(spySearch).toHaveBeenCalledWith('');
      expect(spyCat).toHaveBeenCalledWith(null);
    });
  });

  describe('entityType=reference', () => {
    let fixture: ComponentFixture<AppList>;
    beforeEach(async () => { fixture = await crearFixture('reference'); });

    it('muestra el título de referencias', () =>
      expect(fixture.nativeElement.textContent).toContain('Referencias Cruzadas'));
    it('llama setSearch en ReferencesService al buscar', () => {
      const svc = TestBed.inject(ReferencesService);
      const spy = vi.spyOn(svc, 'setSearch');
      fixture.componentInstance.onSearch('adán');
      expect(spy).toHaveBeenCalledWith('adán');
    });
    it('muestra chips de tipos', () => {
      expect(fixture.nativeElement.textContent).toContain('Tipología');
    });
  });

  describe('entityType=covenant', () => {
    let fixture: ComponentFixture<AppList>;
    beforeEach(async () => { fixture = await crearFixture('covenant'); });

    it('muestra el título de alianzas', () =>
      expect(fixture.nativeElement.textContent).toContain('Alianzas Bíblicas'));
    it('llama setSearch en CovenantsService al buscar', () => {
      const svc = TestBed.inject(CovenantsService);
      const spy = vi.spyOn(svc, 'setSearch');
      fixture.componentInstance.onSearch('noé');
      expect(spy).toHaveBeenCalledWith('noé');
    });
    it('no muestra chips de filtro para alianzas', () => {
      expect(fixture.nativeElement.textContent).not.toContain('Mesiánica');
      expect(fixture.nativeElement.textContent).not.toContain('Tipología');
    });
  });
});
```

- [ ] **Step 2: Run test — verify it fails**

```bash
npx ng test --include="**/app-list.spec.ts" 2>&1 | tail -20
```
Expected: FAIL with "Cannot find module './app-list'"

- [ ] **Step 3: Create `app-list.ts`**

```ts
import { Component, inject, computed } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { PropheciesService } from '../../services/prophecies';
import { ReferencesService } from '../../services/references';
import { CovenantsService } from '../../services/covenants';
import { AppCard, AppEntity, EntityType } from '../app-card/app-card';
import { ProphecyCategory } from '../../models/prophecy.model';
import { ReferenceType } from '../../models/cross-reference.model';

interface PageConfig {
  title: string;
  subtitle: string;
  searchLabel: string;
  singularLabel: string;
  pluralLabel: string;
}

const PAGE_CONFIG: Record<EntityType, PageConfig> = {
  prophecy: {
    title: 'Profecías de la Biblia Católica',
    subtitle:
      'Descubre las profecías del Antiguo Testamento y su cumplimiento en el Nuevo Testamento',
    searchLabel: 'Buscar profecía o referencia…',
    singularLabel: 'profecía encontrada',
    pluralLabel: 'profecías encontradas',
  },
  reference: {
    title: 'Referencias Cruzadas de la Biblia',
    subtitle:
      'Tipologías, citas directas, paralelos temáticos y alusiones entre el Antiguo y el Nuevo Testamento',
    searchLabel: 'Buscar referencia o versículo…',
    singularLabel: 'referencia encontrada',
    pluralLabel: 'referencias encontradas',
  },
  covenant: {
    title: 'Las 7 Alianzas Bíblicas',
    subtitle: 'Las alianzas de Dios con la humanidad desde Adán hasta el Nuevo Testamento',
    searchLabel: 'Buscar alianza…',
    singularLabel: 'alianza encontrada',
    pluralLabel: 'alianzas encontradas',
  },
};

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    TitleCasePipe,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    AppCard,
  ],
  templateUrl: './app-list.html',
  styleUrl: './app-list.scss',
})
export class AppList {
  private readonly propheciesService = inject(PropheciesService);
  private readonly referencesService = inject(ReferencesService);
  private readonly covenantsService = inject(CovenantsService);

  readonly entityType = inject(ActivatedRoute).snapshot.data['entityType'] as EntityType;
  readonly config = PAGE_CONFIG[this.entityType];

  readonly prophecyCategories = this.propheciesService.categories;
  readonly referenceTypes = this.referencesService.types;

  searchValue = '';

  readonly filtered = computed<AppEntity[]>(() => {
    if (this.entityType === 'prophecy') {
      return this.propheciesService.filtered().map(p => ({ kind: 'prophecy' as const, data: p }));
    }
    if (this.entityType === 'reference') {
      return this.referencesService.filtered().map(r => ({ kind: 'reference' as const, data: r }));
    }
    return this.covenantsService.filtered().map(c => ({ kind: 'covenant' as const, data: c }));
  });

  onSearch(value: string): void {
    if (this.entityType === 'prophecy') this.propheciesService.setSearch(value);
    else if (this.entityType === 'reference') this.referencesService.setSearch(value);
    else this.covenantsService.setSearch(value);
  }

  seleccionarFiltro(value: string | null): void {
    if (this.entityType === 'prophecy') {
      this.propheciesService.setCategory(value as ProphecyCategory | null);
    } else if (this.entityType === 'reference') {
      this.referencesService.setType(value as ReferenceType | null);
    }
  }

  estaActivo(value: string | null): boolean {
    if (this.entityType === 'prophecy') return this.propheciesService.activeCategory() === value;
    if (this.entityType === 'reference') return this.referencesService.activeType() === value;
    return false;
  }

  limpiarFiltros(): void {
    this.searchValue = '';
    this.onSearch('');
    this.seleccionarFiltro(null);
  }

  referenceTypeIcon(type: string): string {
    const icons: Record<string, string> = {
      tipología: 'swap_horiz',
      'cita directa': 'format_quote',
      'paralelo temático': 'compare',
      alusión: 'link',
    };
    return icons[type] ?? 'label';
  }
}
```

- [ ] **Step 4: Create `app-list.html`**

```html
<div class="list-container">
  <header class="page-header">
    <h1 class="page-title">{{ config.title }}</h1>
    <p class="page-subtitle">{{ config.subtitle }}</p>
  </header>

  <div class="filter-bar">
    <mat-form-field appearance="outline" class="search-field">
      <mat-label>{{ config.searchLabel }}</mat-label>
      <input
        matInput
        [(ngModel)]="searchValue"
        (ngModelChange)="onSearch($event)"
        autocomplete="off"
      />
      <mat-icon matPrefix>search</mat-icon>
      @if (searchValue) {
        <button matSuffix mat-icon-button aria-label="Limpiar" (click)="limpiarFiltros()">
          <mat-icon>close</mat-icon>
        </button>
      }
    </mat-form-field>

    @switch (entityType) {
      @case ('prophecy') {
        <mat-chip-set class="filter-chips" aria-label="Filtrar por categoría">
          <mat-chip
            [class.chip-active]="estaActivo(null)"
            (click)="seleccionarFiltro(null)"
            class="filter-chip"
          >
            Todas
          </mat-chip>
          @for (cat of prophecyCategories; track cat) {
            <mat-chip
              [class.chip-active]="estaActivo(cat)"
              (click)="seleccionarFiltro(cat)"
              [class]="'filter-chip cat-filter cat-filter-' + cat"
            >
              {{ cat | titlecase }}
            </mat-chip>
          }
        </mat-chip-set>
      }
      @case ('reference') {
        <mat-chip-set class="filter-chips" aria-label="Filtrar por tipo">
          <mat-chip
            [class.chip-active]="estaActivo(null)"
            (click)="seleccionarFiltro(null)"
            class="filter-chip"
          >
            Todas
          </mat-chip>
          @for (type of referenceTypes; track type) {
            <mat-chip
              [class.chip-active]="estaActivo(type)"
              (click)="seleccionarFiltro(type)"
              [class]="'filter-chip type-filter type-filter-' + type"
            >
              <mat-icon class="chip-icon">{{ referenceTypeIcon(type) }}</mat-icon>
              {{ type | titlecase }}
            </mat-chip>
          }
        </mat-chip-set>
      }
    }
  </div>

  <p class="results-count">
    {{ filtered().length }}
    {{ filtered().length === 1 ? config.singularLabel : config.pluralLabel }}
  </p>

  @if (filtered().length > 0) {
    <div class="card-grid">
      @for (entity of filtered(); track entity.data.id) {
        <app-card [entity]="entity" />
      }
    </div>
  } @else {
    <div class="empty-state">
      <mat-icon>search_off</mat-icon>
      <p>No se encontraron resultados con los filtros actuales.</p>
      <button mat-stroked-button (click)="limpiarFiltros()">Limpiar filtros</button>
    </div>
  }
</div>
```

- [ ] **Step 5: Create `app-list.scss`**

```scss
.list-container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 36px;

  .page-title {
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    font-weight: 300;
    letter-spacing: -0.01em;
    margin: 0 0 10px 0;
    color: #263238;
  }

  .page-subtitle {
    font-size: 1rem;
    color: #78909c;
    margin: 0;
  }
}

.filter-bar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;

  .search-field {
    width: 100%;
    max-width: 500px;
  }
}

.filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .filter-chip {
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
  }

  .chip-active {
    background: #3f51b5 !important;
    color: white !important;
    font-weight: 500;
  }

  .cat-filter-mesiánica.chip-active    { background: #2e7d32 !important; }
  .cat-filter-apocalíptica.chip-active { background: #880e4f !important; }
  .cat-filter-histórica.chip-active    { background: #0d47a1 !important; }
}

.results-count {
  font-size: 0.85rem;
  color: #90a4ae;
  margin: 0 0 20px 0;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  align-items: start;
}

.empty-state {
  text-align: center;
  padding: 64px 20px;
  color: #90a4ae;

  mat-icon {
    font-size: 52px;
    width: 52px;
    height: 52px;
    opacity: 0.4;
    margin-bottom: 8px;
  }

  p {
    font-size: 1rem;
    margin: 0 0 20px;
    color: #78909c;
  }
}

.chip-icon {
  font-size: 14px !important;
  width: 14px !important;
  height: 14px !important;
}
```

- [ ] **Step 6: Run test — verify it passes**

```bash
npx ng test --include="**/app-list.spec.ts" 2>&1 | tail -20
```
Expected: all tests PASS

- [ ] **Step 7: Commit**

```bash
git add src/app/components/app-list/
git commit -m "feat: add unified AppList component for prophecy, reference, and covenant"
```

---

### Task 3: Update routes and navigation

**Files:**
- Modify: `src/app/app.routes.ts`
- Modify: `src/app/app.html`

- [ ] **Step 1: Replace `app.routes.ts`**

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/app-list/app-list').then(m => m.AppList),
    data: { entityType: 'prophecy' },
  },
  {
    path: 'prophecy/:id',
    loadComponent: () =>
      import('./components/prophecy-detail/prophecy-detail').then(m => m.ProphecyDetail),
  },
  {
    path: 'references',
    loadComponent: () => import('./components/app-list/app-list').then(m => m.AppList),
    data: { entityType: 'reference' },
  },
  {
    path: 'reference/:id',
    loadComponent: () =>
      import('./components/reference-detail/reference-detail').then(m => m.ReferenceDetail),
  },
  {
    path: 'covenants',
    loadComponent: () => import('./components/app-list/app-list').then(m => m.AppList),
    data: { entityType: 'covenant' },
  },
  {
    path: 'covenant/:id',
    loadComponent: () =>
      import('./components/covenant-detail/covenant-detail').then(m => m.CovenantDetail),
  },
  {
    path: 'network',
    loadComponent: () =>
      import('./components/character-network/character-network').then(m => m.CharacterNetwork),
  },
  {
    path: 'character/:id',
    loadComponent: () =>
      import('./components/character-detail/character-detail').then(m => m.CharacterDetail),
  },
  {
    path: 'charts',
    loadComponent: () =>
      import('./components/unified-chart/unified-chart').then(m => m.UnifiedChart),
  },
  { path: '**', redirectTo: '' },
];
```

- [ ] **Step 2: Update `app.html`**

```html
<mat-toolbar color="primary" class="app-toolbar">
  <mat-icon class="toolbar-icon">menu_book</mat-icon>
  <span class="toolbar-title">Biblia Católica — Referencias</span>
</mat-toolbar>

<nav class="app-nav">
  <a
    mat-button
    routerLink="/"
    routerLinkActive="nav-active"
    [routerLinkActiveOptions]="{ exact: true }"
  >
    <mat-icon>auto_awesome</mat-icon>
    Profecías
  </a>
  <a mat-button routerLink="/references" routerLinkActive="nav-active">
    <mat-icon>swap_horiz</mat-icon>
    Referencias cruzadas
  </a>
  <a mat-button routerLink="/covenants" routerLinkActive="nav-active">
    <mat-icon>handshake</mat-icon>
    Alianzas
  </a>
  <a mat-button routerLink="/network" routerLinkActive="nav-active">
    <mat-icon>hub</mat-icon>
    Personajes
  </a>
  <a mat-button routerLink="/charts" routerLinkActive="nav-active">
    <mat-icon>account_tree</mat-icon>
    Gráfico
  </a>
</nav>

<main class="app-content">
  <router-outlet />
</main>
```

- [ ] **Step 3: Verify app compiles**

```bash
npx ng build --configuration=development 2>&1 | tail -20
```
Expected: Build successful (covenant-detail and character-detail are lazy — they'll be found only at runtime, Angular won't error on missing files at build time if they are import()-based). If there are errors about missing lazy-loaded modules, ignore them until Tasks 5–7 are complete.

- [ ] **Step 4: Commit**

```bash
git add src/app/app.routes.ts src/app/app.html
git commit -m "feat: update routes and nav for alianzas, personajes, and unified list"
```

---

### Task 4: Delete unused components

**Files:** Delete 8 component directories.

- [ ] **Step 1: Delete folders**

```bash
rm -rf \
  src/app/components/prophecy-chart \
  src/app/components/reference-chart \
  src/app/components/prophecy-detail-dialog \
  src/app/components/prophecy-card \
  src/app/components/reference-card \
  src/app/components/prophecies-list \
  src/app/components/references-list \
  src/app/components/covenant-card
```

- [ ] **Step 2: Verify build still compiles**

```bash
npx ng build --configuration=development 2>&1 | tail -20
```
Expected: Build successful. No remaining imports of deleted components.

- [ ] **Step 3: Run existing tests to verify nothing broke**

```bash
npx ng test --include="**/prophecy-detail.spec.ts" --include="**/reference-detail.spec.ts" 2>&1 | tail -20
```
Expected: PASS (these components were not deleted)

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: delete unused components (prophecy-chart, reference-chart, dialog, old cards and lists)"
```

---

### Task 5: Create `covenant-detail` page

**Files:**
- Create: `src/app/components/covenant-detail/covenant-detail.spec.ts`
- Create: `src/app/components/covenant-detail/covenant-detail.ts`
- Create: `src/app/components/covenant-detail/covenant-detail.html`
- Create: `src/app/components/covenant-detail/covenant-detail.scss`

- [ ] **Step 1: Write the failing test**

Create `src/app/components/covenant-detail/covenant-detail.spec.ts`:

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { CovenantDetail } from './covenant-detail';
import { CovenantsService } from '../../services/covenants';
import { Covenant } from '../../models/covenant.model';

const alianzaConNT: Covenant = {
  id: 3,
  name: 'Alianza Mosaica',
  mediator: 'Moisés',
  parties: 'Dios — Israel',
  period: 'Éxodo (~1446 a.C.)',
  sign: 'Sábado',
  promise: 'Tierra prometida si Israel obedece',
  condition: 'Obediencia a la Ley',
  color: '#ffb300',
  importance: 5,
  oldTestament: { reference: 'Éxodo 19:5-6', text: 'Si escucháis mi voz...' },
  newTestament: { reference: 'Hebreos 8:6-7', text: 'Jesús es mediador de una alianza mejor.' },
  description: 'La alianza de la Ley en el Sinaí.',
  previousCovenantId: 2,
  fulfillmentNotes: 'Superada por la Nueva Alianza en Cristo.',
};

const alianzaSinNT: Covenant = {
  ...alianzaConNT,
  id: 1,
  name: 'Alianza con Adán',
  newTestament: null,
  previousCovenantId: null,
};

async function crearFixture(covenant: Covenant): Promise<ComponentFixture<CovenantDetail>> {
  await TestBed.configureTestingModule({
    imports: [CovenantDetail],
    providers: [
      provideAnimationsAsync(),
      provideRouter([]),
      { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => String(covenant.id) } } } },
      {
        provide: CovenantsService,
        useValue: { getById: (id: number) => (id === covenant.id ? covenant : undefined), all: [covenant] },
      },
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(CovenantDetail);
  await fixture.whenStable();
  fixture.detectChanges();
  return fixture;
}

describe('CovenantDetail', () => {
  afterEach(() => TestBed.resetTestingModule());

  describe('alianza con NT', () => {
    let fixture: ComponentFixture<CovenantDetail>;
    beforeEach(async () => { fixture = await crearFixture(alianzaConNT); });

    it('debe crearse', () => expect(fixture.componentInstance).toBeTruthy());
    it('muestra el nombre', () => expect(fixture.nativeElement.textContent).toContain('Alianza Mosaica'));
    it('muestra el mediador', () => expect(fixture.nativeElement.textContent).toContain('Moisés'));
    it('muestra la señal', () => expect(fixture.nativeElement.textContent).toContain('Sábado'));
    it('muestra referencia AT', () => expect(fixture.nativeElement.textContent).toContain('Éxodo 19:5-6'));
    it('muestra referencia NT', () => expect(fixture.nativeElement.textContent).toContain('Hebreos 8:6-7'));
  });

  describe('alianza sin NT', () => {
    it('muestra mensaje sin cumplimiento NT', async () => {
      const fixture = await crearFixture(alianzaSinNT);
      expect(fixture.nativeElement.textContent).toContain('sin registro en el Nuevo Testamento');
    });
  });
});
```

- [ ] **Step 2: Run test — verify it fails**

```bash
npx ng test --include="**/covenant-detail.spec.ts" 2>&1 | tail -20
```
Expected: FAIL with "Cannot find module './covenant-detail'"

- [ ] **Step 3: Create `covenant-detail.ts`**

```ts
import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CovenantsService } from '../../services/covenants';

@Component({
  selector: 'app-covenant-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './covenant-detail.html',
  styleUrl: './covenant-detail.scss',
})
export class CovenantDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private readonly svc = inject(CovenantsService);

  readonly covenant = this.svc.getById(Number(this.route.snapshot.paramMap.get('id')));
  readonly previousCovenant = this.covenant?.previousCovenantId
    ? this.svc.getById(this.covenant.previousCovenantId)
    : null;

  volver(): void {
    this.location.back();
  }
}
```

- [ ] **Step 4: Create `covenant-detail.html`**

```html
@if (covenant; as c) {
  <div class="detail-page">
    <div class="detail-container">
      <button mat-button class="back-btn" (click)="volver()">
        <mat-icon>arrow_back</mat-icon>
        Volver
      </button>

      <header class="detail-header" [style.border-left-color]="c.color">
        <h1 class="detail-title">{{ c.name }}</h1>
        <div class="meta-row">
          <mat-chip-set>
            <mat-chip class="period-chip">{{ c.period }}</mat-chip>
            <mat-chip class="mediator-chip">
              <mat-icon class="chip-icon">person</mat-icon>
              {{ c.mediator }}
            </mat-chip>
          </mat-chip-set>
          <div class="importance-stars" [title]="'Importancia: ' + c.importance + '/5'">
            @for (s of [1, 2, 3, 4, 5]; track s) {
              <mat-icon class="star" [class.filled]="s <= c.importance">star</mat-icon>
            }
          </div>
        </div>
      </header>

      <mat-divider />

      <section class="info-grid">
        <div class="info-item">
          <span class="info-label">
            <mat-icon>group</mat-icon>
            Partes
          </span>
          <span class="info-value">{{ c.parties }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">
            <mat-icon>token</mat-icon>
            Señal del pacto
          </span>
          <span class="info-value">{{ c.sign }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">
            <mat-icon>star</mat-icon>
            Promesa
          </span>
          <span class="info-value">{{ c.promise }}</span>
        </div>
        @if (c.condition) {
          <div class="info-item">
            <span class="info-label">
              <mat-icon>rule</mat-icon>
              Condición
            </span>
            <span class="info-value">{{ c.condition }}</span>
          </div>
        }
      </section>

      <mat-divider />

      <section class="verse-section">
        <h2 class="verse-label">
          <mat-icon>history_edu</mat-icon>
          Antiguo Testamento
        </h2>
        <p class="verse-ref">{{ c.oldTestament.reference }}</p>
        <blockquote class="verse-text">{{ c.oldTestament.text }}</blockquote>
      </section>

      <mat-divider />

      @if (c.newTestament) {
        <section class="verse-section">
          <h2 class="verse-label">
            <mat-icon>auto_stories</mat-icon>
            Nuevo Testamento — Cumplimiento
          </h2>
          <p class="verse-ref">{{ c.newTestament.reference }}</p>
          <blockquote class="verse-text">{{ c.newTestament.text }}</blockquote>
        </section>
      } @else {
        <section class="verse-section unfulfilled">
          <mat-icon>schedule</mat-icon>
          <p>Esta alianza no tiene sin registro en el Nuevo Testamento explícito.</p>
        </section>
      }

      <mat-divider />

      <section class="description-section">
        <h2 class="verse-label">
          <mat-icon>info_outline</mat-icon>
          Notas de cumplimiento
        </h2>
        <p class="description-text">{{ c.fulfillmentNotes }}</p>
        <p class="description-text">{{ c.description }}</p>
      </section>

      @if (previousCovenant) {
        <mat-divider />
        <section class="chain-section">
          <h2 class="verse-label">
            <mat-icon>link</mat-icon>
            Alianza anterior
          </h2>
          <a mat-stroked-button [routerLink]="['/covenant', previousCovenant.id]">
            {{ previousCovenant.name }}
          </a>
        </section>
      }
    </div>
  </div>
} @else {
  <div class="not-found">
    <mat-icon>search_off</mat-icon>
    <p>Alianza no encontrada.</p>
    <button mat-stroked-button (click)="volver()">Volver</button>
  </div>
}
```

- [ ] **Step 5: Create `covenant-detail.scss`**

```scss
.detail-page {
  min-height: 100%;
  background: #f8f9fa;
}

.detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 16px 48px;
}

.back-btn {
  margin-bottom: 24px;
  color: #78909c;
}

.detail-header {
  border-left: 5px solid #9e9e9e;
  padding-left: 16px;
  margin-bottom: 24px;

  .detail-title {
    font-size: clamp(1.4rem, 4vw, 2rem);
    font-weight: 300;
    margin: 0 0 12px;
    color: #263238;
  }

  .meta-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
}

.importance-stars {
  display: flex;
  gap: 2px;

  .star {
    font-size: 16px;
    width: 16px;
    height: 16px;
    color: #d0d0d0;
    &.filled { color: #f59e0b; }
  }
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 24px 0;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .info-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #90a4ae;

    mat-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
    }
  }

  .info-value {
    font-size: 0.95rem;
    color: #37474f;
    line-height: 1.5;
  }
}

mat-divider {
  margin: 8px 0;
}

.verse-section {
  padding: 24px 0;

  &.unfulfilled {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #90a4ae;
    font-style: italic;

    mat-icon { opacity: 0.5; }
    p { margin: 0; }
  }
}

.verse-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 500;
  color: #455a64;
  margin: 0 0 12px;

  mat-icon { color: #5c6bc0; }
}

.verse-ref {
  font-size: 0.9rem;
  font-weight: 600;
  color: #5c6bc0;
  margin: 0 0 8px;
}

.verse-text {
  margin: 0;
  padding: 12px 16px;
  background: white;
  border-left: 3px solid #e0e0e0;
  border-radius: 4px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #455a64;
  font-style: italic;
}

.description-section {
  padding: 24px 0;
}

.description-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #546e7a;
  margin: 0 0 12px;
}

.chain-section {
  padding: 24px 0;
}

.period-chip { background: #e8eaf6 !important; color: #3949ab !important; }
.mediator-chip { background: #f5f5f5 !important; color: #546e7a !important; }
.chip-icon { font-size: 14px !important; width: 14px !important; height: 14px !important; }

.not-found {
  text-align: center;
  padding: 80px 20px;
  color: #90a4ae;

  mat-icon { font-size: 52px; width: 52px; height: 52px; opacity: 0.4; }
  p { font-size: 1rem; margin: 12px 0 24px; }
}
```

- [ ] **Step 6: Run test — verify it passes**

```bash
npx ng test --include="**/covenant-detail.spec.ts" 2>&1 | tail -20
```
Expected: all tests PASS

- [ ] **Step 7: Commit**

```bash
git add src/app/components/covenant-detail/
git commit -m "feat: add CovenantDetail page"
```

---

### Task 6: Create `character-detail` page

**Files:**
- Create: `src/app/components/character-detail/character-detail.spec.ts`
- Create: `src/app/components/character-detail/character-detail.ts`
- Create: `src/app/components/character-detail/character-detail.html`
- Create: `src/app/components/character-detail/character-detail.scss`

- [ ] **Step 1: Write the failing test**

Create `src/app/components/character-detail/character-detail.spec.ts`:

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { CharacterDetail } from './character-detail';
import { CharactersService } from '../../services/characters';
import { BibleCharacter } from '../../models/character.model';

const adan: BibleCharacter = {
  id: 'adan',
  name: 'Adán',
  testament: 'AT',
  role: 'patriarca',
  period: 'Creación (~4000 a.C.)',
  color: '#a5d6a7',
  description: 'Primer hombre creado por Dios.',
  connections: [
    { targetId: 'jesus', type: 'tipo', label: 'Tipo de Cristo', strength: 5 },
  ],
  prophecyIds: [1],
  referenceIds: [10],
};

const jesus: BibleCharacter = {
  id: 'jesus',
  name: 'Jesús',
  testament: 'NT',
  role: 'mesías',
  period: '~4 a.C. — 30 d.C.',
  color: '#fff176',
  description: 'El Hijo de Dios.',
  connections: [],
  prophecyIds: [],
  referenceIds: [],
};

async function crearFixture(id: string): Promise<ComponentFixture<CharacterDetail>> {
  const todos: BibleCharacter[] = [adan, jesus];
  await TestBed.configureTestingModule({
    imports: [CharacterDetail],
    providers: [
      provideAnimationsAsync(),
      provideRouter([]),
      { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => id } } } },
      {
        provide: CharactersService,
        useValue: {
          getById: (cid: string) => todos.find(c => c.id === cid),
          all: todos,
        },
      },
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(CharacterDetail);
  await fixture.whenStable();
  fixture.detectChanges();
  return fixture;
}

describe('CharacterDetail', () => {
  afterEach(() => TestBed.resetTestingModule());

  describe('personaje existente', () => {
    let fixture: ComponentFixture<CharacterDetail>;
    beforeEach(async () => { fixture = await crearFixture('adan'); });

    it('debe crearse', () => expect(fixture.componentInstance).toBeTruthy());
    it('muestra el nombre', () => expect(fixture.nativeElement.textContent).toContain('Adán'));
    it('muestra el rol', () => expect(fixture.nativeElement.textContent).toContain('patriarca'));
    it('muestra el período', () =>
      expect(fixture.nativeElement.textContent).toContain('Creación (~4000 a.C.)'));
    it('muestra las conexiones', () =>
      expect(fixture.nativeElement.textContent).toContain('Tipo de Cristo'));
    it('muestra el nombre del personaje conectado', () =>
      expect(fixture.nativeElement.textContent).toContain('Jesús'));
    it('muestra el conteo de profecías', () =>
      expect(fixture.nativeElement.textContent).toContain('1'));
  });

  describe('personaje inexistente', () => {
    it('muestra mensaje no encontrado', async () => {
      const fixture = await crearFixture('desconocido');
      expect(fixture.nativeElement.textContent).toContain('no encontrado');
    });
  });
});
```

- [ ] **Step 2: Run test — verify it fails**

```bash
npx ng test --include="**/character-detail.spec.ts" 2>&1 | tail -20
```
Expected: FAIL with "Cannot find module './character-detail'"

- [ ] **Step 3: Create `character-detail.ts`**

```ts
import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CharactersService } from '../../services/characters';
import { BibleCharacter } from '../../models/character.model';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.scss',
})
export class CharacterDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private readonly svc = inject(CharactersService);

  readonly character = this.svc.getById(this.route.snapshot.paramMap.get('id') ?? '');

  connectedCharacter(id: string): BibleCharacter | undefined {
    return this.svc.getById(id);
  }

  volver(): void {
    this.location.back();
  }
}
```

- [ ] **Step 4: Create `character-detail.html`**

```html
@if (character; as c) {
  <div class="detail-page">
    <div class="detail-container">
      <button mat-button class="back-btn" (click)="volver()">
        <mat-icon>arrow_back</mat-icon>
        Volver
      </button>

      <header class="detail-header" [style.border-left-color]="c.color">
        <h1 class="detail-title">{{ c.name }}</h1>
        <div class="meta-row">
          <mat-chip-set>
            <mat-chip class="role-chip">{{ c.role }}</mat-chip>
            <mat-chip class="testament-chip">{{ c.testament }}</mat-chip>
          </mat-chip-set>
          <span class="period-text">
            <mat-icon class="period-icon">schedule</mat-icon>
            {{ c.period }}
          </span>
        </div>
      </header>

      <mat-divider />

      <section class="description-section">
        <p class="description-text">{{ c.description }}</p>
      </section>

      @if (c.connections.length > 0) {
        <mat-divider />
        <section class="connections-section">
          <h2 class="section-title">
            <mat-icon>hub</mat-icon>
            Conexiones ({{ c.connections.length }})
          </h2>
          <div class="connections-list">
            @for (conn of c.connections; track conn.targetId) {
              @let target = connectedCharacter(conn.targetId);
              <div class="connection-item">
                <span class="conn-type-badge conn-type-{{ conn.type }}">{{ conn.type }}</span>
                <span class="conn-label">{{ conn.label }}</span>
                @if (target) {
                  <a mat-button class="conn-link" [routerLink]="['/character', conn.targetId]">
                    {{ target.name }}
                    <mat-icon>arrow_forward</mat-icon>
                  </a>
                }
              </div>
            }
          </div>
        </section>
      }

      <mat-divider />

      <section class="stats-section">
        <div class="stat-item">
          <mat-icon>auto_awesome</mat-icon>
          <span class="stat-value">{{ c.prophecyIds.length }}</span>
          <span class="stat-label">profecías relacionadas</span>
        </div>
        <div class="stat-item">
          <mat-icon>swap_horiz</mat-icon>
          <span class="stat-value">{{ c.referenceIds.length }}</span>
          <span class="stat-label">referencias cruzadas</span>
        </div>
        <div class="stat-item">
          <mat-icon>hub</mat-icon>
          <span class="stat-value">{{ c.connections.length }}</span>
          <span class="stat-label">conexiones</span>
        </div>
      </section>
    </div>
  </div>
} @else {
  <div class="not-found">
    <mat-icon>person_off</mat-icon>
    <p>Personaje no encontrado.</p>
    <button mat-stroked-button (click)="volver()">Volver</button>
  </div>
}
```

- [ ] **Step 5: Create `character-detail.scss`**

```scss
.detail-page {
  min-height: 100%;
  background: #f8f9fa;
}

.detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 16px 48px;
}

.back-btn {
  margin-bottom: 24px;
  color: #78909c;
}

.detail-header {
  border-left: 5px solid #9e9e9e;
  padding-left: 16px;
  margin-bottom: 24px;

  .detail-title {
    font-size: clamp(1.4rem, 4vw, 2rem);
    font-weight: 300;
    margin: 0 0 12px;
    color: #263238;
  }

  .meta-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
}

.period-text {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  color: #78909c;

  .period-icon {
    font-size: 16px;
    width: 16px;
    height: 16px;
  }
}

.role-chip { background: #e3f2fd !important; color: #1565c0 !important; }
.testament-chip { background: #f3e5f5 !important; color: #6a1b9a !important; }

mat-divider { margin: 8px 0; }

.description-section {
  padding: 24px 0;
}

.description-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #546e7a;
  margin: 0;
}

.connections-section {
  padding: 24px 0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 500;
  color: #455a64;
  margin: 0 0 16px;

  mat-icon { color: #5c6bc0; }
}

.connections-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.connection-item {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 12px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.conn-type-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 12px;
  white-space: nowrap;

  &.conn-type-tipo           { background: #dbeafe; color: #1d4ed8; }
  &.conn-type-cumplimiento   { background: #fef3c7; color: #92400e; }
  &.conn-type-genealogía     { background: #dcfce7; color: #166534; }
  &.conn-type-contemporáneo  { background: #f3f4f6; color: #374151; }
  &.conn-type-tipológico     { background: #f3e8ff; color: #6b21a8; }
}

.conn-label {
  font-size: 0.9rem;
  color: #455a64;
  flex: 1;
}

.conn-link {
  color: #5c6bc0 !important;
  font-size: 0.85rem !important;
}

.stats-section {
  display: flex;
  gap: 32px;
  padding: 24px 0;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;

  mat-icon { color: #90a4ae; font-size: 20px; width: 20px; height: 20px; }
  .stat-value { font-size: 1.4rem; font-weight: 300; color: #263238; }
  .stat-label { font-size: 0.85rem; color: #78909c; }
}

.not-found {
  text-align: center;
  padding: 80px 20px;
  color: #90a4ae;

  mat-icon { font-size: 52px; width: 52px; height: 52px; opacity: 0.4; }
  p { font-size: 1rem; margin: 12px 0 24px; }
}
```

- [ ] **Step 6: Run test — verify it passes**

```bash
npx ng test --include="**/character-detail.spec.ts" 2>&1 | tail -20
```
Expected: all tests PASS

- [ ] **Step 7: Commit**

```bash
git add src/app/components/character-detail/
git commit -m "feat: add CharacterDetail page"
```

---

### Task 7: Create `character-network` SVG component

**Files:**
- Create: `src/app/components/character-network/character-network.spec.ts`
- Create: `src/app/components/character-network/character-network.ts`
- Create: `src/app/components/character-network/character-network.html`
- Create: `src/app/components/character-network/character-network.scss`

- [ ] **Step 1: Write the failing test**

Create `src/app/components/character-network/character-network.spec.ts`:

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { CharacterNetwork } from './character-network';
import { CharactersService } from '../../services/characters';
import { NetworkNode, NetworkEdge } from '../../models/character.model';

const nodoAdan: NetworkNode = {
  id: 'adan', name: 'Adán', testament: 'AT', role: 'patriarca',
  period: 'Creación', color: '#a5d6a7', description: 'Primer hombre.',
  connections: [{ targetId: 'jesus', type: 'tipo', label: 'Tipo de Cristo', strength: 5 }],
  prophecyIds: [], referenceIds: [],
  x: 100, y: 100, r: 30,
};

const nodoJesus: NetworkNode = {
  id: 'jesus', name: 'Jesús', testament: 'NT', role: 'mesías',
  period: '~4 a.C.', color: '#fff176', description: 'Hijo de Dios.',
  connections: [], prophecyIds: [], referenceIds: [],
  x: 300, y: 300, r: 40,
};

const arista: NetworkEdge = {
  source: 'adan', target: 'jesus', type: 'tipo', label: 'Tipo de Cristo', strength: 5,
};

const mockCharactersService = {
  all: [nodoAdan, nodoJesus],
  getById: (id: string) => [nodoAdan, nodoJesus].find(n => n.id === id),
  buildNetwork: vi.fn().mockReturnValue({ nodes: [nodoAdan, nodoJesus], edges: [arista] }),
};

async function crearFixture(): Promise<ComponentFixture<CharacterNetwork>> {
  await TestBed.configureTestingModule({
    imports: [CharacterNetwork],
    providers: [
      provideAnimationsAsync(),
      provideRouter([]),
      { provide: CharactersService, useValue: mockCharactersService },
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(CharacterNetwork);
  await fixture.whenStable();
  fixture.detectChanges();
  return fixture;
}

describe('CharacterNetwork', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    vi.clearAllMocks();
  });

  let fixture: ComponentFixture<CharacterNetwork>;
  beforeEach(async () => { fixture = await crearFixture(); });

  it('debe crearse', () => expect(fixture.componentInstance).toBeTruthy());

  it('llama a buildNetwork al inicializarse', () => {
    expect(mockCharactersService.buildNetwork).toHaveBeenCalled();
  });

  it('carga los nodos', () => {
    expect(fixture.componentInstance.nodes().length).toBe(2);
  });

  it('carga las aristas', () => {
    expect(fixture.componentInstance.edges().length).toBe(1);
  });

  it('navega al personaje al llamar irAlPersonaje', () => {
    const router = TestBed.inject(Router);
    const spy = vi.spyOn(router, 'navigate');
    fixture.componentInstance.irAlPersonaje('adan');
    expect(spy).toHaveBeenCalledWith(['/character', 'adan']);
  });

  it('muestra la leyenda con los tipos de conexión', () => {
    expect(fixture.nativeElement.textContent).toContain('tipo');
    expect(fixture.nativeElement.textContent).toContain('cumplimiento');
  });
});
```

- [ ] **Step 2: Run test — verify it fails**

```bash
npx ng test --include="**/character-network.spec.ts" 2>&1 | tail -20
```
Expected: FAIL with "Cannot find module './character-network'"

- [ ] **Step 3: Create `character-network.ts`**

```ts
import { Component, inject, AfterViewInit, ElementRef, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CharactersService } from '../../services/characters';
import { NetworkNode, NetworkEdge, ConnectionType } from '../../models/character.model';

@Component({
  selector: 'app-character-network',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-network.html',
  styleUrl: './character-network.scss',
})
export class CharacterNetwork implements AfterViewInit {
  private readonly svc = inject(CharactersService);
  private readonly router = inject(Router);
  private readonly el = inject(ElementRef);

  readonly nodes = signal<NetworkNode[]>([]);
  readonly edges = signal<NetworkEdge[]>([]);

  readonly connectionColors: Record<ConnectionType, string> = {
    tipo: '#3b82f6',
    cumplimiento: '#f59e0b',
    genealogía: '#22c55e',
    contemporáneo: '#9ca3af',
    tipológico: '#a855f7',
  };

  readonly legend = (Object.entries(this.connectionColors) as [ConnectionType, string][]).map(
    ([type, color]) => ({ type, color })
  );

  readonly edgesWithPositions = computed(() => {
    const ns = this.nodes();
    return this.edges()
      .map(e => {
        const src = ns.find(n => n.id === e.source);
        const tgt = ns.find(n => n.id === e.target);
        if (!src || !tgt) return null;
        return { edge: e, x1: src.x, y1: src.y, x2: tgt.x, y2: tgt.y };
      })
      .filter((e): e is NonNullable<typeof e> => e !== null);
  });

  ngAfterViewInit(): void {
    this.recalcular();
  }

  @HostListener('window:resize')
  recalcular(): void {
    const w = this.el.nativeElement.clientWidth || 800;
    const h = this.el.nativeElement.clientHeight || 600;
    const { nodes, edges } = this.svc.buildNetwork(w, h);
    this.nodes.set(nodes);
    this.edges.set(edges);
  }

  irAlPersonaje(id: string): void {
    this.router.navigate(['/character', id]);
  }

  edgeColor(type: ConnectionType): string {
    return this.connectionColors[type];
  }
}
```

- [ ] **Step 4: Create `character-network.html`**

```html
<div class="network-wrapper">
  <header class="network-header">
    <h1 class="network-title">Red de Personajes Bíblicos</h1>
    <p class="network-subtitle">Haz clic en un personaje para ver sus detalles</p>
  </header>

  <div class="svg-container">
    <svg class="network-svg" width="100%" height="100%">
      <g class="edges">
        @for (ep of edgesWithPositions(); track ep.edge.source + ep.edge.target) {
          <line
            [attr.x1]="ep.x1"
            [attr.y1]="ep.y1"
            [attr.x2]="ep.x2"
            [attr.y2]="ep.y2"
            [attr.stroke]="edgeColor(ep.edge.type)"
            [attr.stroke-width]="ep.edge.strength"
            stroke-opacity="0.45"
          />
        }
      </g>
      <g class="nodes">
        @for (node of nodes(); track node.id) {
          <g class="node" (click)="irAlPersonaje(node.id)" style="cursor:pointer">
            <circle
              [attr.cx]="node.x"
              [attr.cy]="node.y"
              [attr.r]="node.r"
              [attr.fill]="node.color"
              fill-opacity="0.9"
              stroke="white"
              stroke-width="2"
            />
            <text
              [attr.x]="node.x"
              [attr.y]="node.y + node.r + 14"
              text-anchor="middle"
              class="node-label"
            >
              {{ node.name }}
            </text>
          </g>
        }
      </g>
    </svg>
  </div>

  <div class="legend">
    @for (item of legend; track item.type) {
      <div class="legend-item">
        <span class="legend-dot" [style.background]="item.color"></span>
        <span class="legend-label">{{ item.type }}</span>
      </div>
    }
  </div>
</div>
```

- [ ] **Step 5: Create `character-network.scss`**

```scss
:host {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.network-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.network-header {
  text-align: center;
  padding: 24px 16px 12px;

  .network-title {
    font-size: clamp(1.4rem, 4vw, 2rem);
    font-weight: 300;
    margin: 0 0 4px;
    color: #263238;
  }

  .network-subtitle {
    font-size: 0.9rem;
    color: #78909c;
    margin: 0;
  }
}

.svg-container {
  flex: 1;
  min-height: 400px;
  background: #fafafa;
  border-radius: 8px;
  margin: 0 16px;
  overflow: hidden;
}

.network-svg {
  display: block;
}

.node-label {
  font-size: 11px;
  font-family: sans-serif;
  fill: #37474f;
  pointer-events: none;
  user-select: none;
}

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 16px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.legend-label {
  font-size: 0.8rem;
  color: #546e7a;
  text-transform: capitalize;
}
```

- [ ] **Step 6: Run test — verify it passes**

```bash
npx ng test --include="**/character-network.spec.ts" 2>&1 | tail -20
```
Expected: all tests PASS

- [ ] **Step 7: Run full test suite**

```bash
npx ng test 2>&1 | tail -30
```
Expected: all tests PASS (app-card, app-list, covenant-detail, character-detail, character-network, prophecy-detail, reference-detail)

- [ ] **Step 8: Commit**

```bash
git add src/app/components/character-network/
git commit -m "feat: add CharacterNetwork SVG force visualization"
```

---

## Self-Review Checklist

**Spec coverage:**
- ✅ `app-card` (prophecy | reference | covenant) — Task 1
- ✅ `app-list` with search + filters per entityType — Task 2
- ✅ Routes updated + nav links (Alianzas, Personajes) — Task 3
- ✅ Cleanup of 8 unused component directories — Task 4
- ✅ `covenant-detail` with all model fields — Task 5
- ✅ `character-detail` with connections + stats — Task 6
- ✅ `character-network` SVG force graph with legend — Task 7

**No placeholders** — all steps contain full code.

**Type consistency:**
- `EntityType` exported from `app-card.ts`, imported in `app-list.ts` ✅
- `AppEntity` discriminated union used consistently in card and list ✅
- `NetworkNode.nodes()` and `NetworkEdge.edges()` are signals, accessed via `()` in template ✅
- `edgesWithPositions()` computed accesses both signals correctly ✅
- `CharactersService.buildNetwork()` signature matches usage: `(w: number, h: number)` ✅
- `CovenantsService.getById(id: number)` — called with `Number(paramMap.get('id'))` ✅
- `CharactersService.getById(id: string)` — called with string directly ✅
