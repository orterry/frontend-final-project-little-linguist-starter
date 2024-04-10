import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Category } from '../../shared/model/category';
import { MatDialog } from '@angular/material/dialog';
import { ChooseGameDialogComponent } from '../choose-game-dialog/choose-game-dialog.component';
import { MatIconModule } from '@angular/material/icon';



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
    const dialogRef = this.GameChosseDialogService.open(ChooseGameDialogComponent,{
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