# 🌙 Midnight Magnolia Complete Setup Guide

## Overview

This guide provides step-by-step instructions for setting up both the Shopify store with the Midnight Magnolia theme and migrating the website to WordPress.com. Follow this guide to create a complete digital sanctuary for spiritual wellness.

## Part 1: Shopify Store Setup

### Step 1: Shopify Theme Installation

#### Prerequisites
- Shopify store (Partner development store or paid plan)
- Admin access to your Shopify store
- Basic understanding of Shopify administration

#### Installation Process
1. **Upload Theme Files**
   ```bash
   # If using Shopify CLI
   cd midnight-magnolia-theme
   shopify theme push --store=your-store-name.myshopify.com
   ```

   Or manually:
   - Go to Shopify Admin → Online Store → Themes
   - Click "Upload theme"
   - Upload the theme ZIP file
   - Click "Publish" to activate

2. **Verify Installation**
   - Check that all template files loaded correctly
   - Verify CSS and JavaScript files are working
   - Test mobile responsiveness

### Step 2: Required Collections Setup

Create these collections with the specified handles:

```markdown
1. Sacred Home Collection
   - Handle: sacred-home
   - Description: Transform your space with sacred home decor
   - Products: 24+ items (candles, crystals, artwork)

2. Mystical Accessories
   - Handle: mystical-accessories  
   - Description: Wearable spiritual tools and jewelry
   - Products: 18+ items (jewelry, bags, protection items)

3. Midnight Menagerie
   - Handle: midnight-menagerie
   - Description: Sacred accessories for your animal companions
   - Products: 15+ items (pet accessories, spiritual pet items)

4. Healing Journals & Planners
   - Handle: healing-journals
   - Description: Digital and physical journals for spiritual growth
   - Products: Digital downloads, printables, physical journals

5. Tarot & Divination
   - Handle: tarot-divination
   - Description: Tools for divination and spiritual guidance
   - Products: Tarot decks, oracle cards, digital guides
```

### Step 3: Product Metafields Configuration

Set up custom metafields in Shopify Admin → Settings → Metafields:

```json
{
  "namespace": "midnight_magnolia",
  "metafields": [
    {
      "key": "product_format",
      "name": "Product Format",
      "type": "single_line_text_field",
      "description": "Format of the product (Digital Download, KDP Paperback, etc.)"
    },
    {
      "key": "coming_soon",
      "name": "Coming Soon",
      "type": "boolean", 
      "description": "Mark product as coming soon"
    },
    {
      "key": "bestseller",
      "name": "Bestseller",
      "type": "boolean",
      "description": "Mark product as bestseller"
    },
    {
      "key": "category_tag",
      "name": "Category Tag",
      "type": "single_line_text_field",
      "description": "Product category (Healing, Spirituality, Design, etc.)"
    }
  ]
}
```

### Step 4: Theme Customization

#### Colors & Branding
1. Go to Online Store → Themes → Customize
2. Configure theme settings:
   - **Midnight Navy**: #1a1a2e
   - **Magnolia White**: #f7f3e9
   - **Warm Cream**: #e8dcc0
   - **Golden Yellow**: #f6d55c
   - **Mystical Purple**: #9f7aea

#### Logo & Typography
- Upload logo (recommended size: 240px wide)
- Configure fonts:
  - Headings: Playfair Display
  - Body: Georgia

#### Navigation Setup
Create main navigation menu with these items:
- Home
- Products → (Link to collections)
  - Sacred Home
  - Mystical Accessories
  - Healing Journals
  - Tarot & Divination
- Services
- AI & Tech
- About
- Contact

### Step 5: Essential Pages Creation

Create these pages in Shopify Admin → Online Store → Pages:

```markdown
1. About Us (/pages/about)
   - Our sacred story and mission
   - Founder information
   - Company values and vision

2. Our Story (/pages/our-story)
   - Detailed founder journey
   - Company history and evolution
   - Sacred activism and community building

3. Justice & Healing (/pages/justice-healing)
   - Sacred activism content
   - Community healing initiatives
   - Social justice partnerships

4. Services (/pages/services)
   - Spiritual consultations
   - Business coaching
   - AI literacy training
   - Custom service packages

5. AI & Tech (/pages/ai-tech)
   - Technology empowerment resources
   - AI literacy programs
   - Digital tool recommendations
   - Tech for spiritual entrepreneurs

6. Contact (/pages/contact)
   - Contact form
   - Business information
   - Social media links
   - Office hours and availability
```

