const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templates: "src/index.html",
      title: "Mi webpack App",
    }),
  ],
};
