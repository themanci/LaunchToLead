# HTML-to-PDF Export Protocol

**Never use CSS `@media print` for carousel/slide PDFs.** Chrome's print engine does not reliably handle square pages, custom `@page` sizes, or absolute-positioned footers. After multiple failed attempts, the only reliable method is JavaScript-based screenshot export.

---

## Method: html2canvas + jsPDF

### Required CDN Scripts
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
```

### Required Button
```html
<button id="download-btn" onclick="exportPDF()">Download PDF</button>
```

Style it with the brand gradient:
```css
#download-btn {
    position: fixed; top: 20px; right: 20px; z-index: 9999;
    background: linear-gradient(135deg, #a3e635, #14b8a6); color: #052e16;
    font-family: 'Plus Jakarta Sans', sans-serif; font-size: 18px; font-weight: 800;
    padding: 16px 36px; border: none; border-radius: 50px; cursor: pointer;
    box-shadow: 0 8px 30px rgba(163,230,53,0.3);
    transition: transform 0.2s, box-shadow 0.2s;
}
#download-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(163,230,53,0.4); }
#download-btn:disabled { opacity: 0.5; cursor: wait; }
@media print { #download-btn { display: none; } }
```

### Export Script (copy exactly)
```html
<script>
async function exportPDF() {
    const btn = document.getElementById('download-btn');
    btn.disabled = true;
    btn.textContent = 'Generating PDF...';

    const slides = document.querySelectorAll('.slide');
    const { jsPDF } = window.jspdf;

    // Square pages for 1080x1080 slides
    const pageSizeMM = 270; // ~10.6 inches
    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [pageSizeMM, pageSizeMM]
    });

    for (let i = 0; i < slides.length; i++) {
        if (i > 0) pdf.addPage([pageSizeMM, pageSizeMM]);

        btn.textContent = `Capturing slide ${i + 1} of ${slides.length}...`;

        const canvas = await html2canvas(slides[i], {
            width: 1080,
            height: 1080,
            scale: 1, // 1x keeps PDF under 100MB for LinkedIn
            useCORS: true,
            backgroundColor: null,
            logging: false
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.92);
        pdf.addImage(imgData, 'JPEG', 0, 0, pageSizeMM, pageSizeMM);
    }

    pdf.save('filename.pdf');

    btn.disabled = false;
    btn.textContent = 'Download PDF';
}
</script>
```

---

## Slide CSS Rules (unchanged)

Keep slides at fixed pixel dimensions with `overflow: hidden`. The footer (`.bottom-bar`) must be `position: absolute; bottom: 0` inside the slide so html2canvas captures it within the 1080x1080 box.

```css
.slide { width: 1080px; height: 1080px; position: relative; overflow: hidden; }
.gc { position: relative; height: 100%; display: flex; flex-direction: column; padding: 50px; padding-bottom: 80px; }
.bottom-bar { position: absolute; bottom: 0; left: 0; right: 0; }
```

The `padding-bottom: 80px` on `.gc` prevents content from hiding behind the absolute-positioned footer.

---

## Checklist for Every Carousel HTML

1. Include html2canvas + jsPDF CDN scripts in `<head>`
2. Add Download PDF button before first slide
3. Add `exportPDF()` script before `</body>`
4. Slides use `.slide` class with fixed `width` and `height`
5. Footer uses `position: absolute; bottom: 0` inside `.slide`
6. Content area (`.gc`) has `padding-bottom: 80px`
7. **Do NOT add any `@media print` CSS** — it's not needed and causes problems
8. Update `pdf.save('filename.pdf')` with the correct filename

---

## Why Not CSS Print?

| Approach | Result |
|---|---|
| `@page { size: 10in 10in }` | Chrome ignores custom page sizes, falls back to letter |
| `@media print` with `100vw/100vh` | Footer gets clipped or hidden |
| `position: absolute` footer in print | Chrome strips it during pagination |
| **html2canvas + jsPDF** | **Pixel-perfect every time** |
