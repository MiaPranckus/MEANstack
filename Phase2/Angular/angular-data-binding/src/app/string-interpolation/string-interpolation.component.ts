import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  fname:string = "Mia Pranckus";
  constructor() { }

  ngOnInit(): void {
  }
  disp() : string {
    return "Welcome user " + this.fname;
  }
}
