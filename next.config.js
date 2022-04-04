const path = require('path');
const { webpack } = require('webpack');
const Dotenv = require('dotenv-webpack');
module.exports = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, './pages')],
  },
  webpack: config => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
};
