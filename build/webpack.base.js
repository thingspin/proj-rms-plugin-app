const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  target: 'node',
  context: resolve('src'),
  entry:{
      'module.js' : './module.ts',
      'panel/bar-chart/module.js' : './panel/bar-chart/module.ts',
      'panel/tabulator-table/module.js' : './panel/tabulator-table/module.ts',
      'panel/asset-man-company/module.js' : './panel/asset-man-company/module.ts'
  },
  output: {
    path: resolve('dist'),
    filename: "[name]",
    libraryTarget: "amd"
  },
  externals: [
    // remove the line below if you don't want to use buildin versions
    'jquery', 'lodash', 'moment',
    function (context, request, callback) {
      var prefix = 'grafana/';
      if (request.indexOf(prefix) === 0) {
        return callback(null, request.substr(prefix.length));
      }
      callback();
    }
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
      // { from: 'plugin.json' },
      { from: '**/*.json' },
      { from: 'img/**' },
      { from: '**/*.css' },
    ]),
  ],
  resolve: {
    extensions: [".ts", ".js", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.(html|svg)$/,
        exclude: /node_modules/,
        use: { loader: 'html-loader' },
      },
      {
        test: /\.tsx?$/,
        loaders: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader?modules',
            options: {
              modules: true,
              namedExport: false,
              camelCase: false
            }
          }
        ]
      }
    ]
  }
}
