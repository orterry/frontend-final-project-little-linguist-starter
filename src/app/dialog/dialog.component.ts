import { ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { GameService } from '../services/game-service';
import { GameDifficulty } from '../../shared/model/game-difficulty';
import { Category } from '../../shared/model/category';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    RouterModule,NgFor ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  public selectedValue: number = 0;
  public selectedRoute: string = '';
  public difficulty: string = '';
  public description: string = '';
games: any;

  constructor(@Inject(MAT_DIALOG_DATA) public currentcategory: Category, private gameService: GameService) {
    const games = this.gameService.getGames();
    if (games.length > 0) {
      const firstGame = games[0];
      this.selectedValue = firstGame.id;
      this.selectedRoute = firstGame.url || '';
      this.description = firstGame.description || '';
      this.setDifficulty(firstGame.difficulty);
    }
  }

  onSelectChange(event: any) {
    this.selectedValue = Number(event.target.value);
    const selectedGame = this.gameService.getGameById(this.selectedValue);
    if (selectedGame) {
      this.selectedRoute = selectedGame.url || '';
      this.description = selectedGame.description || '';
      this.setDifficulty(selectedGame.difficulty);
    }
  }

  sendCategoryGame() {
    localStorage.setItem("currentCategory", JSON.stringify(this.currentcategory));
  }

  private setDifficulty(difficulty: GameDifficulty | undefined) {
    switch (difficulty) {
      case GameDifficulty.Easy:
        this.difficulty = 'easy';
        break;
      case GameDifficulty.Medium:
        this.difficulty = 'medium';
        break;
      case GameDifficulty.Hard:
        this.difficulty = 'hard';
        break;
      default:
        this.difficulty = '';
        break;
    }
  }
}
