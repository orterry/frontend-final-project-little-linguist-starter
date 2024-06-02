import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GamePoint } from '../../shared/model/game-points';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { GameResult } from '../../shared/model/game-result';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-result-mixed-game',
  standalone: true,
  imports: [
    CommonModule,RouterModule,MatIconModule
  ],
  templateUrl: './result-mixed-game.component.html',
  styleUrl: './result-mixed-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultMixedGameComponent {

  constructor(private firestoreService: FirestoreService){}

  gameDetails:GamePoint=new GamePoint(0,'',0,[],0,0,0,0)

  dashboardResultSave(){
    let dashboardDetails = new GameResult() as GameResult
    try{
      // dashboardDetails = JSON.parse(localStorage.getItem("dashboardResult")||'') as GameResult;
      dashboardDetails = (this.firestoreService.getDashboardResult()) as unknown as GameResult

    }
    catch{
      // localStorage.setItem("dashboardResult",JSON.stringify(new GameResult()))
      this.firestoreService.updateDashboardResult(dashboardDetails.gamesCounter,dashboardDetails.pointCounter);
    }
    if(this.gameDetails.secondsLeftInGame > 0){
      dashboardDetails.endBeforeTimeEnd+=1
    }
    dashboardDetails.gamesCounter+=1;
    dashboardDetails.pointCounter+=this.gameDetails.successesCount;
    dashboardDetails.totalTimePlayed+=this.gameDetails.secondsPlayed
    dashboardDetails.avgTimeDuration = dashboardDetails.totalTimePlayed/dashboardDetails.gamesCounter

    dashboardDetails.gameCompletedOnTIme =(dashboardDetails.endBeforeTimeEnd / dashboardDetails.gamesCounter)*100
    
    // localStorage.setItem("dashboardResult",JSON.stringify(dashboardDetails))
    this.firestoreService.updateDashboardResult(dashboardDetails.gamesCounter,dashboardDetails.pointCounter);

  }
  ngOnInit(): void {
    this.gameDetails = JSON.parse(localStorage.getItem('gameResult')||'') as GamePoint 
    this.dashboardResultSave()
  }


 }
