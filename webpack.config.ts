/* eslint-disable node/no-unpublished-import */
import dotenv from 'dotenv-override-true';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {DefinePlugin} from 'webpack';

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.ts',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['IE >= 11'],
                  },
                },
              ],
            ],
          },
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
  ],
};

export default config;
