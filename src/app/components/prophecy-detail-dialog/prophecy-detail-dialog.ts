import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Prophecy } from '../../models/prophecy.model';

export interface ProphecyDialogData {
  prophecy: Prophecy;
}

@Component({
  selector: 'app-prophecy-detail-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './prophecy-detail-dialog.html',
  styleUrl: './prophecy-detail-dialog.scss'
})
export class ProphecyDetailDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ProphecyDialogData) {}

  get p(): Prophecy {
    return this.data.prophecy;
  }
}
