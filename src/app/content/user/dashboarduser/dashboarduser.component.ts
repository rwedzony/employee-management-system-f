import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {TaskService} from '../../../services/task.service';

@Component({
  selector: 'app-dashboarduser',
  templateUrl: './dashboarduser.component.html',
  styleUrls: ['./dashboarduser.component.scss']
})
export class DashboarduserComponent implements OnInit {

  constructor(public authService: AuthService,
              private taskService: TaskService) {
  }

  noOfAllTasks: any;
  noOfNewTasks: any;
  noOfDoneTasks: any;

  ngOnInit(): void {
    this.taskService.getEmployeeTasksAll(this.authService.getUserId()).subscribe(data => this.noOfAllTasks = data);
    this.taskService.getEmployeeTasksDone(this.authService.getUserId()).subscribe(data => this.noOfDoneTasks = data);
    this.taskService.getEmployeeTasksNew(this.authService.getUserId()).subscribe(data => this.noOfNewTasks = data);
  }

}
