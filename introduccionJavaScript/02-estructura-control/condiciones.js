let n = 5,
  print = "";

if (n !== 0) {
  // si el numero no es igual a cero
  if (n > 0) {
    //si el numero es positivo
    if (n % 2 === 0) {
      //si el numero es par
      print = `El numero ${n} es par POSITIVO.`;
    } else {
      print = `El numero ${n} es impar POSITIVO`;
    }
  } else {
    if (n % 2 === 0) {
      print = `El numero ${n} es par NEGATIVO.`;
    } else {
      print = `El numero ${n} es impar NEGATIVO`;
    }
  }
} else {
  print = "el numero es NEUTRO.";
}

console.log(print);
