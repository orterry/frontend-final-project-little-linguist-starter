import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';
import { LearningModeComponent } from '../learning-mode/learning-mode.component';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from '../category-card/category-card.component';

@Component({
  standalone : true,
  imports:[LearningModeComponent,CommonModule,CategoryCardComponent],
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.css'],
  
})
export class CategorySelectionComponent implements OnInit {
openGameSelectionDialog(arg0: string) {
throw new Error('Method not implemented.');
}
  categories: Category[] | undefined;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categories = this.categoriesService.list();
  }

  onCategorySelected(_category: Category): void {
    // פתח דיאלוג בחירת משחק
    // העבר את מזהה הקטגוריה כקלט
  }
  @Input() currentCategory?: Category
}
