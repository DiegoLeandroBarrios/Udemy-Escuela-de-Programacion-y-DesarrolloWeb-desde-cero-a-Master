/*Practica 1 : Descuentos de restaurante
Enunciado: un restaurante ofrece un descuento del 10% para consumo de hasta s/. 100.00 y un
descuento del 20% para consumos mayores, para ambos casos se aplica un impuesto del 19%.
Determinar el monto defidescuento, el impuesto y el importe a pagar.
*/
//entrada de datos con funcion prompt

let consumo = Number(prompt("Ingrese el consumo: "));
let descuento, datoDescuento;

if (consumo <= 100) {
  //descuento del 10%
  datoDescuento = "10%";
  descuento = consumo * 0.1;
} else if (consumo > 100) {
  //descuento del 20%
  datoDescuento = "20%";
  descuento = consumo * 0.2;
}

let montoDescuento = consumo - descuento;
let iva = montoDescuento * 0.19;
let totalPagar = montoDescuento + iva;

//salida de datos

document.write(`<pre>
    Consumo             : ${consumo}
    Descuento           : ${descuento}
    Monto Con Descuento : ${montoDescuento}
    Iva                 : ${iva}
    Total a pagar       : ${totalPagar}
</pre>`);
