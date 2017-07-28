const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    site : './public/site.scss'
  },
  output: {
    path: resolve(__dirname, 'public'),
    //publicPath : '/dist/',
    filename: '[name].css'
  },
  module: {
    rules: [
      {test: /\.js$/,exclude: /node_modules/,use: ['babel-loader']},
      {test: /\.html$/,use: 'html-loader'},
      {test: /\.css$/,use: ExtractTextPlugin.extract({use: ['css-loader?minimize', 'autoprefixer-loader'],fallback: 'style-loader'})},
      {test: /\.scss$/,use: ExtractTextPlugin.extract({use:[ 'css-loader','sass-loader'],fallback: 'style-loader',})},
      {test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,use: [{loader: 'url-loader',options: {limit: 10000}}]},
      {test: /\.vue$/,loader: 'vue-loader',options: {loaders: {less: ExtractTextPlugin.extract({use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],fallback: 'vue-style-loader'}),css: ExtractTextPlugin.extract({use: ['css-loader', 'autoprefixer-loader', 'less-loader'],fallback: 'vue-style-loader'})}}}
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({template: './src/template/index.html'}),
    new ExtractTextPlugin({filename: '[name].css',allChunks: true}), 
  ],
  devServer: {
    port: 8100,
    historyApiFallback: true
  }
}