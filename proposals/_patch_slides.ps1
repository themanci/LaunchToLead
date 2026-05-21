$f = 'C:\Coding\coachingBusiness\launch-to-lead\proposals\iowa_state_webinar_slides.html'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

# ════════════════════════════════════════════════════════
# SLIDE 2 — Remove green quote box, replace client results
# ════════════════════════════════════════════════════════
$old_s2 = @'
          <div class="cred"><span class="cred-ico">🎓</span><div><strong style="color:#0f172a;">Systems Engineering Certificate</strong><br>California Institute of Technology (Caltech)</div></div>
          <div style="margin-top:14px;padding:13px 16px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:9px;font-size:13px;color:#065f46;line-height:1.65;">
            "I am not an HR person. I am not a recruiter. I am an engineer who figured out the game — and now I teach it from that side of the table."
          </div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#064e3b;margin-bottom:12px;">Client Results</div>
          <div class="rc"><div class="rc-ico">🚀</div><div><div class="rc-title">Karen B. — Fortune 100 → SpaceX, Google, GE &amp; Bridgestone offers</div><div class="rc-sub">Long-tenured engineer. Rebuilt positioning, resume &amp; interviews. Multiple top-tier offers.</div></div></div>
          <div class="rc"><div class="rc-ico">💻</div><div><div class="rc-title">Gavin P. — New grad → Fortune 500 Software Engineer</div><div class="rc-sub">No connections at target company. Built interview skills from scratch. Landed the role.</div></div></div>
          <div class="rc"><div class="rc-ico">🔄</div><div><div class="rc-title">Jonah B. — Entry-level MechE → Software Engineer</div><div class="rc-sub">Internal pivot at Fortune 100. "0% chance" — became Eng II in 18 months.</div></div></div>
          <div class="rc"><div class="rc-ico">🏆</div><div><div class="rc-title">Mukul K. — Career fair rejection → top-tier engineering role</div><div class="rc-sub">Rebuilt resume &amp; interview stories after not getting the internship. Landed first great role in Texas.</div></div></div>
          <div class="rc" style="margin-bottom:0;"><div class="rc-ico">⭐</div><div><div class="rc-title">Mohammed &amp; Osaid — 5/5 experience · 5/5 value</div><div class="rc-sub">Completed the Engineering Career Accelerator. Both gave top ratings on every dimension.</div></div></div>
        </div>
      </div>
    </div>
  </div>
'@

$new_s2 = @'
          <div class="cred"><span class="cred-ico">🎓</span><div><strong style="color:#0f172a;">Systems Engineering Certificate</strong><br>California Institute of Technology (Caltech)</div></div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#064e3b;margin-bottom:12px;">Client Results</div>
          <ul class="blist" style="padding:0;">
            <li style="border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;"><span class="bdot" style="background:#064e3b;margin-top:5px;flex-shrink:0;"></span><span>Helped clients land roles at Fortune 100 companies</span></li>
            <li style="border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;"><span class="bdot" style="background:#064e3b;margin-top:5px;flex-shrink:0;"></span><span>Coached new grads into their first full-time engineering roles</span></li>
            <li style="border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;"><span class="bdot" style="background:#064e3b;margin-top:5px;flex-shrink:0;"></span><span>Coached entry-level engineers into their first promotions</span></li>
            <li style="border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;"><span class="bdot" style="background:#064e3b;margin-top:5px;flex-shrink:0;"></span><span>Coached engineers into senior and staff-level roles</span></li>
            <li style="border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;"><span class="bdot" style="background:#064e3b;margin-top:5px;flex-shrink:0;"></span><span>Worked across software, hardware, systems, power, and mechanical engineering</span></li>
            <li style="padding:8px 0;font-size:13px;"><span class="bdot" style="background:#064e3b;margin-top:5px;flex-shrink:0;"></span><span>Clients placed at companies across defense, tech, energy, and manufacturing</span></li>
          </ul>
          <div style="margin-top:18px;padding:12px 16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:9px;font-size:12px;color:#64748b;line-height:1.7;">
            <strong style="color:#0f172a;">Disclaimers:</strong><br>
            1. This is what has worked for me and others I've coached — your situation may vary.<br>
            2. Resume writing is part science, part art.
          </div>
        </div>
      </div>
    </div>
  </div>
'@

$c = $c.Replace($old_s2, $new_s2)

# ════════════════════════════════════════════════════════
# SLIDE 12 — Simpler formula example
# ════════════════════════════════════════════════════════
$old_s12 = @'
      <div class="before-panel" style="text-align:left;margin-bottom:10px;">
        <div class="demo-lbl demo-lbl-b">★ Before — 1 component (weak A, no M, no H, no W)</div>
        <div class="demo-txt demo-txt-b">"Implemented a graph-based algorithm for interference detection in dynamic spectrum sharing environments."</div>
      </div>
      <div class="after-panel" style="text-align:left;margin-bottom:18px;">
        <div class="demo-lbl demo-lbl-a">★★★ After — all 4 components</div>
        <div class="demo-txt demo-txt-a">"Developed a <span style="color:#0369a1;font-style:normal;font-weight:700;">GNN-based spectrum sharing algorithm in PyTorch</span> — reducing co-channel interference by <span style="color:#b45309;font-style:normal;font-weight:700;">23 dB</span> across a <span style="color:#b45309;font-style:normal;font-weight:700;">64-node simulation</span>, enabling <span style="color:#7c3aed;font-style:normal;font-weight:700;">real-time dynamic allocation without centralized coordination</span>."</div>
      </div>
      <div style="display:flex;justify-content:center;gap:18px;font-size:13px;color:#475569;">
        <span>★ = 1 component</span><span style="color:#cbd5e1;">|</span>
        <span>★★ = 2–3 components</span><span style="color:#cbd5e1;">|</span>
        <span style="color:#064e3b;font-weight:700;">★★★ = all four</span>
      </div>
'@

