import { Component } from '@angular/core';
import { Category } from '../../shared/model/category';
import { Language } from '../../shared/model/language';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GamePoint } from '../../shared/model/game-points';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-mixed-game',
  standalone:true,
  imports:[CommonModule,MatIconModule,MatProgressBarModule],
  templateUrl: './mixed-game.component.html',
  styleUrls: ['./mixed-game.component.css']
})
export class MixedGameComponent {
  
  constructor(private dialogService : MatDialog, private router: Router){}
  
  currentCategory: Category = new Category(0, '', Language.English, Language.Hebrew);
  level: number = 0;
  origin: string[] = [];
  target: string = '';
  inputValue: string = '';

  currentPoint: number = 100;
  attemptsCount: number = 0;
  successesCount: number = 0;

  ngOnInit(): void {
    this.currentCategory = JSON.parse(localStorage.getItem("currentCategory") || '') as Category;
    this.target = this.currentCategory.words[this.level].target;
    this.origin = this.mixedOrigin(this.currentCategory.words[this.level].origin);
  }

  nextWord(): void {
    if (this.currentCategory.words.length > this.level) {
      if (this.inputValue === this.currentCategory.words[this.level].origin) {
        this.dialogService.open(DialogComponent, { data: true });
        this.currentCategory.words[this.level].guess = 'true';
        this.successesCount += 1;
        this.attemptsCount += 1;
      } else {
        this.dialogService.open(DialogComponent, { data: false });
        this.currentCategory.words[this.level].guess = 'false';
        this.attemptsCount += 1;
        this.currentPoint -= (100 / this.currentCategory.words.length);
      }
      this.resetValue();

      if (this.currentCategory.words.length > this.level + 1) {
        this.target = this.currentCategory.words[this.level + 1].target;
        this.origin = this.mixedOrigin(this.currentCategory.words[this.level + 1].origin);
      } else {
        const game: GamePoint = new GamePoint(this.currentCategory.id, this.currentCategory.name, this.currentPoint, this.currentCategory.words, this.attemptsCount, this.successesCount);
        localStorage.setItem("gameResult", JSON.stringify(game));
        this.router.navigate(['resultmixedgame']);
      }
      this.level += 1;
    }
  }

  handleChange(event: Event): void {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  resetValue(): void {
    this.inputValue = '';
  }

  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  mixedOrigin(origin: string): string[] {
    const characters = origin.split('');
    const randomizedArray = this.shuffleArray(characters);
    return randomizedArray;
  }

  calculateProgress(): number {
    const totalItems = this.currentCategory.words.length;
    const completedItems = this.level;

    const progress = (completedItems / totalItems) * 100;
    return progress;
  }
}
