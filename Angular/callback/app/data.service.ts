import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getDataCallback(callback: (data: string) => void): void {
    setTimeout(() => {
      callback('Async Data from Callback');
    }, 2000);
  }
}
