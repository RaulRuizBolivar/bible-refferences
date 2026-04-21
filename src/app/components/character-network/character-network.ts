import {
  Component,
  inject,
  AfterViewInit,
  ElementRef,
  HostListener,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CharactersService } from '../../services/characters';
import { NetworkNode, NetworkEdge, ConnectionType } from '../../models/character.model';

@Component({
  selector: 'app-character-network',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-network.html',
  styleUrl: './character-network.scss',
})
export class CharacterNetwork implements AfterViewInit {
  private readonly svc = inject(CharactersService);
  private readonly router = inject(Router);
  private readonly el = inject(ElementRef);

  readonly nodes = signal<NetworkNode[]>([]);
  readonly edges = signal<NetworkEdge[]>([]);

  readonly connectionColors: Record<ConnectionType, string> = {
    tipo: '#3b82f6',
    cumplimiento: '#f59e0b',
    genealogía: '#22c55e',
    contemporáneo: '#9ca3af',
    tipológico: '#a855f7',
  };

  readonly legend = (Object.entries(this.connectionColors) as [ConnectionType, string][]).map(
    ([type, color]) => ({ type, color })
  );

  readonly edgesWithPositions = computed(() => {
    const ns = this.nodes();
    return this.edges()
      .map(e => {
        const src = ns.find(n => n.id === e.source);
        const tgt = ns.find(n => n.id === e.target);
        if (!src || !tgt) return null;
        return { edge: e, x1: src.x, y1: src.y, x2: tgt.x, y2: tgt.y };
      })
      .filter((e): e is NonNullable<typeof e> => e !== null);
  });

  ngAfterViewInit(): void {
    this.recalcular();
  }

  @HostListener('window:resize')
  recalcular(): void {
    const w = this.el.nativeElement.clientWidth || 800;
    const h = this.el.nativeElement.clientHeight || 600;
    const { nodes, edges } = this.svc.buildNetwork(w, h);
    this.nodes.set(nodes);
    this.edges.set(edges);
  }

  irAlPersonaje(id: string): void {
    this.router.navigate(['/character', id]);
  }

  edgeColor(type: ConnectionType): string {
    return this.connectionColors[type];
  }
}
