import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { Home } from './components/home/home';
import { ProductsComponent } from './components/products/products';
import { ReviewComponent } from './components/review/review';

export const routes: Routes = [
  { path: '', component: Home, title: 'LEXON Home' },
  { path: 'products', component: ProductsComponent, title: 'LEXON Products' },
  { path: 'about', component: AboutComponent, title: 'About LEXON' },
  { path: 'contact', component: ContactComponent, title: 'Contact LEXON' },
  { path: 'reviews', component: ReviewComponent, title: 'LEXON Reviews' },
  { path: '**', redirectTo: '' },
  { path: 'cart', loadComponent: () => import('./components/cart/cart').then((m) => m.Cart) },
  {
    path: 'checkout',
    loadComponent: () => import('./components/checkout/checkout').then((m) => m.Checkout),
  },
];
