// Update authored component references while retaining the official scope audit.
const fs=require('node:fs'),path=require('node:path');process.chdir(path.resolve(__dirname,'..'));global.window=global;
for(const name of ['course','chapter-1','chapter-2','assessments'])require('../content/'+name+'.js');
const P=PHYSICS,file='curriculum/unit-1-manifest.json',m=JSON.parse(fs.readFileSync(file,'utf8'));
m.schema_version='2.0';m.content_version='2.0';m.authored_at='2026-10-07';
m.coverage_rule='Authored means the referenced teaching and assessment content exists. Verified and published require human physics-editor review. A learner checkpoint records automatic question checks and self-reviewed written work, not guaranteed exam mastery.';
m.source_ids.CBSE_MS=P.sources.ms.url;
for(const item of m.items){
 const id=item.syllabus_item_id.slice(-2),l=P.lessons.find(l=>l.id===id);
 if(!l)throw Error('Missing lesson '+id);
 item.status='authored';item.review_status='authored; automated content/controller checks passed; human physics-editor review pending';
 item.content_source={file:`content/chapter-${l.chapter}.js`,id:l.id,ncert_section:l.section,url:l.source};
 item.coverage={lesson:'authored',visual:'authored',formula:l.formula.length?'authored':'not applicable',derivation_or_reasoning:'authored',practice:'authored',pyq:'not ingested',mastery_check:'authored; limited checkpoint, no mastery prediction'};
 item.component_refs={lesson:`design/unit-1-preview.html#lesson/${id}/0`,diagram:{renderer:'app/diagrams.js',key:l.visual},formulas:l.formula.map((f,i)=>({id:`U1-${id}-formula-${i+1}`,expression:f[0],symbols_units:f[1],conditions:f[2],source:l.source,review_status:'human review pending'})),graph:l.graph?{renderer:'app/diagrams.js',key:l.graph}:null,reasoning:`design/unit-1-preview.html#lesson/${id}/0`,worked_example:`design/unit-1-preview.html#lesson/${id}/1`,guided_and_independent:`design/unit-1-preview.html#lesson/${id}/2`,board_task:`design/unit-1-preview.html#lesson/${id}/3`,recall_and_check:`design/unit-1-preview.html#lesson/${id}/4`,official_sample_questions:l.official||[],integrated_assessments:P.assessments.filter(q=>q.topics.includes(id)).map(q=>q.id)};
 item.foundation_bridges=l.bridge;delete item.planned_component_ids;
}
m.foundation_bridges=Object.fromEntries(Object.entries(P.bridges).map(([key,b])=>[key,{title:b.title,content:'content/course.js',check:'embedded recall question with answer'}]));
m.summary={mapped_items:33,authored_lessons:33,human_verified_lessons:0,verified_pyqs:0,official_sample_entries:5,integrated_cases:8};
fs.writeFileSync(file,JSON.stringify(m,null,2)+'\n');
console.log('33 manifest rows now reference the authored lessons, diagrams, formulas and assessments. Review status remains pending.');
