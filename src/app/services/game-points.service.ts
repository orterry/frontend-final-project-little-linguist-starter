import { Injectable } from '@angular/core';
import { GamePlayed } from '../shared/models/game-played.model';

@Injectable({
  providedIn: 'root'
})
export class GamePointsService {
  private gamePlayedList: GamePlayed[] = [];

  constructor() {
    // אתחול רשימת המשחקים ששיחק השחקן מקומית מקום זיכרון המקומי
    const storedGamePlayed = localStorage.getItem('gamePlayedList');
    if (storedGamePlayed) {
      this.gamePlayedList = JSON.parse(storedGamePlayed);
    }
  }

  // מתודה להחזרת רשימת המשחקים ששיחק השחקן
  list(): GamePlayed[] {
    return this.gamePlayedList;
  }

  // מתודה להוספת משחק ששוחק לרשימה
  addGamePlayed(gamePlayed: GamePlayed): void {
    this.gamePlayedList.push(gamePlayed);
    // שמירת הרשימה ב storage local
    localStorage.setItem('gamePlayedList', JSON.stringify(this.gamePlayedList));
  }
}
