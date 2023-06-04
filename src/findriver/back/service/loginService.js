const { createClient } = require("@supabase/supabase-js");
const { User } = require("../model/userModel")
var bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

require("dotenv").config();

const supabase = createClient(
  process.env.DATABASE_URL,
  process.env.DATABASE_KEY
);

async function loginUserWithToken(User) {
    try {
        userEmail = User.email;
        userPassword = User.password;

        if (!(userEmail && userPassword)) {
            return "Todos os campos são necessários";
        }

        const { data } = await supabase
            .from("Users")
            .select("id, email, password")
            .eq('email', User.email);
        
           if (await bcrypt.compareSync(User.password, (data[0].password).toString())) {

            const token = jwt.sign(
                { user: data },
                process.env.TOKEN_KEY,
            )

        const config = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        }

        return config;
    } else {
        return "Credenciais inválidas"
    }

    } catch(error) {
        console.log(error);
    }
}

module.exports = { loginUserWithToken };