import {Component, OnInit, ViewChild} from '@angular/core';
import {Task} from "../../../datamodels/task";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {TaskService} from "../../../services/task.service";
import {AuthService} from "../../../services/auth.service";
import {TaskAssigned} from "../../../datamodels/taskassigned";

@Component({
  selector: 'app-tasksadmin',
  templateUrl: './tasksadmin.component.html',
  styleUrls: ['./tasksadmin.component.scss']
})
export class TasksadminComponent implements OnInit {

  constructor(private taskService: TaskService,
              private authService: AuthService) { }

  ELEMENT_DATA_TA: TaskAssigned[];

  ELEMENT_DATA_TU: Task[];

  displayedColumnsTa: string[] = ['id', 'description',
    'status','startDate','endDate','actions'];

  displayedColumnsTu: string[] = ['id', 'description',
    'status','startDate','endDate','actions'];


  dataSourceTa = new MatTableDataSource<TaskAssigned>(this.ELEMENT_DATA_TA);

  dataSourceTu = new MatTableDataSource<Task>(this.ELEMENT_DATA_TU);

  @ViewChild('firstPaginator', {static: true}) paginatorTa: MatPaginator;
  @ViewChild('table1', {read: MatSort, static: true}) sortTa: MatSort;


  @ViewChild('secondPaginator', {static: true}) paginatorTu: MatPaginator;
  @ViewChild('table2', {read: MatSort, static: true}) sortTu: MatSort;



  ngOnInit(): void {

    this.dataSourceTa.paginator=this.paginatorTa;
    this.dataSourceTu.paginator = this.paginatorTu;


    this.dataSourceTa.sort=this.sortTa;
    this.dataSourceTu.sort=this.sortTu;


    this.getAllassignedTasks();
    this.getAllUnassignedTasks();

  }

  applyFilterTa(filterValue: string){
    this.dataSourceTa.filter = filterValue.trim().toLowerCase();
  }

  applyFilterTu(filterValue: string){
    this.dataSourceTu.filter = filterValue.trim().toLowerCase();
  }


  private getAllassignedTasks() {
    let resp=this.taskService.getAllassignedTasks();
    resp.subscribe(tasks=>this.dataSourceTa.data=tasks as TaskAssigned[])
  }

  public getAllUnassignedTasks(){
    let resp=this.taskService.getAllUnassignedTasks();
    resp.subscribe(tasks=>this.dataSourceTu.data=tasks as Task[])
  }


  addNewTask() {
    alert('Create new Task');
  }

  assignTask(taskid:number) {
    alert('assigned task button clicked. Task id to be assigned: '+taskid)
  }
}
