import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseurlService} from "./baseurl.service";
import {Taskoperation} from "../datamodels/taskoperation";
import { Task } from '../datamodels/task';
import {Employee} from "../datamodels/employee";

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
  public getAllTasksCount() {
    let url=this.basicUrl+'/'+'tasks'+'/'+'count';
    return this.httpClient.get(url);
  }

  public getAllUnATasksCount() {
    let url=this.basicUrl+'/'+'tasks'+'/'+'unassigned'+'/'+'count';
    return this.httpClient.get(url);
  }

  public getAllATasksCount() {
    let url=this.basicUrl+'/'+'tasks'+'/'+'assigned'+'/'+'count';
    return this.httpClient.get(url);
  }

  public getAllDoneTasksCount() {
    let url=this.basicUrl+'/'+'tasks'+'/'+'done';
    return this.httpClient.get(url);
  }
  public getAllNewTasksCount() {
    let url=this.basicUrl+'/'+'tasks'+'/'+'new';
    return this.httpClient.get(url);
  }









  public getEmployeeTasks(empID: number) {
    let url=this.basicUrl+'/'+'employees'+'/'+empID+'/'+'tasks';
    return this.httpClient.get(url);
  }



  public getEmployeeTasksDone(empID: number) {
    let url=this.basicUrl+'/'+'employees'+'/'+empID+'/'+'tasks'+'/'+'done';
    return this.httpClient.get(url);
  }
  public getEmployeeTasksNew(empID: number) {
    let url=this.basicUrl+'/'+'employees'+'/'+empID+'/'+'tasks'+'/'+'new';
    return this.httpClient.get(url);
  }
  public getEmployeeTasksAll(empID: number) {
    let url=this.basicUrl+'/'+'employees'+'/'+empID+'/'+'tasks'+'/'+'all';
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

  public updateTask(taskId: number,operation:string) {
    let url=this.basicUrl+'/'+'tasks'+'/'+taskId;
    let taskoperation = new Taskoperation();
    taskoperation.status="DONE"
    return this.httpClient.patch(url,taskoperation);
  }

  public updateCompleteTask(task: Task) {
    let url=this.basicUrl+'/'+'tasks'+'/'+task.id.toString();
    this.httpClient.put(url,task).subscribe(
      (value) => {console.log('Received value: ',value)},
      (error) => {console.log('Error!!',error)},
      ()=>{console.log('end of values')});
  }

  // updateEmployee(employee: Employee) {
  //   let urlPut=this.urlGet+'/'+employee.id.toString();
  //   this.httpClient.put(urlPut,employee).subscribe(
  //     (value) => {console.log('Received value: ',value)},
  //     (error) => {console.log('Error!!',error)},
  //     ()=>{console.log('end of values')});
  // }


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
