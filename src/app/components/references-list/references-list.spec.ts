import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { signal } from '@angular/core';
import { ReferencesList } from './references-list';
import { ReferencesService } from '../../services/references';

describe('ReferencesList', () => {
  let component: ReferencesList;
  let fixture: ComponentFixture<ReferencesList>;
  const setType = vi.fn();
  const setSearch = vi.fn();
  const filteredSignal = signal<any[]>([]);
  const activeTypeSignal = signal<any>(null);

  const mockService = {
    setType,
    setSearch,
    filtered: filteredSignal,
    activeType: activeTypeSignal,
    types: ['tipología', 'cita directa', 'paralelo temático', 'alusión'] as const,
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    await TestBed.configureTestingModule({
      imports: [ReferencesList],
      providers: [
        provideAnimationsAsync(),
        provideRouter([]),
        { provide: ReferencesService, useValue: mockService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ReferencesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar el título de la página', () => {
    const texto = fixture.nativeElement.textContent;
    expect(texto).toContain('Referencias Cruzadas de la Biblia');
  });

  it('debe llamar a setSearch al buscar', () => {
    component.onSearch('Génesis');
    expect(setSearch).toHaveBeenCalledWith('Génesis');
  });

  it('debe llamar a setType con el tipo seleccionado', () => {
    component.seleccionarTipo('tipología');
    expect(setType).toHaveBeenCalledWith('tipología');
  });

  it('debe llamar a setType(null) para mostrar todas', () => {
    component.seleccionarTipo(null);
    expect(setType).toHaveBeenCalledWith(null);
  });

  it('debe limpiar todos los filtros al llamar a limpiarFiltros()', () => {
    component.searchValue = 'Adán';
    component.limpiarFiltros();
    expect(component.searchValue).toBe('');
    expect(setSearch).toHaveBeenCalledWith('');
    expect(setType).toHaveBeenCalledWith(null);
  });

  it('debe mostrar el estado vacío cuando no hay resultados', () => {
    const texto = fixture.nativeElement.textContent;
    expect(texto).toContain('No se encontraron referencias');
  });
});
