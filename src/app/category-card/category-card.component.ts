import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { GameSelectionDialogComponent } from '../game-selection-dialog/game-selection-dialog.component';
import { CategorySelectComponent } from '../category-select/category-select.component';



@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatIconModule,CategorySelectComponent],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
 
  @Input()
  currentcategory!: string;
  constructor(private GameChosseDialogService : MatDialog){}
  
  
  openGame (id?: number, _name?: string) {
    const dialogRef = this.GameChosseDialogService.open(GameSelectionDialogComponent,{
      data : id,
    });
  }


}