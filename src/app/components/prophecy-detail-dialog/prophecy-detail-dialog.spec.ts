import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ProphecyDetailDialog } from './prophecy-detail-dialog';
import { Prophecy } from '../../models/prophecy.model';

const profeciaConNT: Prophecy = {
  id: 1,
  title: 'Nacimiento virginal del Mesías',
  category: 'mesiánica',
  theme: 'nacimiento',
  importance: 5,
  oldTestament: {
    reference: 'Isaías 7:14',
    text: 'He aquí que la virgen concebirá y dará a luz un hijo.'
  },
  newTestament: {
    reference: 'Mateo 1:22-23',
    text: 'Todo esto aconteció para que se cumpliese lo dicho por el profeta.'
  },
  description: 'Descripción completa de la profecía del nacimiento virginal.'
};

const profeciasinNT: Prophecy = {
  ...profeciaConNT,
  id: 15,
  title: 'El retorno del exilio babilónico',
  category: 'histórica',
  theme: 'restauración',
  newTestament: null,
  description: 'Profecía cumplida antes de la venida de Cristo.'
};

async function crearFixture(profecia: Prophecy): Promise<ComponentFixture<ProphecyDetailDialog>> {
  await TestBed.configureTestingModule({
    imports: [ProphecyDetailDialog],
    providers: [
      provideAnimationsAsync(),
      { provide: MAT_DIALOG_DATA, useValue: { prophecy: profecia } },
      { provide: MatDialogRef, useValue: {} }
    ]
  }).compileComponents();

  const fixture = TestBed.createComponent(ProphecyDetailDialog);
  fixture.detectChanges();
  return fixture;
}

describe('ProphecyDetailDialog', () => {
  afterEach(() => TestBed.resetTestingModule());

  describe('con cumplimiento en el NT', () => {
    let fixture: ComponentFixture<ProphecyDetailDialog>;

    beforeEach(async () => {
      fixture = await crearFixture(profeciaConNT);
    });

    it('debe crearse correctamente', () => {
      expect(fixture.componentInstance).toBeTruthy();
    });

    it('debe exponer la profecía recibida', () => {
      expect(fixture.componentInstance.p).toEqual(profeciaConNT);
    });

    it('debe mostrar el título', () => {
      expect(fixture.nativeElement.textContent).toContain('Nacimiento virginal del Mesías');
    });

    it('debe mostrar la referencia del AT', () => {
      expect(fixture.nativeElement.textContent).toContain('Isaías 7:14');
    });

    it('debe mostrar el texto del versículo del AT', () => {
      expect(fixture.nativeElement.textContent).toContain('la virgen concebirá');
    });

    it('debe mostrar la referencia del NT', () => {
      expect(fixture.nativeElement.textContent).toContain('Mateo 1:22-23');
    });

    it('debe mostrar la descripción', () => {
      expect(fixture.nativeElement.textContent).toContain('nacimiento virginal');
    });
  });

  describe('sin cumplimiento en el NT', () => {
    let fixture: ComponentFixture<ProphecyDetailDialog>;

    beforeEach(async () => {
      fixture = await crearFixture(profeciasinNT);
    });

    it('debe crearse correctamente', () => {
      expect(fixture.componentInstance).toBeTruthy();
    });

    it('debe mostrar aviso de ausencia de NT', () => {
      expect(fixture.nativeElement.textContent).toContain(
        'no tiene registro de cumplimiento en el Nuevo Testamento'
      );
    });

    it('no debe mostrar referencia de Mateo', () => {
      expect(fixture.nativeElement.textContent).not.toContain('Mateo');
    });
  });
});
