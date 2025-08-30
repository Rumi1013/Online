/**
 * MIDNIGHT MAGNOLIA THEME
 * Celestial Animations & Interactive Elements
 * Spiritual wellness theme with mystical animations
 */

(function() {
  'use strict';

  // Theme namespace
  window.MidnightMagnolia = window.MidnightMagnolia || {};

  /**
   * Celestial Background Animation System
   */
  class CelestialAnimations {
    constructor() {
      this.stars = [];
      this.moonPhases = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
      this.currentPhase = 0;
      this.init();
    }

    init() {
      this.createStarField();
      this.initFloatingElements();
      this.initScrollAnimations();
      this.initMoonPhaseToggle();
      this.initProductCardAnimations();
      this.initParallaxEffects();
      this.optimizeSVGs();
      this.initEnhancedComponents();
    }

    /**
     * Initialize enhanced mystical components
     */
    initEnhancedComponents() {
      // Initialize enhanced moon phases
      if (document.querySelector('.moon-phase-display')) {
        this.enhancedMoonPhases = new EnhancedMoonPhases();
      }

      // Initialize zodiac rotations
      if (document.querySelector('.zodiac-constellation')) {
        this.zodiacRotations = new ZodiacRotations();
      }

      // Initialize advanced petals
      if (document.querySelector('.floating-petals')) {
        this.advancedPetals = new AdvancedPetals();
      }

      // Initialize energy orbs
      if (document.querySelector('.energy-orbs')) {
        this.energyOrbs = new EnergyOrbs();
      }

      // Initialize UI component animations
      this.initUIComponentAnimations();
    }

    /**
     * Initialize animations for various UI components
     */
    initUIComponentAnimations() {
      this.initButtonAnimations();
      this.initFormAnimations();
      this.initScrollAnimations();
      this.initHoverEffects();
    }

    /**
     * Initialize mystical button animations
     */
    initButtonAnimations() {
      const buttons = document.querySelectorAll('.btn, button, .button');

      buttons.forEach((button, index) => {
        button.setAttribute('data-button-magic', index);

        button.addEventListener('mouseenter', () => {
          this.createButtonMagicEffect(button);
        });

        button.addEventListener('mouseleave', () => {
          this.removeButtonMagicEffect(button);
        });

        button.addEventListener('click', () => {
          this.createButtonClickEffect(button);
        });
      });
    }

    /**
     * Create magical effect on button hover
     */
    createButtonMagicEffect(button) {
      // Add energy particles
      const particles = document.createElement('div');
      particles.className = 'button-magic-particles';

      for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.className = 'button-particle';
        particle.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: rgba(246, 213, 92, 0.8);
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: buttonParticleSparkle 0.8s ease-out forwards;
          animation-delay: ${i * 0.1}s;
        `;
        particles.appendChild(particle);
      }

      button.style.position = 'relative';
      button.appendChild(particles);

      // Add mystical glow
      button.style.boxShadow = '0 0 20px rgba(246, 213, 92, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
    }

    /**
     * Remove button magic effect
     */
    removeButtonMagicEffect(button) {
      const particles = button.querySelector('.button-magic-particles');
      if (particles) particles.remove();

      // Reset shadow
      button.style.boxShadow = '';
    }

    /**
     * Create button click effect
     */
    createButtonClickEffect(button) {
      const ripple = document.createElement('div');
      ripple.className = 'button-click-ripple';
      ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(246, 213, 92, 0.6) 0%, transparent 70%);
        animation: buttonRippleExpand 0.5s ease-out forwards;
        pointer-events: none;
        z-index: 5;
      `;

      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);

      // Add click energy burst
      this.createButtonEnergyBurst(button);
    }

    /**
     * Create energy burst on button click
     */
    createButtonEnergyBurst(button) {
      for (let i = 0; i < 4; i++) {
        const burst = document.createElement('div');
        burst.className = 'button-energy-burst';
        burst.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(246, 213, 92, 0.9);
          top: 50%;
          left: 50%;
          animation: buttonEnergyBurst ${0.3 + Math.random() * 0.3}s ease-out forwards;
          transform: rotate(${i * 90}deg) translate(15px);
        `;

        button.appendChild(burst);
        setTimeout(() => burst.remove(), 600);
      }
    }

    /**
     * Initialize form field animations
     */
    initFormAnimations() {
      const formFields = document.querySelectorAll('input, textarea, select');

      formFields.forEach(field => {
        field.addEventListener('focus', () => {
          this.createFormFocusEffect(field);
        });

        field.addEventListener('blur', () => {
          this.removeFormFocusEffect(field);
        });

        field.addEventListener('input', () => {
          this.createFormInputEffect(field);
        });
      });
    }

    /**
     * Create form focus effect
     */
    createFormFocusEffect(field) {
      const container = field.closest('.form-group') || field.parentElement;
      if (!container) return;

      container.classList.add('form-field-focused');

      // Add mystical border glow
      field.style.boxShadow = '0 0 0 3px rgba(246, 213, 92, 0.2)';
      field.style.borderColor = 'rgba(246, 213, 92, 0.5)';
    }

    /**
     * Remove form focus effect
     */
    removeFormFocusEffect(field) {
      const container = field.closest('.form-group') || field.parentElement;
      if (container) {
        container.classList.remove('form-field-focused');
      }

      field.style.boxShadow = '';
      field.style.borderColor = '';
    }

    /**
     * Create form input effect
     */
    createFormInputEffect(field) {
      if (field.value.length > 0) {
        field.classList.add('form-field-has-content');

        // Add subtle particle effect for typing
        if (Math.random() > 0.7) { // Only sometimes for performance
          this.createTypingParticle(field);
        }
      } else {
        field.classList.remove('form-field-has-content');
      }
    }

    /**
     * Create typing particle effect
     */
    createTypingParticle(field) {
      const particle = document.createElement('div');
      particle.className = 'typing-particle';
      particle.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        border-radius: 50%;
        background: rgba(246, 213, 92, 0.6);
        pointer-events: none;
        animation: typingParticleFade 0.5s ease-out forwards;
      `;

      const rect = field.getBoundingClientRect();
      const caretPosition = field.selectionStart || field.value.length;
      const textWidth = this.getTextWidth(field.value.substring(0, caretPosition), field);

      particle.style.left = `${textWidth + 10}px`;
      particle.style.top = '50%';
      particle.style.transform = 'translateY(-50%)';

      field.style.position = 'relative';
      field.appendChild(particle);

      setTimeout(() => particle.remove(), 500);
    }

    /**
     * Get text width for caret positioning
     */
    getTextWidth(text, element) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = window.getComputedStyle(element).font;
      return context.measureText(text).width;
    }

    /**
     * Initialize scroll-triggered animations
     */
    initScrollAnimations() {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      animatedElements.forEach(element => {
        observer.observe(element);
      });
    }

    /**
     * Initialize general hover effects
     */
    initHoverEffects() {
      const hoverElements = document.querySelectorAll('.hover-mystical');

      hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          element.classList.add('mystical-hover-active');
        });

        element.addEventListener('mouseleave', () => {
          element.classList.remove('mystical-hover-active');
        });
      });
    }

    /**
     * Create animated star field
     */
    createStarField() {
      const starContainer = document.createElement('div');
      starContainer.className = 'celestial-stars';
      starContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
      `;

      // Create multiple layers of stars
      for (let layer = 0; layer < 3; layer++) {
        const layerDiv = document.createElement('div');
        layerDiv.className = `star-layer star-layer-${layer}`;

        for (let i = 0; i < 50; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          star.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: twinkle ${Math.random() * 4 + 2}s ease-in-out infinite alternate;
          `;

          layerDiv.appendChild(star);
        }

        starContainer.appendChild(layerDiv);
      }

      document.body.appendChild(starContainer);
      this.animateStarLayers();
    }

    /**
     * Animate star layers with different speeds
     */
    animateStarLayers() {
      const layers = document.querySelectorAll('.star-layer');
      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.5;
        layer.style.animation = `starDrift ${20 / speed}s linear infinite`;
      });
    }

    /**
     * Initialize floating magnolia elements
     */
    initFloatingElements() {
      const floatingElements = document.querySelectorAll('.animate-float');
      floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
        element.style.animationDuration = `${3 + Math.random() * 2}s`;
      });
    }

    /**
     * Initialize scroll-triggered animations
     */
    initScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe elements for animation
      const animateElements = document.querySelectorAll(
        '.magnolia-card, .product-card, .section h2, .section h3'
      );

      animateElements.forEach(element => {
        observer.observe(element);
      });
    }

    /**
     * Initialize moon phase toggle for dark/light mode
     */
    initMoonPhaseToggle() {
      const moonToggle = document.querySelector('.moon-toggle');
      if (!moonToggle) {
        this.createMoonToggle();
      }

      document.addEventListener('click', (e) => {
        if (e.target.closest('.moon-toggle')) {
          this.toggleThemeMode();
        }
      });
    }

    /**
     * Create moon phase toggle button
     */
    createMoonToggle() {
      const toggle = document.createElement('button');
      toggle.className = 'moon-toggle';
      toggle.innerHTML = this.moonPhases[this.currentPhase];
      toggle.setAttribute('aria-label', 'Toggle theme mode');
      toggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(247, 243, 233, 0.1);
        border: 1px solid rgba(247, 243, 233, 0.2);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      `;

      document.body.appendChild(toggle);
    }

    /**
     * Toggle between theme modes
     */
    toggleThemeMode() {
      this.currentPhase = (this.currentPhase + 1) % this.moonPhases.length;
      const moonToggle = document.querySelector('.moon-toggle');

      if (moonToggle) {
        moonToggle.innerHTML = this.moonPhases[this.currentPhase];
        moonToggle.style.transform = 'scale(1.2)';
        setTimeout(() => {
          moonToggle.style.transform = 'scale(1)';
        }, 200);
      }

      // Add theme mode logic here
      document.body.classList.toggle('light-mode');
      this.updateThemeColors();
    }

    /**
     * Update theme colors based on mode
     */
    updateThemeColors() {
      const isLightMode = document.body.classList.contains('light-mode');
      const root = document.documentElement;

      if (isLightMode) {
        root.style.setProperty('--color-base-text', '45, 55, 72');
        root.style.setProperty('--color-base-background-1', '247, 243, 233');
        root.style.setProperty('--celestial-gradient',
          'linear-gradient(135deg, #f7f3e9 0%, #e8dcc0 50%, #d69e2e 100%)');
      } else {
        root.style.setProperty('--color-base-text', '255, 255, 255');
        root.style.setProperty('--color-base-background-1', '26, 26, 46');
        root.style.setProperty('--celestial-gradient',
          'linear-gradient(135deg, #1a1a2e 0%, #2d3748 50%, #9f7aea 100%)');
      }
    }

    /**
     * Initialize product card hover animations
     */
    initProductCardAnimations() {
      const productCards = document.querySelectorAll('.product-card');

      productCards.forEach((card, index) => {
        // Add mystical attributes for enhanced animations
        card.setAttribute('data-mystical-index', index);
        card.setAttribute('data-mystical-energy', this.getRandomEnergy());

        card.addEventListener('mouseenter', () => {
          this.createMagicalParticles(card);
          this.activateCardEnergy(card);
          this.showZodiacAffinity(card);
        });

        card.addEventListener('mouseleave', () => {
          this.removeMagicalParticles(card);
          this.deactivateCardEnergy(card);
          this.hideZodiacAffinity(card);
        });

        card.addEventListener('click', () => {
          this.createEnergyRipple(card);
        });

        // Add scroll-triggered animations
        this.initCardScrollAnimations(card);
      });
    }

    /**
     * Get random mystical energy type for card
     */
    getRandomEnergy() {
      const energies = ['solar', 'lunar', 'cosmic', 'terrestrial', 'celestial'];
      return energies[Math.floor(Math.random() * energies.length)];
    }

    /**
     * Activate mystical energy on card hover
     */
    activateCardEnergy(card) {
      const energy = card.getAttribute('data-mystical-energy');
      card.classList.add(`energy-${energy}`);

      // Create energy field
      const energyField = document.createElement('div');
      energyField.className = 'card-energy-field';
      energyField.style.cssText = `
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border-radius: inherit;
        background: radial-gradient(circle, rgba(246, 213, 92, 0.1) 0%, transparent 70%);
        animation: energyFieldPulse 2s ease-in-out infinite;
        pointer-events: none;
        z-index: -1;
      `;

      card.style.position = 'relative';
      card.appendChild(energyField);

      // Add energy particles
      this.createEnergyParticles(card);
    }

    /**
     * Create energy particles around card
     */
    createEnergyParticles(card) {
      const particleCount = 6;
      const particles = document.createElement('div');
      particles.className = 'card-energy-particles';

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'energy-particle';
        particle.style.cssText = `
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(246, 213, 92, 0.8);
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: energyParticleOrbit 3s ease-in-out infinite;
          animation-delay: ${i * 0.2}s;
        `;
        particles.appendChild(particle);
      }

      card.appendChild(particles);
    }

    /**
     * Show zodiac affinity for product
     */
    showZodiacAffinity(card) {
      const zodiacSigns = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
      const randomSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];

      const affinity = document.createElement('div');
      affinity.className = 'zodiac-affinity';
      affinity.innerHTML = `
        <div class="affinity-sign">${randomSign}</div>
        <div class="affinity-text">Perfect for your sign</div>
      `;
      affinity.style.cssText = `
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(10, 25, 47, 0.9);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(246, 213, 92, 0.3);
        border-radius: 8px;
        padding: 0.5rem;
        text-align: center;
        font-size: 0.8rem;
        opacity: 0;
        animation: affinityFadeIn 0.5s ease-out forwards;
        pointer-events: none;
        z-index: 10;
      `;

      card.appendChild(affinity);
    }

    /**
     * Create energy ripple effect on click
     */
    createEnergyRipple(card) {
      const ripple = document.createElement('div');
      ripple.className = 'energy-ripple';
      ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(246, 213, 92, 0.4) 0%, transparent 70%);
        animation: energyRippleExpand 0.8s ease-out forwards;
        pointer-events: none;
        z-index: 5;
      `;

      card.appendChild(ripple);
      setTimeout(() => ripple.remove(), 800);
    }

    /**
     * Initialize scroll-triggered animations for cards
     */
    initCardScrollAnimations(card) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            card.classList.add('card-animate-in');
            setTimeout(() => {
              this.createCardEntranceEffect(card);
            }, 500);
            observer.unobserve(card);
          }
        });
      }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      });

      observer.observe(card);
    }

    /**
     * Create entrance effect for cards
     */
    createCardEntranceEffect(card) {
      const effect = document.createElement('div');
      effect.className = 'card-entrance-effect';
      effect.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, rgba(246, 213, 92, 0.2), rgba(159, 122, 234, 0.2));
        border-radius: inherit;
        animation: cardEntranceGlow 1s ease-out forwards;
        pointer-events: none;
        z-index: -1;
      `;

      card.appendChild(effect);
      setTimeout(() => effect.remove(), 1000);
    }

    /**
     * Deactivate card energy effects
     */
    deactivateCardEnergy(card) {
      card.classList.remove('energy-solar', 'energy-lunar', 'energy-cosmic', 'energy-terrestrial', 'energy-celestial');

      const energyField = card.querySelector('.card-energy-field');
      const particles = card.querySelector('.card-energy-particles');

      if (energyField) energyField.remove();
      if (particles) particles.remove();
    }

    /**
     * Hide zodiac affinity
     */
    hideZodiacAffinity(card) {
      const affinity = card.querySelector('.zodiac-affinity');
      if (affinity) affinity.remove();
    }

    /**
     * Create magical particle effects on hover
     */
    createMagicalParticles(element) {
      const particles = document.createElement('div');
      particles.className = 'magical-particles';
      particles.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        border-radius: inherit;
      `;

      for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(246, 213, 92, 0.8);
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: particleFloat ${Math.random() * 2 + 1}s ease-out forwards;
        `;
        particles.appendChild(particle);
      }

      element.style.position = 'relative';
      element.appendChild(particles);
    }

    /**
     * Remove magical particles
     */
    removeMagicalParticles(element) {
      const particles = element.querySelector('.magical-particles');
      if (particles) {
        particles.remove();
      }
    }

    /**
     * Initialize parallax scrolling effects
     */
    initParallaxEffects() {
      const parallaxElements = document.querySelectorAll('.parallax-element');

      if (parallaxElements.length === 0) return;

      let ticking = false;

      const updateParallax = () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach((element, index) => {
          const rate = scrolled * (0.5 + index * 0.1);
          element.style.transform = `translateY(${rate}px)`;
        });

        ticking = false;
      };

      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestTick, { passive: true });
    }
  }

  /**
   * Sacred Geometry Animations
   */
  class SacredGeometry {
    constructor() {
      this.init();
    }

    init() {
      this.createGeometricPatterns();
      this.initRotatingElements();
    }

    /**
     * Create sacred geometry background patterns
     */
    createGeometricPatterns() {
      const patterns = document.querySelectorAll('.sacred-geometry');

      patterns.forEach(pattern => {
        const svg = this.createGeometrySVG();
        pattern.appendChild(svg);
      });
    }

    /**
     * Create SVG sacred geometry pattern
     */
    createGeometrySVG() {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '200');
      svg.setAttribute('height', '200');
      svg.setAttribute('viewBox', '0 0 200 200');
      svg.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.1;
        animation: geometryRotate 30s linear infinite;
      `;

      // Create flower of life pattern
      const centerX = 100;
      const centerY = 100;
      const radius = 30;

      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', radius);
        circle.setAttribute('fill', 'none');
        circle.setAttribute('stroke', 'rgba(159, 122, 234, 0.3)');
        circle.setAttribute('stroke-width', '1');

        svg.appendChild(circle);
      }

      // Center circle
      const centerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      centerCircle.setAttribute('cx', centerX);
      centerCircle.setAttribute('cy', centerY);
      centerCircle.setAttribute('r', radius);
      centerCircle.setAttribute('fill', 'none');
      centerCircle.setAttribute('stroke', 'rgba(246, 213, 92, 0.3)');
      centerCircle.setAttribute('stroke-width', '1');

      svg.appendChild(centerCircle);

      return svg;
    }

    /**
     * Initialize rotating geometric elements
     */
    initRotatingElements() {
      const rotatingElements = document.querySelectorAll('.rotate-slow');

      rotatingElements.forEach((element, index) => {
        element.style.animation = `rotate ${20 + index * 5}s linear infinite`;
      });
    }
  }

  /**
    * Smooth Scrolling Navigation
    */
  class SmoothNavigation {
    constructor() {
      this.navElements = [];
      this.init();
    }

    init() {
      this.initSmoothScrolling();
      this.initActiveNavigation();
      this.initMysticalNavigationEffects();
      this.initNavigationParticles();
    }

    /**
     * Initialize mystical navigation effects
     */
    initMysticalNavigationEffects() {
      const navLinks = document.querySelectorAll('.nav__link');

      navLinks.forEach((link, index) => {
        // Add mystical properties
        link.setAttribute('data-nav-magic', this.getRandomMagicType());
        link.setAttribute('data-nav-index', index);

        link.addEventListener('mouseenter', (e) => {
          this.createNavMagicEffect(e.target);
          this.showNavConstellation(e.target);
        });

        link.addEventListener('mouseleave', (e) => {
          this.removeNavMagicEffect(e.target);
          this.hideNavConstellation(e.target);
        });

        link.addEventListener('click', (e) => {
          this.createNavClickRipple(e.target);
        });

        // Store for constellation connections
        this.navElements.push(link);
      });

      // Create navigation constellation
      this.createNavigationConstellation();
    }

    /**
     * Get random magic type for navigation
     */
    getRandomMagicType() {
      const magicTypes = ['celestial', 'lunar', 'solar', 'cosmic', 'mystical'];
      return magicTypes[Math.floor(Math.random() * magicTypes.length)];
    }

    /**
     * Create magical effect on navigation hover
     */
    createNavMagicEffect(link) {
      const magicType = link.getAttribute('data-nav-magic');
      link.classList.add(`nav-magic-${magicType}`);

      // Create magic particles
      const particles = document.createElement('div');
      particles.className = 'nav-magic-particles';

      for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'nav-particle';
        particle.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: rgba(246, 213, 92, 0.8);
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: navParticleFloat 1s ease-out forwards;
          animation-delay: ${i * 0.1}s;
        `;
        particles.appendChild(particle);
      }

      link.style.position = 'relative';
      link.appendChild(particles);

      // Add glow effect
      link.style.textShadow = '0 0 10px rgba(246, 213, 92, 0.5)';
    }

    /**
     * Show navigation constellation connection
     */
    showNavConstellation(link) {
      if (this.navElements.length < 2) return;

      const linkIndex = parseInt(link.getAttribute('data-nav-index'));
      const connectedLinks = this.getConnectedNavLinks(linkIndex);

      connectedLinks.forEach(connectedIndex => {
        const connectedLink = this.navElements[connectedIndex];
        if (connectedLink && connectedLink !== link) {
          connectedLink.classList.add('nav-connected');
        }
      });
    }

    /**
     * Get connected navigation links for constellation effect
     */
    getConnectedNavLinks(index) {
      const connections = [
        [1, 2], [0, 2, 3], [0, 1, 3, 4], [1, 2, 4], [2, 3]
      ];
      return connections[index] || [];
    }

    /**
     * Create navigation constellation lines
     */
    createNavigationConstellation() {
      const nav = document.querySelector('.nav__menu');
      if (!nav) return;

      const constellation = document.createElement('div');
      constellation.className = 'nav-constellation';
      constellation.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
      `;

      // Create constellation lines between nav items
      this.navElements.forEach((link, index) => {
        const connections = this.getConnectedNavLinks(index);

        connections.forEach(connectedIndex => {
          if (connectedIndex > index) {
            const line = document.createElement('div');
            line.className = 'nav-constellation-line';
            line.setAttribute('data-from', index);
            line.setAttribute('data-to', connectedIndex);

            constellation.appendChild(line);
          }
        });
      });

      nav.style.position = 'relative';
      nav.appendChild(constellation);

      // Animate constellation lines
      this.animateNavigationConstellation();
    }

    /**
     * Animate navigation constellation
     */
    animateNavigationConstellation() {
      const lines = document.querySelectorAll('.nav-constellation-line');

      lines.forEach((line, index) => {
        line.style.animation = `navConstellationPulse 4s ease-in-out infinite`;
        line.style.animationDelay = `${index * 0.5}s`;
      });
    }

    /**
     * Create click ripple effect
     */
    createNavClickRipple(link) {
      const ripple = document.createElement('div');
      ripple.className = 'nav-click-ripple';
      ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(246, 213, 92, 0.4) 0%, transparent 70%);
        animation: navRippleExpand 0.6s ease-out forwards;
        pointer-events: none;
        z-index: 5;
      `;

      link.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }

    /**
     * Initialize navigation particles
     */
    initNavigationParticles() {
      const nav = document.querySelector('.nav');
      if (!nav) return;

      const particles = document.createElement('div');
      particles.className = 'nav-background-particles';

      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'nav-bg-particle';
        particle.style.cssText = `
          position: absolute;
          width: 1px;
          height: 1px;
          border-radius: 50%;
          background: rgba(246, 213, 92, 0.3);
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: navBgParticleTwinkle ${2 + Math.random() * 2}s ease-in-out infinite;
          animation-delay: ${Math.random() * 2}s;
        `;
        particles.appendChild(particle);
      }

      nav.style.position = 'relative';
      nav.appendChild(particles);
    }

    /**
     * Remove navigation magic effects
     */
    removeNavMagicEffect(link) {
      const magicType = link.getAttribute('data-nav-magic');
      link.classList.remove(`nav-magic-${magicType}`);

      const particles = link.querySelector('.nav-magic-particles');
      if (particles) particles.remove();

      link.style.textShadow = '';
    }

    /**
     * Hide navigation constellation
     */
    hideNavConstellation(link) {
      document.querySelectorAll('.nav-connected').forEach(connectedLink => {
        connectedLink.classList.remove('nav-connected');
      });
    }

    /**
     * Initialize smooth scrolling for anchor links
     */
    initSmoothScrolling() {
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }

    /**
     * Initialize active navigation highlighting
     */
    initActiveNavigation() {
      const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
      if (navLinks.length === 0) return;

      const sections = Array.from(navLinks).map(link => {
        const targetId = link.getAttribute('href').substring(1);
        return document.getElementById(targetId);
      }).filter(Boolean);

      const observerOptions = {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const navLink = document.querySelector(`a[href="#${entry.target.id}"]`);
          if (navLink) {
            if (entry.isIntersecting) {
              navLink.classList.add('active');
            } else {
              navLink.classList.remove('active');
            }
          }
        });
      }, observerOptions);

      sections.forEach(section => observer.observe(section));
    }
  }

  /**
   * Performance Optimization
   */
  class PerformanceOptimizer {
    constructor() {
      this.init();
    }

    init() {
      this.lazyLoadImages();
      this.optimizeAnimations();
    }

    /**
     * Lazy load images for better performance
     */
    lazyLoadImages() {
      const images = document.querySelectorAll('img[data-src]');

      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      images.forEach(img => imageObserver.observe(img));
    }

    /**
     * Optimize SVG loading and caching
     */
    optimizeSVGs() {
      const svgs = document.querySelectorAll('img[src*=".svg"], svg');

      svgs.forEach(svg => {
        // Add loading="lazy" for better performance
        if (svg.tagName === 'IMG' && !svg.hasAttribute('loading')) {
          svg.setAttribute('loading', 'lazy');
        }

        // Add performance classes
        svg.classList.add('mystical-svg');
      });
    }

    /**
     * Optimize animations based on user preferences
     */
    optimizeAnimations() {
      // Respect user's motion preferences
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        return;
      }

      // Pause animations when tab is not visible
      document.addEventListener('visibilitychange', () => {
        const animations = document.querySelectorAll('[style*="animation"]');
        animations.forEach(element => {
          if (document.hidden) {
            element.style.animationPlayState = 'paused';
          } else {
            element.style.animationPlayState = 'running';
          }
        });
      });
    }
  }

  /**
   * Enhanced Moon Phase Animations
   */
  class EnhancedMoonPhases {
    constructor() {
      this.moonPhases = [
        { name: 'New Moon', emoji: '🌑', energy: 'new-beginnings', color: '#2d3748' },
        { name: 'Waxing Crescent', emoji: '🌒', energy: 'growth', color: '#4a5568' },
        { name: 'First Quarter', emoji: '🌓', energy: 'action', color: '#718096' },
        { name: 'Waxing Gibbous', emoji: '🌔', energy: 'refinement', color: '#a0aec0' },
        { name: 'Full Moon', emoji: '🌕', energy: 'manifestation', color: '#f7fafc' },
        { name: 'Waning Gibbous', emoji: '🌖', energy: 'gratitude', color: '#e2e8f0' },
        { name: 'Last Quarter', emoji: '🌗', energy: 'release', color: '#cbd5e0' },
        { name: 'Waning Crescent', emoji: '🌘', energy: 'reflection', color: '#edf2f7' }
      ];
      this.currentPhase = 0;
      this.init();
    }

    init() {
      this.calculateCurrentPhase();
      this.createEnhancedMoonDisplay();
      this.initPhaseTransitions();
    }

    calculateCurrentPhase() {
      const now = new Date();
      const moonCycle = 29.53; // More accurate moon cycle
      const referenceNewMoon = new Date('2024-03-10'); // Known new moon
      const daysSince = (now - referenceNewMoon) / (1000 * 60 * 60 * 24);
      this.currentPhase = Math.floor((daysSince % moonCycle) / (moonCycle / 8)) % 8;
    }

    createEnhancedMoonDisplay() {
      const moonContainer = document.querySelector('.moon-phase-display');
      if (!moonContainer) return;

      const phase = this.moonPhases[this.currentPhase];
      moonContainer.innerHTML = `
        <div class="enhanced-moon-phase" data-phase="${this.currentPhase}">
          <div class="moon-emoji">${phase.emoji}</div>
          <div class="moon-glow" style="background: radial-gradient(circle, ${phase.color}40 0%, transparent 70%)"></div>
          <div class="phase-energy" data-energy="${phase.energy}"></div>
        </div>
      `;

      this.animatePhaseTransition();
    }

    animatePhaseTransition() {
      const moonElement = document.querySelector('.enhanced-moon-phase');
      if (!moonElement) return;

      moonElement.style.animation = 'moonPhaseTransition 2s ease-in-out';
      setTimeout(() => {
        moonElement.style.animation = 'moonPhaseGlow 4s ease-in-out infinite alternate';
      }, 2000);
    }

    initPhaseTransitions() {
      // Smooth transitions between phases
      document.addEventListener('moonPhaseChange', (e) => {
        this.currentPhase = e.detail.phase;
        this.createEnhancedMoonDisplay();
      });
    }
  }

  /**
   * Zodiac Sign Rotations
   */
  class ZodiacRotations {
    constructor() {
      this.zodiacSigns = [
        { symbol: '♈', name: 'Aries', element: 'fire', dates: 'Mar 21 - Apr 19' },
        { symbol: '♉', name: 'Taurus', element: 'earth', dates: 'Apr 20 - May 20' },
        { symbol: '♊', name: 'Gemini', element: 'air', dates: 'May 21 - Jun 20' },
        { symbol: '♋', name: 'Cancer', element: 'water', dates: 'Jun 21 - Jul 22' },
        { symbol: '♌', name: 'Leo', element: 'fire', dates: 'Jul 23 - Aug 22' },
        { symbol: '♍', name: 'Virgo', element: 'earth', dates: 'Aug 23 - Sep 22' },
        { symbol: '♎', name: 'Libra', element: 'air', dates: 'Sep 23 - Oct 22' },
        { symbol: '♏', name: 'Scorpio', element: 'water', dates: 'Oct 23 - Nov 21' },
        { symbol: '♐', name: 'Sagittarius', element: 'fire', dates: 'Nov 22 - Dec 21' },
        { symbol: '♑', name: 'Capricorn', element: 'earth', dates: 'Dec 22 - Jan 19' },
        { symbol: '♒', name: 'Aquarius', element: 'air', dates: 'Jan 20 - Feb 18' },
        { symbol: '♓', name: 'Pisces', element: 'water', dates: 'Feb 19 - Mar 20' }
      ];
      this.init();
    }

    init() {
      this.createRotatingConstellation();
      this.initZodiacInteractions();
    }

    createRotatingConstellation() {
      const constellationContainer = document.querySelector('.zodiac-constellation');
      if (!constellationContainer) return;

      // Create constellation lines
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '400');
      svg.setAttribute('height', '400');
      svg.setAttribute('viewBox', '0 0 400 400');
      svg.classList.add('constellation-lines');

      // Draw connecting lines between zodiac signs
      const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
        [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 0]
      ];

      connections.forEach(([from, to]) => {
        const fromSign = document.querySelector(`.zodiac-sign-${from + 1}`);
        const toSign = document.querySelector(`.zodiac-sign-${to + 1}`);

        if (fromSign && toSign) {
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          const fromRect = fromSign.getBoundingClientRect();
          const toRect = toSign.getBoundingClientRect();

          line.setAttribute('x1', fromRect.left + fromRect.width / 2);
          line.setAttribute('y1', fromRect.top + fromRect.height / 2);
          line.setAttribute('x2', toRect.left + toRect.width / 2);
          line.setAttribute('y2', toRect.top + toRect.height / 2);
          line.setAttribute('stroke', 'rgba(246, 213, 92, 0.3)');
          line.setAttribute('stroke-width', '1');
          line.classList.add('constellation-line');

          svg.appendChild(line);
        }
      });

      constellationContainer.appendChild(svg);
      this.animateConstellation();
    }

    animateConstellation() {
      const lines = document.querySelectorAll('.constellation-line');
      lines.forEach((line, index) => {
        line.style.animation = `constellationPulse 3s ease-in-out infinite`;
        line.style.animationDelay = `${index * 0.2}s`;
      });
    }

    initZodiacInteractions() {
      const zodiacSigns = document.querySelectorAll('.zodiac-sign');
      zodiacSigns.forEach((sign, index) => {
        sign.addEventListener('mouseenter', () => {
          this.showZodiacInfo(index);
          this.highlightConnectedSigns(index);
        });

        sign.addEventListener('mouseleave', () => {
          this.hideZodiacInfo();
          this.resetSignHighlights();
        });
      });
    }

    showZodiacInfo(index) {
      const sign = this.zodiacSigns[index];
      const tooltip = document.createElement('div');
      tooltip.className = 'zodiac-tooltip';
      tooltip.innerHTML = `
        <div class="zodiac-symbol">${sign.symbol}</div>
        <div class="zodiac-name">${sign.name}</div>
        <div class="zodiac-dates">${sign.dates}</div>
        <div class="zodiac-element">${sign.element}</div>
      `;

      document.body.appendChild(tooltip);

      // Position tooltip
      const signElement = document.querySelector(`.zodiac-sign-${index + 1}`);
      if (signElement) {
        const rect = signElement.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 10}px`;
        tooltip.style.transform = 'translate(-50%, -100%)';
      }
    }

    hideZodiacInfo() {
      const tooltip = document.querySelector('.zodiac-tooltip');
      if (tooltip) tooltip.remove();
    }

    highlightConnectedSigns(index) {
      // Highlight connected signs in the constellation
      const connections = this.getConnectedSigns(index);
      connections.forEach(signIndex => {
        const sign = document.querySelector(`.zodiac-sign-${signIndex + 1}`);
        if (sign) sign.classList.add('zodiac-highlighted');
      });
    }

    resetSignHighlights() {
      document.querySelectorAll('.zodiac-sign').forEach(sign => {
        sign.classList.remove('zodiac-highlighted');
      });
    }

    getConnectedSigns(index) {
      const connections = [
        [11, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 6],
        [5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 0]
      ];
      return connections[index] || [];
    }
  }

  /**
   * Advanced Magnolia Petals
   */
  class AdvancedPetals {
    constructor() {
      this.petals = [];
      this.windStrength = 0.5;
      this.init();
    }

    init() {
      this.createPetals();
      this.initWindEffects();
      this.initSeasonalVariations();
    }

    createPetals() {
      const petalContainer = document.querySelector('.floating-petals');
      if (!petalContainer) return;

      for (let i = 0; i < 12; i++) {
        const petal = document.createElement('div');
        petal.className = 'advanced-petal';
        petal.style.cssText = `
          position: absolute;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 5}s;
          animation-duration: ${8 + Math.random() * 4}s;
        `;

        // Create petal SVG
        petal.innerHTML = `
          <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0 C15 10, 10 20, 20 35 C30 20, 25 10, 20 0 Z"
                  fill="rgba(246, 213, 92, 0.8)"
                  stroke="rgba(212, 175, 55, 0.3)"
                  stroke-width="1"/>
            <path d="M20 35 C15 40, 10 45, 5 50 C20 45, 35 50, 30 45 C25 40, 20 35, 20 35 Z"
                  fill="rgba(163, 177, 138, 0.6)"
                  stroke="rgba(163, 177, 138, 0.3)"
                  stroke-width="1"/>
          </svg>
        `;

        petalContainer.appendChild(petal);
        this.petals.push(petal);
      }

      this.animatePetals();
    }

    animatePetals() {
      this.petals.forEach((petal, index) => {
        petal.style.animation = `advancedPetalFloat ${8 + Math.random() * 4}s ease-in-out infinite`;
        petal.style.animationDelay = `${index * 0.3}s`;
      });
    }

    initWindEffects() {
      let windDirection = 1;
      setInterval(() => {
        this.windStrength = 0.3 + Math.random() * 0.7;
        windDirection = Math.random() > 0.5 ? 1 : -1;

        this.petals.forEach(petal => {
          petal.style.transform += ` translateX(${windDirection * this.windStrength * 10}px)`;
        });
      }, 3000);
    }

    initSeasonalVariations() {
      const now = new Date();
      const month = now.getMonth();

      // Adjust petal colors based on season
      const seasonalColors = {
        spring: { primary: 'rgba(246, 213, 92, 0.8)', secondary: 'rgba(163, 177, 138, 0.6)' },
        summer: { primary: 'rgba(255, 223, 93, 0.9)', secondary: 'rgba(173, 187, 148, 0.7)' },
        autumn: { primary: 'rgba(236, 203, 82, 0.8)', secondary: 'rgba(153, 167, 128, 0.6)' },
        winter: { primary: 'rgba(246, 213, 92, 0.7)', secondary: 'rgba(163, 177, 138, 0.5)' }
      };

      let season = 'spring';
      if (month >= 2 && month <= 4) season = 'spring';
      else if (month >= 5 && month <= 7) season = 'summer';
      else if (month >= 8 && month <= 10) season = 'autumn';
      else season = 'winter';

      const colors = seasonalColors[season];
      document.documentElement.style.setProperty('--petal-primary-color', colors.primary);
      document.documentElement.style.setProperty('--petal-secondary-color', colors.secondary);
    }
  }

  /**
   * Interactive Energy Orbs
   */
  class EnergyOrbs {
    constructor() {
      this.orbs = [];
      this.mousePosition = { x: 0, y: 0 };
      this.init();
    }

    init() {
      this.createEnergyOrbs();
      this.initMouseTracking();
      this.initOrbInteractions();
    }

    createEnergyOrbs() {
      const orbContainer = document.querySelector('.energy-orbs');
      if (!orbContainer) return;

      for (let i = 0; i < 8; i++) {
        const orb = document.createElement('div');
        orb.className = 'interactive-energy-orb';
        orb.style.cssText = `
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(246, 213, 92, 0.9) 0%, rgba(159, 122, 234, 0.6) 100%);
          box-shadow: 0 0 20px rgba(246, 213, 92, 0.5);
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 3}s;
          cursor: pointer;
          transition: all 0.3s ease;
        `;

        // Add energy trail
        const trail = document.createElement('div');
        trail.className = 'energy-trail';
        trail.style.cssText = `
          position: absolute;
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, rgba(246, 213, 92, 0.8) 0%, transparent 100%);
          transform: rotate(${Math.random() * 360}deg);
          opacity: 0;
          transition: opacity 0.3s ease;
        `;
        orb.appendChild(trail);

        orbContainer.appendChild(orb);
        this.orbs.push({ element: orb, trail: trail, baseX: parseFloat(orb.style.left), baseY: parseFloat(orb.style.top) });
      }

      this.animateOrbs();
    }

    animateOrbs() {
      this.orbs.forEach((orb, index) => {
        orb.element.style.animation = `energyOrbPulse 2s ease-in-out infinite`;
        orb.element.style.animationDelay = `${index * 0.2}s`;
      });
    }

    initMouseTracking() {
      document.addEventListener('mousemove', (e) => {
        this.mousePosition.x = e.clientX / window.innerWidth;
        this.mousePosition.y = e.clientY / window.innerHeight;

        this.updateOrbPositions();
      });
    }

    updateOrbPositions() {
      this.orbs.forEach((orb, index) => {
        const distance = Math.sqrt(
          Math.pow(this.mousePosition.x - orb.baseX / 100, 2) +
          Math.pow(this.mousePosition.y - orb.baseY / 100, 2)
        );

        const attraction = Math.max(0, 1 - distance);
        const moveX = (this.mousePosition.x - 0.5) * attraction * 50;
        const moveY = (this.mousePosition.y - 0.5) * attraction * 50;

        orb.element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    }

    initOrbInteractions() {
      this.orbs.forEach(orb => {
        orb.element.addEventListener('mouseenter', () => {
          orb.element.style.transform = 'scale(1.5)';
          orb.element.style.boxShadow = '0 0 40px rgba(246, 213, 92, 0.8)';
          orb.trail.style.opacity = '1';
          this.createEnergyBurst(orb.element);
        });

        orb.element.addEventListener('mouseleave', () => {
          orb.element.style.transform = 'scale(1)';
          orb.element.style.boxShadow = '0 0 20px rgba(246, 213, 92, 0.5)';
          orb.trail.style.opacity = '0';
        });

        orb.element.addEventListener('click', () => {
          this.createEnergyExplosion(orb.element);
        });
      });
    }

    createEnergyBurst(element) {
      const burst = document.createElement('div');
      burst.className = 'energy-burst';
      burst.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(246, 213, 92, 0.6) 0%, transparent 70%);
        animation: energyBurst 0.6s ease-out forwards;
        pointer-events: none;
      `;

      element.appendChild(burst);
      setTimeout(() => burst.remove(), 600);
    }

    createEnergyExplosion(element) {
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'energy-particle';
        particle.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(246, 213, 92, 0.9);
          animation: energyParticle ${0.5 + Math.random() * 0.5}s ease-out forwards;
          transform: rotate(${i * 45}deg) translate(20px);
        `;

        element.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
      }
    }
  }

  /**
   * Animation Utilities
   */
  class AnimationUtilities {
    constructor() {
      this.animations = new Map();
      this.performanceMode = false;
      this.init();
    }

    init() {
      this.detectPerformanceCapabilities();
      this.initAccessibilityChecks();
      this.createAnimationControls();
      this.startPerformanceMonitoring();
    }

    detectPerformanceCapabilities() {
      // Check for hardware acceleration support
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      this.hasHardwareAcceleration = !!gl;

      // Check device pixel ratio
      this.devicePixelRatio = window.devicePixelRatio || 1;

      // Enable performance mode for low-end devices
      if (!this.hasHardwareAcceleration || this.devicePixelRatio > 2) {
        this.enablePerformanceMode();
      }
    }

    enablePerformanceMode() {
      this.performanceMode = true;
      document.documentElement.classList.add('performance-mode');

      // Reduce animation complexity
      const style = document.createElement('style');
      style.textContent = `
        .performance-mode * {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
        .performance-mode .floating-petals,
        .performance-mode .energy-orbs,
        .performance-mode .zodiac-constellation {
          display: none;
        }
      `;
      document.head.appendChild(style);
    }

    initAccessibilityChecks() {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.handleReducedMotion(prefersReducedMotion.matches);

      prefersReducedMotion.addEventListener('change', (e) => {
        this.handleReducedMotion(e.matches);
      });

      // Check for high contrast mode
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      this.handleHighContrast(prefersHighContrast.matches);

      prefersHighContrast.addEventListener('change', (e) => {
        this.handleHighContrast(e.matches);
      });
    }

    handleReducedMotion(reduce) {
      if (reduce) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        this.pauseAllAnimations();
      } else {
        document.documentElement.style.setProperty('--animation-duration', '1s');
        this.resumeAllAnimations();
      }
    }

    handleHighContrast(high) {
      if (high) {
        document.documentElement.classList.add('high-contrast-mode');
      } else {
        document.documentElement.classList.remove('high-contrast-mode');
      }
    }

    createAnimationControls() {
      // Create global animation controls
      window.AnimationControls = {
        pause: () => this.pauseAllAnimations(),
        resume: () => this.resumeAllAnimations(),
        toggle: () => this.toggleAllAnimations(),
        performance: () => this.togglePerformanceMode()
      };
    }

    pauseAllAnimations() {
      const animatedElements = document.querySelectorAll('[style*="animation"]');
      animatedElements.forEach(element => {
        element.style.animationPlayState = 'paused';
      });
    }

    resumeAllAnimations() {
      const animatedElements = document.querySelectorAll('[style*="animation"]');
      animatedElements.forEach(element => {
        element.style.animationPlayState = 'running';
      });
    }

    toggleAllAnimations() {
      const animatedElements = document.querySelectorAll('[style*="animation"]');
      animatedElements.forEach(element => {
        const currentState = element.style.animationPlayState || 'running';
        element.style.animationPlayState = currentState === 'running' ? 'paused' : 'running';
      });
    }

    togglePerformanceMode() {
      this.performanceMode = !this.performanceMode;
      if (this.performanceMode) {
        this.enablePerformanceMode();
      } else {
        document.documentElement.classList.remove('performance-mode');
        location.reload(); // Reload to reset styles
      }
    }

    registerAnimation(name, element, keyframes) {
      this.animations.set(name, { element, keyframes });
    }

    unregisterAnimation(name) {
      this.animations.delete(name);
    }

    getAnimationStats() {
      return {
        totalAnimations: this.animations.size,
        performanceMode: this.performanceMode,
        hardwareAcceleration: this.hasHardwareAcceleration,
        devicePixelRatio: this.devicePixelRatio
      };
    }

    /**
     * Performance monitoring and optimization
     */
    startPerformanceMonitoring() {
      this.performanceData = {
        fps: [],
        memoryUsage: [],
        animationCount: 0,
        lastFrameTime: performance.now()
      };

      this.monitorFPS();
      this.monitorMemory();
      this.optimizeBasedOnPerformance();
    }

    /**
     * Monitor FPS for performance optimization
     */
    monitorFPS() {
      const monitor = () => {
        const now = performance.now();
        const delta = now - this.performanceData.lastFrameTime;
        const fps = 1000 / delta;

        this.performanceData.fps.push(fps);
        if (this.performanceData.fps.length > 60) {
          this.performanceData.fps.shift(); // Keep last 60 readings
        }

        this.performanceData.lastFrameTime = now;

        // Check if FPS is consistently low
        const avgFPS = this.performanceData.fps.reduce((a, b) => a + b, 0) / this.performanceData.fps.length;
        if (avgFPS < 30 && !this.performanceMode) {
          console.warn('Low FPS detected, enabling performance mode');
          this.enablePerformanceMode();
        }

        requestAnimationFrame(monitor);
      };

      requestAnimationFrame(monitor);
    }

    /**
     * Monitor memory usage
     */
    monitorMemory() {
      if (performance.memory) {
        setInterval(() => {
          const memoryUsage = performance.memory.usedJSHeapSize / performance.memory.totalJSHeapSize;
          this.performanceData.memoryUsage.push(memoryUsage);

          if (this.performanceData.memoryUsage.length > 10) {
            this.performanceData.memoryUsage.shift();
          }

          // If memory usage is high, trigger cleanup
          const avgMemoryUsage = this.performanceData.memoryUsage.reduce((a, b) => a + b, 0) / this.performanceData.memoryUsage.length;
          if (avgMemoryUsage > 0.8) {
            this.performGarbageCollection();
          }
        }, 5000);
      }
    }

    /**
     * Perform garbage collection and cleanup
     */
    performGarbageCollection() {
      // Clear any cached elements
      this.clearOrphanedElements();

      // Reduce particle counts
      this.reduceParticleEffects();

      // Force garbage collection if available
      if (window.gc) {
        window.gc();
      }
    }

    /**
     * Clear orphaned DOM elements
     */
    clearOrphanedElements() {
      const orphanedSelectors = [
        '.magical-particles',
        '.energy-particles',
        '.nav-magic-particles',
        '.button-magic-particles',
        '.card-energy-field'
      ];

      orphanedSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          if (!element.parentElement || !document.contains(element)) {
            element.remove();
          }
        });
      });
    }

    /**
     * Reduce particle effects for performance
     */
    reduceParticleEffects() {
      // Reduce particle counts in existing effects
      const particleContainers = document.querySelectorAll('.button-magic-particles, .card-energy-particles');

      particleContainers.forEach(container => {
        const particles = container.querySelectorAll('.button-particle, .energy-particle');
        if (particles.length > 3) {
          // Remove excess particles
          for (let i = 3; i < particles.length; i++) {
            particles[i].remove();
          }
        }
      });
    }

    /**
     * Optimize animations based on performance
     */
    optimizeBasedOnPerformance() {
      // Throttle expensive animations
      this.throttleExpensiveAnimations();

      // Use passive event listeners
      this.optimizeEventListeners();

      // Implement animation batching
      this.implementAnimationBatching();
    }

    /**
     * Throttle expensive animations
     */
    throttleExpensiveAnimations() {
      const expensiveAnimations = [
        '.energy-orb',
        '.floating-petal',
        '.zodiac-sign'
      ];

      expensiveAnimations.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
          if (index % 2 === 0) { // Skip every other element
            element.style.animationPlayState = 'paused';
          }
        });
      });
    }

    /**
     * Optimize event listeners
     */
    optimizeEventListeners() {
      // Use passive listeners for scroll and touch events
      const scrollElements = document.querySelectorAll('[style*="animation"]');

      scrollElements.forEach(element => {
        element.addEventListener('scroll', () => {}, { passive: true });
        element.addEventListener('touchstart', () => {}, { passive: true });
        element.addEventListener('touchmove', () => {}, { passive: true });
      });
    }

    /**
     * Implement animation batching
     */
    implementAnimationBatching() {
      let animationBatch = [];
      let batchTimer = null;

      this.batchAnimation = (callback) => {
        animationBatch.push(callback);

        if (!batchTimer) {
          batchTimer = setTimeout(() => {
            // Execute all batched animations in one frame
            requestAnimationFrame(() => {
              animationBatch.forEach(cb => cb());
              animationBatch = [];
              batchTimer = null;
            });
          }, 16); // ~60fps
        }
      };
    }

    /**
     * Create performance report
     */
    generatePerformanceReport() {
      const report = {
        timestamp: new Date().toISOString(),
        performanceMode: this.performanceMode,
        hardwareAcceleration: this.hasHardwareAcceleration,
        averageFPS: this.performanceData.fps.length > 0 ?
          this.performanceData.fps.reduce((a, b) => a + b, 0) / this.performanceData.fps.length : 0,
        memoryUsage: this.performanceData.memoryUsage.length > 0 ?
          this.performanceData.memoryUsage.reduce((a, b) => a + b, 0) / this.performanceData.memoryUsage.length : 0,
        totalAnimations: this.animations.size,
        recommendations: this.generateRecommendations()
      };

      console.table(report);
      return report;
    }

    /**
     * Generate performance recommendations
     */
    generateRecommendations() {
      const recommendations = [];

      const avgFPS = this.performanceData.fps.reduce((a, b) => a + b, 0) / this.performanceData.fps.length;
      if (avgFPS < 30) {
        recommendations.push('Consider enabling performance mode for better FPS');
      }

      if (this.animations.size > 50) {
        recommendations.push('High number of animations detected, consider reducing for better performance');
      }

      if (!this.hasHardwareAcceleration) {
        recommendations.push('Hardware acceleration not available, animations may be slower');
      }

      return recommendations;
    }

    /**
     * Emergency performance mode
     */
    enableEmergencyMode() {
      // Disable all non-essential animations
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');

      const allAnimatedElements = document.querySelectorAll('[style*="animation"]');
      allAnimatedElements.forEach(element => {
        element.style.animation = 'none';
      });

      console.warn('Emergency performance mode enabled - all animations disabled');
    }
  }

  /**
    * Add CSS animations to the document
    */
  function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0% { opacity: 0.3; transform: scale(1); }
        100% { opacity: 1; transform: scale(1.2); }
      }

      @keyframes starDrift {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100px); }
      }

      @keyframes particleFloat {
        0% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        100% {
          opacity: 0;
          transform: translateY(-50px) scale(0.5);
        }
      }

      @keyframes geometryRotate {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
      }

      @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      /* Enhanced Moon Phase Animations */
      @keyframes moonPhaseTransition {
        0% { transform: scale(0.8) rotate(-180deg); opacity: 0; }
        50% { transform: scale(1.2) rotate(-90deg); opacity: 0.7; }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }

      @keyframes moonPhaseGlow {
        0% { filter: drop-shadow(0 0 10px rgba(246, 213, 92, 0.3)); }
        100% { filter: drop-shadow(0 0 30px rgba(246, 213, 92, 0.8)); }
      }

      /* Zodiac Animations */
      @keyframes constellationPulse {
        0%, 100% { opacity: 0.3; stroke-width: 1; }
        50% { opacity: 0.8; stroke-width: 2; }
      }

      .zodiac-sign {
        transition: all 0.3s ease;
      }

      .zodiac-sign:hover {
        transform: scale(1.2);
        filter: drop-shadow(0 0 15px rgba(246, 213, 92, 0.6));
      }

      .zodiac-sign.zodiac-highlighted {
        color: rgba(246, 213, 92, 0.9);
        text-shadow: 0 0 20px rgba(246, 213, 92, 0.8);
      }

      .zodiac-tooltip {
        position: fixed;
        background: rgba(10, 25, 47, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(246, 213, 92, 0.3);
        border-radius: 8px;
        padding: 1rem;
        z-index: 10000;
        pointer-events: none;
        animation: tooltipFadeIn 0.3s ease-out;
      }

      @keyframes tooltipFadeIn {
        0% { opacity: 0; transform: translate(-50%, -110%) scale(0.9); }
        100% { opacity: 1; transform: translate(-50%, -100%) scale(1); }
      }

      /* Advanced Petal Animations */
      @keyframes advancedPetalFloat {
        0%, 100% {
          transform: translateY(0px) rotate(0deg) scale(1);
          opacity: 0.6;
        }
        25% {
          transform: translateY(-30px) rotate(90deg) scale(1.1);
          opacity: 0.8;
        }
        50% {
          transform: translateY(-60px) rotate(180deg) scale(0.9);
          opacity: 0.7;
        }
        75% {
          transform: translateY(-30px) rotate(270deg) scale(1.05);
          opacity: 0.9;
        }
      }

      .advanced-petal {
        transition: transform 0.3s ease;
      }

      .advanced-petal:hover {
        transform: scale(1.2);
        filter: drop-shadow(0 0 15px rgba(246, 213, 92, 0.5));
      }

      /* Energy Orb Animations */
      @keyframes energyOrbPulse {
        0%, 100% {
          transform: scale(1);
          box-shadow: 0 0 20px rgba(246, 213, 92, 0.5);
        }
        50% {
          transform: scale(1.3);
          box-shadow: 0 0 40px rgba(246, 213, 92, 0.8);
        }
      }

      @keyframes energyBurst {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
      }

      @keyframes energyParticle {
        0% { opacity: 1; transform: rotate(var(--rotation)) translate(20px) scale(1); }
        100% { opacity: 0; transform: rotate(var(--rotation)) translate(60px) scale(0); }
      }

      .interactive-energy-orb:hover {
        animation-play-state: paused;
      }

      /* Navigation Enhancements */
      .nav__link.active {
        color: var(--color-golden-yellow);
        text-shadow: 0 0 8px rgba(246, 213, 92, 0.3);
      }

      .lazy {
        opacity: 0;
        transition: opacity 0.3s;
      }

      .lazy.loaded {
        opacity: 1;
      }

      /* Performance Mode Styles */
      .performance-mode .celestial-stars,
      .performance-mode .floating-petals,
      .performance-mode .energy-orbs {
        display: none;
      }

      /* High Contrast Mode */
      .high-contrast-mode .zodiac-sign,
      .high-contrast-mode .energy-orb {
        border: 2px solid;
      }

      /* Enhanced Product Card Animations */
      @keyframes energyFieldPulse {
        0%, 100% {
          opacity: 0.3;
          transform: scale(1);
        }
        50% {
          opacity: 0.7;
          transform: scale(1.05);
        }
      }

      @keyframes energyParticleOrbit {
        0%, 100% {
          transform: rotate(0deg) translateX(20px) rotate(0deg);
          opacity: 0.6;
        }
        50% {
          transform: rotate(180deg) translateX(30px) rotate(-180deg);
          opacity: 1;
        }
      }

      @keyframes affinityFadeIn {
        0% {
          opacity: 0;
          transform: translateX(-50%) translateY(10px);
        }
        100% {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      }

      @keyframes energyRippleExpand {
        0% {
          width: 0;
          height: 0;
          opacity: 1;
        }
        100% {
          width: 200px;
          height: 200px;
          opacity: 0;
        }
      }

      @keyframes cardEntranceGlow {
        0% {
          opacity: 0;
          transform: scale(0.9);
        }
        50% {
          opacity: 0.5;
          transform: scale(1.02);
        }
        100% {
          opacity: 0;
          transform: scale(1);
        }
      }

      .card-animate-in {
        animation: cardFadeInUp 0.8s ease-out;
      }

      @keyframes cardFadeInUp {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Energy type specific styles */
      .energy-solar {
        box-shadow: 0 0 30px rgba(246, 213, 92, 0.3);
      }

      .energy-lunar {
        box-shadow: 0 0 30px rgba(159, 122, 234, 0.3);
      }

      .energy-cosmic {
        box-shadow: 0 0 30px rgba(138, 43, 226, 0.3);
      }

      .energy-terrestrial {
        box-shadow: 0 0 30px rgba(163, 177, 138, 0.3);
      }

      .energy-celestial {
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
      }

      /* Navigation Mystical Effects */
      @keyframes navParticleFloat {
        0% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        100% {
          opacity: 0;
          transform: translateY(-20px) scale(0.5);
        }
      }

      @keyframes navConstellationPulse {
        0%, 100% {
          opacity: 0.2;
          stroke-width: 1;
        }
        50% {
          opacity: 0.6;
          stroke-width: 2;
        }
      }

      @keyframes navRippleExpand {
        0% {
          width: 0;
          height: 0;
          opacity: 1;
        }
        100% {
          width: 100px;
          height: 100px;
          opacity: 0;
        }
      }

      @keyframes navBgParticleTwinkle {
        0%, 100% {
          opacity: 0.2;
          transform: scale(1);
        }
        50% {
          opacity: 0.8;
          transform: scale(1.5);
        }
      }

      .nav-constellation-line {
        position: absolute;
        background: linear-gradient(90deg, rgba(246, 213, 92, 0.3) 0%, rgba(159, 122, 234, 0.3) 100%);
        height: 1px;
        border-radius: 1px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .nav-constellation-line::before {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: rgba(246, 213, 92, 0.6);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: navConstellationNode 2s ease-in-out infinite;
      }

      @keyframes navConstellationNode {
        0%, 100% {
          opacity: 0.4;
          transform: translate(-50%, -50%) scale(1);
        }
        50% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.5);
        }
      }

      .nav-connected {
        color: rgba(246, 213, 92, 0.8) !important;
        text-shadow: 0 0 8px rgba(246, 213, 92, 0.4);
      }

      .nav-magic-celestial {
        background: linear-gradient(45deg, rgba(246, 213, 92, 0.1), rgba(159, 122, 234, 0.1));
        border-radius: 4px;
      }

      .nav-magic-lunar {
        background: linear-gradient(45deg, rgba(159, 122, 234, 0.1), rgba(163, 177, 138, 0.1));
        border-radius: 4px;
      }

      .nav-magic-solar {
        background: linear-gradient(45deg, rgba(246, 213, 92, 0.15), rgba(255, 215, 0, 0.1));
        border-radius: 4px;
      }

      .nav-magic-cosmic {
        background: linear-gradient(45deg, rgba(138, 43, 226, 0.1), rgba(75, 0, 130, 0.1));
        border-radius: 4px;
      }

      .nav-magic-mystical {
        background: linear-gradient(45deg, rgba(163, 177, 138, 0.1), rgba(246, 213, 92, 0.1));
        border-radius: 4px;
      }

      .nav-background-particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
      }

      /* Button Mystical Effects */
      @keyframes buttonParticleSparkle {
        0% {
          opacity: 1;
          transform: scale(0) rotate(0deg);
        }
        50% {
          opacity: 0.8;
          transform: scale(1) rotate(180deg);
        }
        100% {
          opacity: 0;
          transform: scale(0.5) rotate(360deg);
        }
      }

      @keyframes buttonRippleExpand {
        0% {
          width: 0;
          height: 0;
          opacity: 1;
        }
        100% {
          width: 120px;
          height: 120px;
          opacity: 0;
        }
      }

      @keyframes buttonEnergyBurst {
        0% {
          opacity: 1;
          transform: rotate(var(--rotation)) translate(15px) scale(1);
        }
        100% {
          opacity: 0;
          transform: rotate(var(--rotation)) translate(40px) scale(0);
        }
      }

      /* Form Field Mystical Effects */
      .form-field-focused {
        position: relative;
      }

      .form-field-focused::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: inherit;
        background: linear-gradient(45deg, rgba(246, 213, 92, 0.2), rgba(159, 122, 234, 0.2));
        z-index: -1;
        animation: formFieldGlow 2s ease-in-out infinite alternate;
      }

      @keyframes formFieldGlow {
        0% {
          opacity: 0.3;
        }
        100% {
          opacity: 0.7;
        }
      }

      .form-field-has-content {
        background: rgba(246, 213, 92, 0.05) !important;
      }

      @keyframes typingParticleFade {
        0% {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }
        100% {
          opacity: 0;
          transform: translateY(-50%) scale(0.5);
        }
      }

      /* Scroll Animation Effects */
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
      }

      .animate-in {
        opacity: 1;
        transform: translateY(0);
      }

      /* Mystical Hover Effects */
      .hover-mystical {
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .hover-mystical::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(246, 213, 92, 0.1), transparent);
        transition: left 0.5s;
      }

      .mystical-hover-active::before {
        left: 100%;
      }

      .mystical-hover-active {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(246, 213, 92, 0.2);
      }

      /* Mystical Loading States */
      .loading-mystical {
        position: relative;
      }

      .loading-mystical::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin: -10px 0 0 -10px;
        border: 2px solid rgba(246, 213, 92, 0.3);
        border-top: 2px solid rgba(246, 213, 92, 0.8);
        border-radius: 50%;
        animation: mysticalSpin 1s linear infinite;
      }

      @keyframes mysticalSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      /* Success/Error States */
      .success-mystical {
        animation: successPulse 0.6s ease-out;
      }

      .error-mystical {
        animation: errorShake 0.5s ease-in-out;
      }

      @keyframes successPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }

      @keyframes errorShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
    `;
    document.head.appendChild(style);
  }

  /**
    * Initialize all theme components
    */
  function initTheme() {
    // Add animation styles
    addAnimationStyles();

    // Initialize components
    new CelestialAnimations();
    new SacredGeometry();
    new SmoothNavigation();
    new PerformanceOptimizer();

    // Initialize new enhanced components
    new EnhancedMoonPhases();
    new ZodiacRotations();
    new AdvancedPetals();
    new EnergyOrbs();
    new AnimationUtilities();

    // Theme is ready
    document.body.classList.add('theme-loaded');

    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('midnightMagnoliaReady', {
      detail: { version: '2.0.0' }
    }));
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Export to global namespace
  window.MidnightMagnolia.CelestialAnimations = CelestialAnimations;
  window.MidnightMagnolia.SacredGeometry = SacredGeometry;
  window.MidnightMagnolia.SmoothNavigation = SmoothNavigation;
  window.MidnightMagnolia.PerformanceOptimizer = PerformanceOptimizer;
  window.MidnightMagnolia.EnhancedMoonPhases = EnhancedMoonPhases;
  window.MidnightMagnolia.ZodiacRotations = ZodiacRotations;
  window.MidnightMagnolia.AdvancedPetals = AdvancedPetals;
  window.MidnightMagnolia.EnergyOrbs = EnergyOrbs;
  window.MidnightMagnolia.AnimationUtilities = AnimationUtilities;

})();