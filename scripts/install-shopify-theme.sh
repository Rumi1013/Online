#!/bin/bash

# 🌙 Midnight Magnolia Shopify Theme Installation Script
# This script installs and configures the Midnight Magnolia theme

set -e

echo "🌙 Starting Midnight Magnolia Shopify Theme Installation..."

# Check if Shopify CLI is installed
if ! command -v shopify &> /dev/null; then
    echo "📦 Installing Shopify CLI..."
    npm install -g @shopify/cli@latest
fi

# Verify Shopify CLI installation
echo "✨ Verifying Shopify CLI installation..."
shopify version

# Check if theme directory exists
if [ ! -d "../midnight-magnolia-theme" ]; then
    echo "❌ Error: midnight-magnolia-theme directory not found!"
    echo "Please ensure you are running this script from the scripts directory."
    exit 1
fi

echo "🔐 Please log in to your Shopify Partner account..."
shopify auth login

# Get store name from user
read -p "🏪 Enter your Shopify store name (e.g., your-store-name for your-store-name.myshopify.com): " STORE_NAME

if [ -z "$STORE_NAME" ]; then
    echo "❌ Store name cannot be empty!"
    exit 1
fi

echo "🎯 Connecting to store: $STORE_NAME.myshopify.com"

# Navigate to theme directory
cd ../midnight-magnolia-theme

# Push theme to store
echo "📤 Uploading theme to your Shopify store..."
shopify theme push --store=$STORE_NAME.myshopify.com --development

echo "✅ Theme uploaded successfully!"
echo ""
echo "📋 Next Steps:"
echo "1. Go to your Shopify Admin → Online Store → Themes"
echo "2. Find 'Midnight Magnolia' in your theme library"
echo "3. Click 'Customize' to preview and configure"
echo "4. Click 'Publish' when ready to make it live"
echo ""
echo "⚙️  Don't forget to run the post-installation setup:"
echo "   ./setup-collections.sh"
echo "   ./setup-metafields.sh"
echo ""
echo "🌟 Theme installation complete! Visit your store to see the magic ✨"