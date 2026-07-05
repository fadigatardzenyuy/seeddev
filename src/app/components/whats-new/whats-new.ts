import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-whats-new',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './whats-new.html',
  styleUrl: './whats-new.css'
})
export class WhatsNew {
  suggestion: string = '';

  updates = [
    {
      title: 'New Feature Launch',
      description: 'We added a new dashboard for tracking your farm data in real time.'
    },
    {
      title: 'Performance Improvements',
      description: 'The app now loads 40% faster across all devices.'
    },
    {
      title: 'Bug Fixes',
      description: 'Fixed several issues reported by our early users.'
    }
  ];
}