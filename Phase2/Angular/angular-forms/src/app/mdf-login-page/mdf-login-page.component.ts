import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {
  loginRef = new FormGroup({
    user:new FormControl("", [Validators.required]),
    pass:new FormControl("", [Validators.required])
  })

  msg:string="";
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(){
    let login = this.loginRef.value;
    //console.log(login)
    if(login.user == "Mia" && login.pass == "123"){
      this.msg = "Successful";
    }else{
      this.msg = "Failure";
    }
    this.loginRef.reset();
  }
}
