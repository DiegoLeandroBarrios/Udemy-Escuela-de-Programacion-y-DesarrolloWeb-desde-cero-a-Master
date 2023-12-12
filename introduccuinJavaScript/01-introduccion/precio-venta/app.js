//variables

let vv = 0,
  igv = 0,
  pv = 0;

//entrada de datos

vv = parseFloat(prompt("ingrese valor de venta"));

//proceso

igv = vv * 0.19;

pv = vv + igv;

//salida de datos

document.write("valor de venta: ", vv, "<br>");
document.write("IGV: ", igv, "<br>");
document.write("Precio de venta: ", pv, "<br>");

//Mejoramos la parte de la salida de datos on acento grave para mostrar las variables.

document.write(`Valor de venta: ${vv} <br>
              IGV: ${igv} <br>
              Precio de venta: ${pv}`);

//otra forma para mejorar

console.log(`Valor de venta: ${vv}
            IGV: ${igv}
            Precio de venta: ${pv}`);

//otra manera
document.write(`<pre>
              Valor de venta: ${vv}
              IGV:            ${igv}
              Precio de venta:${pv} 
              </pre>`);

//otra forma en consola(caracteres especiales)
console.log(
  `Valor de venta: ${vv}\nIGV: ${igv}\nPrecio de venta: ${pv}`
);

//otra forma de consola alineacion(caracteres especiales)
console.log(
  `Valor de venta:\t${vv}\nIGV:\t\t\t${igv}\nPrecio de venta:\t${pv}`
);
