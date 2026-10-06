// Offline content and controller checks. This does not launch or emulate a browser renderer.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..');process.chdir(root);let checks=0;
function ok(value,message){assert.ok(value,message);checks++;}
function near(a,b,t=1e-8){ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),`${a} differs from expected ${b}`);}
const handlers={},nodes=new Map(),selected={},storage=new Map();
function node(id){if(!nodes.has(id))nodes.set(id,{id,dataset:{},value:'',innerHTML:'',textContent:'',hidden:false,style:{},classList:{toggle(){},remove(){},add(){}},setAttribute(){},getAttribute(){},focus(){}});return nodes.get(id);}
const doc={getElementById:node,querySelectorAll:()=>[],querySelector(sel){if(sel==='.menu-toggle')return node('menu-toggle');const match=sel.match(/input\[name="([^"]+)"\]:checked/);return match&&selected[match[1]]!==undefined?{value:String(selected[match[1]])}:null;},addEventListener:(name,fn)=>(handlers[name]??=[]).push(fn),body:{classList:{toggle(){return true},remove(){}}}};
const sandbox={console,document:doc,location:{hash:'#course'},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},setTimeout:()=>0,clearTimeout(){},scrollY:0,scrollTo(){},addEventListener:(name,fn)=>(handlers[name]??=[]).push(fn)};sandbox.window=sandbox;vm.createContext(sandbox);
for(const file of ['content/course.js','content/chapter-1.js','content/chapter-2.js','content/assessments.js','app/diagrams.js','app/course.js'])vm.runInContext(fs.readFileSync(file,'utf8'),sandbox,{filename:file});
const P=sandbox.PHYSICS,L=P.lessons,F=sandbox.Fieldwork;
ok(L.length===33,'33 lessons');ok(new Set(L.map(l=>l.id)).size===33,'Unique IDs');ok(L.filter(l=>l.chapter===1).length===17,'17 Chapter 1 topics');ok(L.filter(l=>l.chapter===2).length===16,'16 Chapter 2 topics');
const manifest=JSON.parse(fs.readFileSync('curriculum/unit-1-manifest.json','utf8'));
ok(manifest.items.length===33,'33 syllabus rows');
const meta=['academic_session','board','class','subject_code','unit','chapter','concept','syllabus_status','source','source_version','last_verified_at','review_status'];
for(const l of L){
 ok(l.id===String(L.indexOf(l)+1).padStart(2,'0'),'Sequential IDs');ok(l.board==='CBSE','Board metadata cannot be overwritten by practice data');
 for(const k of meta)ok(!!l[k],`${l.id} missing metadata ${k}`);
 ok(l.explain.length>=3&&l.explain.every(p=>p.length===2&&p[1].length>130),`${l.id} substantive teaching`);
 for(const field of ['worked','guided','independent','boardTask','check'])for(const k of meta)ok(!!l[field][k],`${l.id} ${field} missing ${k}`);
 ok(l.reasoning.length>=3,`${l.id} reasoning`);ok(l.worked.steps.length>=2,`${l.id} worked solution`);ok(l.independent.solution.length>=2,`${l.id} independent solution`);ok(l.boardTask.points.length>=2,`${l.id} board solution`);
 ok(l.bridge.every(k=>P.bridges[k]),`${l.id} valid bridges`);ok(l.recall.length===2,`${l.id} recall`);ok(l.trap.length===2,`${l.id} misconception`);
 for(const q of [l.guided,l.check]){if(q.options){ok(q.correct>=0&&q.correct<q.options.length,`${l.id} answer in range`);ok(new Set(q.options).size===q.options.length,`${l.id} distinct options`);}else{ok(Number.isFinite(q.answer)&&q.tolerance>=0,`${l.id} numeric answer`);}}
 ok(sandbox.physicsDiagram(l.visual).includes('<svg'),`${l.id} diagram exists`);if(l.graph)ok(sandbox.physicsGraph(l.graph).includes('<svg'),`${l.id} graph exists`);
 for(const f of l.formula)ok(f.length===3&&f.every(Boolean),`${l.id} formula with units and conditions`);
 ok(manifest.items.some(m=>m.syllabus_item_id.endsWith('-'+l.id)),`${l.id} maps to syllabus`);
 for(const id of l.official||[])ok(P.official.some(q=>q.id===id),`${l.id} official reference exists`);
}
const cases=P.assessments.filter(q=>q.type==='case');ok(cases.length===8,'8 integrated cases');ok(new Set(cases.flatMap(q=>q.topics)).size===33,'Cases map all 33 topics');
for(const q of P.assessments){ok(q.topics.every(id=>L.some(l=>l.id===id)),`${q.id} topics exist`);if(q.type==='case')ok(q.parts.length===4&&q.marks===4,`${q.id} four case parts`);if(q.type==='long')ok(q.points.length===5&&q.marks===5,`${q.id} long answer rubric`);}
for(const c of [1,2]){let qs=F.testQuestions(c);ok(qs.reduce((n,q)=>n+q.marks,0)===20,'Chapter test totals 20');ok(qs.filter(q=>q.options).length===4,'Four automatic MCQs');ok(qs.every(q=>q.chapter===c),'Correct chapter test scope');}
ok(F.bank.length===81,'81 board practice questions');
// Independent recalculations use the problem givens, not the stored answer expression.
const expected={'03':9e9*2e-6*3e-6/.6**2,'05':Math.hypot(6,8),'06':2*.3,'07':.006/3e-6,'08':9e9*4e-9/.4**2,'12':4e-8*5e4,'13':0,'15':2*9e9*2e-9/.2,'17':9e9*4e-9/.2**2,'19':(-2e-6)*(250-100)*1e6,'20':9e9*(-2e-9)/.6,'21':0,'22':2*9e9*1e-9/.3,'23':0,'24':9e9*2e-6*(-3e-6)/.6,'25':2*2e-8*1e5,'28':3,'29':18*6/(3+6),'30':6+9+18,'31':8.85e-12*.02/.002*1e12,'32':2*3*12,'33':.5*4e-6*20**2*1e6};
for(const [id,v] of Object.entries(expected))near(L.find(l=>l.id===id).guided.answer,v);
near(9e9*2e-9*8e-9/.3**2,1.6e-6);near(2e-9/1.6e-19,1.25e10);near(9e9*2e-9*2/.1**2,3600);near(9e9*(2e-9)*(-2e-9)/.2,-1.8e-7);near((20e-6)**2/(2*8e-6),25e-6);near(.5*6e-6*4**2,48e-6);near(3e-8*2e4*.5,3e-4);
// Check far-field approximations against exact dipole formulas at r/a = 1000.
let k=9e9,q=2e-9,a=1e-4,r=.1,p=2*a*q;
near(k*q*(1/(r-a)**2-1/(r+a)**2),2*k*p/r**3,3e-6);near(k*p/(r*r+a*a)**1.5,k*p/r**3,3e-6);
const renderings=[];
function route(hash){sandbox.location.hash=hash;F.render();const html=node('main-content').innerHTML;ok(!/>undefined<|="undefined"|\bNaN\b/.test(html),'No missing content: '+hash);ok(html.includes('<h1>'),'Page heading '+hash);renderings.push({route:hash,html});return html;}
for(const l of L)for(let stage=0;stage<5;stage++)route(`#lesson/${l.id}/${stage}`);
for(const page of ['#course','#coverage','#sources','#test/1','#test/2','#notebook/map/all','#notebook/formulas/all','#notebook/reasoning/all','#notebook/mistakes/all','#notebook/bridges/all'])route(page);
route('#lesson/99/0');
for(const type of ['mcq','ar','2','3','case','5','official'])for(const c of ['all','1','2'])route(`#practice/${type}/${c}`);
function click(action){handlers.click.forEach(fn=>fn({target:{closest:s=>s==='[data-action]'?{dataset:{action}}:null}}));}
function input(id,value){const el=node(id);el.value=value;handlers.input.forEach(fn=>fn({target:el}));}
function change(el){handlers.change.forEach(fn=>fn({target:el}));}
function stored(){return JSON.parse(storage.get('fieldwork-2026-27-v2'));}
// Completion must not be earned by visiting/scrolling pages alone.
ok(L.every(l=>!F.complete(l.id)),'Visits do not complete lessons');
route('#lesson/03/0');click('continue');ok(stored().lessons['03'].read,'Explicit continue records reading');
route('#lesson/03/1');for(let i=0;i<3;i++)click('worked');ok(stored().lessons['03'].worked===3,'Progressive worked solution');
route('#lesson/03/2');node('guided-number').value='0.6';click('guided');ok(!stored().lessons['03'].guided,'Wrong numeric answer fails');node('guided-number').value='1.5e-1';click('guided');ok(stored().lessons['03'].guided,'Scientific notation answer passes');
click('independent');ok(!stored().lessons['03'].independentReveal,'Independent reveal requires attempt');inputDraft('03-independent','The numerator is four times larger and the denominator nine times larger.');click('independent');ok(stored().lessons['03'].independentReveal,'Independent solution after attempt');change({dataset:{independent:'03'},checked:true});
route('#lesson/03/3');click('board');ok(!stored().lessons['03'].boardReveal,'Board solution requires attempt');inputDraft('03-board','Coulomb force is k times the signed charge product along the separation vector, divided by squared distance.');click('board');for(let i=0;i<L[2].boardTask.points.length;i++)change({dataset:{boardpoint:String(i)},checked:true});
route('#lesson/03/4');inputDraft('03-recall','Doubling the separation makes the force one quarter.');click('recall');selected.checkpoint=L[2].check.correct;click('checkpoint');ok(F.complete('03'),'Completion needs all learning and assessment components');
selected.checkpoint=(L[2].check.correct+1)%4;click('checkpoint');ok(!F.complete('03'),'A failed recheck withdraws passed checkpoint');ok(!node('main-content').innerHTML.includes('Topic 03 checkpoint passed.'),'Passed banner removed after failed recheck');
route('#lesson/13/0');input('lab-angle','90');ok(node('angle-result').textContent.includes('0.00'),'Flux at ninety degrees is zero');input('lab-angle','180');ok(node('angle-result').textContent.includes('-6.00'),'Flux sign at 180 degrees');
route('#lesson/32/0');node('lab-connection').value='isolated';input('lab-k','3');ok(node('k-result').textContent.includes('Q = 24 μC · V = 4 V'),'Dielectric fixed charge');node('lab-connection').value='connected';input('lab-k','3');ok(node('k-result').textContent.includes('Q = 72 μC · V = 12 V'),'Dielectric fixed voltage');
route('#test/1');click('submit-test');ok(!stored().tests['1']?.submitted,'Test cannot submit unanswered questions');
for(const question of F.testQuestions(1)){if(question.options)change({name:'test-'+question.id,value:String(question.correct),dataset:{}});else change({dataset:{paper:'test-'+question.id},checked:true});}click('submit-test');ok(stored().tests['1'].submitted,'Attempted test submits');ok(F.testScore(1).includes('MCQ: 4/4'),'Automatic MCQ scoring');
for(const question of F.testQuestions(1).filter(q=>!q.options))change({dataset:{testmark:question.id},value:String(question.marks)});ok(F.testScore(1).includes('Combined: 20/20'),'Manual written score is separate and adds correctly');
// Invalid replacement marks must not leave an old higher score in storage.
const writtenQuestion=F.testQuestions(1).find(q=>!q.options);change({dataset:{testmark:writtenQuestion.id},value:'99'});ok(stored().tests['1'].marks[writtenQuestion.id]===undefined,'Invalid written mark clears stale score');
route('#course');input('concept-search','gaussian theorem');ok(node('course-menu').innerHTML.includes('Gauss’s theorem'),'Search accepts gaussian theorem');input('concept-search','why capacitor series');ok(node('course-menu').innerHTML.includes('Capacitors in series'),'Search handles a natural question');input('concept-search','');
// Recreate the controller from persisted storage; no DOM renderer is used.
vm.runInContext(fs.readFileSync('app/course.js','utf8'),sandbox);ok(stored().drafts['03-board'].includes('Coulomb'),'Draft survives controller reload');ok(sandbox.Fieldwork.testScore(1).includes('MCQ: 4/4'),'Checked responses survive reload');
near(F.parseNumber('−0.09'),-.09);near(F.parseNumber('2e-3'),.002);ok(Number.isNaN(F.parseNumber('')),'Blank is not zero');ok(Number.isNaN(F.parseNumber('0 N')),'Reject unparsed unit text');ok(Number.isNaN(F.parseNumber('Infinity')),'Reject nonfinite input');
function inputDraft(key,value){handlers.input.forEach(fn=>fn({target:{dataset:{draft:key},value}}));}
fs.writeFileSync('/tmp/fieldwork-renderings.json',JSON.stringify(renderings));
const report={date:'2026-10-07',checks,lessons:33,chapter1:17,chapter2:16,worked_examples:33,guided_questions:33,independent_problems:33,board_tasks:33,recall_prompts:33,concept_mcqs:33,case_studies:8,long_integrated_questions:4,assertion_reason_questions:3,bank_questions:81,rendered_routes:renderings.length,chapter_tests:2,numeric_guided_answers_recalculated:Object.keys(expected).length,human_review:'pending',browser_visual_review:'not performed; restricted local-file navigation',scope:'Unit I only; original authored teaching and practice based on official sources'};
fs.writeFileSync('research/validation-report.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
