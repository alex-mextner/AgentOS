// Contacts view — project/governance contacts and how to reach the programme.
// Content derived from engineering-bible/docs/governance (AOS-GOV-001..006) and the
// release manifest (AOS-MANIFEST). The corpus is a planning/research foundation and
// publishes governance BODIES, not individual emails; concrete channels are marked
// placeholder until governance opens them (see AOS-GOV-005 community launch).
const CONTACT_BODIES=[
  ['Agent OS Architecture Council','Owns the technical baseline: architecture, hardware portfolio, release manifest and normative specifications.','AOS-MANIFEST'],
  ['Project Governance Council','Owns decisions, contributions, funding, security disclosure, partnerships and public claims.','AOS-GOV-001'],
];
const CONTACT_CHANNELS=[
  ['Source & issues (non-security)','GitHub is the editable source of record. Open an issue for tasks, questions, corrections or discussion. Do not post security vulnerabilities here.','Issues','/issues'],
  ['Contribution & community','How ownership, review, conflict-of-interest, licensing and evidence policies work before broad recruitment.','AOS-GOV-002','wiki/AOS-GOV-002'],
  ['Security disclosure','Report privately via GitHub private vulnerability reporting or the repository Security tab — never in a public issue. See SECURITY.md and AOS-GOV-004.','SECURITY.md','/security/advisories/new'],
  ['Funding, grants & bounties','Scoped bounties for reproducible outputs rather than vague subsystem completion.','AOS-GOV-003','wiki/AOS-GOV-003'],
  ['Partnerships & vendor contact','Playbook for contacting vendors, researchers, counsel, labs and standards bodies with precise asks.','AOS-GOV-006','wiki/AOS-GOV-006'],
  ['Change control','Specification lifecycle and change control governing every normative document.','AOS-GOV-001','wiki/AOS-GOV-001'],
];
function contactChannelHref(c){return c[3].startsWith('wiki/')?`#${c[3]}`:gh(c[3])}
function contactBodies(){return `<div class="landscape-grid">${CONTACT_BODIES.map(b=>`<article><div class="eyebrow">Owner</div><h2>${esc(b[0])}</h2><p>${esc(b[1])}</p><span class="pill"><a href="#wiki/${encodeURIComponent(b[2])}">${esc(b[2])} →</a></span></article>`).join('')}</div>`}
function contactChannels(){return `<div class="portal-paths">${CONTACT_CHANNELS.map(c=>`<a class="path-card" href="${contactChannelHref(c)}"><strong>${esc(c[0])}</strong><span>${esc(c[1])}</span></a>`).join('')}</div>`}
function contacts(){nav('contacts');app.innerHTML=`${workspaceHead('Governance & how to reach us','Contacts','Agent OS is an open, evidence-driven programme. GitHub is the working channel; governance bodies own the decisions. Reach the team through the repository and the governance specifications below.',`<a class="btn primary" href="${gh('/issues/new')}">Open an issue ↗</a> <a class="btn" href="${gh('')}">Repository ↗</a>`)}
<p class="status">Placeholder notice: the corpus is a planning and research foundation. It names governance <em>bodies</em> (Architecture Council, Governance Council) but does not yet publish individual names or email addresses. For non-security matters, use GitHub Issues and the linked governance documents until governance opens dedicated channels (AOS-GOV-005 · Community Launch). The working name "Agent OS" is not trademark-cleared.</p>
<p class="status error"><strong>Security:</strong> report vulnerabilities <strong>privately</strong> — use <a href="${gh('/security/advisories/new')}">GitHub private vulnerability reporting ↗</a> or the repository <a href="${gh('/security')}">Security tab ↗</a>, per <a href="${gh('/blob/main/SECURITY.md')}">SECURITY.md ↗</a> and <a href="#wiki/AOS-GOV-004">AOS-GOV-004</a>. Never post an unpatched vulnerability in a public issue.</p>
<section class="section"><div class="section-head"><div class="eyebrow">Who owns what</div><h2>Governance bodies</h2></div>${contactBodies()}</section>
<section class="section"><div class="section-head"><div class="eyebrow">How to reach the programme</div><h2>Channels & governance specifications</h2><p>Every channel below routes through GitHub or a canonical governance document. Each wiki document carries an "Edit on GitHub" action for corrections.</p></div>${contactChannels()}</section>
<section class="section"><div class="section-head"><div class="eyebrow">Edit on GitHub</div><h2>Found something wrong? Propose the change directly.</h2><p>All canonical content lives in <code>engineering-bible/docs/</code> on <a href="${gh('')}">${esc(REPO)}</a>. Open any wiki document and use <strong>Edit on GitHub</strong>, or edit the governance sources directly.</p></div><div class="hero-actions"><a class="btn" href="${gh('/tree/main/engineering-bible/docs/governance')}">Governance sources ↗</a> <a class="btn ghost" href="#wiki">Browse the wiki →</a></div></section>`}
