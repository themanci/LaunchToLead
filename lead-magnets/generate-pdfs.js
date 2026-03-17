/**
 * PDF Generator for Lead Magnets
 * 
 * Prerequisites:
 *   npm install puppeteer pdf-lib
 * 
 * Usage:
 *   node generate-pdfs.js                    # Generate all PDFs (standalone + all LinkedIn variants)
 *   node generate-pdfs.js impact-equation    # Generate specific guide only
 *   node generate-pdfs.js linkedin           # Generate only the original 3 LinkedIn variant PDFs
 *   node generate-pdfs.js doc-v2             # Generate only the 15 Document Ad V2 variant PDFs
 */

const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const path = require('path');
const fs = require('fs');

// ── Standalone lead magnets ──────────────────────────────────────────
const leadMagnets = [
    {
        name: 'impact-equation',
        html: 'active/impact-bullet-builder.html',
        pdf: 'Impact-Bullet-Builder.pdf'
    }
];

// ── LinkedIn Document Ad variants (original) ────────────────────────
// Each gets the variant cover (1 page) + main guide pages (with per-ad tracking links)
const linkedInVariants = [
    { cover: 'cover-closer-to-graduation.html',    slug: 'closer-to-graduation',    audience: 'graduating-soon' },
    { cover: 'cover-resume-is-the-problem.html',    slug: 'resume-is-the-problem',   audience: 'recently-graduated' },
    { cover: 'cover-try-this.html',                  slug: 'try-this',                audience: 'early-engineers' },
];

// ── Document Ad V2 variants (15 callout-test ads) ────────────────────
// Campaign: "2026 Q1 Leads (Document V2)" — testing 15 callouts, constant body copy
const docV2Variants = [
    // Graduating Soon (5)
    { cover: 'cover-gradsoon-1.html', slug: 'gradsoon-1', adName: 'DocAd_GradSoon1_13Mar2026' },
    { cover: 'cover-gradsoon-2.html', slug: 'gradsoon-2', adName: 'DocAd_GradSoon2_13Mar2026' },
    { cover: 'cover-gradsoon-3.html', slug: 'gradsoon-3', adName: 'DocAd_GradSoon3_13Mar2026' },
    { cover: 'cover-gradsoon-4.html', slug: 'gradsoon-4', adName: 'DocAd_GradSoon4_13Mar2026' },
    { cover: 'cover-gradsoon-5.html', slug: 'gradsoon-5', adName: 'DocAd_GradSoon5_13Mar2026' },
    // Recent Graduates (5)
    { cover: 'cover-recentgrad-1.html', slug: 'recentgrad-1', adName: 'DocAd_RecentGrad1_13Mar2026' },
    { cover: 'cover-recentgrad-2.html', slug: 'recentgrad-2', adName: 'DocAd_RecentGrad2_13Mar2026' },
    { cover: 'cover-recentgrad-3.html', slug: 'recentgrad-3', adName: 'DocAd_RecentGrad3_13Mar2026' },
    { cover: 'cover-recentgrad-4.html', slug: 'recentgrad-4', adName: 'DocAd_RecentGrad4_13Mar2026' },
    { cover: 'cover-recentgrad-5.html', slug: 'recentgrad-5', adName: 'DocAd_RecentGrad5_13Mar2026' },
    // Early Engineers (5)
    { cover: 'cover-earlyeng-1.html', slug: 'earlyeng-1', adName: 'DocAd_EarlyEng1_13Mar2026' },
    { cover: 'cover-earlyeng-2.html', slug: 'earlyeng-2', adName: 'DocAd_EarlyEng2_13Mar2026' },
    { cover: 'cover-earlyeng-3.html', slug: 'earlyeng-3', adName: 'DocAd_EarlyEng3_13Mar2026' },
    { cover: 'cover-earlyeng-4.html', slug: 'earlyeng-4', adName: 'DocAd_EarlyEng4_13Mar2026' },
    { cover: 'cover-earlyeng-5.html', slug: 'earlyeng-5', adName: 'DocAd_EarlyEng5_13Mar2026' },
];

