const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const fs = require('fs');

fs.writeFileSync('module-c.js', 'export const c = "w123213e";');

function holdTheDevServer () {
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
}

// # log twice
holdTheDevServer();

// # work well
// setTimeout(() => holdTheDevServer(), 1000);