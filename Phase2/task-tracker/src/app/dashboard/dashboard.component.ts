import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgForm } from '@angular/forms';
import { Task } from '../task_class';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //declare variables
  //create an array of type Task
  //taskArray:Array<Task[]> = [];
  taskList: Task[] = [];
  
  //create table
  @ViewChild(MatTable) table: MatTable<Task>;
  //@ViewChild(MatTable) table!: MatTable<Task>;

  //create columnsToDisplay variable for mat table to read
  columnsToDisplay:string[] = ["id", "name", "task", "deadline"];

  //define dataSource
  //dataSource = this.taskArray;
  //public dataSource = new MatTableDataSource<Task>();
  //dataSource: MatTableDataSource<Task>;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  addData(id:any, name:any, task:any, deadline:any){
    console.log(this.table.dataSource);
    //this.taskArray.push([id, name, task, deadline]);
    this.taskList.push(new Task(id, name, task, deadline));
    console.log(this.taskList);
    this.table.renderRows();
    console.log();
  }
}
