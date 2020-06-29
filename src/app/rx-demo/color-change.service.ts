import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorChangeService {
  private colorSubject = new Subject<string>();
  color$ = this.colorSubject.asObservable();
  constructor() {}

  emitColor(color: string) {
    this.colorSubject.next(color);
  }
}
