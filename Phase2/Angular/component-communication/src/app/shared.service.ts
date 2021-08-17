import { Injectable } from '@angular/core';
import { Emp } from './emp.model';

@Injectable({
  providedIn: 'root' //equal to the "provider" attribute in module.ts
})
export class SharedService {

  constructor() { }

  emps:Array<Emp>=[];
  setEmpArray(emps:Array<Emp>):void{
    this.emps=emps;
  }

  getEmpArray(): Array<Emp>{
    return this.emps;
  }
}
