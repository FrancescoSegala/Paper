import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { DatePipe, registerLocaleData } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import localeIt from '@angular/common/locales/it'
import localeEn from '@angular/common/locales/en';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EngModule } from './eng/eng.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasechartComponent } from './dashboard/basechart/basechart.component';
import { WaybillsComponent } from './waybills/waybills.component';
import { PaperDatePipe } from './paper-date.pipe';
import { EngMaterialModule } from './eng/material.module';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';
import { UrgentWaybillsComponent } from './urgent-waybills/urgent-waybills.component';
import { PracticesComponent } from './practices/practices.component';
import { UrgentPracticesComponent } from './urgent-practices/urgent-practices.component';
import { PracticeComponent } from './practice/practice.component';
import { RequestsComponent } from './requests/requests.component';


registerLocaleData( localeIt )
registerLocaleData( localeEn )


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BasechartComponent,
    WaybillsComponent,
    PaperDatePipe,
    ListsComponent,
    ListComponent,
    UrgentWaybillsComponent,
    PracticesComponent,
    UrgentPracticesComponent,
    PracticeComponent,
    RequestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    EngModule,
    EngMaterialModule
  ],
  providers: [DatePipe, PaperDatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
