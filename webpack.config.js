var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './src/main/js/app.jsx',
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jquery': 'jquery'
    })
  ],

  output: {
    path: __dirname,
    filename: './src/main/resources/static/built/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
        Main: 'src/main/js/components/Main.jsx',
        Nav: 'src/main/js/components/Nav.jsx',
        Scores: 'src/main/js/components/Scores.jsx',
        Players: 'src/main/js/components/Players.jsx',
        Games: 'src/main/js/components/Games.jsx',
        About: 'src/main/js/components/About.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
