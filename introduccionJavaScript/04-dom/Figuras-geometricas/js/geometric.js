//area y perimetro cuadraro
const perimetro = (side) => side * 4;
const area = (side) => side * side;
const valueResult = document.getElementById("result"); //generalizamos el valor del Result

function calcularPerimCuadrado() {
  let inputSide = document.getElementById("inputSide"); //obtenemos la direccion del elemento
  let value = Number(inputSide.value); //lo convertimos en number y guardamos el valor en una variable
  const result = `El perimetro del cuadrado es: ${perimetro(
    value
  )} cm`; //utilizamos esa dicha variable para que haga el calculo con la funcion perimetro y guardamos todo eso en una variable que seria el resultado
  valueResult.innerText = result; //mostramos el resultado en el dom en forma de texto utilizando la ubicacion que queremos "id= result"
}

function calcularAreaCuadrado() {
  //reciclamos el interior de la funcion anterior
  let inputSide = document.getElementById("inputSide");
  let value = Number(inputSide.value);
  const result = `El Area del cuadrado es: ${area(value)} cm^2`;
  valueResult.innerText = result;
}
