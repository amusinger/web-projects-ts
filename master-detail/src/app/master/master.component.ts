import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  @ViewChild('detail', { read: ViewContainerRef })
  name: string;
  private componentContainer: ViewContainerRef;
 
  constructor(private cfr: ComponentFactoryResolver) { }

  add(){
    const factory = this.cfr.resolveComponentFactory(DetailComponent);
    const componentRef = this.componentContainer.createComponent(factory);
    componentRef.instance.name = this.name ;
    componentRef.instance.names.push(this.name);
  }

  ngOnInit() {
  }

}
