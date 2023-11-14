import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
/*
The CancellableService provides a method fetchData that returns an Observable.
The Observable simulates an asynchronous operation (e.g., fetching data) using setTimeout.
We use takeUntil operator to handle cancellation. If the Observable is unsubscribed before completion, the cancellation logic inside the subscriber is executed.
*/
@Injectable({
  providedIn: 'root',
})
export class CancellableService {
  fetchData(): Observable<string> {
    return new Observable((subscriber: Subscriber<string>) => {
      const timeoutId = setTimeout(() => {
        subscriber.next('Async Data');
        subscriber.complete();
      }, 5000);

      // Handle cancellation
      subscriber.add(() => {
        clearTimeout(timeoutId);
        console.log('Request canceled.');
      });
    });
  }
}

