import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService, WishlistItem } from '../services/wishlist.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <button 
        class="wishlist-btn" 
        [class.active]="wishlist.isInWishlist(product.id)"
        (click)="wishlist.toggle(product)">
        {{ wishlist.isInWishlist(product.id) ? '♥' : '♡' }}
      </button>

      <!-- PASTE YOUR ORIGINAL CARD MARKUP HERE (image, name, price, etc.) -->

    </div>
  `,
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product!: WishlistItem;
  wishlist = inject(WishlistService);
}