import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GamePoint } from '../../shared/model/game-points';
import { TranslatedWord } from '../../shared/model/translated-word';
import { RouterModule } from '@angular/router';

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

  gameDetails:GamePoint=new GamePoint(0,'',0,[])

  ngOnInit(): void {
    this.gameDetails = JSON.parse(localStorage.getItem('gameResult')||'') as GamePoint 

    
  }

 }
