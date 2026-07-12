const repoCandidates=['alex-mextner/AgentOS','alex-mextner/HyperOS'];let REPO=repoCandidates[0];
let TASKS=[],ISSUES=[],DOCS=[],selectedTask=null,ganttInstance=null,draftSchedule=JSON.parse(localStorage.getItem('aos-schedule-drafts')||'{}');
const app=document.querySelector('#app'),modal=document.querySelector('#modal'),modalBody=document.querySelector('#modal-body');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const split=s=>String(s||'').split(/[;\n]/).map(x=>x.trim()).filter(Boolean);const taskIdFromIssue=x=>(String(x.title).match(/\[(AOS-[A-Z0-9-]+)\]/)||[])[1]||'';
const gh=path=>`https://github.com/${REPO}${path||''}`;const raw=path=>`https://raw.githubusercontent.com/${REPO}/main/${path}`;
async function resolveRepo(){for(const r of repoCandidates){try{const x=await fetch('https://api.github.com/repos/'+r);if(x.ok){REPO=r;break}}catch{}}document.querySelector('#repo-link').href=gh('')}
async function loadTasks(){const idx=await fetch(raw('data/index.json'),{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('task index '+r.status);return r.json()});const parts=await Promise.all(idx.shards.map(s=>fetch(raw(s.file.replace(/^\//,'')),{cache:'no-store'}).then(r=>r.json())));TASKS=parts.flatMap(x=>x.tasks);return idx}
async function loadIssues(){let out=[];for(let p=1;p<=5;p++){const r=await fetch(`https://api.github.com/repos/${REPO}/issues?state=all&per_page=100&page=${p}`);if(!r.ok)break;const x=(await r.json()).filter(i=>!i.pull_request);out.push(...x);if(x.length<100)break}ISSUES=out}
async function loadDocs(){const r=await fetch(raw('data/docs-index.json'),{cache:'no-store'});if(r.ok)DOCS=(await r.json()).documents;else DOCS=[]}
async function boot(){await resolveRepo();await Promise.allSettled([loadTasks(),loadIssues(),loadDocs()]);route()}
function nav(v){document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('on',a.hash==='#'+v))}
function issueMap(){return new Map(ISSUES.map(i=>[taskIdFromIssue(i),i]).filter(x=>x[0]))}
function metric(label,value){return `<div class="metric"><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`}
