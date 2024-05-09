import { Component, OnInit } from '@angular/core';
import { GamePoint } from '../../shared/model/game-points';
import { GameResult } from '../../shared/model/game-result';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

enum Grade {
  Fail = 'Fail',
  Pass = 'Pass',
  Good = 'Good',
  Excellent = 'Excellent'
}

@Component({
  selector: 'app-result',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  gameDetails: GamePoint = new GamePoint(0, '', 0, [], 0, 0);
  gradeStatus: Grade = Grade.Fail;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.gameDetails = JSON.parse(localStorage.getItem('gameResult') || '') as GamePoint;
    this.dashboardResultSave();
    this.calculateGrade();
  }

  dashboardResultSave(): void {
    const dashboardDetails = JSON.parse(localStorage.getItem('dashboardResult') || '') as GameResult;
    dashboardDetails.gamesCounter += 1;
    dashboardDetails.pointCounter += this.gameDetails.successesCount;
    localStorage.setItem('dashboardResult', JSON.stringify(dashboardDetails));
  }

  calculateGrade(): void {
    const successRate = (this.gameDetails.successesCount / this.gameDetails.attemptsCount) * 100 || 0;
    if (successRate > 80) {
      this.gradeStatus = Grade.Excellent;
    } else if (successRate > 60) {
      this.gradeStatus = Grade.Good;
    } else if (successRate > 50) {
      this.gradeStatus = Grade.Pass;
    }
  }

  newGame(): void {
    this.router.navigate(['/choose']);
  }
}
