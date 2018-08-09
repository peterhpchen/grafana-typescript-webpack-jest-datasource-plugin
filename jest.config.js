module.exports = {
  verbose: true,
  // 使用jsdom當測試環境會有SecurityError: localStorage is not available for opaque origins問題，將testURL改成不是about:blank來解決問題
  testURL: "http://localhost/",
  transform: {
    "^.+\\.tsx?$": "ts-jest"  // 使用ts-jest對.ts檔做轉換
  },
  testRegex: "(\\.|/)(jest)\\.(jsx?|tsx?)$",  // 對應所有測試的檔案
  moduleFileExtensions: [ // 專案中module的副檔名，預設沒有ts，要加上
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
};
