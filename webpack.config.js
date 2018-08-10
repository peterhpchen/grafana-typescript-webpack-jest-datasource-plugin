const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),  // 入口目錄
  entry: './module.ts', // 入口檔案為module.ts
  output: {
    filename: 'module.js',  // Grafana將module.js視為入口檔案
    libraryTarget: 'amd'  // Grafana是用amd的方式引入外部module
  },
  module: {
    rules: [
      { // 將ts檔轉為js
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  externals: [  // 由sdk mocks引入的module不需要打包，由外部引入即可
    'app/plugins/sdk',
  ],
  plugins: [
    new CopyWebpackPlugin([ // 將靜態檔案複製到目標資料夾中
      './plugin.json',
      './partials/*',
    ]),
  ],
};
