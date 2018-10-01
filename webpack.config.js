const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const DotEnv = require('dotenv');
const webpack = require('webpack');

DotEnv.config({ path: '.env' });

const isProduction = process.env.NODE_ENV === 'production';

const HtmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: isProduction ? '../index.html' : 'index.html',
});

const MiniCssPlugin = new MiniCssExtractPlugin({
  filename: isProduction ? '[name].[hash].css' : '[name].css',
  chunkFilename: isProduction ? '[id].[hash].css' : '[id].css',
});

module.exports = {
  optimization: {
    nodeEnv: process.env.NODE_ENV,
  },
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, isProduction ? 'public/dist' : 'public'),
    filename: isProduction ? 'bundle.[hash].js' : 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'index.html']),
    MiniCssPlugin,
    HtmlPlugin,
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
        process.env.FIREBASE_MESSAGING_SENDER_ID
      ),
    }),
  ],
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
  },
};
