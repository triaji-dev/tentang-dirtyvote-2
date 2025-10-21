/**
 * Reusable Navigation and Footer JavaScript
 * Include this file in all pages that use the navigation and footer components
 */

class NavigationLoader {
    constructor() {
        this.navigationContainer = null;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadNavigation());
        } else {
            this.loadNavigation();
        }
    }

    async loadNavigation() {
        // Check if navigation already exists
        const existingNav = document.querySelector('#main-navigation');
        if (existingNav) {
            return; // Navigation already loaded
        }

        try {
            // Determine correct path based on current location
            const currentPath = window.location.pathname;
            const isInPagesFolder = currentPath.includes('/pages/');
            const navPath = isInPagesFolder ? '../includes/navigation.html' : 'includes/navigation.html';
            
            const response = await fetch(navPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const navigationHTML = await response.text();
            
            // Insert navigation at the beginning of body
            document.body.insertAdjacentHTML('afterbegin', navigationHTML);
            
            // Fix navigation links based on current page location
            this.fixNavigationLinks();
            
            // Initialize NavigationManager after loading
            if (!window.navigationManager) {
                window.navigationManager = new NavigationManager();
            }

        } catch (error) {
            console.warn('Navigation could not be loaded:', error);
            // Fallback: navigation content is already in the page
            if (!window.navigationManager) {
                window.navigationManager = new NavigationManager();
            }
        }
    }

    fixNavigationLinks() {
        const currentPath = window.location.pathname;
        const isInPagesFolder = currentPath.includes('/pages/');
        
        // Fix brand link
        const brandLink = document.querySelector('.nav-brand-link');
        if (brandLink) {
            brandLink.href = isInPagesFolder ? '../index.html' : 'index.html';
        }
        
        // Fix navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const dataPage = link.getAttribute('data-page');
            
            if (dataPage === 'index') {
                link.href = isInPagesFolder ? '../index.html' : 'index.html';
            } else {
                link.href = isInPagesFolder ? `${dataPage}.html` : `pages/${dataPage}.html`;
            }
        });
    }
}

class NavigationManager {
    constructor() {
        this.navToggle = null;
        this.navMenu = null;
        this.navLinks = [];
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.navToggle = document.querySelector('.nav-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');

        this.bindEvents();
        this.setActiveLink();
    }

    bindEvents() {
        if (!this.navToggle || !this.navMenu) return;

        // Mobile menu toggle
        this.navToggle.addEventListener('click', () => this.toggleMobileMenu());

        // Close menu when clicking on navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => this.handleOutsideClick(event));

        // Handle window resize
        window.addEventListener('resize', () => this.handleResize());
    }

    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        this.navToggle.classList.toggle('active');
        
        // Toggle aria attributes for accessibility
        const isOpen = this.navMenu.classList.contains('active');
        this.navToggle.setAttribute('aria-expanded', isOpen);
        this.navMenu.setAttribute('aria-hidden', !isOpen);
    }

    closeMobileMenu() {
        this.navMenu.classList.remove('active');
        this.navToggle.classList.remove('active');
        this.navToggle.setAttribute('aria-expanded', 'false');
        this.navMenu.setAttribute('aria-hidden', 'true');
    }

    handleOutsideClick(event) {
        if (!this.navToggle.contains(event.target) && !this.navMenu.contains(event.target)) {
            this.closeMobileMenu();
        }
    }

    handleResize() {
        // Close mobile menu on desktop
        if (window.innerWidth > 768) {
            this.closeMobileMenu();
        }
    }

    setActiveLink() {
        // Get current page name
        const currentPage = this.getCurrentPageName();
        
        // Remove active class and aria-current from all links first
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });

        // Add active class to current page link
        let activeSet = false;
        this.navLinks.forEach(link => {
            const linkPage = this.getLinkPageName(link);
            
            if (linkPage === currentPage && !activeSet) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
                activeSet = true;
            }
        });
    }

    getCurrentPageName() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        // Handle different possible filenames
        if (!filename || filename === '' || filename === 'index.html' || filename === '/') {
            return 'index';
        }
        
        // Remove .html extension if present
        return filename.replace('.html', '');
    }

    getLinkPageName(link) {
        const href = link.getAttribute('href');
        const dataPage = link.getAttribute('data-page');
        
        // Prefer data-page attribute, fallback to href
        if (dataPage) {
            return dataPage;
        }
        
        if (href) {
            const filename = href.split('/').pop();
            if (filename === 'index.html' || filename === '') {
                return 'index';
            }
            return filename.replace('.html', '');
        }
        
        return '';
    }

    // Public method to manually set active link
    setActivePage(pageName) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            
            const linkPage = this.getLinkPageName(link);
            if (linkPage === pageName) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }



    // Public method to programmatically close mobile menu
    close() {
        this.closeMobileMenu();
    }
}

/**
 * Footer Manager Class
 * Handles footer component loading and functionality
 */
class FooterManager {
    constructor() {
        this.footerContainer = null;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadFooter());
        } else {
            this.loadFooter();
        }
    }

    async loadFooter() {
        // Check if footer already exists
        const existingFooter = document.querySelector('#main-footer');
        if (existingFooter) {
            return; // Footer already loaded
        }

        try {
            // Determine correct path to footer based on current page location
            const currentPath = window.location.pathname;
            const isInPagesFolder = currentPath.includes('/pages/');
            const footerPath = isInPagesFolder ? '../includes/footer.html' : 'includes/footer.html';
            
            const response = await fetch(footerPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const footerHTML = await response.text();
            
            // Find where to insert the footer (before closing body tag or after main content)
            const mainContent = document.querySelector('#main-content');
            const body = document.body;
            
            if (mainContent) {
                mainContent.insertAdjacentHTML('afterend', footerHTML);
            } else {
                body.insertAdjacentHTML('beforeend', footerHTML);
            }
            
            // Fix footer links based on current page location
            this.fixFooterLinks();

        } catch (error) {
            console.warn('Footer could not be loaded:', error);
            // Fallback: footer content is already in the page
        }
    }

    fixFooterLinks() {
        const currentPath = window.location.pathname;
        const isInPagesFolder = currentPath.includes('/pages/');
        
        // Fix home link
        const homeLink = document.querySelector('.footer-home-link');
        if (homeLink) {
            homeLink.href = isInPagesFolder ? '../index.html' : 'index.html';
        }
        
        // Fix page links
        const pageLinks = document.querySelectorAll('.footer-page-link');
        pageLinks.forEach(link => {
            const originalHref = link.getAttribute('href');
            if (originalHref.startsWith('/pages/')) {
                const pageName = originalHref.replace('/pages/', '');
                link.href = isInPagesFolder ? pageName : `pages/${pageName}`;
            }
        });
    }
}

// Create global instances (prevent duplicates)
if (!window.navigationLoader) {
    window.navigationLoader = new NavigationLoader();
}
if (!window.footerManager) {
    window.footerManager = new FooterManager();
}

// Export for modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NavigationLoader, NavigationManager, FooterManager };
}