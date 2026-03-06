/**
 * Landing Page A/B/C/D Variant System
 * Swaps above-the-fold content based on audience segment.
 *
 * Selection priority:
 *   1. ?variant=v2 URL param (testing/preview)
 *   2. Returning visitor (localStorage — locked to first assignment)
 *   3. utm_content mapping from LinkedIn ads (50/50 counter split: V1 vs audience variant)
 *   4. Default: v1 (control — no DOM changes)
 *
 * 50/50 Split Logic:
 *   Each audience segment has its own counter in localStorage.
 *   Odd count → V1 (control), Even count → audience variant.
 *   This guarantees a perfect 50/50 split at every even number of visitors,
 *   which is critical at low traffic volumes (<50/week).
 */
(function () {
    'use strict';

    var VARIANTS = {
        v1: {
            id: 'v1-control',
            moveFormUp: false,
            hasFirstName: true,
            formPrompt: null,
            headline: 'Get Your Free Resume Guide<br class="md:hidden"/>...in Under 30 Seconds.',
            sub: 'The formula engineers have used to land offers at Google, SpaceX, Ford, John Deere and GE.',
            ctaText: 'Get Your Free Guide',
            topSubtext: '14-page PDF. Delivered to your inbox instantly. No spam.',
            bottomSubtext: 'Delivered to your inbox instantly. No spam.'
        },
        v2: {
            id: 'v2-graduating-soon',
            moveFormUp: true,
            hasFirstName: false,
            formPrompt: 'Where should I send it?',
            headline: 'Resume Guide for<br class="md:hidden"/> Engineering Students',
            sub: 'Show the impact of your classwork, projects, and internships to hiring teams.',
            ctaText: 'Submit',
            topSubtext: '14-page PDF. Scroll down to see what\'s inside.',
            bottomSubtext: '14-page PDF. Scroll down to see what\'s inside.'
        },
        v3: {
            id: 'v3-early-engineers',
            moveFormUp: true,
            hasFirstName: false,
            formPrompt: 'Where should I send it?',
            headline: 'Resume Guide for<br class="md:hidden"/> Early-Career Engineers',
            sub: 'Show the impact and value of your engineering experiences to hiring teams.',
            ctaText: 'Submit',
            topSubtext: '14-page PDF. Scroll down to see what\'s inside.',
            bottomSubtext: '14-page PDF. Scroll down to see what\'s inside.'
        },
        v4: {
            id: 'v4-recently-graduated',
            moveFormUp: true,
            hasFirstName: false,
            formPrompt: 'Where should I send it?',
            headline: 'Resume Guide for Recent<br/> Engineering Graduates',
            sub: 'Show the impact of your classwork, projects, and internships to hiring teams.',
            ctaText: 'Submit',
            topSubtext: '14-page PDF. Scroll down to see what\'s inside.',
            bottomSubtext: '14-page PDF. Scroll down to see what\'s inside.'
        }
    };

    // utm_content substring → audience variant key
    var UTM_MAP = {
        'graduating-soon': 'v2',
        'early-engineers': 'v3',
        'recently-graduated': 'v4'
    };

    function pickVariant() {
        var params = new URLSearchParams(window.location.search);

        // 1. Explicit override (?variant=v2) — for testing/preview only
        var override = params.get('variant');
        if (override && VARIANTS[override]) return override;

        // 2. Returning visitor — already assigned, lock them in
        try {
            var stored = localStorage.getItem('ltl_variant');
            if (stored && VARIANTS[stored]) return stored;
        } catch (e) {}

        // 3. utm_content from LinkedIn ads → 50/50 counter split
        var utmContent = params.get('utm_content') || '';
        if (utmContent) {
            for (var pattern in UTM_MAP) {
                if (utmContent.indexOf(pattern) !== -1) {
                    var audienceVariant = UTM_MAP[pattern];
                    // Counter-based 50/50: odd visitors → v1, even → audience variant
                    var counterKey = 'ltl_counter_' + pattern;
                    var count = 0;
                    try { count = parseInt(localStorage.getItem(counterKey) || '0', 10); } catch (e) {}
                    count++;
                    try { localStorage.setItem(counterKey, String(count)); } catch (e) {}
                    return (count % 2 === 1) ? 'v1' : audienceVariant;
                }
            }
        }

        // 4. Default (no utm_content, no stored variant)
        return 'v1';
    }

    function applyVariant(key) {
        var v = VARIANTS[key];
        if (!v) return;

        // Persist for return visits
        try { localStorage.setItem('ltl_variant', key); } catch (e) {}

        // Expose variant ID globally for form handler
        window.__ltlVariantId = v.id;

        // V1 is the default HTML — no DOM changes needed
        if (key === 'v1') return;

        // --- Text swaps ---
        var h1 = document.getElementById('variant-h1');
        if (h1) h1.innerHTML = v.headline;

        var sub = document.getElementById('variant-sub');
        if (sub) sub.innerHTML = v.sub;

        // CTA buttons
        var ctas = document.querySelectorAll('.variant-cta');
        for (var i = 0; i < ctas.length; i++) ctas[i].textContent = v.ctaText;

        // Subtext
        var topSub = document.getElementById('top-form-subtext');
        if (topSub) topSub.textContent = v.topSubtext;

        var bottomSub = document.getElementById('bottom-form-subtext');
        if (bottomSub) bottomSub.textContent = v.bottomSubtext;

        // --- Move form before headline ---
        if (v.moveFormUp) {
            var formSection = document.getElementById('section-top-form');
            var headlineSection = document.getElementById('section-headline');
            if (formSection && headlineSection) {
                headlineSection.parentNode.insertBefore(formSection, headlineSection);
            }
        }

        // --- Inject form prompt ---
        if (v.formPrompt) {
            var formCard = document.querySelector('#section-top-form .border');
            if (formCard) {
                var prompt = document.createElement('p');
                prompt.className = 'text-center text-sm text-slate-600 mb-2';
                prompt.textContent = v.formPrompt;
                formCard.insertBefore(prompt, formCard.firstChild);
            }
        }

        // --- Remove first name fields ---
        if (!v.hasFirstName) {
            // Top form: remove firstName + label wrapper, unwrap email from grid
            var topForm = document.getElementById('lead-form');
            if (topForm) {
                var grid = topForm.querySelector('.grid');
                if (grid) {
                    var emailInput = grid.querySelector('input[type="email"]');
                    if (emailInput) {
                        emailInput.className = 'w-full px-3 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition';
                        grid.parentNode.insertBefore(emailInput, grid);
                        grid.remove();
                    }
                }
            }

            // Bottom form: same treatment
            var bottomForm = document.getElementById('lead-form-bottom');
            if (bottomForm) {
                var grid2 = bottomForm.querySelector('.grid');
                if (grid2) {
                    var emailInput2 = grid2.querySelector('input[type="email"]');
                    if (emailInput2) {
                        emailInput2.className = 'w-full px-3 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition';
                        grid2.parentNode.insertBefore(emailInput2, grid2);
                        grid2.remove();
                    }
                }
            }
        }
    }

    // Execute
    var key = pickVariant();
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { applyVariant(key); });
    } else {
        applyVariant(key);
    }
})();
