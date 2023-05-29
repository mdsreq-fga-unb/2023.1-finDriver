//import { createClient } from '@supabase/supabase-js'
//import { test } from '@supabase/doctest-js'
import UserModel from '../model/User.js'

describe('Supabase', () => {
    it('Insert sucess', async () => {
        let usuario1 = new UserModel("Felipe", "felipe@gmail.com", "1223455", "cachorro", "sorvete");
        let usuarioFunc = jest.spyOn(usuario1, 'insertUser');

        usuario1.insertUser();

        expect(usuarioFunc).toHaveBeenCalled();
        usuarioFunc.mockRestore()
    });
});