// ── Helpers ──────────────────────────────────────────────────────────

function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

async function htmlToPdfBuffer(browser, htmlFile, linkOverrides) {
    const page = await browser.newPage();
    const htmlPath = path.resolve(__dirname, htmlFile);
    await page.goto(`file://${htmlPath}`, {
        waitUntil: 'networkidle0',
        timeout: 60000
    });
    // Wait for Tailwind CSS CDN + fonts to load
    await new Promise(r => setTimeout(r, 3000));

    // Inject per-variant tracking links into the last page
    if (linkOverrides) {
        await page.evaluate(({ auditMailto, offerUrl }) => {
            const auditLink = document.getElementById('audit-link');
            if (auditLink) auditLink.href = auditMailto;
            const offerLink = document.getElementById('offer-link');
            if (offerLink) offerLink.href = offerUrl;
        }, linkOverrides);
    }

    const buffer = await page.pdf({
        format: 'Letter',
        printBackground: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' },
        preferCSSPageSize: true
    });
    await page.close();
    return buffer;
}

async function htmlToPdfFile(browser, htmlFile, pdfPath) {
    const buffer = await htmlToPdfBuffer(browser, htmlFile);
    fs.writeFileSync(pdfPath, buffer);
    return buffer;
}

// ── Generate standalone PDF ──────────────────────────────────────────

async function generateStandalone(browser, lm) {
    const pdfPath = path.resolve(__dirname, 'pdfs', lm.pdf);
    ensureDir(path.dirname(pdfPath));
    await htmlToPdfFile(browser, lm.html, pdfPath);
    console.log(`  ✅ ${lm.pdf}`);
}

// ── Generate LinkedIn variant PDFs ───────────────────────────────────

async function generateLinkedInVariants(browser) {
    const outDir = path.resolve(__dirname, 'pdfs/linkedin-variants');
    ensureDir(outDir);

    for (const variant of linkedInVariants) {
        const coverHtml = path.join('active/linkedin-ads-variants', variant.cover);
        console.log(`  ⏳ ${variant.slug}...`);

        // Build per-variant tracking links
        const auditSubject = encodeURIComponent(`Free Resume Audit [Source: ${variant.slug}]`);
        const auditBody = encodeURIComponent(
            `Hi Mansour,\n\nPlease audit my resume. I've attached it to this email.\n\nThanks!`
        );
        const auditMailto = `mailto:audit@launchtolead.io?subject=${auditSubject}&body=${auditBody}`;
        const offerUrl = `https://launchtolead.io/coaching?utm_source=pdf&utm_medium=lead-magnet&utm_campaign=resume-guide&utm_content=${variant.slug}`;

        // Render cover page
        const coverBuffer = await htmlToPdfBuffer(browser, coverHtml);

        // Render main guide with per-variant tracking links injected
        console.log(`     Rendering guide with ${variant.slug} tracking links...`);
        const mainBuffer = await htmlToPdfBuffer(browser, 'active/impact-bullet-builder.html', {
            auditMailto,
            offerUrl
        });
        const mainDoc = await PDFDocument.load(mainBuffer);

        // Create merged PDF: cover + all main guide pages
        const mergedDoc = await PDFDocument.create();

        const coverDoc = await PDFDocument.load(coverBuffer);
        const coverPages = await mergedDoc.copyPages(coverDoc, coverDoc.getPageIndices());
        coverPages.forEach(p => mergedDoc.addPage(p));

        const mainPages = await mergedDoc.copyPages(mainDoc, mainDoc.getPageIndices());
        mainPages.forEach(p => mergedDoc.addPage(p));

        const mergedBytes = await mergedDoc.save();
        const outPath = path.join(outDir, `Impact-Bullet-Builder-${variant.slug}.pdf`);
        fs.writeFileSync(outPath, mergedBytes);
        console.log(`  ✅ Impact-Bullet-Builder-${variant.slug}.pdf (${mergedDoc.getPageCount()} pages)`);
    }
}

