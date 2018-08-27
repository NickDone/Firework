const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const WorkboxPlugin=require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool:'inline-source-map',
  mode:"development",
  module:{
    rules:[
      {
        test:/\.ts?$/,
        use:'ts-loader',
        exclude:'/node_modules/'
      }
    ]
  },
  resolve:{
    extensions:['.tsx','.ts','.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({'title':'PWA test'}),
    new webpack.ProvidePlugin({
      _:'lodash'
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim:true,
      skipWaiting:true
    })
  ]
};