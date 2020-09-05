import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseurlService} from "./baseurl.service";
import {Employee} from "../datamodels/employee";
import {Taskoperation} from "../datamodels/taskoperation";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  basicUrl: string

  constructor(private httpClient:HttpClient,
              private baseurl: BaseurlService) {
    this.basicUrl=baseurl.getBaseUrl();

  }
  public getAllTasks() {
    let url=this.basicUrl+'/'+'tasks';
    return this.httpClient.get(url);
  }
  public getEmployeeTasks(empID: number) {
    let url=this.basicUrl+'/'+'employees'+'/'+empID+'/'+'tasks';
    return this.httpClient.get(url);
  }
  public getAllUnassignedTasks() {
    let url=this.basicUrl+'/'+'tasks'+'/'+'unassigned';
    return this.httpClient.get(url);
  }

  public getAllassignedTasks() {
    let url=this.basicUrl+'/'+'tasks'+'/'+'tasksdto';
    return this.httpClient.get(url);
  }

  updateTask(taskId: number,operation:string) {
    let url=this.basicUrl+'/'+'tasks'+'/'+taskId;
    let taskoperation = new Taskoperation();
    taskoperation.status="DONE"

    // this.httpClient.patch(url,taskoperation).subscribe(
    //   (value) => {console.log('Received value: ',value)},
    //   (error) => {console.log('Error!!',error)},
    //   ()=>{console.log('end of values')});
    return this.httpClient.patch(url,taskoperation);
  }
  changeTaskAssigment(taskId: number,assign: boolean){
    let url=this.basicUrl+'/'+'tasks'+'/'+taskId;
    return this.httpClient.patch(url,{"assigned": assign });
  }
  assignTask(taskId:number, employeeId: number){
    let url=this.basicUrl+'/'+'tasks'+'/'+taskId;
    return this.httpClient.patch(url,{"employeeId": employeeId });
  }


}
