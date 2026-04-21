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
