const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;
const federationConfig = require('./federationConfig');

module.exports = {
  entry: {
    main: path.join(__dirname, '../src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin(federationConfig),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'Cart App',
      filename: 'index.html',
      chunks: ['main'],
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
}; 