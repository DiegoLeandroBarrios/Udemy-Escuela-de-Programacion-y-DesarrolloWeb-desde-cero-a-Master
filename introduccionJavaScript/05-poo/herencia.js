class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  detallePersona() {
    console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}`);
  }
}

class Empleado extends Persona {
  sueldo;
  constructor(nombre, edad, sueldo) {
    //primero se hereda las propiedades y luego se inicializa las propiedades de esta clase
    super(nombre, edad); //super funciona para heredar las propiedades de la clase padre
    this.sueldo = sueldo;
  }
  detallePersona() {
    super.detallePersona(); //tambien podemos heredar los metodos
    console.log(`Sueldo: ${this.sueldo}`);
  }
}

const empleado1 = new Empleado("Diego", 22, 1000);
empleado1.detallePersona();
