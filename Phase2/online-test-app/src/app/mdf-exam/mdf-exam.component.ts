import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from '../test.service';
import { Test } from '../test.model';

@Component({
  selector: 'app-mdf-exam',
  templateUrl: './mdf-exam.component.html',
  styleUrls: ['./mdf-exam.component.css']
})

export class MdfExamComponent implements OnInit {

  index=0;
  myForm:FormGroup;
  myQuestions:Test[];
  correctAnswers = ["A swarm", "A smack", "A pride", "A family", "A zeal", "A stench", "An unkindness",
  "A pack", "A wart", "A prickle"];
  flag:boolean = true;
  score:number=0;

  //correctAnswers = ["2", "3", "1", "3", "1", "1", "3", "2", "1", "3"];
  selectedAnswers:string[];
  constructor(public testSer:TestService, public form:FormBuilder) {//DI for test service/builder
    this.myForm=form.group({});
  } 
  
  ngOnInit():void{
    this.testSer.loadData().subscribe(result=> {
      this.myQuestions=result;
      this.myQuestions.forEach(question=>{
        this.myForm.addControl(question.Q, this.form.control(""));
      })
    })
  }

  submit(){
    console.log(this.myForm.value);
    console.log(typeof(this.myForm.value));
    console.log(this.correctAnswers);
    this.getSelectedValues();
    this.grade();
  }

  getSelectedValues(){
    this.myQuestions.forEach(question=>{
      this.selectedAnswers = Object.values(this.myForm.value);
      //this pulls the values from the myForm object
    })
     console.log(this.selectedAnswers);
  }

  grade(){
    for(var i=0; i<this.myQuestions.length; i++){
      let highlight = document.getElementById(this.selectedAnswers[i]);
      console.log(highlight); //returns an element
      if(this.selectedAnswers[i] === this.myQuestions[i].ans){
        this.score++;
        if(this.selectedAnswers === null){
        }else{
          highlight.style.backgroundColor = "lightgreen";
        }
      } else {
        if(this.selectedAnswers === null){
        }else{
          highlight.style.backgroundColor = "#F94F4F";
          let correct = document.getElementById(this.correctAnswers[i]);
          correct.style.backgroundColor = "lightgreen";
        }
      }
    }
    console.log(this.score);
    alert("You knew " +this.score + "/10 terms");
    return this.score;
  }
 
}

