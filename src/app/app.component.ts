import { Component } from '@angular/core';
import { Customer } from './customer';
import { ContactoPageComponent } from './contacto-page/contacto-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contactoPage: ContactoPageComponent;
  title = 'app';
  name: String = 'hola';
  customer: Customer;

  constructor() {
    this.customer = new Customer('Juan', 'Palotes');
    this.customer.dummy();
    this.contactoPage = new ContactoPageComponent();
    this.contactoPage.dummy();
  }

  private onClick() {
    alert('Hola');
  }
}
