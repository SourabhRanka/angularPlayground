import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F1c1Component } from './f1c1/f1c1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ F1c1Component],
  exports : [F1c1Component]
})
export class Feature1Module { }
