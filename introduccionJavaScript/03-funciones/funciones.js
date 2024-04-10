//El proposito de las funciones es reutilizar codigo.
//añadimos parametros

function saludar(nombre) {
  //   console.log("Hola Mundo, desde una funcion");
  //   console.log(`Hola ${nombre} desde una funcion`);
  return `Hola ${nombre} desde una funcion`; // devuelve un valor.
}
saludar("Diego"); //se ejecuta cuando la llamamos y ahora pasamos un Argumento
const d = saludar("Diego"); //con esto podemos saludar a varias personas o sea se puede reutilizar
const a = saludar("Alex");
console.log(d);
console.log(a);

function sumar(a = null, b = null) {
  //le doy valores predeterminados
  if (a === null || b === null) {
    console.log("Error, debes enviar dos numeros a la funcion.");
    return ""; //con return determinamos donde termina la funcion
  }
  return a + b;
}

const s = sumar(40, 50);
console.log(s);
