module.exports = {
  verbose: true,
  testURL: "http://localhost/", // 使用jsdom當測試環境會有localStorage問題，將testURL改成不是about:blank來解決問題
  moduleNameMapper: {
    'app/plugins/sdk': '<rootDir>/node_modules/grafana-sdk-mocks/app/plugins/sdk.ts', // TypeScript的Triple-Slash參考需要用Mapper讓jest知道怎麼對應
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!grafana-sdk-mocks)', // TypeScript的module不能被轉換，否則會轉換錯誤
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"  // 使用ts-jest對.ts檔做轉換
  },
  testRegex: "(\\.|/)(jest)\\.(jsx?|tsx?)$",  // 對應所有測試的檔案
  moduleFileExtensions: [ // 專案中module的副檔名，要加上ts
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
};
