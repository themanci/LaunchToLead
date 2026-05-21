#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Patch iowa_state_webinar_slides.html with all requested changes."""

import sys

FILEPATH = r'C:\Coding\coachingBusiness\launch-to-lead\proposals\iowa_state_webinar_slides.html'

with open(FILEPATH, 'r', encoding='utf-8') as fh:
    content = fh.read()

original_len = len(content)
replacements_done = []
errors = []


def replace_once(label, old, new):
    global content
    count = content.count(old)
    if count == 0:
        errors.append(f"NOT FOUND: {label}")
        return
    if count > 1:
        errors.append(f"AMBIGUOUS ({count} matches): {label}")
        return
    content = content.replace(old, new)
    replacements_done.append(label)


# ══════════════════════════════════════════════════════════════
# SLIDE 2 — Remove green quote box, replace named client cards
# with generic bullets + disclaimer
# ══════════════════════════════════════════════════════════════
OLD_S2 = '''          <div class="cred"><span class="cred-ico">🎓</span><div><strong style="color:#0f172a;">Systems Engineering Certificate</strong><br>California Institute of Technology (Caltech)</div></div>
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
  </div>'''

NEW_S2 = '''          <div class="cred"><span class="cred-ico">🎓</span><div><strong style="color:#0f172a;">Systems Engineering Certificate</strong><br>California Institute of Technology (Caltech)</div></div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#064e3b;margin-bottom:12px;">Client Results</div>
          <ul style="list-style:none;padding:0;margin:0;">
            <li style="display:flex;gap:10px;border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;flex-shrink:0;">→</span><span>Helped clients land roles at Fortune 100 companies</span></li>
            <li style="display:flex;gap:10px;border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;flex-shrink:0;">→</span><span>Coached new graduates into their first full-time engineering roles</span></li>
            <li style="display:flex;gap:10px;border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;flex-shrink:0;">→</span><span>Coached entry-level engineers into their first promotions</span></li>
            <li style="display:flex;gap:10px;border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;flex-shrink:0;">→</span><span>Coached engineers into senior and staff-level roles</span></li>
            <li style="display:flex;gap:10px;border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;flex-shrink:0;">→</span><span>Worked across software, hardware, power, systems, and mechanical engineering</span></li>
            <li style="display:flex;gap:10px;padding:8px 0;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;flex-shrink:0;">→</span><span>Clients placed at companies across defense, tech, energy, and manufacturing</span></li>
          </ul>
          <div style="margin-top:16px;padding:12px 16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:9px;font-size:12px;color:#64748b;line-height:1.75;">
            <strong style="color:#0f172a;">Disclaimers:</strong><br>
            1. This is what has worked for me and others I've coached — your situation may vary.<br>
            2. Resume writing is part science, part art.
          </div>
        </div>
      </div>
    </div>
  </div>'''

replace_once("Slide 2 – remove quote box and replace client cards", OLD_S2, NEW_S2)


# ══════════════════════════════════════════════════════════════
# SLIDE 12 — Simpler formula example (no GNN/spectrum reuse)
# ══════════════════════════════════════════════════════════════
OLD_S12 = '''      <div class="before-panel" style="text-align:left;margin-bottom:10px;">
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
      </div>'''

NEW_S12 = '''      <div class="before-panel" style="text-align:left;margin-bottom:10px;">
        <div class="demo-lbl demo-lbl-b">★ Before — vague action, no number, no method, no impact</div>
        <div class="demo-txt demo-txt-b">"Worked on a machine learning model to improve the accuracy of image classification."</div>
      </div>
      <div class="after-panel" style="text-align:left;margin-bottom:18px;">
        <div class="demo-lbl demo-lbl-a">★★★ After — all 4 components</div>
        <div class="demo-txt demo-txt-a">"<span style="color:#064e3b;font-style:normal;font-weight:700;">Built</span> a convolutional neural network <span style="color:#0369a1;font-style:normal;font-weight:700;">in PyTorch</span> for defect detection in manufactured parts — achieving <span style="color:#b45309;font-style:normal;font-weight:700;">93% accuracy on 8,000 test images</span>, up from a 71% baseline, enabling <span style="color:#7c3aed;font-style:normal;font-weight:700;">automated quality screening without manual inspection</span>."</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;">
          <span class="tag tag-a">A — Built · improved over baseline</span>
          <span class="tag tag-m">M — 93% accuracy · 8,000 images · 22-pt gain</span>
          <span class="tag tag-h">H — Convolutional neural network · PyTorch</span>
          <span class="tag tag-w">W — Automated production quality screening</span>
        </div>
      </div>
      <div style="display:flex;justify-content:center;gap:18px;font-size:13px;color:#475569;">
        <span>★ = 1 component</span><span style="color:#cbd5e1;">|</span>
        <span>★★ = 2–3 components</span><span style="color:#cbd5e1;">|</span>
        <span style="color:#064e3b;font-weight:700;">★★★ = all four</span>
      </div>'''

