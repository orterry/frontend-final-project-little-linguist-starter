import { categories } from './../../shared/data/categories';
import { Injectable } from '@angular/core';
import { Category } from '../../shared/model/category';
import { FirestoreService } from '../firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private firestoreService: FirestoreService){}


  private readonly CATEGORIES_KEY = 'categories';
  private readonly NEXT_ID_KEY = 'nextId';

  private getCategories() : Map<number, Category>{
    let categoriesString = localStorage.getItem(this.CATEGORIES_KEY);

    if (!categoriesString) {
      return new Map<number, Category>();
    } else {
      return new Map<number, Category>(JSON.parse(categoriesString));
    }
  }

  private async getNextId() : Promise<any> {
    // let nextIdString = localStorage.getItem(this.NEXT_ID_KEY); 
    let nextIdString = await this.firestoreService.getNextId()
    return nextIdString ? nextIdString : 0;
  }

  private setCategories(list : Map<number, Category>) : void {
    localStorage.setItem(this.CATEGORIES_KEY, JSON.stringify(Array.from(list)));
  }

  private setNextId(id : number) : void {
    localStorage.setItem(this.NEXT_ID_KEY, id.toString());
  }

  list() : Category[] {
    return Array.from(this.getCategories().values());
  }

  get(id : number) : Category | undefined {
    return this.getCategories().get(id);
  }

  delete(id : number) : void {
    let categoriesMap = this.getCategories();
    categoriesMap.delete(id);
    this.setCategories(categoriesMap);
  }

  update(category : Category) : void {
    let categoriesMap = this.getCategories();

    category.lastUpdateDate = new Date();
    categoriesMap.set(category.id, category);

    this.setCategories(categoriesMap);
  }

  async add(category : Category) : Promise<void> {
    category.id = await this.getNextId();
    category.lastUpdateDate = new Date();

    let categoriesMap = this.getCategories();
    categoriesMap.set(category.id, category);

    this.setCategories(categoriesMap);
    this.setNextId(++category.id);
  }
}