$new_s12 = @'
      <div class="before-panel" style="text-align:left;margin-bottom:10px;">
        <div class="demo-lbl demo-lbl-b">★ Before — vague, no numbers, no method, no impact</div>
        <div class="demo-txt demo-txt-b">"Worked on a machine learning model to improve image classification accuracy."</div>
      </div>
      <div class="after-panel" style="text-align:left;margin-bottom:18px;">
        <div class="demo-lbl demo-lbl-a">★★★ After — all 4 components</div>
        <div class="demo-txt demo-txt-a">"<span style="color:#064e3b;font-style:normal;font-weight:700;">Built</span> a ResNet-based image classifier <span style="color:#0369a1;font-style:normal;font-weight:700;">using PyTorch</span> — reaching <span style="color:#b45309;font-style:normal;font-weight:700;">94% accuracy on a 10,000-image test set</span>, up from a 78% baseline, enabling <span style="color:#7c3aed;font-style:normal;font-weight:700;">deployment in a real-time quality inspection system</span>."</div>
        <div class="amhw-row" style="margin-top:12px;">
          <span class="tag tag-a">A — Built · improved over baseline</span>
          <span class="tag tag-m">M — 94% accuracy · 10,000 images · 16% gain</span>
          <span class="tag tag-h">H — ResNet · PyTorch</span>
          <span class="tag tag-w">W — Real-time quality inspection deployment</span>
        </div>
      </div>
      <div style="display:flex;justify-content:center;gap:18px;font-size:13px;color:#475569;">
        <span>★ = 1 component</span><span style="color:#cbd5e1;">|</span>
        <span>★★ = 2–3 components</span><span style="color:#cbd5e1;">|</span>
        <span style="color:#064e3b;font-weight:700;">★★★ = all four</span>
      </div>
'@

$c = $c.Replace($old_s12, $new_s12)

# ════════════════════════════════════════════════════════
# SLIDE 13 — Remove candidate table, keep stats only
# ════════════════════════════════════════════════════════
$old_s13 = @'
      <table class="stbl">
        <thead><tr><th>Candidate (anonymized)</th><th>Score</th><th>Tier</th><th>Research Area</th></tr></thead>
        <tbody>
          <tr><td>Candidate A — Ph.D., Computer Engineering</td><td class="sval">39</td><td>★★</td><td>LLM/VLM Evaluation · Medical AI</td></tr>
          <tr><td>Candidate B — Ph.D., Computer Engineering</td><td class="sval">41</td><td>★★</td><td>Wireless Comms · Spectrum Sharing · GNN</td></tr>
          <tr><td>Candidate C — Ph.D., Electrical Engineering</td><td class="sval">41</td><td>★★</td><td>Perovskite Solar Cell · Microelectronics</td></tr>
          <tr><td>Candidate D — Ph.D., Electrical Engineering</td><td class="sval">45</td><td>★★</td><td>Power Systems Planning · Renewable Energy</td></tr>
          <tr><td>Candidate E — Ph.D., Computer Science</td><td class="sval">51</td><td>★★</td><td>AI/Robotics · Computer Vision</td></tr>
          <tr><td>Candidate F — M.S., Computer Engineering</td><td class="sval">56</td><td>★★</td><td>Quantum Security · Intrusion Detection</td></tr>
          <tr><td>Candidate G — Ph.D., Electrical Engineering</td><td class="sval">59</td><td>★★</td><td>RF/MW · IC Design · PLL Design</td></tr>
          <tr><td>Candidate H — Ph.D., Computer Science</td><td class="sval" style="color:#064e3b;">66</td><td style="color:#064e3b;">★★★</td><td>AI Engineering · LLM Systems · RAG</td></tr>
        </tbody>
      </table>
'@

$new_s13 = @'
      <div class="card" style="padding:20px 24px;margin-top:4px;">
        <div style="font-size:14px;color:#475569;line-height:1.9;">
          Scores ranged from <strong style="color:#0f172a;">39 to 66 out of 100.</strong>
          7 of 8 candidates landed in the ★★ band — solid technical work, but the translation to the page wasn't there yet.
          One candidate reached ★★★. The difference wasn't research quality.
          It was how clearly the work was described.
        </div>
        <div style="margin-top:16px;font-size:13px;color:#64748b;line-height:1.75;">
          The group spans AI, wireless communications, power systems, semiconductor devices, computer vision, quantum security, and RF design —
          different fields, same pattern of gaps.
        </div>
      </div>
'@

$c = $c.Replace($old_s13, $new_s13)

# ════════════════════════════════════════════════════════
# SLIDE 14 — Replace bar chart with 4 IBB scores only
# ════════════════════════════════════════════════════════
$old_s14_title = '      <div class="slide-title" style="font-size:34px;margin-bottom:8px;">What Your Group Is Doing Well</div>
      <div class="slide-sub" style="font-size:14px;margin-bottom:20px;">Group averages per criterion — scored across all 8 resumes (max 10.0 per criterion)</div>
      <div class="bar-row"><div class="bar-label">Personal Ownership</div><div class="bar-track"><div class="bar-fill bar-green" style="width:82.5%"></div></div><div class="bar-val">8.25</div><div class="bar-badge bg-green">Group Strength</div></div>
      <div class="bar-row"><div class="bar-label">Action Verbs</div><div class="bar-track"><div class="bar-fill bar-green" style="width:80%"></div></div><div class="bar-val">8.0</div><div class="bar-badge bg-green">Group Strength</div></div>
      <div class="bar-row"><div class="bar-label">How / Method</div><div class="bar-track"><div class="bar-fill bar-green" style="width:67.5%"></div></div><div class="bar-val">6.75</div><div class="bar-badge bg-green">Group Strength</div></div>
      <div class="bar-row"><div class="bar-label">Why / Impact</div><div class="bar-track"><div class="bar-fill bar-amber" style="width:50%"></div></div><div class="bar-val">5.0</div><div class="bar-badge bg-amber">Developing</div></div>
      <div class="bar-row"><div class="bar-label">Accomplishments</div><div class="bar-track"><div class="bar-fill bar-amber" style="width:42.5%"></div></div><div class="bar-val">4.25</div><div class="bar-badge bg-amber">Developing</div></div>
      <div class="bar-row"><div class="bar-label">Bullet Consistency</div><div class="bar-track"><div class="bar-fill bar-amber" style="width:33.8%"></div></div><div class="bar-val">3.38</div><div class="bar-badge bg-amber">Developing</div></div>
      <div style="margin-top:18px;padding:14px 18px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:9px;font-size:13px;color:#065f46;line-height:1.65;">
        ✓ You own your work with first-person active verbs. Tools appear inside bullets, not just in skills lists. The foundation is strong — these gaps are specific and fixable.
      </div>'

