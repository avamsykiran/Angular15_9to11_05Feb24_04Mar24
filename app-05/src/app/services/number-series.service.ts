import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { filter,map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number) : Observable<number> {

    const bgJob = (observer:Observer<number>) => {
      if(lb>ub){
        observer.error("Invalid boudaries! can not generate series!");
        return;
      }

      let n = lb;

      let handle = setInterval( () => {
        observer.next(n);
        n++;
        if(n>ub){
          clearInterval(handle);
          observer.complete();
        }
      } , 500);
    };

    return new Observable<number>( bgJob );
  }

  generateEvenSeries(lb:number,ub:number) : Observable<number> {
    return this.generateSeries(lb,ub).pipe( filter( x => x%2===0 ) );
  }

  generateSquaredSeries(lb:number,ub:number) : Observable<number> {
    return this.generateSeries(lb,ub).pipe( map( x => x*x ) );
  }

  generateEvenSquaredSeries(lb:number,ub:number) : Observable<number> {
    return this.generateSeries(lb,ub).pipe( filter( x => x%2===0 ) , map( x => x*x ) );
  }
}
