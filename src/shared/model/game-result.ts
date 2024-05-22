
export class GameResult {
    constructor(
      public gamesCounter:number = 0,
      public pointCounter:number = 0,
      public totalTimePlayed:number = 0,
      public avgTimeDuration:number = 0,
      public gameCompletedOnTIme:number=0,
      public endBeforeTimeEnd:number=0
    ) {}

    avgCalc(){
      this.avgTimeDuration = (this.totalTimePlayed)/(this.gamesCounter)
    }

    gameCompletedOnTImeCalc(){
      this.gameCompletedOnTIme = (this.endBeforeTimeEnd/this.gamesCounter)*100
    }


  }