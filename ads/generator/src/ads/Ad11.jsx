import React from 'react'

/*
  Ad 11 — Comparison + Status Recovery
  Callout: "Friends snagging jobs? You getting ghosted?"
  
  Design: Dark premium with blue/purple comparison palette.
  Side-by-side "same" elements, then the reveal — communicating value.
  Green gradient for the learnable skill / solution.
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
    background: 'linear-gradient(155deg, #0d0d1f 0%, #0f1129 35%, #130f25 65%, #0d0d1f 100%)',
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

  // Blue/purple glow top-left (comparison/jealousy)
  glowBlue: {
    position: 'absolute',
    top: '-10%',
    left: '-5%',
    width: '55%',
    height: '55%',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.10) 0%, rgba(139, 92, 246, 0.04) 40%, transparent 70%)',
    filter: 'blur(50px)',
    zIndex: 1,
  },

  // Red glow right (pain)
  glowRed: {
    position: 'absolute',
    top: '15%',
    right: '-8%',
    width: '40%',
    height: '40%',
    background: 'radial-gradient(circle, rgba(248, 113, 113, 0.07) 0%, transparent 60%)',
    filter: 'blur(40px)',
    zIndex: 1,
  },

  // Green glow bottom (solution)
  glowGreen: {
    position: 'absolute',
    bottom: '-8%',
    left: '20%',
    width: '60%',
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
    background: 'rgba(99, 102, 241, 0.10)',
    border: '1px solid rgba(139, 92, 246, 0.25)',
    borderRadius: '24px',
    padding: '16px 40px',
    fontSize: '52px',
    fontWeight: 800,
    color: '#c4b5fd',
    letterSpacing: '-0.5px',
    textAlign: 'center',
    lineHeight: 1.25,
  },

  // Comparison section
  comparisonContainer: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
  },
  comparisonSide: {
    background: 'rgba(99, 102, 241, 0.06)',
    border: '1px solid rgba(99, 102, 241, 0.12)',
    borderRadius: '16px',
    padding: '20px 36px',
    textAlign: 'center',
    flex: 1,
    minWidth: '280px',
  },
  comparisonLabel: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#818cf8',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '8px',
  },
  comparisonText: {
    fontSize: '34px',
    fontWeight: 700,
    color: '#e2e8f0',
    lineHeight: 1.3,
  },
  comparisonHighlight: {
    color: '#a3e635',
  },
  comparisonDim: {
    color: '#f87171',
  },
  vsCircle: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.10)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    fontWeight: 700,
    color: '#64748b',
    flexShrink: 0,
  },

  // Same qualifications list
  sameContainer: {
    textAlign: 'center',
  },
  sameRow: {
    fontSize: '34px',
    fontWeight: 600,
    color: '#94a3b8',
    lineHeight: 1.5,
  },
  sameDot: {
    color: '#6366f1',
  },

  // Reveal question
  revealQuestion: {
    fontSize: '40px',
    fontWeight: 700,
    color: '#e2e8f0',
    textAlign: 'center',
    letterSpacing: '-0.5px',
  },

  // Big answer
  answerContainer: {
    textAlign: 'center',
  },
  answerIntro: {
    fontSize: '34px',
    fontWeight: 600,
    color: '#94a3b8',
    lineHeight: 1.3,
  },
  answerBig: {
    fontSize: '72px',
    fontWeight: 900,
    fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
    background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1.1,
    letterSpacing: '-2px',
    filter: 'drop-shadow(0 0 25px rgba(139, 92, 246, 0.3))',
  },

  // Solution
  solutionContainer: {
    textAlign: 'center',
  },
  solutionLine: {
    fontSize: '42px',
    fontWeight: 800,
    color: '#e2e8f0',
    letterSpacing: '-0.5px',
    lineHeight: 1.2,
  },
  solutionGreen: {
    fontSize: '42px',
    fontWeight: 800,
    letterSpacing: '-0.5px',
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

export default function Ad11() {
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
          Friends snagging engineering jobs<br />while you're passed over?
        </div>

        {/* Comparison boxes */}
        <div style={styles.comparisonContainer}>
          <div style={styles.comparisonSide}>
            <div style={styles.comparisonText}>
              <span style={styles.comparisonHighlight}>Friends getting hired.</span>
            </div>
          </div>
          <div style={styles.vsCircle}>vs</div>
          <div style={styles.comparisonSide}>
            <div style={styles.comparisonText}>
              <span style={styles.comparisonDim}>You getting ghosted.</span>
            </div>
          </div>
        </div>

        {/* Same qualifications */}
        <div style={styles.sameContainer}>
          <div style={styles.sameRow}><span style={styles.sameDot}>● </span>Same grades</div>
          <div style={styles.sameRow}><span style={styles.sameDot}>● </span>Same projects</div>
          <div style={styles.sameRow}><span style={styles.sameDot}>● </span>Same internships</div>
        </div>

        {/* Reveal */}
        <div style={styles.revealQuestion}>So what's the difference?</div>

        {/* Big answer */}
        <div style={styles.answerContainer}>
          <div style={styles.answerIntro}>They know how to sell</div>
          <div style={styles.answerBig}>THEIR RESUME</div>
        </div>

        {/* Solution */}
        <div style={styles.solutionContainer}>
          <div style={styles.solutionLine}>That's a learnable skill.</div>
          <div style={styles.solutionGreen}>Learn it for free.</div>
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
