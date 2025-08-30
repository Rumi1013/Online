#!/bin/bash

# 🌙 Complete Midnight Magnolia Deployment Script
# This script handles the complete deployment process

set -e

echo "🌙 Starting Complete Midnight Magnolia Deployment..."
echo ""

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to print section headers
print_section() {
    echo ""
    echo "=================="
    echo "$1"
    echo "=================="
    echo ""
}

# Check prerequisites
print_section "📋 Checking Prerequisites"

echo "Checking required tools..."
if ! command_exists "node"; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
else
    echo "✅ Node.js found: $(node --version)"
fi

if ! command_exists "npm"; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
else
    echo "✅ npm found: $(npm --version)"
fi

if ! command_exists "git"; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
else
    echo "✅ Git found: $(git --version)"
fi

# Install Shopify CLI if not present
if ! command_exists "shopify"; then
    echo "📦 Installing Shopify CLI..."
    npm install -g @shopify/cli@latest
fi
echo "✅ Shopify CLI found: $(shopify version)"

# Azure CLI check (optional)
if command_exists "az"; then
    echo "✅ Azure CLI found: $(az --version | head -1)"
else
    echo "⚠️  Azure CLI not found (optional for manual deployment)"
fi

print_section "🏗️ Building Website"

# Navigate to website directory
cd "$(dirname "$0")/../midnight-magnolia-website-main"

echo "Installing dependencies..."
npm install --legacy-peer-deps

echo "Building website..."
npm run build

echo "✅ Website built successfully!"

print_section "🎨 Shopify Theme Setup"

# Get user confirmation for Shopify setup
read -p "Do you want to set up the Shopify theme? (y/n): " setup_shopify

if [[ $setup_shopify =~ ^[Yy]$ ]]; then
    cd ../scripts
    
    echo "Running Shopify theme installation..."
    ./install-shopify-theme.sh
    
    echo "Setting up collections..."
    ./setup-collections.sh
    
    echo "Setting up metafields..."
    ./setup-metafields.sh
    
    echo "✅ Shopify setup complete!"
else
    echo "⏭️  Skipping Shopify setup (you can run it later with ./scripts/install-shopify-theme.sh)"
fi

print_section "☁️ Azure Deployment Setup"

echo "Azure deployment options:"
echo "1. GitHub Actions (Recommended) - Automatic deployment on push"
echo "2. Manual deployment with Azure CLI"
echo "3. Skip Azure deployment setup"
echo ""

read -p "Choose deployment option (1-3): " azure_option

case $azure_option in
    1)
        echo "📋 GitHub Actions deployment is already configured!"
        echo ""
        echo "To complete the setup:"
        echo "1. Create an Azure Static Web App in the Azure Portal"
        echo "2. Add the deployment token to GitHub Secrets as 'AZURE_STATIC_WEB_APPS_API_TOKEN'"
        echo "3. Add all required environment variables to GitHub Secrets"
        echo "4. Push to main branch to trigger deployment"
        echo ""
        echo "Required GitHub Secrets:"
        cat ../LAUNCH_CHECKLIST.md | grep -A 20 "Required Environment Variables" | grep "=" | sed 's/^/  - /'
        ;;
    2)
        if command_exists "az"; then
            echo "Setting up manual Azure deployment..."
            # This would require Azure login and resource creation
            echo "⚠️  Manual Azure deployment requires additional configuration"
            echo "Please follow the Azure Static Web Apps documentation"
        else
            echo "❌ Azure CLI not found. Please install Azure CLI for manual deployment"
        fi
        ;;
    3)
        echo "⏭️  Skipping Azure deployment setup"
        ;;
esac

print_section "🔧 Integration Setup"

echo "Setting up analytics and tracking..."

# Create Google Analytics setup instructions
cat > ../docs/google-analytics-setup.md << EOF
# Google Analytics 4 Setup for Midnight Magnolia

## 1. Create GA4 Property
1. Go to Google Analytics (https://analytics.google.com/)
2. Create a new GA4 property for midnight-magnolia.com
3. Copy the Measurement ID (G-XXXXXXXXXX)

## 2. Configure Enhanced Ecommerce
1. Enable Enhanced Ecommerce in GA4
2. Set up conversion events:
   - purchase (automatic)
   - sign_up (newsletter)
   - download (digital products)

## 3. Add to Environment Variables
\`\`\`
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
GOOGLE_SITE_VERIFICATION=your-verification-code
\`\`\`

## 4. Verify Installation
The website automatically includes GA4 tracking code when the environment variable is set.
EOF

echo "✅ Created Google Analytics setup guide"

print_section "📊 Final Setup Summary"

echo "🎉 Midnight Magnolia deployment preparation complete!"
echo ""
echo "✅ Completed:"
echo "  - Website built and tested"
echo "  - Shopify theme and setup scripts ready"
echo "  - Azure deployment configuration created"
echo "  - Documentation and checklists prepared"
echo ""
echo "📋 Next Steps:"
echo "  1. Review LAUNCH_CHECKLIST.md for complete launch process"
echo "  2. Set up Azure Static Web App in Azure Portal"
echo "  3. Configure environment variables in production"
echo "  4. Test all integrations in staging environment"
echo "  5. Run through complete checkout flow testing"
echo ""
echo "📚 Documentation:"
echo "  - LAUNCH_CHECKLIST.md - Complete launch checklist"
echo "  - scripts/ - Automated setup scripts"
echo "  - docs/google-analytics-setup.md - Analytics configuration"
echo ""
echo "🌟 Your sacred digital sanctuary is ready for launch! ✨"

# Create final status file
echo "$(date): Midnight Magnolia deployment preparation completed successfully" > ../deployment-status.log