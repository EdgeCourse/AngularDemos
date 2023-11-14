// optional.service.ts

import { Injectable } from '@angular/core';

//@Injectable() 
//goes next to (before) the injectable

@Injectable({
  providedIn: 'root',
})
export class OptionalService {
  getMessage(): string {
    return 'Hello from OptionalService!';
  }
}
