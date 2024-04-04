import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameSelectionDialogComponent } from './game-selection-dialog/game-selection-dialog.component'; 

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.css']
})
export class CategorySelectionComponent {
  categories = [
    { name: 'Category 1', wordCount: 10 },
    { name: 'Category 2', wordCount: 15 },
  ];

  constructor(private dialog: MatDialog) { }

  openGameSelectionDialog(categoryName: string): void {
    const dialogRef = this.dialog.open(GameSelectionDialogComponent, {
      width: '400px',
      data: { categoryName }
    });
  }
}
