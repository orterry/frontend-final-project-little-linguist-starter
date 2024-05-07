

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-words',
  standalone: true,
  imports: [MatCardModule,
    CommonModule,
  ],
  templateUrl: './words.component.html',
  styleUrl: './words.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordComponent {

constructor(){
}
}