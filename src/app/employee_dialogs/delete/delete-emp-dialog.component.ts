import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {EmployeeService} from "../../services/employee.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-delete',
  templateUrl: './delete-emp-dialog.component.html',
  styleUrls: ['./delete-emp-dialog.component.scss']
})
export class DeleteEmpDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteEmpDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private employeeService: EmployeeService){ }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  confirmDelete() {
    this.employeeService.deleteEmployeesById(this.data.id);

    this.dialogRef.close();

  }
}
