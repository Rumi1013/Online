# 🌙 Midnight Magnolia Theme - Installation Guide

## Quick Installation (Recommended)

### Method 1: Upload ZIP File to Shopify Admin

1. **Download the Theme Package**
   - Download `midnight-magnolia-theme-v1.1.0.zip` (85KB)

2. **Upload to Shopify**
   - Go to your Shopify Admin → Online Store → Themes
   - Click "Upload theme"
   - Select the `midnight-magnolia-theme-v1.1.0.zip` file
   - Click "Upload"

3. **Activate the Theme**
   - Once uploaded, click "Publish" to make it live
   - Or click "Customize" to preview and configure first

### Method 2: Shopify CLI Installation

```bash
# Extract the theme
unzip midnight-magnolia-theme-v1.1.0.zip
cd midnight-magnolia-theme

# Connect to your store
shopify theme push --store=your-store-name.myshopify.com
```

## Post-Installation Setup

### Required Collections
Create these collections in Shopify Admin:
- `sacred-home` - Sacred Home Collection
- `mystical-accessories` - Mystical Accessories
- `midnight-menagerie` - Midnight Menagerie
- `healing-journals` - Healing Journals & Planners
- `tarot-divination` - Tarot & Divination

### Required Product Metafields
Set up custom metafields with namespace `midnight_magnolia`:
- `product_format` (text) - Digital Download, KDP Paperback, etc.
- `coming_soon` (boolean) - Mark products as coming soon
- `bestseller` (boolean) - Mark bestseller products
- `category_tag` (text) - Healing, Spirituality, Design, etc.

### Theme Customization
1. Go to Online Store → Themes → Customize
2. Configure colors, fonts, and layout options
3. Upload your logo and favicon
4. Set up social media links
5. Configure newsletter settings

## Package Contents

The ZIP file contains:
- **Assets** (8 files): CSS, JavaScript, and SVG graphics
- **Config** (2 files): Theme settings and default data
- **Layout** (1 file): Main theme wrapper
- **Locales** (1 file): English text strings
- **Sections** (2 files): Header and footer components
- **Snippets** (3 files): Reusable components (product-card, meta-tags, cart-drawer)
- **Templates** (8 files): Page templates including expanded Our Story, Justice & Healing, enhanced blog and article templates
- **README.md**: Comprehensive documentation

## Support

For installation help or customization support:
- 📖 Full Documentation: See README.md in the theme package
- 🎥 Video Tutorials: Available after installation
- 💬 Community Support: Connect with other users
- 📧 Direct Support: For technical issues

---

**🌙 Midnight Magnolia Theme v1.1.0**
*Your Digital Sanctuary for Spiritual Wellness*

## New in v1.1.0
- ✨ **NEW:** Expanded Our Story page template with founder information and mission
- ✨ **NEW:** Detailed Justice & Healing page with sacred activism content
- 🔥 **ENHANCED:** Midnight Musings blog with featured articles, categories, and newsletter signup
- 🔥 **ENHANCED:** Comprehensive article template with social sharing, comments, and related posts
- 📧 **IMPROVED:** Newsletter signup forms and community engagement features
- 🎨 **ADDED:** Sidebar widgets, author sections, and enhanced typography

## Fixed in v1.0.1
- ✅ Added missing `meta-tags.liquid` snippet for SEO and social media
- ✅ Added missing `cart-drawer.liquid` snippet for sliding cart functionality
- ✅ Added `base.css` for core styling and component support
- ✅ Added `global.js` for cart functionality and interactive elements
- ✅ Fixed all Liquid template errors
- ✅ Enhanced theme stability and functionality