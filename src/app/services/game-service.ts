import { Injectable } from '@angular/core';
import { GameProfile } from '../../shared/model/game-profile';
import { GameDifficulty } from '../../shared/model/game-difficulty';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  getGames(): any {
    throw new Error('Method not implemented.');
  }
  private games: GameProfile[] = [
    new GameProfile (1,  'Memory Game', 'A memory testing game', GameDifficulty.MEDIUM, "memory"),
    new GameProfile (4, 'Word Association', 'A game to associate words', GameDifficulty.EASY, "association") 
  ];

  constructor() { }

  getAllGames(): GameProfile[] {
    return this.games;
  }

  getGameById(id: number): GameProfile | undefined {
    return this.games.find(game => game.id === id);
  }
}
