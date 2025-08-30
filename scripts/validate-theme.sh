#!/bin/bash

# 🌙 Midnight Magnolia - Theme Validation Script
# This script validates the Shopify theme structure and requirements

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${PURPLE}🌙 Midnight Magnolia - Theme Validation${NC}"
echo -e "${CYAN}====================================${NC}"

THEME_DIR="midnight-magnolia-theme"
ERRORS=0
WARNINGS=0

# Function to check file exists
check_file() {
    local file="$1"
    local description="$2"
    
    if [ -f "$THEME_DIR/$file" ]; then
        echo -e "${GREEN}✅ $description${NC}"
    else
        echo -e "${RED}❌ $description (missing: $file)${NC}"
        ((ERRORS++))
    fi
}

# Function to check directory exists
check_dir() {
    local dir="$1"
    local description="$2"
    
    if [ -d "$THEME_DIR/$dir" ]; then
        echo -e "${GREEN}✅ $description${NC}"
    else
        echo -e "${RED}❌ $description (missing: $dir)${NC}"
        ((ERRORS++))
    fi
}

# Check theme directory exists
if [ ! -d "$THEME_DIR" ]; then
    echo -e "${RED}❌ Theme directory not found: $THEME_DIR${NC}"
    exit 1
fi

echo -e "${BLUE}🔍 Validating theme structure...${NC}"

# Core structure validation
check_dir "assets" "Assets directory"
check_dir "config" "Config directory"
check_dir "layout" "Layout directory"
check_dir "locales" "Locales directory"
check_dir "sections" "Sections directory"
check_dir "snippets" "Snippets directory"
check_dir "templates" "Templates directory"

echo -e "${BLUE}🔍 Validating required files...${NC}"

# Essential files
check_file "layout/theme.liquid" "Main theme layout"
check_file "config/settings_schema.json" "Theme settings schema"
check_file "config/settings_data.json" "Theme settings data"
check_file "locales/en.default.json" "English locale file"

# Asset files
check_file "assets/theme.css" "Main stylesheet"
check_file "assets/base.css" "Base stylesheet"
check_file "assets/global.js" "Global JavaScript"

# Required snippets
check_file "snippets/product-card.liquid" "Product card snippet"
check_file "snippets/meta-tags.liquid" "Meta tags snippet"
check_file "snippets/cart-drawer.liquid" "Cart drawer snippet"

# Core templates
check_file "templates/index.liquid" "Homepage template"
check_file "templates/product.liquid" "Product template"
check_file "templates/collection.liquid" "Collection template"
check_file "templates/cart.liquid" "Cart template"
check_file "templates/404.liquid" "404 error template"

# Custom page templates
check_file "templates/page.justice-healing.liquid" "Justice & Healing page template"
check_file "templates/page.our-story.liquid" "Our Story page template"

# Blog templates
check_file "templates/blog.liquid" "Blog template"
check_file "templates/article.liquid" "Article template"

echo -e "${BLUE}🔍 Validating theme configuration...${NC}"

# Check settings schema
if [ -f "$THEME_DIR/config/settings_schema.json" ]; then
    if command -v jq > /dev/null; then
        if jq empty "$THEME_DIR/config/settings_schema.json" 2>/dev/null; then
            echo -e "${GREEN}✅ Settings schema is valid JSON${NC}"
        else
            echo -e "${RED}❌ Settings schema has invalid JSON${NC}"
            ((ERRORS++))
        fi
    else
        echo -e "${YELLOW}⚠️  jq not found, cannot validate JSON${NC}"
        ((WARNINGS++))
    fi
fi

# Check settings data
if [ -f "$THEME_DIR/config/settings_data.json" ]; then
    if command -v jq > /dev/null; then
        if jq empty "$THEME_DIR/config/settings_data.json" 2>/dev/null; then
            echo -e "${GREEN}✅ Settings data is valid JSON${NC}"
        else
            echo -e "${RED}❌ Settings data has invalid JSON${NC}"
            ((ERRORS++))
        fi
    else
        echo -e "${YELLOW}⚠️  jq not found, cannot validate JSON${NC}"
        ((WARNINGS++))
    fi
fi

echo -e "${BLUE}🔍 Checking theme assets...${NC}"

# Check for SVG assets
check_file "assets/celestial-bg.svg" "Celestial background SVG"
check_file "assets/magnolia-flower.svg" "Magnolia flower SVG"
check_file "assets/moon-phases.svg" "Moon phases SVG"
check_file "assets/stars.svg" "Stars SVG"

# Check for JavaScript
check_file "assets/celestial-animations.js" "Celestial animations JavaScript"

echo -e "${BLUE}🔍 Running Shopify theme check (if available)...${NC}"

if command -v shopify > /dev/null; then
    cd "$THEME_DIR"
    if shopify theme check 2>/dev/null; then
        echo -e "${GREEN}✅ Shopify theme check passed${NC}"
    else
        echo -e "${YELLOW}⚠️  Shopify theme check found issues${NC}"
        ((WARNINGS++))
    fi
    cd ..
else
    echo -e "${YELLOW}⚠️  Shopify CLI not found, skipping theme check${NC}"
    ((WARNINGS++))
fi

echo -e "${CYAN}======================================${NC}"
echo -e "${PURPLE}🌙 Validation Results${NC}"
echo -e "${CYAN}======================================${NC}"

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ Theme validation passed!${NC}"
    if [ $WARNINGS -gt 0 ]; then
        echo -e "${YELLOW}⚠️  $WARNINGS warnings found${NC}"
    fi
else
    echo -e "${RED}❌ Theme validation failed with $ERRORS errors${NC}"
    if [ $WARNINGS -gt 0 ]; then
        echo -e "${YELLOW}⚠️  $WARNINGS warnings found${NC}"
    fi
    exit 1
fi

echo -e "${BLUE}📋 Next steps:${NC}"
echo -e "${CYAN}1. Deploy theme with: ./scripts/deploy-shopify-theme.sh${NC}"
echo -e "${CYAN}2. Set up store with: ./scripts/setup-shopify-store.sh${NC}"
echo -e "${CYAN}3. Customize theme in Shopify admin${NC}"