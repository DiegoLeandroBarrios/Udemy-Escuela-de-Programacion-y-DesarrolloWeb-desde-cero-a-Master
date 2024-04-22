//Las propiedades y metodos estaticos podemos acceder sin instanciar un objeto

class Mate {
  static #pi = 3.14;

  static get PI() {
    //solo mostramos
    return this.#pi;
  }
  static suma(a, b) {
    return a + b;
  }
}

console.log(Mate.pi);
console.log(Mate.PI); //muestra por el metodo get
console.log(Mate.suma(40, 50));
