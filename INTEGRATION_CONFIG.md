# 🌙 Midnight Magnolia - Integration Configuration

## Overview
This document outlines the integrations between the Azure-hosted website and the Shopify store.

## Environment Variables Configuration

### Azure Static Web App Settings
Configure these in Azure Portal → Static Web Apps → Configuration:

```env
# Shopify Integration
SHOPIFY_STORE_DOMAIN=your-store-name.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
SHOPIFY_ADMIN_API_ACCESS_TOKEN=your_admin_api_access_token

# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
FACEBOOK_PIXEL_ID=123456789012345

# Email Marketing
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_LIST_ID=your_list_id

# Security
NEXT_PUBLIC_SITE_URL=https://your-azure-app.azurestaticapps.net
```

### Shopify Store Settings
Configure in Shopify Admin → Online Store → Themes → Customize:

```liquid
# Theme Settings
color_primary: #9f7aea
color_secondary: #f6d55c
color_background: #1a1a2e
color_text: #ffffff

# External Website Integration
website_url: https://your-azure-app.azurestaticapps.net
blog_external_url: https://your-azure-app.azurestaticapps.net/blog

# Social Media
social_facebook: https://facebook.com/midnightmagnolia
social_instagram: https://instagram.com/midnightmagnolia
social_twitter: https://twitter.com/midnightmagnolia
```

## API Integrations

### 1. Shopify Storefront API
Used by the Azure website to display products and collections.

**Required Permissions:**
- `unauthenticated_read_products`
- `unauthenticated_read_collections`
- `unauthenticated_read_blogs`
- `unauthenticated_read_articles`

### 2. Shopify Admin API
Used for store management and advanced features.

**Required Permissions:**
- `read_products`
- `write_products`
- `read_collections`
- `write_collections`
- `read_customers`
- `read_orders`

### 3. Webhook Integrations
Set up webhooks in Shopify Admin → Settings → Notifications:

```json
{
  "webhooks": [
    {
      "topic": "orders/create",
      "endpoint": "https://your-azure-app.azurestaticapps.net/api/webhooks/order-created"
    },
    {
      "topic": "customers/create",
      "endpoint": "https://your-azure-app.azurestaticapps.net/api/webhooks/customer-created"
    },
    {
      "topic": "products/create",
      "endpoint": "https://your-azure-app.azurestaticapps.net/api/webhooks/product-created"
    }
  ]
}
```

## Cross-Platform Features

### 1. Unified Navigation
- Website header includes link to Shopify store
- Shopify theme includes link back to main website
- Consistent branding and navigation experience

### 2. Content Synchronization
- Blog articles can be cross-posted between platforms
- Product information synchronized
- Consistent SEO meta tags

### 3. Customer Journey
- Website drives traffic to Shopify store
- Store provides rich content experience
- Seamless transition between platforms

## Analytics & Tracking

### Google Analytics 4
Track across both platforms:

```javascript
// Website tracking
gtag('config', 'G-XXXXXXXXXX', {
  custom_map: {
    'custom_parameter_1': 'platform'
  }
});

// Event tracking
gtag('event', 'page_view', {
  platform: 'azure_website'
});
```

### Shopify Analytics
Built-in analytics for:
- Sales performance
- Customer behavior
- Product popularity
- Traffic sources

### Facebook Pixel
Cross-platform tracking:
```javascript
// Standard events
fbq('track', 'ViewContent');
fbq('track', 'AddToCart');
fbq('track', 'Purchase');

// Custom events
fbq('trackCustom', 'BlogEngagement');
fbq('trackCustom', 'NewsletterSignup');
```

## SEO Integration

### Schema Markup
Consistent schema across platforms:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Midnight Magnolia",
  "url": "https://your-azure-app.azurestaticapps.net",
  "sameAs": [
    "https://your-store-name.myshopify.com",
    "https://facebook.com/midnightmagnolia",
    "https://instagram.com/midnightmagnolia"
  ]
}
```

### Canonical URLs
- Website pages have canonical URLs pointing to Azure
- Store pages have canonical URLs pointing to Shopify
- Cross-referencing between platforms

## Security Considerations

### CORS Configuration
Configure Azure Static Web App to allow Shopify domains:

```json
{
  "allowedOrigins": [
    "https://*.myshopify.com",
    "https://checkout.shopify.com",
    "https://cdn.shopify.com"
  ]
}
```

### Webhook Verification
Verify Shopify webhooks using HMAC:

```javascript
const crypto = require('crypto');

function verifyShopifyWebhook(body, signature, secret) {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(body, 'utf8')
    .digest('base64');
    
  return hash === signature;
}
```

### Content Security Policy
Azure Static Web App configuration:

```json
{
  "globalHeaders": {
    "content-security-policy": "default-src 'self' https://*.myshopify.com https://*.shopify.com https://cdn.shopify.com 'unsafe-inline' 'unsafe-eval'; img-src 'self' https: data: blob:;"
  }
}
```

## Performance Optimization

### CDN Configuration
- Azure CDN for static assets
- Shopify CDN for product images
- Optimized image loading

### Caching Strategy
- Static content cached at CDN level
- Dynamic content cached with appropriate TTL
- API responses cached when appropriate

### Monitoring
- Azure Application Insights for website monitoring
- Shopify Analytics for store performance
- Custom dashboards for unified view

## Deployment Pipeline

### Automated Deployments
1. Website changes trigger Azure deployment
2. Theme changes can be deployed via CLI
3. Configuration changes require manual update

### Environment Management
- Development environment for testing
- Staging environment for validation  
- Production environment for live site

### Rollback Procedures
- Azure: Git-based rollback available
- Shopify: Theme version management
- Database: Backup and restore procedures

---

*🌙 This integration ensures a seamless experience across all Midnight Magnolia touchpoints*