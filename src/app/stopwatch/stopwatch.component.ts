import { Component, DoCheck } from '@angular/core';
import { StopwatchService } from 'src/app/stopwatch.service';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements DoCheck {
  time: string;
  trialType: string;
  numTrials;

  constructor(private stopwatchService: StopwatchService,
    private resultsService: ResultsService) {}

  ngDoCheck() {
      this.time = this.stopwatchService.time;
      this.numTrials = this.resultsService.trials.length;
  }

  start() {
    this.stopwatchService.start();
  }

  stop() {
    this.stopwatchService.stop();
  }

  clear() {
    this.stopwatchService.clear();
  }

  add() {
    this.resultsService.addTrial(this.time, this.stopwatchService.milisecs, this.trialType);
  }
}
