import { Injectable, signal, computed } from '@angular/core';
import { PROPHECIES } from '../data/prophecies.data';
import { Prophecy, ProphecyCategory } from '../models/prophecy.model';

@Injectable({ providedIn: 'root' })
export class PropheciesService {
  private readonly _all = PROPHECIES;

  readonly searchQuery = signal('');
  readonly activeCategory = signal<ProphecyCategory | null>(null);

  readonly filtered = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    const cat = this.activeCategory();

    return this._all.filter(p => {
      const matchesCat = cat === null || p.category === cat;
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.oldTestament.reference.toLowerCase().includes(q) ||
        (p.newTestament?.reference.toLowerCase().includes(q) ?? false) ||
        p.theme.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  });

  readonly categories: ProphecyCategory[] = ['mesiánica', 'apocalíptica', 'histórica'];

  setCategory(cat: ProphecyCategory | null): void {
    this.activeCategory.set(cat);
  }

  setSearch(q: string): void {
    this.searchQuery.set(q);
  }

  getById(id: number): Prophecy | undefined {
    return this._all.find(p => p.id === id);
  }
}
