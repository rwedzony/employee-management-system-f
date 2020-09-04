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

  ELEMENT_DATA_TU: Task[];

  ELEMENT_DATA_TA: TaskAssigned[];

  displayedColumnsTu: string[] = ['id', 'description',
    'status','startDate','endDate','actions'];

  displayedColumnsTa: string[] = ['id', 'description',
    'status','startDate','endDate','actions'];

  dataSourceTu = new MatTableDataSource<Task>(this.ELEMENT_DATA_TU);

  dataSourceTa = new MatTableDataSource<TaskAssigned>(this.ELEMENT_DATA_TA);

  @ViewChild(MatPaginator, {static: true}) paginatorTu: MatPaginator;
  @ViewChild('table2', {read: MatSort, static: true}) sortTu: MatSort;

  @ViewChild(MatPaginator, {static: true}) paginatorTa: MatPaginator;
  @ViewChild('table1', {read: MatSort, static: true}) sortTa: MatSort;

  ngOnInit(): void {
    this.dataSourceTu.paginator = this.paginatorTu;
    this.dataSourceTa.paginator=this.paginatorTa;

    this.dataSourceTu.sort=this.sortTu;
    this.dataSourceTa.sort=this.sortTa;

    this.getAllUnassignedTasks();
    this.getAllassignedTasks();

  }

  applyFilterTu(filterValue: string){
    this.dataSourceTu.filter = filterValue.trim().toLowerCase();
  }
  applyFilterTa(filterValue: string){
    this.dataSourceTa.filter = filterValue.trim().toLowerCase();
  }

  public getAllUnassignedTasks(){
    let resp=this.taskService.getAllUnassignedTasks();
    resp.subscribe(tasks=>this.dataSourceTu.data=tasks as Task[])
  }

  private getAllassignedTasks() {
    let resp=this.taskService.getAllassignedTasks();
    resp.subscribe(tasks=>this.dataSourceTa.data=tasks as TaskAssigned[])
  }

  addNewTask() {
    alert('Create new Task');
  }
}
