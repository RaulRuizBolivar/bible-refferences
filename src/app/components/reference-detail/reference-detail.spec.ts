import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { ReferenceDetail } from './reference-detail';
import { ReferencesService } from '../../services/references';
import { CrossReference } from '../../models/cross-reference.model';

const refMock: CrossReference = {
  id: 1,
  title: 'Adán y Cristo: los dos hombres',
  type: 'tipología',
  theme: 'redención',
  importance: 5,
  verseA: {
    reference: 'Romanos 5:14',
    text: 'Adán fue figura del que había de venir.',
  },
  verseB: {
    reference: 'Génesis 2:7',
    text: 'Entonces Dios formó al hombre del polvo de la tierra.',
  },
  description: 'Adán es el prototipo de Cristo como cabeza de la humanidad.',
};

async function crearFixture(ref: CrossReference | undefined): Promise<ComponentFixture<ReferenceDetail>> {
  await TestBed.configureTestingModule({
    imports: [ReferenceDetail],
    providers: [
      provideAnimationsAsync(),
      provideRouter([]),
      {
        provide: ActivatedRoute,
        useValue: { snapshot: { paramMap: { get: () => String(ref?.id ?? 9999) } } },
      },
      {
        provide: ReferencesService,
        useValue: { getById: vi.fn().mockReturnValue(ref) },
      },
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(ReferenceDetail);
  fixture.detectChanges();
  return fixture;
}

describe('ReferenceDetail', () => {
  afterEach(() => TestBed.resetTestingModule());

  describe('con referencia encontrada', () => {
    let fixture: ComponentFixture<ReferenceDetail>;

    beforeEach(async () => {
      fixture = await crearFixture(refMock);
    });

    it('debe crearse correctamente', () => {
      expect(fixture.componentInstance).toBeTruthy();
    });

    it('debe exponer la referencia recibida', () => {
      expect(fixture.componentInstance.reference).toEqual(refMock);
    });

    it('debe mostrar el título', () => {
      expect(fixture.nativeElement.textContent).toContain('Adán y Cristo');
    });

    it('debe mostrar la referencia del AT', () => {
      expect(fixture.nativeElement.textContent).toContain('Génesis 2:7');
    });

    it('debe mostrar la referencia del NT', () => {
      expect(fixture.nativeElement.textContent).toContain('Romanos 5:14');
    });

    it('debe mostrar la descripción', () => {
      expect(fixture.nativeElement.textContent).toContain('cabeza de la humanidad');
    });
  });

  describe('con referencia no encontrada', () => {
    let fixture: ComponentFixture<ReferenceDetail>;

    beforeEach(async () => {
      fixture = await crearFixture(undefined);
    });

    it('debe crearse correctamente', () => {
      expect(fixture.componentInstance).toBeTruthy();
    });

    it('debe mostrar mensaje de no encontrado', () => {
      expect(fixture.nativeElement.textContent).toContain('Referencia no encontrada');
    });
  });
});
