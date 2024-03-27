import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExitConfirmationDialogComponent } from './exit-confirmation-dialog/exit-confirmation-dialog.component';

@Component({
  selector: 'app-exit-button',
  templateUrl: './exit-button.component.html',
  styleUrls: ['./exit-button.component.css']
})
export class ExitButtonComponent {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ExitConfirmationDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // ניווט למסך בחירת משחק
      }
    });
  }
}
