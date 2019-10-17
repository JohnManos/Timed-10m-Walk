import { Injectable } from '@angular/core';
import { Trial } from 'src/app/trial';
import { StopwatchService } from './stopwatch.service';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  trials: Trial[] = [];
  numComfortTrials: number = 0;
  numFastTrials: number = 0;

  constructor(private stopwatchService: StopwatchService) { }

  addTrial(time: string, milisecs: number, trialType: string) {
    if (trialType === 'comfort') {
      if (this.numComfortTrials === this.trials.length) {
        this.trials.push(new Trial(time, milisecs, 6, trialType));
      }
      else if (this.numComfortTrials < this.trials.length) {
        this.trials[this.numComfortTrials].addEntry(time, milisecs, 6, trialType);
      }
      ++this.numComfortTrials;
    }
    else if (trialType === 'fast') {
      if (this.numFastTrials === this.trials.length) {
        this.trials.push(new Trial(time, milisecs, 6, trialType));
      }
      else if (this.numFastTrials < this.trials.length) {
        this.trials[this.numFastTrials].addEntry(time, milisecs, 6, trialType);
      }
      ++this.numFastTrials;
    }
  }

  deleteTrial(trial: Trial) {
    if (trial.comfortTime != null) {
      --this.numComfortTrials;
    }
    if (trial.fastTime != null) {
      --this.numFastTrials;
    }
    this.trials.splice(this.trials.indexOf(trial), 1);
  }
}
