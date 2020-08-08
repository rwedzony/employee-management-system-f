import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EmployeesComponent} from "./employees/employees.component";
import { CalendarComponent } from './calendar/calendar.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    DashboardComponent,
    EmployeesComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatTableModule
  ]
})
export class ContentModule { }
