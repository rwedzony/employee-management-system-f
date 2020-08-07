import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainlayoutComponent} from "./mainlayout.component";
import {DashboardComponent} from "../../content/dashboard/dashboard.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    MainlayoutComponent,
    DashboardComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainlayoutModule { }
