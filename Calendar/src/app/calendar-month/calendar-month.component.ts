import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.css']
})
export class CalendarMonthComponent implements OnInit {

  week : String[] = [
    'Mon',
    "Tue",
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ];
  month: string;  
  year: number;
  days: string[][] = [];

  @Input() set currentYear(currentYear: number) {
    this.year = currentYear;
    console.log(this.year)

  }

  @Input() set currentMonth(currentMonth: string) {
    this.month =  currentMonth;
    console.log(this.month);
    this.drawMonth();
   
  }

  drawMonth(){

    var _month = moment().month(this.month).month();
    console.log(_month)
    var _year = moment().year(this.year).year();
    var currentDate = moment([this.year, _year]);
    var firstday = Number(currentDate.format('d'));
    console.log(firstday);
    var daysInMonth = currentDate.daysInMonth();   
   
    let iter = 1;
    for (let i = firstday; i < 7; i++) {
      this.days[0][i] = iter + '';
      iter++;
    }
    for (let i = 1; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        this.days[i][j] = iter + '';
        iter++;
        if (iter === daysInMonth)
          return;
      }
    }
    

  }
  constructor() { }

  ngOnInit() {
  }

}
