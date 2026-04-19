import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Prophecy } from '../../models/prophecy.model';

@Component({
  selector: 'app-prophecy-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './prophecy-card.html',
  styleUrl: './prophecy-card.scss'
})
export class ProphecyCard {
  @Input({ required: true }) prophecy!: Prophecy;

  constructor(private router: Router) {}

  abrirDetalles(): void {
    this.router.navigate(['/prophecy', this.prophecy.id]);
  }
}
