import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GamePoint } from '../../shared/model/game-points';
import { TranslatedWord } from '../../shared/model/translated-word';
import { RouterModule } from '@angular/router';

enum grade{
  Fail='Fail',
  Pass ='Pass',
  Good='Good',
  Excellent='Excellent'
}


@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    CommonModule,RouterModule
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {

  gameDetails:GamePoint=new GamePoint(0,'',0,[],0,0)
  gradeStatus : grade = grade.Fail

  ngOnInit(): void {
    this.gameDetails = JSON.parse(localStorage.getItem('gameResult')||'') as GamePoint 
    if(this.gameDetails.currentPoint > 80){
      this.gradeStatus = grade.Excellent
    }
    else if(this.gameDetails.currentPoint > 60){
      this.gradeStatus = grade.Good
    }
    else if(this.gameDetails.currentPoint > 50){
      this.gradeStatus = grade.Pass
    }
    else{
      this.gradeStatus = grade.Fail
    }
    
  }

 }
