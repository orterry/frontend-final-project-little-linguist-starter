import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExitConfirmationDialogComponent } from './exit-confirmation-dialog/exit-confirmation-dialog.component';

@Component({
  selector: 'app-learning-mode',
  templateUrl: './learning-mode.component.html',
  styleUrls: ['./learning-mode.component.css']
})
export class LearningModeComponent {
  constructor(private dialog: MatDialog) { }

  openGameSelectionDialog(): void {
    const dialogRef = this.dialog.open(ExitConfirmationDialogComponent, {
      width: '400px',
    });
  }
}