replace_once("Slide 12 – simpler formula example", OLD_S12, NEW_S12)


# ══════════════════════════════════════════════════════════════
# SLIDE 13 — Remove candidate table, keep stats only
# ══════════════════════════════════════════════════════════════
OLD_S13 = '''      <table class="stbl">
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
      </table>'''

NEW_S13 = '''      <div class="card" style="padding:20px 24px;margin-top:4px;">
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
      </div>'''

replace_once("Slide 13 – remove candidate table", OLD_S13, NEW_S13)


# ══════════════════════════════════════════════════════════════
# SLIDE 14 — Replace 6-criteria bars with 4 IBB scores only
# ══════════════════════════════════════════════════════════════
OLD_S14 = '''      <div class="slide-title" style="font-size:34px;margin-bottom:8px;">What Your Group Is Doing Well</div>
      <div class="slide-sub" style="font-size:14px;margin-bottom:20px;">Group averages per criterion — scored across all 8 resumes (max 10.0 per criterion)</div>
      <div class="bar-row"><div class="bar-label">Personal Ownership</div><div class="bar-track"><div class="bar-fill bar-green" style="width:82.5%"></div></div><div class="bar-val">8.25</div><div class="bar-badge bg-green">Group Strength</div></div>
      <div class="bar-row"><div class="bar-label">Action Verbs</div><div class="bar-track"><div class="bar-fill bar-green" style="width:80%"></div></div><div class="bar-val">8.0</div><div class="bar-badge bg-green">Group Strength</div></div>
      <div class="bar-row"><div class="bar-label">How / Method</div><div class="bar-track"><div class="bar-fill bar-green" style="width:67.5%"></div></div><div class="bar-val">6.75</div><div class="bar-badge bg-green">Group Strength</div></div>
      <div class="bar-row"><div class="bar-label">Why / Impact</div><div class="bar-track"><div class="bar-fill bar-amber" style="width:50%"></div></div><div class="bar-val">5.0</div><div class="bar-badge bg-amber">Developing</div></div>
      <div class="bar-row"><div class="bar-label">Accomplishments</div><div class="bar-track"><div class="bar-fill bar-amber" style="width:42.5%"></div></div><div class="bar-val">4.25</div><div class="bar-badge bg-amber">Developing</div></div>
      <div class="bar-row"><div class="bar-label">Bullet Consistency</div><div class="bar-track"><div class="bar-fill bar-amber" style="width:33.8%"></div></div><div class="bar-val">3.38</div><div class="bar-badge bg-amber">Developing</div></div>
      <div style="margin-top:18px;padding:14px 18px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:9px;font-size:13px;color:#065f46;line-height:1.65;">
        ✓ You own your work with first-person active verbs. Tools appear inside bullets, not just in skills lists. The foundation is strong — these gaps are specific and fixable.
      </div>'''

NEW_S14 = '''      <div class="slide-title" style="font-size:34px;margin-bottom:8px;">How Your Group Scored on the Framework</div>
      <div class="slide-sub" style="font-size:14px;margin-bottom:20px;">Group averages on the 4 IBB components — scored across all 8 resumes (max 10.0 each)</div>
      <div class="bar-row"><div class="bar-label">A — Accomplishment</div><div class="bar-track"><div class="bar-fill bar-amber" style="width:42.5%"></div></div><div class="bar-val">4.25</div><div class="bar-badge bg-amber">Developing</div></div>
      <div class="bar-row"><div class="bar-label">M — Metric</div><div class="bar-track"><div class="bar-fill bar-red" style="width:28.8%"></div></div><div class="bar-val">2.88</div><div class="bar-badge bg-red">Primary Gap</div></div>
      <div class="bar-row"><div class="bar-label">H — How / Method</div><div class="bar-track"><div class="bar-fill bar-green" style="width:67.5%"></div></div><div class="bar-val">6.75</div><div class="bar-badge bg-green">Group Strength</div></div>
      <div class="bar-row"><div class="bar-label">W — Why / Impact</div><div class="bar-track"><div class="bar-fill bar-amber" style="width:50%"></div></div><div class="bar-val">5.0</div><div class="bar-badge bg-amber">Developing</div></div>
      <div class="g2" style="gap:14px;margin-top:22px;">
        <div class="card" style="padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;color:#16a34a;margin-bottom:5px;">What is working</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;">The <strong style="color:#0f172a;">How</strong> score (6.75) is the group's strength — tools and methods appear inside bullets, not just in the skills section. That instinct is right.</div>
        </div>
        <div class="card" style="padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;color:#dc2626;margin-bottom:5px;">The biggest gap</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;"><strong style="color:#0f172a;">Metrics</strong> (2.88) is the lowest score. Every research domain in this group produces numbers. They just aren't on the page yet.</div>
        </div>
      </div>'''

