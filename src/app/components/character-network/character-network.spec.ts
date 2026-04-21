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
