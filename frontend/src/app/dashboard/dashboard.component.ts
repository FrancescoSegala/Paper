import { Component, OnInit } from '@angular/core';
import { BusService, PAGE_CHANGE } from '@eng';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent   implements OnInit {

  constructor(private bus: BusService){}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
    // ,
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  ngOnInit(): void {
    this.bus.publish(PAGE_CHANGE, "dashboard");
  }
}
