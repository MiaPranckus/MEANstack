import { Component, OnInit } from '@angular/core';
import { MyCustomService } from '../custom.service';
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  msg1:string = "";
  msg2:string = "";
  constructor( public ff:FakeService) { } //Pull service class object
                                          //from container using DI

  ngOnInit(): void {
  }

  fun1(){
    let myServ = new MyCustomService(); //this is an explicit creation of a class
    //new memory created everytime its called
    this.msg1 = myServ.display();
  }

  fun2(){
    this.msg2 = this.ff.display(); //this is creation with DI,
    //one memory created, all components can access it
  }

}