$new_s14_title = '      <div class="slide-title" style="font-size:34px;margin-bottom:8px;">How Your Group Scored on the Framework</div>
      <div class="slide-sub" style="font-size:14px;margin-bottom:20px;">Group averages on the 4 IBB components — scored across all 8 resumes (max 10.0 each)</div>
      <div class="bar-row"><div class="bar-label">A — Accomplishment</div><div class="bar-track"><div class="bar-fill bar-amber" style="width:42.5%"></div></div><div class="bar-val">4.25</div><div class="bar-badge bg-amber">Developing</div></div>
      <div class="bar-row"><div class="bar-label">M — Metric</div><div class="bar-track"><div class="bar-fill bar-red" style="width:28.8%"></div></div><div class="bar-val">2.88</div><div class="bar-badge bg-red">Primary Gap</div></div>
      <div class="bar-row"><div class="bar-label">H — How / Method</div><div class="bar-track"><div class="bar-fill bar-green" style="width:67.5%"></div></div><div class="bar-val">6.75</div><div class="bar-badge bg-green">Group Strength</div></div>
      <div class="bar-row"><div class="bar-label">W — Why / Impact</div><div class="bar-track"><div class="bar-fill bar-amber" style="width:50%"></div></div><div class="bar-val">5.0</div><div class="bar-badge bg-amber">Developing</div></div>
      <div style="margin-top:22px;" class="g2" style="gap:14px;">
        <div class="card" style="padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;color:#16a34a;margin-bottom:5px;">✓ What's working</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;">The <strong style="color:#0f172a;">How</strong> score (6.75) is strong — you name tools and methods inside bullets, not just in the skills section. That instinct is right. Keep it.</div>
        </div>
        <div class="card" style="padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;color:#dc2626;margin-bottom:5px;">✗ The biggest gap</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;"><strong style="color:#0f172a;">Metrics</strong> (2.88) is the single lowest score. Every research domain here produces numbers. They just aren't on the page yet.</div>
        </div>
      </div>'

$c = $c.Replace($old_s14_title, $new_s14_title)

# ════════════════════════════════════════════════════════
# SLIDE 15 — Replace with new "Primary gap" explanation  
# ════════════════════════════════════════════════════════
$old_s15 = @'
  <!-- ══════════════════════════════════════════════════════
       SLIDE 15 — PRIMARY GAPS
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">Criterion Analysis</div>
      <div class="slide-title" style="font-size:34px;margin-bottom:8px;">What's Holding Scores Back</div>
      <div class="slide-sub" style="font-size:14px;margin-bottom:18px;">Two criteria account for most of the distance between ★★ and ★★★</div>
      <div class="bar-row" style="margin-bottom:16px;">
        <div class="bar-label">Metrics / Quantification</div>
        <div class="bar-track"><div class="bar-fill bar-red" style="width:28.8%"></div></div>
        <div class="bar-val">2.88</div>
        <div class="bar-badge bg-red">Primary Gap</div>
      </div>
      <div class="bar-row" style="margin-bottom:20px;">
        <div class="bar-label">Problem Context</div>
        <div class="bar-track"><div class="bar-fill bar-red" style="width:23.8%"></div></div>
        <div class="bar-val">2.38</div>
        <div class="bar-badge bg-red">Primary Gap</div>
      </div>
      <div class="g2" style="gap:14px;">
        <div class="card card-red" style="padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;color:#ef4444;margin-bottom:6px;">Metrics — 2.88/10 · 6 of 8 scored 1–2</div>
          <div style="font-size:12px;color:#94a3b8;line-height:1.65;">Every domain here produces measurable outputs: PCE%, dB, F1, ms, XRD index, entanglement fidelity, Mbps. These numbers exist — in lab notebooks, code output, poster files. Not one is required to be invented. They just aren't written down.</div>
        </div>
        <div class="card card-red" style="padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;color:#ef4444;margin-bottom:6px;">Problem Context — 2.38/10 · Lowest criterion</div>
          <div style="font-size:12px;color:#94a3b8;line-height:1.65;">Almost no bullets establish what existed before, what gap motivated the work, or what the before-state was. Results appear without a baseline. The best bullet in all 8 resumes: <em style="color:#0f172a;">"Reduced ~90,000-bus system to ~900 buses..."</em> — it works because it shows before and after.</div>
        </div>
      </div>
    </div>
  </div>
'@

$new_s15 = @'
  <!-- ══════════════════════════════════════════════════════
       SLIDE 15 — THE ACCOMPLISHMENT GAP
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">The Core Finding</div>
      <div class="slide-title" style="font-size:34px;margin-bottom:16px;">The Three Patterns Holding This Group Back</div>
      <div class="g2" style="gap:14px;margin-bottom:14px;">
        <div class="card card-red" style="padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;color:#ef4444;margin-bottom:6px;">No numbers — 6 of 8 scored 1–2 on Metrics</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;">Every research domain here produces measurable results — accuracy percentages, efficiency gains, reduction in milliseconds, signal levels in dB. Those numbers exist in your lab notebooks and code output. They just aren't on the page.</div>
        </div>
        <div class="card card-red" style="padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;color:#ef4444;margin-bottom:6px;">No before-state — results appear without context</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;">"Improved performance by 40%" tells a hiring manager nothing without a baseline. The single strongest bullet in this group worked because it showed both states: reduced a 90,000-element system to 900 — before and after, right there in the sentence.</div>
        </div>
      </div>
      <div class="card card-red" style="padding:16px 18px;">
        <div style="font-size:12px;font-weight:700;color:#ef4444;margin-bottom:6px;">PhD research is the weakest section on every resume — 8 of 8</div>
        <div style="font-size:13px;color:#475569;line-height:1.65;">The most important credential on a PhD resume — the research itself — is consistently described the least clearly. Phrases like "Exploring evaluation frameworks" or "Working on neural network architectures" describe <em>activities</em>, not <em>outputs</em>. They tell a hiring engineer nothing about what you built, what you found, or what it enables. One candidate's PhD research on a topic directly relevant to every major AI company appeared as a single line in the Education section with zero bullets, zero outputs, and zero methods named.</div>
      </div>
    </div>
  </div>
'@

$c = $c.Replace($old_s15, $new_s15)

