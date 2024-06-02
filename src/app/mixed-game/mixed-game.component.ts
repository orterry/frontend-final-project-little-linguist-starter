import { Component } from '@angular/core';
import { Category } from '../../shared/model/category';
import { Language } from '../../shared/model/language';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../matching-game/dialog/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { GamePoint } from '../../shared/model/game-points';
import { TimerComponent } from "../Timer/Timer.component";
import { FirestoreService } from '../firestore.service';

@Component({
    selector: 'app-mixed-game',
    standalone: true,
    templateUrl: './mixed-game.component.html',
    styleUrl: './mixed-game.component.css',
    imports: [CommonModule, MatProgressBarModule, TimerComponent]
})
export class MixedGameComponent {
  
  constructor(private firestoreService: FirestoreService,private dialogService : MatDialog,private router:Router){}
  
  currentCategory:Category=new Category(0,'',Language.English,Language.Hebrew);
  level:number = 0
  origin:string[]=[]
  target:string = ''
  inputValue:string = ''


  currentPoint:number = 100
  attemptsCount:number=0
  successesCount:number=0
  playTime:number=0
  secondLeft:number = 0

  onTimerEvent(timeLeft: number): void {
    this.secondLeft = timeLeft
    if(timeLeft === 0){
      this.endGame()
    }
    console.log(`Time left: ${timeLeft} seconds`);
  }


  ngOnInit(): void {
    this.currentCategory = JSON.parse(localStorage.getItem("currentCategory")||'') as Category;
    this.playTimeInit()
    this.target = this.currentCategory.words[this.level].target
    this.origin = this.mixedOrigin(this.currentCategory.words[this.level].origin)

  }
  nextWord(){
    
    console.log( this.level);
    console.log(this.currentCategory.words);
    console.log(this.currentCategory.words.length);
    
    
    if(this.currentCategory.words.length > this.level){

      if(this.inputValue === this.currentCategory.words[this.level].origin){
        this.dialogService.open(DialogComponent,{data:true});
        this.currentCategory.words[this.level].guess = 'true'
        this.successesCount += 1
        this.attemptsCount += 1
      }
      else{
        this.dialogService.open(DialogComponent,{data:false});
        this.currentCategory.words[this.level].guess = 'false'
        this.attemptsCount += 1
        this.currentPoint -= (100 / this.currentCategory.words.length)
        
      }
      this.resetValue()

      if(this.currentCategory.words.length > this.level+1){
        this.target = this.currentCategory.words[this.level+1].target
        this.origin = this.mixedOrigin(this.currentCategory.words[this.level+1].origin)
      }
      else{
        this.endGame()
      }
      this.level+=1
      
    }
    

  }

  endGame(){
    this.playTime -= this.secondLeft
    const game : GamePoint = new GamePoint(this.currentCategory.id,this.currentCategory.name,this.currentPoint,this.currentCategory.words,this.attemptsCount,this.successesCount,this.secondLeft,this.playTime)
    localStorage.setItem("gameResult",JSON.stringify(game))
    this.router.navigate(['resultmixedgame'])
  }

  handleChange(event: Event) {
    this.inputValue=(event.target as HTMLInputElement).value;
  }
  resetValue(){
    this.inputValue = ''
  }


  shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  
  mixedOrigin(origin:string){
    const characters = origin.split('');
    const randomizedArray = this.shuffleArray(characters);
    return randomizedArray;

  }

  calculateProgress(): number {
    const totalItems = this.currentCategory.words.length;
    const completedItems = this.level;

    const progress = (completedItems / totalItems) * 100;
    return progress;
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
