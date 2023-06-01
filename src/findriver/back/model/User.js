import { createClient } from '@supabase/supabase-js'
import {environment as env } from '../../.env.js'

// Create a single supabase client for interacting with your database
const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)

export default class UserModel {
    constructor(name, email, password, answerOne, answerTwo) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.answerOne = answerOne;
        this.answerTwo = answerTwo;
    }

    async insertUser() {
        const { data: Users, error } = await supabase
            .from('Users')
            .insert([{ name: this.name, email: this.email, password: this.password, 
                    answerOne: this.answerOne }])
    }
}



var usuario1 = new UserModel("Roberto", "pedro@gmail.com", "BababVerde1234", "linux", "cavalo");
usuario1.insertUser();
