import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GameResult } from '../../shared/model/game-result';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent { 

  constructor(private firestoreService: FirestoreService){}
  dashboardDetails:GameResult = new GameResult()
  ngOnInit(): void {

    try{
    // this.dashboardDetails= JSON.parse(localStorage.getItem("dashboardResult")||'') as GameResult;
    this.dashboardDetails = (this.firestoreService.getDashboardResult()) as unknown as GameResult
    }
    catch{
      // localStorage.setItem("dashboardResult",JSON.stringify(this.dashboardDetails))
      this.firestoreService.updateDashboardResult(this.dashboardDetails.gamesCounter,this.dashboardDetails.pointCounter);
    }
    
  }

}
