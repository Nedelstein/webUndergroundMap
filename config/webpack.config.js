const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');


module.exports = {
  entry: {
    bundle: "./src/app.js"
  },
  output: {
    path: path.resolve(__dirname, "../public/assets"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          'sass-loader',
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              bypassOnDebug: true,
              disable: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin(),
    new HTMLInlineCSSWebpackPlugin(),
    new HtmlWebpackPlugin({
      inlineSource: '.(css|js)$',
      inject: true,
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new HtmlWebpackInlineSourcePlugin(),

  ]
};
