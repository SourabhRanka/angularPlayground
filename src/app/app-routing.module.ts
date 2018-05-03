import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from "./contacts/contacts.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { DefaultComponent } from "./default/default.component";
import { Restrict } from './restrict.service';
import { EmptyContact } from './empty-contact.service';



const routes: Routes = [
  // { path: '', redirectTo: '/contacts', pathMatch: 'full' }, 
  { path: '', component: DefaultComponent, pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contacts', component: ContactsComponent , canActivate : [Restrict] , canDeactivate : [EmptyContact]}
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
