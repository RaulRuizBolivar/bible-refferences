import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { PropheciesService } from './prophecies';

describe('PropheciesService', () => {
  let service: PropheciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropheciesService);
  });

  it('debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debe devolver todas las profecías sin filtros activos', () => {
    expect(service.filtered().length).toBe(61);
  });

  it('debe filtrar correctamente por categoría mesiánica', () => {
    service.setCategory('mesiánica');
    const resultado = service.filtered();
    expect(resultado.length).toBeGreaterThan(0);
    resultado.forEach(p => expect(p.category).toBe('mesiánica'));
  });

  it('debe filtrar correctamente por categoría apocalíptica', () => {
    service.setCategory('apocalíptica');
    const resultado = service.filtered();
    expect(resultado.length).toBeGreaterThan(0);
    resultado.forEach(p => expect(p.category).toBe('apocalíptica'));
  });

  it('debe filtrar correctamente por categoría histórica', () => {
    service.setCategory('histórica');
    const resultado = service.filtered();
    expect(resultado.length).toBeGreaterThan(0);
    resultado.forEach(p => expect(p.category).toBe('histórica'));
  });

  it('debe filtrar por texto en el título o tema', () => {
    service.setSearch('nacimiento');
    const resultado = service.filtered();
    expect(resultado.length).toBeGreaterThan(0);
    resultado.forEach(p => {
      const coincide =
        p.title.toLowerCase().includes('nacimiento') ||
        p.theme.toLowerCase().includes('nacimiento') ||
        p.oldTestament.reference.toLowerCase().includes('nacimiento') ||
        (p.newTestament?.reference.toLowerCase().includes('nacimiento') ?? false);
      expect(coincide).toBe(true);
    });
  });

  it('debe filtrar por referencia del Antiguo Testamento', () => {
    service.setSearch('Isaías');
    const resultado = service.filtered();
    expect(resultado.length).toBeGreaterThan(0);
    resultado.forEach(p =>
      expect(p.oldTestament.reference.toLowerCase()).toContain('isaías')
    );
  });

  it('debe combinar filtro de categoría y búsqueda por tema', () => {
    service.setCategory('mesiánica');
    service.setSearch('pasión');
    const resultado = service.filtered();
    resultado.forEach(p => {
      expect(p.category).toBe('mesiánica');
      expect(p.theme.toLowerCase()).toContain('pasión');
    });
  });

  it('debe devolver lista vacía si la búsqueda no coincide', () => {
    service.setSearch('xyz_texto_inexistente_12345');
    expect(service.filtered().length).toBe(0);
  });

  it('debe restaurar todas las profecías al limpiar los filtros', () => {
    service.setCategory('histórica');
    service.setSearch('destrucción');
    service.setCategory(null);
    service.setSearch('');
    expect(service.filtered().length).toBe(61);
  });

  it('debe exponer las tres categorías disponibles', () => {
    expect(service.categories).toEqual(['mesiánica', 'apocalíptica', 'histórica']);
  });
});
