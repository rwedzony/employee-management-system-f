import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../datamodels/employee";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import {DeleteEmpDialogComponent} from "../../employee_dialogs/delete/delete-emp-dialog.component";



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
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','role','actions'];

  dataSource = new MatTableDataSource<Employee>(this.ELEMENT_DATA);
  data={name:"Kate",
        surname:"Nowak"};

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private employeeService: EmployeeService,
              public dialog: MatDialog,) {}

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this.getAllEmployees();
  }
  public getAllEmployees(){
    alert('geeting employees!');
    let resp=this.employeeService.getEmployees();
    resp.subscribe(employees=>this.dataSource.data=employees as Employee[])
  }
  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editEmployee(i: number) {
    console.log("in edit employee function with index: " +i);
  }

  deleteDialogEmployee(id: number) {
    console.log("in delete employee function with id: " +id);
    const dialogRef=this.dialog.open(DeleteEmpDialogComponent,{data:{id:id}});

    dialogRef.afterClosed().subscribe(result => {
      this.getAllEmployees();
    });
  }


  addEmployee() {
    console.log("in add Employee function: ");
  }
}


