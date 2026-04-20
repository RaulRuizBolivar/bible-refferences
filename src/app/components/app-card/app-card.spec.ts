import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AppCard, AppEntity } from './app-card';
import { Prophecy } from '../../models/prophecy.model';
import { CrossReference } from '../../models/cross-reference.model';
import { Covenant } from '../../models/covenant.model';

const profecia: AppEntity = {
  kind: 'prophecy',
  data: {
    id: 1,
    title: 'Nacimiento virginal',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 5,
    oldTestament: { reference: 'Isaías 7:14', text: 'He aquí que la virgen...' },
    newTestament: { reference: 'Mateo 1:22-23', text: 'Todo esto aconteció...' },
    description: 'Descripción de prueba.',
  } as Prophecy,
};

const profeciasinNT: AppEntity = {
  kind: 'prophecy',
  data: { ...profecia.data as Prophecy, id: 2, newTestament: null },
};

const referencia: AppEntity = {
  kind: 'reference',
  data: {
    id: 10,
    title: 'Adán y Cristo',
    type: 'tipología',
    theme: 'redención',
    importance: 4,
    verseA: { reference: 'Romanos 5:14', text: 'Adán, figura del que había de venir.' },
    verseB: { reference: 'Génesis 3:15', text: 'Pondré enemistad...' },
    description: 'Descripción de referencia.',
  } as CrossReference,
};

const alianza: AppEntity = {
  kind: 'covenant',
  data: {
    id: 1,
    name: 'Alianza con Noé',
    mediator: 'Noé',
    parties: 'Dios — Noé y toda criatura viviente',
    period: 'Post-diluvio (~2350 a.C.)',
    sign: 'Arcoíris',
    promise: 'No volver a destruir la tierra con agua',
    condition: null,
    color: '#4fc3f7',
    importance: 3,
    oldTestament: { reference: 'Génesis 9:8-17', text: 'Yo estableceré mi alianza...' },
    newTestament: null,
    description: 'Descripción de alianza.',
    previousCovenantId: null,
    fulfillmentNotes: 'Cumplimiento universal.',
  } as Covenant,
};

async function crearFixture(entity: AppEntity): Promise<ComponentFixture<AppCard>> {
  await TestBed.configureTestingModule({
    imports: [AppCard],
    providers: [provideAnimationsAsync(), provideRouter([])],
  }).compileComponents();

  const fixture = TestBed.createComponent(AppCard);
  fixture.componentInstance.entity = entity;
  await fixture.whenStable();
  fixture.detectChanges();
  return fixture;
}

describe('AppCard', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    vi.clearAllMocks();
  });

  describe('profecía con NT', () => {
    let fixture: ComponentFixture<AppCard>;
    beforeEach(async () => { fixture = await crearFixture(profecia); });

    it('debe crearse', () => expect(fixture.componentInstance).toBeTruthy());
    it('muestra el título', () => expect(fixture.nativeElement.textContent).toContain('Nacimiento virginal'));
    it('muestra referencia AT', () => expect(fixture.nativeElement.textContent).toContain('Isaías 7:14'));
    it('muestra referencia NT', () => expect(fixture.nativeElement.textContent).toContain('Mateo 1:22-23'));
    it('navega a /prophecy/:id al pulsar Ver detalles', () => {
      const router = TestBed.inject(Router);
      const spy = vi.spyOn(router, 'navigate');
      fixture.debugElement.query(By.css('button[color="primary"]')).nativeElement.click();
      expect(spy).toHaveBeenCalledWith(['/prophecy', 1]);
    });
  });

  describe('profecía sin NT', () => {
    it('muestra aviso sin NT', async () => {
      const fixture = await crearFixture(profeciasinNT);
      expect(fixture.nativeElement.textContent).toContain('Sin cumplimiento en el NT');
    });
  });

  describe('referencia cruzada', () => {
    let fixture: ComponentFixture<AppCard>;
    beforeEach(async () => { fixture = await crearFixture(referencia); });

    it('muestra el título', () => expect(fixture.nativeElement.textContent).toContain('Adán y Cristo'));
    it('muestra verseA', () => expect(fixture.nativeElement.textContent).toContain('Romanos 5:14'));
    it('muestra verseB', () => expect(fixture.nativeElement.textContent).toContain('Génesis 3:15'));
    it('navega a /reference/:id', () => {
      const router = TestBed.inject(Router);
      const spy = vi.spyOn(router, 'navigate');
      fixture.debugElement.query(By.css('button[color="primary"]')).nativeElement.click();
      expect(spy).toHaveBeenCalledWith(['/reference', 10]);
    });
  });

  describe('alianza bíblica', () => {
    let fixture: ComponentFixture<AppCard>;
    beforeEach(async () => { fixture = await crearFixture(alianza); });

    it('muestra el nombre de la alianza', () => expect(fixture.nativeElement.textContent).toContain('Alianza con Noé'));
    it('muestra el mediador', () => expect(fixture.nativeElement.textContent).toContain('Noé'));
    it('muestra referencia AT', () => expect(fixture.nativeElement.textContent).toContain('Génesis 9:8-17'));
    it('navega a /covenant/:id', () => {
      const router = TestBed.inject(Router);
      const spy = vi.spyOn(router, 'navigate');
      fixture.debugElement.query(By.css('button[color="primary"]')).nativeElement.click();
      expect(spy).toHaveBeenCalledWith(['/covenant', 1]);
    });
  });
});
