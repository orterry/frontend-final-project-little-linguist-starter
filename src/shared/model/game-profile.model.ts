import { GameDifficulty } from "./game-difficulty.enum";

export class GameProfile {
    id: number;
    name: string;
    description: string;
    difficulty: GameDifficulty;
    url: string;
  
    constructor(id: number, name: string, description: string, difficulty: GameDifficulty, url: string) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.difficulty = difficulty;
      this.url = url;
    }
  }
  