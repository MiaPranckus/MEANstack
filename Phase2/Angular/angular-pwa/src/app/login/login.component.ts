import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginSer:LoginService) { } //DI for for Login service

  ngOnInit(): void {
  }

  checkUser(loginRef:NgForm){
    let login = loginRef.value;
    let flag=0;
    this.loginSer.checkUser().subscribe(result => {
      for(let ll of result){
        if(ll.user == login.user && ll.pass == login.pass){
          flag++;
        }
      }
      //outside for loop
      if(flag >0){
        console.log("Successful");
      }else{
        console.log("Login Denied");
      }
    });
    flag=0;
  }
}
