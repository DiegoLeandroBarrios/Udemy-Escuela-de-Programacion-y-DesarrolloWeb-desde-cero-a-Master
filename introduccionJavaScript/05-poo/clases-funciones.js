//reutilizacion de codigo
//forma antigua
function Persona(nombre, edad) {
  this.nombre = nombre; //con this nos referimos al atributo de ese objeto
  this.edad = edad;

  this.imprimir = function () {
    console.log(`${this.nombre} ${this.edad}`);
  };
}

const p1 = new Persona("Diego", 22); //decimos que creamos un objeto de clase persona
const p2 = new Persona("Flor", 24);

console.log(p1.nombre);
console.log(p2.nombre);

p1.imprimir(); //llamamos a la funcion de la clase(reutiliacion de metodo)
p2.imprimir();
