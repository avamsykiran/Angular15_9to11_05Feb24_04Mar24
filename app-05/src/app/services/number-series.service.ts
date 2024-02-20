import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

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

  generateStringValues() : Observable<string> {

    const strings:string[] = ["a","b",'c',"d","e"];

    const bgJob = (observer:Observer<string>) => {
      if(strings.length===0){
        observer.error("No data to generate from");
        return;
      }

      let i = 0;

      let handle = setInterval( () => {
        observer.next(strings[i]);
        i++;
        if(i===strings.length){
          clearInterval(handle);
          observer.complete();
        }
      } , 500);
    };

    return new Observable<string>( bgJob );
  }
}
