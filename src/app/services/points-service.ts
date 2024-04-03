import { Injectable } from '@angular/core';
import { GamePlayed } from '../../shared/model/game-played';


@Injectable({
  providedIn: 'root'
})
export class PointsService {
  private gamePoints: GamePlayed[] = []; // רשימת המשחקים עם נקודות

  constructor() { }

  // מתודה להחזרת רשימת המשחקים עם הנקודות
  getGamePoints(): GamePlayed[] {
    return this.gamePoints;
  }

  // מתודה להוספת משחק עם נקודות
  addGamePlayed(gamePlayed: GamePlayed) {
    this.gamePoints.push(gamePlayed);
  }
}
