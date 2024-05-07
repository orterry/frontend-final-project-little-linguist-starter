import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Category } from '../../shared/model/category';


@Component({
  selector: 'app-game-selection-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule,MatDialogModule,],
  templateUrl: './game-selection-dialog.component.html',
  styleUrls: ['./game-selection-dialog.component.css']
})
export class GameSelectionDialogComponent {
selectGame() {
throw new Error('Method not implemented.');
}
navigateToGame() {
throw new Error('Method not implemented.');
}
  public categoryName: string | undefined;
  public category: Category | undefined;
    public games: Category[] | undefined;

  

  constructor(public dialogRef: MatDialogRef<GameSelectionDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
         
    
   }

}






