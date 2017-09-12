import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [], //service
  bootstrap: [AppComponent]
})
export class AppModule { }
