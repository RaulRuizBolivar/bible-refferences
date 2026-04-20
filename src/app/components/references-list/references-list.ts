import { Component, inject } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { ReferencesService } from '../../services/references';
import { ReferenceCard } from '../reference-card/reference-card';
import { ReferenceType } from '../../models/cross-reference.model';

@Component({
  selector: 'app-references-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    ReferenceCard,
    TitleCasePipe,
  ],
  templateUrl: './references-list.html',
  styleUrl: './references-list.scss',
})
export class ReferencesList {
  readonly svc = inject(ReferencesService);

  searchValue = '';

  onSearch(value: string): void {
    this.svc.setSearch(value);
  }

  seleccionarTipo(type: ReferenceType | null): void {
    this.svc.setType(type);
  }

  estaActivo(type: ReferenceType | null): boolean {
    return this.svc.activeType() === type;
  }

  limpiarFiltros(): void {
    this.searchValue = '';
    this.svc.setSearch('');
    this.svc.setType(null);
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
