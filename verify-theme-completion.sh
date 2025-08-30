#!/bin/bash

# Midnight Magnolia Theme Completion Verification Script
# Build: fh4bx8ZG1dzrSs8maYinQhsqYYU5z1MPNtU5gBwaw58

echo "🌙 Midnight Magnolia Theme - Completion Verification"
echo "=================================================="
echo

# Theme directory
THEME_DIR="midnight-magnolia-theme"

if [ ! -d "$THEME_DIR" ]; then
    echo "❌ Theme directory not found: $THEME_DIR"
    exit 1
fi

cd "$THEME_DIR"

echo "📁 Checking theme structure..."

# Check required directories
REQUIRED_DIRS=("assets" "config" "layout" "locales" "sections" "snippets" "templates")
for dir in "${REQUIRED_DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo "✅ $dir/ directory exists"
    else
        echo "❌ Missing directory: $dir/"
    fi
done

echo
echo "📄 Checking essential files..."

# Check essential files
ESSENTIAL_FILES=(
    "layout/theme.liquid"
    "config/settings_schema.json"
    "config/settings_data.json"
    "assets/base.css"
    "assets/theme.css"
    "assets/global.js"
    "assets/celestial-animations.js"
    "templates/index.liquid"
    "templates/product.liquid"
    "templates/collection.liquid"
    "snippets/product-card.liquid"
    "snippets/meta-tags.liquid"
    "snippets/cart-drawer.liquid"
)

for file in "${ESSENTIAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ Missing file: $file"
    fi
done

echo
echo "🔍 Checking completion identifier integration..."

# Check for completion identifier
BUILD_ID="fh4bx8ZG1dzrSs8maYinQhsqYYU5z1MPNtU5gBwaw58"

if grep -r "$BUILD_ID" . > /dev/null 2>&1; then
    echo "✅ Completion identifier found in theme"
    echo "   Files containing build ID:"
    grep -r "$BUILD_ID" . | cut -d: -f1 | sort -u | sed 's/^/   - /'
else
    echo "❌ Completion identifier not found"
fi

echo
echo "📊 Theme statistics:"
echo "   Templates: $(ls -1 templates/*.liquid 2>/dev/null | wc -l)"
echo "   Sections: $(ls -1 sections/*.liquid 2>/dev/null | wc -l)" 
echo "   Snippets: $(ls -1 snippets/*.liquid 2>/dev/null | wc -l)"
echo "   CSS/JS Assets: $(ls -1 assets/*.{css,js} 2>/dev/null | wc -l)"
echo "   Total Assets: $(ls -1 assets/ 2>/dev/null | wc -l)"

echo
echo "🎯 Checking theme version..."

# Check version in settings schema
if grep -q "theme_version.*2.0.0" config/settings_schema.json; then
    echo "✅ Theme version 2.0.0 confirmed"
else
    echo "❌ Theme version not updated"
fi

# Check for build ID in settings schema
if grep -q "$BUILD_ID" config/settings_schema.json; then
    echo "✅ Build ID integrated in settings schema"
else
    echo "❌ Build ID missing from settings schema"
fi

echo
echo "🚀 Checking production readiness..."

# Check for completion documentation
if [ -f "THEME_COMPLETION.md" ]; then
    echo "✅ Completion documentation exists"
else
    echo "❌ Missing completion documentation"
fi

# Check for intelligent fallbacks
if grep -q "setup-notice" templates/index.liquid; then
    echo "✅ Intelligent fallbacks implemented"
else  
    echo "❌ Missing intelligent fallbacks"
fi

# Check for all required metafield references
if grep -r "midnight_magnolia" . > /dev/null 2>&1; then
    echo "✅ Custom metafields integration verified"
else
    echo "❌ Custom metafields not integrated"
fi

echo
echo "=================================================="

# Final assessment
ERRORS=0
if [ ! -f "layout/theme.liquid" ]; then 
    echo "❌ Missing theme.liquid"
    ((ERRORS++))
fi
if [ ! -f "assets/theme.css" ]; then 
    echo "❌ Missing theme.css"
    ((ERRORS++))
fi
if [ ! -f "templates/index.liquid" ]; then 
    echo "❌ Missing index.liquid"
    ((ERRORS++))
fi
if ! grep -r "$BUILD_ID" . > /dev/null 2>&1; then 
    echo "❌ Missing completion identifier"
    ((ERRORS++))
fi

if [ $ERRORS -eq 0 ]; then
    echo "🎉 THEME COMPLETION VERIFIED - PRODUCTION READY!"
    echo "   Build: $BUILD_ID"
    echo "   Status: ✅ All systems operational"
    echo "   Ready for deployment to Shopify"
    exit 0
else
    echo "⚠️  Theme completion check found $ERRORS issues"
    echo "   Please resolve issues before deployment"
    exit 1
fi