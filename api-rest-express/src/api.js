const express = require("express"); //importamos express.
const mongoose = require("mongoose"); //importamos la BD

const app = express(); //tengo una app creada con express.

const port = 3000; //creamos un puerto.

mongoose.connect(
  "mongodb+srv://diegobarrios:1234@udemycurso.daxhkrt.mongodb.net/api-db?retryWrites=true&w=majority&appName=UdemyCurso"
); //esta es la coneccion a la base de datos
const Users = mongoose.model("User", {
  //creamos un modelo para ver que funciones correctamente la BD
  name: String,
  lastname: String,
});
app.get("/api/", async (request, response) => {
  const users = await Users.find(); //recuperamos todos los usuarios
  response.status(200); //nos tiraria un 200 si esta todo ok
  response.send(users); //respondemos al cliente con send devolvemos un mensaje
}); //esto funciona para capturar la peticion y la respuesta hacia el cliente. (es un endpoint)

app.listen(port, () => {
  console.log(`El ejemplo se esta ejecutando en el puerto: ${port}`);
  console.log("Run in: http://localhost:3000/api"); //decimos donde va a ser la ruta
}); //decimos donde lo ejecutamos nuestra app.
