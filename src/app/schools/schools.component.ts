import { Component, OnInit, Inject } from '@angular/core';
import { JQUERY_TOKEN } from '../services/jquery.service';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {
  dtOptions: any = []
  constructor(@Inject(JQUERY_TOKEN) private $: any, private placeService: PlacesService) { }

  ngOnInit() {
    this._initializeApp()
  }
  _initializeApp(){
    const states = this.placeService.getstates();
    const lga = this.placeService.getLocals();
    this.$('.states').select2({placeholder: 'Select State', data: states});
    this.$('.lga').select2({placeholder: 'Select LGA', data: lga});
    this.dtOptions[0] = this.buildDToptions('');
  }
  buildDToptions(url?: string){
    return {
      responsive: true,
      data: [{
        id: 1,
        schoolName: 'Chris Land School',
        state: 'Lagos',
        lga: 'Eti osa',
        schoolNumber: '00010201',
        schoolAddress: '15 Lekki Phase 1'
      }
    ],
        columns: [
          {
            title: 'School Number',
            data: 'schoolNumber',
          },
          {
          title: 'School Name',
          data: 'schoolName',
        },  {
          title: 'Address',
          data: 'schoolAddress'
        },
        {
          title: 'State',
          data: 'state'
        },
        {
          title: 'Local Government',
          data: 'lga'
        },
      ]
    };
  }
}
