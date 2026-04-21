import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CovenantsService } from '../../services/covenants';

@Component({
  selector: 'app-covenant-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './covenant-detail.html',
  styleUrl: './covenant-detail.scss',
})
export class CovenantDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private readonly svc = inject(CovenantsService);

  readonly covenant = this.svc.getById(Number(this.route.snapshot.paramMap.get('id')));
  readonly previousCovenant = this.covenant?.previousCovenantId
    ? this.svc.getById(this.covenant.previousCovenantId)
    : null;

  volver(): void {
    this.location.back();
  }
}
