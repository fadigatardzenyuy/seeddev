import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProductItem {
  name: string;
  category: string;
  description: string;
  badge: string;
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-shell">
      <div class="page-header">
        <p class="eyebrow">Our offering</p>
        <h2>Clothing by category</h2>
        <p>Adaptive clothing organised by support type, fit, and everyday use so each collection is easy to explore.</p>
      </div>

      <div class="category-group" *ngFor="let group of categories">
        <div class="category-heading">
          <h3>{{ group.title }}</h3>
          <p>{{ group.description }}</p>
        </div>

        <div class="product-grid">
          <article class="product-card" *ngFor="let item of group.items">
            <div class="product-image" [ngStyle]="{ 'background': item.image }"></div>
            <span class="badge">{{ item.badge }}</span>
            <h4>{{ item.name }}</h4>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-shell {
      padding: 3rem 1.5rem 4rem;
      max-width: 1100px;
      margin: 0 auto;
    }

    .page-header {
      margin-bottom: 2rem;
    }

    .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-size: 0.8rem;
      color: #4f7bb8;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }

    h2 {
      font-size: 2rem;
      margin: 0 0 0.75rem;
      color: #14213d;
    }

    .page-header p {
      color: #4d5870;
      font-size: 1.05rem;
      line-height: 1.7;
      max-width: 760px;
      margin: 0;
    }

    .category-group {
      margin-bottom: 2rem;
      background: #ffffff;
      border-radius: 24px;
      padding: 1.3rem;
      box-shadow: 0 12px 35px rgba(20, 33, 61, 0.06);
      border: 1px solid rgba(79, 123, 184, 0.16);
    }

    .category-heading h3 {
      margin: 0;
      color: #183b63;
      font-size: 1.25rem;
    }

    .category-heading p {
      margin: 0.35rem 0 0;
      color: #4d5870;
      line-height: 1.6;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .product-card {
      background: linear-gradient(135deg, #f8fcff 0%, #eef6ff 100%);
      border-radius: 18px;
      padding: 1rem;
      border: 1px solid rgba(79, 123, 184, 0.12);
      overflow: hidden;
    }

    .product-image {
      height: 180px;
      border-radius: 14px;
      margin-bottom: 0.8rem;
      background-size: cover;
      background-position: center;
      border: 1px solid rgba(79, 123, 184, 0.12);
    }

    .badge {
      display: inline-block;
      padding: 0.35rem 0.65rem;
      border-radius: 999px;
      background: #dcefff;
      color: #244f83;
      font-size: 0.76rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.7rem;
    }

    .product-card h4 {
      margin: 0 0 0.45rem;
      color: #14213d;
      font-size: 1.05rem;
    }

    .product-card p {
      margin: 0;
      color: #4d5870;
      line-height: 1.65;
      font-size: 0.95rem;
    }

    @media (max-width: 900px) {
      .product-grid {
        grid-template-columns: 1fr;
      }
    }
  `],
})
export class ProductsComponent {
  categories = [
    {
      title: 'Temporary Support',
      description: 'Designed for short-term comfort needs and recovery periods.',
      items: [
        { name: 'Recovery Jacket', category: 'Temporary Support', description: 'Soft layers and easy fastening for post-surgery comfort.', badge: 'Recovery', image: 'linear-gradient(135deg, #dcefff 0%, #8dc3ff 100%)' },
        { name: 'Comfort Wrap Set', category: 'Temporary Support', description: 'Gentle stretch and a relaxed fit for swelling or fatigue.', badge: 'Support', image: 'linear-gradient(135deg, #f6e8ff 0%, #c8aefc 100%)' },
        { name: 'Posture Relief Layer', category: 'Temporary Support', description: 'Lightweight support designed for ease during recovery.', badge: 'Daily', image: 'linear-gradient(135deg, #e8f7eb 0%, #a8d8b5 100%)' },
      ] as ProductItem[],
    },
    {
      title: 'Permanent Support',
      description: 'Practical clothing made for everyday independence and mobility.',
      items: [
        { name: 'Mobility Shirt', category: 'Permanent Support', description: 'Easy sleeve access and smooth movement for all-day wear.', badge: 'Mobility', image: 'linear-gradient(135deg, #e8f7eb 0%, #79c2a7 100%)' },
        { name: 'Adaptive Outerwear', category: 'Permanent Support', description: 'Thoughtful closures and easy grip for confident dressing.', badge: 'Outerwear', image: 'linear-gradient(135deg, #fff2d8 0%, #f2b56b 100%)' },
        { name: 'Comfort Fit Set', category: 'Permanent Support', description: 'Flexible structure and comfort-focused details for regular use.', badge: 'Everyday', image: 'linear-gradient(135deg, #eaf2ff 0%, #a5c4ff 100%)' },
      ] as ProductItem[],
    },
    {
      title: 'Everyday Wear',
      description: 'Stylish clothing that brings comfort into everyday routines.',
      items: [
        { name: 'Daily Layer Top', category: 'Everyday Wear', description: 'A modern, soft everyday essential for all-day comfort.', badge: 'Lifestyle', image: 'linear-gradient(135deg, #fef2f2 0%, #f5c7c7 100%)' },
        { name: 'Calm Essentials Set', category: 'Everyday Wear', description: 'Clean design and comfortable fit for simple daily dressing.', badge: 'Essentials', image: 'linear-gradient(135deg, #f6f1ff 0%, #d7c2ff 100%)' },
        { name: 'Flexible Lounge Wear', category: 'Everyday Wear', description: 'Easy movement, soft texture, and a polished look for home and beyond.', badge: 'Relaxed', image: 'linear-gradient(135deg, #e8fbff 0%, #9ed8f0 100%)' },
      ] as ProductItem[],
    },
  ];
}
