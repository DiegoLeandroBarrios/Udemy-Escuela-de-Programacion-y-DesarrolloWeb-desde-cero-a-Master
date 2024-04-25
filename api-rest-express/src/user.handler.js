const Users = require("../src/user.model");
const User = {
  list: async (request, response) => {
    const users = await Users.find(); //recuperamos todos los usuarios
    response.status(200); //nos tiraria un 200 si esta todo ok
    response.send(users); //respondemos al cliente con send devolvemos un mensaje
  }, //nuestro primer handler
  create: async (request, response) => {
    const user = new Users(request.body); //creamos un objeto para que capture los que nos envia el cliente
    const saveUser = await user.save(); //aqui lo guardamos.
    //console.log(request.body); //capturamos el cuerpo que nos da el cliente.
    response.status(201); //Dice que esta todo ok
    response.send(saveUser._id); //devolvemos el id para que el cliente vea que esta en la BD
  }, //con este handler recibimos lo que nos envia el cliente.
};
module.exports = User; //exportamos
