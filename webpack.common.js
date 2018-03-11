const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/assets/js/app.js',
    vendor: ['react', 'react-dom', 'axios', 'react-google-maps']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name]-[chunkhash].bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'file-loader?name=./assets/images/[hash].[ext]'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader?-autoprefixer!postcss-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new ExtractTextPlugin('assets/css/[name].min.css')
  ]
};
