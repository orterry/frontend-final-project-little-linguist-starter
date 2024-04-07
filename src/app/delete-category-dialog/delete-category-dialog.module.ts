import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DeleteCategoryDialogModule } from './delete-category-dialog/delete-category-dialog.module';
import { CategoryListModule } from './category-list/category-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DeleteCategoryDialogModule, CategoryListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
