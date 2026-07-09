import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="page-shell">
      <p class="eyebrow">Get in touch</p>
      <h2>Contact</h2>
      <p>Use this area for a contact form, support details, or a simple call-to-action for the next step.</p>
    </section>
  `,
  styles: [`
    .page-shell {
      padding: 3rem 1.5rem 4rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-size: 0.8rem;
      color: #4f7bb8;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }

    h2 {
      font-size: 2rem;
      margin: 0 0 0.75rem;
      color: #14213d;
    }

    p {
      color: #4d5870;
      font-size: 1.05rem;
      line-height: 1.7;
    }
  `],
})
export class ContactComponent {}
