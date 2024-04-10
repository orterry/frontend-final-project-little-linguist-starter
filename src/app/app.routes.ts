import { Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { LearningModeComponent } from './learning-mode/learning-mode.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { GameSelectionDialogComponent } from './game-selection-dialog/game-selection-dialog.component';
import { ChooseGameDialogComponent } from './choose-game-dialog/choose-game-dialog.component';

export const routes: Routes = [
    {path: "", component: CategoriesListComponent},
    {path: "category/:id", component: CategoryFormComponent},
    {path: "newcategory", component: CategoryFormComponent},
    {path: "learning-mode", component: LearningModeComponent},
    {path: "category-card", component: CategoryCardComponent},
    {path: "game-selection-dialog", component: GameSelectionDialogComponent},
    {path:"choose-game-dialog",component:ChooseGameDialogComponent}
];

