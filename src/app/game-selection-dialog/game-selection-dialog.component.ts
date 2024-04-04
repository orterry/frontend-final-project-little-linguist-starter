import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-game-selection-dialog',
  templateUrl: './game-selection-dialog.component.html',
  styleUrls: ['./game-selection-dialog.component.css']
})
export class GameSelectionDialogComponent {

  constructor(public dialogRef: MatDialogRef<GameSelectionDialogComponent>) { }

}
