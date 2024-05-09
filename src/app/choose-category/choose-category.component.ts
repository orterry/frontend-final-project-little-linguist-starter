import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from "../category-card/category-card.component";

@Component({
    standalone: true,
    selector: 'app-choose-category',
    templateUrl: './choose-category.component.html',
    styleUrls: ['./choose-category.component.css'],
    imports: [CommonModule, CategoryCardComponent]
})
export class ChooseCategoryComponent implements OnInit {
  @Input() currentcategory: Category | undefined;

  allCategories: Category[] = [];

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.allCategories = this.categoryService.list();
  }
}
