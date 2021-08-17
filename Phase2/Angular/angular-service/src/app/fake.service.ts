import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Fake } from "./fake.model";

@Injectable()
export class FakeService {
    constructor(public http:HttpClient){ //DI for HTTP (RST API)
        //causes an error because HTTP API is a part of the HTTP client module
        //so we have to import it in app.module.ts

    }
    display(): string {
        return "Welcome to User Defined Service using DI";
    }

    /* loadFakeJSONData(): void{
        this.http.get("https://jsonplaceholder.typicode.com/todos").
        //call the subscribe function, which takes 3 paramters
        //subscribe helps us read in the data so it can be passed to other methods like
        //get, post, etc, which are observable
        subscribe(data=>console.log(data), error=>console.log(error), ()=>console.log("Completed"));
    } */

    loadFakeJSONData(): Observable<Fake[]>{
        return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos");
    }
}