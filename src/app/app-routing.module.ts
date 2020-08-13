import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainlayoutComponent} from "./layouts/mainlayout/mainlayout.component";
import {DashboardComponent} from "./content/dashboard/dashboard.component";
import {EmployeesComponent} from "./content/employees/employees.component";
import {CalendarComponent} from "./content/calendar/calendar.component";
import {LoginComponent} from "./authentification/login/login.component";

const routes: Routes = [{
  path: 'login',
  component: LoginComponent},
  {
  path: '',
 component: MainlayoutComponent,
 children:[{
   path: '',
   component: DashboardComponent},
   {
   path: 'employees',
   component: EmployeesComponent},
   {
     path: 'calendar',
     component: CalendarComponent},
 ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
