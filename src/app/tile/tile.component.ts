import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { GetmarketserviceService } from '../services/getmarketservice.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  constructor(private marketService: GetmarketserviceService) { }

  //tileChart: TileChart;
  chart = [];
  public dataChart: [];

  ngOnInit() {
    this.getCharts(); //subscribe to the array of data inputs coming in
  }

  public getCharts() {
    // call data from you service or data mock
    //this.dataChart = { ....response };
  }

}
