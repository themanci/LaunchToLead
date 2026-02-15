import React from 'react'

/*
  Ad 02 — Time Delay + Financial Loss
  Callout: "Engineering grad? 50+ rejections?"
  
  Design: Dark premium with red accent for loss, green for action.
  Animated gradient mesh background, glassmorphism urgency box,
  glowing number, staggered reveals.
*/

const styles = {
  container: {
    width: 1080,
    height: 1080,
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },

  // Animated mesh background layers
  bgBase: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(155deg, #0f0f1a 0%, #0a1628 35%, #121225 65%, #0d0d1f 100%)',
    zIndex: 0,
  },

  // Subtle grid pattern overlay
  bgGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    zIndex: 1,
  },

  // Red glow blob top-right (loss/danger)
  glowRed: {
    position: 'absolute',
    top: '-15%',
    right: '-10%',
    width: '65%',
    height: '65%',
    background: 'radial-gradient(circle, rgba(248, 113, 113, 0.12) 0%, rgba(248, 113, 113, 0.04) 40%, transparent 70%)',
    filter: 'blur(40px)',
    zIndex: 1,
  },

  // Green glow blob bottom-left (action/hope)
  glowGreen: {
    position: 'absolute',
    bottom: '-10%',
    left: '-5%',
    width: '50%',
    height: '50%',
    background: 'radial-gradient(circle, rgba(163, 230, 53, 0.08) 0%, rgba(74, 222, 128, 0.03) 40%, transparent 70%)',
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

  // Top callout pill
  callout: {
    background: 'rgba(248, 113, 113, 0.12)',
    border: '1px solid rgba(248, 113, 113, 0.25)',
    borderRadius: '100px',
    padding: '16px 42px',
    fontSize: '52px',
    fontWeight: 700,
    color: '#fca5a5',
    letterSpacing: '-0.3px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },

  // Hook section
  hookContainer: {
    textAlign: 'center',
  },
  hookLine: {
    fontSize: '40px',
    fontWeight: 600,
    color: '#cbd5e1',
    lineHeight: 1.25,
    letterSpacing: '-0.5px',
  },

  // Big glowing number
  bigNumberContainer: {
    textAlign: 'center',
    position: 'relative',
  },
  bigNumber: {
    fontSize: '120px',
    fontWeight: 900,
    fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
    background: 'linear-gradient(135deg, #f87171 0%, #ef4444 50%, #dc2626 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1,
    letterSpacing: '-4px',
    filter: 'drop-shadow(0 0 40px rgba(248, 113, 113, 0.35))',
  },
  perMonth: {
    fontSize: '24px',
    fontWeight: 500,
    color: '#94a3b8',
    marginTop: '-4px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },

  // Loss breakdown
  lossContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
  },
  lossRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    background: 'rgba(248, 113, 113, 0.06)',
    border: '1px solid rgba(248, 113, 113, 0.12)',
    borderRadius: '14px',
    padding: '14px 38px',
    whiteSpace: 'nowrap',
  },
  lossTime: {
    fontSize: '32px',
    fontWeight: 600,
    color: '#94a3b8',
  },
  lossEquals: {
    fontSize: '28px',
    color: '#475569',
  },
  lossAmount: {
    fontSize: '34px',
    fontWeight: 800,
    color: '#f87171',
    fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
  },

  // Action text
  actionContainer: {
    textAlign: 'center',
  },
  actionStop: {
    fontSize: '48px',
    fontWeight: 800,
    color: '#e2e8f0',
    letterSpacing: '-1px',
    lineHeight: 1.2,
  },
  actionStart: {
    fontSize: '48px',
    fontWeight: 800,
    letterSpacing: '-1px',
    lineHeight: 1.2,
    background: 'linear-gradient(135deg, #a3e635 0%, #4ade80 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  // Glass urgency box
  urgencyBox: {
    background: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: '14px 36px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  },
  urgencyDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#f87171',
    boxShadow: '0 0 12px rgba(248, 113, 113, 0.6)',
    flexShrink: 0,
  },
  urgencyText: {
    fontSize: '26px',
    fontWeight: 700,
    color: '#fbbf24',
    letterSpacing: '-0.3px',
  },

  // Bottom CTA
  ctaContainer: {
    textAlign: 'center',
  },
  ctaText: {
    fontSize: '40px',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.5px',
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

export default function Ad02() {
  return (
    <div style={styles.container}>
      {/* Background layers */}
      <div style={styles.bgBase} />
      <div style={styles.bgGrid} />
      <div style={styles.glowRed} />
      <div style={styles.glowGreen} />

      {/* Content */}
      <div style={styles.content}>
        {/* Callout pill */}
        <div style={styles.callout}>
          Engineering grad? 50+ rejections?
        </div>

        {/* Hook */}
        <div style={styles.hookContainer}>
          <div style={styles.hookLine}>
            Every month without a job<br />costs you
          </div>
        </div>

        {/* Big number */}
        <div style={styles.bigNumberContainer}>
          <div style={styles.bigNumber}>$6,700</div>
          <div style={styles.perMonth}>per month</div>
        </div>

        {/* Loss breakdown */}
        <div style={styles.lossContainer}>
          <div style={styles.lossRow}>
            <span style={styles.lossTime}>3 months</span>
            <span style={styles.lossEquals}>=</span>
            <span style={styles.lossAmount}>$20,000 gone</span>
          </div>
          <div style={styles.lossRow}>
            <span style={styles.lossTime}>6 months</span>
            <span style={styles.lossEquals}>=</span>
            <span style={styles.lossAmount}>$40,000 gone</span>
          </div>
        </div>

        {/* Action */}
        <div style={styles.actionContainer}>
          <div style={styles.actionStop}>Your resume is the problem.</div>
          <div style={styles.actionStart}>Fix it for free.</div>
        </div>

        {/* CTA */}
        <div style={styles.ctaContainer}>
          <div style={styles.ctaText}>
            Free <span style={{ color: '#a3e635', fontWeight: 800 }}>Impact Bullet Builder</span> Guide
          </div>
          <div style={styles.ctaBrand}>
            Launch<span style={styles.ctaBrandAccent}>ToLead</span>
          </div>
        </div>
      </div>
    </div>
  )
}
