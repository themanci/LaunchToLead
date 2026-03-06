/**
 * PDF Generator for Lead Magnets
 * 
 * Prerequisites:
 *   npm install puppeteer pdf-lib
 * 
 * Usage:
 *   node generate-pdfs.js                    # Generate all PDFs (standalone + LinkedIn variants)
 *   node generate-pdfs.js impact-equation    # Generate specific guide only
 *   node generate-pdfs.js linkedin           # Generate only the 6 LinkedIn variant PDFs
 */

const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const path = require('path');
const fs = require('fs');

// ── Standalone lead magnets ──────────────────────────────────────────
const leadMagnets = [
    {
        name: 'impact-equation',
        html: 'active/impact-equation-quick-start-v4.html',
        pdf: 'Impact-Bullet-Builder.pdf'
    }
];

// ── LinkedIn Document Ad variants ────────────────────────────────────
// Each gets the variant cover (1 page) + main guide pages 2–15
const linkedInVariants = [
    { cover: 'cover-classmates-landing-jobs.html', slug: 'classmates-landing-jobs' },
    { cover: 'cover-closer-to-graduation.html',    slug: 'closer-to-graduation' },
    { cover: 'cover-fix-your-resume.html',          slug: 'fix-your-resume' },
    { cover: 'cover-hail-mary.html',                slug: 'hail-mary' },
    { cover: 'cover-resume-is-the-problem.html',    slug: 'resume-is-the-problem' },
    { cover: 'cover-try-this.html',                  slug: 'try-this' },
];

// ── Helpers ──────────────────────────────────────────────────────────

function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

async function htmlToPdfBuffer(browser, htmlFile) {
    const page = await browser.newPage();
    const htmlPath = path.resolve(__dirname, htmlFile);
    await page.goto(`file://${htmlPath}`, {
        waitUntil: 'networkidle0',
        timeout: 60000
    });
    // Wait for Tailwind CSS CDN + fonts to load
    await new Promise(r => setTimeout(r, 3000));
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
    const variantsDir = path.resolve(__dirname, 'active/linkedin-ads-variants');
    const outDir = path.resolve(__dirname, 'pdfs/linkedin-variants');
    ensureDir(outDir);

    // 1. Render main guide once and grab pages 2–15
    console.log('  ⏳ Rendering main guide...');
    const mainBuffer = await htmlToPdfBuffer(browser, 'active/impact-equation-quick-start-v4.html');
    const mainDoc = await PDFDocument.load(mainBuffer);
    const mainPageCount = mainDoc.getPageCount();
    console.log(`     Main guide: ${mainPageCount} pages`);

    // 2. For each variant, render its cover and merge
    for (const variant of linkedInVariants) {
        const coverHtml = path.join('active/linkedin-ads-variants', variant.cover);
        console.log(`  ⏳ ${variant.slug}...`);

        // Render cover page
        const coverBuffer = await htmlToPdfBuffer(browser, coverHtml);

        // Create merged PDF: cover page + main pages 2-end (skip main's cover)
        const mergedDoc = await PDFDocument.create();

        // Copy cover page(s)
        const coverDoc = await PDFDocument.load(coverBuffer);
        const coverPages = await mergedDoc.copyPages(coverDoc, coverDoc.getPageIndices());
        coverPages.forEach(p => mergedDoc.addPage(p));

        // Copy main pages 2–15 (indices 1 through end)
        const mainPageIndices = Array.from({ length: mainPageCount - 1 }, (_, i) => i + 1);
        const mainPages = await mergedDoc.copyPages(mainDoc, mainPageIndices);
        mainPages.forEach(p => mergedDoc.addPage(p));

        // Save
        const mergedBytes = await mergedDoc.save();
        const outPath = path.join(outDir, `Impact-Bullet-Builder-${variant.slug}.pdf`);
        fs.writeFileSync(outPath, mergedBytes);
        console.log(`  ✅ Impact-Bullet-Builder-${variant.slug}.pdf (${mergedDoc.getPageCount()} pages)`);
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
        const doStandalone = !arg || (arg && arg !== 'linkedin');

        // Standalone guides
        if (doStandalone) {
            let toGenerate = leadMagnets;
            if (arg && arg !== 'linkedin') {
                toGenerate = leadMagnets.filter(lm => lm.name.includes(arg));
                if (toGenerate.length === 0) {
                    console.log(`❌ No guide found matching: ${arg}`);
                    console.log('Available:', leadMagnets.map(lm => lm.name).join(', '), '+ linkedin');
                    process.exit(1);
                }
            }
            console.log('📄 Standalone guides:');
            for (const lm of toGenerate) {
                await generateStandalone(browser, lm);
            }
            console.log('');
        }

        // LinkedIn variants
        if (doLinkedIn) {
            console.log('📱 LinkedIn Document Ad variants:');
            await generateLinkedInVariants(browser);
            console.log('');
        }
    } finally {
        await browser.close();
    }

    console.log('✨ Done!');
}

main();
