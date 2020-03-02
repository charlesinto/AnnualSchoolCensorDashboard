import { Component, OnInit, Inject } from '@angular/core';
import { JQUERY_TOKEN } from '../services/jquery.service';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  dtOptions: any = []
  constructor(@Inject(JQUERY_TOKEN) private $: any, private placeService: PlacesService) { }

  ngOnInit() {
    // this.$('.loader-wrapper').show(500);
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
        firstName: 'Okey',
        lastName: 'Madu',
        schoolNumber: '00010201',
        admissionNumber: '1019'
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
          title: 'First Name',
          data: 'firstName'
        },
        {
          title: 'Last Name',
          data: 'lastName'
        },
        {
          title: 'Student Admission Number',
          data: 'admissionNumber'
        },
      ]
    };
  }
}
