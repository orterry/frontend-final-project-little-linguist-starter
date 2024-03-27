export class GamePlayed {
    categoryId: number;
    gameId: number;
    date: Date;
    pointsEarned: number;
  
    constructor(categoryId: number, gameId: number, date: Date, pointsEarned: number) {
      this.categoryId = categoryId;
      this.gameId = gameId;
      this.date = date;
      this.pointsEarned = pointsEarned;
    }
  }
  