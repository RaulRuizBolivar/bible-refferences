import { Injectable, signal, computed } from '@angular/core';
import { COVENANTS } from '../data/covenants.data';
import { Covenant } from '../models/covenant.model';

@Injectable({ providedIn: 'root' })
export class CovenantsService {
  readonly all: Covenant[] = COVENANTS;

  readonly searchQuery = signal('');

  readonly filtered = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.all;
    return this.all.filter(
      c =>
        c.name.toLowerCase().includes(q) ||
        c.mediator.toLowerCase().includes(q) ||
        c.promise.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );
  });

  setSearch(q: string): void {
    this.searchQuery.set(q);
  }

  getById(id: number): Covenant | undefined {
    return this.all.find(c => c.id === id);
  }
}
