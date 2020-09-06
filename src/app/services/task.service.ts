import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseurlService} from "./baseurl.service";
import {Taskoperation} from "../datamodels/taskoperation";
import { Task } from '../datamodels/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })};

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

  addTask(task: Task) {
   let url=this.basicUrl+'/'+'tasks';
    this.httpClient.post(url,task).subscribe(
      (value) => {console.log('Received value: ',value)},
      (error) => {console.log('Error!!',error)},
      ()=>{console.log('end of values')});
  }


  deleteTaskById(id: any) {
    let url=this.basicUrl+'/'+'tasks'+'/'+id.toString();
    console.log("Delete link  is as follows: "+url);
    this.httpClient.delete(url).subscribe(
      (value) => {console.log('Received value: ',value)},
      (error) => {console.log('Error!!',error)},
      ()=>{console.log('end of values')}
    );

  }
}
