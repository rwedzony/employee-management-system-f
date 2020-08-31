import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainlayoutComponent} from "./layouts/mainlayout/mainlayout.component";
import {DashboardComponent} from "./content/dashboard/dashboard.component";
import {EmployeesComponent} from "./content/employees/employees.component";
import {CalendarComponent} from "./content/calendar/calendar.component";
import {LoginComponent} from "./authentification/login/login.component";
import {AuthGuard} from "./services/auth-guard";

const routes: Routes = [{
  path: '', redirectTo: 'login',pathMatch:"full"},
  {path: 'login',
  component: LoginComponent},

  {
  path: 'ems',
 component: MainlayoutComponent, canActivate: [AuthGuard],
 children:[{
   path: 'dashboard',
   component: DashboardComponent, canActivate: [AuthGuard]},
   {
   path: 'employees',
   component: EmployeesComponent, canActivate: [AuthGuard]},
   {
     path: 'calendar',
     component: CalendarComponent, canActivate: [AuthGuard]},
 ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
