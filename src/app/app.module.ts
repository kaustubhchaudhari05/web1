import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './MyComponents/dropdown/dropdown.component';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './MyComponents/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NavDrawerComponent } from './MyComponents/nav-drawer/nav-drawer.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    DialogComponent,
    NavDrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
