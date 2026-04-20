import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CrossReference, ReferenceType } from '../../models/cross-reference.model';

@Component({
  selector: 'app-reference-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './reference-card.html',
  styleUrl: './reference-card.scss',
})
export class ReferenceCard {
  @Input({ required: true }) reference!: CrossReference;

  constructor(private router: Router) {}

  abrirDetalles(): void {
    this.router.navigate(['/reference', this.reference.id]);
  }

  typeIcon(type: ReferenceType): string {
    const icons: Record<ReferenceType, string> = {
      'tipología': 'swap_horiz',
      'cita directa': 'format_quote',
      'paralelo temático': 'compare',
      'alusión': 'link',
    };
    return icons[type];
  }
}
