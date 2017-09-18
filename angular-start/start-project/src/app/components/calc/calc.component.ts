import { Component, OnInit, Input } from '@angular/core';
import { SumOperation } from '../../models/sum.operation';
import { SubOperation } from '../../models/sub.operation';
import { DivOperation } from '../../models/div.operation';
import { MulOperation } from '../../models/mul.operation';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  public textField: string ="";
  public digits: number[][] = [];

  public numbers: number[] = [];
  public operation: string ="";

  public firstNumber: number = 0;
  public secondNumber: number = 0;


  constructor() { 
    for(let i = 0; i<3; i++){
      this.digits[i] = []
      for(let j = 0; j<3; j++){
        this.digits[i].push(i*3 +j+ 1); 
      }
    }
  }
 
  private operations = new Array (
    new SumOperation(),
    new SubOperation(),
    new DivOperation(),
    new MulOperation()
)

public findOperation(_operation:string){
   return this.operations.find(x => x.operation == _operation);
    
}

public calculate(_operation:string, numbers: number[]){
    var x = this.findOperation(_operation);
    return x.execute(numbers);
}

operationClicked(_operation:string){
  this.operation = _operation;
  this.firstNumber = parseFloat(this.textField);
  this.numbers.push(this.firstNumber);
  this.textField = "";
}

equalClicked(){
  var x = this.findOperation(this.operation);
  this.secondNumber = parseInt(this.textField);
  this.numbers.push(this.secondNumber);
  this.textField =  x.execute(this.numbers).toString();
  this.firstNumber = parseFloat(this.textField); 
}

clean(){
  
}



  ngOnInit() {
  }

}
