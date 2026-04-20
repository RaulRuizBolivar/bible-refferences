import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ReferencesService } from '../../services/references';
import { ReferenceType } from '../../models/cross-reference.model';

@Component({
  selector: 'app-reference-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatChipsModule, MatDividerModule, MatIconModule],
  templateUrl: './reference-detail.html',
  styleUrl: './reference-detail.scss',
})
export class ReferenceDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private readonly svc = inject(ReferencesService);

  readonly reference = this.svc.getById(
    Number(this.route.snapshot.paramMap.get('id'))
  );

  typeIcon(type: ReferenceType): string {
    const icons: Record<ReferenceType, string> = {
      'tipología': 'swap_horiz',
      'cita directa': 'format_quote',
      'paralelo temático': 'compare',
      'alusión': 'link',
    };
    return icons[type];
  }

  volver(): void {
    this.location.back();
  }
}
