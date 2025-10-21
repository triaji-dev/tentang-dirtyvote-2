# Dirty Vote II Website Documentation

## Reusable Components

This project uses reusable components to maintain consistency across all pages and reduce code duplication.

### Navigation Component

**Location:** `includes/navigation.html`  
**JavaScript:** `js/navigation.js` (NavigationManager class)

The navigation component is automatically handled by the NavigationManager class and includes:
- Responsive mobile menu with hamburger toggle
- Active page detection and highlighting
- Keyboard navigation support
- Click-outside-to-close functionality

#### Usage in HTML Pages:
```html
<!-- Navigation Component - Can be reused in other pages -->
<nav id="main-navigation">
    <!-- Navigation content is embedded directly in each page -->
</nav>
```

#### JavaScript Features:
- Auto-detection of current page for active state
- Mobile menu toggle functionality
- Accessibility features (ARIA attributes)
- Window resize handling

### Footer Component

**Location:** `includes/footer.html`  
**JavaScript:** `js/navigation.js` (FooterManager class)

The footer component is dynamically loaded by JavaScript and includes:
- Brand information
- Navigation links
- Social media links
- Copyright information

#### Usage in HTML Pages:
```html
<!-- Footer will be loaded here by JavaScript -->

<!-- JavaScript for Navigation and Footer -->
<script src="js/navigation.js"></script>
```

#### JavaScript Features:
- Automatic footer loading via fetch API
- Fallback handling if fetch fails
- Dynamic insertion after main content

## File Structure

```
/
├── includes/
│   ├── navigation.html      # Navigation component (not currently used - navigation is embedded)
│   └── footer.html          # Footer component (loaded dynamically)
├── js/
│   └── navigation.js        # NavigationManager and FooterManager classes
├── templates/
│   └── page-template.html   # Template for creating new pages
├── styles.css               # Global styles
├── index.html               # Homepage
├── tentang.html            # About page
├── transkrip.html          # Transcript page
├── fakta.html              # Facts page
├── unduhan.html            # Downloads page
└── DOCS.md                 # This documentation
```

## Creating New Pages

1. Copy `templates/page-template.html`
2. Replace placeholders:
   - `{{PAGE_TITLE}}` - Page title for browser tab
   - `{{PAGE_DESCRIPTION}}` - Meta description
   - `{{PAGE_HEADING}}` - Main page heading
   - `{{PAGE_SUBTITLE}}` - Page subtitle
   - `{{PAGE_CONTENT}}` - Main page content
3. Update navigation active state by setting correct `data-page` attribute
4. Save with `.html` extension in root directory

## Styling Guidelines

- Uses **Courier Prime** font for typewriter aesthetic
- Grayscale color palette: `#1a1a1a`, `#333`, `#666`, `#888`, `#ccc`
- Background colors: `#fff`, `#f8f8f8`, `#fafafa`
- Font sizes are consistently small (0.7rem - 1.5rem)
- CSS custom properties for font consistency: `var(--font-mono)`

## JavaScript Architecture

### NavigationManager Class
- Handles mobile menu toggle
- Manages active link states
- Provides accessibility features
- Responsive behavior

### FooterManager Class
- Dynamically loads footer HTML
- Handles fetch API errors gracefully
- Inserts footer content automatically

### Global Instances
```javascript
window.navigationManager = new NavigationManager();
window.footerManager = new FooterManager();
```

## Browser Support

- Modern browsers with ES6+ support
- Fetch API support (or polyfill needed for older browsers)
- CSS Grid and Flexbox support
- CSS custom properties support

## Performance Considerations

- Footer is loaded asynchronously to improve initial page load
- Navigation is embedded directly to avoid additional HTTP requests
- CSS animations are optimized for 60fps
- Images and media should be optimized before deployment

## Accessibility Features

- Proper ARIA attributes for navigation
- Keyboard navigation support
- Semantic HTML structure
- Focus states for interactive elements
- Color contrast ratios meet WCAG guidelines