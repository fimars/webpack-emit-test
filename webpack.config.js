const HtmlWebpackPlugin = require('html-webpack-plugin');
const HMRPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const path = require('path');

module.exports = {
  mode: "development",
  context: __dirname,
  entry: './main.js',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'index.html'),
      title: 'ta ta ta'
    }),
    new HMRPlugin()
  ],
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    }
  }
}