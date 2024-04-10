//Las funciones recursivas se ejecutan asi mismas;
function factorial(n) {
  console.log(n);
  if (n > 1) {
    n = n * factorial(n - 1); //aca esta el ejemplo.
  }
  console.log(n);
  return n;
}
console.log(factorial(3));
