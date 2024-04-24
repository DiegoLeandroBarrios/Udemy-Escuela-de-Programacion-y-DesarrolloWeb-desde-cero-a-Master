const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
        exclude: /main.css$/i, //excluimos este archivo css
        use: ["style-loader", "css-loader"], //esto sirve para que me cargue el css en la distribucion
      },
      {
        test: /main.css$/i, //lo cargamos en la siguiente
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.png/,
        type: "asset/resource", //se cargan las imagenes png a la distribucion
        generator: {
          //nos sirve para la parte de produccion, nos guarda las imagenes en una carpeta static
          filename: "static/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", //esta mal config esto conservaba todos los elementos html
      title: "Mi webpack App",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};
//NOTAS
//Ctrl + c para parar servidor.
