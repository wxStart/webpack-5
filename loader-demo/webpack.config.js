const path = require("path");
const HtmllPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: "./loaders/js-loader.js",
      //     },
      //   ],
      // },
      {
        test: /\.js$/,
        use: [
          {
            loader: "./loaders/custom/babel/babel-loader.js",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          {
            loader: "./loaders/custom/banner/banner-loader.js",
            options: {
              author: "wx",
            },
          },
          {
            loader: "./loaders/custom/clean-log/clean-log-loader.js",
          },
          {
            loader: "./loaders/sync-loader.js",
          },
          {
            loader: "./loaders/async-loader.js",
          },
          {
            loader: "./loaders/raw-loader.js",
          },
          {
            loader: "./loaders/pitch-loader.js",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmllPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  mode: "development",
  devServer: {
    static: "./dist",
    hot: true,
  },
};

module.exports = config;
