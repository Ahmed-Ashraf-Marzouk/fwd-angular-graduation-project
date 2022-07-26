import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  userForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    creditCard: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
