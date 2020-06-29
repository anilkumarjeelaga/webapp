import { Component, OnInit } from '@angular/core';
import { SubjectsDemoService } from '../subjects-demo.service';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css'],
})
export class SubjectDemoComponent implements OnInit {
  initTime: number;
  observableLogs: string[] = [];
  subjectLogs: string[] = [];
  subjectObservableLogs: string[] = [];

  constructor(public subjectDemoService: SubjectsDemoService) {}

  ngOnInit(): void {
    this.initTime = Date.now(); //returns Timestamp;

    /******** Observable subscribers ********/
    this.subjectDemoService.numbersObservable$.subscribe((n) => {
      this.observableLogs.push(
        `At ${this.getTimeDifference()} seconds: observer1: ${n}`
      );
    }); //subscriber 1;

    setTimeout(() => {
      this.subjectDemoService.numbersObservable$.subscribe((n) => {
        this.observableLogs.push(
          `At ${this.getTimeDifference()} seconds: observer2: ${n}`
        );
      });
    }, 1500); //subscriber 2;

    //********** subect observable ***********/
    this.subjectDemoService.numbersSubject.subscribe((n) => {
      this.subjectLogs.push(
        `At ${this.getTimeDifference()} seconds:observer1: ${n}`
      );
    }); //subscriber 1;

    setTimeout(() => {
      this.subjectDemoService.numbersSubject.subscribe((n) => {
        this.subjectLogs.push(
          `At ${this.getTimeDifference()} seconds:observer2 ${n}`
        );
      });
    }, 1500); //subscriber 2;\

    /******** Observable created from subject subscribers ********/
    this.subjectDemoService.numbersSubjectObservable$.subscribe((n) => {
      this.subjectObservableLogs.push(
        `At ${this.getTimeDifference()} seconds:observer1 ${n}`
      );
    }); //subscriber 1;

    setTimeout((n) => {
      this.subjectDemoService.numbersSubjectObservable$.subscribe((n) => {
        this.subjectObservableLogs.push(
          `At ${this.getTimeDifference()} second: observer2 ${n}`
        );
      });
    }, 1500);

    /******** 3. Subject as both observable and observer ********/
  }
  private getTimeDifference() {
    return ((Date.now() - this.initTime) / 1000).toFixed(1);
  }
}
