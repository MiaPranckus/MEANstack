import { Component } from '@angular/core';

//when creating user defined components, you need to import it in app.module.ts
@Component({
    selector:"app-child",
    templateUrl:"./child.component.html",
    styleUrls: ["./child.component.css"]
})
export class ChildComponent {
    msg:string= "This is Child Component";
}