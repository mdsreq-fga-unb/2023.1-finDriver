jest.mock('../service/userService');

import { User } from '../model/userModel';

jest.mock('../model/userModel', () => {
    const mockUser = {
        User: jest.fn().mockImplementation((name, email, password, answerOne, answerTwo) => {
            return {
                name,
                email,
                password,
                answerOne,
                answerTwo
            };
        }),
    };
    return mockUser;
});

const users = {
    user1 : {
        id: 1,
        name: "Roberto",
        email: "robertao@email.com",
        password: "password"
    },
    
    user2 : {
        id: 2,
        name: "Melissa",
        email: "melissa@email.com",
        password: "melsenha"
    }
};

describe('Funções do userService', () => {
    describe('Dois casos do createUser', () => {
        test('createUser de retornar true', () => {
            const usersBase = [
                {
                    id: 1,
                    name: "Roberto",
                    email: "robertao@email.com",
                    password: "password",
                    answerOne: "aranha",
                    answerTwo: "homem"
                },
                
                {
                    id: 2,
                    name: "Melissa",
                    email: "melissa@email.com",
                    password: "melsenha",
                    answerOne: "mosca",
                    answerTwo: "comida"
                }
            ];

            const createUserMock = jest.fn((user) => {
                var userExists = false;
                var index = 0;
                for (let user of Object.values(usersBase)){
                    if (user.email === User.email) {                        
                        usersBase.splice(index, 1);
                        userExists = true;
                        return false;
                    };
                    index++;
                };
                usersBase.push(User);
                return true;
            });
            const newUser = new User("Elsa", "elsa@email.com", "elsasenha", "algo", "estranho");
            const result = createUserMock(newUser);
            expect(result).toBe(true);
        });

        test('createUser de retornar false (userExists)', () => {
            const usersBase = [
                {
                    id: 1,
                    name: "Roberto",
                    email: "robertao@email.com",
                    password: "password",
                    answerOne: "aranha",
                    answerTwo: "homem"
                },
                
                {
                    id: 2,
                    name: "Melissa",
                    email: "melissa@email.com",
                    password: "melsenha",
                    answerOne: "mosca",
                    answerTwo: "comida"
                }
            ];

            const createUserMock = jest.fn((User) => {
                var userExists = false;
                var index = 0;
                for (let user of Object.values(usersBase)){
                    if (user.email === User.email) {                        
                        usersBase.splice(index, 1);
                        userExists = true;
                        return false;
                    };
                    index++;
                };
                usersBase.push(User);
                return true;
            });
            
            const newUser = new User("Elsa", "melissa@email.com", "elsasenha", "resposta1", "resposta2");
            const result = createUserMock(newUser);
            expect(result).toBe(false);
        });
    });
    
    
    describe('Dois casos do getUserByEmail (verdadeiro e falso)', () => {
        test('getUserByEmail em caso de sucesso deve retornar true', () => {
            const getUserByEmailMock = jest.fn((userEmail) => {
                if (userEmail === "melissa@email.com") {
                    return true;
                } else {
                    return false;
                }
            });
    
            const result = getUserByEmailMock(users.user2.email);
    
            expect(result).toBeDefined();
            expect(result).toBe(true);
        });
    
        test('getUserByEmail em caso de falha deve retornar false', () => {
            const getUserByEmailMock = jest.fn((userEmail) => {
                if (userEmail === "robertao@email.com") {
                    return true;
                } else {
                    return false;
                }
            });

            const result = getUserByEmailMock(users.user2.email);
    
            expect(result).toBeDefined();
            expect(result).toBe(false);
        });
    });
    
    describe('Dois casos do updateUserById', () => {
        test('updateUserById caso de sucesso', () => {
            const updateUserByIdMock = jest.fn((user, id) => {
                let password = "password";
                let newName = "Rogerio";
                let newEmail = "rogerio@email.com";
                let newPassword = "rogerinho";
    
                if (user.id === id && user.password === password){
                    user.name = newName;
                    user.email = newEmail;
                    user.password = newPassword;
                } else {
                    return false;
                };
    
                return user;
            });
    
            const result = updateUserByIdMock(users.user1, users.user1.id);
            
            expect(result).toBeDefined();
            expect(result).toMatchObject(users.user1);
        });

        test('updateUserById em caso de falha', () => {
            const updateUserByIdMock = jest.fn((user, id) => {
                let password = "password";
                let newName = "Rogerio";
                let newEmail = "rogerio@email.com";
                let newPassword = "rogerinho";
    
                if (user.id === id && user.password === password){
                    user.name = newName;
                    user.email = newEmail;
                    user.password = newPassword;
                } else {
                    return {};
                };
    
                return user;
            });
    
            const result = updateUserByIdMock(users.user2, users.user2.id);
            
            expect(result).toBeDefined();
            expect(result).not.toMatchObject(users.user2);
        });
    });

    describe('Dois casos da função deleteUserById', () => {
        test('deleteUserById em caso de sucesso', () => {
            const deleteUserByIdMock = jest.fn((id) => {
                
                
                for (let user of Object.values(users)){
                    if (id === user.id) {
                        return user;
                    }; 
                };
                
                return {};
            });
    
            const result = deleteUserByIdMock(users.user1.id)
            
            expect(result).toMatchObject(users.user1);
        });

        test('deleteUserById em caso de falha', () => {
            const deleteUserByIdMock = jest.fn((id) => {
                for (let user of Object.values(users)){
                    if (id === user.id) {
                        return user;
                    }; 
                };
                return {};
            });
    
            const result = deleteUserByIdMock(3)
            
            expect(result).not.toMatchObject(users.user1);
        });
    });
});