replace_once("Slide 14 – 4 IBB bars only", OLD_S14, NEW_S14)


# ══════════════════════════════════════════════════════════════
# SLIDE 15 — Replace with "3 Patterns Holding Group Back"
# ══════════════════════════════════════════════════════════════
OLD_S15 = '''  <!-- ══════════════════════════════════════════════════════
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
  </div>'''

NEW_S15 = '''  <!-- ══════════════════════════════════════════════════════
       SLIDE 15 — THE 3 PATTERNS
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">The Core Finding</div>
      <div class="slide-title" style="font-size:34px;margin-bottom:16px;">The Three Patterns Holding This Group Back</div>
      <div class="g2" style="gap:14px;margin-bottom:14px;">
        <div class="card card-red" style="padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;color:#ef4444;margin-bottom:6px;">No numbers — 6 of 8 scored 1–2 on Metrics</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;">Every research domain in this group produces measurable results — accuracy rates, efficiency gains, time reductions, signal levels. Those numbers exist in your lab notebooks and code output. They just are not on the page.</div>
        </div>
        <div class="card card-red" style="padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;color:#ef4444;margin-bottom:6px;">No before-state — results appear without context</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;">"Improved performance by 40%" means nothing without a baseline. The strongest bullet in this group worked because it showed both states — reduced a 90,000-element system to 900. Before and after, in the same sentence.</div>
        </div>
      </div>
      <div class="card card-red" style="padding:16px 18px;">
        <div style="font-size:12px;font-weight:700;color:#ef4444;margin-bottom:6px;">PhD research is the weakest section on every resume — 8 of 8</div>
        <div style="font-size:13px;color:#475569;line-height:1.65;">The most important credential on a PhD resume is consistently described the least clearly. Phrases like "Exploring evaluation frameworks" or "Working on neural network architectures" describe <em>activities</em>, not <em>outputs</em>. They tell a hiring engineer nothing about what you built, what you found, or what it enables. One candidate's PhD research on a topic directly relevant to every major AI company appeared as a single line in the Education section — zero bullets, zero outputs, zero methods named.</div>
      </div>
    </div>
  </div>'''

replace_once("Slide 15 – replace with 3 patterns", OLD_S15, NEW_S15)


# ══════════════════════════════════════════════════════════════
# SLIDE 16 — Expand to 2 slides
# ══════════════════════════════════════════════════════════════
OLD_S16 = '''  <!-- ══════════════════════════════════════════════════════
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
  </div>'''

