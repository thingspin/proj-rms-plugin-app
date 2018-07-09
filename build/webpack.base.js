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
      'panel/cpk-chart/module.js' : './panel/cpk-chart/module.ts',
      'panel/tabulator-table/module.js' : './panel/tabulator-table/module.ts',
      'panel/asset-man-material/module.js' : './panel/asset-man-material/module.ts',
      'panel/monitor-factory/module.js' : './panel/monitor-factory/module.ts',
      'panel/action-in-advance/module.js' : './panel/action-in-advance/module.ts',
      'panel/inspection-property/module.js' : './panel/inspection-property/module.ts',
      'panel/machine-material/module.js' : './panel/machine-material/module.ts',
	    'panel/company-list/module.js' : './panel/company-list/module.ts',
      'panel/mold-list/module.js' : './panel/mold-list/module.ts',
      'panel/consumables-list/module.js' : './panel/consumables-list/module.ts',
      'panel/monitor-facility-defect/module.js' : './panel/monitor-facility-defect/module.ts',
      'panel/plantplan-table/module.js' : './panel/plantplan-table/module.ts',
      'panel/machine-consumables-reg/module.js' : './panel/machine-consumables-reg/module.ts',
      'panel/productstate-bar-chart/module.js' : './panel/productstate-bar-chart/module.ts',
      'panel/inspectionstate-bar-chart/module.js' : './panel/inspectionstate-bar-chart/module.ts',
      'panel/productplan-bar-chart/module.js' : './panel/productplan-bar-chart/module.ts',
      'panel/productplan-chart/module.js' : './panel/productplan-chart/module.ts',
      'panel/cpktrend-table/module.js' : './panel/cpktrend-table/module.ts',
      'panel/model-spec/module.js' : './panel/model-spec/module.ts',
      'panel/product-fail-table/module.js' : './panel/product-fail-table/module.ts',
  },
  output: {
    path: resolve('dist'),
    filename: "[name]",
    libraryTarget: "amd"
  },
  externals: [
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
      { from: '**/*.json' },
      { from: 'img/**' },
      { from: '**/*.css' },
      { from: '**/*.svg' },
      { from: '**/*.html' },
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: require.resolve('snapsvg/dist/snap.svg-min.js'),
        use: 'imports-loader?this=>window,fix=>module.exports=0',
      }
    ]
  }
}
