import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.css']
})
export class ContactdetailComponent implements OnInit {

  myParams = {};

  constructor(private ar : ActivatedRoute) {
    this.ar.params.subscribe(params => this.myParams = params);
    
   }

  ngOnInit() {
  }

}
