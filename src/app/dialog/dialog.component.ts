import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { GameSelectionDialogComponent } from '../game-selection-dialog/game-selection-dialog.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  constructor(private dialog: MatDialog) {}

}

  categories = [
    { name: 'Fruits', words: ['Banana', 'Lemon', 'orange'] },
    { name: 'Animals', words: ['Dog', 'Cat', 'lion'] },
    { name: 'Home', words: ['Door', 'Table', 'chair'] },
    { name: 'Home', words: ['Door', 'Table', 'chair'] },
    { name: 'Home', words: ['Door', 'Table', 'chair'] },



    // רשימת הקטגוריות האחרות...
  ];

  openGameSelectionDialog(categoryName: string): void {
    const dialogRef = this.dialog.open(GameSelectionDialogComponent, {
      width: '400px',
      data: { category: categoryName, games: ['Game1', 'Game2', 'Game3'] } // הוסף רשימת משחקים כאן
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
