// Shared Navigation Component for Launch to Lead
// Automatically highlights the current page based on URL

(function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Page configuration for dynamic highlighting
    const pages = {
        'index.html': { name: 'home', displayName: 'Home' },
        'success-stories.html': { name: 'success-stories', displayName: 'Success Stories' },
        'about.html': { name: 'about', displayName: 'About' },
        'social.html': { name: 'social', displayName: 'Social' },
        'vault.html': { name: 'vault', displayName: 'The L² Vault' },
        'legal.html': { name: 'legal', displayName: 'Legal' }
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
    
    // Social media links configuration with proper brand icons
    const socialLinks = [
        { 
            name: 'Skool Community', 
            url: 'https://www.skool.com/launch-to-lead-community-6905/about?ref=c9899dd4e0bf4fe9a69a6315529fab96', 
            icon: '<svg class="w-5 h-5" viewBox="0 0 48 48" fill="currentColor"><path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm0 4c8.837 0 16 7.163 16 16 0 3.478-1.113 6.698-3 9.32V28c0-2.21-1.79-4-4-4h-4v-4c0-1.1-.9-2-2-2h-8v-4h4c1.1 0 2-.9 2-2v-4h4c2.21 0 4-1.79 4-4v-.78C38.28 5.903 42 14.09 42 24c0 8.837-7.163 16-16 16-1.38 0-2.72-.18-4-.5V36c0-1.1-.9-2-2-2l-6.36-6.36c-.15-.82-.24-1.66-.24-2.52 0-.62.08-1.22.21-1.8L20 30v2c0 2.21 1.79 4 4 4v3.5c-8.837 0-16-7.163-16-16S15.163 8 24 8z"/></svg>',
            color: '#0066FF'
        },
        { 
            name: 'LinkedIn', 
            url: 'https://www.linkedin.com/company/110177288', 
            icon: '<i data-lucide="linkedin" class="w-5 h-5"></i>',
            color: '#0A66C2'
        },
        { 
            name: 'YouTube', 
            url: 'https://youtube.com/@launchtolead?si=ixd6oMJWhG2GhbNp', 
            icon: '<i data-lucide="youtube" class="w-5 h-5"></i>',
            color: '#FF0000'
        },
        { 
            name: 'TikTok', 
            url: 'https://www.tiktok.com/@launch.to.lead1?is_from_webapp=1&sender_device=pc', 
            icon: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>',
            color: '#000000'
        },
        { 
            name: 'Instagram', 
            url: 'https://www.instagram.com/launch.to.lead/', 
            icon: '<i data-lucide="instagram" class="w-5 h-5"></i>',
            color: '#E4405F'
        },
        { 
            name: 'X', 
            url: 'https://x.com/LaunchToLead', 
            icon: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
            color: '#000000'
        },
        { 
            name: 'Facebook', 
            url: 'https://www.facebook.com/profile.php?id=61585810773337', 
            icon: '<i data-lucide="facebook" class="w-5 h-5"></i>',
            color: '#1877F2'
        }
    ];

    // Generate social dropdown HTML for desktop
    function getSocialDropdownHTML() {
        let dropdownItems = '';
        socialLinks.forEach(link => {
            dropdownItems += `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-brand-primary transition">
                    <span class="text-slate-500">${link.icon}</span>
                    <span class="font-medium">${link.name}</span>
                </a>`;
        });
        
        return `
            <div class="relative group" data-social-dropdown>
                <button class="text-sm font-medium text-slate-500 hover:text-brand-secondary transition py-1.5 flex items-center gap-1">
                    Social
                    <svg class="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
                <div class="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div class="py-2">
                        ${dropdownItems}
                    </div>
                    <div class="border-t border-slate-100 p-2">
                        <a href="social.html" class="flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-brand-primary bg-emerald-50 rounded-lg hover:bg-emerald-100 transition">
                            <i data-lucide="layout-grid" class="w-3 h-3"></i>
                            View All Platforms
                        </a>
                    </div>
                </div>
            </div>`;
    }

    // Generate mobile social section HTML
    function getMobileSocialHTML() {
        let items = '';
        socialLinks.forEach(link => {
            items += `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-brand-primary rounded-md transition">
                    <span class="text-slate-500">${link.icon}</span>
                    <span class="font-medium">${link.name}</span>
                </a>`;
        });
        
        return `
            <div class="border-t border-slate-100 mt-2 pt-2">
                <p class="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Connect</p>
                ${items}
                <a href="social.html" class="flex items-center gap-2 mx-3 mt-2 px-3 py-2 text-sm font-semibold text-brand-primary bg-emerald-50 rounded-lg hover:bg-emerald-100 transition justify-center">
                    <i data-lucide="layout-grid" class="w-4 h-4"></i>
                    View All Platforms
                </a>
            </div>`;
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
                <a href="about.html" class="${getLinkClasses('about')}">About</a>
                <a href="success-stories.html" class="${getLinkClasses('success-stories')}">Success Stories</a>
                <a href="vault.html" class="${getLinkClasses('vault')}">Free Resources</a>
                ${getSocialDropdownHTML()}
                <a href="landing/offer.html?source=site" class="${getLinkClasses('contact', true)}">
                    Ready To Launch?→
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
            <a href="about.html" class="${getMobileLinkClasses('about')}">About</a>
            <a href="success-stories.html" class="${getMobileLinkClasses('success-stories')}">Success Stories</a>
            <a href="vault.html" class="${getMobileLinkClasses('vault')}">Free Resources</a>
            <a href="landing/offer.html?source=site" class="${getMobileLinkClasses('contact', true)}">Ready To Launch?→</a>
            ${getMobileSocialHTML()}
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
