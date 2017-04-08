var path = require("path")

module.exports = {
  entry: {
    app: ["./src/Index.tsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ],
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [ "ts-loader" ]
      }
    ]
  }
}