NEW_S16 = '''  <!-- ══════════════════════════════════════════════════════
       SLIDE 16 — PHD RESEARCH PROBLEM (part 1)
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">The Defining Issue</div>
      <div class="slide-title" style="font-size:32px;margin-bottom:14px;">Your Most Important Credential Is Your Weakest Section</div>
      <div style="padding:12px 20px;background:#fff5f5;border:1px solid #fecaca;border-radius:10px;font-size:14px;color:#991b1b;text-align:center;margin-bottom:16px;font-weight:600;">
        8 of 8 resumes — PhD research is underdeveloped or invisible, across every domain in this group.
      </div>
      <div class="g2" style="gap:14px;">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#ef4444;margin-bottom:10px;">What was found</div>
          <ul style="list-style:none;padding:0;margin:0;">
            <li style="display:flex;gap:10px;border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;color:#475569;"><span style="color:#ef4444;font-weight:700;flex-shrink:0;">✗</span><span>Research buried as a single line in Education under "Research Focus" — not written as experience bullets</span></li>
            <li style="display:flex;gap:10px;border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;color:#475569;"><span style="color:#ef4444;font-weight:700;flex-shrink:0;">✗</span><span>Bullets open with: "Exploring…" / "Working on…" / "Investigating…" — these signal activity, not output</span></li>
            <li style="display:flex;gap:10px;border-bottom:1px solid #f1f5f9;padding:8px 0;font-size:13px;color:#475569;"><span style="color:#ef4444;font-weight:700;flex-shrink:0;">✗</span><span>Publications listed at the bottom of the resume — never connected to the bullet that produced them</span></li>
            <li style="display:flex;gap:10px;padding:8px 0;font-size:13px;color:#475569;"><span style="color:#ef4444;font-weight:700;flex-shrink:0;">✗</span><span>One candidate's research directly relevant to AI alignment hiring appeared as one sentence. Zero bullets. Zero outputs. Zero methods.</span></li>
          </ul>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#ef4444;margin-bottom:10px;">What it looks like</div>
          <div style="padding:12px 16px;background:#fff5f5;border:1px solid #fecaca;border-radius:8px;margin-bottom:10px;">
            <div style="font-size:11px;font-weight:700;color:#991b1b;margin-bottom:5px;">Real example — from this group's audits</div>
            <div style="font-size:13px;color:#0f172a;line-height:1.65;font-style:italic;">"Working on Neural Network, architecture search, benchmark design, and reliability analysis."</div>
          </div>
          <div style="padding:12px 14px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;font-size:13px;color:#475569;line-height:1.65;">
            A hiring engineer sees: a list of topics. No tool. No output. No scale. No number. Nothing that tells them what exists now that did not exist before.
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
          <div class="card" style="padding:14px 18px;margin-bottom:10px;">
            <div style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:3px;">1. Named approach</div>
            <div style="font-size:12px;color:#64748b;">What you built, developed, or are using — not just the topic area</div>
          </div>
          <div class="card" style="padding:14px 18px;margin-bottom:10px;">
            <div style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:3px;">2. Scope or scale</div>
            <div style="font-size:12px;color:#64748b;">How many models, samples, nodes, test cases — give it ground to stand on</div>
          </div>
          <div class="card" style="padding:14px 18px;margin-bottom:10px;">
            <div style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:3px;">3. Result or direction</div>
            <div style="font-size:12px;color:#64748b;">What it is targeting, what preliminary results show, or what was published. You do not need final results to write this.</div>
          </div>
          <div style="padding:10px 14px;background:#ecfdf5;border-radius:8px;border:1px solid #a7f3d0;font-size:12px;color:#065f46;line-height:1.6;">
            Add "with findings published at [venue]" to any bullet tied to a paper. Four words. Every time.
          </div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#064e3b;margin-bottom:10px;">Before and after</div>
          <div style="padding:12px 16px;background:#fff5f5;border:1px solid #fecaca;border-radius:8px;margin-bottom:10px;">
            <div style="font-size:11px;font-weight:700;color:#991b1b;margin-bottom:5px;">Before — activity, no output</div>
            <div style="font-size:13px;color:#0f172a;line-height:1.65;font-style:italic;">"Working on Neural Network, architecture search, benchmark design, and reliability analysis."</div>
          </div>
          <div style="padding:12px 16px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;">
            <div style="font-size:11px;font-weight:700;color:#065f46;margin-bottom:5px;">After — named approach + scope + direction + publication</div>
            <div style="font-size:13px;color:#0f172a;line-height:1.65;font-style:italic;">"Designing evaluation frameworks for reasoning consistency and error behavior in large language models — building benchmark protocols across 6 model families and 4 reasoning task types, targeting failure mode identification for safety-critical deployment, with findings presented at [venue]."</div>
          </div>
          <div style="margin-top:10px;font-size:12px;color:#64748b;font-style:italic;">Same research. Same work. Completely different read.</div>
        </div>
      </div>
    </div>
  </div>'''

replace_once("Slide 16 – expand to 2 PhD slides", OLD_S16, NEW_S16)


# ══════════════════════════════════════════════════════════════
# SLIDES 19-21 — Replace all 3 demo slides with new examples
# ══════════════════════════════════════════════════════════════
OLD_DEMOS = '''  <!-- ══════════════════════════════════════════════════════
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
  </div>'''

