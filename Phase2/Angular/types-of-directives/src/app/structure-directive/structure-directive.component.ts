import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {

  f1:boolean=true;
  f2:boolean=false;
  b1:string="show";
  flag:boolean=false;
  studentNames:Array<string>=["Mia", "Anna", "Charlie","Sam"];

  employees:Array<Employee>=new Array();
  //employees:Employee[]=[];
  constructor() { 
    let emp1 = new Employee(100, "Mia", 1200);
    let emp2 = new Employee(101, "Anna", 1300);
    let emp3 = new Employee(102, "Cathy", 1400);
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
  }

  ngOnInit(): void {
  }

  changeValue(){ //switch the values of f1 and f2
    this.f1=false;
    this.f2=true;
  }

  toggle(){
    if(this.flag){
      this.flag=false;
      this.b1="show";
    }else{
      this.flag=true;
      this.b1="hide";
    }
  }

  //dynamically add names
  addName(nameRef: any){
    let name = nameRef.value;
    this.studentNames.push(name);
  }
}
