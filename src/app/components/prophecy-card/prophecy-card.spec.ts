import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { ProphecyCard } from './prophecy-card';
import { Prophecy } from '../../models/prophecy.model';

const profeciaConNT: Prophecy = {
  id: 1,
  title: 'Nacimiento virginal del Mesías',
  category: 'mesiánica',
  theme: 'nacimiento',
  oldTestament: {
    reference: 'Isaías 7:14',
    text: 'He aquí que la virgen concebirá...'
  },
  newTestament: {
    reference: 'Mateo 1:22-23',
    text: 'Todo esto aconteció para que se cumpliese...'
  },
  description: 'Descripción de prueba de la profecía mesiánica.'
};

const profeciasinNT: Prophecy = {
  ...profeciaConNT,
  id: 99,
  newTestament: null,
  description: 'Profecía sin cumplimiento en el NT.'
};

const dialogOpen = vi.fn();

async function crearFixture(prophecy: Prophecy): Promise<ComponentFixture<ProphecyCard>> {
  await TestBed.configureTestingModule({
    imports: [ProphecyCard],
    providers: [
      provideAnimationsAsync(),
      { provide: MatDialog, useValue: { open: dialogOpen } }
    ]
  }).compileComponents();

  const fixture = TestBed.createComponent(ProphecyCard);
  fixture.componentInstance.prophecy = prophecy;
  await fixture.whenStable();
  fixture.detectChanges();
  return fixture;
}

describe('ProphecyCard', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    vi.clearAllMocks();
  });

  describe('con Nuevo Testamento', () => {
    let fixture: ComponentFixture<ProphecyCard>;

    beforeEach(async () => {
      fixture = await crearFixture(profeciaConNT);
    });

    it('debe crearse correctamente', () => {
      expect(fixture.componentInstance).toBeTruthy();
    });

    it('debe mostrar el título de la profecía', () => {
      expect(fixture.nativeElement.textContent).toContain('Nacimiento virginal del Mesías');
    });

    it('debe mostrar la referencia del Antiguo Testamento', () => {
      expect(fixture.nativeElement.textContent).toContain('Isaías 7:14');
    });

    it('debe mostrar la referencia del Nuevo Testamento', () => {
      expect(fixture.nativeElement.textContent).toContain('Mateo 1:22-23');
    });

    it('debe abrir el diálogo al pulsar "Ver detalles"', () => {
      const boton = fixture.debugElement.query(By.css('button[color="primary"]'));
      boton.nativeElement.click();
      expect(dialogOpen).toHaveBeenCalledWith(
        expect.any(Function),
        expect.objectContaining({ data: { prophecy: profeciaConNT } })
      );
    });
  });

  describe('sin Nuevo Testamento', () => {
    let fixture: ComponentFixture<ProphecyCard>;

    beforeEach(async () => {
      fixture = await crearFixture(profeciasinNT);
    });

    it('debe mostrar aviso cuando no hay NT', () => {
      expect(fixture.nativeElement.textContent).toContain('Sin cumplimiento en el NT');
    });
  });
});
