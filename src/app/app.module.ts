import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import Popper from 'popper.js';
// import { ChartsModule } from 'ng2-charts';
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
import { PlacesService } from "./services/places.service";
import { DataTablesModule } from 'angular-datatables';
import { UsersComponent } from './users/users.component';
import { SchoolsComponent } from './schools/schools.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
// import { IonicModule } from '@ionic/angular';


const jquery = window['$'];
// window['Popper'] = Popper;
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
    UsersComponent,
    SchoolsComponent,
    TeacherComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    // ChartsModule
    // IonicModule.forRoot()
  ],
  providers: [
    {provide: JQUERY_TOKEN, useValue: jquery},
    {provide: SWEET_ALERT_TOKEN, useValue: swal},
    AuthserviceService,
    PlacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
