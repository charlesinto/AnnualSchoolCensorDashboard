import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JQUERY_TOKEN } from './services/jquery.service';
import { SWEET_ALERT_TOKEN } from "./services/swal-service.service";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import Swal from "sweetalert2";
// import { IonicModule } from '@ionic/angular';


const jquery = window['$'];

const swal = window['swal'];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // IonicModule.forRoot()
  ],
  providers: [
    {provide: JQUERY_TOKEN, useValue: jquery},
    {provide: SWEET_ALERT_TOKEN, useValue: swal}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
