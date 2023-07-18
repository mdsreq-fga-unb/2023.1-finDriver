const { createClient } = require("@supabase/supabase-js");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
const { createToken } = require('./tokenService');

require("dotenv").config();

const supabase = createClient(
  process.env.DATABASE_URL,
  process.env.DATABASE_KEY
);

const createUser = async (User) => {
  var salt = bcrypt.genSaltSync(10);
  var encryptedPassword = bcrypt.hashSync(User.password, salt);

  const { data: userData, error: userError } = await supabase
    .from("Users")
    .insert([
      {
        name: User.name,
        email: User.email,
        password: encryptedPassword,
        questionOne: User.questionOne,
        answerOne: User.answerOne,
        questionTwo: User.questionTwo,
        answerTwo: User.answerTwo,
      },
    ])
    .select("id")

  if (userError) {
    if (userError.code == "23505") {
      return "Usuário já existe";
    } else {
      console.log(error);
      throw error;
    }
  }

  const { data: carData, error: carError } = await supabase
    .from("Cars")
    .insert([
      {
        idUser: userData[0].id
      },
    ])
    .single()
    .select("*");

  console.log({ carData });


  if (carError) {
    console.log(carError);
    throw carError;
  }
};

async function getUserById(id) {
  const { data, error } = await supabase
    .from("Users")
    .select("*")
    .eq("id", id);

  if (error) {
    console.log(error);
    throw error;
  } else if (data.length === 0) {
    return "Usuário não existe";
  } else {
    return data;
  }
}

async function updateUserById(user, id) {
  if (user.password) {
    const salt = bcrypt.genSaltSync(10);
    var encryptedPassword = bcrypt.hashSync(user.password, salt);
  }

  const { error } = await supabase
    .from("Users")
    .update({
      name: user.name,
      email: user.email,
      password: encryptedPassword,
    })
    .eq("id", id);
  if (error) {
    console.log(error);
    throw error;
  }
  return;
}

async function deleteUserById(password, id) {

  const { data, error } = await supabase
    .from("Users")
    .select("password")
    .eq("id", id.id);

    if (error) {
      console.log(error);
      throw error;
    }

    const isEqual = await bcrypt.compareSync(password, (data[0].password).toString())

  if (isEqual){
    await supabase.from("Users").delete().eq("id", id.id); 
    return "Usuário excluido com sucesso!"

  } else {
    return "Senha incorreta!"
  }

  
}

module.exports = {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  supabase,
};
