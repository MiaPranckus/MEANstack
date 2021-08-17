import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake.service';
import { Fake } from '../fake.model';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {

  fakeData:Array<Fake> = [];
  flag:boolean=false;
  constructor(public fake:FakeService) { } //DI for FakeService

  ngOnInit(): void {
  }

  callService(){
    this.flag=true;
    this.fake.loadFakeJSONData().subscribe(data=>this.fakeData=data,
      error=>console.log(error), ()=>console.log("completed"));
  }
}
