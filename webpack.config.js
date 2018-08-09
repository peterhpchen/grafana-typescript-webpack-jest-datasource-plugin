const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),  // 入口目錄
  entry: './module.ts', // 入口檔案為module.ts
  output: {
    filename: 'module.js',  // Grafana將module.js視為入口檔案
  },
  module: {
    rules: [
      { // 將ts檔轉為js
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([ // 將靜態檔案複製到目標資料夾中
      './plugin.json',
    ]),
  ],
};
