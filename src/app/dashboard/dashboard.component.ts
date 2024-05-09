import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GameResult } from '../../shared/model/game-result';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  dashboardDetails: GameResult = new GameResult();

  constructor() {}

  ngOnInit(): void {
    this.loadDashboardDetails();
  }

  private loadDashboardDetails(): void {
    try {
      const storedDashboardDetails = JSON.parse(localStorage.getItem('dashboardResult') || '') as GameResult;
      if (storedDashboardDetails) {
        this.dashboardDetails = storedDashboardDetails;
      } else {
        this.updateLocalStorage();
      }
    } catch {
      this.updateLocalStorage();
    }
  }

  private updateLocalStorage(): void {
    localStorage.setItem('dashboardResult', JSON.stringify(this.dashboardDetails));
  }
}
