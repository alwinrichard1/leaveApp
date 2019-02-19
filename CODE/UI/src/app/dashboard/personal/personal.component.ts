import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {


  /**Donut chart */
  public doughnutChartLabelsEarned: string[] = ['Used', 'Remaining'];
  public doughnutChartDataEarned: number[] = [7, 10];
  private donutColorsErnd=[{
    backgroundColor: ['rgb(255, 0, 0)']
  }];
  public doughnutChartLabelsSick: string[] = ['Used', 'Remaining'];
  public doughnutChartDataSick: number[] = [2, 4];
  private donutColorsSick=[{
    backgroundColor: ['rgb(51, 204, 255)']
  }];
  public doughnutChartLabelsFlexi: string[] = ['Used', 'Remaining'];
  public doughnutChartDataFlexi: number[] = [1, 1];
  private donutColorsFlexi=[{
    backgroundColor: ['rgba(0, 148, 97, 1)']
  }];
  public doughnutChartLabelsComp: string[] = ['Used', 'Remaining'];
  public doughnutChartDataComp: number[] = [0, 1];
  private donutColorsComp=[{
    backgroundColor: ['rgb(255, 255, 0)'  ]
  }];
  public doughnutChartLabelsRH: string[] = ['Used', 'Remaining'];
  public doughnutChartDataRH: number[] = [0, 1];
  private donutColors=[{
    backgroundColor: ['rgb(255, 153, 255)']
  }];

  /**Bar chart */
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChartLegend = true;
  // public chartColors: any[] = [
  //     { 
  //       backgroundColor:["#0000", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"] 
  //     }];
  public barChartData: any[] = [
    { data: [1, 2, 3, 4, 5, 6, 7], label: 'Earned',  backgroundColor:'rgb(255, 0, 0)' },
    { data: [1, 2, 3, 4, 5, 6, 7], label: 'Sick', backgroundColor:'rgb(51, 204, 255)' },
    { data: [1, 2, 3, 4, 5, 6, 7], label: 'Flexi', backgroundColor:'rgba(0, 148, 97, 1)' },
    { data: [1, 2, 3, 4, 5, 0, 7], label: 'Comp', backgroundColor:'rgb(255, 255, 0)' },
    { data: [1, 2, 3, 4, 5, 6, 7], label: 'RH', backgroundColor:'rgb(255, 153, 255)' }
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
