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
        popupDelay: 3000,
        alwaysShow: true,
        storageKey: 'ltl_lead_popup_shown',
        showAgainDays: 7,
        kitFormId: '8815632',
        
        leadMagnet: {
            name: "Impact Bullet Builder Starter Guide",
            tagline: "Stop Applying Into the Void",
            subtitle: "The exact formula I used to land my first engineering role at John Deere",
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
        const lm = CONFIG.leadMagnet;
        
        let painHTML = '';
        lm.painPoints.forEach(function(pain) {
            painHTML += '<li class="flex items-start gap-2 text-red-700 text-sm">' +
                '<span class="text-red-500 mt-0.5">✗</span>' +
                '<span>' + pain + '</span></li>';
        });
        
        let includesHTML = '';
        lm.includes.forEach(function(item) {
            includesHTML += '<li class="flex items-start gap-3">' +
                '<div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">' +
                '<svg class="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>' +
                '<div><p class="font-semibold text-slate-800 text-sm">' + item.text + '</p>' +
                '<p class="text-slate-500 text-xs">' + item.desc + '</p></div></li>';
        });

        return '<div id="lead-magnet-popup" class="fixed inset-0 z-50 hidden">' +
            '<div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="window.LeadMagnetPopup.close()"></div>' +
            '<div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">' +
                '<div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative pointer-events-auto">' +
                    '<div id="popup-main" class="p-6 md:p-8">' +
                        '<div class="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 mb-6 text-center">' +
                            '<p class="text-amber-800 text-sm font-medium">' +
                                '<span class="inline-block w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>' + lm.scarcity + '</p></div>' +
                        '<div class="text-center mb-6">' +
                            '<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3">' +
                                '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>FREE DOWNLOAD</div>' +
                            '<h2 class="text-2xl md:text-3xl font-bold text-slate-800 mb-2">' + lm.tagline + '</h2>' +
                            '<p class="text-slate-600 text-sm">' + lm.subtitle + '</p></div>' +
                        '<div class="bg-red-50 border-l-4 border-red-400 rounded-r-lg p-4 mb-6">' +
                            '<p class="text-red-800 font-semibold text-sm mb-2">Sound familiar?</p>' +
                            '<ul class="space-y-1">' + painHTML + '</ul></div>' +
                        '<div class="mb-6">' +
                            '<p class="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">What\'s Inside:</p>' +
                            '<ul class="space-y-3">' + includesHTML + '</ul></div>' +
                        '<form id="lead-magnet-form" onsubmit="window.LeadMagnetPopup.submitForm(event)" class="space-y-3">' +
                            '<input type="text" id="lead-first-name" name="first_name" required class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm" placeholder="First Name">' +
                            '<input type="email" id="lead-email" name="email" required class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm" placeholder="Email Address">' +
                            '<button type="submit" id="popup-submit-btn" class="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl">Send Me the Free Guide →</button></form>' +
                        '<p class="text-center text-xs text-slate-400 mt-4">' + lm.guarantee + '</p>' +
                        '<button onclick="window.LeadMagnetPopup.close()" class="w-full mt-4 py-3 px-4 border-2 border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 hover:text-red-600 rounded-xl text-sm font-medium transition-all">No thanks, I don\'t like useful free stuff</button></div>' +
                    '<div id="popup-success" class="p-8 text-center hidden">' +
                        '<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">' +
                            '<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>' +
                        '<h2 class="text-2xl font-bold text-slate-800 mb-2">Check Your Inbox!</h2>' +
                        '<p class="text-slate-600 mb-4 text-sm">Your ' + lm.name + ' is on its way to <span id="submitted-email" class="font-semibold">your email</span></p>' +
                        '<div class="bg-emerald-50 rounded-xl p-4 mb-6 text-left">' +
                            '<p class="font-semibold text-emerald-800 text-sm mb-2">🎯 Next Step:</p>' +
                            '<p class="text-emerald-700 text-sm">Book a free 15-minute strategy call to see how we can accelerate your job search.</p></div>' +
                        '<a href="https://calendar.app.google/uzaLZUWSUH3ZbaGr6" target="_blank" class="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-semibold transition-all">Book Free Strategy Call</a>' +
                        '<p class="mt-4"><button onclick="window.LeadMagnetPopup.close()" class="text-slate-400 hover:text-slate-600 text-sm underline">I\'ll explore on my own for now</button></p></div>' +
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
