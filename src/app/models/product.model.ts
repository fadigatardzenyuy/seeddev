// src/app/models/product.model.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  features?: string[];
}