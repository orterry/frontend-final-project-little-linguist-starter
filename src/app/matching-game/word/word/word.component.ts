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




@Input()
value? : string;
wordStatus?:WordStatus;
color? :string;


 }
