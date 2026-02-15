import React from 'react'

/*
  Ad 19 — Effort + Frustration
  Callout: "50+ engineering apps, zero offers?"
  
  Design: Dark premium with muted blue/grey exhaustion palette.
  Cycle of frustration as visual center, red for pain.
  Green gradient for the relief / solution.
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
    background: 'linear-gradient(155deg, #0d0d1f 0%, #0f1520 35%, #111118 65%, #0d0d1f 100%)',
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

  // Muted blue glow (exhaustion)
  glowBlue: {
    position: 'absolute',
    top: '-10%',
    left: '10%',
    width: '50%',
    height: '50%',
    background: 'radial-gradient(circle, rgba(100, 116, 139, 0.10) 0%, transparent 60%)',
    filter: 'blur(50px)',
    zIndex: 1,
  },

  // Red glow center-right (pain/frustration)
  glowRed: {
    position: 'absolute',
    top: '20%',
    right: '-5%',
    width: '45%',
    height: '45%',
    background: 'radial-gradient(circle, rgba(248, 113, 113, 0.08) 0%, transparent 60%)',
    filter: 'blur(40px)',
    zIndex: 1,
  },

  // Green glow bottom (relief)
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
    gap: '34px',
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
    fontSize: '56px',
    fontWeight: 700,
    color: '#fca5a5',
    letterSpacing: '-0.3px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },

  // "This is exhausting" big text
  exhaustedContainer: {
    textAlign: 'center',
  },
  exhaustedText: {
    fontSize: '72px',
    fontWeight: 900,
    fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
    color: '#e2e8f0',
    lineHeight: 1.1,
    letterSpacing: '-2px',
  },

  // Cycle list
  cycleContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
    maxWidth: '780px',
  },
  cycleRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    background: 'rgba(100, 116, 139, 0.06)',
    border: '1px solid rgba(100, 116, 139, 0.10)',
    borderRadius: '14px',
    padding: '16px 36px',
  },
  cycleArrow: {
    fontSize: '26px',
    color: '#475569',
    flexShrink: 0,
  },
  cycleText: {
    fontSize: '36px',
    fontWeight: 600,
    color: '#94a3b8',
    letterSpacing: '-0.3px',
  },
  cycleRepeat: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#f87171',
    letterSpacing: '-0.3px',
  },

  // "It's not supposed to be this hard"
  validationContainer: {
    textAlign: 'center',
  },
  validationText: {
    fontSize: '44px',
    fontWeight: 700,
    color: '#cbd5e1',
    letterSpacing: '-0.5px',
    lineHeight: 1.25,
    fontStyle: 'italic',
  },

  // Action
  actionContainer: {
    textAlign: 'center',
  },
  actionLine: {
    fontSize: '50px',
    fontWeight: 800,
    color: '#e2e8f0',
    letterSpacing: '-1px',
    lineHeight: 1.2,
  },
  actionGreen: {
    fontSize: '50px',
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

export default function Ad19() {
  return (
    <div style={styles.container}>
      {/* Background layers */}
      <div style={styles.bgBase} />
      <div style={styles.bgGrid} />
      <div style={styles.glowBlue} />
      <div style={styles.glowRed} />
      <div style={styles.glowGreen} />

      {/* Content */}
      <div style={styles.content}>
        {/* Callout pill */}
        <div style={styles.callout}>
          50+ engineering apps, zero offers?
        </div>

        {/* Big exhaustion statement */}
        <div style={styles.exhaustedContainer}>
          <div style={styles.exhaustedText}>This is exhausting.</div>
        </div>

        {/* Cycle of frustration */}
        <div style={styles.cycleContainer}>
          <div style={styles.cycleRow}>
            <span style={styles.cycleArrow}>→</span>
            <span style={styles.cycleText}>Endless applications</span>
          </div>
          <div style={styles.cycleRow}>
            <span style={styles.cycleArrow}>→</span>
            <span style={styles.cycleText}>Hope every time you hit submit</span>
          </div>
          <div style={styles.cycleRow}>
            <span style={styles.cycleArrow}>→</span>
            <span style={styles.cycleText}>Crushing disappointment</span>
          </div>
          <div style={styles.cycleRow}>
            <span style={styles.cycleArrow}>→</span>
            <span style={styles.cycleRepeat}>Repeat.</span>
          </div>
        </div>

        {/* Validation */}
        <div style={styles.validationContainer}>
          <div style={styles.validationText}>It's not supposed to be this hard.</div>
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