# ════════════════════════════════════════════════════════
# SLIDE 16 — Expand into 2 stronger PhD slides
# ════════════════════════════════════════════════════════
$old_s16 = @'
  <!-- ══════════════════════════════════════════════════════
       SLIDE 16 — THE PHD RESEARCH PROBLEM
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">The Defining Issue</div>
      <div class="slide-title" style="font-size:34px;margin-bottom:18px;">The PhD Research Problem</div>
      <div style="padding:14px 20px;background:#fff5f5;border:1px solid #fecaca;border-radius:10px;font-size:15px;color:#991b1b;text-align:center;margin-bottom:18px;font-weight:600;">
        8 of 8 candidates: PhD research is underdeveloped or invisible on the resume.
      </div>
      <div class="g2" style="gap:14px;">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#ef4444;margin-bottom:10px;">Common Patterns Found</div>
          <ul class="blist">
            <li><span class="bdot red"></span><span>Research described in one line under "Education → Research Focus"</span></li>
            <li><span class="bdot red"></span><span>Present-participle verbs: "Exploring…" / "Working on…" / "Investigating…"</span></li>
            <li><span class="bdot red"></span><span>Publications listed separately, never tied to the bullets that produced them</span></li>
            <li><span class="bdot red"></span><span>Research written for other grad students, not hiring engineers</span></li>
          </ul>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#064e3b;margin-bottom:10px;">What to Do Instead</div>
          <div style="padding:12px 14px;background:#ecfdf5;border-radius:8px;border:1px solid #14532d;font-size:13px;color:#065f46;margin-bottom:10px;line-height:1.6;">
            "Your RA role is your most important credential.<br>Write it like your most important job."
          </div>
          <div style="font-size:13px;color:#94a3b8;line-height:1.7;margin-bottom:8px;">Every research bullet needs 3 things:</div>
          <ul style="list-style:none;padding:0;">
            <li style="font-size:13px;color:#475569;padding:5px 0;"><span style="color:#064e3b;font-weight:700;margin-right:6px;">①</span>Named approach — what you're building or using</li>
            <li style="font-size:13px;color:#475569;padding:5px 0;"><span style="color:#064e3b;font-weight:700;margin-right:6px;">②</span>Scope indicator — nodes, scenarios, models, measurements</li>
            <li style="font-size:13px;color:#475569;padding:5px 0;"><span style="color:#064e3b;font-weight:700;margin-right:6px;">③</span>Direction or preliminary result — what it targets or what you've found</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
'@

$new_s16 = @'
  <!-- ══════════════════════════════════════════════════════
       SLIDE 16 — PHD RESEARCH PROBLEM (expanded, part 1)
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">The Defining Issue</div>
      <div class="slide-title" style="font-size:32px;margin-bottom:14px;">Your Most Important Credential Is Your Weakest Section</div>
      <div style="padding:12px 20px;background:#fff5f5;border:1px solid #fecaca;border-radius:10px;font-size:14px;color:#991b1b;text-align:center;margin-bottom:16px;font-weight:600;">
        8 of 8 resumes: PhD research section underdeveloped or invisible — across every domain in this group.
      </div>
      <div class="g2" style="gap:14px;">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#ef4444;margin-bottom:10px;">What Was Found</div>
          <ul class="blist" style="padding:0;">
            <li style="border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;color:#475569;"><span class="bdot red" style="flex-shrink:0;margin-top:5px;"></span><span>Research buried as a single line in the Education section under "Research Focus" — not as bullets in an experience section</span></li>
            <li style="border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;color:#475569;"><span class="bdot red" style="flex-shrink:0;margin-top:5px;"></span><span>Bullets open with: "Exploring…" / "Working on…" / "Investigating…" — these describe activities, not outputs</span></li>
            <li style="border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;color:#475569;"><span class="bdot red" style="flex-shrink:0;margin-top:5px;"></span><span>Publications listed in a separate section at the bottom — never connected to the bullets that produced them</span></li>
            <li style="padding:8px 0;font-size:13px;color:#475569;"><span class="bdot red" style="flex-shrink:0;margin-top:5px;"></span><span>One candidate's research — directly relevant to AI alignment hiring at every major tech company — was written as a single sentence. Zero bullets. Zero outputs. Zero methods named.</span></li>
          </ul>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#ef4444;margin-bottom:10px;">What It Looks Like</div>
          <div class="before-panel" style="margin-bottom:10px;">
            <div class="demo-lbl demo-lbl-b">Real example — from this group's audits</div>
            <div class="demo-txt demo-txt-b">"Working on Neural Network, architecture search, benchmark design, and reliability analysis."</div>
          </div>
          <div style="padding:12px 14px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;font-size:13px;color:#475569;line-height:1.65;">
            A hiring engineer reading this sees: list of topics. No tool. No output. No scale. No number. Nothing that tells them what exists now that didn't before.
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════
       SLIDE 16B — PHD RESEARCH PROBLEM (part 2: the fix)
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">The Fix</div>
      <div class="slide-title" style="font-size:32px;margin-bottom:16px;">Write Your Research Like Your Most Important Job</div>
      <div class="g2" style="gap:18px;">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#064e3b;margin-bottom:10px;">Every research bullet needs these 3 things</div>
          <div class="card card-lime" style="padding:14px 18px;margin-bottom:10px;">
            <div style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:3px;">① Named approach</div>
            <div style="font-size:12px;color:#64748b;">What you built, developed, or are using — not just the topic area</div>
          </div>
          <div class="card card-lime" style="padding:14px 18px;margin-bottom:10px;">
            <div style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:3px;">② Scope or scale</div>
            <div style="font-size:12px;color:#64748b;">How many models, samples, nodes, scenarios, test cases — give it a floor to stand on</div>
          </div>
          <div class="card card-lime" style="padding:14px 18px;margin-bottom:10px;">
            <div style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:3px;">③ Result or direction</div>
            <div style="font-size:12px;color:#64748b;">What it's targeting, what preliminary results show, or what was published. You don't need final results to write this.</div>
          </div>
          <div style="padding:10px 14px;background:#ecfdf5;border-radius:8px;border:1px solid #a7f3d0;font-size:12px;color:#065f46;line-height:1.6;">
            Add "with findings published at [venue]" to any bullet tied to a paper. Four words. Every time.
          </div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#064e3b;margin-bottom:10px;">Before → After</div>
          <div class="before-panel" style="margin-bottom:10px;">
            <div class="demo-lbl demo-lbl-b">Before — activity, no output</div>
            <div class="demo-txt demo-txt-b">"Working on Neural Network, architecture search, benchmark design, and reliability analysis."</div>
          </div>
          <div class="after-panel">
            <div class="demo-lbl demo-lbl-a">After — named approach + scope + direction + publication</div>
            <div class="demo-txt demo-txt-a">"Designing evaluation frameworks for reasoning consistency and error behavior in large language models — building benchmark protocols across 6 model families and 4 reasoning task types, targeting failure mode identification for safety-critical deployment, with findings presented at [venue]."</div>
          </div>
          <div style="margin-top:10px;font-size:12px;color:#64748b;font-style:italic;">Same research. Same work. Completely different read.</div>
        </div>
      </div>
    </div>
  </div>
