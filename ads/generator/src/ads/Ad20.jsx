import React from 'react'

/*
  Ad 20 — Status + Wasted Degree
  Callout: "50+ engineering apps, zero offers?"
  
  Design: Dark premium with deep red/maroon for wasted investment.
  Degree cost breakdown, then the punch — "sitting in a drawer."
  Green gradient for the action/solution.
*/

const styles = {
  container: {
    width: 1080,
    height: 1080,
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },

  bgBase: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(155deg, #0d0d1f 0%, #1a0a0f 35%, #0f1218 65%, #0d0d1f 100%)',
    zIndex: 0,
  },

  bgGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    zIndex: 1,
  },

  // Deep red glow (wasted investment)
  glowRed: {
    position: 'absolute',
    top: '-10%',
    right: '-5%',
    width: '55%',
    height: '50%',
    background: 'radial-gradient(circle, rgba(220, 38, 38, 0.08) 0%, transparent 60%)',
    filter: 'blur(50px)',
    zIndex: 1,
  },

  // Purple glow left (status/degree)
  glowPurple: {
    position: 'absolute',
    top: '15%',
    left: '-5%',
    width: '40%',
    height: '40%',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 60%)',
    filter: 'blur(40px)',
    zIndex: 1,
  },

  // Green glow bottom (solution)
  glowGreen: {
    position: 'absolute',
    bottom: '-8%',
    left: '15%',
    width: '55%',
    height: '35%',
    background: 'radial-gradient(circle, rgba(163, 230, 53, 0.07) 0%, transparent 60%)',
    filter: 'blur(50px)',
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '28px',
    height: '100%',
    padding: '40px 52px',
    boxSizing: 'border-box',
  },

  // Callout pill
  callout: {
    background: 'rgba(248, 113, 113, 0.10)',
    border: '1px solid rgba(248, 113, 113, 0.20)',
    borderRadius: '100px',
    padding: '14px 42px',
    fontSize: '52px',
    fontWeight: 700,
    color: '#fca5a5',
    letterSpacing: '-0.3px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },

  // Degree cost header
  costHeader: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#cbd5e1',
    textAlign: 'center',
    letterSpacing: '-0.5px',
  },

  // Cost breakdown
  costContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
    maxWidth: '780px',
  },
  costRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    background: 'rgba(139, 92, 246, 0.05)',
    border: '1px solid rgba(139, 92, 246, 0.10)',
    borderRadius: '14px',
    padding: '14px 32px',
  },
  costDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#a78bfa',
    boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
    flexShrink: 0,
  },
  costText: {
    fontSize: '32px',
    fontWeight: 600,
    color: '#e2e8f0',
    letterSpacing: '-0.3px',
  },

  // "Sitting in a drawer" punch
  punchContainer: {
    textAlign: 'center',
  },
  punchIntro: {
    fontSize: '32px',
    fontWeight: 600,
    color: '#94a3b8',
    lineHeight: 1.3,
  },
  punchBig: {
    fontSize: '58px',
    fontWeight: 900,
    fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
    background: 'linear-gradient(135deg, #f87171 0%, #ef4444 50%, #dc2626 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1.1,
    letterSpacing: '-2px',
    filter: 'drop-shadow(0 0 25px rgba(248, 113, 113, 0.3))',
  },

  // Action
  actionContainer: {
    textAlign: 'center',
  },
  actionLine: {
    fontSize: '44px',
    fontWeight: 800,
    color: '#e2e8f0',
    letterSpacing: '-1px',
    lineHeight: 1.2,
  },
  actionGreen: {
    fontSize: '44px',
    fontWeight: 800,
    letterSpacing: '-1px',
    lineHeight: 1.2,
    background: 'linear-gradient(135deg, #a3e635 0%, #4ade80 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  // CTA
  ctaContainer: {
    textAlign: 'center',
  },
  ctaText: {
    fontSize: '40px',
    fontWeight: 700,
    color: '#ffffff',
    letterSpacing: '-0.3px',
  },
  ctaHighlight: {
    color: '#a3e635',
    fontWeight: 800,
  },
  ctaBrand: {
    fontSize: '18px',
    fontWeight: 500,
    color: '#64748b',
    marginTop: '4px',
    letterSpacing: '1px',
  },
  ctaBrandAccent: {
    color: '#14b8a6',
    fontWeight: 600,
  },
}

export default function Ad20() {
  return (
    <div style={styles.container}>
      {/* Background layers */}
      <div style={styles.bgBase} />
      <div style={styles.bgGrid} />
      <div style={styles.glowRed} />
      <div style={styles.glowPurple} />
      <div style={styles.glowGreen} />

      {/* Content */}
      <div style={styles.content}>
        {/* Callout pill */}
        <div style={styles.callout}>
          50+ engineering apps, zero offers?
        </div>

        {/* Degree cost header */}
        <div style={styles.costHeader}>Your engineering degree cost:</div>

        {/* Cost breakdown */}
        <div style={styles.costContainer}>
          <div style={styles.costRow}>
            <div style={styles.costDot} />
            <span style={styles.costText}>4+ years of your life</span>
          </div>
          <div style={styles.costRow}>
            <div style={styles.costDot} />
            <span style={styles.costText}>$50K – $200K in tuition</span>
          </div>
          <div style={styles.costRow}>
            <div style={styles.costDot} />
            <span style={styles.costText}>Countless all-nighters</span>
          </div>
        </div>

        {/* Punch */}
        <div style={styles.punchContainer}>
          <div style={styles.punchIntro}>And right now? It's</div>
          <div style={styles.punchBig}>SITTING IN A DRAWER</div>
        </div>

        {/* Action */}
        <div style={styles.actionContainer}>
          <div style={styles.actionLine}>Your resume is the problem.</div>
          <div style={styles.actionGreen}>Fix it for free.</div>
        </div>

        {/* CTA */}
        <div style={styles.ctaContainer}>
          <div style={styles.ctaText}>
            Free <span style={styles.ctaHighlight}>Impact Bullet Builder</span> Guide
          </div>
          <div style={styles.ctaBrand}>
            Launch<span style={styles.ctaBrandAccent}>ToLead</span>
          </div>
        </div>
      </div>
    </div>
  )
}
