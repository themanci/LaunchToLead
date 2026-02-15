import React from 'react'
import { domToPng } from 'modern-screenshot'

export default function ExportButton({ filename }) {
  const handleExport = async () => {
    const el = document.getElementById('ad-canvas')
    if (!el) return

    const dataUrl = await domToPng(el, {
      scale: 2,
      width: 1080,
      height: 1080,
    })

    const link = document.createElement('a')
    link.download = `${filename}.png`
    link.href = dataUrl
    link.click()
  }

  return (
    <button
      onClick={handleExport}
      style={{
        padding: '14px 32px',
        borderRadius: '12px',
        border: '2px solid #a3e635',
        background: 'linear-gradient(135deg, #064e3b, #065f46)',
        color: '#fff',
        fontSize: '16px',
        fontWeight: 700,
        cursor: 'pointer',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 0 24px rgba(163, 230, 53, 0.3)' }}
      onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none' }}
    >
      ⬇ Export as PNG
    </button>
  )
}
