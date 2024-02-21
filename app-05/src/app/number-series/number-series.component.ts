import { Component } from '@angular/core';
import { NumberSeriesService } from '../services/number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent {

  lb: number;
  ub: number;

  isEven!: boolean;
  isSquared!: boolean;

  errMsg!: string | null;
  results!: number[];
  isJobActive!: boolean;

  constructor(private nss: NumberSeriesService) {
    this.lb = 0;
    this.ub = 0;
  }

  formSubmitted() {
    this.results = [];
    this.errMsg = null;

    let ob = null;

    if (this.isEven && this.isSquared) {
      ob = this.nss.generateEvenSquaredSeries(this.lb, this.ub);
    } else if (this.isEven) {
      ob = this.nss.generateEvenSeries(this.lb, this.ub);
    } else if (this.isSquared) {
      ob = this.nss.generateSquaredSeries(this.lb, this.ub);
    } else {
      ob = this.nss.generateSeries(this.lb, this.ub);
    }

    this.isJobActive = true;

    ob.subscribe({
      next: val => this.results.push(val),
      error: err => { this.errMsg = err; this.isJobActive = false; },
      complete: () => this.isJobActive = false
    })
  }
}
