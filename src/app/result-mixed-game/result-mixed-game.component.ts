import { Component, OnInit } from '@angular/core';
import { GamePoint } from '../../shared/model/game-points';
import { GameResult } from '../../shared/model/game-result';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-result-mixed-game',
  standalone:true,
  imports:[CommonModule,FormsModule,NgFor,NgIf,MatIconModule],
  templateUrl: './result-mixed-game.component.html',
  styleUrls: ['./result-mixed-game.component.css']
})
export class ResultMixedGameComponent implements OnInit {
  gameDetails: GamePoint = new GamePoint(0, '', 0, [], 0, 0);

  ngOnInit(): void {
    this.loadGameDetails();
    this.saveDashboardResult();
  }

  private loadGameDetails(): void {
    const gameResult = localStorage.getItem('gameResult');
    if (gameResult) {
      this.gameDetails = JSON.parse(gameResult) as GamePoint;
    }
  }

  private saveDashboardResult(): void {
    const dashboardDetails: GameResult = JSON.parse(localStorage.getItem('dashboardResult') || '{}');
    dashboardDetails.gamesCounter += 1;
    dashboardDetails.pointCounter += this.gameDetails.successesCount;
    localStorage.setItem('dashboardResult', JSON.stringify(dashboardDetails));
  }
}
