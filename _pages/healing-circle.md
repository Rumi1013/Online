---
layout: default
title: Healing Circle
description: Join our sacred community of souls committed to healing, growth, and supporting each other's spiritual journeys.
permalink: /healing-circle/
---

<div class="healing-circle-page celestial-bg">

  <!-- Hero Section -->
  <section class="circle-hero section--large">
    <div class="container">
      <div class="hero-content text-center animate-fade-in-up">
        <div class="section-badge">SACRED COMMUNITY</div>
        <h1 class="hero-title">
          Welcome to Our<br>
          <span class="text-golden">Healing Circle</span>
        </h1>

        <p class="hero-subtitle">
          A safe, supportive community where we share our journeys, celebrate our growth, 
          and hold space for each other's healing. Everyone is welcome exactly as they are.
        </p>

        <div class="hero-cta">
          <a href="#join-circle" class="btn btn--primary">
            🌙 Join Our Circle
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- What to Expect Section -->
  <section class="expectations section">
    <div class="container">
      <div class="text-center mb-4">
        <h2 class="animate-fade-in-up">What to Expect</h2>
        <p class="animate-fade-in-up" style="animation-delay: 0.1s;">
          Our healing circle is a space of radical acceptance, gentle accountability, and mutual support.
        </p>
      </div>

      <div class="expectations-grid">
        <div class="expectation-card magnolia-card animate-fade-in-up" style="animation-delay: 0.2s;">
          <h3>🌙 Monthly Gatherings</h3>
          <p>Virtual and in-person gatherings for sharing, ritual, and community connection.</p>
        </div>

        <div class="expectation-card magnolia-card animate-fade-in-up" style="animation-delay: 0.3s;">
          <h3>💬 Safe Sharing Space</h3>
          <p>A private community where you can share your journey, ask questions, and receive support.</p>
        </div>

        <div class="expectation-card magnolia-card animate-fade-in-up" style="animation-delay: 0.4s;">
          <h3>🎁 Exclusive Resources</h3>
          <p>Access to special tools, guided meditations, and healing resources created just for our circle.</p>
        </div>

        <div class="expectation-card magnolia-card animate-fade-in-up" style="animation-delay: 0.5s;">
          <h3>🤝 Peer Support</h3>
          <p>Connect with others who understand your journey and can offer encouragement and wisdom.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Join Section -->
  <section id="join-circle" class="join-section section section--accent">
    <div class="container text-center">
      <div class="animate-fade-in-up">
        <h2>Ready to Join?</h2>
        <p>
          Our healing circle is free and open to all who are committed to their own 
          healing and supporting others on their journeys.
        </p>
        
        <form class="join-form" action="#" method="post">
          <div class="form-group">
            <label for="circle-email" class="visually-hidden">Email Address</label>
            <input type="email" id="circle-email" name="email" placeholder="Enter your email" required>
          </div>
          <button type="submit" class="btn btn--primary">
            Join Our Sacred Circle
          </button>
        </form>
      </div>
    </div>
  </section>

</div>

<style>
.expectations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.expectation-card {
  text-align: center;
  padding: 2.5rem 2rem;
}

.expectation-card h3 {
  color: var(--color-golden-yellow);
  margin-bottom: 1rem;
}

.join-form {
  max-width: 400px;
  margin: 2rem auto 0;
  display: flex;
  gap: 1rem;
}

.join-form .form-group {
  flex: 1;
}

.join-form input {
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-pure-white);
}

.join-form input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .join-form {
    flex-direction: column;
  }
}
</style>