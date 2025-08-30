# 🌙 Midnight Magnolia - Shopify Store Configuration
# This file contains the JSON configuration for setting up the complete store

STORE_CONFIG='{
  "collections": [
    {
      "handle": "sacred-home",
      "title": "Sacred Home Collection",
      "description": "Transform your living space into a sanctuary with our curated collection of spiritual home decor, healing crystals, and sacred accessories.",
      "image": null,
      "published": true,
      "sort_order": "manual",
      "template_suffix": "",
      "disjunctive": false,
      "rules": [
        {
          "column": "tag",
          "relation": "equals",
          "condition": "Sacred Home"
        }
      ]
    },
    {
      "handle": "mystical-accessories",
      "title": "Mystical Accessories",
      "description": "Jewelry and wearable spiritual tools to carry sacred energy with you wherever you go. Protection items and portable healing accessories.",
      "image": null,
      "published": true,
      "sort_order": "manual",
      "template_suffix": "",
      "disjunctive": false,
      "rules": [
        {
          "column": "tag",
          "relation": "equals",
          "condition": "Mystical Accessories"
        }
      ]
    },
    {
      "handle": "midnight-menagerie",
      "title": "Midnight Menagerie",
      "description": "Sacred accessories and healing tools for your beloved animal companions. Pet accessories with spiritual intention and animal-themed items.",
      "image": null,
      "published": true,
      "sort_order": "manual",
      "template_suffix": "",
      "disjunctive": false,
      "rules": [
        {
          "column": "tag",
          "relation": "equals",
          "condition": "Pet Accessories"
        }
      ]
    },
    {
      "handle": "healing-journals",
      "title": "Healing Journals & Planners",
      "description": "Digital downloads and physical journals for your healing journey. Productivity tools infused with spiritual wisdom and intention.",
      "image": null,
      "published": true,
      "sort_order": "manual",
      "template_suffix": "",
      "disjunctive": false,
      "rules": [
        {
          "column": "tag",
          "relation": "equals",
          "condition": "Healing"
        }
      ]
    },
    {
      "handle": "tarot-divination",
      "title": "Tarot & Divination",
      "description": "Oracle card decks, tarot sets, and digital divination guides to deepen your spiritual practice and intuitive abilities.",
      "image": null,
      "published": true,
      "sort_order": "manual",
      "template_suffix": "",
      "disjunctive": false,
      "rules": [
        {
          "column": "tag",
          "relation": "equals",
          "condition": "Spirituality"
        }
      ]
    }
  ],
  "metafields": [
    {
      "namespace": "midnight_magnolia",
      "key": "product_format",
      "name": "Product Format",
      "type": "single_line_text_field",
      "description": "Format of the product (Digital Download, KDP Paperback, etc.)",
      "validations": []
    },
    {
      "namespace": "midnight_magnolia",
      "key": "coming_soon",
      "name": "Coming Soon",
      "type": "boolean",
      "description": "Mark product as coming soon"
    },
    {
      "namespace": "midnight_magnolia",
      "key": "bestseller",
      "name": "Bestseller",
      "type": "boolean",
      "description": "Mark product as bestseller"
    },
    {
      "namespace": "midnight_magnolia",
      "key": "category_tag",
      "name": "Category Tag",
      "type": "single_line_text_field",
      "description": "Primary category for the product"
    }
  ],
  "pages": [
    {
      "handle": "justice-healing",
      "title": "Justice & Healing",
      "body_html": "<h1>Justice & Healing</h1><p>Our commitment to sacred activism and healing justice...</p>",
      "template_suffix": "justice-healing",
      "published": true
    },
    {
      "handle": "our-story",
      "title": "Our Story",
      "body_html": "<h1>Our Story</h1><p>The journey of Midnight Magnolia began with a vision...</p>",
      "template_suffix": "our-story",
      "published": true
    },
    {
      "handle": "sacred-promise",
      "title": "Sacred Promise",
      "body_html": "<h1>Sacred Promise</h1><p>Our commitment to you and the sacred space we create together...</p>",
      "template_suffix": "sacred-promise",
      "published": true
    },
    {
      "handle": "healing-circle",
      "title": "Healing Circle",
      "body_html": "<h1>Healing Circle</h1><p>Join our community of healers and spiritual seekers...</p>",
      "template_suffix": "healing-circle",
      "published": true
    },
    {
      "handle": "support",
      "title": "Support",
      "body_html": "<h1>Support</h1><p>We are here to support you on your spiritual journey...</p>",
      "template_suffix": "support",
      "published": true
    }
  ],
  "blog": {
    "handle": "midnight-musings",
    "title": "Midnight Musings",
    "commentable": "moderate",
    "feedburner": null,
    "feedburner_location": null,
    "created_at": null,
    "updated_at": null,
    "tags": "Healing, Spirituality, Design, Entrepreneurship, Sacred Activism"
  }
}'