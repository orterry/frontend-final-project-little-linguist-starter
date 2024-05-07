import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryCardComponent } from "../category-card/category-card.component";

@Component({
    selector: 'app-category-select',
    standalone: true,
    templateUrl: './category-select.component.html',
    styleUrl: './category-select.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        CategoryCardComponent
    ]
})
export class CategorySelectComponent {
allCategotys: any;
}
