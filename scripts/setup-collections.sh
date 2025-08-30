#!/bin/bash

# 🌙 Midnight Magnolia Collections Setup Script
# This script creates the required collections for the theme

set -e

echo "🗃️  Setting up Midnight Magnolia Collections..."

# Get store credentials
read -p "🏪 Enter your Shopify store name (without .myshopify.com): " STORE_NAME
read -p "🔑 Enter your Shopify Admin API access token: " ACCESS_TOKEN

if [ -z "$STORE_NAME" ] || [ -z "$ACCESS_TOKEN" ]; then
    echo "❌ Store name and access token are required!"
    exit 1
fi

SHOP_URL="https://$STORE_NAME.myshopify.com"

echo "📝 Creating collections for Midnight Magnolia theme..."

# Collection configurations
declare -A collections=(
    ["sacred-home"]="Sacred Home Collection|A curated collection of sacred home decor, altar supplies, and spiritual living essentials for creating your sanctuary.|sacred-home, home-decor, spiritual, altar"
    ["mystical-accessories"]="Mystical Accessories|Enchanting accessories including jewelry, bags, and personal items infused with mystical energy.|accessories, jewelry, mystical, spiritual"
    ["midnight-menagerie"]="Midnight Menagerie|Adorable pet accessories and spiritual items for your beloved animal companions.|pets, accessories, spiritual-pets, menagerie"
    ["healing-journals"]="Healing Journals & Planners|Transformative journals and planners designed for healing, growth, and spiritual development.|journals, planners, healing, self-development"
    ["tarot-divination"]="Tarot & Divination|Sacred divination tools including tarot decks, oracle cards, and spiritual guidance resources.|tarot, divination, oracle-cards, spiritual-guidance"
)

# Function to create collection
create_collection() {
    local handle=$1
    local title=$2
    local description=$3
    local tags=$4
    
    echo "✨ Creating collection: $title"
    
    curl -X POST "$SHOP_URL/admin/api/2023-10/custom_collections.json" \
        -H "X-Shopify-Access-Token: $ACCESS_TOKEN" \
        -H "Content-Type: application/json" \
        -d "{
            \"custom_collection\": {
                \"title\": \"$title\",
                \"handle\": \"$handle\",
                \"body_html\": \"$description\",
                \"sort_order\": \"best-selling\",
                \"published\": true
            }
        }" \
        -w "\nHTTP Status: %{http_code}\n" \
        -s -o /dev/null
}

# Create each collection
for handle in "${!collections[@]}"; do
    IFS='|' read -r title description tags <<< "${collections[$handle]}"
    create_collection "$handle" "$title" "$description" "$tags"
    sleep 1  # Rate limiting
done

echo ""
echo "✅ Collections created successfully!"
echo ""
echo "📋 Collections Created:"
echo "• Sacred Home Collection (handle: sacred-home)"
echo "• Mystical Accessories (handle: mystical-accessories)"
echo "• Midnight Menagerie (handle: midnight-menagerie)"
echo "• Healing Journals & Planners (handle: healing-journals)"
echo "• Tarot & Divination (handle: tarot-divination)"
echo ""
echo "🎯 Next Steps:"
echo "1. Go to Products → Collections in your Shopify Admin"
echo "2. Add products to each collection"
echo "3. Set collection images and descriptions"
echo "4. Configure collection visibility and rules"
echo ""
echo "🌟 Collections setup complete! ✨"