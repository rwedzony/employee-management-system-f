import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainlayoutComponent} from "./layouts/mainlayout/mainlayout.component";
import {EmployeesComponent} from "./content/employees/employees.component";
import {LoginComponent} from "./authentification/login/login.component";
import {AuthGuard} from "./services/auth-guard";
import {DashboarduserComponent} from "./content/user/dashboarduser/dashboarduser.component";
import {EditprofileComponent} from "./content/user/editprofile/editprofile.component";
import {TasksComponent} from "./content/user/tasks/tasks.component";
import {VacationrequestsComponent} from "./content/user/vacationrequests/vacationrequests.component";

const routes: Routes = [{
  path: '', redirectTo: 'login',pathMatch:"full"},
  {path: 'login',
  component: LoginComponent},

  {
  path: 'ems',
 component: MainlayoutComponent, canActivate: [AuthGuard],
 children:[{
    //User Profile Links
    path: 'dashboarduser',
   component: DashboarduserComponent, canActivate: [AuthGuard]},
   {
     path: 'edit',
     component: EditprofileComponent, canActivate: [AuthGuard]},
   {
     path: 'tasks',
     component: TasksComponent, canActivate: [AuthGuard]},
   {
     path: 'vacationreq',
     component: VacationrequestsComponent, canActivate: [AuthGuard]},
  //Admin Profile Links
   {

   path: 'employees',
   component: EmployeesComponent, canActivate: [AuthGuard]},
 ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
