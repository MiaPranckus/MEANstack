import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerRef = new FormGroup({
    cid:new FormControl(),
    name:new FormControl(),
    age:new FormControl()
  });
  storeMsg?:string;
  customers?:Array<Customer>=[];
  deleteMsg?:string;
  flag:boolean = false;
  cid?:number;
  age?:number;

  constructor(public custService:CustomerService) { } //DI

  //life cycle function, it calls automatically after constructor
  //called only once
  ngOnInit(): void {
    this.getAllCustomers();
  }

  storeInfo(){
    let customer = this.customerRef.value;
    //console.log(customer);
    this.custService.storeCustomerInfo(customer).subscribe(result=>{
      //console.log(result);
      this.storeMsg = result.msg;
      this.getAllCustomers();
    },error=>console.log(error));
    this.customerRef.reset();
  }

  getAllCustomers(){
    this.custService.retrieveAllCustomerInfo().subscribe(result=>{
      this.customers=result;
    },error=>console.log(error));
  }

  deleteRec(cid:any){
    //console.log(cid);
    this.custService.deleteCustomerInfo(cid).subscribe(result=>{
      //console.log(result)
      this.deleteMsg = result.msg;
      this.getAllCustomers();
    },error=>console.log(error));
  }

  updateAge(cid:any, age:number){
    //console.log(cid + ", " +age);
    this.updateMsg="";
    this.flag = true;
    this.cid = cid;
    this.age = age;
    
  }
  updateMsg?:string;
  nowUpdateAge(){
        this.custService.updateCustomerAge(this.cid, this.age).subscribe(result=> {
        this.updateMsg=result.msg;
        this.flag = false;
        this.getAllCustomers();
    },error=>console.log(error));
  }

}
