import { Component, inject, computed } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { PropheciesService } from '../../services/prophecies';
import { ReferencesService } from '../../services/references';
import { CovenantsService } from '../../services/covenants';
import { AppCard, AppEntity, EntityType } from '../app-card/app-card';
import { ProphecyCategory } from '../../models/prophecy.model';
import { ReferenceType } from '../../models/cross-reference.model';

interface PageConfig {
  title: string;
  subtitle: string;
  searchLabel: string;
  singularLabel: string;
  pluralLabel: string;
}

const PAGE_CONFIG: Record<EntityType, PageConfig> = {
  prophecy: {
    title: 'Profecías de la Biblia Católica',
    subtitle:
      'Descubre las profecías del Antiguo Testamento y su cumplimiento en el Nuevo Testamento',
    searchLabel: 'Buscar profecía o referencia…',
    singularLabel: 'profecía encontrada',
    pluralLabel: 'profecías encontradas',
  },
  reference: {
    title: 'Referencias Cruzadas de la Biblia',
    subtitle:
      'Tipologías, citas directas, paralelos temáticos y alusiones entre el Antiguo y el Nuevo Testamento',
    searchLabel: 'Buscar referencia o versículo…',
    singularLabel: 'referencia encontrada',
    pluralLabel: 'referencias encontradas',
  },
  covenant: {
    title: 'Las 7 Alianzas Bíblicas',
    subtitle: 'Las alianzas de Dios con la humanidad desde Adán hasta el Nuevo Testamento',
    searchLabel: 'Buscar alianza…',
    singularLabel: 'alianza encontrada',
    pluralLabel: 'alianzas encontradas',
  },
};

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    TitleCasePipe,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    AppCard,
  ],
  templateUrl: './app-list.html',
  styleUrl: './app-list.scss',
})
export class AppList {
  private readonly propheciesService = inject(PropheciesService);
  private readonly referencesService = inject(ReferencesService);
  private readonly covenantsService = inject(CovenantsService);

  readonly entityType = inject(ActivatedRoute).snapshot.data['entityType'] as EntityType;
  readonly config = PAGE_CONFIG[this.entityType];

  readonly prophecyCategories = this.propheciesService.categories;
  readonly referenceTypes = this.referencesService.types;

  searchValue = '';

  readonly filtered = computed<AppEntity[]>(() => {
    if (this.entityType === 'prophecy') {
      return this.propheciesService.filtered().map(p => ({ kind: 'prophecy' as const, data: p }));
    }
    if (this.entityType === 'reference') {
      return this.referencesService.filtered().map(r => ({ kind: 'reference' as const, data: r }));
    }
    return this.covenantsService.filtered().map(c => ({ kind: 'covenant' as const, data: c }));
  });

  onSearch(value: string): void {
    if (this.entityType === 'prophecy') this.propheciesService.setSearch(value);
    else if (this.entityType === 'reference') this.referencesService.setSearch(value);
    else this.covenantsService.setSearch(value);
  }

  seleccionarFiltro(value: string | null): void {
    if (this.entityType === 'prophecy') {
      this.propheciesService.setCategory(value as ProphecyCategory | null);
    } else if (this.entityType === 'reference') {
      this.referencesService.setType(value as ReferenceType | null);
    }
  }

  estaActivo(value: string | null): boolean {
    if (this.entityType === 'prophecy') return this.propheciesService.activeCategory() === value;
    if (this.entityType === 'reference') return this.referencesService.activeType() === value;
    return false;
  }

  limpiarFiltros(): void {
    this.searchValue = '';
    this.onSearch('');
    this.seleccionarFiltro(null);
  }

  referenceTypeIcon(type: string): string {
    const icons: Record<string, string> = {
      tipología: 'swap_horiz',
      'cita directa': 'format_quote',
      'paralelo temático': 'compare',
      alusión: 'link',
    };
    return icons[type] ?? 'label';
  }
}
