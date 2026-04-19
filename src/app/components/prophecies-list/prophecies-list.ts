import { Component, inject } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { PropheciesService } from '../../services/prophecies';
import { ProphecyCard } from '../prophecy-card/prophecy-card';
import { ProphecyChart } from '../prophecy-chart/prophecy-chart';
import { ProphecyCategory } from '../../models/prophecy.model';

@Component({
  selector: 'app-prophecies-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    ProphecyCard,
    ProphecyChart,
    TitleCasePipe
  ],
  templateUrl: './prophecies-list.html',
  styleUrl: './prophecies-list.scss'
})
export class PropheciesList {
  readonly svc = inject(PropheciesService);

  searchValue = '';

  onSearch(value: string): void {
    this.svc.setSearch(value);
  }

  seleccionarCategoria(cat: ProphecyCategory | null): void {
    this.svc.setCategory(cat);
  }

  estaActiva(cat: ProphecyCategory | null): boolean {
    return this.svc.activeCategory() === cat;
  }

  limpiarFiltros(): void {
    this.searchValue = '';
    this.svc.setSearch('');
    this.svc.setCategory(null);
  }
}
