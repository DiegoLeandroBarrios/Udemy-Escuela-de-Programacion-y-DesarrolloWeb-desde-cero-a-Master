//app para saludar
//modularizamos una funcion
//export para que se pueda exportar la funcion
// import "../css/estilos.css";
import wplogo from "../img/webpack.png";
export const saludar = (nombre) => {
  console.log("creando etiqueta h1");

  const h1 = document.createElement("h1"); //creamos un elemento h1
  h1.innerText = `Hola ${nombre}`; //ponemos un texto al elemento
  document.body.append(h1); //lo insertamos en el body del html

  const img = document.createElement("img"); //creamos un elemento img
  img.src = wplogo; //cargamos el src(la ruta)
  document.body.append(img); //insertamos en el body
};
