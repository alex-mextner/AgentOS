// Register views: claims, experiments, sources, risks — sourced from portal/data/*.json (derived from engineering-bible/registers)
let REG={claims:null,experiments:null,sources:null,risks:null};
async function loadReg(name){if(REG[name])return REG[name];try{REG[name]=await fetch(`data/${name}.json`,{cache:'no-store'}).then(r=>r.json())}catch(e){REG[name]=[]}return REG[name]}

function regTable(title,eyebrow,rows,cols,searchPlaceholder){
  app.innerHTML=`${workspaceHead(eyebrow,title,`Derived from the canonical registers in engineering-bible/registers. GitHub is the editable source.`,`<a class="btn" href="${gh('/tree/main/engineering-bible/registers')}">Registers ↗</a>`)}
  <div class="toolbar"><input class="field search" id="rq" placeholder="${searchPlaceholder}"></div>
  <p id="rcount" class="muted"></p>
  <div class="table-wrap"><table class="task-table"><thead><tr>${cols.map(c=>`<th>${esc(c.label)}</th>`).join('')}</tr></thead><tbody id="rrows"></tbody></table></div>`;
  const draw=q=>{const xs=rows.filter(r=>!q||Object.values(r).join(' ').toLowerCase().includes(q.toLowerCase()));
    document.querySelector('#rcount').textContent=`${xs.length} of ${rows.length}`;
    document.querySelector('#rrows').innerHTML=xs.map(r=>`<tr>${cols.map(c=>`<td class="${c.mono?'mono tiny':''}">${c.link?`<a href="${gh('/blob/main/engineering-bible/docs/'+ (r[c.docKey]||'').replace(/^AOS-/,'').toLowerCase())}">${esc(r[c.key]||'')}</a>`:esc(r[c.key]||'')}</td>`).join('')}</tr>`).join('')||`<tr><td colspan="${cols.length}"><div class="status">No matches.</div></td></tr>`};
  document.querySelector('#rq').oninput=e=>draw(e.target.value);draw('');
}

async function claimsView(){nav('claims');const rows=await loadReg('claims');regTable('Claims','Falsifiable claims register',rows,[
  {label:'ID',key:'claim_id',mono:1},{label:'Statement',key:'statement'},{label:'Type',key:'type'},{label:'Evidence status',key:'evidence_status'},{label:'Experiments',key:'linked_experiments',mono:1},{label:'Gates',key:'gates',mono:1},{label:'Source',key:'source_doc',mono:1}],'Search claims…')}
async function experimentsView(){nav('experiments');const rows=await loadReg('experiments');const cols=Object.keys(rows[0]||{}).map(k=>({label:k.replace(/_/g,' '),key:k,mono:k.includes('id')}));regTable('Experiments','Experiment register',rows,cols,'Search experiments…')}
async function sourcesView(){nav('sources');const rows=await loadReg('sources');regTable('Sources','Normalized source digests',rows,[
  {label:'ID',key:'source_id',mono:1},{label:'Title',key:'title'},{label:'Status',key:'status'},{label:'File',key:'file',mono:1}],'Search sources…')}
async function risksView(){nav('risks');const rows=await loadReg('risks');regTable('Risks','Risks & open questions',rows,[
  {label:'Source doc',key:'source_doc_id',mono:1},{label:'Risk or open question',key:'risk_or_open_question'},{label:'File',key:'file',mono:1}],'Search risks…')}

function glossaryView(){nav('glossary');app.innerHTML=`${workspaceHead('Terminology','Glossary','The canonical glossary renders from the bible.',`<a class="btn" href="${gh('/blob/main/engineering-bible/docs/glossary/AOS-GLOSSARY.md')}">Source ↗</a>`)}<article class="markdown" id="gloss">Loading…</article>`;fetch(raw('engineering-bible/docs/glossary/AOS-GLOSSARY.md'),{cache:'no-store'}).then(r=>r.text()).then(t=>{document.querySelector('#gloss').innerHTML=window.marked?marked.parse(t.replace(/^---[\s\S]*?---\s*/,'')):`<pre>${esc(t)}</pre>`}).catch(e=>{document.querySelector('#gloss').innerHTML=`<div class="status error">Could not load glossary: ${esc(e.message)}</div>`})}

function decisionsView(){nav('decisions');const decs=DOCS.filter(d=>d.category==='decisions'||/ADR-/.test(d.id));app.innerHTML=`${workspaceHead('Architecture Decision Records','Decisions','Every ADR that freezes a high-cost choice, with its reversal conditions.',`<a class="btn" href="${gh('/tree/main/engineering-bible/docs/decisions')}">Source ↗</a>`)}<div class="grid">${decs.map(d=>`<a class="item" href="#wiki/${encodeURIComponent(d.id)}"><span class="id">${esc(d.id)}</span><h3>${esc(d.title)}</h3><p class="muted">${esc(d.status||'')}</p></a>`).join('')||'<div class="status">No decisions loaded.</div>'}</div>`}