'@

$c = $c.Replace($old_s16, $new_s16)

# ════════════════════════════════════════════════════════
# SLIDE 17 — Keep as-is (survey responses)
# SLIDE 18 — Keep as-is (live demo intro)
# SLIDES 19-21 — Replace demo content (3 new demos)
# ════════════════════════════════════════════════════════

$old_demos = @'
  <!-- ══════════════════════════════════════════════════════
       SLIDE 19 — DEMO #1: WIRELESS / RF
  ══════════════════════════════════════════════════════ -->
  <div class="slide" data-steps="2">
    <div class="slide-inner">
      <div class="eyebrow">Demo #1 — Wireless / RF Research</div>
      <div class="slide-title" style="font-size:28px;margin-bottom:18px;">Spectrum Sharing &amp; Interference Detection</div>

      <div data-step="1">
        <div class="before-panel" style="margin-bottom:10px;">
          <div class="demo-lbl demo-lbl-b">BEFORE — ★ (1 of 4 components)</div>
          <div class="demo-txt demo-txt-b">"Implemented a graph-based algorithm for interference detection in dynamic spectrum sharing environments."</div>
        </div>
        <div style="padding:12px 16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:#b45309;margin-bottom:5px;">Diagnose — What's Missing?</div>
          <div style="font-size:13px;color:#94a3b8;line-height:1.65;">Algorithm named (graph-based) ✓. But: <strong style="color:#ef4444;">no metric</strong> (how much interference reduced?), <strong style="color:#ef4444;">no scale</strong> (how many nodes?), <strong style="color:#ef4444;">no Why</strong> (what does this enable for the system?)</div>
        </div>
      </div>

      <div data-step="2" style="margin-top:12px;">
        <div class="after-panel">
          <div class="demo-lbl demo-lbl-a">AFTER — ★★★ (all 4 components)</div>
          <div class="demo-txt demo-txt-a">"Developed a <span style="color:#0369a1;font-style:normal;font-weight:700;">GNN-based spectrum sharing algorithm in PyTorch</span> — reducing co-channel interference by <span style="color:#b45309;font-style:normal;font-weight:700;">23 dB</span> across a <span style="color:#b45309;font-style:normal;font-weight:700;">64-node simulation</span>, enabling <span style="color:#7c3aed;font-style:normal;font-weight:700;">real-time dynamic allocation without centralized coordination</span>."</div>
          <div class="amhw-row">
            <span class="tag tag-a">A — Developed · reduced interference</span>
            <span class="tag tag-m">M — 23 dB · 64-node simulation</span>
            <span class="tag tag-h">H — GNN-based · PyTorch</span>
            <span class="tag tag-w">W — Real-time allocation · no central coord</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════
       SLIDE 20 — DEMO #2: AI / ML PIPELINE
  ══════════════════════════════════════════════════════ -->
  <div class="slide" data-steps="2">
    <div class="slide-inner">
      <div class="eyebrow">Demo #2 — AI / ML Pipeline</div>
      <div class="slide-title" style="font-size:28px;margin-bottom:18px;">Medical Imaging &amp; Deep Learning Ensemble</div>

      <div data-step="1">
        <div class="before-panel" style="margin-bottom:10px;">
          <div class="demo-lbl demo-lbl-b">BEFORE — ★ (partial H, no M, no A result, no W)</div>
          <div class="demo-txt demo-txt-b">"Built an ML-DL hybrid pipeline using multiple deep learning architectures and ensemble learning for medical image classification."</div>
        </div>
        <div style="padding:12px 16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:#b45309;margin-bottom:5px;">Diagnose — What's Missing?</div>
          <div style="font-size:13px;color:#94a3b8;line-height:1.65;">Says "multiple architectures" but doesn't name them. <strong style="color:#ef4444;">No accuracy figure</strong>, no dataset size, no baseline comparison, no condition named, no publication link. The IEEE poster for this exact work listed the accuracy figures. None of it made it to the resume.</div>
        </div>
      </div>

      <div data-step="2" style="margin-top:12px;">
        <div class="after-panel">
          <div class="demo-lbl demo-lbl-a">AFTER — ★★★ (all 4 components)</div>
          <div class="demo-txt demo-txt-a">"Implemented a <span style="color:#0369a1;font-style:normal;font-weight:700;">VGG19/ResNet50/EfficientNetB0 ensemble</span> for diabetic retinopathy detection — achieving <span style="color:#b45309;font-style:normal;font-weight:700;">94.2% accuracy on 3,500 test images</span>, outperforming the single-model baseline by <span style="color:#b45309;font-style:normal;font-weight:700;">8.4%</span>, with findings <span style="color:#7c3aed;font-style:normal;font-weight:700;">submitted to IEEE BHI 2025</span>."</div>
          <div class="amhw-row">
            <span class="tag tag-a">A — Implemented · outperformed baseline</span>
            <span class="tag tag-m">M — 94.2% accuracy · 3,500 images · 8.4% gain</span>
            <span class="tag tag-h">H — VGG19/ResNet50/EfficientNetB0 named</span>
            <span class="tag tag-w">W — IEEE BHI submission · clinical detection</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════
       SLIDE 21 — DEMO #3: POWER SYSTEMS
  ══════════════════════════════════════════════════════ -->
  <div class="slide" data-steps="2">
    <div class="slide-inner">
      <div class="eyebrow">Demo #3 — Power Systems / Circuit Design</div>
      <div class="slide-title" style="font-size:28px;margin-bottom:18px;">Power Converter &amp; Grid Integration</div>

      <div data-step="1">
        <div class="before-panel" style="margin-bottom:10px;">
          <div class="demo-lbl demo-lbl-b">BEFORE — ★ (vague A · no M · no H · weak W)</div>
          <div class="demo-txt demo-txt-b">"Designed and simulated a power converter circuit to improve system efficiency for grid applications."</div>
        </div>
        <div style="padding:12px 16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:#b45309;margin-bottom:5px;">Diagnose — What's Missing?</div>
          <div style="font-size:13px;color:#94a3b8;line-height:1.65;"><strong style="color:#ef4444;">No tool named</strong> (MATLAB/Simulink? LTspice?), <strong style="color:#ef4444;">no efficiency figure</strong>, <strong style="color:#ef4444;">no power rating</strong>, <strong style="color:#ef4444;">no baseline</strong> ("improve" from what?), <strong style="color:#ef4444;">no application specificity</strong> ("grid" tells nothing about scale or use case).</div>
        </div>
      </div>

      <div data-step="2" style="margin-top:12px;">
        <div class="after-panel">
          <div class="demo-lbl demo-lbl-a">AFTER — ★★★ (all 4 components)</div>
          <div class="demo-txt demo-txt-a">"Designed a bidirectional DC-DC converter in <span style="color:#0369a1;font-style:normal;font-weight:700;">MATLAB/Simulink</span> — achieving <span style="color:#b45309;font-style:normal;font-weight:700;">95.3% efficiency at 500 kW peak load</span> and reducing switching losses by <span style="color:#b45309;font-style:normal;font-weight:700;">18%</span> vs. the prior design, enabling <span style="color:#7c3aed;font-style:normal;font-weight:700;">integration with a 100-node IEEE test bus for planning-study validation</span>."</div>
          <div class="amhw-row">
            <span class="tag tag-a">A — Designed · achieving, reducing</span>
            <span class="tag tag-m">M — 95.3% · 500 kW · 18% reduction · 100-node</span>
            <span class="tag tag-h">H — MATLAB/Simulink · bidirectional DC-DC</span>
            <span class="tag tag-w">W — IEEE test bus · planning-study validation</span>
          </div>
        </div>
      </div>
    </div>
  </div>
