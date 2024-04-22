//El encapsulamiento se basa en que nosotros creamos atributos o propiedades privados para que no se accedan desde fuera para esto se utilizan metodos para acceder
class Persona {
  #nombre; //esto es una propiedad privada que se hace con #
  #edad;
  constructor(nombre, edad) {
    this.#nombre = nombre; //se llama tal cual, si no colocamos el # va a construir otra propiedad
    this.#edad = edad;
    this.#metodoPrivado(); //se ejecuta cuando creamos un objeto
  }

  set setNombre(nombre) {
    //cambiar nombre
    this.#nombre = nombre;
  }
  get getNombre() {
    //mostrar nombre
    return this.#nombre;
  }
  set setEdad(edad) {
    //cambiar edad
    this.#edad = edad;
  }
  get getEdad() {
    //mostrar edad
    return this.#edad;
  }
  #metodoPrivado() {
    console.log("metodo privado");
  }
}

const p1 = new Persona("Diego", 22);
console.log(p1.nombre);
//p1.nombre = "Leandro"; //aca construimos una nueva propiedad.
//console.log(p1);
//Ahora si podemos mostrar el nombre del objeto o sea la propiedad privada
console.log(p1.getNombre);
//cambiamos el valor de la propiedad privada
p1.setNombre = "Leandro";
console.log(p1.getNombre);
console.log(p1);
