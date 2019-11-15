var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  // watch: true,
  entry: './src/index.js',
  entry: './src/index.html',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