'@

$new_demos = @'
  <!-- ══════════════════════════════════════════════════════
       SLIDE 19 — DEMO #1: MACHINE LEARNING
  ══════════════════════════════════════════════════════ -->
  <div class="slide" data-steps="2">
    <div class="slide-inner">
      <div class="eyebrow">Demo #1 — Machine Learning / AI Research</div>
      <div class="slide-title" style="font-size:28px;margin-bottom:18px;">Image Classification — Research Bullet</div>

      <div data-step="1">
        <div class="before-panel" style="margin-bottom:10px;">
          <div class="demo-lbl demo-lbl-b">BEFORE — missing Metric, How, and Why</div>
          <div class="demo-txt demo-txt-b">"Developed a deep learning model to improve accuracy for image classification tasks."</div>
        </div>
        <div style="padding:12px 16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:#b45309;margin-bottom:5px;">What's Missing?</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;">The verb "Developed" is a strong start (A ✓). But: <strong style="color:#ef4444;">no number</strong> — "improve" by how much? <strong style="color:#ef4444;">No method named</strong> — what kind of model? <strong style="color:#ef4444;">No impact</strong> — where does this get used?</div>
        </div>
      </div>

      <div data-step="2" style="margin-top:12px;">
        <div class="after-panel">
          <div class="demo-lbl demo-lbl-a">AFTER — all 4 components</div>
          <div class="demo-txt demo-txt-a">"Developed a <span style="color:#0369a1;font-style:normal;font-weight:700;">convolutional neural network in PyTorch</span> for defect detection in manufactured parts — achieving <span style="color:#b45309;font-style:normal;font-weight:700;">93% accuracy on 8,000 test images</span>, up from a 71% baseline, enabling <span style="color:#7c3aed;font-style:normal;font-weight:700;">automated quality screening on the production line without manual inspection</span>."</div>
          <div class="amhw-row">
            <span class="tag tag-a">A — Developed · improved over baseline</span>
            <span class="tag tag-m">M — 93% accuracy · 8,000 images · 22% gain</span>
            <span class="tag tag-h">H — Convolutional neural network · PyTorch</span>
            <span class="tag tag-w">W — Automated production line quality screening</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════
       SLIDE 20 — DEMO #2: POWER / SYSTEMS
  ══════════════════════════════════════════════════════ -->
  <div class="slide" data-steps="2">
    <div class="slide-inner">
      <div class="eyebrow">Demo #2 — Power Systems / Hardware</div>
      <div class="slide-title" style="font-size:28px;margin-bottom:18px;">Circuit Design — Research Bullet</div>

      <div data-step="1">
        <div class="before-panel" style="margin-bottom:10px;">
          <div class="demo-lbl demo-lbl-b">BEFORE — vague action, no number, no tool, no impact</div>
          <div class="demo-txt demo-txt-b">"Designed and tested a circuit to reduce power consumption in embedded systems."</div>
        </div>
        <div style="padding:12px 16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:#b45309;margin-bottom:5px;">What's Missing?</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;"><strong style="color:#ef4444;">No number</strong> — power reduced by how much? <strong style="color:#ef4444;">No tool named</strong> — what software or test equipment? <strong style="color:#ef4444;">No impact</strong> — what does lower power consumption make possible?</div>
        </div>
      </div>

      <div data-step="2" style="margin-top:12px;">
        <div class="after-panel">
          <div class="demo-lbl demo-lbl-a">AFTER — all 4 components</div>
          <div class="demo-txt demo-txt-a">"Designed a low-power voltage regulator circuit <span style="color:#0369a1;font-style:normal;font-weight:700;">using LTSPICE simulation and bench testing</span> — reducing idle power draw by <span style="color:#b45309;font-style:normal;font-weight:700;">38% compared to the baseline regulator</span>, extending battery life by an estimated <span style="color:#b45309;font-style:normal;font-weight:700;">14 hours</span>, enabling <span style="color:#7c3aed;font-style:normal;font-weight:700;">deployment in battery-operated field sensors with a 3-year target lifespan</span>."</div>
          <div class="amhw-row">
            <span class="tag tag-a">A — Designed · reducing power draw</span>
            <span class="tag tag-m">M — 38% reduction · 14 hours battery gain</span>
            <span class="tag tag-h">H — LTspice simulation + bench testing</span>
            <span class="tag tag-w">W — Battery-operated field sensor deployment</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════
       SLIDE 21 — DEMO #3: SOFTWARE / SYSTEMS
  ══════════════════════════════════════════════════════ -->
  <div class="slide" data-steps="2">
    <div class="slide-inner">
      <div class="eyebrow">Demo #3 — Software / Systems Engineering</div>
      <div class="slide-title" style="font-size:28px;margin-bottom:18px;">Data Pipeline — Research or Internship Bullet</div>

      <div data-step="1">
        <div class="before-panel" style="margin-bottom:10px;">
          <div class="demo-lbl demo-lbl-b">BEFORE — activity description, no result</div>
          <div class="demo-txt demo-txt-b">"Worked on a data processing pipeline to improve the speed of the data analysis workflow."</div>
        </div>
        <div style="padding:12px 16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:#b45309;margin-bottom:5px;">What's Missing?</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;"><strong style="color:#ef4444;">"Worked on" signals activity, not output.</strong> No number on how much faster. No tool. No reason why speed mattered. Could have been written by anyone in any data role.</div>
        </div>
      </div>

      <div data-step="2" style="margin-top:12px;">
        <div class="after-panel">
          <div class="demo-lbl demo-lbl-a">AFTER — all 4 components</div>
          <div class="demo-txt demo-txt-a">"Rebuilt a data processing pipeline <span style="color:#0369a1;font-style:normal;font-weight:700;">in Python using parallel processing and vectorized operations</span> — reducing analysis runtime from <span style="color:#b45309;font-style:normal;font-weight:700;">4.5 hours to 22 minutes</span> on a dataset of <span style="color:#b45309;font-style:normal;font-weight:700;">2.3 million records</span>, enabling <span style="color:#7c3aed;font-style:normal;font-weight:700;">same-day results for field engineers who previously waited overnight for outputs</span>."</div>
          <div class="amhw-row">
            <span class="tag tag-a">A — Rebuilt · reducing runtime</span>
            <span class="tag tag-m">M — 4.5h → 22min · 2.3M record dataset</span>
            <span class="tag tag-h">H — Python · parallel processing · vectorization</span>
            <span class="tag tag-w">W — Same-day results for field engineers</span>
          </div>
        </div>
      </div>
    </div>
  </div>
