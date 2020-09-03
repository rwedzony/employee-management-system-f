import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseurlService} from "./baseurl.service";

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

}
