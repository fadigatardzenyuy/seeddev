import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = signal(false);

  navItems = [
    { label: 'Home', route: '/' },
    { label: 'Products', route: '/products' },
    { label: 'Reviews', route: '/reviews' },
    { label: 'About', route: '/about' },
    { label: 'Contact us', route: '/contact' },
    { label: 'wishlist', route: '/wishlist' },
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  isLinkActive(route: string, label: string): boolean {
    if (label === 'What’s New') {
      return false;
    }

    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
}
