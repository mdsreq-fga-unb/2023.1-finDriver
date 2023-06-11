const { createClient } = require("@supabase/supabase-js");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv");

require("dotenv").config();

const supabase = createClient(
  process.env.DATABASE_URL,
  process.env.DATABASE_KEY
);

const createUser = async (User) => {
  var salt = bcrypt.genSaltSync(10);
  var encryptedPassword = bcrypt.hashSync(User.password, salt);

  const { data, error } = await supabase
    .from('Users')
    .insert([{
      name: User.name, 
      email: User.email, 
      password: encryptedPassword,
      answerOne: User.answerOne, 
      answerTwo: User.answerTwo,
      questionOne: User.questionOne, 
      questionTwo: User.questionTwo,
    }])
    .select('id')

  if (error) {
    if (error.code == "23505") {
      return "Usuário já existe";
    } else {
      console.log(error);
      throw error;
    }
  } 
};

async function getUserByEmail(user) {
  const { data, error } = await supabase
    .from("Users")
    .select("name")
    .eq("email", user.email);

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
    const salt = bcrypt.genSaltSync(10)
    var encryptedPassword = bcrypt.hashSync(user.password, salt)
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

async function deleteUserById(id) {

  await supabase
    .from('Users')
    .delete()
    .eq('id', id)
    
};

module.exports = { createUser, getUserByEmail, updateUserById, deleteUserById, supabase };