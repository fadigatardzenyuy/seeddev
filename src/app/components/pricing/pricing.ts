import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css'
})
export class Pricing {
  pricing = [
    {
      title: 'Basic',
      sub: 'For individuals just getting started',
      price: 'XAF4500/mo',
      features: ['1 project', 'Basic support', '5GB storage']
    },
    {
      title: 'Pro',
      sub: 'For growing teams',
      price: 'XAF9000/mo',
      features: ['10 projects', 'Priority support', '50GB storage', 'Team collaboration']
    },
    {
      title: 'Enterprise',
      sub: 'For large organizations',
      price: 'XAF15000/mo',
      features: ['Unlimited projects', '24/7 support', '500GB storage', 'Advanced security', 'Dedicated manager']
    }
  ];
}