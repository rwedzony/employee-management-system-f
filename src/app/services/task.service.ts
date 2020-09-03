import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseurlService} from "./baseurl.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  urlGet: string;

  constructor(private httpClient:HttpClient,
              private baseurl: BaseurlService) {
    this.urlGet=baseurl.getBaseUrl()+'/tasks';
  }
  public getTasks() {
    return this.httpClient.get(this.urlGet);
  }

}
