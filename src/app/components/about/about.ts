import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="about-page">
      <div class="hero-panel">
        <div class="hero-copy">
          <p class="eyebrow">About LEXON</p>
          <h1>Adaptive clothing, designed with dignity and independence in mind.</h1>
          <p>
            LEXON is a thoughtful platform that reimagines everyday apparel for people navigating
            temporary or permanent limitations—from post-surgery recovery to cerebral palsy, arthritis,
            pregnancy, and other daily challenges. The goal is simple: make clothing feel easier to wear,
            easier to live in, and easier to love.
          </p>
          <div class="hero-actions">
            <a routerLink="/products" class="primary-btn">Explore the collection</a>
            <a routerLink="/contact" class="ghost-btn">Discuss the vision</a>
          </div>
        </div>

        <div class="hero-card">
          <p class="card-label">Project vision</p>
          <h3>Clothing that adapts to life, not the other way around.</h3>
          <p>
            We present accessibility as part of great design—elegant, intuitive, and practical for the
            realities of everyday life.
          </p>
          <ul>
            <li>Soft seams and low-friction closures</li>
            <li>Flexible fit for changing body needs</li>
            <li>Thoughtful styling that feels calm and modern</li>
          </ul>
        </div>
      </div>

      <div class="story-grid">
        <article class="panel">
          <h2>Project purpose</h2>
          <p>
            LEXON is designed as an inclusive digital experience for adaptive fashion. It helps users find
            garments that support real-life needs while giving designers a clearer way to present comfort,
            usability, and emotional reassurance in one place.
          </p>
          <p>
            Instead of treating accessibility as an add-on, the project places it at the center of the
            brand story, making the experience feel humane, confident, and modern.
          </p>
        </article>

        <article class="panel">
          <h2>Proof of value</h2>
          <p>
            The current experience shows how the vision can already be expressed through a complete and polished
            interface: story-led content, a clear navigation system, product-focused pages, and a foundation
            that is ready for future growth.
          </p>
          <div class="proof-points">
            <div class="proof-card">
              <strong>01</strong>
              <span>Clear user-centered storytelling</span>
            </div>
            <div class="proof-card">
              <strong>02</strong>
              <span>Adaptive product stories grounded in real-life needs</span>
            </div>
            <div class="proof-card">
              <strong>03</strong>
              <span>A smooth experience built as a strong foundation for future development</span>
            </div>
          </div>
        </article>
      </div>

      <div class="impact-strip">
        <div>
          <h3>Our mission</h3>
          <p>To make everyday clothing feel more supportive, more inclusive, and more empowering for people with changing needs.</p>
        </div>
        <div>
          <h3>What makes it different</h3>
          <p>LEXON combines comfort, aesthetics, and accessibility in one experience so the product feels both practical and beautiful.</p>
        </div>
        <div>
          <h3>Where it can grow</h3>
          <p>With more user insight and product data, this platform can expand into a fuller shopping and education experience.</p>
        </div>
      </div>

      <section class="vision-section">
        <div class="vision-copy">
          <p class="eyebrow">Our vision</p>
          <h2>A world where adaptive clothing is a standard, not an exception.</h2>
          <p>
            We imagine a future where comfort, dignity, and thoughtful design are available to everyone,
            regardless of age, ability, or stage of life. LEXON is building toward that future by creating
            fashion that feels intuitive, inclusive, and deeply human.
          </p>
        </div>
      </section>
    </section>
  `,
  styles: [`
    .about-page {
      padding: 2.5rem 1.25rem 4rem;
      max-width: 1200px;
      margin: 0 auto;
      color: #14213d;
    }

    .hero-panel {
      display: grid;
      grid-template-columns: 1.3fr 0.9fr;
      gap: 1.5rem;
      background: linear-gradient(135deg, #f8fcff 0%, #eaf5ff 100%);
      border: 1px solid rgba(79, 123, 184, 0.2);
      border-radius: 28px;
      padding: 2rem;
      box-shadow: 0 20px 50px rgba(20, 33, 61, 0.08);
      margin-bottom: 1.5rem;
    }

    .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.24em;
      font-size: 0.8rem;
      color: #4f7bb8;
      font-weight: 800;
      margin-bottom: 0.85rem;
    }

    h1 {
      font-size: clamp(2rem, 3vw, 2.8rem);
      line-height: 1.15;
      margin: 0 0 1rem;
      color: #0f2a4d;
    }

    .hero-copy p {
      font-size: 1.04rem;
      line-height: 1.8;
      color: #4d5870;
      margin: 0;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.85rem;
      margin-top: 1.3rem;
    }

    .primary-btn,
    .ghost-btn {
      text-decoration: none;
      font-weight: 700;
      padding: 0.8rem 1.15rem;
      border-radius: 999px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .primary-btn {
      background: #4f7bb8;
      color: #fff;
      box-shadow: 0 10px 24px rgba(79, 123, 184, 0.25);
    }

    .ghost-btn {
      background: #fff;
      color: #244f83;
      border: 1px solid rgba(79, 123, 184, 0.2);
    }

    .primary-btn:hover,
    .ghost-btn:hover {
      transform: translateY(-2px);
    }

    .hero-card {
      background: #ffffff;
      border-radius: 22px;
      padding: 1.4rem;
      box-shadow: inset 0 0 0 1px rgba(79, 123, 184, 0.12);
    }

    .card-label {
      font-size: 0.78rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #4f7bb8;
      font-weight: 800;
      margin-bottom: 0.7rem;
    }

    .hero-card h3 {
      margin: 0 0 0.7rem;
      font-size: 1.35rem;
      color: #183b63;
    }

    .hero-card p,
    .hero-card li,
    .panel p {
      color: #4d5870;
      line-height: 1.75;
    }

    .hero-card ul {
      padding-left: 1rem;
      margin: 0.9rem 0 0;
    }

    .story-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
    }

    .panel {
      background: #ffffff;
      border-radius: 22px;
      padding: 1.4rem;
      box-shadow: 0 12px 35px rgba(20, 33, 61, 0.06);
      border: 1px solid rgba(79, 123, 184, 0.16);
    }

    .panel h2 {
      font-size: 1.35rem;
      color: #183b63;
      margin-top: 0;
      margin-bottom: 0.75rem;
    }

    .proof-points {
      display: grid;
      gap: 0.7rem;
      margin-top: 1rem;
    }

    .proof-card {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: #f2f8ff;
      border-radius: 14px;
      padding: 0.8rem 0.9rem;
      color: #183b63;
      font-size: 0.95rem;
    }

    .proof-card strong {
      color: #4f7bb8;
      font-size: 1rem;
      min-width: 2rem;
    }

    .impact-strip {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
      margin-top: 1.25rem;
    }

    .impact-strip > div {
      background: linear-gradient(135deg, #ffffff 0%, #f2f8ff 100%);
      border-radius: 20px;
      padding: 1.15rem;
      border: 1px solid rgba(79, 123, 184, 0.14);
      box-shadow: 0 10px 24px rgba(20, 33, 61, 0.05);
    }

    .impact-strip h3 {
      margin: 0 0 0.45rem;
      color: #183b63;
      font-size: 1.05rem;
    }

    .impact-strip p {
      margin: 0;
      color: #4d5870;
      line-height: 1.7;
    }

    .vision-section {
      margin-top: 1.25rem;
      background: linear-gradient(135deg, #0f2a4d 0%, #244f83 100%);
      border-radius: 24px;
      padding: 1.6rem;
      color: #fff;
      box-shadow: 0 16px 36px rgba(15, 42, 77, 0.2);
    }

    .vision-copy h2 {
      font-size: clamp(1.5rem, 2.3vw, 2rem);
      margin: 0 0 0.75rem;
      color: #fff;
    }

    .vision-copy p {
      margin: 0;
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.8;
      max-width: 780px;
    }

    @media (max-width: 900px) {
      .impact-strip {
        grid-template-columns: 1fr;
      }
      .hero-panel,
      .story-grid {
        grid-template-columns: 1fr;
      }
    }
  `],
})
export class AboutComponent {}
