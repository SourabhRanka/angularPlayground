import { Injectable } from '@angular/core';

@Injectable()
export class SubscriptionService {

  constructor() { }
  isSubscribed = false;

  makeSubscription(){
    this.isSubscribed = true;
    alert('subscription successful !!')
  }

  getSubscriptionStatus(){
    return this.isSubscribed;
  }

}
 