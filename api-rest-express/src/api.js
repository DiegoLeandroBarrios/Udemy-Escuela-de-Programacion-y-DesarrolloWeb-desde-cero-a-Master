const express = require("express"); //importamos express.

const app = express(); //tengo una app creada con express.

const port = 3000; //creamos un puerto.

app.get("/api/", (request, response) => {
  response.send("Hola mundo!!"); //respondemos al cliente con send devolvemos un mensaje
}); //esto funciona para capturar la peticion y la respuesta hacia el cliente. (es un endpoint)

app.listen(port, () => {
  console.log(`El ejemplo se esta ejecutando en el puerto: ${port}`);
  console.log("Run in: http://localhost:3000/api"); //decimos donde va a ser la ruta
}); //decimos donde lo ejecutamos nuestra app.
