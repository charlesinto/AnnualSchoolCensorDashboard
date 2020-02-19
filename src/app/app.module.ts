import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JQUERY_TOKEN } from './services/jquery.service';


 const jquery = window['$'];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: JQUERY_TOKEN, useValue: jquery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
