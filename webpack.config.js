const webpack = require("webpack"),
  path = require("path"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  CleanWebpackPlugin = require("clean-webpack-plugin"),
  UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
  ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: "image-webpack-loader",
        enforce: "pre"
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js($|\?)/i
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist/*.*"]),

    new CopyWebpackPlugin([
      {
        from: "src/images",
        to: "./images"
      },
      {
        from: "src/css",
        to: "./css"
      },
      {
        from: "src/fonts",
        to: "./fonts"
      },
      {
        from: "src/files",
        to: "./files"
      },
      {
        from: "src/components",
        to: "./components"
      }
    ]),

    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ]
};
