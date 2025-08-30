#!/bin/bash

# 🌙 Midnight Magnolia Metafields Setup Script
# This script creates the required product metafields for the theme

set -e

echo "🏷️  Setting up Midnight Magnolia Product Metafields..."

# Get store credentials
read -p "🏪 Enter your Shopify store name (without .myshopify.com): " STORE_NAME
read -p "🔑 Enter your Shopify Admin API access token: " ACCESS_TOKEN

if [ -z "$STORE_NAME" ] || [ -z "$ACCESS_TOKEN" ]; then
    echo "❌ Store name and access token are required!"
    exit 1
fi

SHOP_URL="https://$STORE_NAME.myshopify.com"

echo "📝 Creating metafield definitions..."

# Function to create metafield definition
create_metafield() {
    local namespace=$1
    local key=$2
    local name=$3
    local description=$4
    local type=$5
    local validations=$6
    
    echo "✨ Creating metafield: $namespace.$key"
    
    local payload="{
        \"metafield_definition\": {
            \"namespace\": \"$namespace\",
            \"key\": \"$key\",
            \"name\": \"$name\",
            \"description\": \"$description\",
            \"type\": \"$type\",
            \"owner_type\": \"product\"
        }
    }"
    
    if [ -n "$validations" ]; then
        payload=$(echo "$payload" | jq --argjson validations "$validations" '.metafield_definition.validations = $validations')
    fi
    
    curl -X POST "$SHOP_URL/admin/api/2023-10/metafield_definitions.json" \
        -H "X-Shopify-Access-Token: $ACCESS_TOKEN" \
        -H "Content-Type: application/json" \
        -d "$payload" \
        -w "\nHTTP Status: %{http_code}\n" \
        -s -o /dev/null
}

# Create product format metafield
create_metafield \
    "midnight_magnolia" \
    "product_format" \
    "Product Format" \
    "The format/type of the product (Digital Download, KDP Paperback, etc.)" \
    "single_line_text_field" \
    '[{"name": "choices", "value": ["Digital Download", "KDP Paperback", "Hardcover Edition", "Print-on-Demand", "Deluxe Physical Set", "Bundle Pack"]}]'

sleep 1

# Create coming soon metafield
create_metafield \
    "midnight_magnolia" \
    "coming_soon" \
    "Coming Soon" \
    "Mark product as coming soon to display special badge" \
    "boolean" \
    ""

sleep 1

# Create bestseller metafield
create_metafield \
    "midnight_magnolia" \
    "bestseller" \
    "Bestseller" \
    "Mark product as bestseller to display special badge" \
    "boolean" \
    ""

sleep 1

# Create category tag metafield
create_metafield \
    "midnight_magnolia" \
    "category_tag" \
    "Category Tag" \
    "Primary category for the product (used for filtering and organization)" \
    "single_line_text_field" \
    '[{"name": "choices", "value": ["Healing", "Spirituality", "Design", "Entrepreneurship", "Pet Accessories", "Home Decor", "Journals", "Planners"]}]'

sleep 1

# Create digital delivery URL metafield
create_metafield \
    "midnight_magnolia" \
    "digital_delivery_url" \
    "Digital Delivery URL" \
    "Direct download link for digital products (will be shown after purchase)" \
    "url" \
    ""

sleep 1

# Create product difficulty metafield
create_metafield \
    "midnight_magnolia" \
    "difficulty_level" \
    "Difficulty Level" \
    "Difficulty level for journals, courses, or guided products" \
    "single_line_text_field" \
    '[{"name": "choices", "value": ["Beginner", "Intermediate", "Advanced", "All Levels"]}]'

sleep 1

# Create estimated completion time metafield
create_metafield \
    "midnight_magnolia" \
    "completion_time" \
    "Estimated Completion Time" \
    "How long it typically takes to complete this product (for journals, courses, etc.)" \
    "single_line_text_field" \
    ""

echo ""
echo "✅ Metafields created successfully!"
echo ""
echo "📋 Metafields Created:"
echo "• midnight_magnolia.product_format - Product format/type"
echo "• midnight_magnolia.coming_soon - Coming soon badge"
echo "• midnight_magnolia.bestseller - Bestseller badge"
echo "• midnight_magnolia.category_tag - Primary category"
echo "• midnight_magnolia.digital_delivery_url - Digital download link"
echo "• midnight_magnolia.difficulty_level - Difficulty level"
echo "• midnight_magnolia.completion_time - Estimated completion time"
echo ""
echo "🎯 Next Steps:"
echo "1. Go to Settings → Metafields in your Shopify Admin"
echo "2. Verify all metafields were created under 'Products'"
echo "3. Edit your products to add metafield values"
echo "4. The theme will automatically display badges and information"
echo ""
echo "🌟 Metafields setup complete! ✨"