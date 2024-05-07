import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-exit-confirmation-dialog',
  imports: [
    CommonModule,
    MatDialogModule,MatIconModule,RouterModule
  ],
  standalone: true,
  templateUrl: './exit-confirmation-dialog.component.html',
  styleUrls: ['./exit-confirmation-dialog.component.css']
})
export class ExitConfirmationDialogComponent {
  constructor(private router: Router) { }
  
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

    }

