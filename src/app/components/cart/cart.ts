import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService: CartService) {}

  increment(productId: string, currentQty: number) {
    this.cartService.updateQuantity(productId, currentQty + 1);
  }

  decrement(productId: string, currentQty: number) {
    this.cartService.updateQuantity(productId, currentQty - 1);
  }

  remove(productId: string) {
    this.cartService.removeFromCart(productId);
  }
}