// ── Generate Document Ad V2 variant PDFs (15 callout tests) ──────────
// Uses the pre-printed Impact-Bullet-Builder_V2.pdf as the base guide,
// prepends each cover page, and outputs to pdfs/linkedin-variants/

async function generateDocV2Variants(browser) {
    const outDir = path.resolve(__dirname, 'pdfs/linkedin-variants');
    ensureDir(outDir);

    // Load the pre-printed V2 guide once
    const basePdfPath = path.resolve(__dirname, 'pdfs/Impact-Bullet-Builder_V2.pdf');
    if (!fs.existsSync(basePdfPath)) {
        console.log(`  ❌ Base PDF not found: ${basePdfPath}`);
        console.log('     Print Impact-Bullet-Builder_V2.pdf first, then re-run.');
        return;
    }
    const basePdfBytes = fs.readFileSync(basePdfPath);
    console.log(`  📖 Loaded base guide: Impact-Bullet-Builder_V2.pdf`);

    for (const variant of docV2Variants) {
        const coverHtml = path.join('active/linkedin-ads-variants/doc-v2', variant.cover);
        console.log(`  ⏳ ${variant.slug}...`);

        // Render cover page from HTML
        const coverBuffer = await htmlToPdfBuffer(browser, coverHtml);

        // Merge: cover page + pre-printed V2 guide
        const mergedDoc = await PDFDocument.create();

        const coverDoc = await PDFDocument.load(coverBuffer);
        const coverPages = await mergedDoc.copyPages(coverDoc, coverDoc.getPageIndices());
        coverPages.forEach(p => mergedDoc.addPage(p));

        const baseDoc = await PDFDocument.load(basePdfBytes);
        const basePages = await mergedDoc.copyPages(baseDoc, baseDoc.getPageIndices());
        basePages.forEach(p => mergedDoc.addPage(p));

        const mergedBytes = await mergedDoc.save();
        const outPath = path.join(outDir, `IBB-${variant.slug}.pdf`);
        fs.writeFileSync(outPath, mergedBytes);
        console.log(`  ✅ IBB-${variant.slug}.pdf (${mergedDoc.getPageCount()} pages)`);
    }
}

// ── Main ─────────────────────────────────────────────────────────────

async function main() {
    const arg = process.argv[2];
    
    console.log('🚀 Generating PDFs...\n');

    const browser = await puppeteer.launch({ headless: 'new' });

    try {
        // Determine what to generate
        const doLinkedIn = !arg || arg === 'linkedin';
        const doDocV2 = !arg || arg === 'doc-v2';
        const doStandalone = !arg || (arg && arg !== 'linkedin' && arg !== 'doc-v2');

        // Standalone guides
        if (doStandalone) {
            let toGenerate = leadMagnets;
            if (arg && arg !== 'linkedin' && arg !== 'doc-v2') {
                toGenerate = leadMagnets.filter(lm => lm.name.includes(arg));
                if (toGenerate.length === 0) {
                    console.log(`❌ No guide found matching: ${arg}`);
                    console.log('Available:', leadMagnets.map(lm => lm.name).join(', '), '+ linkedin + doc-v2');
                    process.exit(1);
                }
            }
            console.log('📄 Standalone guides:');
            for (const lm of toGenerate) {
                await generateStandalone(browser, lm);
            }
            console.log('');
        }

        // LinkedIn variants (original)
        if (doLinkedIn) {
            console.log('📱 LinkedIn Document Ad variants (original):');
            await generateLinkedInVariants(browser);
            console.log('');
        }

        // Document Ad V2 variants (15 callout tests)
        if (doDocV2) {
            console.log('📱 Document Ad V2 variants (15 callout tests):');
            await generateDocV2Variants(browser);
            console.log('');
        }
    } finally {
        await browser.close();
    }

    console.log('✨ Done!');
}

main();
