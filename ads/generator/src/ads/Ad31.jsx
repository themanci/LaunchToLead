import React from 'react'

/*
  Ad 31 — Grandparent Worry + Pride
  Callout: "Grandparent of an engineer with no job offers?"
  
  Design: Dark premium with warm gold/amber palette for grandparent trust.
  Pride → stuck → new rules → how to help.
  Green gradient for the solution.
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
    background: 'linear-gradient(155deg, #0d0d1f 0%, #1a150a 35%, #0f1520 65%, #0d0d1f 100%)',
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

  // Warm gold glow (pride/warmth)
  glowGold: {
    position: 'absolute',
    top: '-10%',
    left: '5%',
    width: '55%',
    height: '50%',
    background: 'radial-gradient(circle, rgba(217, 176, 96, 0.08) 0%, transparent 60%)',
    filter: 'blur(50px)',
    zIndex: 1,
  },

  // Amber glow right
  glowAmber: {
    position: 'absolute',
    top: '15%',
    right: '-5%',
    width: '40%',
    height: '40%',
    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.06) 0%, transparent 60%)',
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
    gap: '32px',
    height: '100%',
    padding: '40px 52px',
    boxSizing: 'border-box',
  },

  // Callout box
  callout: {
    background: 'rgba(217, 176, 96, 0.08)',
    border: '1px solid rgba(217, 176, 96, 0.20)',
    borderRadius: '24px',
    padding: '18px 44px',
    fontSize: '54px',
    fontWeight: 800,
    color: '#fde68a',
    letterSpacing: '-0.5px',
    textAlign: 'center',
    lineHeight: 1.25,
  },

  // Pride → stuck
  prideContainer: {
    textAlign: 'center',
  },
  prideLine: {
    fontSize: '38px',
    fontWeight: 700,
    color: '#cbd5e1',
    lineHeight: 1.3,
    letterSpacing: '-0.5px',
  },
  stuckLine: {
    fontSize: '42px',
    fontWeight: 800,
    color: '#f87171',
    lineHeight: 1.3,
    letterSpacing: '-0.5px',
    marginTop: '4px',
  },

  // Rules changed
  rulesContainer: {
    textAlign: 'center',
  },
  rulesLine: {
    fontSize: '34px',
    fontWeight: 600,
    color: '#94a3b8',
    lineHeight: 1.4,
  },
  rulesBig: {
    fontSize: '62px',
    fontWeight: 900,
    fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1.1,
    letterSpacing: '-2px',
    filter: 'drop-shadow(0 0 25px rgba(251, 191, 36, 0.3))',
  },

  // Results
  resultsContainer: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  resultBox: {
    background: 'rgba(163, 230, 53, 0.06)',
    border: '1px solid rgba(163, 230, 53, 0.15)',
    borderRadius: '16px',
    padding: '18px 36px',
    textAlign: 'center',
  },
  resultName: {
    fontSize: '30px',
    fontWeight: 700,
    color: '#94a3b8',
  },
  resultArrow: {
    fontSize: '28px',
    color: '#a3e635',
  },
  resultOutcome: {
    fontSize: '36px',
    fontWeight: 800,
    color: '#a3e635',
    letterSpacing: '-0.5px',
  },

  // Action
  actionContainer: {
    textAlign: 'center',
  },
  actionLine: {
    fontSize: '46px',
    fontWeight: 800,
    color: '#e2e8f0',
    letterSpacing: '-1px',
    lineHeight: 1.2,
  },
  actionGreen: {
    fontSize: '46px',
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

export default function Ad31() {
  return (
    <div style={styles.container}>
      {/* Background layers */}
      <div style={styles.bgBase} />
      <div style={styles.bgGrid} />
      <div style={styles.glowGold} />
      <div style={styles.glowAmber} />
      <div style={styles.glowGreen} />

      {/* Content */}
      <div style={styles.content}>
        {/* Callout */}
        <div style={styles.callout}>
          Grandparent of an engineer<br />with no job offers?
        </div>

        {/* Pride → stuck */}
        <div style={styles.prideContainer}>
          <div style={styles.prideLine}>You bragged about their degree.</div>
          <div style={styles.stuckLine}>Now they're stuck.</div>
        </div>

        {/* Rules changed */}
        <div style={styles.rulesContainer}>
          <div style={styles.rulesLine}>The rules have changed.</div>
          <div style={styles.rulesBig}>THEIR RESUME</div>
          <div style={styles.rulesLine}>is the problem.</div>
        </div>

        {/* Results */}
        <div style={styles.resultsContainer}>
          <div style={styles.resultBox}>
            <div style={styles.resultName}>Karen</div>
            <div style={styles.resultArrow}>↓</div>
            <div style={styles.resultOutcome}>Google</div>
          </div>
          <div style={styles.resultBox}>
            <div style={styles.resultName}>Sarah</div>
            <div style={styles.resultArrow}>↓</div>
            <div style={styles.resultOutcome}>$106K at Ford</div>
          </div>
        </div>

        {/* Action */}
        <div style={styles.actionContainer}>
          <div style={styles.actionLine}>You can help.</div>
          <div style={styles.actionGreen}>Share this free guide.</div>
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
