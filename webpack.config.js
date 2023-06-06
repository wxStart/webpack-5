const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmllPlugin = require("html-webpack-plugin");
const config = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      context: path.resolve(__dirname, "src"), // 检测src的下面的文件
    }),
    new HtmllPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  mode: "development",
};

module.exports = config;
