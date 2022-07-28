import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

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
  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }
  
  public onSubmit(){
     this.cartService.cartEmpty();
     console.log("done")
     this.router.navigate(['/', 'confirmation']);
  }
}
