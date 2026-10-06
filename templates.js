const KSS_TEMPLATES=[
  {
    id:'concept_map',
    label:'概念圖',
    desc:'概念＋關係詞',
    data:{
      type:'concept_map',
      title:'產能規劃',
      nodes:[
        {id:'capacity',title:'產能規劃',description:'決定設備、人員與相關資源。'},
        {id:'design',title:'設計產能',description:'理想條件下的最大產出率。'},
        {id:'effective',title:'有效產能',description:'扣除維修、休息、排程等正常限制。'},
        {id:'actual',title:'實際產出',description:'實際達成的產出水準。'}
      ],
      relations:[
        {from:'capacity',to:'design',label:'包含'},
        {from:'design',to:'effective',label:'扣除正常限制後'},
        {from:'effective',to:'actual',label:'受故障/缺料等影響'}
      ]
    }
  },
  {
    id:'cause_effect',label:'因果鏈',desc:'原因 → 結果',
    data:{type:'cause_effect',title:'SMED 與大量客製化',steps:[
      {title:'產品多樣性提高',description:'需要更高生產彈性。'},
      {title:'換線需求增加',description:'改機與換線造成產能損失。'},
      {title:'導入 SMED',description:'縮短整備/換模時間。'},
      {title:'產能損失下降',description:'利用率與生產力提升。'},
      {title:'大量客製化',description:'兼顧彈性與較高效率。'}
    ]}
  },
  {
    id:'decision_tree',label:'決策樹',desc:'Yes / No 判斷',
    data:{type:'decision_tree',title:'自製或外購',root:{title:'此零件買得到嗎？',description:'先判斷供應市場。',yes:{title:'能自製嗎？',yes:{title:'自製比外購便宜嗎？',yes:{title:'有足夠資金嗎？',yes:{title:'自製'},no:{title:'外購'}},no:{title:'外購'}},no:{title:'外購'}},no:{title:'自製'}}}
  },
  {
    id:'comparison_matrix',label:'比較矩陣',desc:'多方案並排比較',
    data:{type:'comparison_matrix',title:'五大製程路徑比較',columns:['零工式','批量式','組裝線','連續式'],rows:[
      {label:'產品型態',values:['高度客製','半標準化','標準化','高度標準化']},
      {label:'產量',values:['低','中','高','極高']},
      {label:'彈性',values:['最高','高','低','最低']},
      {label:'生產力',values:['低','中','中高','高']}
    ]}
  },
  {
    id:'process_flow',label:'流程圖',desc:'步驟與 SOP',
    data:{type:'process_flow',title:'生產系統設計流程',steps:[
      {title:'產品設計'},{title:'製程規劃'},{title:'自製或外購'},{title:'產能規劃'},{title:'製程路徑'},{title:'佈置設計'},{title:'工作站設計'}
    ]}
  },
  {
    id:'formula_map',label:'公式關係圖',desc:'公式＋變數＋易錯點',
    data:{type:'formula_map',title:'產能公式',formulas:[
      {name:'效率 Efficiency',formula:'實際產出 ÷ 有效產能 × 100%',note:'看正常條件下能做到多少。'},
      {name:'利用率 Utilization',formula:'實際產出 ÷ 設計產能 × 100%',note:'看理論最大產能用了多少。'}
    ]}
  },
  {
    id:'hierarchy_map',label:'層級分類圖',desc:'分類與階層',
    data:{type:'hierarchy_map',title:'設施佈置類型',root:{title:'設施佈置',children:[
      {title:'固定位置佈置',description:'產品不動，資源移動。'},
      {title:'產品別佈置',description:'依產品流程排列。'},
      {title:'製程別佈置',description:'相同功能設備集中。'},
      {title:'群組/單元佈置',description:'相似產品族集中成 cell。'}
    ]}}
  },
  {
    id:'exam_overview',label:'考前總覽',desc:'一頁濃縮重點',
    data:{type:'exam_overview',title:'第2章考前總覽',sections:[
      {title:'核心概念',items:['設計資訊轉寫','VA / NVA','QCD']},
      {title:'必背公式',items:['效率 = 實際產出 / 有效產能','利用率 = 實際產出 / 設計產能']},
      {title:'製程比較',items:['Job Shop → Batch → Assembly → Continuous']},
      {title:'佈置與 SLP',items:['PQRST','From-To','AEIOUX','SLP 11步']}
    ]}
  }
];
window.KSS_TEMPLATES=KSS_TEMPLATES;
