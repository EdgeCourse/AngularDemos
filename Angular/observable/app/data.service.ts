import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getDataObservable(): Observable<string> {
    return of('Async Data from Observable').pipe(delay(2000));
  }
}
