import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CharactersService } from '../../services/characters';
import { BibleCharacter } from '../../models/character.model';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.scss',
})
export class CharacterDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private readonly svc = inject(CharactersService);

  readonly character = this.svc.getById(this.route.snapshot.paramMap.get('id') ?? '');

  connectedCharacter(id: string): BibleCharacter | undefined {
    return this.svc.getById(id);
  }

  volver(): void {
    this.location.back();
  }
}
