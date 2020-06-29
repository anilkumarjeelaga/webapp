import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, from, of, Observable, observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.css'],
})
export class ObservablesDemoComponent implements OnInit {
  public fromEventLogs: string[] = []; //if we dont mention anything 'private or public' ,it will go public method no need to specify public: the below all are public methods
  public ajaxLogs: string[] = [];
  intervalLogs: string[] = [];
  fromLogs: string[] = [];
  ofLogs: string[] = [];
  customObservableLogs: string[] = [];
  customObservable2Logs: string[] = [];
  customeObservable2Logs: string[] = [];
  customObservable3Logs: string[] = [];
  customArrayLogs: any[] = [];

  constructor() {}

  ngOnInit(): void {
    const specialElement = document.getElementById('special-area');
    const mouseEventsObservable = fromEvent(specialElement, 'mousemove');

    const subscription = mouseEventsObservable.subscribe((evt: MouseEvent) => {
      this.fromEventLogs.push(`Coords: ${evt.clientX} X ${evt.clientY}`);

      if (evt.clientX < 230 && evt.clientY < 250) {
        subscription.unsubscribe();
        this.fromEventLogs.push('unsubscribed from mouse events');
      }
    });

    /*---  Ajax ----*/

    let todosUrl = 'https://todos-api-dev.herokuapp.com/todos';
    const todoObservable = ajax(todosUrl);

    todoObservable.subscribe((res) => {
      console.log(res.status, res.response);
      this.ajaxLogs.push('Response came');
    });

    /***** interval *****/

    const secondsCounterObservable = interval(1000);

    secondsCounterObservable.subscribe((n) =>
      this.intervalLogs.push(`It's been ${n} seconds since subscribing!`)
    );

    /***-- FromArray --***/

    let numbers = [10, 20, 30, 40, 50];

    const arrayObservable = from(numbers);
    arrayObservable.subscribe((n) => this.fromLogs.push(`${n}`));

    /* -- of --*/

    const ofObservable = of(60, 70, 80, 90, 100);
    ofObservable.subscribe((n) => this.ofLogs.push(`${n}`));

    /***** Custom observable with create method *****/
    let customObservable = Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4), observer.complete();
      }, 1000);
      observer.next(5);
    });

    customObservable.subscribe({
      next: (x) => this.customObservableLogs.push('got value' + x),
      error: (err) =>
        this.customObservableLogs.push('something went occured' + err),
      complete: () => this.customObservableLogs.push('done'),
    }); // subscribe method will next error complete method in an object

    /***** Custom observalble with new keyword *****/

    let customObservable2 = new Observable(function (observer) {
      observer.next(11);
      observer.next(22);
      observer.next(33);
      setTimeout(() => {
        observer.next(44), observer.complete();
      }, 1000);
    });
    customObservable2.subscribe(
      (x) => this.customeObservable2Logs.push('got value' + x),
      (err) => this.customObservable2Logs.push('something went occured' + err),
      () => this.customObservable2Logs.push('done')
    );

    /***** Custom observalble with error method *****/

    let customObservable3 = new Observable(function (observer) {
      try {
        observer.next(111);
        observer.next(222);
        observer.next(333);
        throw new Error('some error');
      } catch (err) {
        observer.error(err);
      }
    });
    customObservable3.subscribe(
      (x) => this.customObservable3Logs.push('got value' + x), // called on, observer.next()
      (err) => this.customObservable3Logs.push('something went occured' + err), // called on, observer.error()
      () => this.customObservable3Logs.push('done') // called on, observer.complete()
    ); // subscribe method with next, error, complete methods

    /***** Custom observable on array *****/
    /***** Instead of using from method, created array observable with  Observable.create *****/

    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arrayCustomObservable = Observable.create(function (observer) {
      numbersArray.forEach((n) => {
        observer.next(n);
      });
      observer.complete();
    });
    arrayCustomObservable.subscribe({
      next: (x) => this.customArrayLogs.push('got value' + x),
      error: (err) =>
        this.customArrayLogs.push('something wrong occured' + err),
      complete: () => this.customArrayLogs.push('done'),
    });

    /*
     numbersArray.forEach(n => {
        observer.next(n);
      });
      
      observer.complete();*/
  }
}
