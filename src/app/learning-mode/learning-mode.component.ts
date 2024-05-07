import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ExitConfirmationDialogComponent } from '../exit-confirmation-dialog/exit-confirmation-dialog.component';
import { CommonModule } from '@angular/common';
import { Category } from '../../shared/model/category';
import { CategoryCardComponent } from "../category-card/category-card.component";
import { CategoriesService } from '../services/categories.service';
import { GameSelectionDialogComponent } from '../game-selection-dialog/game-selection-dialog.component';
import { Input } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-learning-mode',
  templateUrl: './learning-mode.component.html',
  styleUrls: ['./learning-mode.component.css'],
  imports: [CommonModule, CategoryCardComponent,],
  
})
export class LearningModeComponent implements OnInit {
  @Input() currentCategory: string | undefined;
  allCategories: Category[] | undefined; 

  constructor(private dialog: MatDialog, private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.allCategories  = this.categoryService.list(); 
   
    this.dialog = this.dialog;
  }

  openExitConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ExitConfirmationDialogComponent, {});
  }

  openGameSelectionDialog(categoryName: string): void { const dialogRef = this.dialog.open(GameSelectionDialogComponent, {
    data: { categoryName: categoryName },
});

  }
  
}

