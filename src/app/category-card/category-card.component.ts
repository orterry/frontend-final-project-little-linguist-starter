import { Component, Input } from '@angular/core';
import { Category } from '../../shared/model/category';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  @Input()
  currentcategory? : Category;
 
}
