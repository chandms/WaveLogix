import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../user/User';
import { USERS } from '../user/test.user';
import { environment as env } from 'src/environments/environment';
import jwt_decode from "jwt-decode";
import { FormControl } from '@angular/forms';
import { Login } from './Login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authentication_url = env.backend_url + '/authentication';

  constructor(private http: HttpClient) { }
  
  getUsers(){
    return USERS;
  }

  decodeUser(username: string ,password: string){
    let body = {
      'username': username,
      'password': password
    };
    console.log(body);
    return this.http.post<Login>(this.authentication_url, body);
  }

  
  
}
