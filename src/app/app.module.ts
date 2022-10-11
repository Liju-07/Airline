import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassComponent } from './view-pass/view-pass.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewAirlineComponent } from './view-airline/view-airline.component';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:"",component:ViewAirlineComponent
  },
  {
    path:"airline",component:ViewAirlineComponent
  },
  {
    path:"pass",component:ViewPassComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    ViewPassComponent,
    NavbarComponent,
    ViewAirlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
