import { Component, OnInit, Inject } from '@angular/core';
import { JQUERY_TOKEN } from "../services/jquery.service";
import { AuthserviceService } from "../services/authservice.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username: String = 'charles.onuorah@yahoo.com';
  constructor(@Inject(JQUERY_TOKEN) private $: any, private authService: AuthserviceService) { }

  ngOnInit() {
  }
  logoutUser(){
    this.authService.logoutUser()

  }
}
