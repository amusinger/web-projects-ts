import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  private serviceUrl = 'http://services.odata.org/TripPinRESTierService';
  results = '';
  constructor(private http: HttpClient){
  }
  public people: object;

  connect(): object {
    this.http.get(`${this.serviceUrl}/People?$top=20`).subscribe(data => {
      
      this.people = data["value"];
      
    });
    return this.people;
  }

  disconnect() {}

  ngOnInit(): void {
    this.http.get(`${this.serviceUrl}/People?$top=20`).subscribe(data => {
      
      this.people = data["value"];
    
      
    });
  }
}


export interface Element {
  name: string;
  firstname: string;
  gender: string;
  age: string;
}