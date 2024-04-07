let c = 0;

while (c < 10) {
  c++;
  if (c === 5) {
    // console.log(`Termina el bucle`);
    // break; //rompe el bucle cuando llega a 5
    console.log(`salta a la siguiente linea`); //el cinco no se ejecuta
    continue;
  }
  console.log(c);
}
