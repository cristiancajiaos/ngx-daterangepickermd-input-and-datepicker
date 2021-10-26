import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  selected: {
    startDate: Moment,
    endDate: Moment
  };
  constructor() { }

  ngOnInit() {
  }

}
