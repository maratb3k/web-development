import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { products } from '../products';
import { laptops } from '../laptops';
import { cameras } from '../cameras';
import { tvs } from '../tv';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });


  constructor(private cartService: CartService, private formBuilder: FormBuilder,) { }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  
  ngOnInit(){}
  clickToRemove(product) {
    this.cartService.clickToRemove(product);
    window.alert('Your product has been remove from the cart!');
  }
}