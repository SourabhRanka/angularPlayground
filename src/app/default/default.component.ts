import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private subscriptionService : SubscriptionService) { }

  ngOnInit() {
  }

  subscribe(){
    this.subscriptionService.makeSubscription();
  }

}
