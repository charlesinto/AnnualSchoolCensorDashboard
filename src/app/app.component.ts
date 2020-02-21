import { Component, Inject, OnInit } from '@angular/core';
import { JQUERY_TOKEN } from './services/jquery.service';
import { SWEET_ALERT_TOKEN } from './services/swal-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'asc-web';
  constructor(@Inject(JQUERY_TOKEN) private $: any, @Inject(SWEET_ALERT_TOKEN) private swal: any) { }
  ngOnInit() {
    setTimeout(() => {
      // this.$('.loader-wrapper').show(1000)
      // this.swal.fire('hello')
    }, 1000)

    // setTimeout(() => {
    //   this.$('.loader-wrapper').hide(1000)
    // }, 5000)

  }
}
