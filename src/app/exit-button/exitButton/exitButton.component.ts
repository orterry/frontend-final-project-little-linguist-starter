import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GameService } from '../../services/game/game-service';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../../../shared/model/category';
import { DialogComponent } from '../../dialog/dialog.component';
import { DialogExitComponent } from '../../dialog-exit/dialogExit/dialogExit.component';

@Component({
  selector: 'app-exit-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './exitButton.component.html',
  styleUrl: './exitButton.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExitButtonComponent { 


  constructor(private dialogService : MatDialog,gameService:GameService){}
  @Input()
  currentcategory? : Category;


  openDialog() {
    this.dialogService.open(DialogExitComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.categoriesService.delete(id);
    //     this.dataSource = this.categoriesService.list();
    //   }});
  }
}
