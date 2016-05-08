const webpack = require('webpack');
const path = require('path');


module.exports = {
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000?reload=true',
    './src/entry.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ }
    ],
    preLoaders: [
      { test: /\jsx?$/, loader: 'eslint-loader', exclude: /(node_modules|server)/ }
    ]
  }
}