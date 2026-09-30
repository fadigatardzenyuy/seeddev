import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist-page.html',
  styleUrl: './wishlist-page.css',
})
export class WishlistPage {
  wishlist = inject(WishlistService);
}