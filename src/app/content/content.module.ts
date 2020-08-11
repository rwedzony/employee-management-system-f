import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EmployeesComponent} from "./employees/employees.component";
import { CalendarComponent } from './calendar/calendar.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";





@NgModule({
  declarations: [
    DashboardComponent,
    EmployeesComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule

  ]
})
export class ContentModule { }
