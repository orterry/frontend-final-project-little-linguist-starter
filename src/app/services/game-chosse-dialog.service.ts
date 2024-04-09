import { Injectable } from '@angular/core';
import { GameChooseDialog } from '../../shared/model/game-choose-dialog';
import { GameDifficulty } from '../../shared/model/game-difficulty.enum';

@Injectable({
  providedIn: 'root'
})
export class GameChosseDialogService {

  private allGames : GameChooseDialog[] = [
    new GameChooseDialog(1, "Wash Dishes", "Clean and dry all dishes", GameDifficulty.Medium),
    new GameChooseDialog(2, "Vacuum Floors", "Remove dust and debris from floors",GameDifficulty .Medium),
    new GameChooseDialog(3, "Laundry", "Wash, dry, and fold clothes",GameDifficulty .Hard),
    new GameChooseDialog(4, "Cook Dinner", "Prepare a nutritious meal", GameDifficulty.Easy),
    new GameChooseDialog(5, "Water Plants", "Give plants the necessary water",GameDifficulty .Easy),
    ];



  constructor() { }

  list() : GameChooseDialog[] {
  return this.allGames;
  }
}