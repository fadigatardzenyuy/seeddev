import { Injectable, signal, computed } from '@angular/core';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private readonly STORAGE_KEY = 'lexon_wishlist';

  private itemsSignal = signal<WishlistItem[]>(this.loadFromStorage());

  items = computed(() => this.itemsSignal());
  count = computed(() => this.itemsSignal().length);

  isInWishlist(id: string): boolean {
    return this.itemsSignal().some(item => item.id === id);
  }

  toggle(item: WishlistItem): void {
    this.isInWishlist(item.id) ? this.remove(item.id) : this.add(item);
  }

  add(item: WishlistItem): void {
    if (this.isInWishlist(item.id)) return;
    this.itemsSignal.update(items => [...items, item]);
    this.saveToStorage();
  }

  remove(id: string): void {
    this.itemsSignal.update(items => items.filter(i => i.id !== id));
    this.saveToStorage();
  }

  clear(): void {
    this.itemsSignal.set([]);
    this.saveToStorage();
  }

  private saveToStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.itemsSignal()));
  }

  private loadFromStorage(): WishlistItem[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }
}