NEW_DEMOS = '''  <!-- ══════════════════════════════════════════════════════
       SLIDE 19 — DEMO #1: MACHINE LEARNING
  ══════════════════════════════════════════════════════ -->
  <div class="slide" data-steps="2">
    <div class="slide-inner">
      <div class="eyebrow">Demo #1 — Machine Learning Research</div>
      <div class="slide-title" style="font-size:28px;margin-bottom:18px;">Image Classification — Applying the Formula</div>

      <div data-step="1">
        <div class="before-panel" style="margin-bottom:10px;">
          <div class="demo-lbl demo-lbl-b">BEFORE — missing Metric, How, and Why</div>
          <div class="demo-txt demo-txt-b">"Developed a deep learning model to improve accuracy for image classification tasks."</div>
        </div>
        <div style="padding:12px 16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:#b45309;margin-bottom:5px;">What's missing?</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;">The verb "Developed" is a solid start — but <strong style="color:#ef4444;">no number</strong> ("improve" by how much?), <strong style="color:#ef4444;">no method named</strong> (what kind of model?), <strong style="color:#ef4444;">no impact</strong> (where does this get used?).</div>
        </div>
      </div>

      <div data-step="2" style="margin-top:12px;">
        <div class="after-panel">
          <div class="demo-lbl demo-lbl-a">AFTER — all 4 components</div>
          <div class="demo-txt demo-txt-a">"Developed a <span style="color:#0369a1;font-style:normal;font-weight:700;">convolutional neural network in PyTorch</span> for defect detection in manufactured parts — achieving <span style="color:#b45309;font-style:normal;font-weight:700;">93% accuracy on 8,000 test images</span>, up from a 71% baseline, enabling <span style="color:#7c3aed;font-style:normal;font-weight:700;">automated quality screening without manual inspection on the production line</span>."</div>
          <div class="amhw-row">
            <span class="tag tag-a">A — Developed · improved over baseline</span>
            <span class="tag tag-m">M — 93% accuracy · 8,000 images · 22-pt gain</span>
            <span class="tag tag-h">H — Convolutional neural network · PyTorch</span>
            <span class="tag tag-w">W — Automated production line quality screening</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════
       SLIDE 20 — DEMO #2: CIRCUIT / POWER
  ══════════════════════════════════════════════════════ -->
  <div class="slide" data-steps="2">
    <div class="slide-inner">
      <div class="eyebrow">Demo #2 — Circuit Design / Power Systems</div>
      <div class="slide-title" style="font-size:28px;margin-bottom:18px;">Circuit Optimization — Applying the Formula</div>

      <div data-step="1">
        <div class="before-panel" style="margin-bottom:10px;">
          <div class="demo-lbl demo-lbl-b">BEFORE — vague action, no number, no tool, no impact</div>
          <div class="demo-txt demo-txt-b">"Designed and tested a circuit to reduce power consumption in embedded systems."</div>
        </div>
        <div style="padding:12px 16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:#b45309;margin-bottom:5px;">What's missing?</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;"><strong style="color:#ef4444;">No number</strong> — power reduced by how much? <strong style="color:#ef4444;">No tool named</strong> — what software or bench equipment? <strong style="color:#ef4444;">No impact</strong> — what does lower power consumption actually enable?</div>
        </div>
      </div>

      <div data-step="2" style="margin-top:12px;">
        <div class="after-panel">
          <div class="demo-lbl demo-lbl-a">AFTER — all 4 components</div>
          <div class="demo-txt demo-txt-a">"Designed a low-power voltage regulator <span style="color:#0369a1;font-style:normal;font-weight:700;">using LTspice simulation and bench testing</span> — reducing idle power draw by <span style="color:#b45309;font-style:normal;font-weight:700;">38% vs. the baseline design</span> and extending estimated battery life by <span style="color:#b45309;font-style:normal;font-weight:700;">14 hours</span>, enabling <span style="color:#7c3aed;font-style:normal;font-weight:700;">deployment in field sensors with a 3-year battery target</span>."</div>
          <div class="amhw-row">
            <span class="tag tag-a">A — Designed · reducing power draw</span>
            <span class="tag tag-m">M — 38% reduction vs. baseline · 14-hr battery gain</span>
            <span class="tag tag-h">H — LTspice simulation + bench testing</span>
            <span class="tag tag-w">W — Field sensors with 3-year battery target</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════
       SLIDE 21 — DEMO #3: SOFTWARE / DATA
  ══════════════════════════════════════════════════════ -->
  <div class="slide" data-steps="2">
    <div class="slide-inner">
      <div class="eyebrow">Demo #3 — Software / Data Engineering</div>
      <div class="slide-title" style="font-size:28px;margin-bottom:18px;">Data Pipeline — Applying the Formula</div>

      <div data-step="1">
        <div class="before-panel" style="margin-bottom:10px;">
          <div class="demo-lbl demo-lbl-b">BEFORE — activity description, no result</div>
          <div class="demo-txt demo-txt-b">"Worked on a data processing pipeline to improve the speed of the data analysis workflow."</div>
        </div>
        <div style="padding:12px 16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.09em;color:#b45309;margin-bottom:5px;">What's missing?</div>
          <div style="font-size:13px;color:#475569;line-height:1.65;"><strong style="color:#ef4444;">"Worked on" signals activity, not output.</strong> No number on how much faster. No tool named. No reason why the speed mattered. Could have been written by anyone in any data role.</div>
        </div>
      </div>

      <div data-step="2" style="margin-top:12px;">
        <div class="after-panel">
          <div class="demo-lbl demo-lbl-a">AFTER — all 4 components</div>
          <div class="demo-txt demo-txt-a">"Rebuilt a data processing pipeline <span style="color:#0369a1;font-style:normal;font-weight:700;">in Python using parallel processing and vectorized operations</span> — reducing analysis runtime from <span style="color:#b45309;font-style:normal;font-weight:700;">4.5 hours to 22 minutes</span> on a dataset of <span style="color:#b45309;font-style:normal;font-weight:700;">2.3 million records</span>, enabling <span style="color:#7c3aed;font-style:normal;font-weight:700;">same-day results for field engineers who previously waited overnight</span>."</div>
          <div class="amhw-row">
            <span class="tag tag-a">A — Rebuilt · reducing runtime</span>
            <span class="tag tag-m">M — 4.5 hr to 22 min · 2.3M records</span>
            <span class="tag tag-h">H — Python · parallel processing · vectorization</span>
            <span class="tag tag-w">W — Same-day results for field engineers</span>
          </div>
        </div>
      </div>
    </div>
  </div>'''

