import { Injectable } from '@angular/core';
import { GameChooseDialog } from '../../shared/model/game-choose-dialog';
import { GameDifficulty } from '../../shared/model/game-difficulty.enum';

@Injectable({
  providedIn: 'root'
})
export class GameChosseDialogService {

  private allGames : GameChooseDialog[] = [
    new GameChooseDialog(1, "Word matching game", "Clean and dry all dishes", GameDifficulty.Medium),
    new GameChooseDialog(2, "Word translation game", "Remove dust and debris from floors",GameDifficulty .Medium),
    new GameChooseDialog(3, "Reverse word translation game", "Wash, dry, and fold clothes",GameDifficulty .Hard),
    new GameChooseDialog(4, "Messy pun", "Prepare a nutritious meal", GameDifficulty.Easy),
    new GameChooseDialog(5, "trivia game", "Give plants the necessary water",GameDifficulty .Easy),
    ];



  constructor() { }

  list() : GameChooseDialog[] {
  return this.allGames;
  }
}