import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from "angular-datatables";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  roles: any[] = [{id: 1, name: 'Enumerator'}];
  dtOptions: any = [];
  @ViewChild(DataTableDirective) dtElements: any;
  constructor() { }

  ngOnInit() {
    this._initializeApp();
  }
  _initializeApp(){
    this.dtOptions[0] = this.buildDToptions('')
  }
  private buildDToptions(url: string) {
    return {
      responsive: true,
      data: [{
        id: 1,
        firstName: 'charles',
        lastName: 'Onuorah',
        userName: 'charlesinto',
        emailAddress: 'charles.onuorah@yahoo.com',
        phoneNumber: '08163113450',
        active: 'True',
        roleName: 'Super Administrator'
      },
      {
        id: 2,
        firstName: 'Busola',
        lastName: 'Dakore',
        userName: 'busola2',
        emailAddress: 'busola.dakore',
        phoneNumber: '08163113450',
        active: 'True',
        roleName: 'Enumerator'
      }
    ],
        columns: [{
          title: 'First Name',
          data: 'firstName',
        },  {
          title: 'Last Name',
          data: 'lastName'
        },
        {
          title: 'User Name',
          data: 'userName'
        },
        {
          title: 'Email Address',
          data: 'emailAddress'
        },
        {
          title: 'Phone Number',
          data: 'phoneNumber'
        },
        {
          title: 'Role Name',
          data: 'roleName'
        },
        {
          title: 'Active',
          data: 'active'
        },
        {
          title: 'Action',
          render: (data, type, row, meta) => {
            return `<div class="d-flex"><button data-id=${row.id} class="btn data-edit btn-success mx-2">Edit</button> <button
            data-id=${row.id} class="btn data-delete btn-danger">Deactivate</button></div>`;
          }
        }
      ]
    };
  }
}
