import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ClothingCard {
  title: string;
  type: 'Temporary' | 'Permanent';
  disability: string;
  description: string;
  image: string;
  accent: string;
}

interface FeaturedCategory {
  title: string;
  subtitle: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  clothingCards: ClothingCard[] = [
    {
      title: 'Adaptive Recovery Jacket',
      type: 'Temporary',
      disability: 'Post-surgery recovery',
      description: 'Soft seams and magnetic closures that make dressing easier during short-term recovery.',
      image: this.createImage('Recovery Jacket', '#dcefff', '#1b6fb8'),
      accent: '#dcefff',
    },
    {
      title: 'Comfort Layer Set',
      type: 'Temporary',
      disability: 'Pregnancy or swelling',
      description: 'Stretch panels and gentle fits that adjust comfortably to changing body needs.',
      image: this.createImage('Comfort Layer', '#f6e8ff', '#7c4dc0'),
      accent: '#f6e8ff',
    },
    {
      title: 'Daily Mobility Shirt',
      type: 'Permanent',
      disability: 'Cerebral palsy',
      description: 'Easy sleeve access and a relaxed silhouette that supports movement throughout the day.',
      image: this.createImage('Mobility Shirt', '#e6f7ea', '#2f8f58'),
      accent: '#e6f7ea',
    },
    {
      title: 'Adaptive Outerwear',
      type: 'Permanent',
      disability: 'Arthritis or limited grip',
      description: 'Large pull tabs and smooth closures designed for independence and comfort.',
      image: this.createImage('Outerwear', '#fff2d8', '#c37b12'),
      accent: '#fff2d8',
    },
  ];

  featuredCategories: FeaturedCategory[] = [
    {
      title: 'Adaptive essentials',
      subtitle: 'Everyday ease',
      description: 'Pieces that make dressing simpler, faster, and more comfortable from morning to evening.',
    },
    {
      title: 'Recovery support',
      subtitle: 'Short-term comfort',
      description: 'Gentle shapes and adaptable features that support healing and changing mobility needs.',
    },
    {
      title: 'Daily confidence',
      subtitle: 'Long-term independence',
      description: 'Thoughtful details that help people feel secure, stylish, and fully themselves.',
    },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Amira',
      role: 'Post-surgery recovery',
      quote: 'The fit felt calm and practical from day one. I barely had to think about getting dressed.',
    },
    {
      name: 'Daniel',
      role: 'Adaptive daily wear',
      quote: 'The details are so simple but they make everything easier. It feels designed with real life in mind.',
    },
    {
      name: 'Sofia',
      role: 'Parent of a young user',
      quote: 'I love how thoughtful the pieces are. They make confidence feel possible every single day.',
    },
  ];

  samplePerson = {
    name: 'Franceline',
    role: 'Satisfied LEXON user',
    story:
      'Franceline uses an adaptive outfit that combines easy dressing, soft textures, and thoughtful movement support during her day.',
    needs: ['Easy dressing', 'Low-friction seams', 'Temperature control'],
    result: 'She can start the day with confidence and stay comfortable from morning to evening.',
  };

  private createImage(title: string, background: string, accent: string): string {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="480" height="320" viewBox="0 0 480 320">
        <rect width="480" height="320" rx="32" fill="${background}" />
        <rect x="118" y="84" width="244" height="172" rx="28" fill="#ffffff" opacity="0.92" />
        <rect x="160" y="116" width="160" height="92" rx="24" fill="${accent}" opacity="0.95" />
        <path d="M182 206c18-14 34-20 58-20s40 6 58 20" stroke="#274c77" stroke-width="10" stroke-linecap="round" fill="none" />
        <path d="M207 126c10-28 24-44 44-44 21 0 35 16 44 44" stroke="#123a62" stroke-width="10" stroke-linecap="round" fill="none" />
        <circle cx="210" cy="144" r="6" fill="#fff" />
        <circle cx="270" cy="144" r="6" fill="#fff" />
        <rect x="162" y="216" width="154" height="18" rx="9" fill="#5d6b7a" opacity="0.65" />
        <text x="240" y="284" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="700" fill="#1f2a44">${title}</text>
      </svg>`;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }
}
