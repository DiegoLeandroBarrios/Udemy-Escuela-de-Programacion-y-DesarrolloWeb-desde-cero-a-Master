const mongoose = require("mongoose");
const Users = mongoose.model("User", {
  //creamos un modelo para ver que funciones correctamente la BD
  name: { type: String, require },
  lastname: { type: String, require },
});

module.exports = Users; //exportamos nuestro modelo
