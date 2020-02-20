import { Component, OnInit, Inject } from '@angular/core';
import { SWEET_ALERT_TOKEN } from "../services/swal-service.service";
 import Swal from "sweetalert2";

declare let swal;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(SWEET_ALERT_TOKEN) private swal:any) { }

  ngOnInit() {
  }

  login(form){
    console.log(form)
  }

}
