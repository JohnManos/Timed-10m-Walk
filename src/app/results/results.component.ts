import { Component, DoCheck } from '@angular/core';
import { ResultsService } from '../results.service';
import { Trial } from 'src/app/trial';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements DoCheck {
  displayedColumns: string[] = ['comfortTime', 'comfortVelocity', 'fastTime', 'fastVelocity', 'action'];
  dataSource: MatTableDataSource<Trial>;

  constructor(private resultsService: ResultsService) { }

  ngDoCheck() {
    this.dataSource = new MatTableDataSource<Trial>(this.resultsService.trials);
  }

  getAverageComfortVelocity() {
    return 'Average Velocity: ' + this.resultsService.trials.map(t => t.comfortVelocity)
      .reduce((acc, value) => (acc + value) / this.resultsService.trials.length, 0)
      .toFixed(3);
  }

  getAverageFastVelocity() {
    return 'Average Velocity: ' + this.resultsService.trials.map(t => t.fastVelocity)
      .reduce((acc, value) => (acc + value) / this.resultsService.trials.length, 0)
      .toFixed(3);
  }

  deleteTrial(trial) {
    this.resultsService.deleteTrial(trial);
  }

}
