import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MainlayoutModule} from "./layouts/mainlayout.module";
import {ContentModule} from "./content/content.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";




@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MainlayoutModule,
        ContentModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
