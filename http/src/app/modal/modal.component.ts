import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  public template;
  public context;

  constructor(
    private modalService: ModalService) {
    modalService.onTemplateModalOpen.subscribe(data => {
      this.template = data.template;
      this.context = data.context;
    })
  }

  ngOnInit() {
  }

}
