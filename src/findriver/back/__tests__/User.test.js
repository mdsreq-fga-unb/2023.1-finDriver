jest.mock('../service/userService');
const bcrypt = require('bcrypt');

import { User } from '../model/userModel';

jest.mock('../model/userModel', () => {
    const mockUser = {
        User: jest.fn().mockImplementation((name, email, password, questionOne, answerOne, questionTwo, answerTwo) => {
            return {
                name,
                email,
                password,
                questionOne,
                answerOne,
                questionTwo,
                answerTwo
            };
        }),
    };
    return mockUser;
});

const users = [
    {
        id: 0,
        name: "Roberto",
        email: "robertao@email.com",
        password: "password",
        questionOne: "Pergunta1",
        answerOne: "algo",
        questionTwo: "Pergunta2",
        answerTwo: "estranho"
    },
    
    {
        id: 1,
        name: "Melissa",
        email: "melissa@email.com",
        password: "melsenha",
        questionOne: "Pergunta3",
        answerOne: "algoritmo",
        questionTwo: "Pergunta4",
        answerTwo: "reprovado"
    }
];

describe('Funções do userService', () => {
    describe('Testando a encriptação da senha', () => {
        test('Deve retornar true, senha foi encriptada', async () => {
            const password = 'password123';
        
            const hashedPassword = await bcrypt.hash(password, 10);
            const result = await bcrypt.compare(password, hashedPassword);
        
            expect(result).toBe(true);
        });

        test('Deve retornar false, senha não está correta', async () => {
            const password = 'password123';
            const incorrectPassword = 'password456';
        
            const hashedPassword = await bcrypt.hash(password, 10);
            const result = await bcrypt.compare(incorrectPassword, hashedPassword);
        
            expect(result).toBe(false);
          });
    });

    describe('Dois casos do createUser', () => {
        test('createUser de retornar true', () => {
            const createUserMock = jest.fn((user) => {
                var userExists = false;
                var index = 0;
                for (let user of Object.values(users)){
                    if (user.email === User.email) {                        
                        users.splice(index, 1);
                        userExists = true;
                        return false;
                    };
                    index++;
                };
                users.push(User);
                return true;
            });
            const newUser = new User("Elsa", "elsa@email.com", "elsasenha", "Pergunta1", "algo", "Pergunta2", "estranho");
            const result = createUserMock(newUser);
            expect(result).toBe(true);
        });

        test('createUser de retornar false (userExists)', () => {
            const createUserMock = jest.fn((user) => {
                var userExists = false;
                var index = 0;
                for (let user of Object.values(users)){
                    if (user.email === User.email) {                        
                        users.splice(index, 1);
                        userExists = true;
                        return false;
                    };
                    index++;
                };
                users.push(User);
                return true;
            });
            const newUser = new User("Elsa", "elsa@email.com", "elsasenha", "Pergunta1", "algo", "Pergunta2", "estranho");
            const result = createUserMock(newUser);
            expect(result).toBe(false);
        });
    });
    
    describe('Caso do getUserById', () => {
        test('getUserById deve retornar o usuario de id = 1', () => {
            const getUserByIdMock = jest.fn((id) => {
                const user = users[id];
                return user
            });

            const result = getUserByIdMock(1);
            expect(result).toEqual(
            {
                id: 1,
                name: "Melissa",
                email: "melissa@email.com",
                password: "melsenha",
                questionOne: "Pergunta3",
                answerOne: "algoritmo",
                questionTwo: "Pergunta4",
                answerTwo: "reprovado"
            })
        });
    });

    describe('Caso do updateUserById', () => {
        test('updateUserById caso de sucesso', () => {
            const updateUserByIdMock = jest.fn((user, id) => {
                if(users[id].id === id){
                    users[id].name = user.name;
                    users[id].email = user.email;
                    users[id].password = user.password;
                    return true;
                }

            });
            users[1].name = "Clark";
            users[1].email = "kent@gmail.com";
            users[1].password = "krypton";
            const result = updateUserByIdMock(users[1], 1);
            
            expect(result).toBeDefined();
            expect(users[1]).toMatchObject({
                id: 1,
                name: "Clark",
                email: "kent@gmail.com",
                password: "krypton",
                questionOne: "Pergunta3",
                answerOne: "algoritmo",
                questionTwo: "Pergunta4",
                answerTwo: "reprovado"
            });
        });
    });

    describe('Função para deletar a conta', () => {
        test('Teste para verificar a senha antes de deletar', () => {
            const deleteUserByIdMock = jest.fn((password, id) => {
                if (users[id].password === password){
                    users.splice(id, 1); // linha equivalente => await supabase.from("Users").delete().eq("id", id);
                    return true;
                }
            });
            const result = deleteUserByIdMock("password", 0);
            expect(result).toBe(true);
        });
    });
});