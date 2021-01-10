const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist'
  },
  plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};