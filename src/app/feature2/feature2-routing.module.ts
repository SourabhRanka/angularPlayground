import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppleComponent } from "./apple/apple.component";
import { BananaComponent } from "./banana/banana.component";




const routes: Routes = [
  // { path: '', redirectTo: '/contacts', pathMatch: 'full' }, 
  
  { 
    path: 'feature2', 
    children :[
        { path: 'x', component: AppleComponent },
        { path: 'y', component: BananaComponent }
    ]
 }
  
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class Feature2RoutingModule { }
