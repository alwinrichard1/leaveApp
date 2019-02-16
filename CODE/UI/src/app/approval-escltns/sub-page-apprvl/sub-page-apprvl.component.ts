import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-page-apprvl',
  templateUrl: './sub-page-apprvl.component.html',
  styleUrls: ['./sub-page-apprvl.component.css']
})
export class SubPageApprvlComponent implements OnInit {

   /**Bar chart */
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [2, 0, 3, 0, 1, 4, 0], label: 'Earned' },
    { data: [0, 1, 1, 0, 0, 1, 2], label: 'Sick' },
    { data: [0, 0, 0, 0, 0, 1, 0], label: 'Flexi' },
    { data: [0, 1, 0, 1, 0, 0, 1], label: 'Comp' },
    { data: [0, 0, 1, 0, 0, 0, 0], label: 'RH' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
