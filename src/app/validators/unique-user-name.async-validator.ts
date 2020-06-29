import { Injectable } from '@angular/core';
import { UtilService } from '../core/util.service';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueUserNameValidator implements AsyncValidator {
  constructor(private utilService: UtilService) {}

  validate(controls: AbstractControl): Observable<ValidationErrors | null> {
    return this.utilService.checkUniqueUserName(controls.value).pipe(
      map((isExists) => (isExists ? { uniqueUserName: controls.value } : null)),
      catchError(() => null)
    );
  }
}
