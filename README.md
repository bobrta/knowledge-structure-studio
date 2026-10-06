# Knowledge Structure Studio｜知識結構工作室

把課程、講義與知識內容轉成可互動的學習視覺化。

## v1.0 功能

目前內建 8 種學習專用結構：

1. Concept Map｜概念圖
2. Cause–Effect Chain｜因果鏈
3. Decision Tree｜決策樹
4. Comparison Matrix｜比較矩陣
5. Process Flow｜流程 / SOP
6. Formula Map｜公式關係圖
7. Hierarchy Map｜層級分類圖
8. Exam Overview｜考前總覽

## 使用方式

直接開啟 `index.html`。

左側可選模板，也可以把 AI 產生的 JSON 貼到輸入區，按「產生圖形」。

支援：
- 畫布拖曳
- 滾輪縮放
- 點擊節點查看說明
- 匯出 SVG
- 匯出 PNG
- 儲存 JSON
- 複製 AI 提示詞

## 專案定位

這不是一般資料圖表工具，而是針對學習與知識結構化設計的視覺工作台。

未來預計加入：
- Product–Process Matrix
- P-Q Analysis
- 易錯對照圖
- 前置知識圖
- 知識依賴圖
- 可視化關係編輯器
- 節點新增 / 刪除 / 拖曳
- JSON Schema 驗證
- 課程專用模板庫

## 檔案

- `index.html`：主介面
- `styles.css`：介面樣式
- `templates.js`：8 種學習模板與示範
- `app.js`：渲染、縮放、匯出與互動邏輯

## 授權

MIT License
