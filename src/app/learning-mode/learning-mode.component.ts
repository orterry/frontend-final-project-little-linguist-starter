import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ExitConfirmationDialogComponent } from '../exit-confirmation-dialog/exit-confirmation-dialog.component';
import { CommonModule } from '@angular/common';
import { Category } from '../../shared/model/category';

@Component({
  selector: 'app-learning-mode',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './learning-mode.component.html',
  styleUrls: ['./learning-mode.component.css']
})
export class LearningModeComponent implements OnInit {
categories: any;
  categoryService: any;
openExitConfirmationDialog() {
throw new Error('Method not implemented.');
}
allCategory: any;
openGameSelectionDialog(arg0: any) {
throw new Error('Method not implemented.');
}
  constructor(private dialog: MatDialog) { }
  constructor(private categorycard : Categoryservice) {}

  ngOnInit(): void {
    this.allCategory = this.categoryService.list();
  }
    throw new Error('Method not implemented.');
  }

  openExitConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ExitConfirmationDialogComponent, {});
  }
