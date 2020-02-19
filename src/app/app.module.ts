import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JQUERY_TOKEN } from './services/jquery.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { IonicModule } from '@ionic/angular';


 const jquery = window['$'];


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
    {provide: JQUERY_TOKEN, useValue: jquery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
