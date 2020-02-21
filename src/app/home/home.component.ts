import { Component, OnInit, Inject } from '@angular/core';
import { JQUERY_TOKEN } from "../services/jquery.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( @Inject(JQUERY_TOKEN) private $: any) { }

  ngOnInit() {
    this.$('.loader-wrapper').show(500);
    // setTimeout(() => {
    //   this.$('.loader-wrapper').hide(1000)
    // }, 10000);
  }

}
