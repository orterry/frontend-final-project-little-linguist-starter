import { Injectable } from '@angular/core';
import { GameProfile } from '../../shared/model/game-profile.model';
import { GameDifficulty } from '../../shared/model/game-difficulty.enum';

@Injectable({
  providedIn: 'root'
})
export class GameInfoService {
  private games: GameProfile[] = [];

  constructor() {
    // נוסיף כאן את המשחקים הקיימים במערכת באמצעות הפעלה של הפונקציה addGame
    this.addGame(1, 'match-game', 'Description for Game 1', GameDifficulty.Easy, 'https://game1.com');
    this.addGame(2, 'Game 2', 'Description for Game 2', GameDifficulty.Medium, 'https://game2.com');
    this.addGame(3, 'Game 3', 'Description for Game 3', GameDifficulty.Hard, 'https://game3.com');
  }

  // מתודה להוספת משחק למערכת
  private addGame(id: number, name: string, description: string, difficulty: GameDifficulty, url: string): void {
    this.games.push(new GameProfile({ id, name, description, difficulty, url }));
  }

  // מתודה לקבלת רשימת המשחקים
  getGames(): GameProfile[] {
    return this.games;
  }
}
