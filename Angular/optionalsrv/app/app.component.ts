/*
The @Optional decorator in Angular is 
used to prevent the injection system 
from throwing an error if a dependency is 
not found. Instead, it allows the injected 
value to be null. 

If the service is not found, it means that 
the service is not provided in any of the 
component's ancestors or the application's 
root injector. This situation could occur 
if the service is not provided in any 
module that encompasses the component or 
if the service is provided conditionally 
and the condition is not met.

*/
// app.component.ts

import { Component, OnInit, Optional } from '@angular/core';
import { OptionalService } from './optional.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  message!: string;

  constructor(@Optional() private optionalService: OptionalService) {}

  ngOnInit(): void {
    if (this.optionalService) {
      this.message = this.optionalService.getMessage();
    } else {
      this.message = 'OptionalService not provided.';
    }
  }
}
