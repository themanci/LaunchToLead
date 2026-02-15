import React from 'react'

/*
  Ad 07 — Time Delay + Urgency
  Callout: "Struggling engineer? No callbacks?"
  
  Design: Dark premium with amber/orange urgency accent.
  Threat list as centerpiece, financial loss as supporting.
  Green gradient for the solution action.
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
    background: 'linear-gradient(160deg, #0d0d1f 0%, #1a0f0a 40%, #0f0f1a 70%, #0a1628 100%)',
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

  // Amber glow (urgency)
  glowAmber: {
    position: 'absolute',
    top: '-10%',
    right: '-5%',
    width: '60%',
    height: '55%',
    background: 'radial-gradient(circle, rgba(245, 158, 11, 0.10) 0%, rgba(251, 191, 36, 0.04) 40%, transparent 70%)',
    filter: 'blur(50px)',
    zIndex: 1,
  },

  // Red glow bottom (loss)
  glowRed: {
    position: 'absolute',
    bottom: '5%',
    left: '-5%',
    width: '45%',
    height: '40%',
    background: 'radial-gradient(circle, rgba(248, 113, 113, 0.08) 0%, transparent 60%)',
    filter: 'blur(40px)',
    zIndex: 1,
  },

  // Green glow bottom-right (solution)
  glowGreen: {
    position: 'absolute',
    bottom: '-5%',
    right: '-5%',
    width: '40%',
    height: '35%',
    background: 'radial-gradient(circle, rgba(163, 230, 53, 0.06) 0%, transparent 60%)',
    filter: 'blur(40px)',
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    height: '100%',
    padding: '40px 52px',
    boxSizing: 'border-box',
  },

  // Callout pill
  callout: {
    background: 'rgba(245, 158, 11, 0.10)',
    border: '1px solid rgba(245, 158, 11, 0.25)',
    borderRadius: '100px',
    padding: '14px 40px',
    fontSize: '50px',
    fontWeight: 700,
    color: '#fcd34d',
    letterSpacing: '-0.3px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },

  // Hook section
  hookContainer: {
    textAlign: 'center',
  },
  hookLine: {
    fontSize: '36px',
    fontWeight: 600,
    color: '#94a3b8',
    lineHeight: 1.3,
  },
  hookBig: {
    fontSize: '88px',
    fontWeight: 900,
    fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
    background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ef4444 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1,
    letterSpacing: '-3px',
    filter: 'drop-shadow(0 0 30px rgba(245, 158, 11, 0.3))',
  },
  hookSuffix: {
    fontSize: '36px',
    fontWeight: 600,
    color: '#94a3b8',
    lineHeight: 1.3,
    marginTop: '-4px',
  },

  // Threat list
  threatContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
    maxWidth: '750px',
  },
  threatRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    background: 'rgba(245, 158, 11, 0.05)',
    border: '1px solid rgba(245, 158, 11, 0.10)',
    borderRadius: '14px',
    padding: '16px 34px',
  },
  threatDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#f59e0b',
    boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)',
    flexShrink: 0,
  },
  threatText: {
    fontSize: '32px',
    fontWeight: 600,
    color: '#e2e8f0',
    letterSpacing: '-0.3px',
  },

  // Financial loss callout
  lossBox: {
    background: 'rgba(248, 113, 113, 0.08)',
    border: '1px solid rgba(248, 113, 113, 0.18)',
    borderRadius: '16px',
    padding: '14px 40px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  lossLabel: {
    fontSize: '32px',
    fontWeight: 600,
    color: '#94a3b8',
  },
  lossEquals: {
    fontSize: '28px',
    color: '#475569',
  },
  lossAmount: {
    fontSize: '38px',
    fontWeight: 800,
    color: '#f87171',
    fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
    letterSpacing: '-1px',
  },

  // Action text
  actionContainer: {
    textAlign: 'center',
    marginTop: '4px',
  },
  actionProblem: {
    fontSize: '44px',
    fontWeight: 800,
    color: '#e2e8f0',
    letterSpacing: '-1px',
    lineHeight: 1.2,
  },
  actionSolution: {
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
    fontSize: '36px',
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

export default function Ad07() {
  return (
    <div style={styles.container}>
      {/* Background layers */}
      <div style={styles.bgBase} />
      <div style={styles.bgGrid} />
      <div style={styles.glowAmber} />
      <div style={styles.glowRed} />
      <div style={styles.glowGreen} />

      {/* Content */}
      <div style={styles.content}>
        {/* Callout pill */}
        <div style={styles.callout}>
          Struggling engineer? No callbacks?
        </div>

        {/* Hook */}
        <div style={styles.hookContainer}>
          <div style={styles.hookLine}>The job market is getting</div>
          <div style={styles.hookBig}>HARDER</div>
          <div style={styles.hookSuffix}>every month.</div>
        </div>

        {/* Threat list */}
        <div style={styles.threatContainer}>
          <div style={styles.threatRow}>
            <div style={styles.threatDot} />
            <span style={styles.threatText}>More graduates flooding in</span>
          </div>
          <div style={styles.threatRow}>
            <div style={styles.threatDot} />
            <span style={styles.threatText}>AI eliminating entry-level jobs</span>
          </div>
          <div style={styles.threatRow}>
            <div style={styles.threatDot} />
            <span style={styles.threatText}>Your resume gap growing</span>
          </div>
        </div>

        {/* Financial loss */}
        <div style={styles.lossBox}>
          <span style={styles.lossLabel}>6 months</span>
          <span style={styles.lossEquals}>=</span>
          <span style={styles.lossAmount}>$40,000 in lost income</span>
        </div>

        {/* Action */}
        <div style={styles.actionContainer}>
          <div style={styles.actionProblem}>Your resume is the problem.</div>
          <div style={styles.actionSolution}>Fix it first.</div>
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
