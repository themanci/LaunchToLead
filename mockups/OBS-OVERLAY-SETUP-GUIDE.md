# OBS Video Overlay Setup Guide
## LaunchToLead Branding Overlay

---

## 📋 STEP-BY-STEP INSTRUCTIONS

### Step 1: Open OBS Studio
- Launch OBS Studio
- Make sure you're on the Scene you want to add the overlay to

### Step 2: Add Browser Source
1. In the **Sources** panel (bottom section), click the **+ button**
2. Select **"Browser"** from the list
3. Name it: `LaunchToLead Overlay`
4. Click **OK**

### Step 3: Configure Browser Source
In the properties window that opens:

**Local File:**
- ✅ Check "Local file"
- Click **Browse**
- Navigate to: `C:\Coding\coachingBusiness\launch-to-lead\mockups\video-overlay-obs-ready.html`
- Select the file

**Width & Height:**
- Width: `1920`
- Height: `1080`

**FPS:**
- Custom FPS: `30` (or match your video framerate)

**CSS (Leave empty - already styled)**

**Checkboxes to ENABLE:**
- ✅ **Shutdown source when not visible** (saves resources)
- ✅ **Refresh browser when scene becomes active** (ensures it loads fresh)

**Checkboxes to DISABLE:**
- ❌ Control audio via OBS (we don't need audio from this)

### Step 4: Position the Overlay
1. Click **OK** to add the source
2. In the preview window, the overlay should appear
3. **Right-click** the source in the Sources list
4. Select **Transform** → **Fit to screen** (if needed)
5. The overlay should be exactly 1920x1080 and fill your canvas

### Step 5: Layer Order (IMPORTANT!)
- Make sure the overlay is **ABOVE** your video source in the Sources list
- If it's below, click and drag it above your webcam/video source
- Order should be (top to bottom):
  1. LaunchToLead Overlay (on top)
  2. Your webcam/video
  3. Any background

---

## 💾 SAVING AS PNG (One-Time Setup)

Once you have it displaying correctly in OBS:

### Method 1: OBS Screenshot Feature
1. Right-click the **LaunchToLead Overlay** source in Sources panel
2. Select **"Screenshot (Source)"**
3. Save as: `launchtolead-overlay.png`
4. This PNG now has transparency and can be used anywhere!

### Method 2: Record a Frame
1. Set up the overlay as described above
2. Start recording (just 1 second is fine)
3. Stop recording
4. Open the video in a video editor
5. Export a single frame as PNG with alpha channel

---

## 🎨 CUSTOMIZATION TIPS

### To Change Colors:
1. Right-click the source → **Properties**
2. Add Custom CSS:
```css
/* Change green to blue */
.top-left-overlay,
.top-right-overlay,
.bottom-social-bar {
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.95), rgba(29, 78, 216, 0.95)) !important;
}

/* Change lime accent to orange */
.tolead {
    color: #fb923c !important;
}
```

### To Hide Elements:
```css
/* Hide social media bar */
.bottom-social-bar {
    display: none !important;
}

/* Hide top right contact */
.top-right-overlay {
    display: none !important;
}
```

---

## ⚡ PERFORMANCE TIPS

**If the overlay looks blurry:**
- Right-click source → **Scale Filtering** → **Bicubic**

**If OBS is laggy:**
- Check "Shutdown source when not visible" in Browser Source properties
- Lower FPS to 15-20 (overlay is static, doesn't need 60fps)

**If overlay doesn't load:**
- Click "Refresh cache of current page" button in Browser Source properties
- Make sure file path is correct (use absolute path, not relative)

---

## 🎬 USING THE OVERLAY IN VIDEOS

### Live Streaming:
- Just add the browser source and you're done!
- It will always be visible on stream

### Video Recording:
- Add to your recording scene
- Position your webcam/content behind it
- Record as normal - overlay bakes into video

### Video Editing (After Recording):
1. Use the PNG version (from Screenshot method above)
2. Import PNG into your video editor (Premiere, DaVinci, etc.)
3. Place on top layer
4. The transparency will show your video underneath

---

## 📐 FILE SPECS

- **Resolution:** 1920 x 1080 (Full HD)
- **Format:** HTML (transparent background)
- **PNG Export:** RGBA (with alpha channel)
- **File Location:** `C:\Coding\coachingBusiness\launch-to-lead\mockups\video-overlay-obs-ready.html`

---

## 🔧 TROUBLESHOOTING

**Problem: Overlay doesn't show**
- ✅ Check "Local file" is checked
- ✅ Verify file path is correct
- ✅ Click "Refresh cache" button
- ✅ Restart OBS

**Problem: Overlay is behind video**
- ✅ Drag overlay source ABOVE video in Sources list

**Problem: Colors look washed out**
- ✅ Right-click canvas → View → **Fullscreen Projector (Preview)**
- Colors should look correct in actual output

**Problem: Can't save as PNG with transparency**
- ✅ Use Screenshot (Source) method
- ✅ Make sure PNG format is selected
- ✅ Open in image editor to verify alpha channel exists

---

## ✅ QUICK CHECKLIST

Before going live/recording:
- [ ] Overlay source is above video in layers
- [ ] All text is readable (not cut off)
- [ ] Social icons are visible
- [ ] Contact info is correct
- [ ] Overlay doesn't block important content
- [ ] Test with different video backgrounds to ensure visibility

---

## 📞 NEED CHANGES?

Edit the HTML file at:
`C:\Coding\coachingBusiness\launch-to-lead\mockups\video-overlay-obs-ready.html`

Then in OBS:
- Right-click source → **Properties**
- Click **"Refresh cache of current page"** button

Changes will appear instantly!

---

**Last Updated:** December 16, 2025
**Version:** OBS Ready 1.0
