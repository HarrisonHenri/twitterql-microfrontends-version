const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');

const deps = require("./package.json").dependencies;
module.exports = {
  entry: './src/index.ts',
  output: {
    publicPath: "http://localhost:8081/",
  },
  mode: 'development',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8081,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "login",
      filename: "remoteEntry.js",
      library: { type: 'var', name: 'login' },
      remotes: {
        shell: "shell",
      },
      exposes: {
        "./Login": "./src/Login/index",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};
