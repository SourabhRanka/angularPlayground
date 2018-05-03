import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule } from "@angular/router";

import { HttpClientModule } from '@angular/common/http';



import { DefaultComponent } from './default/default.component';
import { CapitalizePipe } from './capitalize.pipe';
import { Restrict } from './restrict.service';
import {SubscriptionService} from './subscription.service'
import { EmptyContact } from './empty-contact.service';
import { FetchDataService } from './fetch-data.service';



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutusComponent,
    DefaultComponent,
    CapitalizePipe
  ],
  imports: [

    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [Restrict, SubscriptionService,EmptyContact,FetchDataService],

  bootstrap: [AppComponent]
})
export class AppModule { }
