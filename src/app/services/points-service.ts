import { Injectable } from '@angular/core';
import { GamePlayed } from '../../shared/model/game-played';
import { GamePoint } from '../../shared/model/game-points';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  private gameHistory: GamePlayed[] = [];

  constructor() {
    this.initializeGameHistory();
  }

  private initializeGameHistory() {
    const storedGameHistory = localStorage.getItem("gameHistory");
    if (storedGameHistory) {
      this.gameHistory = JSON.parse(storedGameHistory);
    } else {
      localStorage.setItem("gameHistory", JSON.stringify(this.gameHistory));
    }
  }

  getGameHistory(): GamePlayed[] {
    return this.gameHistory;
  }

  addGameToHistory(gamePlayed: GamePlayed) {
    this.gameHistory.push(gamePlayed);
    localStorage.setItem("gameHistory", JSON.stringify(this.gameHistory));
  }

  updateGameInHistory(game: GamePoint) {
    const index = this.gameHistory.findIndex(item => item.gameId === game.id);
    if (index !== -1) {
      this.gameHistory[index].points = game.currentPoint;
      localStorage.setItem("gameHistory", JSON.stringify(this.gameHistory));
    }
  }
}
