const express = require("express"); //importamos express.
const mongoose = require("mongoose"); //importamos la BD
const user = require("../src/user.handler");

const app = express(); //tengo una app creada con express.

const port = 3000; //creamos un puerto.

mongoose.connect(
  "mongodb+srv://diegobarrios:1234@udemycurso.daxhkrt.mongodb.net/api-db?retryWrites=true&w=majority&appName=UdemyCurso"
); //esta es la coneccion a la base de datos

app.get("/api/", user.list);

app.listen(port, () => {
  console.log(`El ejemplo se esta ejecutando en el puerto: ${port}`);
  console.log("Run in: http://localhost:3000/api"); //decimos donde va a ser la ruta
}); //decimos donde lo ejecutamos nuestra app.