### Step 6: Blog Setup (Midnight Musings)

1. **Create Blog**
   - Go to Online Store → Blog posts
   - Create blog titled "Midnight Musings"
   - Set up article categories/tags:
     - Healing
     - Spirituality  
     - Moon Magic
     - Tarot & Divination
     - Business & Entrepreneurship
     - AI & Technology

2. **Initial Content**
   - Create 3-5 foundational articles
   - Set up author bio and photo
   - Configure comment settings
   - Enable social sharing

### Step 7: Apps & Integrations

#### Essential Apps (Free/Low-Cost)
```markdown
1. Newsletter Signup
   - Shopify Email (free)
   - Mailchimp integration
   - Newsletter popup configuration

2. Reviews & Social Proof
   - Product Reviews app
   - Customer photo features
   - Social media feed integration

3. SEO & Analytics
   - Google Analytics integration
   - Facebook Pixel setup
   - SEO meta tags optimization

4. Customer Support
   - Live chat integration
   - FAQ page setup  
   - Help desk configuration
```

### Step 8: Payment & Shipping Setup

#### Payment Gateways
- Shopify Payments (recommended)
- PayPal Express Checkout
- Digital wallet options (Apple Pay, Google Pay)

#### Shipping Configuration
- Free shipping threshold ($75+)
- Digital download settings
- International shipping options
- Express shipping for physical products

## Part 2: WordPress.com Migration

### Step 1: WordPress.com Account Setup

1. **Create Account**
   - Sign up at wordpress.com
   - Choose free plan initially
   - Select site name: midnightmagnolia.wordpress.com

2. **Theme Selection**
   - Recommended themes:
     - **Twenty Twenty-Three**: Modern, customizable
     - **Seedlet**: Clean, blog-focused  
     - **Lever**: Business-oriented
     - **Pendant**: Elegant, creative

### Step 2: Content Migration Strategy

#### Migration Priority Order
```markdown
1. Homepage - Hero section and key content
2. About - Company story and mission  
3. Services - Service offerings and descriptions
4. Blog Setup - Midnight Musings migration
5. Contact - Forms and contact information
6. Additional Pages - AI & Tech, Events, etc.
```

#### Content Preparation
1. **Export Existing Content**
   - Copy all text content from current site
   - Download all images and media
   - Document current navigation structure
   - List all external links and integrations

2. **Content Organization**
   - Create content spreadsheet
   - Organize images by page/section
   - Plan WordPress categories and tags
   - Prepare SEO meta descriptions

### Step 3: WordPress Design Recreation

#### Limited Custom CSS (Free Plan)
```css
/* Add via Appearance → Customize → Additional CSS */

/* Color Scheme */
:root {
  --midnight-navy: #1a1a2e;
  --magnolia-white: #f7f3e9;
  --golden-yellow: #f6d55c;
  --mystical-purple: #9f7aea;
}

/* Typography */
.site-title {
  font-family: 'Playfair Display', serif !important;
  color: var(--golden-yellow) !important;
}

/* Mystical Cards */
.mystical-card {
  background: rgba(247, 243, 233, 0.05);
  border: 1px solid rgba(247, 243, 233, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

/* Golden Accents */
.golden-accent {
  color: var(--golden-yellow);
  font-weight: 600;
}

/* Sacred Buttons */
.wp-block-button__link {
  background: linear-gradient(45deg, var(--golden-yellow), var(--mystical-purple)) !important;
  border-radius: 0.5rem !important;
  padding: 1rem 2rem !important;
}
```

#### Typography Setup
1. **Google Fonts Integration**
   - Add Playfair Display for headings
   - Use Georgia for body text  
   - Implement via theme customizer

2. **Font Hierarchy**
   - H1: Playfair Display, 3rem
   - H2: Playfair Display, 2.5rem
   - H3: Playfair Display, 2rem
   - Body: Georgia, 1.1rem

### Step 4: Functionality Recreation

