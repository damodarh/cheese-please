const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/app/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "/app/index.html")
    })
  ],
  devServer: {
    //port: <your port here>
  },
  resolve: {
    alias: {
      Actions: path.resolve(__dirname, 'app/src/actions'),
      Components: path.resolve(__dirname, 'app/src/components/'),
      Containers: path.resolve(__dirname, 'app/src/containers/'),
      Helpers: path.resolve(__dirname, 'helpers/'),
      Selectors: path.resolve(__dirname, 'app/src/selectors/'),
      Utils: path.resolve(__dirname, 'app/src/utils'),
      Assets: path.resolve(__dirname, 'app/src/assets'),
      Apis: path.resolve(__dirname, 'app/src/api'),
    },
    extensions: ['.js', '.jsx', '.json', '*'],
  },
};