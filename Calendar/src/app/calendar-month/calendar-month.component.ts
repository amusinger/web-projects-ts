import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.scss']
})
export class CalendarMonthComponent implements OnInit {

  week : String[] = [
    'Su',
    'Mo',
    "Tu",
    'We',
    'Th',
    'Fr',
    'Sa'
  ];
  month: string;  
  year: number;
  // days: string[][] = [];
  days: number[] = [];
  cols: number[] = [0,1,2,3,4,5,6];
firstInit: Boolean = false;

  @Input() set currentYear(currentYear: number) {
    this.year = currentYear;
    if(this.firstInit == true){
      this.drawMonth();
    }

    //console.log(this.year)

  }

  @Input() set currentMonth(currentMonth: string) {
    this.month =  currentMonth;
    //console.log(this.month);
   this.firstInit = true;
    this.drawMonth();
   
  }

  drawMonth(){

    var _month = moment().month(this.month).month();
    //console.log(_month)
    var _year = moment().year(this.year).year();
    var currentDate = moment([_year, _month]);
    var firstday = currentDate.format('d');
     console.log(firstday);
     var daysInMonth = currentDate.daysInMonth();
     //console.log(daysInMonth);
   
    let iter = 0;

    let j = 0;
      while(Number(firstday) != j){
       this.days[iter] = 0;
       j++;
       iter++;
      }
      for(let i = 1; i<daysInMonth+1; i++){
        this.days[iter] = i;
        iter++;
      }
      
    
    
    // for (let i = 0; i < 7; i++) {
    //   for (let j = 0; j < 7; j++) {
    //     this.days[i][j] = iter + '';
    //     iter++;
    //     if (iter === daysInMonth)
    //       return;
    //   }
    // }
    

  }
  constructor() { }

  ngOnInit() {
  }

}
