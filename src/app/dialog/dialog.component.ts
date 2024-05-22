import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { GameService } from '../services/game/game-service';
import { GameDifficulty } from '../../shared/model/game-difficulty';
import { NgModule } from '@angular/core';
import { GameProfile } from '../../shared/model/game-profile';
import { RouterModule } from '@angular/router';
import { Category } from '../../shared/model/category';




@Component({
  selector: 'app-delete-category-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    RouterModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public currentcategory:Category) { }

  public selectedValue : number = 2
  public selectedRoute : string = 'matching'
  public gameDetails: GameService = new GameService()
  public selectedGameId: number | undefined;
  difficulty: string = 'easy'; // Assuming difficulty is a string, you can use appropriate type
  description: string = this.gameDetails.getGames()[0].description
  onSelectChange(event: any) {
    this.selectedValue = Number(event.target.value);

    const selectedGame = this.gameDetails.getGames().find(game => game.id === this.selectedValue);
    this.description = selectedGame?.description || ''
    this.selectedRoute = selectedGame?.url || ''
    if (selectedGame?.difficulty === GameDifficulty.EASY ) {
      this.difficulty = 'easy'
    }
    else if (selectedGame?.difficulty === GameDifficulty.MEDIUM) {
      this.difficulty = 'medium'
    }
    else {
      this.difficulty = 'hard'
    }



  }

  sendCategoryGame(){
    localStorage.setItem("currentCategory",JSON.stringify(this.currentcategory))
    localStorage.setItem("difficulty",JSON.stringify(this.difficulty))


  }

  




}