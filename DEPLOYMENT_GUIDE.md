# 🌙 Midnight Magnolia - Complete Deployment Guide

This guide provides step-by-step instructions for deploying the complete Midnight Magnolia ecosystem to Azure and Shopify.

## 📋 Overview

The Midnight Magnolia project consists of:
- **Website**: Next.js application deployed to Azure Static Web Apps
- **Shopify Store**: Complete e-commerce store with custom theme
- **Theme**: Custom Shopify theme with mystical design elements

## 🚀 Part 1: Azure Website Deployment

### Prerequisites
- Azure account with Static Web Apps access
- GitHub repository access
- Node.js 18+ and pnpm

### Step 1: Create Azure Static Web App

1. Go to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web Apps"
4. Click "Create" and fill in:
   - **Subscription**: Your Azure subscription
   - **Resource Group**: Create new or select existing
   - **Name**: `midnight-magnolia-website`
   - **Hosting Plan**: Free (for development) or Standard (for production)
   - **Azure Functions API**: No
   - **Source**: GitHub
   - **Organization**: Your GitHub organization/username
   - **Repository**: `Online`
   - **Branch**: `master` or `main`
   - **Build Presets**: Custom
   - **App location**: `/midnight-magnolia-website-main`
   - **Output location**: `out`

### Step 2: Configure GitHub Secrets

The deployment workflow requires the following secret:
- `AZURE_STATIC_WEB_APPS_API_TOKEN`: Provided by Azure after creating the Static Web App

1. Go to your GitHub repository → Settings → Secrets and variables → Actions
2. Add the `AZURE_STATIC_WEB_APPS_API_TOKEN` from Azure

### Step 3: Deploy

The deployment will trigger automatically when you push to the main branch. The workflow file at `.github/workflows/azure-static-web-apps-deployment.yml` handles the deployment.

## 🛍️ Part 2: Shopify Store Setup

### Prerequisites
- Shopify store (development or live)
- Shopify CLI installed globally
- Admin API access token (for store configuration)

### Step 1: Install Shopify CLI

```bash
# Install globally
npm install -g @shopify/cli@latest

# Verify installation
shopify version

# Login to your Shopify account
shopify auth login
```

### Step 2: Deploy Theme

Run the theme deployment script:

```bash
# Make sure you're in the repository root
cd /path/to/Online

# Run the deployment script
./scripts/deploy-shopify-theme.sh
```

This script will:
- Check Shopify CLI installation
- Authenticate with Shopify
- List available stores
- Deploy the theme to development or production

### Step 3: Configure Store

Run the store setup script to create collections, metafields, pages, and blog:

```bash
# Run the store configuration script
./scripts/setup-shopify-store.sh
```

You'll need:
- Your store name (e.g., `your-store-name.myshopify.com`)
- Admin API access token

#### Getting Admin API Access Token

1. Go to Shopify Admin → Apps → App and sales channel settings
2. Click "Develop apps"
3. Click "Create an app"
4. Name it "Midnight Magnolia Setup"
5. Go to Configuration tab
6. Configure Admin API scopes:
   - `write_products`
   - `write_collections`
   - `write_pages`
   - `write_blogs`
   - `write_metafields`
7. Save and install the app
8. Copy the Admin API access token

## 📊 Part 3: Store Content Setup

### Collections Setup ✅
The script creates these collections with automatic tagging:
- **Sacred Home Collection** → Products tagged "Sacred Home"
- **Mystical Accessories** → Products tagged "Mystical Accessories"  
- **Midnight Menagerie** → Products tagged "Pet Accessories"
- **Healing Journals & Planners** → Products tagged "Healing"
- **Tarot & Divination** → Products tagged "Spirituality"

### Product Metafields ✅
Custom metafields with `midnight_magnolia` namespace:
- `product_format` (text) → Digital Download, KDP Paperback, etc.
- `coming_soon` (boolean) → Mark products as coming soon
- `bestseller` (boolean) → Mark bestseller products  
- `category_tag` (text) → Healing, Spirituality, Design, etc.

### Required Pages ✅
- **Justice & Healing** (`/pages/justice-healing`)
- **Our Story** (`/pages/our-story`)
- **Sacred Promise** (`/pages/sacred-promise`)
- **Healing Circle** (`/pages/healing-circle`)
- **Support** (`/pages/support`)

### Blog Setup ✅
- **Handle**: `midnight-musings`
- **Comments**: Moderated
- **Categories**: Healing, Spirituality, Design, Entrepreneurship, Sacred Activism

## 🎨 Part 4: Theme Customization

After deployment, customize your theme:

1. Go to **Online Store → Themes → Customize**
2. Configure:
   - **Colors**: Mystical color palette
   - **Typography**: Sacred fonts
   - **Logo**: Upload your Midnight Magnolia logo
   - **Social Media**: Connect your platforms
   - **Newsletter**: Configure email collection

## 🔗 Part 5: Integrations

### Analytics
- Google Analytics 4 (configure in theme settings)
- Facebook Pixel (configure in theme settings)

### Email Marketing
- Set up newsletter signup forms
- Connect to your email marketing platform

### Payment Processing
- Configure Shopify Payments or third-party processors
- Set up tax calculations

## ✅ Part 6: Testing & Validation

### Website Testing
- [ ] Verify Azure deployment is successful
- [ ] Test website functionality
- [ ] Check responsive design
- [ ] Validate performance

### Store Testing
- [ ] Verify theme deployment
- [ ] Test all collections display correctly
- [ ] Verify product metafields work
- [ ] Test all pages load properly
- [ ] Check blog functionality
- [ ] Test checkout process

## 🚀 Go Live Checklist

- [ ] Azure website is deployed and accessible
- [ ] Shopify theme is deployed (production)
- [ ] All collections are populated with products
- [ ] Product metafields are configured
- [ ] All pages have final content
- [ ] Blog has initial articles
- [ ] Payment processing is configured
- [ ] Analytics are tracking
- [ ] Email marketing is connected
- [ ] SSL certificates are active
- [ ] Domain is pointed correctly

## 📞 Support

If you encounter issues:

1. **Azure Deployment**: Check GitHub Actions logs
2. **Shopify Theme**: Use `shopify theme check` for validation
3. **Store Setup**: Verify API permissions and tokens
4. **General**: Refer to `INSTALLATION.md` and theme README

## 🔧 Troubleshooting

### Common Issues

**Theme deployment fails**
- Verify Shopify CLI authentication
- Check store permissions
- Validate theme structure

**Store setup script fails**
- Verify API access token permissions
- Check store name format
- Ensure jq is installed

**Azure deployment fails**
- Check GitHub secrets configuration
- Verify build process in `midnight-magnolia-website-main`
- Review workflow logs

---

*🌙 Midnight Magnolia - Your Digital Sanctuary for Spiritual Wellness*