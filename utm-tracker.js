/**
 * UTM Tracker for LaunchToLead.io
 * 
 * Captures UTM parameters and attribution data on first landing,
 * stores them in sessionStorage so they persist across page navigations
 * within a single funnel session, and exposes a getUtmData() function
 * that any page can call to retrieve the stored attribution data.
 * 
 * Funnel flow:
 *   impact-bullet-equation.html → thank-you.html → offer.html → booking-confirmed.html
 * 
 * How it works:
 *   1. On every page load, checks the URL for UTM params
 *   2. If UTMs are found in the URL (first landing from an ad), stores them in sessionStorage
 *   3. If no UTMs in the URL, existing sessionStorage values are preserved from earlier pages
 *   4. Any page can call getUtmData() to get the full attribution object
 * 
 * Tracked parameters:
 *   - utm_source    (e.g., "linkedin", "google", "facebook")
 *   - utm_medium    (e.g., "paid", "organic", "social")
 *   - utm_campaign  (e.g., "impact-bullet-builder-feb26")
 *   - utm_content   (e.g., "ad-01-financial-bleed")
 *   - utm_term      (e.g., keyword targeting)
 *   - li_fat_id     (LinkedIn click ID for conversion attribution)
 *   - traffic_source (derived human-readable label: "LinkedIn Ads", "Organic", "Direct")
 * 
 * Usage in other scripts:
 *   var data = getUtmData();
 *   // data.utm_source     → "linkedin"
 *   // data.traffic_source → "LinkedIn Ads"
 *   // data.li_fat_id      → "abc123..." (or empty string)
 */

(function () {
    var STORAGE_KEY = 'ltl_utm_data';
    var UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

    // =============================================
    // 1. READ UTM PARAMS FROM CURRENT URL
    // =============================================
    var urlParams = new URLSearchParams(window.location.search);
    var hasUtmsInUrl = false;
    var urlUtms = {};

    for (var i = 0; i < UTM_PARAMS.length; i++) {
        var key = UTM_PARAMS[i];
        var val = urlParams.get(key);
        if (val) {
            urlUtms[key] = val;
            hasUtmsInUrl = true;
        }
    }

    // Also capture LinkedIn click ID if present
    var liFatId = urlParams.get('li_fat_id');

    // =============================================
    // 2. STORE OR RETRIEVE FROM SESSIONSTORAGE
    // =============================================
    if (hasUtmsInUrl) {
        // New ad click or campaign visit — store fresh UTM data
        var dataToStore = {};
        for (var j = 0; j < UTM_PARAMS.length; j++) {
            dataToStore[UTM_PARAMS[j]] = urlUtms[UTM_PARAMS[j]] || '';
        }
        if (liFatId) {
            dataToStore.li_fat_id = liFatId;
        }
        // Derive human-readable traffic source label
        dataToStore.traffic_source = deriveTrafficSource(dataToStore.utm_source, dataToStore.utm_medium);
        dataToStore.landing_page = window.location.pathname;
        dataToStore.landed_at = new Date().toISOString();

        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(dataToStore));
        } catch (e) {
            // sessionStorage not available (private browsing in some browsers)
        }
    } else if (liFatId) {
        // No UTMs but li_fat_id present — store it and mark as LinkedIn
        var existing = loadFromStorage();
        if (!existing.li_fat_id) {
            existing.li_fat_id = liFatId;
            if (!existing.utm_source) {
                existing.utm_source = 'linkedin';
                existing.utm_medium = 'paid';
                existing.traffic_source = 'LinkedIn Ads';
            }
            try {
                sessionStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
            } catch (e) {}
        }
    }
    // If neither UTMs nor li_fat_id in URL, sessionStorage keeps whatever was stored on a previous page

    // =============================================
    // 3. DERIVE TRAFFIC SOURCE LABEL
    // =============================================
    function deriveTrafficSource(source, medium) {
        if (!source) return 'Direct';

        var s = (source || '').toLowerCase();
        var m = (medium || '').toLowerCase();

        if (s === 'linkedin' && (m === 'paid' || m === 'cpc' || m === 'ppc')) return 'LinkedIn Ads';
        if (s === 'linkedin') return 'Organic LinkedIn';
        if (s === 'facebook' || s === 'fb' || s === 'instagram' || s === 'ig') return 'Organic Social';
        if (s === 'google' && (m === 'paid' || m === 'cpc' || m === 'ppc')) return 'Google Ads';
        if (s === 'google' && m === 'organic') return 'Google Organic';
        if (s === 'google') return 'Google';
        if (s === 'skool') return 'Skool';
        if (m === 'email') return 'Email';
        if (m === 'referral') return 'Referral';

        // Fallback: capitalize source
        return source.charAt(0).toUpperCase() + source.slice(1);
    }

    // =============================================
    // 4. HELPER: LOAD FROM STORAGE
    // =============================================
    function loadFromStorage() {
        try {
            var raw = sessionStorage.getItem(STORAGE_KEY);
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return {};
    }

    // =============================================
    // 5. GLOBAL API: getUtmData()
    // =============================================
    /**
     * Returns the stored UTM/attribution data object.
     * Always returns an object (never null). Missing fields are empty strings.
     * 
     * @returns {Object} e.g. {
     *   utm_source: "linkedin",
     *   utm_medium: "paid",
     *   utm_campaign: "ibb-feb-2026",
     *   utm_content: "ad-01",
     *   utm_term: "",
     *   li_fat_id: "abc123",
     *   traffic_source: "LinkedIn Ads",
     *   landing_page: "/landing/impact-bullet-equation.html",
     *   landed_at: "2026-02-27T14:30:00.000Z"
     * }
     */
    window.getUtmData = function () {
        var data = loadFromStorage();
        // Ensure all expected fields exist (return empty strings for missing ones)
        var defaults = {
            utm_source: '',
            utm_medium: '',
            utm_campaign: '',
            utm_content: '',
            utm_term: '',
            li_fat_id: '',
            traffic_source: 'Direct',
            landing_page: '',
            landed_at: ''
        };
        for (var key in defaults) {
            if (!data[key]) data[key] = defaults[key];
        }
        return data;
    };

    // Log for debugging (only in dev)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('[LTL UTM Tracker]', window.getUtmData());
    }
})();
