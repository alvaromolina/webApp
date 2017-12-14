import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-contacto-page',
  templateUrl: './contacto-page.component.html',
  styleUrls: ['./contacto-page.component.css']
})
export class ContactoPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  dummy() {
    return "";
  }

}
