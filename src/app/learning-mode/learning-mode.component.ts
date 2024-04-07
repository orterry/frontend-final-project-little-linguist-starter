import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { ExitConfirmationDialogComponent } from '../exit-confirmation-dialog/exit-confirmation-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learning-mode',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './learning-mode.component.html',
  styleUrls: ['./learning-mode.component.css']
})
export class LearningModeComponent {
openGameSelectionDialog(arg0: any) {
throw new Error('Method not implemented.');
}
  constructor(private dialog: MatDialog) { }

  openExitConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ExitConfirmationDialogComponent, {});
  }
}

