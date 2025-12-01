/**
 * Lead Magnet Popup System
 * 
 * 2-Step Flow:
 * Step 1: User selects their path (Launch / Accelerate / Pivot)
 * Step 2: User enters name & email to receive path-specific toolkit
 * 
 * Features:
 * - Shows only to new visitors (localStorage tracking)
 * - Dev mode: Add ?popup=test to URL to force show
 * - Integrates with Kit (ConvertKit) forms
 * - Each path has its own Kit form ID for segmentation
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        // Delay before showing popup (ms)
        popupDelay: 3000,
        
        // localStorage key for tracking
        storageKey: 'ltl_lead_popup_shown',
        
        // Days before showing popup again (if closed without submitting)
        showAgainDays: 7,
        
        // Kit (ConvertKit) Form IDs for each path
        kitFormIds: {
            launch: '8815632',
            accelerate: '8815647',
            pivot: '8815646'
        },
        
        // Path-specific content
        paths: {
            launch: {
                pathName: "Launch Path",
                title: "Recent Grad or Early Career",
                subtitle: "Students, new grads, or starting your engineering career",
                toolkitName: "Impact Equation Launch Guide",
                toolkitDescription: "Stand out from 250+ applicants per job posting",
                color: "emerald",
                icon: "rocket",
                items: [
                    "Impact Equation Quick Start Guide (6 pages)",
                    "Transform boring bullets into compelling evidence",
                    "Fill-in-the-blank resume worksheet"
                ]
            },
            pivot: {
                pathName: "Pivot Path",
                title: "Career Changer",
                subtitle: "Switching industries, roles, or reinventing your career",
                toolkitName: "Trojan Horse Pivot Guide",
                toolkitDescription: "Change careers without starting over",
                color: "amber",
                icon: "refresh-cw",
                items: [
                    "Trojan Horse Strategy Guide (6 pages)",
                    "Build proof in new role while keeping your job",
                    "Pivot portfolio builder worksheet"
                ]
            },
            accelerate: {
                pathName: "Accelerate Path",
                title: "Aspiring Leader",
                subtitle: "Already employed, ready for promotion or leadership",
                toolkitName: "Visibility Pyramid Accelerate Guide",
                toolkitDescription: "Discover why you're not getting promoted",
                color: "indigo",
                icon: "trending-up",
                items: [
                    "Visibility Pyramid Diagnostic (9 pages)",
                    "Self-assessment for 4 promotion levels",
                    "Personalized promotion roadmap"
                ]
            }
        }
    };

    // State
    let selectedPath = null;
    let popupElement = null;

    /**
     * Check if popup should be shown
     */
    function shouldShowPopup() {
        // Dev mode: force show with ?popup=test
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('popup') === 'test') {
            return true;
        }

        // Check localStorage
        const storedData = localStorage.getItem(CONFIG.storageKey);
        if (!storedData) {
            return true;
        }

        try {
            const data = JSON.parse(storedData);
            
            // If user submitted form, never show again
            if (data.submitted) {
                return false;
            }
            
            // If user closed without submitting, check if enough time has passed
            if (data.closedAt) {
                const closedDate = new Date(data.closedAt);
                const daysSinceClosed = (Date.now() - closedDate.getTime()) / (1000 * 60 * 60 * 24);
                return daysSinceClosed >= CONFIG.showAgainDays;
            }
        } catch (e) {
            // Invalid data, show popup
            return true;
        }

        return true;
    }

    /**
     * Mark popup as shown/closed
     */
    function markPopupClosed() {
        const data = {
            closedAt: new Date().toISOString(),
            submitted: false
        };
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
    }

    /**
     * Mark form as submitted
     */
    function markFormSubmitted(path, email) {
        const data = {
            submitted: true,
            submittedAt: new Date().toISOString(),
            path: path,
            email: email
        };
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
    }

    /**
     * Create popup HTML
     */
    function createPopupHTML() {
        const html = `
        <div id="lead-magnet-popup" class="fixed inset-0 z-50 hidden">
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="window.LeadMagnetPopup.close()"></div>
            
            <!-- Popup Container -->
            <div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative pointer-events-auto">
                    
                    <!-- Close Button -->
                    <button onclick="window.LeadMagnetPopup.close()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <!-- Step 1: Path Selection -->
                    <div id="popup-step-1" class="p-8">
                        <div class="text-center mb-6">
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-900 text-xs font-semibold mb-4">
                                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                                Free Career Resources
                            </div>
                            <h2 class="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Get Your Free Strategy Guide</h2>
                            <p class="text-slate-500 text-sm mb-4">No catch, no strings attached, no gimmick — completely free, emailed directly to you.</p>
                            <p class="text-slate-700 font-medium">Which path are you currently on?</p>
                        </div>

                        <!-- Path Selection Cards -->
                        <div class="grid gap-4 mb-6">
                            ${createPathCard('launch')}
                            ${createPathCard('pivot')}
                            ${createPathCard('accelerate')}
                        </div>

                        <!-- Skip Link -->
                        <p class="text-center mt-4">
                            <button onclick="window.LeadMagnetPopup.close()" class="text-slate-400 hover:text-slate-600 text-sm underline">
                                No thanks, I'll browse on my own
                            </button>
                        </p>
                    </div>

                    <!-- Step 2: Email Form -->
                    <div id="popup-step-2" class="p-8 hidden">
                        <!-- Back Button -->
                        <button onclick="window.LeadMagnetPopup.goToStep1()" class="flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-4 group">
                            <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                            <span class="text-sm">Choose a different path</span>
                        </button>

                        <!-- Dynamic Header -->
                        <div class="text-center mb-6">
                            <div id="step2-icon" class="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mb-4">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            <h2 id="step2-title" class="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Your Toolkit</h2>
                            <p id="step2-subtitle" class="text-slate-600">Get instant access to your free guide</p>
                        </div>

                        <!-- What's Included -->
                        <div id="toolkit-contents" class="bg-slate-50 rounded-xl p-5 mb-6">
                            <!-- Populated dynamically -->
                        </div>

                        <!-- Email Form -->
                        <form id="lead-magnet-form" onsubmit="window.LeadMagnetPopup.submitForm(event)" class="space-y-4">
                            <input type="hidden" id="selected-path" name="path" value="">
                            
                            <div>
                                <label for="lead-first-name" class="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                                <input type="text" id="lead-first-name" name="first_name" required
                                       class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                       placeholder="Your first name">
                            </div>

                            <div>
                                <label for="lead-email" class="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input type="email" id="lead-email" name="email" required
                                       class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                       placeholder="you@email.com">
                            </div>

                            <button type="submit" id="popup-submit-btn"
                                    class="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl">
                                Send Me the Free Guide
                            </button>
                        </form>

                        <!-- Privacy Note -->
                        <p class="text-center text-xs text-slate-400 mt-4">
                            We respect your privacy. Unsubscribe anytime.
                        </p>
                    </div>

                    <!-- Step 3: Success -->
                    <div id="popup-step-3" class="p-8 text-center hidden">
                        <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h2 class="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Check Your Inbox!</h2>
                        <p class="text-slate-600 mb-6 max-w-md mx-auto">
                            We've sent your free strategy guide to: <span id="submitted-email" class="font-semibold">your email</span>
                        </p>
                        
                        <div class="bg-slate-50 rounded-xl p-5 mb-6 text-left max-w-sm mx-auto">
                            <h4 class="font-semibold text-slate-700 mb-2">While you wait...</h4>
                            <p class="text-slate-600 text-sm">Explore more about our 3 paths and how they can help boost your career today. Book a free 15 minute strategy call with a few simple clicks.</p>
                        </div>

                        <button onclick="window.LeadMagnetPopup.close()" 
                                class="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-semibold transition-all">
                            Get Started
                        </button>
                    </div>

                </div>
            </div>
        </div>
        `;
        return html;
    }

    /**
     * Create path selection card HTML
     */
    function createPathCard(pathKey) {
        const path = CONFIG.paths[pathKey];
        const colorClasses = {
            emerald: {
                bg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
                iconBg: 'bg-emerald-600',
                pathLabel: 'text-emerald-600',
                border: 'border-emerald-200 hover:border-emerald-500',
                arrow: 'text-emerald-600'
            },
            indigo: {
                bg: 'bg-gradient-to-br from-indigo-50 to-purple-50',
                iconBg: 'bg-indigo-600',
                pathLabel: 'text-indigo-600',
                border: 'border-indigo-200 hover:border-indigo-500',
                arrow: 'text-indigo-600'
            },
            amber: {
                bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
                iconBg: 'bg-amber-500',
                pathLabel: 'text-amber-600',
                border: 'border-amber-200 hover:border-amber-500',
                arrow: 'text-amber-600'
            }
        };
        const colors = colorClasses[path.color];
        
        const iconSvg = {
            'rocket': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>',
            'trending-up': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>',
            'refresh-cw': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>'
        };

        return `
        <div class="path-card cursor-pointer ${colors.bg} border-2 ${colors.border} rounded-2xl p-5 flex items-center gap-4 transition-all hover:shadow-lg group" 
             onclick="window.LeadMagnetPopup.selectPath('${pathKey}')" data-path="${pathKey}"
             data-color="${path.color}">
            <div class="flex-shrink-0 w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    ${iconSvg[path.icon]}
                </svg>
            </div>
            <div class="flex-1">
                <div class="${colors.pathLabel} font-bold text-xs uppercase tracking-wide">${path.pathName}</div>
                <h3 class="font-bold text-slate-800 text-lg">${path.title}</h3>
                <p class="text-slate-500 text-sm">${path.subtitle}</p>
            </div>
            <div class="flex-shrink-0 ${colors.arrow} group-hover:translate-x-1 transition-transform">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        </div>
        `;
    }

    /**
     * Initialize popup
     */
    function init() {
        // Inject popup HTML into page
        const container = document.createElement('div');
        container.innerHTML = createPopupHTML();
        document.body.appendChild(container.firstElementChild);
        
        popupElement = document.getElementById('lead-magnet-popup');

        // Check if should show popup
        if (shouldShowPopup()) {
            setTimeout(show, CONFIG.popupDelay);
        }
    }

    /**
     * Show popup
     */
    function show() {
        if (popupElement) {
            popupElement.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    /**
     * Close popup
     */
    function close() {
        if (popupElement) {
            popupElement.classList.add('hidden');
            document.body.style.overflow = '';
            
            // Only mark as closed if not submitted
            const storedData = localStorage.getItem(CONFIG.storageKey);
            if (!storedData || !JSON.parse(storedData).submitted) {
                markPopupClosed();
            }
        }
    }

    /**
     * Select a path - goes directly to step 2
     */
    function selectPath(pathKey) {
        selectedPath = pathKey;
        
        // Track click in Google Analytics
        if (typeof gtag === 'function') {
            gtag('event', 'lead_magnet_click', {
                'event_label': CONFIG.paths[pathKey].toolkitName,
                'path': pathKey,
                'source': 'index_popup'
            });
        }
        
        goToStep2();
    }

    /**
     * Go to Step 2
     */
    function goToStep2() {
        if (!selectedPath) return;
        
        const path = CONFIG.paths[selectedPath];
        
        // Update Step 2 content
        document.getElementById('step2-title').textContent = path.toolkitName;
        document.getElementById('step2-subtitle').textContent = path.toolkitDescription;
        
        // Update icon gradient based on path
        const iconEl = document.getElementById('step2-icon');
        const gradients = {
            emerald: 'from-emerald-500 to-teal-600',
            indigo: 'from-indigo-500 to-purple-600',
            amber: 'from-amber-500 to-orange-600'
        };
        iconEl.className = `inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${gradients[path.color]} rounded-xl mb-4`;
        
        // Update submit button with path color
        const submitBtn = document.getElementById('popup-submit-btn');
        submitBtn.className = `w-full py-4 bg-gradient-to-r ${gradients[path.color]} hover:opacity-90 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl`;
        submitBtn.textContent = `Send Me the ${path.pathName} Guide`;
        
        // Update toolkit contents
        const checkColor = `text-${path.color}-500`;
        const toolkitEl = document.getElementById('toolkit-contents');
        toolkitEl.innerHTML = `
            <h4 class="font-semibold text-slate-700 mb-3">What's included:</h4>
            <ul class="space-y-2 text-slate-600">
                ${path.items.map(item => `
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 ${checkColor} flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>${item}</span>
                    </li>
                `).join('')}
            </ul>
        `;
        
        // Set hidden field
        document.getElementById('selected-path').value = selectedPath;
        
        // Show step 2
        document.getElementById('popup-step-1').classList.add('hidden');
        document.getElementById('popup-step-2').classList.remove('hidden');
    }

    /**
     * Go back to Step 1
     */
    function goToStep1() {
        document.getElementById('popup-step-2').classList.add('hidden');
        document.getElementById('popup-step-1').classList.remove('hidden');
    }

    /**
     * Submit form
     */
    async function submitForm(event) {
        event.preventDefault();
        
        const firstName = document.getElementById('lead-first-name').value;
        const email = document.getElementById('lead-email').value;
        const path = selectedPath;
        const formId = CONFIG.kitFormIds[path];
        
        // Disable button and show loading state
        const submitBtn = document.getElementById('popup-submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        try {
            // Submit to Kit (ConvertKit) using their public form endpoint
            // This works from browser without CORS issues
            const formData = new FormData();
            formData.append('email_address', email);
            formData.append('first_name', firstName);
            
            const response = await fetch(`https://app.kit.com/forms/${formId}/subscriptions`, {
                method: 'POST',
                body: formData
            });
            
            if (!response.ok) {
                throw new Error('Subscription failed');
            }
            
            console.log('Lead Magnet Form Submitted:', { firstName, email, path, formId });
            
            // Track in Google Analytics
            if (typeof gtag === 'function') {
                gtag('event', 'lead_magnet_submit', {
                    'event_label': CONFIG.paths[path].toolkitName,
                    'path': path,
                    'source': 'index_popup'
                });
            }
            
            // Mark as submitted
            markFormSubmitted(path, email);
            
            // Update success message
            document.getElementById('submitted-email').textContent = email;
            
            // Show step 3
            document.getElementById('popup-step-2').classList.add('hidden');
            document.getElementById('popup-step-3').classList.remove('hidden');
            
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Something went wrong. Please try again.');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }

    /**
     * Submit to Kit (ConvertKit) - handled in submitForm now
     */

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose public API
    window.LeadMagnetPopup = {
        show: show,
        close: close,
        selectPath: selectPath,
        goToStep1: goToStep1,
        submitForm: submitForm,
        // Dev helpers
        reset: function() {
            localStorage.removeItem(CONFIG.storageKey);
            console.log('Lead magnet popup state reset');
        },
        forceShow: function() {
            show();
        }
    };

})();
