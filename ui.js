(()=>{
'use strict';
const $=id=>document.getElementById(id);
const templateMeta={
  concept_map:{tag:'RELATION',desc:'用關係詞連接概念，適合釐清包含、導致、依賴與影響。'},
  cause_effect:{tag:'CAUSE',desc:'沿著原因到結果追蹤機制，適合回答「為什麼會發生」。'},
  decision_tree:{tag:'DECISION',desc:'把判斷條件拆成 Yes / No 路徑，適合決策與條件題。'},
  comparison_matrix:{tag:'COMPARE',desc:'把多個方案放到同一組維度比較，適合分辨容易混淆的概念。'},
  process_flow:{tag:'PROCESS',desc:'把前後順序與步驟排清楚，適合流程、SOP 與生產程序。'},
  formula_map:{tag:'FORMULA',desc:'把公式、分母分子、用途與易錯點放在一起理解。'},
  hierarchy_map:{tag:'CLASSIFY',desc:'從上位概念往下分類，適合種類、層級與包含關係。'},
  exam_overview:{tag:'REVIEW',desc:'把一章壓縮成考前可快速掃描的核心架構。'},
  product_process_matrix:{tag:'MATRIX',desc:'用兩個維度看配對關係，適合產品多樣性與製程結構。'},
  pq_analysis:{tag:'ANALYSIS',desc:'用產品種類與產量判斷較適合的佈置方式。'},
  mistake_contrast:{tag:'ERROR',desc:'把常見錯誤與正確判斷並排，適合考前防混淆。'},
  prerequisite_map:{tag:'PREREQ',desc:'先看哪些概念要先會，再安排學習順序。'},
  dependency_map:{tag:'DEPEND',desc:'看知識之間如何互相依賴與限制，適合建立章節全局。'}
};

function selectedTemplate(){
  const active=document.querySelector('.template-card.recommended');
  if(active?.dataset.id)return window.KSS_TEMPLATES.find(t=>t.id===active.dataset.id);
  try{
    const type=JSON.parse($('jsonInput').value).type;
    return window.KSS_TEMPLATES.find(t=>t.id===type)||window.KSS_TEMPLATES[0];
  }catch{return window.KSS_TEMPLATES[0]}
}
function refreshViewMeta(template=selectedTemplate()){
  if(!template)return;
  const meta=templateMeta[template.id]||{tag:'LEARN',desc:template.desc};
  $('currentViewName').textContent=template.label;
  $('currentViewTag').textContent=meta.tag;
  $('currentViewDesc').textContent=meta.desc;
  loadViewNote(template.id);
}
function noteKey(id){return `kss-note:${id}`}
function masteryKey(id){return `kss-mastery:${id}`}
function loadViewNote(id){
  $('studyNote').value=localStorage.getItem(noteKey(id))||'';
  const state=localStorage.getItem(masteryKey(id));
  $('masteryStatus').textContent=state==='known'?'已標記：你能自行解釋這個視圖。':state==='review'?'已標記：下次需要再複習。':'';
}

$('templateList').addEventListener('click',e=>{
  const card=e.target.closest('.template-card');
  if(!card)return;
  const t=window.KSS_TEMPLATES.find(x=>x.id===card.dataset.id);
  setTimeout(()=>refreshViewMeta(t),0);
});

$('templateSearch').addEventListener('input',e=>{
  const q=e.target.value.trim().toLowerCase();
  document.querySelectorAll('.template-card').forEach(card=>{
    const t=window.KSS_TEMPLATES.find(x=>x.id===card.dataset.id);
    const text=`${t?.label||''} ${t?.desc||''} ${card.dataset.id||''}`.toLowerCase();
    card.hidden=!!q&&!text.includes(q);
  });
});

$('studyNote').addEventListener('input',()=>{
  const id=selectedTemplate()?.id||'general';
  localStorage.setItem(noteKey(id),$('studyNote').value);
  $('noteStatus').textContent='已自動保存。';
  clearTimeout(window.__kssNoteTimer);
  window.__kssNoteTimer=setTimeout(()=>$('noteStatus').textContent='自動保存在這台瀏覽器。',1400);
});

$('markReviewBtn').onclick=()=>{
  const id=selectedTemplate()?.id||'general';
  localStorage.setItem(masteryKey(id),'review');
  $('masteryStatus').textContent='已標記：下次需要再複習。';
};
$('markKnownBtn').onclick=()=>{
  const id=selectedTemplate()?.id||'general';
  localStorage.setItem(masteryKey(id),'known');
  $('masteryStatus').textContent='已標記：你能自行解釋這個視圖。';
};

$('focusModeBtn').onclick=()=>{
  document.body.classList.toggle('focus-mode');
  const on=document.body.classList.contains('focus-mode');
  $('focusModeBtn').textContent=on?'退出專注':'專注看圖';
  setTimeout(()=>$('fitBtn').click(),100);
};

for(const b of document.querySelectorAll('.nav-item')){
  b.onclick=()=>{
    const el=document.getElementById(b.dataset.target);
    el?.scrollIntoView({behavior:'smooth',block:'start'});
  };
}
const sections=[...document.querySelectorAll('#startSection,#librarySection,#studySection,#advancedSection')];
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible)return;
    document.querySelectorAll('.nav-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.target===visible.target.id));
  },{rootMargin:'-15% 0px -65% 0px',threshold:[0,.15,.4]});
  sections.forEach(s=>observer.observe(s));
}

$('renderBtn').addEventListener('click',()=>setTimeout(refreshViewMeta,0));
$('recommendBtn').addEventListener('click',()=>setTimeout(refreshViewMeta,80));
refreshViewMeta();
})();
