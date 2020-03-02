import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQUERY_TOKEN } from "../services/jquery.service";
import { PlacesService } from "../services/places.service";
import { DataTableDirective } from "angular-datatables";
@Component({
  selector: 'app-managerole',
  templateUrl: './managerole.component.html',
  styleUrls: ['./managerole.component.scss']
})
export class ManageroleComponent implements OnInit {
  states: String[];
  dtOptions: any = [];
  @ViewChild('datatable') table: ElementRef;
  @ViewChild(DataTableDirective) dtElements: any;
  constructor(@Inject(JQUERY_TOKEN) private $: any,  private placeService: PlacesService) { }

  ngOnInit() {
    this._initializeApp();
  }
  _initializeApp(){
    const states = this.placeService.getstates();
    const lga = this.placeService.getLocals();
    this.$('.states').select2({placeholder: 'Select State', data: states});
    this.$('.lga').select2({placeholder: 'Select LGA', data: lga});
    this.dtOptions[0] = this.buildDToptions('');
  }
  private buildDToptions(url: string) {
    return {
      responsive: true,
      data: [{
        id: 1,
        roleName: 'Enumerator',
        stateAccess: 'All',
        lgaAccess: 'All',
        active: 'True'
      },
      {
        id: 2,
        roleName: 'Enumerator Admin',
        stateAccess: 'All',
        lgaAccess: 'All',
        active: 'True'
      }
    ],
        columns: [{
          title: 'Role Name',
          data: 'roleName',
        },  {
          title: 'State Access',
          data: 'stateAccess'
        },
        {
          title: 'Local Government Access',
          data: 'lgaAccess'
        },
        {
          title: 'Active',
          data: 'active'
        },
        {
          title: 'Action',
          render: (data, type, row, meta) => {
            return `<button data-id=${row.id} class="btn data-edit btn-success">Edit</button> <button
            data-id=${row.id} class="btn data-delete btn-danger">Deactivate</button>`;
          }
        }
      ]
    };
  }

}
