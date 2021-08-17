import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  });
  msg:string="";
  constructor(public router:Router) { } //DI of router

  ngOnInit(): void {
  }

  checkUser(){
    let login = this.loginRef.value;
    if(login.user == "Mia" && login.pass == "123"){
      this.router.navigate(["home", login.user]); //appened name throught path
    }else{
      this.msg="Invalid username or pass"
    }
    this.loginRef.reset();
  }

}
