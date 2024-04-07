import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-category-dialog',
  standalone: true,
  imports: [
    CommonModule, MatDialogModule
  ],
  templateUrl: './delete-category-dialog.component.html',
  styleUrls: ['./delete-category-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteCategoryDialogComponent {
  categoryName: string;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: { fullname: string }, private dialog: MatDialog) {
    this.categoryName = data.fullname;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteCategoryDialogComponent, {
      data: { fullname: this.categoryName }
    });
  }
}
