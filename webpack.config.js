var path = require('path');

module.exports = {
  entry: './app/app_entrypoint.js',
  module: {
    rules: [
      {
        // handles: web components with typescript inside. <link rel="import" href="path.html"> and import 'path.html';
        test: /\/.+\.html$/,
        loader: 'babel-loader!wc-loader?minify=true'
      },
      {
        // handles: js files. <script src="path.js"></script> and import 'path';
        test: /app\/\.js$/,
        loader: 'babel-loader'
      },
      {
        // handles: assets. eg <img src="path.png">
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/bundles')
  }
};
