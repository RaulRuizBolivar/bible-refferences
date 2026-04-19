import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PROPHECIES } from '../../data/prophecies.data';
import { Prophecy } from '../../models/prophecy.model';

const UNIT_H = 26;
const GAP = 12;
const TOP_Y = 50;
const BOTTOM_PAD = 50;
const OT_X = 160;
const OT_W = 20;
const NT_X = 720;
const NT_W = 20;
const CTRL = (NT_X - (OT_X + OT_W)) / 2.5;

const CAT_COLOR: Record<string, string> = {
  'mesiánica': '#3b82f6',
  'apocalíptica': '#ef4444',
  'histórica': '#22c55e',
};

function bookName(ref: string): string {
  const parts = ref.trim().split(/\s+/);
  return /^\d$/.test(parts[0]) ? `${parts[0]} ${parts[1]}` : parts[0];
}

interface BarNode {
  book: string;
  y: number;
  h: number;
  filledY: number;
}

interface BandLink {
  id: number;
  title: string;
  color: string;
  path: string;
  prophecy: Prophecy;
}

interface ChartData {
  otNodes: BarNode[];
  ntNodes: BarNode[];
  links: BandLink[];
  svgWidth: number;
  svgHeight: number;
  otHeaderX: number;
  ntHeaderX: number;
}

function buildNodes(prophecies: Prophecy[], side: 'ot' | 'nt'): BarNode[] {
  const order: string[] = [];
  const countMap = new Map<string, number>();

  for (const p of prophecies) {
    const ref = side === 'ot' ? p.oldTestament.reference : p.newTestament?.reference;
    if (!ref) continue;
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
  const otNodes = buildNodes(PROPHECIES, 'ot');
  const ntNodes = buildNodes(PROPHECIES, 'nt');

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
  for (const p of PROPHECIES) {
    if (!p.newTestament) continue;
    const otNode = otNodeMap.get(bookName(p.oldTestament.reference))!;
    const ntNode = ntNodeMap.get(bookName(p.newTestament.reference))!;
    const color = CAT_COLOR[p.category];

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

    links.push({ id: p.id, title: p.title, color, path, prophecy: p });
  }

  const svgWidth = 900;
  const svgHeight = TOP_Y + totalContentH + BOTTOM_PAD;

  return {
    otNodes,
    ntNodes,
    links,
    svgWidth,
    svgHeight,
    otHeaderX: OT_X + OT_W / 2,
    ntHeaderX: NT_X + NT_W / 2,
  };
}

@Component({
  selector: 'app-prophecy-chart',
  standalone: true,
  imports: [],
  templateUrl: './prophecy-chart.html',
  styleUrl: './prophecy-chart.scss',
})
export class ProphecyChart {
  private readonly router = inject(Router);

  readonly data = buildChart();
  readonly OT_X = OT_X;
  readonly OT_W = OT_W;
  readonly NT_X = NT_X;
  readonly NT_W = NT_W;

  abrirProfecia(prophecy: Prophecy): void {
    this.router.navigate(['/prophecy', prophecy.id]);
  }
}
