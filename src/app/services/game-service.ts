import { Injectable } from '@angular/core';
import { GameProfile } from '../../shared/model/game-profile';
import { GameDifficulty } from '../../shared/model/game-difficulty';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: GameProfile[] = [
    new GameProfile (2, 'English word matching game', 'A game where you have to match the English words to the Hebrew words and vice versa', GameDifficulty.MEDIUM, 'matching'),
    new GameProfile (3, 'Messy word game in English', 'You must write the words in English in the order they are written', GameDifficulty.HARD, 'mixed')
  ];

  constructor() { }

  getGames(): GameProfile[] {
    return this.games;
  }
}
