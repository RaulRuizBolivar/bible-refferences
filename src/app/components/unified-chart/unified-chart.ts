import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PROPHECIES } from '../../data/prophecies.data';
import { CROSS_REFERENCES } from '../../data/cross-references.data';
import { Prophecy } from '../../models/prophecy.model';
import { CrossReference } from '../../models/cross-reference.model';

// ── Canonical Catholic Bible order ────────────────────────────────
const OT_BOOKS = [
  'Génesis', 'Éxodo', 'Levítico', 'Números', 'Deuteronomio',
  'Josué', 'Jueces', 'Rut', '1 Samuel', '2 Samuel',
  '1 Reyes', '2 Reyes', '1 Crónicas', '2 Crónicas',
  'Esdras', 'Nehemías', 'Tobías', 'Judit', 'Ester',
  '1 Macabeos', '2 Macabeos', 'Job', 'Salmo', 'Proverbios',
  'Eclesiastés', 'Cantares', 'Sabiduría', 'Eclesiástico',
  'Isaías', 'Jeremías', 'Lamentaciones', 'Baruc', 'Ezequiel',
  'Daniel', 'Oseas', 'Joel', 'Amós', 'Abdías', 'Jonás',
  'Miqueas', 'Nahúm', 'Habacuc', 'Sofonías', 'Ageo',
  'Zacarías', 'Malaquías',
] as const;

const NT_BOOKS = [
  'Mateo', 'Marcos', 'Lucas', 'Juan', 'Hechos',
  'Romanos', '1 Corintios', '2 Corintios', 'Gálatas', 'Efesios',
  'Filipenses', 'Colosenses', '1 Tesalonicenses', '2 Tesalonicenses',
  '1 Timoteo', '2 Timoteo', 'Tito', 'Filemón', 'Hebreos',
  'Santiago', '1 Pedro', '2 Pedro', '1 Juan', '2 Juan',
  '3 Juan', 'Judas', 'Apocalipsis',
] as const;

const ALL_BOOKS = [...OT_BOOKS, ...NT_BOOKS];
const BOOK_INDEX: Map<string, number> = new Map(ALL_BOOKS.map((b, i) => [b as string, i]));

const ABBR: Record<string, string> = {
  'Génesis':'Gén','Éxodo':'Éx','Levítico':'Lev','Números':'Núm','Deuteronomio':'Dt',
  'Josué':'Jos','Jueces':'Jue','Rut':'Rut','1 Samuel':'1Sm','2 Samuel':'2Sm',
  '1 Reyes':'1Re','2 Reyes':'2Re','1 Crónicas':'1Cr','2 Crónicas':'2Cr',
  'Esdras':'Esd','Nehemías':'Neh','Tobías':'Tob','Judit':'Jdt','Ester':'Est',
  '1 Macabeos':'1Mac','2 Macabeos':'2Mac','Job':'Job','Salmo':'Sal',
  'Proverbios':'Prov','Eclesiastés':'Ec','Cantares':'Ct','Sabiduría':'Sab',
  'Eclesiástico':'Sir','Isaías':'Is','Jeremías':'Jr','Lamentaciones':'Lam',
  'Baruc':'Bar','Ezequiel':'Ez','Daniel':'Dn','Oseas':'Os','Joel':'Jl',
  'Amós':'Am','Abdías':'Ab','Jonás':'Jon','Miqueas':'Mi','Nahúm':'Na',
  'Habacuc':'Hab','Sofonías':'Sof','Ageo':'Ag','Zacarías':'Zac','Malaquías':'Mal',
  'Mateo':'Mt','Marcos':'Mc','Lucas':'Lc','Juan':'Jn','Hechos':'Hch',
  'Romanos':'Rm','1 Corintios':'1Co','2 Corintios':'2Co','Gálatas':'Ga',
  'Efesios':'Ef','Filipenses':'Flp','Colosenses':'Col',
  '1 Tesalonicenses':'1Ts','2 Tesalonicenses':'2Ts',
  '1 Timoteo':'1Tm','2 Timoteo':'2Tm','Tito':'Tt','Filemón':'Flm',
  'Hebreos':'Heb','Santiago':'St','1 Pedro':'1Pe','2 Pedro':'2Pe',
  '1 Juan':'1Jn','2 Juan':'2Jn','3 Juan':'3Jn','Judas':'Jds','Apocalipsis':'Ap',
};

// ── Layout ─────────────────────────────────────────────────────────
const SVG_W     = 1400;
const PAD_X     = 50;
const DRAW_W    = SVG_W - PAD_X * 2;
const ARC_H     = 700;
const BAR_MAX_H = 45;
const LABEL_H   = 22;
const SVG_H     = ARC_H + BAR_MAX_H + LABEL_H;
const BASE_Y    = ARC_H;
const BOOK_W    = DRAW_W / ALL_BOOKS.length;

// ── Colors ─────────────────────────────────────────────────────────
const COLORS: Record<string, string> = {
  'mesiánica':         '#60a5fa',
  'apocalíptica':      '#f87171',
  'histórica':         '#4ade80',
  'tipología':         '#c084fc',
  'cita directa':      '#fb923c',
  'paralelo temático': '#f472b6',
  'alusión':           '#fbbf24',
};

// ── Types ──────────────────────────────────────────────────────────
export type UnifiedItem =
  | { kind: 'prophecy'; data: Prophecy }
  | { kind: 'reference'; data: CrossReference };

