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
        'contact.html': { name: 'contact', displayName: 'Contact' }
    };
    
    const currentPageName = pages[currentPage]?.name || 'home';
    
    // Helper function to get link classes
    function getLinkClasses(pageName, isButton = false) {
        if (isButton) {
            return 'bg-brand-primary text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-brand-secondary transition shadow-sm';
        }
        const isActive = pageName === currentPageName;
        const baseClasses = 'text-sm hover:text-brand-secondary transition';
        const activeClasses = 'font-bold text-brand-primary';
        const inactiveClasses = 'font-medium text-slate-500';
        return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    }
    
    // Helper function for mobile link classes
    function getMobileLinkClasses(pageName, isButton = false) {
        const isActive = pageName === currentPageName;
        if (isButton || pageName === 'contact') {
            return 'block px-3 py-2 rounded-md text-base font-medium text-brand-primary font-bold bg-slate-50';
        }
        const baseClasses = 'block px-3 py-2 rounded-md text-base';
        const activeClasses = 'font-bold text-brand-primary bg-slate-50';
        const inactiveClasses = 'font-medium text-slate-700 hover:text-brand-secondary hover:bg-slate-50';
        return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    }
    
    // Navigation HTML template
    const navigationHTML = `
<!-- Navigation -->
<nav class="bg-white/80 backdrop-blur-lg border-b border-emerald-100 fixed top-0 w-full z-50" x-data="{ open: false }">
    <div class="max-w-7xl mx-auto px-4 py-4">
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
                <a href="contact.html" class="${getLinkClasses('contact', true)}">
                    Get Started
                </a>
            </div>
            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button @click="open = !open" class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary">
                    <span class="sr-only">Open main menu</span>
                    <svg x-show="!open" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg x-show="open" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <!-- Mobile menu -->
    <div x-show="open" @click.away="open = false" class="md:hidden absolute top-full left-0 w-full bg-white border-b border-emerald-100 shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="launch.html" class="${getMobileLinkClasses('launch')}">Launch</a>
            <a href="pivot.html" class="${getMobileLinkClasses('pivot')}">Pivot</a>
            <a href="accelerate.html" class="${getMobileLinkClasses('accelerate')}">Accelerate</a>
            <a href="packages.html" class="${getMobileLinkClasses('packages')}">Packages</a>
            <a href="faq.html" class="${getMobileLinkClasses('faq')}">FAQ</a>
            <a href="success-stories.html" class="${getMobileLinkClasses('success-stories')}">Success Stories</a>
            <a href="about.html" class="${getMobileLinkClasses('about')}">About</a>
            <a href="contact.html" class="${getMobileLinkClasses('contact', true)}">Get Started</a>
        </div>
    </div>
</nav>
    `.trim();
    
    // Insert navigation into the page
    document.addEventListener('DOMContentLoaded', function() {
        const navContainer = document.getElementById('navigation-container');
        if (navContainer) {
            navContainer.innerHTML = navigationHTML;
        }
    });
})();
