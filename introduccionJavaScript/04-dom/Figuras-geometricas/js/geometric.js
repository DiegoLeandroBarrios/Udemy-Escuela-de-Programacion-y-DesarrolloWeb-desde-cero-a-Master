//area y perimetro cuadraro
let perimetro = (side) => side * 4;
let area = (side) => lado * side;

console.log(perimetro(4));

function calcularPerimCuadrado() {
  let inputSide = document.getElementById("inputSide"); //obtenemos la direccion del elemento
  let value = Number(inputSide.value); //lo convertimos en number y guardamos el valor en una variable
  const result = `El perimetro de cuadrado es: ${perimetro(
    value
  )} cm`; //utilizamos esa dicha variable para que haga el calculo con la funcion perimetro y guardamos todo eso en una variable que seria el resultado
  document.getElementById("result").innerText = result; //mostramos el resultado en el dom en forma de texto utilizando la ubicacion que queremos "id= result"
}
