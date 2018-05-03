import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot} from '@angular/router'
import { ContactsComponent } from './contacts/contacts.component';
import { RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class EmptyContact implements CanDeactivate<ContactsComponent> {

  constructor() { }

  canDeactivate(component : ContactsComponent) {
    if(component.contactNumber.length > 0)
    {
      return true;
    }else{
      alert('You have not added any contact number, please add');
      return false;
    }
      
  }

}
