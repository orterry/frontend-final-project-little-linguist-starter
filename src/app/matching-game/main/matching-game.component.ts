import { Component } from '@angular/core';
import { Category } from '../../../shared/model/category';
import { Language } from '../../../shared/model/language';
import { TranslatedWord } from '../../../shared/model/translated-word';
import { WordStatus } from '../../../shared/model/matching-game-model';
import { DialogComponent } from '../dialog/dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { WordComponent } from '../word/word/word.component';

@Component({
  selector: 'app-matching-game',
  standalone: true,
  imports: [WordComponent,CommonModule],
  templateUrl: './matching-game.component.html',
  styleUrl: './matching-game.component.css'
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

  constructor(){
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
    this.currentCategory = JSON.parse(localStorage.getItem("currentCategory")||'') as Category;
    if(this.currentCategory.words.length >= 5){
      this.choose5words();
      this.shuffle()
      
    }
    else{
      alert('error')
    }

    
  }

}
