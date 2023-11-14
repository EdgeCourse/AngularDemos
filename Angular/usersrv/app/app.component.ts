// app.component.ts

import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent {
  currentUser: string = '';
  newUser: string = '';

  constructor(private userService: UserService) {
    this.currentUser = userService.getCurrentUser();
  }

  changeUser(): void {
    this.userService.setCurrentUser(this.newUser);
    this.currentUser = this.userService.getCurrentUser();
  }
}
