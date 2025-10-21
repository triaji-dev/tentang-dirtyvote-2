# Dirty Vote II - Documentary Website

Official website for the documentary film **Dirty Vote II** that exposes the 3O strategy (Otot, Otak, Ongkos - Muscle, Brain, Money) in Indonesia's political system.

## 📖 Description

This website serves as a digital platform to present content and information related to the Dirty Vote II documentary film. The website provides access to transcripts, infographics, facts, and other supporting materials.

## 🚀 Key Features

### 📝 Interactive Transcript Page
- **Sidebar navigation** that remains visible while scrolling
- **Search system** with search result navigation (prev/next)
- **Chapter navigation** for quick access to specific sections
- **Font size control** for reading comfort
- **Auto-capitalize** for proper text formatting
- **Search highlighting** with result position indicators

### 📊 Comprehensive Infographics Page
- **3O Strategy visualization** (Otot, Otak, Ongkos)
- **Chronological timeline** with intuitive vertical layout
- **Analytical framework** from documentary topics
- **Statistics and data** in attractive visual format
- **Structured solutions** and recommendations
- **Quote highlights** from important figures

### 🌐 Navigation and Layout
- **Responsive design** for desktop and mobile
- **Dynamic navigation** loading with JavaScript
- **Reusable footer** component
- **Consistent color scheme** (#2c3e50 theme)
- **Lucide icons** for modern interface

## 🏗️ Project Structure

```
tentang-dirtyvote-2/
├── index.html                 # Homepage
├── favicon.svg               # Website icon
├── styles.css                # Main stylesheet
├── README.md                 # This documentation
│
├── pages/                    # Main pages
│   ├── tentang.html         # About the film
│   ├── infografis.html      # Infographics and data
│   ├── transkrip.html       # Interactive transcript
│   ├── fakta.html           # Facts list
│   └── unduhan.html         # Download materials
│
├── js/                      # JavaScript modules
│   └── navigation.js        # Dynamic navigation system
│
├── includes/                # HTML components
│   ├── navigation.html      # Navigation template
│   └── footer.html         # Footer template
│
├── templates/               # Page templates
│   └── page-template.html   # Base template
│
├── transcript/             # Transcript files
│   └── transcription.txt   # Complete film transcript
│
└── script/                 # Scripts and supporting files
    └── [Indonesian (auto-generated)] DIRTY VOTE II o3 - Full Movie [DownSub.com].srt
```

## 💻 Technologies Used

### Frontend
- **HTML5** - Semantic structure
- **CSS3** - Styling with Flexbox/Grid
- **JavaScript ES6+** - Interactivity and dynamic components
- **Lucide Icons** - Modern icon system
- **SVG** - Vector graphics and favicon

### CSS Features
- **Custom Properties** for color consistency
- **Responsive Grid/Flexbox** layouts
- **Smooth animations** and transitions
- **Custom scrollbars** for text areas
- **Mobile-first** responsive design

### JavaScript Features
- **ES6 Classes** for components (TranscriptViewer, NavigationLoader)
- **Async/Await** for content loading
- **Event handling** for interactivity
- **Local search** with regex highlighting
- **Intersection Observer** for scroll animations

## 🛠️ Installation and Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for development)

### Local Development

1. **Clone or download** repository
```bash
git clone [repository-url]
cd tentang-dirtyvote-2
```

2. **Run local server**
```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx http-server -p 8080

# Using PHP
php -S localhost:8080
```

3. **Open browser** and access `http://localhost:8080`

### Deployment
Website can be deployed to static hosting platforms such as:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Apache/Nginx** server

## 📱 Responsive Design

Website designed mobile-first with breakpoints:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px  
- **Mobile**: < 480px

### Mobile Features
- Transcript sidebar becomes top section
- Chapter list with limited scroll
- Touch-friendly button sizes
- Optimized font sizes and spacing

## 🎨 Design System

### Color Palette
- **Primary**: `#2c3e50` (Dark gray-blue)
- **Accent**: `#e74c3c` (Red)
- **Background**: `#f8f9fa` (Light gray)
- **Text**: `#333333` (Dark gray)
- **Border**: `#e9ecef` (Light border)

### Typography
- **Primary Font**: System font stack
- **Monospace**: `'Courier New', monospace` (for transcript)
- **Font Sizes**: Responsive scaling with rem units

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Consistent padding and hover states
- **Icons**: Lucide icon system (16px - 48px)
- **Spacing**: 8px grid system

## 🔧 Configuration

### Navigation Menu
Edit `includes/navigation.html` file to modify menu:
```html
<li><a href="index.html">Home</a></li>
<li><a href="pages/tentang.html">About</a></li>
<!-- Add new menu items here -->
```

### Favicon
Replace `favicon.svg` with your custom icon. SVG format recommended for scalability.

### Transcript
Update `transcript/transcription.txt` file with new transcript content. Format:
```
CHAPTER TITLE
---

MM:SS Speaker: Dialog content
MM:SS Narrator: Narration content
```

## 📊 Detailed Transcript Features

### Transcript File Format
```
CHAPTER INTRODUCTION
---

00:15 Narrator: Welcome to Dirty Vote II.
00:30 Expert: The 3O strategy is very dangerous.
01:45 Narrator: Let's discuss this in more depth.

CHAPTER STRATEGY ANALYSIS  
---

02:00 Analyst: Otot refers to physical force.
```

### Search Features
- **Real-time search** while typing
- **Minimum 2 characters** to start searching
- **Case-insensitive** search
- **Highlight all results** with yellow color
- **Current result** with red highlight
- **Navigation buttons** for prev/next result
- **Auto-scroll** to search results
- **Keyboard shortcut** Ctrl+F to focus search

### Chapter Navigation
- **Auto-generated** from markers in transcript
- **Smooth scroll** to selected chapter
- **Sticky sidebar** always visible
- **Mobile responsive** with collapsible list

## 🎯 Performance Optimization

### Loading Strategy
- **Lazy loading** for large transcripts
- **Component-based** JavaScript loading
- **CSS critical path** optimization
- **Minimal external dependencies**

### Caching
- **Browser caching** for static assets
- **localStorage** for user preferences
- **Service worker** ready (for PWA upgrade)

## 🔍 SEO and Accessibility

### SEO Features
- **Semantic HTML** structure
- **Meta descriptions** for each page
- **Open Graph** tags (ready for social media)
- **Structured data** markup (future implementation)

### Accessibility
- **Keyboard navigation** support
- **ARIA labels** for screen readers
- **High contrast** color ratios
- **Scalable fonts** for low vision users
- **Focus indicators** for navigation

## 🚧 Future Development

### Planned Features
- [ ] **Progressive Web App** (PWA) support
- [ ] **Dark mode** toggle
- [ ] **Video player** integration
- [ ] **Social sharing** buttons
- [ ] **Comment system** for discussions
- [ ] **Multi-language** support
- [ ] **Search analytics** and insights

### Technical Improvements
- [ ] **Service Worker** for offline access
- [ ] **Webpack/Vite** build system
- [ ] **TypeScript** conversion
- [ ] **Component testing** with Jest
- [ ] **End-to-end testing** with Playwright

## 📝 Contributing

### Development Guidelines
1. **Follow semantic HTML** structure
2. **Use consistent naming** conventions
3. **Test responsiveness** on various devices
4. **Optimize performance** for fast loading
5. **Maintain accessibility** standards

### Code Style
- **2 spaces** for indentation
- **kebab-case** for CSS classes
- **camelCase** for JavaScript variables
- **Meaningful comments** for complex code

## 📄 Disclaimer

This website is an unofficial platform, developed independently and based on the creator's personal understanding of the "Dirty Vote II" documentary. For more accurate information, please visit the official Dirty Vote social media channels.