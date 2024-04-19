const persona = {
  //los literales se separan con una , esto es sin instanciar.
  nombre: "Diego",
  apellido: "Barrios",
  edad: 22,

  nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }, //this es para referirnos a la propiedad de un objeto
  trajes: ["traje 1", "traje 2", "traje 3"],
  direccion: {
    zip: "007",
    pais: "Argentina",
    prov: "Chaco",
    depart: "Resistencia",
  },
};
//como acceder a ciertos valores.
console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona.trajes);
console.log(persona.direccion);
console.log(persona.direccion.pais);
