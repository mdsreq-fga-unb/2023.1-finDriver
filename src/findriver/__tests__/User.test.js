import { createClient } from '@supabase/supabase-js'
//import { test } from '@supabase/doctest-js'
import UserModel from '../model/User.js'

let usuario1 = new UserModel("Felipe", "felipe@gmail.com", "1223455", "cachorro", "sorvete");
let usuario2 = new UserModel("Laura", "laura@gmail.com", "1223455", "cachorro", "sorvete");
var usuario3 = new UserModel("Pedro", "pedro@gmail.com", "BababVerde1234", "linux", "cavalo");

usuario1.insertUser();
usuario2.insertUser();
usuario3.insertUser();