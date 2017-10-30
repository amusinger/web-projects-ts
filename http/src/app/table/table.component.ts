import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  title = 'app';
  private serviceUrl = 'http://services.odata.org/TripPinRESTierService';
  results = '';
  constructor(private http: HttpClient){
  }
  public people: object;

  // connect(): object {
  //   this.http.get(`${this.serviceUrl}/People?$top=20`).subscribe(data => {
      
  //     this.people = data["value"];
      
  //   });
  //   return this.people;
  // }

  // disconnect() {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(){
    this.http.get(`${this.serviceUrl}/People?$top=20`).subscribe(data => {      
      this.people = data["value"];
      
    });
  }
}

