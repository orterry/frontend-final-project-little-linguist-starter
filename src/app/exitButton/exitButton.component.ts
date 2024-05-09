import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExitComponent } from '../dialogExit/dialogExit.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exit-button',
  imports: [MatIconModule,CommonModule],
  standalone: true,
  templateUrl: './exitButton.component.html',
  styleUrls: ['./exitButton.component.css']
})
export class ExitButtonComponent { 

  constructor(private dialogService: MatDialog) {}

  openDialog(): void {
    this.dialogService.open(DialogExitComponent);
  }
}
