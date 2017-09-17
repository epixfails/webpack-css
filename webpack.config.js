const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  entry: PATHS.source + '/index.js',
  output: {
    path: PATHS.build,
    publicPath: '/build/',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};
