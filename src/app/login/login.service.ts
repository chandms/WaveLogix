import { Injectable } from '@angular/core';
import { User } from '../user/User';
import { USERS } from '../user/test.user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  getUsers(){
    return USERS;
  }

  
  constructor() { }
}
