---
layout: default
title: Support
description: Get help with our tools, share feedback, or connect with our support team. We're here to help you on your spiritual wellness journey.
permalink: /support/
---

<div class="support-page celestial-bg">

  <!-- Hero Section -->
  <section class="support-hero section--large">
    <div class="container">
      <div class="hero-content text-center animate-fade-in-up">
        <div class="section-badge">WE'RE HERE FOR YOU</div>
        <h1 class="hero-title">
          Support & <span class="text-golden">Community Care</span>
        </h1>

        <p class="hero-subtitle">
          Whether you need help with our tools, want to share feedback, or just need 
          someone to listen, we're here to support you on your journey.
        </p>
      </div>
    </div>
  </section>

  <!-- Support Options -->
  <section class="support-options section">
    <div class="container">
      <div class="options-grid">
        <div class="option-card magnolia-card animate-fade-in-up">
          <div class="option-icon">📧</div>
          <h3>Email Support</h3>
          <p>Reach out for technical help, questions about our tools, or general inquiries.</p>
          <a href="mailto:support@midnightmagnolia.com" class="btn btn--ghost">
            Email Us
          </a>
        </div>

        <div class="option-card magnolia-card animate-fade-in-up" style="animation-delay: 0.1s;">
          <div class="option-icon">💬</div>
          <h3>Community Forum</h3>
          <p>Connect with other community members and get peer support for your journey.</p>
          <a href="{{ site.baseurl }}/healing-circle/" class="btn btn--ghost">
            Join Discussion
          </a>
        </div>

        <div class="option-card magnolia-card animate-fade-in-up" style="animation-delay: 0.2s;">
          <div class="option-icon">📚</div>
          <h3>Resource Library</h3>
          <p>Access our collection of guides, tutorials, and helpful resources.</p>
          <a href="#resources" class="btn btn--ghost">
            Browse Resources
          </a>
        </div>

        <div class="option-card magnolia-card animate-fade-in-up" style="animation-delay: 0.3s;">
          <div class="option-icon">🆘</div>
          <h3>Crisis Support</h3>
          <p>If you're in crisis, please reach out to professional crisis support services.</p>
          <a href="#crisis" class="btn btn--ghost">
            Crisis Resources
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form -->
  <section class="contact-form section section--dark">
    <div class="container">
      <div class="text-center mb-4">
        <h2 class="animate-fade-in-up">Send Us a Message</h2>
        <p class="animate-fade-in-up" style="animation-delay: 0.1s;">
          We'd love to hear from you. Share your thoughts, questions, or feedback.
        </p>
      </div>

      <form class="support-form animate-fade-in-up" style="animation-delay: 0.2s;">
        <div class="form-grid">
          <div class="form-group">
            <label for="support-name">Name</label>
            <input type="text" id="support-name" name="name" required>
          </div>
          
          <div class="form-group">
            <label for="support-email">Email</label>
            <input type="email" id="support-email" name="email" required>
          </div>
        </div>

        <div class="form-group">
          <label for="support-subject">Subject</label>
          <select id="support-subject" name="subject" required>
            <option value="">Select a topic</option>
            <option value="technical">Technical Support</option>
            <option value="feedback">Feedback & Suggestions</option>
            <option value="accessibility">Accessibility Issue</option>
            <option value="community">Community Concern</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="support-message">Message</label>
          <textarea id="support-message" name="message" rows="6" required></textarea>
        </div>

        <button type="submit" class="btn btn--primary">
          Send Message
        </button>
      </form>
    </div>
  </section>

</div>

<style>
.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.option-card {
  text-align: center;
  padding: 3rem 2rem;
}

.option-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.option-card h3 {
  color: var(--color-golden-yellow);
  margin-bottom: 1rem;
}

.support-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-golden-yellow);
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-pure-white);
  font-size: 1.4rem;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>