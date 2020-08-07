import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainlayoutComponent} from "./layouts/mainlayout/mainlayout.component";
import {DashboardComponent} from "./content/dashboard/dashboard.component";

const routes: Routes = [{
 path: '',
 component: MainlayoutComponent,
 children:[{
   path: '',
   component: DashboardComponent
 }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
