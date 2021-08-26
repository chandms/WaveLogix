import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { User } from '../user/User';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  constructor(private service : LoginService, private route : Router) {
    this.users = service.getUsers();
   }

  ngOnInit(): void {
  }

  username =  new FormControl('');
  password= new FormControl('');
 
  

  onSubmit(){
    console.log("Username : "+this.username.value);
    console.log("Password : "+this.password.value);

    // console.log(this.service.decodeUser(this.username.value,this.password.value));
    this.service.decodeUser(this.username.value,this.password.value).subscribe(
      Response => {
        console.log(Response.message +"    "+Response.token);

        console.log(jwtDecode(Response.token))
        //console.log(jwtDecode(Response))
      },
      (error: Response) => {
        console.log(error.status);
        console.log(error.statusText)
      })

    let flag = true;
    // for(var j=0;j<this.users.length;j++){
    //     if(this.users[j].username==this.username.value && this.users[j].password==this.password.value)
    //       {
    //         flag = true;
    //         break;
    //       }
    // }
    // console.log("Flag "+flag);

    if(flag==true)
      this.route.navigate(['/mapmod-component']);

    
    
  }
}
