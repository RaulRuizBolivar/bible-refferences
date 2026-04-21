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
