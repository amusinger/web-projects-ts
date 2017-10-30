import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {

  private onTemplateModalOpenSubject = new Subject<{ template, context }>();
  public onTemplateModalOpen = this.onTemplateModalOpenSubject.asObservable();

  constructor() { }

  public openTemplateModal(template, context) {
    this.onTemplateModalOpenSubject.next({
      template, context
    });
  }

  // public closeTemplateModal(template, context){
  //   this.onTemplateModalOpenSubject.
  // }

}