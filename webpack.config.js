// webpack.config.js
"use strict";

const webpack = require("webpack"),
  path = require("path"),
  libraryName = "btrz-api",
  UglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
  env = process.env.WEBPACK_ENV,
  plugins = [];
let outputFile = `${libraryName}.js`;

if (env === "build") {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = `${libraryName}.min.js`;
}

const  config = {
    entry: `${__dirname}/src/index.js`,
    devtool: "source-map",
    output: {
      path: `${__dirname}/lib`,
      filename: outputFile,
      library: libraryName,
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    module: {
      loaders: [
        {
          test: /(\.js)$/,
          loader: "babel",
          exclude: /(node_modules|bower_components)/
        },
        {
          test: /(\.js)$/,
          loader: "eslint-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      root: path.resolve("./src"),
      extensions: ["", ".js"]
    },
    plugins: plugins
  };

module.exports = config;
