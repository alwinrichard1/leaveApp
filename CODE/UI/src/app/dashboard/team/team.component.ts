import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  /**Bar chart */
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChartData: any[] = [
    { data: [1, 5, 3, 2, 0, 0, 1], label: 'Earned' },
    { data: [0, 1, 3, 0, 0, 1, 2], label: 'Sick' },
    { data: [0, 5, 0, 0, 4, 1, 0], label: 'Flexi' },
    { data: [0, 5, 3, 1, 0, 5, 1], label: 'Comp' },
    { data: [0, 3, 1, 0, 3, 0, 0], label: 'RH' }
  ];


  public barChartLabelsToday: string[] = ['ASPS', 'Auto', 'Fannie', 'Agent', 'Pro', 'SM', 'DB', 'Consumer'];
  public barChartDataToday: any[] = [
    { data: [2, 0, 3, 0, 1, 4, 1, 1], label: 'Leave' },
    { data: [1, 3, 8, 1, 3, 4, 5, 6], label: 'Present' }
  ];

  public barChartLabelsMonthly: string[] = ['ASPS', 'Auto', 'Fannie', 'Agent', 'Pro', 'SM', 'DB', 'Consumer'];
  public barChartDataMonthly: any[] = [
    { data: [2, 0, 3, 0, 1, 4, 1, 1], label: 'Planned' },
    { data: [3, 1, 0, 2, 0, 8, 0, 2], label: 'Unplanned' }
  ];

  public barChartLabelsRemain: string[] = ['ASPS', 'Auto', 'Fannie', 'Agent', 'Pro', 'SM', 'DB', 'Consumer'];
  public barChartDataRemain: any[] = [
    { data: [12, 40, 11, 11, 13, 21, 0, 44], label: 'Dev' },
    { data: [0, 1, 20, 10, 11, 30, 41, 0], label: 'QA' }
  ];


  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '2016' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: '2017' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: '2018' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';



  constructor() { }

  ngOnInit() {
  }



}
