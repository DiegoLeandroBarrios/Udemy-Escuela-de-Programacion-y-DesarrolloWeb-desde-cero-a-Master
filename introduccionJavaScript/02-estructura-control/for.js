let n = 5;
for (let i = 0; i <= 10; i++) {
  //tabla de multiplicacion
  console.log(`${n} x ${i} = ${n * i}`);
}

let texts = "javaScript";
console.log(texts[0]); //accede a la primera posicion de la cadena de caracteres.
let estudiantes = ["alex", "Roel", "Juan", "Diego"];

for (let dato in texts) {
  //con in podemos recuperar los indices
  console.log(dato);
}

for (let dato of estudiantes) {
  //con el of reuperamos cada elemento.
  console.log(`Hola ${dato}`);
}
