import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dialog-Exit',
  standalone: true,
  imports:[CommonModule,MatButtonModule,MatIconModule,RouterLink,MatDialogContent,MatDialogClose,
    MatDialogActions],
  templateUrl: './dialogExit.component.html',
  styleUrl:'./dialogExit.component.css'
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