replace_once("Slides 19-21 – replace all 3 demo slides", OLD_DEMOS, NEW_DEMOS)


# ══════════════════════════════════════════════════════════════
# SLIDES 22+23 — Replace Q&A + 6 changes with PhD writing slides
# (the 6 changes will be inserted before demo intro separately)
# ══════════════════════════════════════════════════════════════
OLD_S22_23 = '''  <!-- ══════════════════════════════════════════════════════
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
       SLIDE 24 — NEXT STEPS'''

NEW_S22_23 = '''  <!-- ══════════════════════════════════════════════════════
       SLIDE 22 — WRITING PHD EXPERIENCE FOR INDUSTRY (part 1)
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">PhD to Industry Translation</div>
      <div class="slide-title" style="font-size:32px;margin-bottom:14px;">Writing PhD Experience for Industry</div>
      <div class="card" style="padding:14px 18px;margin-bottom:16px;">
        <div style="font-size:14px;color:#475569;line-height:1.75;">This is a <strong style="color:#0f172a;">translation problem, not a content problem.</strong> Your research produced real engineering outputs — they just need to be described in language that a hiring engineer can parse in 6 seconds.</div>
      </div>
      <div class="g2" style="gap:16px;">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#ef4444;margin-bottom:8px;">1. Replace the research goal with the engineering problem</div>
          <div style="padding:10px 14px;background:#fff5f5;border:1px solid #fecaca;border-radius:7px;margin-bottom:6px;">
            <div style="font-size:10px;font-weight:700;color:#991b1b;margin-bottom:4px;">Academic framing</div>
            <div style="font-size:13px;color:#0f172a;line-height:1.6;font-style:italic;">"Investigated the thermal properties of novel polymer composites under cyclic loading conditions."</div>
          </div>
          <div style="padding:10px 14px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:7px;">
            <div style="font-size:10px;font-weight:700;color:#065f46;margin-bottom:4px;">Industry framing</div>
            <div style="font-size:13px;color:#0f172a;line-height:1.6;font-style:italic;">"Existing thermal materials failed above 150°C under mechanical stress — a gap blocking adoption in electric vehicle battery designs."</div>
          </div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#ef4444;margin-bottom:8px;">2. Replace "studied / explored" with what you built or produced</div>
          <div style="padding:10px 14px;background:#fff5f5;border:1px solid #fecaca;border-radius:7px;margin-bottom:6px;">
            <div style="font-size:10px;font-weight:700;color:#991b1b;margin-bottom:4px;">Academic framing</div>
            <div style="font-size:13px;color:#0f172a;line-height:1.6;font-style:italic;">"Investigated machine learning approaches for anomaly detection in industrial sensor data."</div>
          </div>
          <div style="padding:10px 14px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:7px;">
            <div style="font-size:10px;font-weight:700;color:#065f46;margin-bottom:4px;">Industry framing</div>
            <div style="font-size:13px;color:#0f172a;line-height:1.6;font-style:italic;">"Built an anomaly detection model on 14 months of industrial sensor data — achieving 91% precision at a 0.3% false positive rate on the held-out test set."</div>
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
      <div class="eyebrow">PhD to Industry Translation</div>
      <div class="slide-title" style="font-size:32px;margin-bottom:14px;">Two More Rewrites — and the Checklist</div>
      <div class="g2" style="gap:16px;">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#ef4444;margin-bottom:8px;">3. Attach your results directly to the technique used</div>
          <div style="padding:10px 14px;background:#fff5f5;border:1px solid #fecaca;border-radius:7px;margin-bottom:6px;">
            <div style="font-size:10px;font-weight:700;color:#991b1b;margin-bottom:4px;">Academic framing</div>
            <div style="font-size:13px;color:#0f172a;line-height:1.6;font-style:italic;">"Characterized thin film morphology using scanning electron microscopy and atomic force microscopy."</div>
          </div>
          <div style="padding:10px 14px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:7px;margin-bottom:14px;">
            <div style="font-size:10px;font-weight:700;color:#065f46;margin-bottom:4px;">Industry framing</div>
            <div style="font-size:13px;color:#0f172a;line-height:1.6;font-style:italic;">"Used electron and atomic-force microscopy to resolve domain sizes of 18–24 nm with surface roughness below 0.4 nm — establishing parameters that guided deposition optimization."</div>
          </div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#ef4444;margin-bottom:8px;">4. End with what it enables — not what it contributes</div>
          <div style="padding:10px 14px;background:#fff5f5;border:1px solid #fecaca;border-radius:7px;margin-bottom:6px;">
            <div style="font-size:10px;font-weight:700;color:#991b1b;margin-bottom:4px;">Academic framing</div>
            <div style="font-size:13px;color:#0f172a;line-height:1.6;font-style:italic;">"...contributing to the understanding of charge transport in perovskite solar cells."</div>
          </div>
          <div style="padding:10px 14px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:7px;">
            <div style="font-size:10px;font-weight:700;color:#065f46;margin-bottom:4px;">Industry framing</div>
            <div style="font-size:13px;color:#0f172a;line-height:1.6;font-style:italic;">"...identifying the doping level that maximized carrier mobility without accelerating degradation — informing process conditions for stable, high-efficiency device fabrication."</div>
          </div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:#064e3b;margin-bottom:10px;">5-question checklist before submitting any PhD bullet</div>
          <ol style="list-style:none;padding:0;margin:0;">
            <li style="display:flex;gap:10px;padding:9px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;min-width:20px;flex-shrink:0;">1.</span><span><strong style="color:#0f172a;">Context:</strong> Does it say what was broken or unavailable before?</span></li>
            <li style="display:flex;gap:10px;padding:9px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;min-width:20px;flex-shrink:0;">2.</span><span><strong style="color:#0f172a;">Accomplishment:</strong> Does it name what you built, fabricated, modeled, or ran?</span></li>
            <li style="display:flex;gap:10px;padding:9px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;min-width:20px;flex-shrink:0;">3.</span><span><strong style="color:#0f172a;">Metric:</strong> Does it include at least one number from your actual results?</span></li>
            <li style="display:flex;gap:10px;padding:9px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;min-width:20px;flex-shrink:0;">4.</span><span><strong style="color:#0f172a;">How:</strong> Does it name the specific tool or technique used?</span></li>
            <li style="display:flex;gap:10px;padding:9px 0;font-size:13px;color:#475569;"><span style="color:#064e3b;font-weight:700;min-width:20px;flex-shrink:0;">5.</span><span><strong style="color:#0f172a;">Why:</strong> Does it say what an engineer or company can now do because of it?</span></li>
          </ol>
          <div style="margin-top:12px;padding:10px 14px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;font-size:12px;color:#065f46;font-weight:600;">
            If any of the five are missing, the bullet is not finished yet.
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════
       SLIDE 24 — NEXT STEPS'''

