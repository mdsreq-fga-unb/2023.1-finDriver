const jwt = require("jsonwebtoken");

const createToken = (user) => {
  const token = jwt.sign(
      { data: user }, 
      process.env.TOKEN_KEY,
    );
    console.log(token);
  return token;
};

const getUserIdByToken = (token) => {
  if (!token) {
    throw new Error("Token de autenticação não fornecido!");
  }
  // console.log(token)
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    //console.log(decoded);
    var userId = decoded.user[0].id;

    return userId;
  } catch (error) {    
    throw new Error("Token de autenticação inválido!");
  }
};

module.exports = { createToken, getUserIdByToken };
