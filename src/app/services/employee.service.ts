import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Employee } from '../datamodels/employee';
import {AuthService} from "./auth.service";
import {BaseurlService} from "./baseurl.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  urlGet: string;

   httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })};

  constructor(private httpClient:HttpClient,
              private baseurl: BaseurlService) {
    this.urlGet=baseurl.getBaseUrl()+'/employees'
  }

  public getEmployees() {
    return this.httpClient.get(this.urlGet);
  }
  public deleteEmployeesById(id: number){
    let urlDelete=this.urlGet+'/'+id.toString();
    console.log("Delete link  is as follows: "+urlDelete);
    this.httpClient.delete(urlDelete,this.httpOptions).subscribe(
      (value) => {console.log('Received value: ',value)},
      (error) => {console.log('Error!!',error)},
      ()=>{console.log('end of values')}
    );

  }

  addEmployee(employee: Employee) {
    this.httpClient.post(this.urlGet,employee).subscribe(
      (value) => {console.log('Received value: ',value)},
      (error) => {console.log('Error!!',error)},
      ()=>{console.log('end of values')});
  }

  updateEmployee(employee: Employee) {
    let urlPut=this.urlGet+'/'+employee.id.toString();
    this.httpClient.put(urlPut,employee).subscribe(
      (value) => {console.log('Received value: ',value)},
      (error) => {console.log('Error!!',error)},
      ()=>{console.log('end of values')});
  }
}