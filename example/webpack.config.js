var webpack = require('webpack');

module.exports = {
  entry: './foo.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [ "babel-loader", "eslint-loader" ],
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
};