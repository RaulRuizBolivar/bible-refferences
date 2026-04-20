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
