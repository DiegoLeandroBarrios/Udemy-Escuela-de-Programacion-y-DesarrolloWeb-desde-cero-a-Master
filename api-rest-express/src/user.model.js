const mongoose = require("mongoose");
const Users = mongoose.model("User", {
  //creamos un modelo para ver que funciones correctamente la BD
  name: { type: String, require: true },
  lastname: { type: String, require: true },
});

module.exports = Users; //exportamos nuestro modelo
