/**
 * PDF Generator for Lead Magnets
 * 
 * Prerequisites:
 *   npm install puppeteer
 * 
 * Usage:
 *   node generate-pdfs.js                    # Generate all PDFs
 *   node generate-pdfs.js impact-equation    # Generate specific PDF
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const leadMagnets = [
    {
        name: 'impact-equation',
        html: 'impact-equation-quick-start.html',
        pdf: 'Impact-Equation-Launch-Guide.pdf'
    },
    {
        name: 'trojan-horse',
        html: 'trojan-horse-strategy.html',
        pdf: 'Trojan-Horse-Pivot-Guide.pdf'
    },
    {
        name: 'visibility-pyramid',
        html: 'visibility-pyramid-diagnostic.html',
        pdf: 'Visibility-Pyramid-Accelerate-Guide.pdf'
    }
];

async function generatePDF(htmlFile, pdfFile) {
    const browser = await puppeteer.launch({
        headless: 'new'
    });
    
    const page = await browser.newPage();
    
    // Load the HTML file
    const htmlPath = path.resolve(__dirname, htmlFile);
    await page.goto(`file://${htmlPath}`, {
        waitUntil: 'networkidle0',
        timeout: 60000
    });
    
    // Wait for Tailwind CSS to load from CDN
    await page.waitForTimeout(2000);
    
    // Generate PDF
    const pdfPath = path.resolve(__dirname, 'pdfs', pdfFile);
    
    // Ensure pdfs directory exists
    const pdfDir = path.dirname(pdfPath);
    if (!fs.existsSync(pdfDir)) {
        fs.mkdirSync(pdfDir, { recursive: true });
    }
    
    await page.pdf({
        path: pdfPath,
        format: 'Letter',
        printBackground: true,
        margin: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        },
        preferCSSPageSize: true
    });
    
    console.log(`✅ Generated: ${pdfFile}`);
    
    await browser.close();
}

async function main() {
    const specificGuide = process.argv[2];
    
    let toGenerate = leadMagnets;
    
    if (specificGuide) {
        toGenerate = leadMagnets.filter(lm => lm.name.includes(specificGuide));
        if (toGenerate.length === 0) {
            console.log(`❌ No guide found matching: ${specificGuide}`);
            console.log('Available guides:', leadMagnets.map(lm => lm.name).join(', '));
            process.exit(1);
        }
    }
    
    console.log('🚀 Generating PDFs...\n');
    
    for (const lm of toGenerate) {
        try {
            await generatePDF(lm.html, lm.pdf);
        } catch (error) {
            console.error(`❌ Failed to generate ${lm.pdf}:`, error.message);
        }
    }
    
    console.log('\n✨ Done!');
}

main();
