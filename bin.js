const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const fs = require('fs');

fs.writeFileSync('module-c.js', 'export const c = "asasasasasasasasasasasasasasas";');

const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    colors: true,
  },
});

WebpackDevServer.addDevServerEntrypoints(webpackConfig, devServerOptions);

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8080, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080');
});