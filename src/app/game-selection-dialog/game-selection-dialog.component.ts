import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-game-selection-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule,MatDialogModule],
  templateUrl: './game-selection-dialog.component.html',
  styleUrls: ['./game-selection-dialog.component.css']
})
export class GameSelectionDialogComponent {

  constructor(public dialogRef: MatDialogRef<GameSelectionDialogComponent>) { }

}
