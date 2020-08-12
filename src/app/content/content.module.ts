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
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {DeleteEmpDialogComponent} from "../employee_dialogs/delete/delete-emp-dialog.component";




@NgModule({
  declarations: [
    DashboardComponent,
    EmployeesComponent,
    CalendarComponent,
    DeleteEmpDialogComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  entryComponents: [
    DeleteEmpDialogComponent
  ],
})
export class ContentModule { }
