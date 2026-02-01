/**
 * Meta Pixel Integration for LaunchToLead.io
 * Pixel ID: 3141490496240983
 * 
 * This script handles:
 * - Base pixel initialization and PageView tracking
 * - Lead event tracking for strategy call booking clicks
 * - ViewContent tracking for key pages
 * 
 * Usage: Include this script in the <head> of all pages after the noscript fallback
 */

// Meta Pixel Base Code
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

// Initialize Pixel
fbq('init', '3141490496240983');

// Track PageView
fbq('track', 'PageView');

// Track ViewContent for key pages with content details
(function() {
    var path = window.location.pathname;
    var contentData = null;
    
    // Define content types for key pages
    if (path === '/' || path === '/index.html') {
        contentData = { content_name: 'Homepage', content_category: 'Landing Page' };
    } else if (path === '/launch.html') {
        contentData = { content_name: 'Launch Path', content_category: 'Product Page', content_type: 'product' };
    } else if (path === '/accelerate.html') {
        contentData = { content_name: 'Accelerate Path', content_category: 'Product Page', content_type: 'product' };
    } else if (path === '/packages.html') {
        contentData = { content_name: 'Pricing Packages', content_category: 'Pricing Page', content_type: 'product' };
    } else if (path === '/about.html') {
        contentData = { content_name: 'About Mansour', content_category: 'About Page' };
    } else if (path === '/contact.html') {
        contentData = { content_name: 'Contact', content_category: 'Contact Page' };
    } else if (path === '/success-stories.html') {
        contentData = { content_name: 'Success Stories', content_category: 'Social Proof' };
    } else if (path.includes('blog')) {
        contentData = { content_name: document.title, content_category: 'Blog' };
    }
    
    if (contentData) {
        fbq('track', 'ViewContent', contentData);
    }
})();

// Track Lead events when clicking strategy call booking links
document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href*="calendar.app.google"]');
    if (link) {
        fbq('track', 'Lead', {
            content_name: 'Strategy Call Booking',
            content_category: window.location.pathname,
            value: 0,
            currency: 'USD'
        });
    }
});

// Track Contact events for any contact form submissions (if applicable)
document.addEventListener('submit', function(e) {
    var form = e.target;
    if (form && (form.id === 'contact-form' || form.classList.contains('contact-form'))) {
        fbq('track', 'Contact', {
            content_name: 'Contact Form Submission',
            content_category: window.location.pathname
        });
    }
});
