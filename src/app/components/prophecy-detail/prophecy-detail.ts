import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { PropheciesService } from '../../services/prophecies';

@Component({
  selector: 'app-prophecy-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatChipsModule, MatDividerModule, MatIconModule],
  templateUrl: './prophecy-detail.html',
  styleUrl: './prophecy-detail.scss',
})
export class ProphecyDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly svc = inject(PropheciesService);

  readonly prophecy = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.svc.getById(id);
  });

  volver(): void {
    this.router.navigate(['/']);
  }
}
