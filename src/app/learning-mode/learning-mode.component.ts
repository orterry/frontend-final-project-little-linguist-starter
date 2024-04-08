import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ExitConfirmationDialogComponent } from '../exit-confirmation-dialog/exit-confirmation-dialog.component';
import { CommonModule } from '@angular/common';
import { Category } from '../../shared/model/category';
import { CategoryCardComponent } from "../category-card/category-card.component";
import { CategoriesService } from '../services/categories.service';



@Component({
  selector: 'app-learning-mode',
  templateUrl: './learning-mode.component.html',
  styleUrls: ['./learning-mode.component.css'],
  imports: [CommonModule, CategoryCardComponent],
  standalone: true
})
export class LearningModeComponent implements OnInit {
  categories: Category[] | undefined; 
  allCategories: Category[] | undefined; 

  constructor(private dialog: MatDialog, private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categories  = this.categoryService.list(); 
    this.allCategories = this.categoryService.getAllCategories(); 
  }

  openExitConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ExitConfirmationDialogComponent, {});
  }

  openGameSelectionDialog(categoryName: string): void {
  }
}
