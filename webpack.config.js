"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "source-map", //mapa do arquivo principal

  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    path.join(__dirname, "src", "index"),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
  //cada objeto vai dizer para o webpack o q ele tem q fazer com cada tipo de arquivo

  module: {
    loaders: [
      {
        test: /\.js$/,
        excludes: /node_modules/,
        includes: /src/,
        loader: "babel",
      },
    ],
  },
};
