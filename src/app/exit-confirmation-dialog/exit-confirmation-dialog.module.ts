import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ExitConfirmationDialogComponent } from './exit-confirmation-dialog.component';

@NgModule({
  declarations: [ExitConfirmationDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [ExitConfirmationDialogComponent]
})
export class ExitConfirmationDialogModule { }
