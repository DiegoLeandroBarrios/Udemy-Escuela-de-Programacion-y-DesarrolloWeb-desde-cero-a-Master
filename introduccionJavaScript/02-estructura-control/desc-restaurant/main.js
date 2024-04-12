/*Practica 1 : Descuentos de restaurante
Enunciado: un restaurante ofrece un descuento del 10% para consumo de hasta s/. 100.00 y un
descuento del 20% para consumos mayores, para ambos casos se aplica un impuesto del 19%.
Determinar el monto defidescuento, el impuesto y el importe a pagar.

Practica 02: Descuentos de un restaurante Parte 02
Enunciado: debido a los excelentes resultados, el restaurante decide ampliar sus ofertas de acuerdo a la
siguiente escala de consumo, ver la tabla. Determinar el monto del descuento, el importe del impuesto y el
importe a pagar.
• Consumo (S/.)
• Hasta 100
• Mayor a 100
• Mayor a 200
Descuento (%)
10
20
30
*/

//entrada de datos con funcion prompt

let consumo = Number(prompt("Ingrese el consumo: "));
let descuento, datoDescuento;

if (consumo <= 100) {
  //descuento del 10%
  datoDescuento = "10%";
  descuento = consumo * 0.1;
} else if (consumo > 100 && consumo <= 200) {
  //descuento del 20%
  datoDescuento = "20%";
  descuento = consumo * 0.2;
} else if (consumo > 200) {
  //Practica 2
  //descuento del 30%
  datoDescuento = "30%";
  descuento = consumo * 0.3;
}

let montoDescuento = consumo - descuento;
let iva = montoDescuento * 0.19;
let totalPagar = montoDescuento + iva;

//salida de datos

document.write(`<pre>
    Consumo             : ${consumo}
    Descuento           : ${descuento}      | ${datoDescuento}
    Monto Con Descuento : ${montoDescuento}
    Iva                 : ${iva}            | 19%
    Total a pagar       : ${totalPagar}
</pre>`);
