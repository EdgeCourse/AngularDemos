// component-without-di.ts

import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-without-di',
  templateUrl: './without-di.component.html',
  styleUrls: ['./without-di.component.css']
})
export class WithoutDIComponent {

  private userService = new UserService();

  constructor() {
    this.userService.getUsers().then((users: any) => console.log(users));
  }
}


