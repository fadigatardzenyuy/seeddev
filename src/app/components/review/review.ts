import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ReviewItem {
  name: string;
  role: string;
  rating: number;
  message: string;
}

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="review-page">
      <div class="review-header">
        <p class="eyebrow">Customer feedback</p>
        <h1>Share your review</h1>
        <p>
          We want to hear what worked for you and how we can make adaptive clothing even
          easier to love. Your reviews help us improve comfort, fit, and everyday usability.
        </p>
      </div>

      <div class="review-summary">
        <div>
          <p class="summary-label">Average rating</p>
          <div class="rating-pill">4.9 / 5</div>
        </div>
        <div>
          <p class="summary-label">Trusted by people who value comfort</p>
          <p>Real feedback is the heart of our design process—whether for temporary support or everyday wear.</p>
        </div>
      </div>

      <div class="review-grid">
        <article class="review-card" *ngFor="let review of reviews">
          <div class="review-meta">
            <strong>{{ review.name }}</strong>
            <span>{{ review.role }}</span>
          </div>
          <div class="review-stars">{{ '★'.repeat(review.rating) }}{{ '☆'.repeat(5 - review.rating) }}</div>
          <p>{{ review.message }}</p>
        </article>
      </div>

      <div class="review-form-card">
        <div>
          <p class="eyebrow">Submit a review</p>
          <h2>Tell us about your experience</h2>
          <p>
            Send your thoughts by email, or get in touch through the contact page. We read every review and use it to make
            LEXON more helpful for everyone.
          </p>
        </div>
        <div class="contact-link">
          <a routerLink="/contact">Go to contact</a>
          <a href="mailto:elumba237@gmail.com">Email a review</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .review-page {
      padding: 3rem 1.5rem 4rem;
      max-width: 1100px;
      margin: 0 auto;
      color: #14213d;
    }

    .review-header {
      margin-bottom: 2rem;
    }

    .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.22em;
      font-size: 0.8rem;
      color: #4f7bb8;
      font-weight: 700;
      margin-bottom: 0.85rem;
    }

    h1 {
      font-size: clamp(2rem, 2.5vw, 3rem);
      margin: 0 0 1rem;
      color: #0f2a4d;
    }

    .review-header p {
      max-width: 700px;
      line-height: 1.75;
      color: #4d5870;
      margin: 0;
    }

    .review-summary {
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 1rem;
      margin-bottom: 2rem;
      padding: 1.5rem;
      border-radius: 24px;
      background: #eef6ff;
      border: 1px solid rgba(79, 123, 184, 0.18);
    }

    .summary-label {
      margin: 0 0 0.4rem;
      color: #4f7bb8;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      font-size: 0.82rem;
    }

    .rating-pill {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 1rem 0;
      border-radius: 16px;
      background: #ffffff;
      font-size: 1.4rem;
      font-weight: 700;
      color: #1e3b67;
      box-shadow: 0 10px 24px rgba(20, 33, 61, 0.08);
    }

    .review-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .review-card {
      background: #ffffff;
      border-radius: 24px;
      padding: 1.5rem;
      border: 1px solid rgba(79, 123, 184, 0.12);
      box-shadow: 0 18px 40px rgba(20, 33, 61, 0.05);
    }

    .review-meta {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      margin-bottom: 1rem;
    }

    .review-meta strong {
      font-size: 1rem;
      color: #14213d;
    }

    .review-meta span {
      color: #4d5870;
      font-size: 0.95rem;
    }

    .review-stars {
      color: #d48d12;
      margin-bottom: 1rem;
      font-size: 1rem;
    }

    .review-card p {
      margin: 0;
      color: #4d5870;
      line-height: 1.75;
      font-size: 0.98rem;
    }

    .review-form-card {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 1.5rem;
      padding: 2rem;
      border-radius: 24px;
      background: #1e3b67;
      color: #fff;
    }

    .review-form-card h2 {
      margin: 0 0 1rem;
      font-size: 1.75rem;
    }

    .review-form-card p {
      margin: 0;
      line-height: 1.75;
      max-width: 520px;
      color: rgba(255, 255, 255, 0.82);
    }

    .contact-link {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      align-items: start;
    }

    .contact-link a {
      color: #0f2a4d;
      background: #fff;
      padding: 0.85rem 1.2rem;
      border-radius: 999px;
      text-decoration: none;
      font-weight: 700;
      transition: transform 0.2s ease;
    }

    .contact-link a:hover {
      transform: translateY(-1px);
    }

    @media (max-width: 1024px) {
      .review-summary,
      .review-form-card {
        grid-template-columns: 1fr;
      }

      .review-grid {
        grid-template-columns: 1fr;
      }
    }
  `],
})
export class ReviewComponent {
  reviews: ReviewItem[] = [
    {
      name: 'Amira',
      role: 'Post-surgery recovery',
      rating: 5,
      message: 'The adaptive fit felt calming from the first wear. I never expected clothing to feel this easy and comfortable while healing.',
    },
    {
      name: 'Daniel',
      role: 'Daily mobility user',
      rating: 5,
      message: 'The details are thoughtful without being loud. It made dressing feel simple again, and that mattered the most.',
    },
    {
      name: 'Sofia',
      role: 'Care partner',
      rating: 4,
      message: 'LEXON made it much easier to support someone with changing needs. I can see this being helpful for lots of families.',
    },
  ];
}