replace_once("Slides 22+23 – replace with PhD writing slides", OLD_S22_23, NEW_S22_23)


# ══════════════════════════════════════════════════════════════
# INSERT 6 HIGHEST-IMPACT CHANGES before the demo intro slide
# ══════════════════════════════════════════════════════════════
SIX_CHANGES_INSERT = '''  <!-- ══════════════════════════════════════════════════════
       SLIDE 18B — 6 HIGHEST-IMPACT CHANGES (before demos)
  ══════════════════════════════════════════════════════ -->
  <div class="slide">
    <div class="slide-inner">
      <div class="eyebrow">Action Plan</div>
      <div class="slide-title" style="font-size:34px;margin-bottom:18px;">The 6 Highest-Impact Changes</div>
      <ol class="nlist">
        <li><div class="ncir">1</div><div class="ntxt"><strong>Add 1 number to every research bullet</strong>The number already exists — in your code output, lab notebook, poster, or experiment log. You do not need to invent it. Just write it down.</div></li>
        <li><div class="ncir">2</div><div class="ntxt"><strong>Treat your PhD research section like your most important job</strong>It is. Write it as a role with bullets — not as a topic list in the Education section. Named approach + scope + result or direction.</div></li>
        <li><div class="ncir">3</div><div class="ntxt"><strong>Connect every publication to the bullet that produced it</strong>Add "with findings published at [venue]" directly in the experience bullet. Four words. Do it for every paper.</div></li>
        <li><div class="ncir">4</div><div class="ntxt"><strong>Give every major contribution a before-state</strong>"Improved X" has no weight without a baseline. The group's strongest bullet worked because it showed before and after in the same sentence.</div></li>
        <li><div class="ncir">5</div><div class="ntxt"><strong>Convert present participles to outputs</strong>Replace "Exploring…" / "Working on…" / "Investigating…" with what the work has produced — even if it's preliminary. "Developing X — with initial results showing Y" is always stronger.</div></li>
        <li><div class="ncir">6</div><div class="ntxt"><strong>Write your industry experience like it matters</strong>Internships, co-ops, and full-time roles are a differentiator for PhD candidates. Dates-only entries are worse than omitting them. Every industry role needs bullets.</div></li>
      </ol>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════
       SLIDE 19 — LIVE DEMO INTRO'''

