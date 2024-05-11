import { Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

import { MatchingGameComponent } from './matching-game/main/matching-game.component';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { HelpComponentComponent } from './help-component/help-component.component';
import { ResultComponent } from './result/result.component';
import { ResultMixedGameComponent } from './result-mixed-game/result-mixed-game.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MixedGameComponent } from './mixed-game/mixed-game.component';

export const routes: Routes = [
    {path: "", component: CategoriesListComponent},
    {path: "choose", component: ChooseCategoryComponent},
    {path: "help", component: HelpComponentComponent},
    {path: "category/:id", component: CategoryFormComponent},
    {path: "newcategory", component: CategoryFormComponent},
    {path: "mixed", component: MixedGameComponent},
    {path: "matching", component: MatchingGameComponent},
    {path: "result", component: ResultComponent},
    {path: "resultmixedgame", component: ResultMixedGameComponent},
    {path: "dashbord", component: DashboardComponent},
];

