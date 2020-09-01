import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../datamodels/employee";

@Component({
  selector: 'app-add',
  templateUrl: './add-emp-dialog.component.html',
  styleUrls: ['./add-emp-dialog.component.scss']
})
export class AddEmpDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEmpDialogComponent>,
              private employeeService: EmployeeService) { }

  employee:Employee;

  ngOnInit(): void {
    this.employee=new Employee();
    this.employee.id=0;
    this.employee.firstName='';
    this.employee.lastName='';
    this.employee.email='';
    this.employee.occupation='';
    this.employee.currentMonthWorkingHours= 168;

  }

  onNoClick() {
    this.dialogRef.close();
  }

  confirmAdd(): void {
    this.employeeService.addEmployee(this.employee);
    this.dialogRef.close();
  }
  submit(){

  }
}
