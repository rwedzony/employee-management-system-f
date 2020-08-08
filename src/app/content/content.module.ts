import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EmployeesComponent} from "./employees/employees.component";



@NgModule({
  declarations: [
    DashboardComponent,
    EmployeesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
