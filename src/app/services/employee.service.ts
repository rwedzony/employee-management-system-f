import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API="https://employ2es.herokuapp.com/employees";

  constructor(private http:HttpClient) {
  }

  public getEmployees(){
   return this.http.get(this.API);
  }
}
