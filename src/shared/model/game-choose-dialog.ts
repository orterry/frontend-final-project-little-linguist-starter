import { GameDifficulty } from "./game-difficulty.enum";

export class GameChooseDialog {

  constructor( public id : number,
    public name: string,
    public description: string,
    public duration: GameDifficulty) { }

}





