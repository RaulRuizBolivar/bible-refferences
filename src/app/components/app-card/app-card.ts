import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Prophecy } from '../../models/prophecy.model';
import { CrossReference, ReferenceType } from '../../models/cross-reference.model';
import { Covenant } from '../../models/covenant.model';

export type EntityType = 'prophecy' | 'reference' | 'covenant';

export type AppEntity =
  | { kind: 'prophecy'; data: Prophecy }
  | { kind: 'reference'; data: CrossReference }
  | { kind: 'covenant'; data: Covenant };

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './app-card.html',
  styleUrl: './app-card.scss',
})
export class AppCard {
  @Input({ required: true }) entity!: AppEntity;

  constructor(private router: Router) {}

  get displayTitle(): string {
    return this.entity.kind === 'covenant' ? this.entity.data.name : this.entity.data.title;
  }

  get description(): string {
    return this.entity.data.description;
  }

  get borderColor(): string {
    if (this.entity.kind === 'prophecy') {
      const m: Record<string, string> = {
        mesiánica: '#2e7d32',
        apocalíptica: '#880e4f',
        histórica: '#0d47a1',
      };
      return m[this.entity.data.category] ?? '#9e9e9e';
    }
    if (this.entity.kind === 'reference') {
      const m: Record<string, string> = {
        tipología: '#c084fc',
        'cita directa': '#fb923c',
        'paralelo temático': '#f472b6',
        alusión: '#fbbf24',
      };
      return m[this.entity.data.type] ?? '#9e9e9e';
    }
    return this.entity.data.color;
  }

  referenceTypeIcon(type: ReferenceType): string {
    const icons: Record<ReferenceType, string> = {
      tipología: 'swap_horiz',
      'cita directa': 'format_quote',
      'paralelo temático': 'compare',
      alusión: 'link',
    };
    return icons[type];
  }

  abrirDetalles(): void {
    if (this.entity.kind === 'prophecy') {
      this.router.navigate(['/prophecy', this.entity.data.id]);
    } else if (this.entity.kind === 'reference') {
      this.router.navigate(['/reference', this.entity.data.id]);
    } else {
      this.router.navigate(['/covenant', this.entity.data.id]);
    }
  }
}
