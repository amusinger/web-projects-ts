import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  public curValue = '';

  public digits: number[][] = [];



  constructor() { 
    for(let i = 0; i<3; i++){
      this.digits[i] = []
      for(let j = 0; j<3; j++){
        this.digits[i].push(i*3 +j+ 1); 
      }
    }
    console.log(this.digits)
  }
 

  ngOnInit() {
  }

}
