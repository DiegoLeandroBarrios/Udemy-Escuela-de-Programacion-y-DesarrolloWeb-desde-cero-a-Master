const esPrimo = (numero) => {
  //es primo cuando un numero puede dividirse entre 1 y el mismo o sea ue el resto de la divsion de esos 2 tiene que dar 0 si hay 3 significa que no es primo.
  let contador = 0;
  let numeros = [];

  for (let i = 0; i < numero; i++) {
    numeros.push(i + 1); //guardo los numeros que le siguen para dividirse luego
  }
  for (let n of numeros) {
    if (n === 1 || n === numero) {
      // condicion si el divisor es 1 o el mismo hace un salto
      continue;
    }
    if (numero % n === 0) {
      //divido el numero con los numeros anteriores y ve si el resto es 0, si es suma al contador lo que siginifica que no es primo.
      contador++;
    }
  }
  return contador === 0;
};

let numero = Number(prompt("Ingrese un numero")); //acordarse que el promp tiene que convertir el tipo de dato.

if (esPrimo(numero)) {
  document.write(`${numero} Es primo`);
} else {
  document.write(`${numero} No es primo`);
}
