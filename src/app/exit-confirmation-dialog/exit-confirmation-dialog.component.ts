import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-confirmation-dialog',
  imports: [
    CommonModule,
    MatDialogModule
  ],
  standalone: true,
  templateUrl: './exit-confirmation-dialog.component.html',
  styleUrls: ['./exit-confirmation-dialog.component.css']
})
export class ExitConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<ExitConfirmationDialogComponent>) { }

}