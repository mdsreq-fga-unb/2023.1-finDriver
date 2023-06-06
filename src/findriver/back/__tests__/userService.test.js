import { createUser, getUserByEmail, updateUserById, deleteUserById } from '../service/userService'
import { supabase } from '@supabase/supabase-js';


jest.mock('@supabase/supabase-js', () => ({
  from: jest.fn(),
}));
  
/*
describe('Funções do userService', () => {
    it('createUser', () => {

    });

    it('', () => {

    });
    it('', () => {

    });
    it('', () => {

    });
    
});*/