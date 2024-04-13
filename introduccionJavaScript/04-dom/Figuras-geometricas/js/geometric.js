//area y perimetro cuadrado
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

//perimettro y area de triangulo

const perimetroTriangulo = (side1, side2, side3) =>
  side1 + side2 + side3;
const areaTriangulo = (base, altura) => base * altura;

function calcularPerimTriangulo() {
  let inputSide1 = document.getElementById("inputSideTriangulo1");
  let inputSide2 = document.getElementById("inputSideTriangulo2");
  let inputSide3 = document.getElementById("inputSideTriangulo3");
  let value1 = Number(inputSide1.value);
  let value2 = Number(inputSide2.value);
  let value3 = Number(inputSide3.value);
  const result = `El perimetro del triangulo es ${perimetroTriangulo(
    value1,
    value2,
    value3
  )} cm`;
  valueResult.innerText = result;
}

function calcularAreaTriangulo() {
  let base = document.getElementById("base");
  let altura = document.getElementById("altura");
  let valueBase = Number(base.value);
  let valueAltura = Number(altura.value);
  const result = `El area del triangulo es ${areaTriangulo(
    valueBase,
    valueAltura
  )} cm^2`;
  valueResult.innerText = result;
}

//Radio circulo diametro,perimetro, area

const diametro = (radio) => radio * 2;
const areaCirculo = (radio) => 3.14 * (radio * radio);
const perimetroCirculo = (radio) => 3.14 * diametro(radio);

function calcularDiametro() {
  let inputRadio = document.getElementById("radio");
  let valueRadio = Number(inputRadio.value);
  const result = `El diametro es: ${diametro(valueRadio)} cm`;
  valueResult.innerText = result;
}

function calcularAreaCirculo() {
  let inputRadio = document.getElementById("radio");
  let valueRadio = Number(inputRadio.value);
  const result = `El area del circulo es: ${areaCirculo(
    valueRadio
  )} cm^2`;
  valueResult.innerText = result;
}

function calcularPerimCirculo() {
  let inputRadio = document.getElementById("radio");
  let valueRadio = Number(inputRadio.value);
  const result = `El perimetro del circulo es: ${perimetroCirculo(
    valueRadio
  )} cm`;
  valueResult.innerText = result;
}
