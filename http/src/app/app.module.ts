import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatTableModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
