import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {EmployeeService} from "../../../services/employee.service";
import {TaskService} from "../../../services/task.service";
import {Employee} from "../../../datamodels/employee";
import {Task} from "../../../datamodels/task";
import {MatDatepicker} from "@angular/material/datepicker";

@Component({
  selector: 'app-addtaskdialog',
  templateUrl: './addtaskdialog.component.html',
  styleUrls: ['./addtaskdialog.component.scss']
})
export class AddtaskdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddtaskdialogComponent>,
              private taskService: TaskService) { }


  task:Task;
  taskStartDate:Date;
  taskEndDate:Date;

  @ViewChild('picker1') picker: MatDatepicker<Date>


  ngOnInit(): void {
    this.taskStartDate=new Date();
    this.taskEndDate=new Date();
    console.log('startdate: '+this.taskStartDate);

    this.task=new Task();
    this.task.id = 0;
    this.task.description ='';
    this.task.status = 'NEW';
    this.task.startDate = '';
    this.task.endDate ='';

  }


  onNoClick() {
    this.dialogRef.close();
  }

  confirmAdd(): void {
    this.task.startDate=this.taskStartDate.toLocaleDateString();
    this.task.endDate=this.taskEndDate.toLocaleDateString();
    this.taskService.addTask(this.task);
    this.dialogRef.close();

  }
  submit(){

  }

}
