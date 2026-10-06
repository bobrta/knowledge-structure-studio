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
    data:{type:'comparison_matrix',title:'四大製程路徑比較',columns:['零工式','批量式','組裝線','連續式'],rows:[
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
  },
  {
    id:'product_process_matrix',label:'產品－製程矩陣',desc:'產量 × 多樣性 × 製程',
    data:{type:'product_process_matrix',title:'產品－製程矩陣',products:['多樣少量','中量中種類','少樣大量','高度標準大量'],processes:['零工式','批量式','組裝線','連續式'],matches:[0,1,2,3],note:'對角線代表較合理的產品－製程配對。'}
  },
  {
    id:'pq_analysis',label:'P-Q 分析',desc:'產品種類 × 產量',
    data:{type:'pq_analysis',title:'P-Q Analysis',classes:[
      {name:'A類',productVariety:1,quantity:9,layout:'產品/流水線佈置',description:'項目少、產量大。'},
      {name:'B類',productVariety:5,quantity:5,layout:'群組/單元佈置',description:'品種與產量中等。'},
      {name:'C類',productVariety:9,quantity:1,layout:'製程或固定位置佈置',description:'項目多、產量低。'}
    ]}
  },
  {
    id:'mistake_contrast',label:'易錯對照圖',desc:'錯誤 vs 正確',
    data:{type:'mistake_contrast',title:'常見易錯概念',pairs:[
      {wrong:'效率 = 實際產出 / 設計產能',right:'效率 = 實際產出 / 有效產能',tip:'效率看正常可達成的能力。'},
      {wrong:'利用率 = 實際產出 / 有效產能',right:'利用率 = 實際產出 / 設計產能',tip:'利用率看理論最大產能被用了多少。'},
      {wrong:'製程別佈置適合少樣大量',right:'製程別佈置適合多樣少量',tip:'相同功能設備集中，彈性高但搬運路徑長。'}
    ]}
  },
  {
    id:'prerequisite_map',label:'前置知識圖',desc:'先學什麼再學什麼',
    data:{type:'prerequisite_map',title:'章節前置知識',nodes:[
      {id:'qcd',title:'QCD',level:0},{id:'process',title:'製程觀念',level:0},{id:'capacity',title:'產能',level:1},{id:'routing',title:'製程路徑',level:1},{id:'layout',title:'設施佈置',level:2},{id:'slp',title:'SLP',level:3}
    ],relations:[
      {from:'qcd',to:'capacity'},{from:'process',to:'routing'},{from:'capacity',to:'layout'},{from:'routing',to:'layout'},{from:'layout',to:'slp'}
    ]}
  },
  {
    id:'dependency_map',label:'知識依賴圖',desc:'概念之間的依賴',
    data:{type:'dependency_map',title:'生產系統知識依賴',nodes:[
      {id:'design',title:'產品設計'},{id:'planning',title:'製程規劃'},{id:'makebuy',title:'自製/外購'},{id:'capacity',title:'產能規劃'},{id:'routing',title:'製程路徑'},{id:'layout',title:'佈置設計'},{id:'workstation',title:'工作站設計'}
    ],relations:[
      {from:'design',to:'planning',label:'輸入'},{from:'planning',to:'makebuy',label:'決策'},{from:'makebuy',to:'capacity',label:'影響資源'},{from:'capacity',to:'routing',label:'限制'},{from:'routing',to:'layout',label:'決定流動'},{from:'layout',to:'workstation',label:'細化'}
    ]}
  }
];
window.KSS_TEMPLATES=KSS_TEMPLATES;
