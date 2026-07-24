// src/app/services/cart.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items = signal<CartItem[]>([]);

  cartItems = this.items.asReadonly();

  totalItems = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this.items().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  );

  addToCart(product: Product) {
    this.items.update(current => {
      const existing = current.find(i => i.product.id === product.id);
      if (existing) {
        return current.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...current, { product, quantity: 1 }];
    });
  }

  removeFromCart(productId: string) {
    this.items.update(current => current.filter(i => i.product.id !== productId));
  }

  updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this.items.update(current =>
      current.map(i => (i.product.id === productId ? { ...i, quantity } : i))
    );
  }

  clearCart() {
    this.items.set([]);
  }
}