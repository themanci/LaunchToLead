/**
 * LinkedIn Insight Tag Integration for LaunchToLead.io
 * Partner ID: 8832100
 * 
 * This script handles:
 * - Base Insight Tag initialization and page view tracking
 * - Lead conversion event tracking on form submission
 * - Booking conversion tracking
 * - LinkedIn click ID (li_fat_id) cookie preservation for attribution
 * 
 * Funnel:
 *   Lead magnet form → thank-you.html → offer.html → booking-confirmed.html
 *   All leads follow the same path (no split routing).
 * 
 * Usage: Include this script in the <head> of all pages after the noscript fallback
 * 
 * Setup:
 * 1. Go to LinkedIn Campaign Manager → Analyze → Insight Tag
 * 2. Copy your Partner ID (a number like 7654321)
 * 3. Replace the Partner ID below with that number
 * 4. (Optional) Replace conversion ID placeholders with your actual conversion IDs
 *    from Campaign Manager → Analyze → Conversion Tracking → Create Conversion
 */

// =============================================
// 1. BASE INSIGHT TAG — Tracks page views
// =============================================

// Set your LinkedIn Partner ID
_linkedin_partner_id = "8832100";

window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);

(function(l) {
    if (!l) {
        window.lintrk = function(a, b) {
            window.lintrk.q.push([a, b]);
        };
        window.lintrk.q = [];
    }
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
})(window.lintrk);

// =============================================
// 2. LINKEDIN CLICK ID PRESERVATION
// =============================================

// LinkedIn appends li_fat_id to URLs when users click ads.
// Preserve it in a cookie so it persists across pages (improves attribution).
(function() {
    var params = new URLSearchParams(window.location.search);
    var liFatId = params.get('li_fat_id');
    if (liFatId) {
        var expires = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = 'li_fat_id=' + encodeURIComponent(liFatId) + '; expires=' + expires + '; path=/; SameSite=Lax';
    }
})();

// =============================================
// 3. CONVERSION EVENT TRACKING
// =============================================

// Conversion IDs — replace these with your actual IDs from Campaign Manager
// Go to: Analyze → Conversion Tracking → Create Conversion → "Use event-specific pixel"
// LinkedIn will give you a conversion_id number for each conversion.
var LTL_LINKEDIN_CONVERSIONS = {
    lead: null,            // Replace null with your Lead conversion ID, e.g., 19876543
    booking: null          // Replace null with your Booking conversion ID
};

/**
 * Fire a LinkedIn conversion event
 * @param {string} type - One of: 'lead', 'qualifiedLead', 'booking'
 */
function ltlLinkedInConversion(type) {
    var conversionId = LTL_LINKEDIN_CONVERSIONS[type];
    if (conversionId && typeof window.lintrk === 'function') {
        window.lintrk('track', { conversion_id: conversionId });
        console.log('[LTL] LinkedIn conversion fired:', type, conversionId);
    }
}

// =============================================
// 4. PAGE-SPECIFIC CONVERSION TRACKING
// =============================================

(function() {
    var path = window.location.pathname;

    // Thank-you page — lead converted (form submitted, PDF sent)
    if (path.includes('/thank-you.html')) {
        ltlLinkedInConversion('lead');
    }

    // Booking confirmed — Career Launch Call booked
    if (path.includes('/booking-confirmed.html')) {
        ltlLinkedInConversion('booking');
    }
})();
