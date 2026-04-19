import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { signal } from '@angular/core';
import { PropheciesList } from './prophecies-list';
import { PropheciesService } from '../../services/prophecies';

describe('PropheciesList', () => {
  let component: PropheciesList;
  let fixture: ComponentFixture<PropheciesList>;
  const setCategory = vi.fn();
  const setSearch = vi.fn();
  const filteredSignal = signal<any[]>([]);
  const activeCategorySignal = signal<any>(null);

  const mockService = {
    setCategory,
    setSearch,
    filtered: filteredSignal,
    activeCategory: activeCategorySignal,
    categories: ['mesiánica', 'apocalíptica', 'histórica'] as const
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    await TestBed.configureTestingModule({
      imports: [PropheciesList],
      providers: [
        provideAnimationsAsync(),
        { provide: PropheciesService, useValue: mockService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PropheciesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar el título de la página', () => {
    const texto = fixture.nativeElement.textContent;
    expect(texto).toContain('Profecías de la Biblia Católica');
  });

  it('debe llamar a setSearch al buscar', () => {
    component.onSearch('Isaías');
    expect(setSearch).toHaveBeenCalledWith('Isaías');
  });

  it('debe llamar a setCategory con la categoría seleccionada', () => {
    component.seleccionarCategoria('mesiánica');
    expect(setCategory).toHaveBeenCalledWith('mesiánica');
  });

  it('debe llamar a setCategory(null) para mostrar todas', () => {
    component.seleccionarCategoria(null);
    expect(setCategory).toHaveBeenCalledWith(null);
  });

  it('debe limpiar todos los filtros al llamar a limpiarFiltros()', () => {
    component.searchValue = 'Zacarías';
    component.limpiarFiltros();
    expect(component.searchValue).toBe('');
    expect(setSearch).toHaveBeenCalledWith('');
    expect(setCategory).toHaveBeenCalledWith(null);
  });

  it('debe mostrar el estado vacío cuando no hay resultados', () => {
    const texto = fixture.nativeElement.textContent;
    expect(texto).toContain('No se encontraron profecías');
  });
});
