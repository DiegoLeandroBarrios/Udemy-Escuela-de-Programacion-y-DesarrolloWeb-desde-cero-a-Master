//clases van a tener: propiedades, constructor y metodos.
class Persona {
  //nombre; esto ya no es necesario, gracias al contructor
  //edad;
  otro; //puede tener una propiedad para tenerla solamente en la clase.
  constructor(nombre, edad) {
    //esto sirve para construir el objeto, al momento de crear el objeto o sea podemos ya darle los valores cuando lo instanciamos.
    this.nombre = nombre;
    this.edad = edad;
  }
  imprimir() {
    console.log(this.nombre, this.edad); //el this porque estamos dentro de un metodo y busca las propiedades de las clases, busca fuera del scope de la funcion.
  }
}

const p1 = new Persona(); //instanciamos
p1.nombre = "Diego"; //damos sus valores a la propiedades
p1.edad = 22;

console.log(p1);
p1.imprimir();

const p2 = new Persona("Flor", 24); //Para esto sirve el constructor

p2.imprimir();