export interface ArcDatum {
  id: string;
  path: string;
  color: string;
  title: string;
  item: UnifiedItem;
}

export interface BookBar {
  x: number;
  height: number;
  book: string;
  isOT: boolean;
}

export interface BookLabel {
  x: number;
  abbr: string;
  isOT: boolean;
}

export interface ChartData {
  arcs: ArcDatum[];
  bars: BookBar[];
  labels: BookLabel[];
  dividerX: number;
  svgW: number;
  svgH: number;
}

// ── Helpers ────────────────────────────────────────────────────────
function bookName(ref: string): string {
  const parts = ref.trim().split(/\s+/);
  return /^\d$/.test(parts[0]) ? `${parts[0]} ${parts[1]}` : parts[0];
}

function bookX(name: string): number {
  const idx = BOOK_INDEX.get(name);
  return idx === undefined ? -1 : PAD_X + (idx + 0.5) * BOOK_W;
}

function itemColor(item: UnifiedItem): string {
  return item.kind === 'prophecy' ? COLORS[item.data.category] : COLORS[item.data.type];
}

function otBook(item: UnifiedItem): string {
  return bookName(item.kind === 'prophecy'
    ? item.data.oldTestament.reference
    : item.data.verseB.reference);
}

function ntBook(item: UnifiedItem): string | null {
  if (item.kind === 'prophecy') {
    return item.data.newTestament ? bookName(item.data.newTestament.reference) : null;
  }
  return bookName(item.data.verseA.reference);
}

// ── Build ──────────────────────────────────────────────────────────
function buildChart(): ChartData {
  const all: UnifiedItem[] = [
    ...PROPHECIES.map(p => ({ kind: 'prophecy' as const, data: p })),
    ...CROSS_REFERENCES.map(r => ({ kind: 'reference' as const, data: r })),
  ];

  const countMap = new Map<string, number>();
  for (const item of all) {
    const ot = otBook(item);
    const nt = ntBook(item);
    countMap.set(ot, (countMap.get(ot) ?? 0) + 1);
    if (nt) countMap.set(nt, (countMap.get(nt) ?? 0) + 1);
  }
  const maxCount = Math.max(...countMap.values(), 1);

  const arcs: ArcDatum[] = [];
  for (const item of all) {
    const nt = ntBook(item);
    if (!nt) continue;
    const ot = otBook(item);
    const x1 = bookX(ot);
    const x2 = bookX(nt);
    if (x1 < 0 || x2 < 0 || x1 === x2) continue;

    const ax = Math.min(x1, x2);
    const bx = Math.max(x1, x2);
    const r = (bx - ax) / 2;
    // SVG arc: sweep=1 draws the upper (clockwise) semicircle
    const path = `M ${ax} ${BASE_Y} A ${r} ${r} 0 0 1 ${bx} ${BASE_Y}`;
    const id = item.kind === 'prophecy' ? `p-${item.data.id}` : `r-${item.data.id}`;
    arcs.push({ id, path, color: itemColor(item), title: item.data.title, item });
  }

  const bars: BookBar[] = ALL_BOOKS.map((book, idx) => ({
    x: PAD_X + idx * BOOK_W,
    height: ((countMap.get(book) ?? 0) / maxCount) * BAR_MAX_H,
    book,
    isOT: idx < OT_BOOKS.length,
  }));

  const labels: BookLabel[] = ALL_BOOKS
    .map((book, idx) => ({ book, idx }))
    .filter(({ book }) => countMap.has(book))
    .map(({ book, idx }) => ({
      x: PAD_X + (idx + 0.5) * BOOK_W,
      abbr: ABBR[book] ?? book.slice(0, 3),
      isOT: idx < OT_BOOKS.length,
    }));

  return {
    arcs, bars, labels,
    dividerX: PAD_X + OT_BOOKS.length * BOOK_W,
    svgW: SVG_W,
    svgH: SVG_H,
  };
}

// ── Component ──────────────────────────────────────────────────────
@Component({
  selector: 'app-unified-chart',
  standalone: true,
  imports: [],
  templateUrl: './unified-chart.html',
  styleUrl: './unified-chart.scss',
})
export class UnifiedChart {
  private readonly router = inject(Router);

  readonly data = buildChart();
  readonly BASE_Y = BASE_Y;
  readonly BAR_MAX_H = BAR_MAX_H;
  readonly BOOK_W = BOOK_W;
  readonly PAD_X = PAD_X;

  readonly legendProphecy = [
    { key: 'mesiánica',    label: 'Mesiánica',    color: COLORS['mesiánica'] },
    { key: 'apocalíptica', label: 'Apocalíptica',  color: COLORS['apocalíptica'] },
    { key: 'histórica',    label: 'Histórica',     color: COLORS['histórica'] },
  ];
  readonly legendReference = [
    { key: 'tipología',         label: 'Tipología',         color: COLORS['tipología'] },
    { key: 'cita directa',      label: 'Cita directa',      color: COLORS['cita directa'] },
    { key: 'paralelo temático', label: 'Paralelo temático',  color: COLORS['paralelo temático'] },
    { key: 'alusión',           label: 'Alusión',            color: COLORS['alusión'] },
  ];

  abrirItem(item: UnifiedItem): void {
    if (item.kind === 'prophecy') {
      this.router.navigate(['/prophecy', item.data.id]);
    } else {
      this.router.navigate(['/reference', item.data.id]);
    }
  }
}
