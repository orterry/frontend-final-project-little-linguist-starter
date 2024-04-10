import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GameChosseDialogService } from '../services/game-choose-dialog.service';
import { GameChooseDialog } from '../../shared/model/game-choose-dialog';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-choose-game-dialog',
  standalone: true,
  imports: [CommonModule,ChooseGameDialogComponent,CategoryCardComponent,MatButtonModule,MatFormFieldModule,MatSelectModule],
  templateUrl: './choose-game-dialog.component.html',
  styleUrl: './choose-game-dialog.component.css'
})
export class ChooseGameDialogComponent implements OnInit {
  allGames : GameChooseDialog[] = [];
  selectedGames? : GameChooseDialog;
game: any;


    constructor(
    private GameChosseDialogService : GameChosseDialogService){}
  
    ngOnInit(): void {
      this.allGames = this.GameChosseDialogService.list()
      }
   }

  