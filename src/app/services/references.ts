import { Injectable, signal, computed } from '@angular/core';
import { CROSS_REFERENCES } from '../data/cross-references.data';
import { CrossReference, ReferenceType } from '../models/cross-reference.model';

@Injectable({ providedIn: 'root' })
export class ReferencesService {
  private readonly _all = CROSS_REFERENCES;

  readonly searchQuery = signal('');
  readonly activeType = signal<ReferenceType | null>(null);

  readonly filtered = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    const type = this.activeType();

    return this._all
      .filter(r => {
        const matchesType = type === null || r.type === type;
        const matchesSearch =
          !q ||
          r.title.toLowerCase().includes(q) ||
          r.theme.toLowerCase().includes(q) ||
          r.verseA.reference.toLowerCase().includes(q) ||
          r.verseB.reference.toLowerCase().includes(q);
        return matchesType && matchesSearch;
      })
      .sort((a, b) => b.importance - a.importance);
  });

  readonly types: ReferenceType[] = ['tipología', 'cita directa', 'paralelo temático', 'alusión'];

  setType(type: ReferenceType | null): void {
    this.activeType.set(type);
  }

  setSearch(q: string): void {
    this.searchQuery.set(q);
  }

  getById(id: number): CrossReference | undefined {
    return this._all.find(r => r.id === id);
  }
}
