import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CROSS_REFERENCES } from '../../data/cross-references.data';
import { CrossReference, ReferenceType } from '../../models/cross-reference.model';

const UNIT_H = 22;
const GAP = 10;
const TOP_Y = 50;
const BOTTOM_PAD = 50;
const OT_X = 160;
const OT_W = 20;
const NT_X = 720;
const NT_W = 20;
const CTRL = (NT_X - (OT_X + OT_W)) / 2.5;

const TYPE_COLOR: Record<ReferenceType, string> = {
  'tipología':          '#22c55e',
  'cita directa':       '#3b82f6',
  'paralelo temático':  '#ec4899',
  'alusión':            '#f59e0b',
};

function bookName(ref: string): string {
  const parts = ref.trim().split(/\s+/);
  return /^\d$/.test(parts[0]) ? `${parts[0]} ${parts[1]}` : parts[0];
}

interface BarNode { book: string; y: number; h: number; filledY: number; }
interface BandLink { id: number; title: string; color: string; path: string; reference: CrossReference; }
interface ChartData {
  otNodes: BarNode[];
  ntNodes: BarNode[];
  links: BandLink[];
  svgWidth: number;
  svgHeight: number;
  otHeaderX: number;
  ntHeaderX: number;
}

function buildNodes(refs: CrossReference[], side: 'ot' | 'nt'): BarNode[] {
  const order: string[] = [];
  const countMap = new Map<string, number>();

  for (const r of refs) {
    const ref = side === 'ot' ? r.verseB.reference : r.verseA.reference;
    const book = bookName(ref);
    if (!countMap.has(book)) { countMap.set(book, 0); order.push(book); }
    countMap.set(book, countMap.get(book)! + 1);
  }

  const nodes: BarNode[] = [];
  let y = TOP_Y;
  for (const book of order) {
    const h = countMap.get(book)! * UNIT_H;
    nodes.push({ book, y, h, filledY: y });
    y += h + GAP;
  }
  return nodes;
}

function buildChart(): ChartData {
  const otNodes = buildNodes(CROSS_REFERENCES, 'ot');
  const ntNodes = buildNodes(CROSS_REFERENCES, 'nt');

  const otEnd = otNodes.at(-1)!;
  const ntEnd = ntNodes.at(-1)!;
  const otContentH = (otEnd.y + otEnd.h) - TOP_Y;
  const ntContentH = (ntEnd.y + ntEnd.h) - TOP_Y;
  const totalContentH = Math.max(otContentH, ntContentH);

  const otOffset = (totalContentH - otContentH) / 2;
  const ntOffset = (totalContentH - ntContentH) / 2;
  for (const n of otNodes) { n.y += otOffset; n.filledY = n.y; }
  for (const n of ntNodes) { n.y += ntOffset; n.filledY = n.y; }

  const otNodeMap = new Map(otNodes.map(n => [n.book, n]));
  const ntNodeMap = new Map(ntNodes.map(n => [n.book, n]));

  const cx1 = OT_X + OT_W + CTRL;
  const cx2 = NT_X - CTRL;
  const x1 = OT_X + OT_W;
  const x2 = NT_X;

  const links: BandLink[] = [];
  for (const r of CROSS_REFERENCES) {
    const otNode = otNodeMap.get(bookName(r.verseB.reference))!;
    const ntNode = ntNodeMap.get(bookName(r.verseA.reference))!;
    const color = TYPE_COLOR[r.type];

    const y1t = otNode.filledY;
    const y1b = y1t + UNIT_H;
    otNode.filledY += UNIT_H;

    const y2t = ntNode.filledY;
    const y2b = y2t + UNIT_H;
    ntNode.filledY += UNIT_H;

    const path = [
      `M ${x1} ${y1t}`,
      `C ${cx1} ${y1t} ${cx2} ${y2t} ${x2} ${y2t}`,
      `L ${x2} ${y2b}`,
      `C ${cx2} ${y2b} ${cx1} ${y1b} ${x1} ${y1b}`,
      'Z',
    ].join(' ');

    links.push({ id: r.id, title: r.title, color, path, reference: r });
  }

  const svgWidth = 900;
  const svgHeight = TOP_Y + totalContentH + BOTTOM_PAD;

  return {
    otNodes, ntNodes, links, svgWidth, svgHeight,
    otHeaderX: OT_X + OT_W / 2,
    ntHeaderX: NT_X + NT_W / 2,
  };
}

@Component({
  selector: 'app-reference-chart',
  standalone: true,
  imports: [],
  templateUrl: './reference-chart.html',
  styleUrl: './reference-chart.scss',
})
export class ReferenceChart {
  private readonly router = inject(Router);

  readonly data = buildChart();
  readonly OT_X = OT_X;
  readonly OT_W = OT_W;
  readonly NT_X = NT_X;
  readonly NT_W = NT_W;

  abrirReferencia(reference: CrossReference): void {
    this.router.navigate(['/reference', reference.id]);
  }
}
