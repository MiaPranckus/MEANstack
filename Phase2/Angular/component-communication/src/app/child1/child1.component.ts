import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input()
  parentName:string=""; //this variable is ready to revieve the value
  //from the parent component variable
  childAge:number=21;
  constructor() { }

  ngOnInit(): void {
  }

  childFun(): void{
    console.log("this is child1 function");
  }


}
