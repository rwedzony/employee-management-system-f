import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainlayoutComponent} from "./mainlayout.component";
import {DashboardComponent} from "../../content/dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {SidebarComponent} from "../../shared/components/sidebar/sidebar.component";
import {MatSidenavModule} from "@angular/material/sidenav";



@NgModule({
  declarations: [
    MainlayoutComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class MainlayoutModule { }
