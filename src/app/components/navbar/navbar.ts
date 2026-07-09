import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navItems = [
    { label: 'Home', route: '/' },
    { label: 'Products', route: '/products' },
    { label: 'What’s New', route: '/products' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
  ];

  constructor(private router: Router) {}

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
