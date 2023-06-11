const jwt = require("jsonwebtoken");

const getUserIdByToken = (token) => {
  if (!token) {
    throw new Error("Token de autenticação não fornecido!");
  }

  try {

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    var userId = decoded.user[0].id

    return userId;

  } catch (error) {

    console.log(error)
    
    throw new Error("Token de autenticação inválido!");
  }
};

module.exports = { getUserIdByToken };
