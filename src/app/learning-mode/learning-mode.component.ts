import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExitConfirmationDialogComponent } from '../exit-confirmation-dialog/exit-confirmation-dialog.component';
import { Category } from '../../shared/model/category';

@Component({
  selector: 'app-learning-mode',
  templateUrl: './learning-mode.component.html',
  styleUrls: ['./learning-mode.component.css']
})
export class LearningModeComponent implements OnInit {
  categories: Category[] | undefined; 
  allCategories: Category[] | undefined; 

  constructor(private dialog: MatDialog, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories(); 
    this.allCategories = this.categoryService.getAllCategories(); 
  }

  openExitConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ExitConfirmationDialogComponent, {});
  }

  openGameSelectionDialog(categoryName: string): void {
  }
}
