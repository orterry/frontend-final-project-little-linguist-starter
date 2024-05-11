import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../matching-game/dialog/dialog.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-mixed-game',
  standalone:true,
  imports:[CommonModule,MatProgressBarModule,FormsModule],
  templateUrl: './mixed-game.component.html',
  styleUrls: ['./mixed-game.component.css']
})
export class MixedGameComponent implements OnInit {
  categoryName: string = '';
  targetWord: string = '';
  shuffledWord: string[] = [];
  userInput: string = '';
  attempts: number = 0;
  successes: number = 0;
  maxAttempts: number = 5;
  gameEnded: boolean = false;

  constructor(private dialogService: MatDialog, private router: Router) {}

  ngOnInit(): void {
    // Simulated data for demonstration purposes
    this.categoryName = 'Fruits';
    this.targetWord = 'apple';
    this.shuffledWord = this.shuffleWord(this.targetWord);
  }

  checkAnswer(): void {
    if (this.userInput.toLowerCase() === this.targetWord) {
      this.successes++;
      this.dialogService.open(DialogComponent, { data: true });
    } else {
      this.attempts++;
      if (this.attempts >= this.maxAttempts) {
        this.gameEnded = true;
        this.dialogService.open(DialogComponent, { data: false });
      }
    }
  }

  resetGame(): void {
    this.userInput = '';
    this.attempts = 0;
    this.successes = 0;
    this.gameEnded = false;
    this.shuffledWord = this.shuffleWord(this.targetWord);
  }

  shuffleWord(word: string): string[] {
    const characters = word.split('');
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters;
  }

  calculateProgress(): number {
    return (this.successes / this.maxAttempts) * 100;
  }
}
