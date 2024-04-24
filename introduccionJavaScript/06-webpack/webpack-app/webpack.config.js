const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  output: { clean: true },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader", //esto sirve para que me cargue el html en la distribucion
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], //esto sirve para que me cargue el css en la distribucion
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", //esta mal config esto conservaba todos los elementos html
      title: "Mi webpack App",
      filename: "index.html",
    }),
  ],
};
