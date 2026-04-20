import { Injectable } from '@angular/core';
import { CHARACTERS } from '../data/characters.data';
import { BibleCharacter, NetworkNode, NetworkEdge } from '../models/character.model';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  readonly all: BibleCharacter[] = CHARACTERS;

  getById(id: string): BibleCharacter | undefined {
    return this.all.find(c => c.id === id);
  }

  buildNetwork(width: number, height: number): { nodes: NetworkNode[]; edges: NetworkEdge[] } {
    const N = this.all.length;
    const baseR = 26;
    const maxConns = Math.max(...this.all.map(c => c.connections.length));

    const initNodes: NetworkNode[] = this.all.map((c, i) => {
      const angle = (i / N) * 2 * Math.PI;
      const rx = width * 0.35;
      const ry = height * 0.35;
      return {
        ...c,
        x: Math.cos(angle) * rx + width / 2,
        y: Math.sin(angle) * ry + height / 2,
        r: baseR + (c.connections.length / (maxConns || 1)) * 12,
      };
    });

    const edgeSet = new Set<string>();
    const edges: NetworkEdge[] = [];

    for (const char of this.all) {
      for (const conn of char.connections) {
        const key = [char.id, conn.targetId].sort().join('|');
        if (!edgeSet.has(key)) {
          edgeSet.add(key);
          edges.push({
            source: char.id,
            target: conn.targetId,
            type: conn.type,
            label: conn.label,
            strength: conn.strength,
          });
        }
      }
    }

    const nodes = this.simulate(initNodes, edges, width, height);
    return { nodes, edges };
  }

  private simulate(
    initNodes: NetworkNode[],
    edges: NetworkEdge[],
    W: number,
    H: number
  ): NetworkNode[] {
    const N = initNodes.length;
    const x = initNodes.map(n => n.x);
    const y = initNodes.map(n => n.y);
    const vx = new Array<number>(N).fill(0);
    const vy = new Array<number>(N).fill(0);

    const REPULSION = 9000;
    const SPRING_K = 0.045;
    const CENTER_K = 0.012;
    const DAMPING = 0.82;
    const BASE_LEN = 190;

    const springs = edges
      .map(e => ({
        a: initNodes.findIndex(n => n.id === e.source),
        b: initNodes.findIndex(n => n.id === e.target),
        strength: e.strength,
      }))
      .filter(s => s.a >= 0 && s.b >= 0);

    for (let iter = 0; iter < 400; iter++) {
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = x[i] - x[j];
          const dy = y[i] - y[j];
          const dist2 = dx * dx + dy * dy + 1;
          const dist = Math.sqrt(dist2);
          const force = REPULSION / dist2;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          vx[i] += fx;
          vy[i] += fy;
          vx[j] -= fx;
          vy[j] -= fy;
        }
      }

      for (const s of springs) {
        const dx = x[s.b] - x[s.a];
        const dy = y[s.b] - y[s.a];
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.1;
        const desiredLen = BASE_LEN / (s.strength * 0.25 + 0.75);
        const stretch = dist - desiredLen;
        const fx = (dx / dist) * stretch * SPRING_K;
        const fy = (dy / dist) * stretch * SPRING_K;
        vx[s.a] += fx;
        vy[s.a] += fy;
        vx[s.b] -= fx;
        vy[s.b] -= fy;
      }

      for (let i = 0; i < N; i++) {
        vx[i] += (W / 2 - x[i]) * CENTER_K;
        vy[i] += (H / 2 - y[i]) * CENTER_K;
        vx[i] *= DAMPING;
        vy[i] *= DAMPING;
        x[i] += vx[i];
        y[i] += vy[i];
      }
    }

    return initNodes.map((n, i) => ({ ...n, x: x[i], y: y[i] }));
  }
}
