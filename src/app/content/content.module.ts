import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeesComponent} from "./employees/employees.component";
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
import {AddEmpDialogComponent} from "../employee_dialogs/add/add-emp-dialog.component";
import {UpdateEmpDialogComponent} from "../employee_dialogs/update/update-emp-dialog.component";
import {FormsModule} from "@angular/forms";
import { DashboarduserComponent } from './user/dashboarduser/dashboarduser.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';
import { TasksComponent } from './user/tasks/tasks.component';
import { VacationrequestsComponent } from './user/vacationrequests/vacationrequests.component';





@NgModule({
  declarations: [
    EmployeesComponent,
    DeleteEmpDialogComponent,
    AddEmpDialogComponent,
    UpdateEmpDialogComponent,
    DashboarduserComponent,
    EditprofileComponent,
    TasksComponent,
    VacationrequestsComponent,
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
    FormsModule,
  ],
  entryComponents: [
    DeleteEmpDialogComponent,
    AddEmpDialogComponent,
    UpdateEmpDialogComponent,
  ],
})
export class ContentModule { }
