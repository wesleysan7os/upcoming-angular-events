import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class AuthService {
  currentUser: User;
  loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'John',
      lastName: 'Papa'
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
