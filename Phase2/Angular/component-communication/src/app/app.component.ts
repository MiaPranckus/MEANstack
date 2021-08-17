import { Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pname:string = "";

  //child2 example with static array
  studentNames:Array<string>=["Mia", "Anna", "Charlie", "Sam"];


  @ViewChild(Child1Component)
  child1?:Child1Component; //DI for child1 component
  //grabs the child variable from child component, in the parent component
  //not creating new keyword
  cAge?:number;

  passValue(nameRef:any){
    this.pname = nameRef.value;
    this.studentNames.push(this.pname);
  }

  callChildComponentData(){
    //if(this.child1 != undefined){
      this.child1?.childFun();
      this.cAge = this.child1?.childAge; //accessing and storing child component
      //variable in parent component
    //}
    
  }
}
