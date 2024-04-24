const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  mode: "production",
  output: { clean: true, filename: "main.[contenthash].js" }, //filename le da un nombre aleatorio(codigo hash) a las carpetas de la distribucion esto es bueno porque limpia el cache.
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
      {
        test: /\.m?js$/,
        exclude: /node_modules/, //babel es un compilador que ayuda a traducir el codigo en diferentes navegadores.(busca la compatibilidad)
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()], //no elimina los espacios en la carpeta css de la distribucion
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", //esta mal config esto conservaba todos los elementos html
      title: "Mi webpack App",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[fullhash].css",
    }),
  ],
};
//NOTAS
//Ctrl + c para parar servidor.
//webpack funciona como un empaquetador para la area de produccion.
//babel es un compilador para que acepte el codigo en todos los navegadores y no haya errores.
