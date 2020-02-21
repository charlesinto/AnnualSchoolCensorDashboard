import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JQUERY_TOKEN } from './services/jquery.service';
import { SWEET_ALERT_TOKEN } from './services/swal-service.service';
import { AuthserviceService } from "./services/authservice.service";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManageroleComponent } from './managerole/managerole.component';
// import { IonicModule } from '@ionic/angular';


const jquery = window['$'];

const swal = window['swal'];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AppLayoutComponent,
    SidebarComponent,
    ManageroleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // IonicModule.forRoot()
  ],
  providers: [
    {provide: JQUERY_TOKEN, useValue: jquery},
    {provide: SWEET_ALERT_TOKEN, useValue: swal},
    AuthserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
