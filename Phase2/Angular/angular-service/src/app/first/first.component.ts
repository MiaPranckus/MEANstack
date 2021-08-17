import { Component, OnInit } from '@angular/core';
import { MyCustomService } from '../custom.service';
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  msg1:string = "";
  msg2:string = "";
  constructor(public ff:FakeService) { } //pull service class object 
                                        //from container using DI

  ngOnInit(): void {
  }

  fun1(){
    let myServ = new MyCustomService();
    this.msg1 = myServ.display();
  }

  fun2(){
    this.msg2 = this.ff.display();
  }
}
