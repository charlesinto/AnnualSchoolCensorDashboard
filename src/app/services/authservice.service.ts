import { Injectable, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { JQUERY_TOKEN } from "./jquery.service";
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(@Inject(JQUERY_TOKEN) private $: any, private router: Router) { }
  logoutUser(){
    this.$('.loader-wrapper').show(500);
    setTimeout(() => {
      this.$('.loader-wrapper').hide(500);
      this.router.navigate(['login']);
    }, 3000);
  }
}
