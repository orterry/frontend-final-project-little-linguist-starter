import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-exit',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './dialogExit.component.html',
  styleUrls: ['./dialogExit.component.css']
})
export class DialogExitComponent {
C: any;
E: any;
  constructor() { }

  cancel(): void {
   
    console.log("Cancel button clicked");
  }

  exit(): void {
   
    console.log("Exit button clicked");
  }
}
