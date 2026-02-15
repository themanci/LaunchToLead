import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import Ad02 from './ads/Ad02'
import Ad07 from './ads/Ad07'
import Ad11 from './ads/Ad11'
import Ad19 from './ads/Ad19'
import Ad20 from './ads/Ad20'
import Ad26 from './ads/Ad26'
import Ad31 from './ads/Ad31'
import ExportButton from './ExportButton'

const ads = [
  { id: 'ad-02', label: 'Ad 02 — Financial Loss', component: Ad02 },
  { id: 'ad-07', label: 'Ad 07 — Market Urgency', component: Ad07 },
  { id: 'ad-11', label: 'Ad 11 — Comparison', component: Ad11 },
  { id: 'ad-19', label: 'Ad 19 — Frustration', component: Ad19 },
  { id: 'ad-20', label: 'Ad 20 — Wasted Degree', component: Ad20 },
  { id: 'ad-26', label: 'Ad 26 — Parents', component: Ad26 },
  { id: 'ad-31', label: 'Ad 31 — Grandparents', component: Ad31 },
]

function App() {
  const [active, setActive] = useState(0)
  const ActiveAd = ads[active].component

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', padding: '40px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Nav */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {ads.map((ad, i) => (
          <button
            key={ad.id}
            onClick={() => setActive(i)}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: i === active ? '2px solid #a3e635' : '2px solid #333',
              background: i === active ? '#064e3b' : '#1a1a2e',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {ad.label}
          </button>
        ))}
      </div>

      {/* Ad Canvas */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div id="ad-canvas" style={{ width: 1080, height: 1080, minWidth: 1080, minHeight: 1080, maxWidth: 1080, maxHeight: 1080, overflow: 'hidden', outline: '1px dashed rgba(255,255,255,0.1)' }}>
          <ActiveAd />
        </div>
        <ExportButton filename={ads[active].id} />
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
