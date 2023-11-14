// user.service.ts
/* 
Pitballs of not using DI (using new instead)-
Harder to Test:

Testing becomes more challenging because the component creates its own instance of the UserService. In unit tests, it's not straightforward to substitute the actual service with a mock or stub for isolated testing.

Reduced Flexibility:

If you later decide to change the implementation of UserService or use a different service altogether, you would need to modify the WithoutDI class directly. This makes the code less flexible and more prone to errors during changes.

No Angular Lifecycle Management:

Angular provides a lifecycle management system for services, such as dependency injection, change detection, and service disposal. By creating a service instance manually, you miss out on these Angular features.
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json()
    );
  }
}
