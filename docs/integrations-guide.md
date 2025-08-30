# 🌙 Third-Party Integrations Setup Guide

## Google Analytics 4 Setup

### 1. Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Create Property"
3. Enter property details:
   - Property name: "Midnight Magnolia"
   - Country: United States
   - Currency: USD
4. Copy the Measurement ID (G-XXXXXXXXXX)

### 2. Enhanced Ecommerce Configuration
```javascript
// The website automatically tracks these events:
gtag('event', 'purchase', {
  transaction_id: order.id,
  value: order.total,
  currency: 'USD',
  items: order.items
});

gtag('event', 'add_to_cart', {
  currency: 'USD',
  value: item.price,
  items: [item]
});
```

### 3. Conversion Goals
Set up these conversion events in GA4:
- `purchase` - Completed purchases
- `sign_up` - Newsletter subscriptions
- `download` - Digital product downloads
- `view_item` - Product page views

## Google Tag Manager (Optional)

### 1. Create GTM Container
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create new container for midnight-magnolia.com
3. Copy Container ID (GTM-XXXXXXX)

### 2. Enhanced Data Layer
```javascript
// Automatic data layer events
dataLayer.push({
  'event': 'purchase',
  'ecommerce': {
    'transaction_id': order.id,
    'value': order.total,
    'currency': 'USD',
    'items': order.items
  }
});
```

## Email Marketing Setup (Klaviyo/Mailchimp)

### Klaviyo Integration
1. Create Klaviyo account
2. Install Klaviyo app in Shopify
3. Set up flows:
   - Welcome series
   - Abandoned cart
   - Post-purchase follow-up
   - Browse abandonment

### Key Email Flows
```yaml
Welcome Series:
  - Email 1: Welcome & brand introduction (immediate)
  - Email 2: Product showcase (2 days)
  - Email 3: Community invitation (5 days)

Abandoned Cart:
  - Email 1: Gentle reminder (1 hour)
  - Email 2: Social proof (24 hours)
  - Email 3: Limited time offer (72 hours)
```

## Social Media Integrations

### Instagram Feed
1. Create Instagram Business account
2. Connect to Facebook Business Manager
3. Set up Instagram Basic Display API
4. Add posts to website automatically

### Facebook Pixel
```javascript
// Add to environment variables
FACEBOOK_PIXEL_ID=your_pixel_id

// Automatic tracking events
fbq('track', 'Purchase', {
  value: order.total,
  currency: 'USD'
});
```

### TikTok Pixel
```javascript
// Add to environment variables
TIKTOK_PIXEL_ID=your_pixel_id

// Tracking setup
ttq.track('CompletePayment', {
  value: order.total,
  currency: 'USD'
});
```

## Customer Support Integration

### Intercom/Zendesk Chat
1. Create Intercom account
2. Install widget code
3. Configure business hours and auto-responses
4. Set up help articles

### Knowledge Base
Create help articles for:
- Digital product downloads
- Account management
- Shipping information
- Return policy
- Product care instructions

## Payment Processing

### Shopify Payments
1. Enable in Shopify Admin
2. Complete business verification
3. Set up bank account
4. Configure tax settings

### Stripe Integration (Additional)
```bash
# Environment variables
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Payment Methods to Enable
- Credit/Debit Cards
- PayPal
- Apple Pay
- Google Pay
- Shop Pay
- Buy now, pay later (Klarna/Afterpay)

## Security & Performance

### SSL Certificate
- Azure Static Web Apps provides SSL automatically
- Custom domain SSL configured through Azure

### CDN Configuration
```javascript
// Image optimization
const imageUrl = `https://cdn.shopify.com/s/files/1/[store]/[image]?width=800&format=webp`;
```

### Security Headers
```javascript
// Configured in staticwebapp.config.json
{
  "globalHeaders": {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block"
  }
}
```

## SEO & Schema Markup

### Structured Data
The website automatically generates:
- Organization schema
- Product schema
- Article schema
- Breadcrumb schema

### SEO Optimization
```html
<!-- Automatic meta tags -->
<meta name="description" content="Sacred digital sanctuary for healing through Southern Gothic grace">
<meta property="og:title" content="Midnight Magnolia | Southern Gothic Wellness">
<meta property="og:image" content="/images/og-image.jpg">
```

## Environment Variables Checklist

```bash
# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
FACEBOOK_PIXEL_ID=your_pixel_id
TIKTOK_PIXEL_ID=your_pixel_id

# Email Marketing
KLAVIYO_API_KEY=pk_live_...
MAILCHIMP_API_KEY=your_api_key

# Social Media
INSTAGRAM_ACCESS_TOKEN=your_token
FACEBOOK_APP_ID=your_app_id

# Customer Support
INTERCOM_APP_ID=your_app_id
ZENDESK_SUBDOMAIN=your_subdomain

# Performance
CLOUDFLARE_API_TOKEN=your_token (if using Cloudflare)
```

## Testing Checklist

### Analytics Testing
- [ ] GA4 tracking working
- [ ] Ecommerce events firing
- [ ] Conversion goals tracking
- [ ] Real-time reports showing data

### Email Testing
- [ ] Welcome series triggered
- [ ] Abandoned cart emails sending
- [ ] Newsletter signup working
- [ ] Email templates rendering correctly

### Social Media Testing
- [ ] Instagram feed displaying
- [ ] Social sharing buttons working
- [ ] Pixel tracking events
- [ ] Social login working

### Payment Testing
- [ ] Test purchases completing
- [ ] All payment methods working
- [ ] Tax calculation correct
- [ ] Receipt emails sending

---

*"Integration is where the magic happens - connecting all the pieces to create a seamless sanctuary experience."* ✨