/* eslint-disable node/no-unpublished-require */
/* eslint-disable node/no-unpublished-import */
import dotenv from 'dotenv-override-true';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {DefinePlugin, ProvidePlugin} from 'webpack';

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.ts',
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'RingCentral Extensible SDK ES5 Demo',
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    new ProvidePlugin({
      Promise: ['es6-promise', 'Promise'],
      process: 'process/browser',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer'),
      stream: require.resolve('stream-browserify'),
    },
  },
};

export default config;
