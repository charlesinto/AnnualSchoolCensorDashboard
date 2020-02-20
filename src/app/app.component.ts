import { Component, Inject, OnInit } from '@angular/core';
import { JQUERY_TOKEN } from './services/jquery.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'asc-web';
  constructor(@Inject(JQUERY_TOKEN) private $: any) { }
  ngOnInit() {
    // setTimeout(() => {
    //   this.$('.loader-wrapper').show(1000)
    // }, 1000)

    // setTimeout(() => {
    //   this.$('.loader-wrapper').hide(1000)
    // }, 3000)

  }
}
