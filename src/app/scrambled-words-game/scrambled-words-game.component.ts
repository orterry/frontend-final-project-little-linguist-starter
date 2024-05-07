import { Component}
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { _Constructor } from '@angular/material/core';
import { NgModuleRef } from '@angular/core';




@Component({
  selector: 'app-scrambled-words-game',
  standalone: true,
  imports: [MatIconModule,MatProgressBarModule,NgModuleRef],
  templateUrl: './scrambled-words-game.component.html',
  styleUrl: './scrambled-words-game.component.css'
})
export class ScrambledWordsGameComponent {
  
getProgress(): import("@angular/cdk/coercion").NumberInput {
throw new Error('Method not implemented.');
}
calculateProgress() {
throw new Error('Method not implemented.');
}
currentCategory: any;
target: any;
handleChange($event: Event) {
throw new Error('Method not implemented.');
}
nextWord() {
throw new Error('Method not implemented.');
}
resetValue() {
throw new Error('Method not implemented.');
}
inputValue: any;

}


