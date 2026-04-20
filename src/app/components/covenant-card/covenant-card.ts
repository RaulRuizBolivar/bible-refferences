import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Covenant } from '../../models/covenant.model';

@Component({
  selector: 'app-covenant-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './covenant-card.html',
  styleUrl: './covenant-card.scss',
})
export class CovenantCard {
  @Input({ required: true }) covenant!: Covenant;
  @Input() index = 0;

  constructor(private router: Router) {}

  abrirDetalles(): void {
    this.router.navigate(['/covenant', this.covenant.id]);
  }
}
