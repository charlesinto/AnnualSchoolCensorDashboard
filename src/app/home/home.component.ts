import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQUERY_TOKEN } from "../services/jquery.service";
import { PlacesService } from "../services/places.service";
import Chart from "chart.js";
import { DataTableDirective } from 'angular-datatables';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('dataTable') table: ElementRef;
  @ViewChild(DataTableDirective) dtElements: any;
  @ViewChild('lineChart') private chartRef: ElementRef;
  @ViewChild('lineChart1') private chartRef1: ElementRef;
  @ViewChild('lineChart2') private chartRef2: ElementRef;
  dataTable: any;
  constructor( @Inject(JQUERY_TOKEN) private $: any, private placeService: PlacesService) { }
  states: String[];
  lga: String[];
  school: String[];
  chart: any;
  schoolchartType: any = 'Table';
  teacherChartType: any = 'Table';
  schoolbyLga:any[] = [{
    label: ['Oji', 'kosofe', 'Oshodi Isolo', 'Ibadan',  'kosofe', 'Ikosi','Eti Osa', 'Berger'],
    data: [80, 2, 40, 4, 45, 6, 40, 50]
  }]
  schoolRecordSummary: any[] = [
    {state: 'Lagos', lga: 'Kosofe', numberOfSchool: 30}
  ];
  studentRecordSummary: [] = [];
  teacherRecordSummary: [] = [];
  studentChartType: any = 'Table';
  dtOptions: any = [];
  numberOfSchool: Number = 2000000;
  numberOfTeacher: Number = 120000000;
  numberOfStudent: Number = 200000000000;
  ngOnInit() {
    // this.$('.loader-wrapper').show(500);
    // setTimeout(() => {
    //   this.$('.loader-wrapper').hide(1000)
    // }, 10000);
    this._initializeApp();
    console.log(this.chartRef);
  }
  _initLineChart(){
    if(this.schoolchartType !== 'Table'){
      this.chart = new Chart(this.chartRef.nativeElement.getContext('2d'), {
        type: this.schoolchartType === 'Line Chart' ? 'line' : 'bar',
        data: {
          labels: this.schoolbyLga[0].label , // your labels array
          datasets: [
            {
              data: this.schoolbyLga[0].data, // your data array
              borderColor: '#00AEFF',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    }
    if(this.teacherChartType !== 'Table'){
      this.chart = new Chart(this.chartRef1.nativeElement.getContext('2d'), {
        type: this.teacherChartType === 'Line Chart' ? 'line' : 'bar',
        data: {
          labels: ['Oji', 'kosofe', 'Oshodi Isolo', 'Ibadan',  'kosofe', 'Ikosi','Eti Osa', 'Berger'], // your labels array
          datasets: [
            {
              data: [80, 2, 40, 4, 45, 6, 40, 50], // your data array
              borderColor: '#00AEFF',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    }
    if(this.studentChartType !== 'Table'){
      this.chart = new Chart(this.chartRef2.nativeElement.getContext('2d'), {
        type: this.studentChartType === 'Line Chart' ? 'line' : 'bar',
        data: {
          labels: ['Oji', 'kosofe', 'Oshodi Isolo', 'Ibadan',  'kosofe', 'Ikosi','Eti Osa', 'Berger'], // your labels array
          datasets: [
            {
              data: [80, 2, 40, 4, 45, 6, 40, 50], // your data array
              borderColor: '#00AEFF',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    }
  }
  _initializeApp() {
    // console.log(this.table)
    this.dataTable = this.$('#daTatable');
    console.log(this.dataTable)
    this.dataTable.dataTable()
    const states = this.placeService.getstates();
    const lgas = this.placeService.getAllLocals();
    // initialize the states dropdown
    this.$('.result-states').select2({
      data: states,
      placeholder: 'Select State'
    });
    this.$('.local-governments').select2({placeholder: 'Select Local Government', data: lgas});
    this.$('.result-schools').select2({placeholder: 'Select School', });
    const $this = this;
    // $this.$(".js-example-basic-single").val('').trigger('change');
    this.$('.result-states').on('change', function (e) {
      // Do something
      const data = $this.$('.result-states').select2('val');
      $this.states = data;
      const localGovernment = $this.placeService.getLocals(data);
      $this.$('.local-governments').empty();
      $this.$('.local-governments').select2({data: localGovernment,
        placeholder: 'Select Local Government' });
    });
    this.$('.local-governments').on('change', function(e){
      const data = $this.$('.local-governments').select2('val');
      $this.lga = data;
    })
    this.dtOptions[0] = this.buildSchoolDtOptions('');
    this.dtOptions[1] = this.buildTeacherDtOptions('');
    this.dtOptions[2] = this.buildStudentDtOptions('');
  }
  private buildSchoolDtOptions(url: string) {
    return {
      responsive: true,
      data: this.schoolRecordSummary,
        columns: [{
          title: 'State',
          data: 'state',
        }, {
          title: 'Local Government',
          data: 'lga'
        }, {
          title: 'Number of Schools',
          data: 'numberOfSchool'
        },
        // {
        //   title: 'Action',
        //   render: () => {
        //     return `<button>Edit</button>`;
        //   }
        // }
      ],
      dom: 'Bfrtip',
      buttons: [
        // 'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
      ]
    };
  }
  private buildTeacherDtOptions(url: string){
    return {
      responsive: true,
      data: this.teacherRecordSummary,
      columns: [{
        title: 'State',
        data: 'state',
      }, {
        title: 'Local Government',
        data: 'lga'
      }, {
        title: 'School',
        data: 'numberOfSchool'
      },
      {
        title: 'Teacher',
        data: 'numberOfTeacher'
      },
      // {
      //   title: 'Action',
      //   render: () => {
      //     return `<button>Edit</button>`;
      //   }
      // }
    ],
    dom: 'Bfrtip',
    buttons: [
      // 'columnsToggle',
      'colvis',
      'copy',
      'print',
      'excel',
    ]
    };
  }
  private buildStudentDtOptions(url: string) {
    return {
      responsive: true,
      data: this.studentRecordSummary,
      columns: [{
        title: 'State',
        data: 'state',
      }, {
        title: 'Local Government',
        data: 'lga'
      }, {
        title: 'School',
        data: 'numberOfSchool'
      },
      {
        title: 'Students',
        data: 'numberOfStudents'
      },
      // {
      //   title: 'Action',
      //   render: () => {
      //     return `<button>Edit</button>`;
      //   }
      // }
    ],
      dom: 'Bfrtip',
      buttons: [
        // 'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
      ]
    };
  }
  toggleChart(record: string, chartType: string) {
    switch(record){
      case 'student':
        this.studentChartType = chartType;
        this._initLineChart();
        break;
      case 'teacher':
        this.teacherChartType = chartType;
        this._initLineChart();
        break;
      case 'school':
        this.schoolchartType = chartType;
        this._initLineChart();
        break;
      default:
        return ;
    }
  }
}
