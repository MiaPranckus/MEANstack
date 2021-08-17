import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { $ } from 'protractor';

@Component({
  selector: 'app-access-gate',
  templateUrl: './access-gate.component.html',
  styleUrls: ['./access-gate.component.css']
})
export class AccessGateComponent implements OnInit {
  constructor() { }

  passwordStatusMSG:string="";
  loginMSG ="";
  signUpShow:boolean=true;
  loginShow:boolean=false;
  portfolioShow:boolean=false;
  contacts:Array<any> = [];
  login;
  ngOnInit(): void {
  }

  saveUserInfo(signUpRef:NgForm){
    let userLogin = signUpRef.value;
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
  }

  verifyPassword(pass1:any, pass2:any){
    let status = false;
    /* console.log(pass1.value);
    console.log(pass2.value); */
    if(pass1.value == "" || pass2.value == ""){
      status = false;
    }
    if (pass1.value != pass2.value){
      status = false;
    } else {
      status = true;
    }
    return status;
    
  }

  checkUser(loginRef:NgForm){
    let status = false;
    //get values from local storage
    let userData = localStorage.getItem("userLogin");
    let myUserData = JSON.parse(userData);

    let login=loginRef.value;

    if(login.user == myUserData.user){
      if (login.pass == myUserData.pass){
      this.loginMSG ="Success, Welcome to Portfolio";
      status = true;
    }}else{
      this.loginMSG = "Sorry, those credentials don't match our system, please try again";
      status = false;
    }
    return status;
    loginRef.reset();
  }

  showHide(hideName:string){
    switch(hideName){
      case 'signUp':
        this.signUpShow = false;
        this.loginShow = true;
        break;
      case 'login':
        this.loginShow = false;
        this.portfolioShow = true;
        break;
      case 'portfolio':
        this.loginShow = false;
        this.portfolioShow = true;
    }

  }

  saveContacts(contactForm:NgForm){
    //send contact form to local storage
    let contactInfo = contactForm.value;
    console.log(contactInfo);
    //push contact info to array
    this.contacts.push(contactInfo);
    //save contacts array to local storage
    let contactList = localStorage.setItem("allContacts", JSON.stringify(this.contacts));
    console.log(contactList);

  }

  displayContacts(contactForm:NgForm){
    //get contact array
    let retrievedContacts = localStorage.getItem("allContacts");
    let tableData = JSON.parse(retrievedContacts);

    var startTable = "<table border=1><tr><th>First Name</th><th>Last Name</th><th>Phone Number</th></tr>";
    var tableContent = "";

    tableData.forEach(element=>{
      tableContent+= "<tr><td>" +element.fname +"</td><td>"+element.lname+"</td><td>" +element.phonenumber+"</td></tr>";
    })
      
    var endTable = "</table>";
    tableContent = startTable + tableContent + endTable;
    document.getElementById("table").innerHTML=tableContent;

  }
    

}
