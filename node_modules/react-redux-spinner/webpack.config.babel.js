import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = [
  {
    name: 'example',
    entry: [
      './example/index.js'
    ],
    output: {
      path: __dirname + '/build/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, include: [ path.join(__dirname, 'example/'), path.join(__dirname, 'src/') ], loaders: [ 'babel' ] },
        { test: /\.css$/, loader: 'style-loader!css-loader' }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Spinner for React/Redux example'
      })
    ],
    devServer: {
      port: 3000
    }
  }
];

module.exports = config;
