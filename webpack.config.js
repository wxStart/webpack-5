const path = require("path");

const config = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    
  },
  module: {
    rules: [
    //   {
    //     test: /\.js$/,
    //     loader: "babel-loader",
    //   },
    ],
  },
  plugins: [],
  mode: "development",
};

module.exports = config;
