/**
 * Lead Magnet Popup System v2
 * 
 * Single-Step Flow - Hormozi Style:
 * User enters name and email to receive the Impact Bullet Builder Starter Guide
 * 
 * Features:
 * - Always shows on page load (configurable)
 * - Pain points, scarcity, value stack
 * - Single form - no path selection
 */

(function() {
    'use strict';

    const CONFIG = {
        popupDelay: 500,
        alwaysShow: true,
        storageKey: 'ltl_lead_popup_shown',
        showAgainDays: 7,
        kitFormId: '8815632',
        
        leadMagnet: {
            name: "Impact Bullet Builder Starter Guide",
            tagline: "Stop Applying Into the Void",
            subtitle: "The exact formula I used to land my first engineering role at a Fortune 100 Ag OEM",
            painPoints: [
                "Sent 100+ applications with zero callbacks?",
                "Resume full of responsibilities that impress no one?",
                "Watching less-qualified people get YOUR interviews?"
            ],
            includes: [
                { text: "The Impact Equation Formula", desc: "Turn boring bullets into callback magnets" },
                { text: "Before/After Examples", desc: "Real transformations across 6 engineering disciplines" },
                { text: "Metric Finder Worksheet", desc: "Find hidden numbers even without data access" },
                { text: "Fill-in-the-Blank Templates", desc: "Just plug in your info and go" }
            ],
            scarcity: "Only accepting 10 coaching clients per month",
            guarantee: "Free. No credit card. Instant download."
        }
    };

    let popupElement = null;

    function shouldShowPopup() {
        if (CONFIG.alwaysShow) return true;
        
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('popup') === 'test') return true;

        const storedData = localStorage.getItem(CONFIG.storageKey);
        if (!storedData) return true;

        try {
            const data = JSON.parse(storedData);
            if (data.submitted) return false;
            if (data.closedAt) {
                const daysSinceClosed = (Date.now() - new Date(data.closedAt).getTime()) / (1000 * 60 * 60 * 24);
                return daysSinceClosed >= CONFIG.showAgainDays;
            }
        } catch (e) {
            return true;
        }
        return true;
    }

    function markPopupClosed() {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify({
            closedAt: new Date().toISOString(),
            submitted: false
        }));
    }

    function markFormSubmitted(email) {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify({
            submitted: true,
            submittedAt: new Date().toISOString(),
            email: email
        }));
    }

    function createPopupHTML() {
        return '<div id="lead-magnet-popup" class="fixed inset-0 z-50 hidden">' +
            '<div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="window.LeadMagnetPopup.close()"></div>' +
            '<div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">' +
                '<div class="bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative pointer-events-auto border border-emerald-700/50">' +
                    '<div id="popup-main" class="p-8">' +
                        '<!-- Main content -->' +
                        '<div class="text-center mb-8">' +
                            '<h2 class="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">The Resume Formula that landed me a Fortune 100 Ag OEM</h2>' +
                            '<p class="text-emerald-100 text-base mb-4">Completely FREE PDF Download — Transform your resume like I did</p>' +
                            '<div class="bg-red-950/50 border-2 border-red-800/70 rounded-xl px-4 py-3 inline-block">' +
                                '<p class="text-red-200 text-sm font-semibold">Your resume has 6 seconds to impress, you\'re wasting those 6 seconds without this formula.</p>' +
                            '</div>' +
                        '</div>' +
                        '<!-- What\'s Included - Shortened -->' +
                        '<div class="mb-6">' +
                            '<ul class="space-y-3 text-white text-sm">' +
                                '<li class="flex items-start gap-3">' +
                                    '<div class="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">' +
                                        '<svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>' +
                                    '<div><p class="font-semibold text-white">The Formula — transform your boring bullets</p></div>' +
                                '</li>' +
                                '<li class="flex items-start gap-3">' +
                                    '<div class="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">' +
                                        '<svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>' +
                                    '<div><p class="font-semibold text-white">Before/After — See it in action</p></div>' +
                                '</li>' +
                                '<li class="flex items-start gap-3">' +
                                    '<div class="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">' +
                                        '<svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>' +
                                    '<div><p class="font-semibold text-white">Metrics, metrics, metrics — how to get them</p></div>' +
                                '</li>' +
                                '<li class="flex items-start gap-3">' +
                                    '<div class="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">' +
                                        '<svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>' +
                                    '<div><p class="font-semibold text-white">Template — use on your bullets immediately</p></div>' +
                                '</li>' +
                            '</ul>' +
                        '</div>' +
                        '<!-- Form -->' +
                        '<form id="lead-magnet-form" onsubmit="window.LeadMagnetPopup.submitForm(event)" class="space-y-3">' +
                            '<input type="text" id="lead-first-name" name="first_name" required class="w-full px-5 py-4 bg-slate-900 border-2 border-emerald-700/50 rounded-xl text-white placeholder-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/50 outline-none transition-all" placeholder="First Name">' +
                            '<input type="email" id="lead-email" name="email" required class="w-full px-5 py-4 bg-slate-900 border-2 border-emerald-700/50 rounded-xl text-white placeholder-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/50 outline-none transition-all" placeholder="Email Address">' +
                            '<button type="submit" id="popup-submit-btn" class="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg">Download Formula Now!</button>' +
                            '<button type="button" onclick="window.LeadMagnetPopup.close()" class="w-full py-3 bg-transparent border-2 border-slate-700 hover:border-slate-600 text-slate-400 hover:text-slate-300 rounded-xl transition-all text-sm">I hate free valuable stuff</button>' +
                        '</form>' +
                        '<p class="text-center text-xs text-emerald-300 mt-4">Absolutely free, no spam, no fluff</p>' +
                    '</div>' +
                    '<div id="popup-success" class="p-8 text-center hidden">' +
                        '<!-- Success Icon with Animation -->' +
                        '<div class="text-center mb-6">' +
                            '<div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mb-4 shadow-lg">' +
                                '<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></div>' +
                            '<h2 class="text-3xl font-bold text-white mb-3">Check Your Inbox!</h2>' +
                            '<p class="text-emerald-200 text-base">Your Impact Bullet Builder Free Guide is on its way to</p>' +
                            '<p class="text-white font-semibold text-lg mb-4"><span id="submitted-email">your email</span></p>' +
                            '<!-- Immediate next step -->' +
                            '<div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950/60 border border-emerald-700 rounded-full text-emerald-300 text-sm">' +
                                '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' +
                                '<span>While you wait, let\'s get you interview-ready faster...</span>' +
                            '</div>' +
                        '</div>' +
                        '<!-- Scarcity Banner -->' +
                        '<div class="bg-gradient-to-r from-red-950/80 to-orange-950/80 border-2 border-red-700/70 rounded-xl p-4 mb-6">' +
                            '<div class="flex items-center justify-center gap-2 mb-2">' +
                                '<span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>' +
                                '<p class="font-bold text-red-200 text-sm">Only 10 Coaching Spots Available Per Month</p></div>' +
                            '<p class="text-red-300 text-xs text-center">Limited availability • High-touch 1-on-1 coaching</p>' +
                        '</div>' +
                        '<!-- Strategy Call CTA Box -->' +
                        '<div class="bg-gradient-to-br from-emerald-950/40 to-teal-950/40 border-2 border-emerald-600/50 rounded-xl p-6 mb-6">' +
                            '<div class="text-center mb-4">' +
                                '<h3 class="text-xl font-bold text-white mb-2">🎯 Book Your Free 15-Minute Strategy Call</h3>' +
                                '<p class="text-emerald-200 text-sm">Let\'s identify what\'s holding you back and how we can help</p>' +
                            '</div>' +
                            '<!-- What happens on the call -->' +
                            '<div class="bg-slate-900/50 rounded-lg p-4 mb-5">' +
                                '<p class="text-emerald-300 text-xs font-semibold mb-3 uppercase tracking-wide">On this call, we\'ll:</p>' +
                                '<ul class="space-y-2 text-sm text-white">' +
                                    '<li class="flex items-start gap-2">' +
                                        '<span class="text-emerald-500 mt-0.5">→</span>' +
                                        '<span><strong class="text-emerald-300">Walk through our 21-Day Launch Blueprint</strong> program</span></li>' +
                                    '<li class="flex items-start gap-2">' +
                                        '<span class="text-emerald-500 mt-0.5">→</span>' +
                                        '<span><strong class="text-emerald-300">Identify your key pain points</strong> in the job search</span></li>' +
                                    '<li class="flex items-start gap-2">' +
                                        '<span class="text-emerald-500 mt-0.5">→</span>' +
                                        '<span><strong class="text-emerald-300">See if we can help</strong> you reach interview-ready status</span></li>' +
                                '</ul>' +
                            '</div>' +
                            '<!-- Cost of waiting -->' +
                            '<div class="bg-amber-950/30 border border-amber-800/50 rounded-lg p-3 mb-4">' +
                                '<p class="text-amber-200 text-xs text-center"><strong class="text-amber-300">The math:</strong> A small coaching investment vs. losing $6-8K <strong>every month</strong> you wait to land your job</p>' +
                                '<p class="text-amber-300 text-xs text-center mt-2 font-semibold">You\'ve already waited long enough.</p>' +
                            '</div>' +
                            '<!-- CTA label -->' +
                            '<p class="text-emerald-300 text-xs text-center mb-3 font-semibold">🚀 See if you qualify for coaching</p>' +
                            '<a href="landing/offer.html?source=site" class="block w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-lg rounded-xl transition-all shadow-xl mb-2 text-center">Ready To Launch? →</a>' +
                            '<!-- Reassurance -->' +
                            '<p class="text-center text-emerald-400 text-xs mt-2">No pressure. No pitch. Just clarity.</p>' +
                        '</div>' +
                        '<!-- Soft Close -->' +
                        '<p class="text-center text-slate-600 text-xs hover:text-slate-500 cursor-pointer transition-colors" onclick="window.LeadMagnetPopup.close()">I\'ll read the guide first</p>' +
                    '</div>' +
                '</div></div></div>';
    }

    function init() {
        var container = document.createElement('div');
        container.innerHTML = createPopupHTML();
        document.body.appendChild(container.firstElementChild);
        popupElement = document.getElementById('lead-magnet-popup');
        if (shouldShowPopup()) {
            setTimeout(show, CONFIG.popupDelay);
        }
    }

    function show() {
        if (popupElement) {
            popupElement.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            if (typeof gtag === 'function') {
                gtag('event', 'lead_magnet_popup_shown', {
                    'event_label': CONFIG.leadMagnet.name,
                    'source': 'popup'
                });
            }
        }
    }

    function close() {
        if (popupElement) {
            popupElement.classList.add('hidden');
            document.body.style.overflow = '';
            var storedData = localStorage.getItem(CONFIG.storageKey);
            if (!storedData || !JSON.parse(storedData).submitted) {
                markPopupClosed();
            }
            
            // Auto-play the hero video when popup closes
            var heroVideo = document.querySelector('#video video');
            if (heroVideo) {
                heroVideo.play().catch(function(e) {
                    // Autoplay may be blocked by browser, that's okay
                    console.log('Video autoplay blocked by browser');
                });
            }
        }
    }

    async function submitForm(event) {
        event.preventDefault();
        var firstName = document.getElementById('lead-first-name').value;
        var email = document.getElementById('lead-email').value;
        var submitBtn = document.getElementById('popup-submit-btn');
        var originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        try {
            var formData = new FormData();
            formData.append('email_address', email);
            formData.append('first_name', firstName);
            
            var response = await fetch('https://app.kit.com/forms/' + CONFIG.kitFormId + '/subscriptions', {
                method: 'POST',
                body: formData
            });
            
            if (!response.ok) throw new Error('Subscription failed');
            
            if (typeof gtag === 'function') {
                gtag('event', 'lead_magnet_submit', {
                    'event_label': CONFIG.leadMagnet.name,
                    'source': 'popup'
                });
            }

            // Meta Pixel conversion tracking
            if (typeof fbq === 'function') {
                fbq('track', 'Lead', {
                    content_name: CONFIG.leadMagnet.name,
                    content_category: 'Homepage Popup',
                    value: 0,
                    currency: 'USD'
                });
            }
            
            markFormSubmitted(email);
            document.getElementById('submitted-email').textContent = email;
            document.getElementById('popup-main').classList.add('hidden');
            document.getElementById('popup-success').classList.remove('hidden');
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Something went wrong. Please try again.');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.LeadMagnetPopup = {
        show: show,
        close: close,
        submitForm: submitForm,
        reset: function() {
            localStorage.removeItem(CONFIG.storageKey);
            console.log('Lead magnet popup state reset');
        },
        forceShow: function() { show(); }
    };
})();
