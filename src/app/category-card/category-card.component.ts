import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Category } from '../../shared/model/category';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { GameSelectionDialogComponent } from '../game-selection-dialog/game-selection-dialog.component';



@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatIconModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  @Input()
  currentCategory?: Category;
  constructor(private GameChosseDialogService : MatDialog){}
  
  openGame (id?: number, _name?: string) {
    const dialogRef = this.GameChosseDialogService.open(GameSelectionDialogComponent,{
      data : id,
    });
  }
  /*wasRecentlyUpdate(): boolean {
    return this.isDateInLastWeek(
      new Date (this.currentCategory?.lastUpdateDate!)
    );
  }
  isDateInLastWeek(_dateToCheck: Date) : boolean {
    const startOfLastWeek = startOfWeek(subWeeks(new Date(),0));
    return : false;
}*/

}