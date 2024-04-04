import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-confirmation-dialog',
  templateUrl: './exit-confirmation-dialog.component.html',
  styleUrls: ['./exit-confirmation-dialog.component.css']
})
export class ExitConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<ExitConfirmationDialogComponent>) { }

}