import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {
  isRunning: boolean = false;
  timerRef;
  milisecs: number;
  time: string = '00:00:0000';

  constructor() { }

  start() {
    this.isRunning = !this.isRunning;
    if (this.isRunning) {
    const startTime = Date.now() - (this.milisecs || 0);
    this.timerRef = setInterval(() => {
      this.milisecs = Date.now() - startTime;
      this.time = this.toTimeString(this.milisecs);
    });
    }
  }

  stop() {
    this.isRunning = false;
    clearInterval(this.timerRef);
  }

  clear() {
    this.milisecs = undefined;
    this.time = '00:00:0000';
  }

  toTimeString(cnt: number): string {
    let minutes = Math.floor(cnt / 60000);
    let seconds = Math.floor((cnt - minutes * 60000) / 1000);
    let miliseconds = Math.floor(cnt - minutes * 60000 - seconds * 1000);
    minutes = this.pad(minutes, 10);
    seconds = this.pad(seconds, 10);
    miliseconds = this.pad(miliseconds, 1000);
    return minutes + ':' + seconds + ':' + miliseconds;
  }

  pad(num, maxPlace: number) {
    return (num < maxPlace) ? '0' + num.toString() : num.toString();
  }
}
