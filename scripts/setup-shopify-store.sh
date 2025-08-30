#!/bin/bash

# 🌙 Midnight Magnolia - Complete Store Setup Script
# This script sets up collections, metafields, pages, and blog for the Shopify store

set -e

# Source the configuration
source "$(dirname "$0")/shopify-store-config.sh"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${PURPLE}🌙 Midnight Magnolia - Complete Store Setup${NC}"
echo -e "${CYAN}===========================================${NC}"

# Check if jq is available for JSON processing
if ! command -v jq &> /dev/null; then
    echo -e "${YELLOW}📦 Installing jq for JSON processing...${NC}"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install jq
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt-get update && sudo apt-get install -y jq
    else
        echo -e "${RED}❌ Please install jq manually: https://jqlang.github.io/jq/download/${NC}"
        exit 1
    fi
fi

echo -e "${YELLOW}📝 Please enter your store name (e.g., your-store-name.myshopify.com):${NC}"
read -r STORE_NAME

if [ -z "$STORE_NAME" ]; then
    echo -e "${RED}❌ Store name is required${NC}"
    exit 1
fi

echo -e "${YELLOW}🔑 Please enter your Shopify Admin API access token:${NC}"
read -r -s ACCESS_TOKEN

if [ -z "$ACCESS_TOKEN" ]; then
    echo -e "${RED}❌ Access token is required${NC}"
    exit 1
fi

# API base URL
API_BASE="https://$STORE_NAME/admin/api/2023-10"

echo -e "${BLUE}🏪 Setting up store: $STORE_NAME${NC}"

# Function to make API requests
make_api_request() {
    local method="$1"
    local endpoint="$2"
    local data="$3"
    
    if [ -n "$data" ]; then
        curl -s -X "$method" \
             -H "X-Shopify-Access-Token: $ACCESS_TOKEN" \
             -H "Content-Type: application/json" \
             -d "$data" \
             "$API_BASE/$endpoint"
    else
        curl -s -X "$method" \
             -H "X-Shopify-Access-Token: $ACCESS_TOKEN" \
             "$API_BASE/$endpoint"
    fi
}

# Setup Collections
echo -e "${CYAN}📂 Setting up collections...${NC}"
echo "$STORE_CONFIG" | jq -r '.collections[] | @json' | while read -r collection; do
    collection_data="{\"collection\":$collection}"
    title=$(echo "$collection" | jq -r '.title')
    
    echo -e "${BLUE}  Creating collection: $title${NC}"
    response=$(make_api_request "POST" "collections.json" "$collection_data")
    
    if echo "$response" | jq -e '.collection' > /dev/null; then
        echo -e "${GREEN}  ✅ Collection '$title' created successfully${NC}"
    else
        echo -e "${YELLOW}  ⚠️  Collection '$title' may already exist or there was an error${NC}"
    fi
done

# Setup Product Metafields Definition
echo -e "${CYAN}🏷️  Setting up product metafields...${NC}"
echo "$STORE_CONFIG" | jq -r '.metafields[] | @json' | while read -r metafield; do
    metafield_data="{\"metafield_definition\":$metafield}"
    name=$(echo "$metafield" | jq -r '.name')
    
    echo -e "${BLUE}  Creating metafield: $name${NC}"
    response=$(make_api_request "POST" "metafield_definitions.json" "$metafield_data")
    
    if echo "$response" | jq -e '.metafield_definition' > /dev/null; then
        echo -e "${GREEN}  ✅ Metafield '$name' created successfully${NC}"
    else
        echo -e "${YELLOW}  ⚠️  Metafield '$name' may already exist or there was an error${NC}"
    fi
done

# Setup Pages
echo -e "${CYAN}📄 Setting up pages...${NC}"
echo "$STORE_CONFIG" | jq -r '.pages[] | @json' | while read -r page; do
    page_data="{\"page\":$page}"
    title=$(echo "$page" | jq -r '.title')
    
    echo -e "${BLUE}  Creating page: $title${NC}"
    response=$(make_api_request "POST" "pages.json" "$page_data")
    
    if echo "$response" | jq -e '.page' > /dev/null; then
        echo -e "${GREEN}  ✅ Page '$title' created successfully${NC}"
    else
        echo -e "${YELLOW}  ⚠️  Page '$title' may already exist or there was an error${NC}"
    fi
done

# Setup Blog
echo -e "${CYAN}📝 Setting up blog...${NC}"
blog_data=$(echo "$STORE_CONFIG" | jq '{blog: .blog}')
blog_title=$(echo "$blog_data" | jq -r '.blog.title')

echo -e "${BLUE}  Creating blog: $blog_title${NC}"
response=$(make_api_request "POST" "blogs.json" "$blog_data")

if echo "$response" | jq -e '.blog' > /dev/null; then
    echo -e "${GREEN}  ✅ Blog '$blog_title' created successfully${NC}"
else
    echo -e "${YELLOW}  ⚠️  Blog '$blog_title' may already exist or there was an error${NC}"
fi

echo -e "${GREEN}✅ Store setup completed!${NC}"
echo -e "${PURPLE}🌙 What's been configured:${NC}"
echo -e "${CYAN}  • 5 Collections with automatic tagging rules${NC}"
echo -e "${CYAN}  • 4 Custom metafields for products${NC}"
echo -e "${CYAN}  • 5 Required pages with templates${NC}"
echo -e "${CYAN}  • Midnight Musings blog${NC}"

echo -e "${BLUE}📖 Next steps:${NC}"
echo -e "${CYAN}1. Add products to your collections${NC}"
echo -e "${CYAN}2. Configure theme settings${NC}"
echo -e "${CYAN}3. Customize page content${NC}"
echo -e "${CYAN}4. Create blog articles${NC}"
echo -e "${CYAN}5. Test the complete store experience${NC}"