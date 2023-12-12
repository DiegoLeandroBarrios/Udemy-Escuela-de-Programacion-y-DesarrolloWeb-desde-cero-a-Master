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
document.write("Precio de venta: ", pv);
