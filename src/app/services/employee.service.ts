import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  urlGet="http://localhost:8080/employees";

  constructor(private httpClient:HttpClient) {
  }

  public getEmployees(){
   return this.httpClient.get(this.urlGet);
  }
  public deleteEmployeesById(id: number){
    let urlDelete=this.urlGet+'/'+id.toString();
    console.log("Delete link  is as follows: "+urlDelete);
    this.httpClient.delete(urlDelete).subscribe(
      (value) => {console.log('Received value: ',value)},
      (error) => {console.log('Error!!',error)},
      ()=>{console.log('end of values')}
    );

  }
}
