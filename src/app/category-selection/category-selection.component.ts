import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-category-selection',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './category-selection.component.html',
  styleUrl: './category-selection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategorySelectionComponent { }
