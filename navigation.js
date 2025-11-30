// Shared Navigation Component for Launch to Lead
// Automatically highlights the current page based on URL

(function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Page configuration for dynamic highlighting
    const pages = {
        'index.html': { name: 'home', displayName: 'Home' },
        'launch.html': { name: 'launch', displayName: 'Launch' },
        'pivot.html': { name: 'pivot', displayName: 'Pivot' },
        'accelerate.html': { name: 'accelerate', displayName: 'Accelerate' },
        'packages.html': { name: 'packages', displayName: 'Packages' },
        'faq.html': { name: 'faq', displayName: 'FAQ' },
        'success-stories.html': { name: 'success-stories', displayName: 'Success Stories' },
        'about.html': { name: 'about', displayName: 'About' },
        'blog.html': { name: 'blog', displayName: 'Blog' },
        'vault.html': { name: 'vault', displayName: 'The L² Vault' },
        'contact.html': { name: 'contact', displayName: 'Contact' }
    };
    
    const currentPageName = pages[currentPage]?.name || 'home';
    
    // Helper function to get link classes
    function getLinkClasses(pageName, isButton = false) {
        if (isButton) {
            return 'bg-brand-primary text-white px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-brand-secondary transition shadow-sm';
        }
        const isActive = pageName === currentPageName;
        const baseClasses = 'text-sm hover:text-brand-secondary transition py-1.5';
        const activeClasses = 'font-bold text-brand-primary';
        const inactiveClasses = 'font-medium text-slate-500';
        return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    }
    
    // Mobile link classes: highlight ONLY the current page. Contact is a CTA when inactive.
    function getMobileLinkClasses(pageName, isCTA = false) {
        const isActive = pageName === currentPageName;
        const base = 'block px-3 py-2 rounded-md text-base transition';
        const active = 'font-bold text-brand-primary bg-slate-50';
        const inactive = 'font-medium text-slate-700 hover:text-brand-secondary hover:bg-slate-50';

        // Contact (Get Started) special styling only when not active
        if (pageName === 'contact') {
            if (isActive) {
                return `${base} ${active} border border-emerald-200`;
            }
            return `${base} font-semibold text-white bg-brand-primary hover:bg-brand-secondary shadow-sm`;
        }

        // Generic pages
        return `${base} ${isActive ? active : inactive}`;
    }
    
    // Navigation HTML template
    const navigationHTML = `
<!-- Sticky Navigation + Banner Wrapper -->
<div class="sticky top-0 z-50 bg-white shadow-sm">
<!-- Navigation -->
<nav id="main-nav" class="bg-white/95 backdrop-blur-lg border-b border-emerald-100 w-full">
    <div class="max-w-7xl mx-auto px-4 pt-3 pb-2">
        <div class="flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-2 group">
                <div class="bg-brand-primary text-white w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-primary transition duration-300">
                    <span class="font-bold text-sm">L²</span>
                </div>
                <span class="font-bold text-xl text-brand-primary tracking-tight">Launch<span class="font-light text-brand-secondary">ToLead</span></span>
            </a>
            <div class="hidden md:flex items-center space-x-6">
                <a href="launch.html" class="${getLinkClasses('launch')}">Launch</a>
                <a href="pivot.html" class="${getLinkClasses('pivot')}">Pivot</a>
                <a href="accelerate.html" class="${getLinkClasses('accelerate')}">Accelerate</a>
                <a href="packages.html" class="${getLinkClasses('packages')}">Packages</a>
                <a href="faq.html" class="${getLinkClasses('faq')}">FAQ</a>
                <a href="success-stories.html" class="${getLinkClasses('success-stories')}">Success Stories</a>
                <a href="about.html" class="${getLinkClasses('about')}">About</a>
                <a href="blog.html" class="${getLinkClasses('blog')}">Blog</a>
                <a href="vault.html" class="${getLinkClasses('vault')}">The L² Vault</a>
                <a href="contact.html" class="${getLinkClasses('contact', true)}">
                    Get Started
                </a>
            </div>
            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button data-mobile-toggle aria-controls="mobile-menu" aria-expanded="false" class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary">
                    <span class="sr-only">Open main menu</span>
                    <svg data-icon-open class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg data-icon-close class="h-6 w-6 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <!-- Mobile menu (animated) -->
    <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-white border-b border-emerald-100 shadow-lg z-50 transform transition-all duration-200 -translate-y-2 opacity-0 pointer-events-none">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="launch.html" class="${getMobileLinkClasses('launch')}">Launch</a>
            <a href="pivot.html" class="${getMobileLinkClasses('pivot')}">Pivot</a>
            <a href="accelerate.html" class="${getMobileLinkClasses('accelerate')}">Accelerate</a>
            <a href="packages.html" class="${getMobileLinkClasses('packages')}">Packages</a>
            <a href="faq.html" class="${getMobileLinkClasses('faq')}">FAQ</a>
            <a href="success-stories.html" class="${getMobileLinkClasses('success-stories')}">Success Stories</a>
            <a href="about.html" class="${getMobileLinkClasses('about')}">About</a>
            <a href="blog.html" class="${getMobileLinkClasses('blog')}">Blog</a>
            <a href="vault.html" class="${getMobileLinkClasses('vault')}">The L² Vault</a>
            <a href="contact.html" class="${getMobileLinkClasses('contact', true)}">Get Started</a>
        </div>
    </div>
</nav>
</div>
    `.trim();
    
    // Insert navigation into the page
    document.addEventListener('DOMContentLoaded', function() {
        const navContainer = document.getElementById('navigation-container');
        if (navContainer) {
            // Replace the container entirely so sticky positioning works correctly
            navContainer.outerHTML = navigationHTML;

            // Mobile menu toggle logic (replaces Alpine behavior for dynamically injected nav)
            // Query from document since navContainer was replaced
            const toggleBtn = document.querySelector('[data-mobile-toggle]');
            const mobileMenu = document.querySelector('#mobile-menu');
            const iconOpen = document.querySelector('[data-icon-open]');
            const iconClose = document.querySelector('[data-icon-close]');

            function closeMenu() {
                // Add hiding classes for animation
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('translate-y-0','opacity-100','pointer-events-auto');
                mobileMenu.classList.add('-translate-y-2','opacity-0','pointer-events-none');
                iconOpen.classList.remove('hidden');
                iconClose.classList.add('hidden');
                toggleBtn.setAttribute('aria-expanded', 'false');
            }

            function openMenu() {
                // Remove hidden & apply visible animation classes
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.remove('-translate-y-2','opacity-0','pointer-events-none');
                mobileMenu.classList.add('translate-y-0','opacity-100','pointer-events-auto');
                iconOpen.classList.add('hidden');
                iconClose.classList.remove('hidden');
                toggleBtn.setAttribute('aria-expanded', 'true');
            }

            toggleBtn?.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
                if (isOpen) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });

            // Click outside to close
            document.addEventListener('click', (e) => {
                const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
                if (!isOpen) return;
                const nav = document.querySelector('#main-nav');
                if (nav && !nav.contains(e.target)) {
                    closeMenu();
                }
            });

            // Close on resize to desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768) {
                    closeMenu();
                }
            });
        }
        
        // Initialize Lucide icons (for banner icon)
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    });
})();
