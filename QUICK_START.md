# 🌙 Midnight Magnolia - Quick Start Guide

## Overview
The Midnight Magnolia project is now fully configured for deployment to Azure and Shopify. This guide provides the essential steps to go live.

## 🚀 Quick Deployment Commands

### 1. Deploy to Azure (Website)
```bash
# Azure deployment happens automatically via GitHub Actions
# Just ensure you have the Azure Static Web Apps token in GitHub Secrets
# The workflow will trigger on push to main branch
```

### 2. Deploy Shopify Theme
```bash
# Run the automated deployment script
./scripts/deploy-shopify-theme.sh

# Choose development or production deployment
# Script handles authentication and store selection
```

### 3. Configure Shopify Store
```bash
# Set up collections, metafields, pages, and blog
./scripts/setup-shopify-store.sh

# You'll need your store URL and Admin API access token
# Script creates all required store structure automatically
```

## 📋 Prerequisites Checklist

### Azure Requirements
- [ ] Azure account with Static Web Apps enabled
- [ ] GitHub repository access
- [ ] Azure Static Web Apps API token added to GitHub Secrets

### Shopify Requirements  
- [ ] Shopify store (development or live)
- [ ] Shopify CLI installed (`npm install -g @shopify/cli@latest`)
- [ ] Shopify Admin API access token with required permissions

### Development Environment
- [ ] Node.js 18+ installed
- [ ] pnpm installed (`npm install -g pnpm`)
- [ ] Git access to repository

## 🛍️ What Gets Created

### Azure Static Web App
- Next.js website with mystical design
- Optimized for spiritual wellness content
- Integrated with Shopify store
- Security headers and performance optimization

### Shopify Store Structure
- **5 Collections** with automatic product tagging
- **4 Custom Metafields** for enhanced product information
- **5 Required Pages** with custom templates
- **Blog Setup** for Midnight Musings content
- **Complete Theme** with celestial design elements

## 🔗 Integration Features

### Cross-Platform Analytics
- Google Analytics 4 tracking across both platforms
- Facebook Pixel integration
- Custom event tracking for spiritual wellness metrics

### SEO Optimization
- Canonical URLs properly configured
- Schema markup for enhanced search results
- Optimized meta tags and structured data

### Security & Performance
- HTTPS enforcement across all platforms
- Content Security Policy configured
- CDN optimization for fast loading
- Secure webhook verification

## 📞 Support Resources

### Documentation
- `DEPLOYMENT_GUIDE.md` - Complete deployment instructions
- `INTEGRATION_CONFIG.md` - Cross-platform integration details
- `INSTALLATION.md` - Theme installation guide
- `midnight-magnolia-theme/README.md` - Theme documentation

### Scripts
- `scripts/deploy-shopify-theme.sh` - Theme deployment automation
- `scripts/setup-shopify-store.sh` - Store configuration automation
- `scripts/validate-theme.sh` - Theme validation and testing

### Configuration Files
- `staticwebapp.config.json` - Azure Static Web Apps configuration
- `.github/workflows/azure-static-web-apps-deployment.yml` - Azure deployment pipeline
- `scripts/shopify-store-config.sh` - Store structure definitions

## 🌟 Success Metrics

After deployment, verify:
- [ ] Website loads at Azure Static Web Apps URL
- [ ] Shopify store displays with custom theme
- [ ] All collections show products properly
- [ ] Product metafields display correctly
- [ ] All pages render with correct templates
- [ ] Blog functions with categories
- [ ] Cross-platform navigation works
- [ ] Analytics tracking is active
- [ ] Mobile experience is optimized

## 🚀 Go Live Steps

1. **Test in Development**: Deploy theme to development environment first
2. **Validate Content**: Ensure all collections have products
3. **Configure Settings**: Customize theme colors, fonts, and layout
4. **Test Integration**: Verify website ↔ store navigation works
5. **Production Deploy**: Deploy theme to live store
6. **Final Testing**: Complete end-to-end testing
7. **Launch**: Make store and website public

---

*🌙 Your Digital Sanctuary for Spiritual Wellness is ready to launch!*

Need help? All detailed instructions are in the `DEPLOYMENT_GUIDE.md` file.