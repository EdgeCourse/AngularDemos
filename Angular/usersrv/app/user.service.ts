/*
An Angular service is a reusable, 
injectable object in Angular. 
It can be used to encapsulate logic, 
share data, and provide a way for different 
components to communicate with each other. 
*/
// user.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: string = '';

  setCurrentUser(user: string): void {
    this.currentUser = user;
  }

  getCurrentUser(): string {
    return this.currentUser;
  }
}
