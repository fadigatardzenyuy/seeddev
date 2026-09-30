import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="contact-page">
      <div class="contact-card">
        <p class="eyebrow">Get in touch</p>
        <h2>Contact</h2>
        <p class="intro">If you have any questions or need assistance, please reach out to us. We're here to help!</p>

        <ul class="contact-list">
          <li><strong>Email:</strong> elumba237@gmail.com</li>
          <li><strong>Contact:</strong> 672821189</li>
          <li><strong>Address:</strong> Bamenda, cameroon</li>
        </ul>
        <div class="qr-area">
          <div class="qr-wrapper">
            <img
              alt="LEXON contact QR"
              class="qr-image"
              src="https://chart.googleapis.com/chart?chs=360x360&cht=qr&chld=H|1&chl=Email%3A%20elumba237%40gmail.com%0AContact%3A%20672821189%0AAddress%3A%20Bmaenda%2C%20camerron"
            />
          </div>
          <p class="qr-caption">Scan to save contact</p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .contact-page {
      padding: 3rem 1.5rem 4rem;
      display: flex;
      justify-content: center;
    }

    .contact-card {
      max-width: 760px;
      width: 100%;
      background: #fff;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 6px 24px rgba(16,24,40,0.06);
    }

    .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-size: 0.8rem;
      color: #4f7bb8;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.75rem;
      margin: 0 0 0.5rem;
      color: #14213d;
    }

    .intro {
      color: #4d5870;
      margin-bottom: 1rem;
    }

    .contact-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 0.5rem;
    }

    .contact-list li strong {
      display: inline-block;
      width: 7rem;
    }

    .qr-area {
      margin-top: 1.25rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .qr-wrapper {
      width: 220px;
      height: 220px;
      flex: 0 0 220px;
    }

    .qr-image {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 14px;
      background: #fff;
    }

    .qr-caption {
      color: #4d5870;
      font-size: 0.95rem;
    }
    `
  ],
})
export class ContactComponent {}
