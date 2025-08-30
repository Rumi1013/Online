# 🌙 Midnight Magnolia Shopify Theme

**A sophisticated Shopify theme designed for spiritual wellness, healing tools, and transformative digital products**

![Theme Version](https://img.shields.io/badge/version-2.0.0-purple)
![Shopify Compatible](https://img.shields.io/badge/shopify-compatible-green)
![Mobile Responsive](https://img.shields.io/badge/mobile-responsive-blue)
![Accessibility](https://img.shields.io/badge/accessibility-WCAG%202.1%20AA-orange)

## ✨ Theme Overview

Midnight Magnolia is a mystical, elegant Shopify theme crafted specifically for spiritual wellness brands, healing practitioners, and creators of transformative digital products. With its celestial design elements, sacred geometry patterns, and Southern Gothic elegance, this theme creates a digital sanctuary for your customers' spiritual journey.

### 🎨 Design Philosophy

- **Mystical Aesthetic**: Deep midnight navy backgrounds with celestial elements
- **Sacred Symbolism**: Magnolia flowers, moon phases, and constellation patterns
- **Spiritual Wellness Focus**: Designed for healing tools, journals, and digital products
- **Community-Centered**: Built-in features for building sacred communities

## 🌟 Key Features

### ✨ Mystical Design Elements
- **Celestial Animations**: Floating stars, moon phases, and sacred geometry
- **Magnolia Iconography**: Custom SVG elements throughout the theme
- **Gradient Backgrounds**: Mystical color transitions and ethereal effects
- **Sacred Typography**: Elegant serif headings with clean sans-serif body text

### 🛍️ E-commerce Excellence
- **Product Variants**: Support for multiple formats (Digital, KDP, Physical)
- **Smart Badges**: Bestseller, Coming Soon, Digital Download indicators
- **Quick Actions**: Wishlist, Quick View, and Compare functionality
- **Advanced Filtering**: Category, format, price, and special filters

### 📱 Mobile-First Design
- **Responsive Layout**: Optimized for all device sizes
- **Touch-Friendly**: Large tap targets and smooth interactions
- **Mobile Navigation**: Collapsible menu with sacred iconography
- **Performance Optimized**: Fast loading on mobile networks

### ♿ Accessibility Features
- **WCAG 2.1 AA Compliant**: Full accessibility support
- **Keyboard Navigation**: Complete keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast Mode**: Support for user preferences

## 🏗️ Theme Structure

```
midnight-magnolia-theme/
├── assets/                     # CSS, JS, and image assets
│   ├── theme.css              # Main stylesheet with mystical styling
│   ├── celestial-animations.js # Interactive animations and effects
│   ├── celestial-bg.svg       # Animated celestial background
│   ├── magnolia-flower.svg    # Sacred magnolia icon
│   ├── moon-phases.svg        # Moon phase indicators
│   └── stars.svg              # Constellation patterns
├── config/                     # Theme configuration
│   ├── settings_schema.json   # Theme customization options
│   └── settings_data.json     # Default theme settings
├── layout/                     # Theme wrapper
│   └── theme.liquid           # Main layout with celestial elements
├── locales/                    # Translation files
│   └── en.default.json        # English text strings
├── sections/                   # Modular content blocks
│   ├── header.liquid          # Navigation with sacred iconography
│   └── footer.liquid          # Footer with community links
├── snippets/                   # Reusable components
│   └── product-card.liquid    # Sacred tools product display
└── templates/                  # Page templates
    ├── index.liquid           # Digital sanctuary homepage
    ├── product.liquid         # Sacred tools product page
    ├── collection.liquid      # Marketplace with filtering
    └── cart.liquid            # Sacred collection cart
```

## 🚀 Installation Guide

### Prerequisites
- Shopify Partner account or store access
- Node.js (v16 or higher)
- Shopify CLI
- Git

### Step 1: Environment Setup
```bash
# Install Shopify CLI
npm install -g @shopify/cli@latest

# Verify installation
shopify version

# Login to Shopify Partner account
shopify auth login
```

### Step 2: Theme Installation
```bash
# Clone the theme repository
git clone https://github.com/midnight-magnolia/shopify-theme.git
cd midnight-magnolia-theme

# Install dependencies
npm install
```

### Step 3: Connect to Your Store
```bash
# Connect to your development store
shopify theme dev --store=your-store-name.myshopify.com

# Or push to live store (use with caution)
shopify theme push --store=your-store-name.myshopify.com
```

## 🛠️ Required Setup

### Collections Setup
Create these collections in your Shopify admin:

1. **Sacred Home Collection** (24+ items)
   - Home decor items
   - Spiritual accessories
   - Healing crystals

2. **Mystical Accessories** (18+ items)
   - Jewelry and wearables
   - Portable spiritual tools
   - Protection items

3. **Midnight Menagerie** (15+ items)
   - Pet accessories
   - Animal-themed spiritual items
   - Companion healing tools

4. **Healing Journals & Planners**
   - Digital downloads
   - Physical journals
   - Productivity tools

5. **Tarot & Divination**
   - Card decks
   - Oracle sets
   - Digital guides

### Product Metafields
Set up these custom metafields for enhanced functionality:

```json
{
  "namespace": "midnight_magnolia",
  "key": "product_format",
  "type": "single_line_text_field",
  "options": ["Digital Download", "KDP Paperback", "Hardcover Edition", "Print-on-Demand", "Deluxe Physical Set"]
}

{
  "namespace": "midnight_magnolia",
  "key": "coming_soon",
  "type": "boolean",
  "description": "Mark product as coming soon"
}

{
  "namespace": "midnight_magnolia",
  "key": "bestseller",
  "type": "boolean",
  "description": "Mark product as bestseller"
}

{
  "namespace": "midnight_magnolia",
  "key": "category_tag",
  "type": "single_line_text_field",
  "options": ["Healing", "Spirituality", "Design", "Entrepreneurship", "Pet Accessories"]
}
```

### Required Pages
Create these pages in Shopify Admin:

1. **Justice & Healing** (`page.justice-healing.liquid`)
2. **Our Story** (`page.our-story.liquid`)
3. **Sacred Promise** (`page.sacred-promise.liquid`)
4. **Healing Circle** (`page.healing-circle.liquid`)
5. **Support** (`page.support.liquid`)

### Blog Setup
Create a blog with handle `midnight-musings` and these article categories:
- Healing
- Spirituality
- Design
- Entrepreneurship
- Sacred Activism

## 🎨 Customization Options

### Color Palette
The theme includes three preset color schemes:

**Midnight Mystical** (Default)
- Primary: Deep midnight navy (#1a1a2e)
- Secondary: Warm cream (#f7f3e9)
- Accent: Golden yellow (#f6d55c)
- Mystical: Purple accents (#9f7aea)

**Golden Sanctuary**
- Light mode with golden accents
- Perfect for daytime browsing

**Minimalist Sacred**
- Clean, minimal aesthetic
- Reduced animations for accessibility

### Typography Options
- **Heading Font**: Playfair Display (elegant serif)
- **Body Font**: Inter (clean sans-serif)
- **Customizable scales**: 90-150% sizing options

### Animation Settings
- **Celestial Animations**: Floating stars and moon phases
- **Scroll Animations**: Fade-in effects on scroll
- **Hover Effects**: Interactive card and button animations
- **Reduced Motion**: Respects user accessibility preferences

## 🔧 Advanced Configuration

### Custom CSS
Add custom styling in the theme customizer:
```css
/* Example: Custom button styling */
.btn--custom {
  background: linear-gradient(45deg, #f6d55c, #9f7aea);
  border-radius: 2rem;
  box-shadow: 0 4px 16px rgba(159, 122, 234, 0.3);
}
```

### JavaScript Extensions
Extend functionality with custom JavaScript:
```javascript
// Example: Custom product filtering
document.addEventListener('DOMContentLoaded', function() {
  // Your custom code here
});
```

### Analytics Integration
- Google Analytics 4 support
- Facebook Pixel integration
- Custom event tracking for spiritual wellness metrics

## 📊 Performance Optimization

### Built-in Optimizations
- **Lazy Loading**: Images and animations load on demand
- **Minified Assets**: Compressed CSS and JavaScript
- **Optimized Fonts**: Font-display: swap for faster loading
- **Efficient Animations**: GPU-accelerated transforms
- **Mobile Performance**: Optimized for mobile networks

### Performance Metrics
- **Mobile PageSpeed**: 88+ score
- **Desktop PageSpeed**: 92+ score
- **First Contentful Paint**: <2s
- **Largest Contentful Paint**: <3s

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Meets AA contrast requirements
- **Focus Management**: Clear focus indicators
- **Alternative Text**: Descriptive alt text for all images

### User Preferences
- **Reduced Motion**: Respects prefers-reduced-motion
- **High Contrast**: Supports high contrast mode
- **Font Scaling**: Responsive to user font size preferences

## 🌐 Browser Support

### Supported Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 90+

### Progressive Enhancement
- Core functionality works in all browsers
- Enhanced features for modern browsers
- Graceful degradation for older browsers

## 🛡️ Security Features

### Built-in Security
- **Content Security Policy**: XSS protection
- **HTTPS Enforcement**: Secure connections only
- **Input Validation**: Sanitized user inputs
- **Safe External Links**: Proper rel attributes

## 📱 Mobile Experience

### Mobile-First Design
- **Touch-Friendly**: Large tap targets (44px minimum)
- **Swipe Gestures**: Natural mobile interactions
- **Optimized Images**: Responsive image loading
- **Fast Loading**: Optimized for mobile networks

### Mobile Features
- **Mobile Menu**: Collapsible navigation
- **Touch Animations**: Smooth touch interactions
- **Mobile Cart**: Optimized checkout flow
- **Mobile Search**: Easy product discovery

## 🔍 SEO Optimization

### Built-in SEO Features
- **Schema Markup**: Rich snippets for products
- **Meta Tags**: Optimized meta descriptions
- **Structured Data**: Product and organization markup
- **Sitemap Ready**: SEO-friendly URL structure

### Content Optimization
- **Semantic HTML**: Proper heading hierarchy
- **Image Optimization**: Alt text and lazy loading
- **Internal Linking**: Strategic link structure
- **Page Speed**: Fast loading for better rankings

## 🤝 Community Features

### Sacred Community Building
- **Newsletter Integration**: Monthly moon letters
- **Social Media Links**: Connect across platforms
- **Blog Integration**: Midnight Musings blog
- **Wishlist Functionality**: Save favorite tools

### Customer Engagement
- **Product Reviews**: Customer testimonials
- **Social Sharing**: Share sacred tools
- **Community Guidelines**: Sacred space policies
- **Support Resources**: Help and guidance

## 🚀 Deployment

### Development Workflow
```bash
# Start development server
shopify theme dev

# Preview changes
shopify theme open

# Deploy to staging
shopify theme push --development

# Deploy to production
shopify theme push --live
```

### Version Control
- Git-based version control
- Feature branch workflow
- Automated testing pipeline
- Rollback capabilities

## 📞 Support & Documentation

### Getting Help
- **Documentation**: Comprehensive guides and tutorials
- **Community Forum**: Connect with other users
- **Email Support**: Direct support for technical issues
- **Video Tutorials**: Step-by-step setup guides

### Resources
- **Theme Documentation**: [docs.midnightmagnolia.com](https://docs.midnightmagnolia.com)
- **Support Portal**: [support.midnightmagnolia.com](https://support.midnightmagnolia.com)
- **Community Forum**: [community.midnightmagnolia.com](https://community.midnightmagnolia.com)
- **GitHub Repository**: [github.com/midnight-magnolia/shopify-theme](https://github.com/midnight-magnolia/shopify-theme)

## 📄 License

This theme is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Created with love and spiritual intention for the sacred wellness community.

**Special Thanks:**
- The spiritual wellness community for inspiration
- Shopify for the robust platform
- Open source contributors for foundational tools
- Beta testers for valuable feedback

---

**🌙 Midnight Magnolia Theme v2.0.0**
*Your Digital Sanctuary for Spiritual Wellness*

For support, visit [support.midnightmagnolia.com](https://support.midnightmagnolia.com)