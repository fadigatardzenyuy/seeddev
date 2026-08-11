import { Routes } from '@angular/router';
import { HomeComponent } from './components/homeComponent/homeComponent';
import { Pricing } from './components/pricing/pricing';
import { Contact } from './components/contact/contact';
import { ProductsComponent } from './components/products/products';
import { WhatsNew } from './components/whats-new/whats-new';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'SÄÑGÖ Home' },
  { path: 'pricing', component: Pricing, title: 'SÄÑGÖ Pricing' },
  { path: 'products', component: ProductsComponent, title: 'SÄÑGÖ Products' },
  { path: 'whats-new', component: WhatsNew, title: "SÄÑGÖ What's New" },
  { path: 'contact', component: Contact, title: 'SÄÑGÖ Contact Us' },
  { path: '**', redirectTo: '' },
];