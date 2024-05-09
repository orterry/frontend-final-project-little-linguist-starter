import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogClose } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog',
  standalone:true,
  imports:[CommonModule,MatIconModule,MatDialogClose],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent { 

  constructor(@Inject(MAT_DIALOG_DATA) public data: boolean) { }
  
}
