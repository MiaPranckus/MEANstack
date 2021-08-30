import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { //DI 

  }
  //store customer info
  storeCustomerInfo(customer: Customer):Observable<any>{
    //take url from app.js
    //1st param is url, 2nd param is data in json format
    return this.http.post<any>("http://localhost:8080/storeCustomerInfo",customer);
    //form --> component --> service
  }
  retrieveAllCustomerInfo():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:8080/allCustomerDetails");
  }

  deleteCustomerInfo(cid:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/deleteCustomerInfo/" +cid);
  }

  updateCustomerAge(cid:any, age:any):Observable<any>{
    return this.http.put<any>("http://localhost:9090/updateCustomerAge",{cid:cid,age:age});
  }
}
