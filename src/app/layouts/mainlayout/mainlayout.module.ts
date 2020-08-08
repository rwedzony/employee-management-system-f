import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainlayoutComponent} from "./mainlayout.component";
import {DashboardComponent} from "../../content/dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {SidebarComponent} from "../../shared/components/sidebar/sidebar.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";



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
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexModule,
    MatMenuModule,
    MatListModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class MainlayoutModule { }
