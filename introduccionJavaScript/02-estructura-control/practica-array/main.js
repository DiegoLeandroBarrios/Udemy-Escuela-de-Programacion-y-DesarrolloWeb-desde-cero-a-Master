/*Practica 03: Guardar resultados de pares e impares
Crea 3 arrays y una array que tendrá números de 1 a 9. El primera array se llamará pares y el segundo
impar, ambos estarán vacios. Después multiplica cada uno de los números de array con números por un
número aleatorio entre 1 y 100, si el resultado es par guarda ese número en el arrya de pares y si es impar
en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con
el formato 2 x 3I 6 y el array de pares e impares*/

let pares = [];
let impares = [];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numeroRandom = 0;

for (let i of numeros) {
  numeroRandom = parseInt(Math.random() * 100); //nos convierte en entero los numero decimales
  let r = i * numeroRandom;

  if (r % 2 == 0) {
    console.log(`${i} x ${numeroRandom} = ${r}`);
    pares.push(r);
  } else {
    console.log(`${i} x ${numeroRandom} = ${r}`);
    impares.push(r);
  }
}

console.log("Array de pares : ", pares);
console.log("Array de impares : ", impares);
