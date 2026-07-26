import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 'livestock',
      name: 'Livestock Management',
      description: 'Track herd health, feeding schedules, and breeding records in one place.',
      category: 'Livestock'
    },
    {
      id: 'crop',
      name: 'Crop Management',
      description: 'Plan planting cycles, monitor yields, and manage harvest schedules.',
      category: 'Crops'
    },
    {
      id: 'farm',
      name: 'Farm Management',
      description: 'Oversee equipment, staff, and daily operations from a single dashboard.',
      category: 'Operations'
    }
  ];

  categories = ['All', 'Livestock', 'Crops', 'Operations'];
  selectedCategory = signal('All');

  filteredProducts = computed(() => {
    const cat = this.selectedCategory();
    return cat === 'All' ? this.products : this.products.filter(p => p.category === cat);
  });

  setCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }
}