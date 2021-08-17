import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user?:string="";

  constructor(public activeRoute:ActivatedRoute) { //DI for ActivatedRoute
    this.activeRoute.params.subscribe(data=>this.user=data.uname);
    //help us recieve the variable uname from path
    //storing uname as variable user
  }

  ngOnInit(): void {
  }

}
