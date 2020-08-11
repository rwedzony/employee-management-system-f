import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../datamodels/employee";
import {MatTableDataSource} from "@angular/material/table";



/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  ELEMENT_DATA: Employee[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','role'];

  dataSource = new MatTableDataSource<Employee>(this.ELEMENT_DATA);

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getAllEmployees();
  }
  public getAllEmployees(){
    let resp=this.employeeService.getEmployees();
    resp.subscribe(employees=>this.dataSource.data=employees as Employee[])
  }

}


