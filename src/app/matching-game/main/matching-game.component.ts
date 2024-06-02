import { Component } from '@angular/core';
import { Category } from '../../../shared/model/category';
import { Language } from '../../../shared/model/language';
import { TranslatedWord } from '../../../shared/model/translated-word';
import { WordStatus } from '../../../shared/model/matching-game-model';
import { DialogComponent } from '../dialog/dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { WordComponent } from '../word/word/word.component';
import { MatDialog } from '@angular/material/dialog';
import { GamePoint } from '../../../shared/model/game-points';
import {PointsService} from '../../../../src/app/services/points-service'
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TimerComponent } from "../../Timer/Timer.component";
import { FirestoreService } from '../../firestore.service';



@Component({
    selector: 'app-matching-game',
    standalone: true,
    templateUrl: './matching-game.component.html',
    styleUrl: './matching-game.component.css',
    imports: [WordComponent, CommonModule, MatIconModule, TimerComponent]
})
export class MatchingGameComponent {
  
  currentCategory:Category=new Category(0,'',Language.English,Language.Hebrew);
  currentCards:TranslatedWord[]=[]
  shuffleTarget :string[]= []
  targets:string[] = []
  targetStatus:WordStatus[] = [WordStatus.NORMAL,WordStatus.NORMAL,WordStatus.NORMAL,WordStatus.NORMAL,WordStatus.NORMAL]
  originStatus:WordStatus[] = [WordStatus.NORMAL,WordStatus.NORMAL,WordStatus.NORMAL,WordStatus.NORMAL,WordStatus.NORMAL]
  attemptsCount=0
  successesCount=0
  currentPointsCount=0
  pointsForCurrentRoundCount=0
  pointsService:PointsService = new PointsService()
  secondsLeft:number = 0
  playTime:number = 0

  onTimerEvent(timeLeft: number): void {
    this.secondsLeft = timeLeft
    if(timeLeft === 0){
      this.endGame()
    }
    console.log(`Time left: ${timeLeft} seconds`);
  }
  

  constructor(private firestoreService: FirestoreService,private dialogService : MatDialog,private router : Router){
    this.initGame()
  }

  choose5words(){
    let choose:TranslatedWord[] = [];
    for(let i = 0 ; i < 5 ; i++){
      const randomIndex = Math.floor(Math.random() * this.currentCategory.words.length);
      if (!choose.includes(this.currentCategory.words[randomIndex])) {
        choose.push (this.currentCategory.words[randomIndex]);
      }
      else{
        i--;
      }
    }
    this.currentCards = choose;
  }

  shuffle(){
    let shuffleTargetTemp:string[] = this.currentCards.map((current)=>(current.target))
    for (let i = shuffleTargetTemp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleTargetTemp[i], shuffleTargetTemp[j]] = [shuffleTargetTemp[j], shuffleTargetTemp[i]];
    }
    this.shuffleTarget = shuffleTargetTemp;
  }

  initGame(){
    this.pointsForCurrentRoundCount = 100;
    this.currentCategory = JSON.parse(localStorage.getItem("currentCategory")||'') as Category;
    this.playTimeInit()
    if(this.currentCategory.words.length >= 5){
      this.choose5words();
      this.shuffle()
      
    }
    else{
      alert('error')
    }

    
  }

  chooseCard(cat:string,i:number){
    if(cat === 'origin'){
      if(this.originStatus[i] === WordStatus.NORMAL){
        this.originStatus[i] = WordStatus.SELECTED
        for(let j = 0 ; j < this.originStatus.length;j++ ){
          if(i === j){
            continue
          }
          if(this.originStatus[j] === WordStatus.SELECTED){
            this.originStatus[j] = WordStatus.NORMAL
            break
          }
        }

        for(let j = 0 ; j < this.targetStatus.length;j++ ){
          if(this.targetStatus[j] === WordStatus.SELECTED){
            const check = this.currentCards.find((card)=>card.target === this.shuffleTarget[j])
            if(check?.origin == this.currentCards[i].origin){
              this.dialogService.open(DialogComponent,{data:true});
              this.targetStatus[j] = WordStatus.DISABLED
              this.originStatus[i] = WordStatus.DISABLED
              this.attemptsCount += 1
              this.successesCount += 1
            }
            else{
              this.dialogService.open(DialogComponent,{data:false});
              this.pointsForCurrentRoundCount -= 2
              this.attemptsCount += 1
              this.cleanArray();
            }
          }

        }

      }
      

    }
    else{
      if(this.targetStatus[i] === WordStatus.NORMAL){
        this.targetStatus[i] = WordStatus.SELECTED
        for(let j = 0 ; j < this.targetStatus.length;j++ ){
          if(i === j){
            continue
          }
          if(this.targetStatus[j] === WordStatus.SELECTED){
            this.targetStatus[j] = WordStatus.NORMAL
            break
          }
        }

        for(let j = 0 ; j < this.originStatus.length;j++ ){
          if(this.originStatus[j] === WordStatus.SELECTED){
            const check = this.currentCards.find((card)=>card.target ===  this.shuffleTarget[i])
            if(check?.origin == this.currentCards[j].origin){
              this.dialogService.open(DialogComponent,{data:true});
              this.originStatus[j] = WordStatus.DISABLED
              this.targetStatus[i] = WordStatus.DISABLED
              this.attemptsCount += 1
              this.successesCount += 1
            }
            else{
              this.dialogService.open(DialogComponent,{data:false});
              this.pointsForCurrentRoundCount -= 2
              this.attemptsCount += 1
              this.cleanArray();
            }
          }

        }
      }


    }

    this.finishGame()
  }

  cleanArray(){
    for(let i = 0 ; i < this.targetStatus.length;i++){
      if(this.targetStatus[i]===WordStatus.SELECTED){
        this.targetStatus[i]=WordStatus.NORMAL
      }
      if(this.originStatus[i]===WordStatus.SELECTED){
        this.originStatus[i]=WordStatus.NORMAL
      }
    }

  }

  finishGame(){
    for(let i = 0 ; i < this.originStatus.length;i++){
        if(this.originStatus[i]!==WordStatus.DISABLED){
          return;
        }
      }
      this.endGame()
    }
    
    
    endGame(){
      this.playTime -= this.secondsLeft
      const game : GamePoint = new GamePoint(this.currentCategory.id,this.currentCategory.name,this.pointsForCurrentRoundCount,this.currentCards,this.attemptsCount,this.successesCount,this.secondsLeft,this.playTime)
      localStorage.setItem("gameResult",JSON.stringify(game))
      this.router.navigate(['result'])
      
    }

    async playTimeInit(){
      // const difficulty = JSON.parse(localStorage.getItem("difficulty")||'')
      const difficulty = await this.firestoreService.getDifficulty() || ''
      if(difficulty === 'easy'){
      this.playTime = 120
      }
      else if(difficulty === 'medium'){
        this.playTime = 90
      }
      else{
        this.playTime = 60
      }
    }


    
  

}




