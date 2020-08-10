import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {EmployeeService} from "../../services/employee.service";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../../datamodels/employee";





/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  // displayedColumns = ['id', 'First Name', 'LastName', 'email', 'role', 'currWorkhours'];
  // exampleDatabase: EmployeeService | null;
  // // dataSource: EmployeeDataSource | null;
  // index: number;
  // id: number;

    constructor() {}

  ngOnInit() {}
  // this.loadData();
  }

