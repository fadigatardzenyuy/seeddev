import { Routes } from '@angular/router';
import { HomeComponent } from './components/homeComponent/homeComponent';
import { ProductsComponent } from './components/pricing/products/products';
import { Pricing } from './components/pricing/pricing';
import { WhatsNew } from './components/whats-new/whats-new';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'pricing', component: Pricing },
  { path: 'whats-new', component: WhatsNew }
];