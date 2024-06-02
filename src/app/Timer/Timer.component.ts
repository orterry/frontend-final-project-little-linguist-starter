import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { FirestoreService } from '../firestore.service';


@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './Timer.component.html',
  styleUrl: './Timer.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() timerEvent = new EventEmitter<number>();

  constructor(private firestoreService: FirestoreService){}
  private initialTime: number = 60; // Initial time set to 1 minute
  private currentTime: number = this.initialTime;
  private timerSubscription: Subscription | undefined;
  public formattedTime: string = '';

  async ngOnInit(): Promise<void> {
    // const difficulty = JSON.parse(localStorage.getItem("difficulty")||'')
    const difficulty = await this.firestoreService.getDifficulty() || ''

    if(difficulty === 'easy'){
      this.currentTime = 120
    }
    else if(difficulty === 'medium'){
      this.currentTime = 90
    }
    else{
      this.currentTime = 60
    }
    this.startTimer();
    this.formattedTime = this.formatTime(this.currentTime);
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  private startTimer(): void {
   
    this.timerSubscription = interval(1000).subscribe(() => {
      this.currentTime--;
      this.timerEvent.emit(this.currentTime);
      this.formattedTime = this.formatTime(this.currentTime);

      if (this.currentTime === 0) {
        this.stopTimer();
      }
    });
  }

  private stopTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;
    return `${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}


