/**
 * Meta Pixel Integration for LaunchToLead.io
 * Pixel ID: 3141490496240983
 * 
 * This script handles:
 * - Base pixel initialization and PageView tracking
 * - Lead event tracking for strategy call booking clicks
 * - ViewContent tracking for key pages
 * - fbc (Click ID) and fbp (Browser ID) parameter passing for improved Event Match Quality
 * 
 * Usage: Include this script in the <head> of all pages after the noscript fallback
 */

// --- Helper: Read cookie by name ---
function _ltlGetCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

// --- Helper: Get fbclid from URL and build fbc parameter ---
function _ltlGetFbc() {
    // First check if _fbc cookie already exists (set by Pixel)
    var fbc = _ltlGetCookie('_fbc');
    if (fbc) return fbc;
    
    // Otherwise build it from fbclid URL parameter
    var params = new URLSearchParams(window.location.search);
    var fbclid = params.get('fbclid');
    if (fbclid) {
        // Format: fb.1.{timestamp}.{fbclid}
        fbc = 'fb.1.' + Date.now() + '.' + fbclid;
        // Store as cookie for 90 days so it persists across pages
        var expires = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = '_fbc=' + fbc + '; expires=' + expires + '; path=/; SameSite=Lax';
        return fbc;
    }
    return null;
}

// --- Helper: Get fbp (Browser ID) from _fbp cookie ---
function _ltlGetFbp() {
    return _ltlGetCookie('_fbp');
}

// --- Capture fbc on page load (before pixel fires) ---
var _ltlFbc = _ltlGetFbc();
var _ltlFbp = null;

// Meta Pixel Base Code
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

// Initialize Pixel with advanced matching parameters
var _ltlInitData = {};
if (_ltlFbc) _ltlInitData.fbc = _ltlFbc;
// fbp may not be available yet on first load — pixel sets it after init
fbq('init', '3141490496240983', {}, _ltlInitData);

// Track PageView
fbq('track', 'PageView');

// After pixel loads, capture fbp for use in subsequent events
setTimeout(function() {
    _ltlFbp = _ltlGetFbp();
}, 1000);

// --- Helper: Build event user data with fbc + fbp ---
function _ltlGetEventUserData() {
    var data = {};
    var fbc = _ltlFbc || _ltlGetFbc();
    var fbp = _ltlFbp || _ltlGetFbp();
    if (fbc) data.fbc = fbc;
    if (fbp) data.fbp = fbp;
    return data;
}

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
        Object.assign(contentData, _ltlGetEventUserData());
        fbq('track', 'ViewContent', contentData);
    }
})();

// Track Lead events when clicking offer page links
document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href*="offer.html"]');
    if (link) {
        var leadData = {
            content_name: 'Offer Page Click',
            content_category: window.location.pathname,
            value: 0,
            currency: 'USD'
        };
        Object.assign(leadData, _ltlGetEventUserData());
        fbq('track', 'Lead', leadData);
    }
});

// Track Contact events for any contact form submissions (if applicable)
document.addEventListener('submit', function(e) {
    var form = e.target;
    if (form && (form.id === 'contact-form' || form.classList.contains('contact-form'))) {
        var contactData = {
            content_name: 'Contact Form Submission',
            content_category: window.location.pathname
        };
        Object.assign(contactData, _ltlGetEventUserData());
        fbq('track', 'Contact', contactData);
    }
});
