import { Component } from '@angular/core';

@Component({
    selector: 'app-root', //<app-root></app-root>
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    id:number = 100;
    myName:string = "Mia";
    age:number = 22;
    result:boolean = true;
}
