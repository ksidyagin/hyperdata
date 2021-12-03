import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TieredMenuModule,
    ButtonModule,
    ChartModule,
    AccordionModule,
    ToastModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
