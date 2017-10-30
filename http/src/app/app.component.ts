import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ModalService } from './services/modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild('template') private template;
  
    title = 'app';
    myContext = { id: '1', name: 'stranger' };
  
  
    constructor(private moduleService: ModalService) {
    }
  
    ngOnInit() {}
  
    openModal(){
      this.moduleService.openTemplateModal(this.template, this.myContext); 
    }
    closeModal(){
      this.moduleService.openTemplateModal(null, null); 
    }

  }