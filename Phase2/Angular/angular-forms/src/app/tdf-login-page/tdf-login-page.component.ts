import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  msg:string="";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(loginRef:NgForm){
    let login = loginRef.value;
    //console.log(login);
    if(login.user == "Mia" && login.pass=="123"){
      this.msg = "Successful Login";
    } else{
      this.msg = "Try again";
    }
    loginRef.reset;
  }
}
