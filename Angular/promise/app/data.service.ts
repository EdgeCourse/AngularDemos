import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getDataPromise(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Async Data from Promise');
      }, 2000);
    });
  }

}
