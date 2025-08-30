#!/bin/bash

# 🌙 Midnight Magnolia - Shopify Theme Deployment Script
# This script automates the deployment of the Midnight Magnolia theme to Shopify

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${PURPLE}🌙 Midnight Magnolia - Shopify Deployment${NC}"
echo -e "${CYAN}======================================${NC}"

# Check if Shopify CLI is installed
if ! command -v shopify &> /dev/null; then
    echo -e "${RED}❌ Shopify CLI is not installed${NC}"
    echo -e "${YELLOW}Installing Shopify CLI...${NC}"
    npm install -g @shopify/cli@latest
fi

# Verify Shopify CLI installation
echo -e "${BLUE}📋 Checking Shopify CLI version...${NC}"
shopify version

# Check if user is logged in
echo -e "${BLUE}🔐 Checking authentication...${NC}"
if ! shopify auth whoami &> /dev/null; then
    echo -e "${YELLOW}🔑 Please log in to Shopify...${NC}"
    shopify auth login
fi

# Store selection
echo -e "${BLUE}🏪 Available stores:${NC}"
shopify theme list

echo -e "${YELLOW}📝 Please enter your store name (e.g., your-store-name.myshopify.com):${NC}"
read -r STORE_NAME

if [ -z "$STORE_NAME" ]; then
    echo -e "${RED}❌ Store name is required${NC}"
    exit 1
fi

# Ask for deployment type
echo -e "${YELLOW}🚀 Select deployment type:${NC}"
echo -e "${CYAN}1) Development (non-destructive)${NC}"
echo -e "${CYAN}2) Production (live theme)${NC}"
read -p "Enter choice (1-2): " deployment_choice

case $deployment_choice in
    1)
        echo -e "${GREEN}🔧 Deploying to development environment...${NC}"
        cd midnight-magnolia-theme
        shopify theme push --development --store="$STORE_NAME"
        ;;
    2)
        echo -e "${RED}⚠️  WARNING: This will deploy to your LIVE theme!${NC}"
        echo -e "${YELLOW}Are you sure? (yes/no):${NC}"
        read -r confirm
        if [ "$confirm" = "yes" ]; then
            echo -e "${GREEN}🚀 Deploying to production...${NC}"
            cd midnight-magnolia-theme
            shopify theme push --live --store="$STORE_NAME"
        else
            echo -e "${YELLOW}❌ Deployment cancelled${NC}"
            exit 1
        fi
        ;;
    *)
        echo -e "${RED}❌ Invalid choice${NC}"
        exit 1
        ;;
esac

echo -e "${GREEN}✅ Theme deployment completed!${NC}"
echo -e "${PURPLE}🌙 Next steps:${NC}"
echo -e "${CYAN}1. Set up required collections${NC}"
echo -e "${CYAN}2. Configure product metafields${NC}"
echo -e "${CYAN}3. Create required pages${NC}"
echo -e "${CYAN}4. Set up blog${NC}"
echo -e "${CYAN}5. Run the store setup script${NC}"

echo -e "${BLUE}📖 For detailed setup instructions, see:${NC}"
echo -e "${CYAN}- INSTALLATION.md${NC}"
echo -e "${CYAN}- midnight-magnolia-theme/README.md${NC}"