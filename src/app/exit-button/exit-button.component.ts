import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExitConfirmationDialogComponent } from '../exit-confirmation-dialog/exit-confirmation-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ChooseGameDialogComponent } from '../choose-game-dialog/choose-game-dialog.component';
import { Category } from '../../shared/model/category';
import { constructor } from 'jasmine';


@Component({
  standalone : true,
  imports : [MatIconModule],
  selector: 'app-exit-button',
  templateUrl: './exit-button.component.html',
  styleUrls: ['./exit-button.component.css']
})
export class ExitButtonComponent {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ExitConfirmationDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // ניווט למסך בחירת משחק
      }
    });
  }
}
constructor(private dialogService : MatDialog,gameService:GameService){}
@Input()
currentcategory? : Category;


openDialog() {
  this.dialogService.open(ChooseGameDialogComponent);


}
function openDialog() {
  throw new Error('Function not implemented.');
}