'@

$c = $c.Replace($old_demos, $new_demos)

# ════════════════════════════════════════════════════════
# SLIDE 22 — Move before demos, update content
# The current structure is: 17(survey) 18(demo intro) 19-21(demos) 22(6 changes) 23(Q&A) 24(next) 25(close)
# Target:                   17(survey) 18(6 changes)  19(demo intro) 20-22(demos) 23-24(PhD writing) 25(next) 26(close)
# We'll handle by replacing the 22+23 block at once
# ════════════════════════════════════════════════════════

$old_s22_s23 = @'
  <!-- ══════════════════════════════════════════════════════
       SLIDE 22 — 6 HIGHEST-IMPACT CHANGES
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">Action Plan</div>
      <div class="slide-title" style="font-size:34px;margin-bottom:18px;">The 6 Highest-Impact Changes</div>
      <ol class="nlist">
        <li><div class="ncir">1</div><div class="ntxt"><strong>Add 1 metric to every research bullet</strong>Numbers are in your lab notebooks, code output, and poster files. They don't need to be invented — they've already been measured.</div></li>
        <li><div class="ncir">2</div><div class="ntxt"><strong>Write your PhD research section like your most important job</strong>Named approach + scope indicator + direction or preliminary result. That's all it takes.</div></li>
        <li><div class="ncir">3</div><div class="ntxt"><strong>Link your publications to the bullets that produced them</strong>Four words: <em>"with findings published at [venue]."</em> Do this for every paper you have.</div></li>
        <li><div class="ncir">4</div><div class="ntxt"><strong>Add a "before" state to each major contribution</strong>Give the baseline. "Improved X" means nothing without knowing what X was beforehand.</div></li>
        <li><div class="ncir">5</div><div class="ntxt"><strong>Replace "Exploring / Working on / Investigating"</strong>Convert to past tense with a stated output — or add "with initial results showing [X]" to any ongoing work.</div></li>
        <li><div class="ncir">6</div><div class="ntxt"><strong>If you have industry experience, write it like it matters — because it does</strong>Dates-only entries are worse than omitting them. Every industry role is a differentiator for PhD applicants.</div></li>
      </ol>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════
       SLIDE 23 — Q&A QUESTIONS
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">Live Q&amp;A</div>
      <div class="slide-title" style="font-size:34px;margin-bottom:20px;">Questions You Submitted</div>
      <div class="qa-card"><div class="qa-q">Q1</div><div class="qa-txt">How do I turn ongoing PhD research into strong, industry-style resume bullets — even before it's published?</div></div>
      <div class="qa-card"><div class="qa-q">Q2</div><div class="qa-txt">Should research papers go above or alongside industry experience? What's the right structure for a PhD resume?</div></div>
      <div class="qa-card"><div class="qa-q">Q3</div><div class="qa-txt">How do I tailor my resume for different roles efficiently — without spending 2 hours per application?</div></div>
      <div class="qa-card"><div class="qa-q">Q4</div><div class="qa-txt">How do I talk about research experience in interviews vs. traditional engineering behavioral interviews?</div></div>
      <div class="qa-card"><div class="qa-q">Q5</div><div class="qa-txt">What do recruiters at hardware, AI, and power systems companies actually look for in graduate engineer resumes?</div></div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════
       SLIDE 24 — NEXT STEPS
'@

