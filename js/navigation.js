/**
 * Reusable Navigation and Footer JavaScript
 * Include this file in all pages that use the navigation and footer components
 */

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
        
        // Remove active class from all links
        this.navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to current page link
        this.navLinks.forEach(link => {
            const linkPage = this.getLinkPageName(link);
            if (linkPage === currentPage) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    getCurrentPageName() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        // Handle different possible filenames
        if (!filename || filename === '' || filename === 'index.html') {
            return 'index';
        }
        
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
            const response = await fetch('includes/footer.html');
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

        } catch (error) {
            console.warn('Footer could not be loaded:', error);
            // Fallback: footer content is already in the page
        }
    }
}

// Create global instances
window.navigationManager = new NavigationManager();
window.footerManager = new FooterManager();

// Export for modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NavigationManager, FooterManager };
}