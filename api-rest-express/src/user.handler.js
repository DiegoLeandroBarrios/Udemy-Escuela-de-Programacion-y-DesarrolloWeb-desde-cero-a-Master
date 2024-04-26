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
  get: async (request, response) => {
    const { id } = request.params; //guardamos el id de ese objeto
    const user = await Users.findOne({ _id: id }); //le pedimos un registro(solo un dato) que tenga el mismo id //se guarda en user
    response.status(200); //Dice que esta todo ok
    response.send(user); // le devolvemos el usuario que pidio
  },
  update: async (request, response) => {
    const { id } = request.params; //obtenemos el id de ese objeto
    const user = await Users.findOne({ _id: id }); //le pedimos un registro(solo un dato) que tenga el mismo id //se guarda en user
    //actualizamos datos
    Object.assign(user, request.body); //le mandamos el usuario que vamos a modificar y lo que cambiamos
    await user.save(); //guardamos los cambios
    response.sendStatus(204); //Dice que esta todo ok
  },
  delete: async (request, response) => {
    const { id } = request.params; //obtenemos el id de ese objeto
    const result = await Users.deleteOne({ _id: id }); //le pedimos un registro(solo un dato) que tenga el mismo id //se para eliminarlo
    //eliminamos dato
    if (result.deletedCount === 1) {
      response.sendStatus(204); //Dice que esta todo ok
      console.log("Usuario eliminado correctamente.");
    } else {
      console.log("usuario no encontrado");
      response.status(404).send("Usuario no encontrado.");
    }
  },
};
module.exports = User; //exportamos