$new_s22_s23 = @'
  <!-- ══════════════════════════════════════════════════════
       SLIDE 22 — WRITING PHD EXPERIENCE FOR INDUSTRY (part 1)
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">PhD → Industry Translation</div>
      <div class="slide-title" style="font-size:32px;margin-bottom:14px;">Writing PhD Experience for Industry</div>
      <div class="card" style="padding:14px 18px;margin-bottom:16px;">
        <div style="font-size:14px;color:#475569;line-height:1.75;">This is a <strong style="color:#0f172a;">translation problem, not a content problem.</strong> Your research produced real engineering outputs — they're just described in academic language that industry hiring managers aren't trained to parse.</div>
      </div>
      <div class="g2" style="gap:14px;">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#ef4444;margin-bottom:8px;">1. Replace the research goal with the engineering problem</div>
          <div class="before-panel" style="margin-bottom:8px;">
            <div class="demo-lbl demo-lbl-b">Academic framing</div>
            <div class="demo-txt demo-txt-b" style="font-size:13px;">"Investigated the thermal properties of novel polymer composites under cyclic loading conditions."</div>
          </div>
          <div class="after-panel">
            <div class="demo-lbl demo-lbl-a">Industry framing</div>
            <div class="demo-txt demo-txt-a" style="font-size:13px;">"Existing thermal materials failed above 150°C under mechanical stress — a gap blocking adoption in electric vehicle battery designs."</div>
          </div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#ef4444;margin-bottom:8px;">2. Replace "studied / explored / investigated" with what you built</div>
          <div class="before-panel" style="margin-bottom:8px;">
            <div class="demo-lbl demo-lbl-b">Academic framing</div>
            <div class="demo-txt demo-txt-b" style="font-size:13px;">"Investigated machine learning approaches for anomaly detection in industrial sensor data."</div>
          </div>
          <div class="after-panel">
            <div class="demo-lbl demo-lbl-a">Industry framing</div>
            <div class="demo-txt demo-txt-a" style="font-size:13px;">"Built an anomaly detection model on 14 months of industrial sensor data — achieving 91% precision at a 0.3% false positive rate on the held-out test set."</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════
       SLIDE 23 — WRITING PHD EXPERIENCE FOR INDUSTRY (part 2)
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">PhD → Industry Translation</div>
      <div class="slide-title" style="font-size:32px;margin-bottom:14px;">The Four Rewrites That Matter Most</div>
      <div class="g2" style="gap:14px;">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#ef4444;margin-bottom:8px;">3. Attach your results to the technique used</div>
          <div class="before-panel" style="margin-bottom:8px;">
            <div class="demo-lbl demo-lbl-b">Academic framing</div>
            <div class="demo-txt demo-txt-b" style="font-size:13px;">"Characterized thin film morphology using scanning electron microscopy and atomic force microscopy."</div>
          </div>
          <div class="after-panel" style="margin-bottom:12px;">
            <div class="demo-lbl demo-lbl-a">Industry framing</div>
            <div class="demo-txt demo-txt-a" style="font-size:13px;">"Used electron and atomic-force microscopy to resolve thin film domain sizes of 18–24 nm with surface roughness below 0.4 nm — establishing process parameters that guided deposition optimization."</div>
          </div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#ef4444;margin-bottom:8px;">4. End with what it enables, not what it contributes</div>
          <div class="before-panel" style="margin-bottom:8px;">
            <div class="demo-lbl demo-lbl-b">Academic framing</div>
            <div class="demo-txt demo-txt-b" style="font-size:13px;">"...contributing to the understanding of charge transport in perovskite solar cells."</div>
          </div>
          <div class="after-panel">
            <div class="demo-lbl demo-lbl-a">Industry framing</div>
            <div class="demo-txt demo-txt-a" style="font-size:13px;">"...identifying the doping level that maximized carrier mobility without accelerating degradation — informing process conditions for stable, high-efficiency device fabrication."</div>
          </div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#064e3b;margin-bottom:10px;">The 5-question checklist for any PhD bullet</div>
          <ol style="list-style:none;padding:0;">
            <li style="display:flex;gap:10px;padding:9px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;min-width:20px;">1.</span><span><strong style="color:#0f172a;">Context:</strong> Does it say what was broken or unavailable before?</span></li>
            <li style="display:flex;gap:10px;padding:9px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;min-width:20px;">2.</span><span><strong style="color:#0f172a;">Accomplishment:</strong> Does it name what you built, fabricated, modeled, or ran?</span></li>
            <li style="display:flex;gap:10px;padding:9px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;min-width:20px;">3.</span><span><strong style="color:#0f172a;">Metric:</strong> Does it include at least one number from your actual results?</span></li>
            <li style="display:flex;gap:10px;padding:9px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;min-width:20px;">4.</span><span><strong style="color:#0f172a;">How:</strong> Does it name the specific tool or technique used?</span></li>
            <li style="display:flex;gap:10px;padding:9px 0;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;min-width:20px;">5.</span><span><strong style="color:#0f172a;">Why:</strong> Does it say what an engineer or company can now do because of it?</span></li>
          </ol>
          <div style="margin-top:12px;padding:10px 14px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;font-size:12px;color:#065f46;font-weight:600;">
            If any of those five are missing, the bullet isn't finished yet.
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════
       SLIDE 24 — NEXT STEPS
'@

$c = $c.Replace($old_s22_s23, $new_s22_s23)

# ════════════════════════════════════════════════════════
# Now move the "6 Highest-Impact Changes" to BEFORE the demo intro (slide 18).
# Current order: ...slide 17 (survey) → slide 18 (demo intro) → slides 19-21 (demos) → slide 22-23 (new PhD slides)...
# Target: ...slide 17 (survey) → NEW: 6 changes → slide 18 (demo intro) → slides 19-21 (demos)...
# ════════════════════════════════════════════════════════

$six_changes_block = @'
  <!-- ══════════════════════════════════════════════════════
       BEFORE-DEMO — 6 HIGHEST-IMPACT CHANGES (moved here)
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">Action Plan</div>
      <div class="slide-title" style="font-size:34px;margin-bottom:18px;">The 6 Highest-Impact Changes</div>
      <ol class="nlist">
        <li><div class="ncir">1</div><div class="ntxt"><strong>Add 1 number to every research bullet</strong>The number already exists — in your code output, lab notebook, poster, or experiment log. You don't have to invent it. Just write it down.</div></li>
        <li><div class="ncir">2</div><div class="ntxt"><strong>Treat your PhD research section like your most important job</strong>It is. Write it as a role with bullets, not as a topic list in the Education section. Named approach + scope + result or direction.</div></li>
        <li><div class="ncir">3</div><div class="ntxt"><strong>Connect every publication to the bullet that produced it</strong>Add "with findings published at [venue]" directly in the experience bullet. Do it for every paper you have. Four words.</div></li>
        <li><div class="ncir">4</div><div class="ntxt"><strong>Give every major contribution a before-state</strong>"Improved X" has no weight without a baseline. One sentence on what existed before makes the result land. The group's strongest bullet did exactly this.</div></li>
        <li><div class="ncir">5</div><div class="ntxt"><strong>Convert present participles to outputs</strong>Replace "Exploring…" / "Working on…" / "Investigating…" with what the work has produced — even if it's preliminary. "Developing X — with initial results showing Y" is always stronger.</div></li>
        <li><div class="ncir">6</div><div class="ntxt"><strong>Write your industry experience like it matters — because it does</strong>Internships, co-ops, and full-time roles at real companies are a differentiator for PhD candidates. Dates-only entries are worse than omitting them. Write bullets.</div></li>
      </ol>
    </div>
  </div>

'@

$demo_intro_marker = '  <!-- ══════════════════════════════════════════════════════
       SLIDE 18 — LIVE DEMO INTRO'

$c = $c.Replace($demo_intro_marker, $six_changes_block + $demo_intro_marker)

# ════════════════════════════════════════════════════════
# Write back
# ════════════════════════════════════════════════════════
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
$lines = ($c -split "`n").Count
Write-Host "Done. Lines: $lines"
