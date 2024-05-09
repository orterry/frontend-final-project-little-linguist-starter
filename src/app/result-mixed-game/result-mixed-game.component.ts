import { Component, OnInit } from '@angular/core';
import { GamePoint } from '../../shared/model/game-points';
import { GameResult } from '../../shared/model/game-result';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-result-mixed-game',
  standalone:true,
  imports:[CommonModule,MatIconModule],
  templateUrl: './result-mixed-game.component.html',
  styleUrls: ['./result-mixed-game.component.css']
})
export class ResultMixedGameComponent implements OnInit {

  gameDetails: GamePoint = new GamePoint(0, '', 0, [], 0, 0);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.gameDetails = JSON.parse(localStorage.getItem('gameResult') || '') as GamePoint;
    this.dashboardResultSave();
  }

  dashboardResultSave(): void {
    const dashboardDetails = JSON.parse(localStorage.getItem('dashboardResult') || '') as GameResult;
    dashboardDetails.gamesCounter += 1;
    dashboardDetails.pointCounter += this.gameDetails.successesCount;
    localStorage.setItem('dashboardResult', JSON.stringify(dashboardDetails));
  }

  navigateToChoose(): void {
    this.router.navigate(['/choose']);
  }
}
