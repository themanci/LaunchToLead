/**
 * LaunchToLead — IBB Bullet Auditor
 * Cloudflare Worker
 *
 * SETUP:
 * 1. Go to https://workers.cloudflare.com/ → Create a Worker
 * 2. Paste this entire file into the editor and Save
 * 3. Go to Settings → Variables → add a Secret named ANTHROPIC_API_KEY
 * 4. Copy the Worker URL (e.g. https://ibb-auditor.YOUR_SUBDOMAIN.workers.dev)
 * 5. Paste that URL into free/index.html replacing YOUR_CLOUDFLARE_WORKER_URL_HERE
 * 6. Add a Rate Limiting rule in Cloudflare dashboard: max 10 requests/minute per IP
 */

const ALLOWED_ORIGINS = [
  'https://launchtolead.io',
  'http://localhost:8002',
  'http://127.0.0.1:8002',
];

const SYSTEM_PROMPT = `You are the IBB (Impact Bullet Builder) audit engine for LaunchToLead, an engineering career coaching program. Analyze each resume bullet using the Accomplishment + Metric + How + Why formula. Return ONLY raw JSON — no markdown, no prose, no code blocks, no explanation.

THE FORMULA — every strong bullet has all four:
- Accomplishment: What did THEY specifically do? Must use a strong action verb. Never "responsible for." Never "we."
- Metric: A real number — %, $, count, time, units, scale. If missing, use [X] as a placeholder.
- How: The specific tool, technology, or method used (Python, Six Sigma, ANSYS, Agile, SQL, MATLAB, etc.).
- Why: The business outcome a CEO/VP cares about — cost saved, downtime reduced, defect rate, on-time delivery, revenue, compliance, warranty claims, headcount freed.

THREE TIERS:
1 = "★ You Did What Was Asked" — Duty language, no accomplishment, no metric, anyone with this title could write it. Gets skipped by hiring managers.
2 = "★★ You Went Above and Beyond" — Real accomplishment, some specifics, but missing the full impact chain. Gets considered.
3 = "★★★ You Spread the Impact Far and Wide" — All four components present, impact reaches beyond the individual. Gets hired.

COMPONENT SCORING:
accomplishment.present = FALSE if starts with: "Responsible for", "Duties included", "Assisted with", "Helped with", "Contributed to", "Supported", "Involved in", "Participated in", or uses "we/team/group/our" without isolating the candidate's individual role.
accomplishment.present = TRUE if: strong action verb + describes what they personally did.

metric.present = FALSE if: no quantitative number at all (no %, no $, no count, no time delta, no scale).
metric.present = TRUE if: contains a specific number.
If metric is missing, note MUST include what type of metric fits (e.g., "Add [X]% defect reduction or $[X] annual cost savings").

how.present = FALSE if: no specific tool, language, framework, methodology, or technical approach named.
how.present = TRUE if: specific technical or methodological approach named.

why.present = FALSE if: outcome only affects the candidate's immediate task. "So what?" can still be asked.
why.present = TRUE if: business-level outcome named that a VP/CEO measures.

PRINCIPLES — flag any violations in issues[]:
- Banned openers (Responsible for / Helped / Assisted / etc.) → "Banned opener: starts with '[word]'"
- "we/team/our" without personal ownership → "No personal ownership — specify your individual role"
- Vague claims without proof ("streamlined", "improved", "optimized", "enhanced" with no metric) → "BS Meter: vague claim — interviewer will probe this"
- Tools only in Skills section, not shown in use → "Skills not demonstrated in context"

interview_flag: ONLY include this field if BS Meter triggers. State exactly what claim is vague and what an interviewer will ask. Example: "You claim you 'streamlined the process' — an interviewer will ask 'By how much? How do you know?' You need a specific number or before/after comparison ready."

REWRITE RULES:
1. Start with a strong action verb: Engineered, Designed, Built, Automated, Reduced, Accelerated, Architected, Led, Shipped, Deployed, Optimized, Eliminated, Migrated, Implemented, Launched, Developed, Spearheaded, Restructured
2. Include the How — name the specific tool or method
3. Include Metric — use [X] if real number unknown. Add: "(replace [X] with your actual figure)"
4. Include Why — use engineer-specific language: downtime cost, scrap/defect rate, cycle time, $/year saved, units shipped, warranty claims, on-time delivery rate, regulatory compliance
5. CRITICAL: NEVER invent or guess any number. Use [X] always for unknowns.
6. Keep to 1-2 lines, past tense.

pattern_note: After analyzing all bullets, write 2-3 sentences. State what pattern these bullets reveal (the common missing elements across all of them). Then name what a single-bullet tool cannot solve: the other 10-15 bullets they haven't checked, the interview stories that cannot live on a resume, and the full IBB audit that uncovers the pattern systematically. End with something honest about the scope of the remaining work — not salesy, just accurate.

Return ONLY this JSON structure — nothing else:
{
  "bullets": [
    {
      "original": "exact text submitted",
      "tier": 2,
      "tier_label": "★★ You Went Above and Beyond",
      "components": {
        "accomplishment": { "present": true, "note": "One sentence of specific feedback" },
        "metric": { "present": false, "note": "Specific feedback — add [X]% or $[X] for [what]" },
        "how": { "present": true, "note": "One sentence of specific feedback" },
        "why": { "present": false, "note": "One sentence of specific feedback" }
      },
      "issues": ["Specific issue phrased as an action item"],
      "rewrite": "Engineered [thing] using [tool], reducing [metric] by [X]% and saving $[X]/year in [outcome] (replace [X] with your actual figure)",
      "interview_flag": "Only include if BS Meter triggered — omit this field entirely otherwise"
    }
  ],
  "pattern_note": "2-3 sentence bridge paragraph about what these bullets reveal and what remains."
}`;

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405, origin);
    }

    // Parse body
    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: 'Invalid request body' }, 400, origin);
    }

    const { bullets } = body || {};

    if (!Array.isArray(bullets) || bullets.length === 0) {
      return jsonResponse({ error: 'Provide at least one bullet' }, 400, origin);
    }

    // Sanitize: max 3 bullets, max 600 chars each, min 10 chars
    const sanitized = bullets
      .slice(0, 3)
      .map(b => String(b || '').trim().slice(0, 600))
      .filter(b => b.length >= 10);

    if (sanitized.length === 0) {
      return jsonResponse({ error: 'Bullets are too short. Paste your actual resume bullet.' }, 400, origin);
    }

    const userContent = sanitized
      .map((b, i) => `Bullet ${i + 1}: ${b}`)
      .join('\n\n');

    try {
      const anthropicResp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-3-5-haiku-20241022',
          max_tokens: 2048,
          system: SYSTEM_PROMPT,
          messages: [{ role: 'user', content: userContent }],
        }),
      });

      if (!anthropicResp.ok) {
        const errText = await anthropicResp.text();
        console.error('Anthropic error:', anthropicResp.status, errText);
        return jsonResponse({ error: 'Audit service temporarily unavailable. Please try again.' }, 502, origin);
      }

      const anthropicData = await anthropicResp.json();
      const rawText = anthropicData?.content?.[0]?.text || '';

      // Parse JSON — handle case where model wraps in markdown code block
      let parsed;
      try {
        parsed = JSON.parse(rawText);
      } catch {
        const match = rawText.match(/\{[\s\S]*\}/);
        if (match) {
          parsed = JSON.parse(match[0]);
        } else {
          console.error('Could not parse model output:', rawText.slice(0, 500));
          throw new Error('Model returned non-JSON output');
        }
      }

      return jsonResponse(parsed, 200, origin);

    } catch (err) {
      console.error('Worker error:', err?.message || err);
      return jsonResponse({ error: 'Something went wrong. Please try again in a moment.' }, 500, origin);
    }
  },
};

function corsHeaders(origin) {
  const allowOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function jsonResponse(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(origin || ''),
    },
  });
}
