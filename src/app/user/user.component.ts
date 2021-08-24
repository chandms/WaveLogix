import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];


  title = "User Page"


  constructor(service : LoginService) {
    this.users = service.getUsers();

   }

  ngOnInit(): void {
  }

}
