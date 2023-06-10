const userService = require("../service/userService");
const { getUserByEmail } = require("../service/userService"); 
const { loginUserWithToken } = require("../service/loginService")
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
};

async function updateUser(req, res) {
  const user = req.body;
  const { id } = req.params;

  try{
    await userService.updateUserById(user, id);

    res.status(statusCode.OK).json({ message: 'Alterações feitas com sucesso!' });
  } catch (e) {

    res.status(e.status || 500).json({ message: e.message })
  }
};

async function deleteUser(req, res) {
  const { id } = req.params;

  await userService.deleteUserById(id);

  return res.status(statusCode.NO_CONTENT).send();
};

async function loginUser(req, res) {
  const user = req.body;

  const response = await loginUserWithToken(user);

  if (response == "Todos os campos são necessários" || response == "Credenciais inválidas" ) {
    return res.status(statusCode.UNAUTHORIZED).json({ response });
  }

  res.status(statusCode.OK).json({ response });
}

module.exports = { addUser, getUser, updateUser, deleteUser, loginUser }