import { Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { MatchingGameComponent } from './matching-game/matching-game.component';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { MixedGameComponent } from './mixed-game/mixed-game.component';

export const routes: Routes = [
    {path: "", component: CategoriesListComponent},
    {path: "category/:id", component: CategoryFormComponent},
    {path: "newcategory", component: CategoryFormComponent},
    {path: "matching", component: MatchingGameComponent},
    {path: "choose", component: ChooseCategoryComponent},
    {path: "mixed", component: MixedGameComponent},
    {path: "help", component: MixedGameComponent},

    





];
