import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-help-component',
  standalone: true,
  imports: [
    CommonModule,MatIconModule,RouterLink],
  templateUrl: './help-component.component.html',
  styleUrl: './help-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpComponentComponent { }
