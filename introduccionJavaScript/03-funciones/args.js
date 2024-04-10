//podemos pasar muchos argumentos de la siguiente manera
function sumar(...args) {
  let suma = 0;
  for (let i of args) {
    suma += i;
  }
  return suma;
}
const s = sumar(40, 50, 60, 30);
console.log(`La sumas es ${s}`);
