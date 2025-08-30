# 🌙 Midnight Magnolia - GitHub Pages Site

A beautiful, mystical website for spiritual wellness built with Jekyll and designed for GitHub Pages.

## 🚀 Quick Setup for GitHub Pages

### Enable GitHub Pages

1. **Go to your repository settings**
   - Navigate to `https://github.com/[username]/Online/settings`
   - Scroll down to the "Pages" section

2. **Configure the source**
   - Under "Source", select "GitHub Actions"
   - This will use our custom Jekyll workflow

3. **Wait for deployment**
   - The site will automatically build and deploy
   - Check the "Actions" tab to see the build progress
   - Your site will be available at `https://[username].github.io/Online`

### Alternative: Use Pages Source

If you prefer not to use GitHub Actions:

1. **In Repository Settings > Pages**
   - Select "Deploy from a branch"
   - Choose the `master` or `main` branch
   - Select `/ (root)` as the folder
   - GitHub will automatically detect this is a Jekyll site

## 🎨 Features

- **Mystical Design**: Celestial background with floating elements
- **Responsive Layout**: Mobile-first design that works on all devices
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels
- **Performance**: Optimized CSS and JavaScript for fast loading
- **SEO Ready**: Built-in SEO optimization with Jekyll SEO plugin

## 📄 Pages Included

- **Homepage**: Welcome visitors to your digital sanctuary
- **Our Story**: Share your mission and founder story
- **Justice & Healing**: Commitment to social justice and healing
- **Sacred Promise**: Your promises to the community
- **Healing Circle**: Community engagement and support
- **Support**: Contact and help resources

## 🛠️ Customization

### Update Site Information

Edit `_config.yml` to customize:
- Site title and description
- URL and baseurl
- Navigation menu
- Contact information
- Social media links

### Modify Content

- **Homepage**: Edit `index.html`
- **Pages**: Edit files in `_pages/` directory
- **Layout**: Modify `_layouts/default.html`
- **Header/Footer**: Edit files in `_includes/`

### Styling

- **CSS**: Modify files in `assets/css/`
- **Colors**: Update CSS custom properties in `_layouts/default.html`
- **Images**: Replace files in `assets/images/`

## 🎯 Original Theme

This site is based on the Midnight Magnolia Shopify theme, converted to work with Jekyll and GitHub Pages. The original theme was designed for spiritual wellness brands with:

- Trauma-informed design principles
- Gentle productivity focus
- Sacred activism values
- Southern Gothic aesthetic
- Celestial and mystical elements

## 📝 License

This theme is provided as-is for educational and personal use. Please respect the original design and branding elements.

## 🌟 Getting Started Locally

If you want to run the site locally:

```bash
# Install dependencies
bundle install

# Run Jekyll
bundle exec jekyll serve

# View at http://localhost:4000
```

## 🔧 Troubleshooting

### Common Issues

1. **Site not building**: Check the Actions tab for build errors
2. **404 errors**: Ensure the baseurl in `_config.yml` matches your repository name
3. **Assets not loading**: Verify paths in the layout file are correct

### Need Help?

- Check the [Jekyll documentation](https://jekyllrb.com/docs/)
- Review [GitHub Pages documentation](https://docs.github.com/en/pages)
- Open an issue in this repository

---

**🌙 May your digital sanctuary bring peace and healing to all who visit** ✨