DEMO_INTRO_OLD = '''  <!-- ══════════════════════════════════════════════════════
       SLIDE 18 — LIVE DEMO INTRO'''

DEMO_INTRO_NEW = SIX_CHANGES_INSERT

# We're replacing the comment marker only so we can insert before it
# but we need to keep the original slide 18. So we prepend the six-changes block.
count_18 = content.count(DEMO_INTRO_OLD)
if count_18 == 0:
    errors.append("NOT FOUND: demo intro marker for 6-changes insertion")
elif count_18 > 1:
    errors.append(f"AMBIGUOUS ({count_18} matches): demo intro marker")
else:
    content = content.replace(DEMO_INTRO_OLD, DEMO_INTRO_NEW, 1)
    replacements_done.append("Insert 6 Highest-Impact Changes before demo intro (slide 18)")


# ══════════════════════════════════════════════════════════════
# Add bar-red CSS if not present (the bar chart uses it in slide 14)
# ══════════════════════════════════════════════════════════════
if '.bar-red' not in content:
    old_css = '.bar-amber { background: linear-gradient(90deg,#f59e0b,#d97706); }'
    new_css = '''.bar-amber { background: linear-gradient(90deg,#f59e0b,#d97706); }
    .bar-red { background: linear-gradient(90deg,#ef4444,#dc2626); }'''
    if content.count(old_css) == 1:
        content = content.replace(old_css, new_css)
        replacements_done.append("Add .bar-red CSS")
    else:
        # Try alternate CSS pattern
        alt_css = '.bar-amber{'
        if alt_css in content:
            errors.append("bar-red CSS: found non-spaced amber rule, skipping auto-add (manual check needed)")
        else:
            errors.append("bar-red CSS: could not find amber rule to anchor insertion")

if '.bg-red' not in content:
    old_badge = '.bg-amber { background:#fef3c7; color:#92400e; }'
    new_badge = '''.bg-amber { background:#fef3c7; color:#92400e; }
    .bg-red { background:#fee2e2; color:#991b1b; }'''
    if content.count(old_badge) == 1:
        content = content.replace(old_badge, new_badge)
        replacements_done.append("Add .bg-red CSS")
    else:
        errors.append("bg-red CSS badge: could not find amber badge rule")

# ══════════════════════════════════════════════════════════════
# Write output
# ══════════════════════════════════════════════════════════════
with open(FILEPATH, 'w', encoding='utf-8') as fh:
    fh.write(content)

print(f"Original size: {original_len} chars")
print(f"New size:      {len(content)} chars")
print(f"\nReplacements done ({len(replacements_done)}):")
for r in replacements_done:
    print(f"  OK  {r}")

if errors:
    print(f"\nErrors ({len(errors)}):")
    for e in errors:
        print(f"  !!  {e}")
    sys.exit(1)
else:
    print("\nAll replacements successful.")
