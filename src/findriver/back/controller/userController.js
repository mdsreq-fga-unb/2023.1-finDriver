const userService = require("../service/userService");
const { getUserByEmail } = require("../service/userService");
const statusCode = require('../helpers/statusCode');

async function addUser(req, res) {
  const user = req.body;

  try{
    var value = await userService.createUser(user);

    if(value == 'Usuário já existe'){
      return res.status(statusCode.ALREADY_EXISTS).json({ message: 'Usuário já registrado' });
    }

    res.status(statusCode.CREATED).json({ message: 'Usuário Cadastrado' });
  } catch (e) {

    res.status(e.status || 500).json({ message: e.message });
  }
};

async function getUser(req, res) {
  const email = req.body;

  var value = await getUserByEmail(email);

  if (value == "Usuário não existe") {
    return res.status(statusCode.NOT_FOUND).json({ message: 'Usuário não existe' });
  } 

  res.status(statusCode.OK).json({ value });
}

module.exports = { addUser, getUser }