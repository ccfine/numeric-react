const path = require("path")
const nodeExternals = require("webpack-node-externals")

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./lib"),
    filename: "bundle.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        include: path.join(__dirname, "./src")
      }
    ]
  },
  externals: [nodeExternals()]
}