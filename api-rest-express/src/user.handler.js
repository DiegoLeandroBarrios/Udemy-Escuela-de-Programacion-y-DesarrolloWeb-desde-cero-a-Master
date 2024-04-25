const Users = require("../src/user.model");
const User = {
  list: async (request, response) => {
    const users = await Users.find(); //recuperamos todos los usuarios
    response.status(200); //nos tiraria un 200 si esta todo ok
    response.send(users); //respondemos al cliente con send devolvemos un mensaje
  }, //nuestro primer handler
};
module.exports = User; //exportamos
