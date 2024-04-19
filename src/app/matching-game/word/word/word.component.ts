import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WordStatus } from '../../../../shared/model/matching-game-model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-word',
  standalone: true,
  imports: [MatCardModule,
    CommonModule,
  ],
  templateUrl: './word.component.html',
  styleUrl: './word.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordComponent {

constructor(){
}


@Input()
value? : string;
color? :string;
@Input()
wordStatus?:WordStatus

changeColor(){
  if(this.wordStatus === WordStatus.NORMAL){
    this.color = 'black'
  }
  else if(this.wordStatus === WordStatus.SELECTED){
    this.color = 'blue'
  }
  else{
    this.color = 'gray'
  }
  return this.color
}

}



 
