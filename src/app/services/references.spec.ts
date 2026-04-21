import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { ReferencesService } from './references';

describe('ReferencesService', () => {
  let service: ReferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferencesService);
  });

  it('debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debe devolver todas las referencias sin filtros activos', () => {
    expect(service.filtered().length).toBe(114);
  });

  it('debe filtrar correctamente por tipo tipología', () => {
    service.setType('tipología');
    const resultado = service.filtered();
    expect(resultado.length).toBeGreaterThan(0);
    resultado.forEach(r => expect(r.type).toBe('tipología'));
  });

  it('debe filtrar correctamente por tipo cita directa', () => {
    service.setType('cita directa');
    const resultado = service.filtered();
    expect(resultado.length).toBeGreaterThan(0);
    resultado.forEach(r => expect(r.type).toBe('cita directa'));
  });

  it('debe filtrar correctamente por tipo paralelo temático', () => {
    service.setType('paralelo temático');
    const resultado = service.filtered();
    expect(resultado.length).toBeGreaterThan(0);
    resultado.forEach(r => expect(r.type).toBe('paralelo temático'));
  });

  it('debe filtrar correctamente por tipo alusión', () => {
    service.setType('alusión');
    const resultado = service.filtered();
    expect(resultado.length).toBeGreaterThan(0);
    resultado.forEach(r => expect(r.type).toBe('alusión'));
  });

  it('debe filtrar por texto en el título o tema', () => {
    service.setSearch('bautismo');
    const resultado = service.filtered();
    expect(resultado.length).toBeGreaterThan(0);
    resultado.forEach(r => {
      const coincide =
        r.title.toLowerCase().includes('bautismo') ||
        r.theme.toLowerCase().includes('bautismo') ||
        r.verseA.reference.toLowerCase().includes('bautismo') ||
        r.verseB.reference.toLowerCase().includes('bautismo');
      expect(coincide).toBe(true);
    });
  });

  it('debe devolver lista vacía si la búsqueda no coincide', () => {
    service.setSearch('xyz_inexistente_12345');
    expect(service.filtered().length).toBe(0);
  });

  it('debe restaurar todas las referencias al limpiar filtros', () => {
    service.setType('tipología');
    service.setSearch('cordero');
    service.setType(null);
    service.setSearch('');
    expect(service.filtered().length).toBe(114);
  });

  it('debe exponer los cuatro tipos disponibles', () => {
    expect(service.types).toEqual(['tipología', 'cita directa', 'paralelo temático', 'alusión']);
  });

  it('debe ordenar por importancia descendente', () => {
    const result = service.filtered();
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i].importance).toBeGreaterThanOrEqual(result[i + 1].importance);
    }
  });

  it('debe recuperar referencia por id', () => {
    const ref = service.getById(1);
    expect(ref).toBeDefined();
    expect(ref!.id).toBe(1);
  });

  it('debe devolver undefined para id inexistente', () => {
    expect(service.getById(9999)).toBeUndefined();
  });
});
