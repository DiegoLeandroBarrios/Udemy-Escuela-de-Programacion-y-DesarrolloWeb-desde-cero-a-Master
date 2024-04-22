class Persona {
  nombre;
  edad;
  imprimir() {
    console.log(this.nombre, this.edad); //el this porque estamos dentro de un metodo y busca las propiedades de las clases, busca fuera del scope de la funcion.
  }
}

const p1 = new Persona(); //instanciamos
p1.nombre = "Diego"; //damos sus valores a la propiedades
p1.edad = 22;

console.log(p1);
p1.imprimir();