#### WordPress.com Free Plan Features
```markdown
1. Navigation Menus
   - Primary menu with all pages
   - Mobile-responsive design
   - Dropdown submenus

2. Contact Forms
   - WordPress.com contact form block
   - Newsletter signup integration
   - Contact information display

3. Blog Features  
   - Category organization
   - Archive pages
   - Social sharing buttons
   - Comment system

4. Widgets
   - Newsletter signup widget
   - Social media links
   - Recent posts display
   - Custom text widgets
```

### Step 5: SEO & Performance Optimization

#### SEO Setup
1. **Site Settings**
   - Site title: "Midnight Magnolia - Your Digital Sanctuary for Spiritual Wellness"
   - Tagline: "Empowering spiritual entrepreneurs with sacred tools and wisdom"
   - Meta description: Optimize for each page

2. **Content Optimization**
   - Proper heading hierarchy (H1, H2, H3)
   - Internal linking strategy
   - Image alt text optimization
   - Schema markup (basic)

#### Performance Optimization
- Image compression before upload
- Minimize use of heavy media
- Clean, semantic HTML structure
- Mobile-first responsive design

## Part 3: Integration & Launch

### Step 1: Cross-Platform Integration

#### Shopify → WordPress Integration
```markdown
1. Blog Content
   - Cross-post selected Shopify blog content to WordPress
   - Link WordPress blog posts to relevant Shopify products
   - Maintain consistent branding and voice

2. Navigation Links
   - Add Shopify store link to WordPress navigation
   - Include WordPress blog link in Shopify navigation
   - Ensure seamless user experience between platforms

3. Social Media Integration
   - Consistent social media presence
   - Cross-promotion between platforms
   - Unified brand messaging
```

### Step 2: Testing & Quality Assurance

#### Pre-Launch Checklist
```markdown
Shopify Store:
- [ ] All theme templates working correctly
- [ ] Product pages display properly
- [ ] Cart and checkout functioning  
- [ ] Mobile responsiveness verified
- [ ] Payment gateways tested
- [ ] Shipping settings configured
- [ ] Email notifications working

WordPress Site:
- [ ] All pages migrated and functional
- [ ] Navigation working properly
- [ ] Forms testing completed
- [ ] Mobile responsiveness verified
- [ ] SEO settings configured
- [ ] Blog functionality working
- [ ] Contact forms operational
```

### Step 3: Launch Strategy

#### Soft Launch (Week 1)
- Test with limited audience
- Gather feedback and make adjustments
- Monitor performance and user behavior
- Fix any identified issues

#### Full Launch (Week 2)
- Announce across all channels
- Update all social media profiles
- Submit sitemaps to search engines  
- Begin content marketing campaigns

#### Post-Launch (Ongoing)
- Regular content updates
- Performance monitoring
- User feedback collection
- Continuous optimization

## Part 4: Ongoing Maintenance

### Monthly Tasks
```markdown
Shopify Store:
- [ ] Update product inventory
- [ ] Add new products/collections
- [ ] Review and respond to customer reviews
- [ ] Analyze sales and traffic data
- [ ] Update blog content (2-4 posts/month)

WordPress Site:
- [ ] Publish new blog posts (4-6/month)
- [ ] Update company information as needed
- [ ] Monitor site performance and speed
- [ ] Review and update SEO settings
- [ ] Engage with blog comments and community
```

### Quarterly Reviews
- Analyze performance metrics
- Plan new features and improvements
- Review and update content strategy
- Assess upgrade needs for both platforms
- Plan seasonal campaigns and promotions

## Support Resources

### Documentation
- **Shopify**: [help.shopify.com](https://help.shopify.com)
- **WordPress.com**: [wordpress.com/support](https://wordpress.com/support)
- **Theme Documentation**: See README.md files

### Community
- Shopify Partners Community
- WordPress.com Forums  
- Spiritual Entrepreneur Facebook Groups
- Local small business networking

### Professional Services
- **Theme Customization**: Available for complex modifications
- **Content Creation**: Professional copywriting and design
- **SEO Optimization**: Advanced search engine optimization
- **Marketing Strategy**: Digital marketing consultation

---

**🌙 Complete Setup Guide for Midnight Magnolia**
*Creating your digital sanctuary for spiritual wellness*

*May your sacred business bloom and flourish* ✨