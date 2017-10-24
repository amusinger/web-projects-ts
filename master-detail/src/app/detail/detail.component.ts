import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }
  public name:String;
  public names:[String];


  delete(name: String){
    for(let i=0; i < this.names.length; i++){
      if(name == this.names[i]){
        this.names[i] = null;
      }
    }
  }
  ngOnInit() {
  }

}
