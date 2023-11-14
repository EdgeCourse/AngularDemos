import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-with-di',
  templateUrl: './with-di.component.html',
  styleUrls: ['./with-di.component.css']
})
export class WithDIComponent {

  constructor(private userService: UserService) {
    this.userService.getUsers().then((users) => console.log(users));
  }
  
}
