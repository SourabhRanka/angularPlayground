import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
	import { FormsModule } from '@angular/forms';


  import { AppComponent } from './app.component';
  import { Feature1Module } from "./feature1/feature1.module";



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,Feature1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
