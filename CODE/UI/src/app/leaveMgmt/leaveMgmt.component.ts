import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leavemgmt',
  templateUrl: './leaveMgmt.component.html',
  styleUrls: ['./leaveMgmt.component.css']
})
export class LeaveMgmtComponent implements OnInit {


  /**Donut chart */
  public doughnutChartLabelsEarned: string[] = ['Earned leaves', 'Remaining'];
  public doughnutChartDataEarned: number[] = [7, 10];

  public doughnutChartLabelsSick: string[] = ['Sick leaves', 'Remaining'];
  public doughnutChartDataSick: number[] = [2, 4];

  public doughnutChartLabelsFlexi: string[] = ['Flexi leaves', 'Remaining'];
  public doughnutChartDataFlexi: number[] = [1, 1];

  public doughnutChartLabelsComp: string[] = ['Comp leaves', 'Remaining'];
  public doughnutChartDataComp: number[] = [0, 1];

  public doughnutChartLabelsRH: string[] = ['RH leaves', 'Remaining'];
  public doughnutChartDataRH: number[] = [0, 1];


  /**PIE chart */
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
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

  /**Donut chart */
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  /**Bar chart */
  // events
  public chartClickedBar(e: any): void {
    console.log(e);
  }

  public chartHoveredBar(e: any): void {
    console.log(e);
  }

  public test(): void {
    console.log('clicked..');
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }



}
