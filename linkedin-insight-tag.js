/**
 * LinkedIn Insight Tag Integration for LaunchToLead.io
 * Partner ID: 8832100
 * 
 * This script handles:
 * - Base Insight Tag initialization and page view tracking
 * - LinkedIn click ID (li_fat_id) cookie preservation for attribution
 * 
 * Conversion tracking is handled by URL-rule based conversions in Campaign Manager:
 *   - "Lead - Impact Bullet Builder Download" → URL contains /landing/thank-you
 *   - "Booking - Career Launch Call"          → URL contains /landing/booking-confirmed
 * 
 * Funnel:
 *   Lead magnet form → thank-you.html → offer.html → booking-confirmed.html
 * 
 * Usage: Include this script in the <head> of all pages.
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
// 3. CONVERSION TRACKING (URL-RULE BASED)
// =============================================
// Conversions are tracked automatically by LinkedIn using URL rules
// configured in Campaign Manager → Analyze → Conversion Tracking:
//   - "Lead - Impact Bullet Builder Download" → URL contains /landing/thank-you
//   - "Booking - Career Launch Call"          → URL contains /landing/booking-confirmed
// No event-specific code is needed — the Insight Tag + page load handles it.
