import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  orderPlaced = false;

  form = {
    fullName: '',
    address: '',
    city: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  };

  constructor(public cartService: CartService, private router: Router) {}

  placeOrder() {
    // mock checkout — no real payment processing
    this.orderPlaced = true;
    this.cartService.clearCart();
  }
}