jest.mock('../service/expenseService');
import { Expense } from '../model/expenseModel';

jest.mock('../model/expenseModel', () => {
    const mockExpense = {
        Expense: jest.fn().mockImplementation((idUser, cause, value, date, type) => {
            return {
                idUser,
                cause,
                value,
                date,
                type
            };
        }),
    };
    return mockExpense;
});

describe('Funções do expenseService', () => {
    describe('Caso do createExpense', () => {
        test('Adicionar expense em expenses', () => {
            const expenses = [];

            const createExpenseMock = jest.fn((userId, Expense) => {
                if (typeof Expense === 'object') {
                    var newExpense = {
                        idUser: userId,
                        cause: Expense.cause,
                        value: Expense.value,
                        date: Expense.date,
                        type: Expense.type
                    };

                    expenses.push(newExpense);
                }
            });

            const expense = new Expense(1, "deu ruim", 5000.99, "2023-05-04", "conserto");

            createExpenseMock(1, expense);
            expect(expenses).toEqual([{
                idUser: 1,
                cause: "deu ruim",
                value: 5000.99,
                date: "2023-05-04",
                type: "conserto"
            }]);
        });
    });

    describe('Caso do getExpenseByUserID', () => {
        test('Retornar expense de expenses pelo id de usuario', () => {
            const expenses = [{
                idUser: 1,
                cause: "deu ruim",
                value: 5000.99,
                date: "2023-05-04",
                type: "troca de bateria"
            },
            {
                idUser: 2,
                cause: "deu mais ruim",
                value: 10000.89,
                date: "2023-05-15",
                type: "conserto"
            }];

            const getExpenseByUserIDMock = jest.fn((userId) => {
                for (let expense of Object.values(expenses)){
                    if (userId === expense.idUser) {
                        return expense;
                    }; 
                };
                
                return {};
            });

            const result = getExpenseByUserIDMock(2);
            expect(result).toMatchObject(expenses[1]);
        });

        test('Não deve retornar expense de expenses pelo id de usuario', () => {
            const expenses = [{
                idUser: 1,
                cause: "deu ruim",
                value: 5000.99,
                date: "2023-05-04",
                type: "troca de bateria"
            },
            {
                idUser: 2,
                cause: "deu mais ruim",
                value: 10000.89,
                date: "2023-05-15",
                type: "conserto"
            }];

            const getExpenseByUserIDMock = jest.fn((userId) => {
                for (let expense of Object.values(expenses)){
                    if (userId === expense.idUser) {
                        return expense;
                    }; 
                };
                
                return {};
            });

            const result = getExpenseByUserIDMock(2);
            expect(result).not.toMatchObject(expenses[0]);
        });
    });

    describe('Caso do getExpenseByID', () => {
        test('Retorna expense em expenses pelo id', () => {
            const expenses = [{
                id: 1,
                idUser: 1,
                cause: "deu ruim",
                value: 5000.99,
                date: "2023-05-04",
                type: "troca de bateria"
            },
            {
                id: 2,
                idUser: 2,
                cause: "deu mais ruim",
                value: 10000.89,
                date: "2023-05-15",
                type: "conserto"
            }];

            const getExpenseByIdMock = jest.fn((expenseId) => {
                for (let expense of Object.values(expenses)){
                    if (expenseId === expense.id) {
                        return expense;
                    }; 
                };
                
                return {};
            });

            const result = getExpenseByIdMock(2);
            expect(result).toMatchObject(expenses[1]);
        });

        test('Não deve retorna expense em expenses pelo id', () => {
            const expenses = [{
                id: 1,
                idUser: 1,
                cause: "deu ruim",
                value: 5000.99,
                date: "2023-05-04",
                type: "troca de bateria"
            },
            {
                id: 2,
                idUser: 2,
                cause: "deu mais ruim",
                value: 10000.89,
                date: "2023-05-15",
                type: "conserto"
            }];

            const getExpenseByIdMock = jest.fn((expenseId) => {
                for (let expense of Object.values(expenses)){
                    if (expenseId === expense.id) {
                        return expense;
                    }; 
                };
                
                return {};
            });

            const result = getExpenseByIdMock(2);
            expect(result).not.toMatchObject(expenses[0]);
        });
    });

    describe('Caso do updateExpense', () => {
        test('Deve atualizar a expense em expenses', () => {
            const expenses = [{
                id: 1,
                idUser: 1,
                cause: "deu ruim",
                value: 5000.99,
                date: "2023-05-04",
                type: "troca de bateria"
            },
            {
                id: 2,
                idUser: 2,
                cause: "deu mais ruim",
                value: 10000.89,
                date: "2023-05-15",
                type: "conserto"
            }];

            const updateExpenseMock = jest.fn((Expense, expenseId) => {
                var index = 0;
                for (let expense of Object.values(expenses)){
                    if (expenseId === expense.id && typeof Expense === 'object') {
                        var newExpense = {
                            id: expense.id,
                            idUser: expense.idUser,
                            cause: Expense.cause,
                            value: Expense.value,
                            date: Expense.date,
                            type: Expense.type
                        };
                        
                        expenses.splice(index, 0, newExpense);
                        return newExpense, index;
                    };
                    index++;
                };
                
                return {};
            });

            const expense = new Expense(2, "deu um pouco ruim", 2000.00, "2023-08-02", "acidente");
            updateExpenseMock(expense, 2);
            expect(expenses[1]).toEqual({
                id: 2,
                idUser: 2,
                cause: "deu um pouco ruim",
                value: 2000.00,
                date: "2023-08-02",
                type: "acidente"
            });
        });
    });

    describe('Caso do deleteExpense', () => {
        test('Deve deletar a expense de id = 2 em expenses', () => {
            const expenses = [{
                id: 1,
                idUser: 1,
                cause: "deu ruim",
                value: 5000.99,
                date: "2023-05-04",
                type: "troca de bateria"
            },
            {
                id: 2,
                idUser: 2,
                cause: "deu mais ruim",
                value: 10000.89,
                date: "2023-05-15",
                type: "conserto"
            },
            {
                id: 3,
                idUser: 3,
                cause: "so uma olhada",
                value: 1200.10,
                date: "2023-05-19",
                type: "revisao"
            }];

            const deleteExpenseMock = jest.fn((expenseId) => {
                var index = 0;
                for (let expense of Object.values(expenses)){
                    if (expenseId === expense.id) {                        
                        expenses.splice(index, 1);
                        return "Deletado";
                    };
                    index++;
                };

                return "Não encontrado";
            });

            const result = deleteExpenseMock(2);
            expect(result).toBe("Deletado");
            expect(expenses).toEqual([{
                id: 1,
                idUser: 1,
                cause: "deu ruim",
                value: 5000.99,
                date: "2023-05-04",
                type: "troca de bateria"
            },
            {
                id: 3,
                idUser: 3,
                cause: "so uma olhada",
                value: 1200.10,
                date: "2023-05-19",
                type: "revisao"
            }]);
        });

        test('Deve deletar a expense de id = 2 em expenses', () => {
            const expenses = [{
                id: 1,
                idUser: 1,
                cause: "deu ruim",
                value: 5000.99,
                date: "2023-05-04",
                type: "troca de bateria"
            },
            {
                id: 2,
                idUser: 2,
                cause: "deu mais ruim",
                value: 10000.89,
                date: "2023-05-15",
                type: "conserto"
            },
            {
                id: 3,
                idUser: 3,
                cause: "so uma olhada",
                value: 1200.10,
                date: "2023-05-19",
                type: "revisao"
            }];

            const deleteExpenseMock = jest.fn((expenseId) => {
                var index = 0;
                for (let expense of Object.values(expenses)){
                    if (expenseId === expense.id) {                        
                        expenses.splice(index, 1);
                        return "Deletado";
                    };
                    index++;
                };

                return "Não encontrado";
            });

            const result = deleteExpenseMock(4);
            expect(result).toBe("Não encontrado");
            expect(expenses).toEqual([{
                id: 1,
                idUser: 1,
                cause: "deu ruim",
                value: 5000.99,
                date: "2023-05-04",
                type: "troca de bateria"
            },
            {
                id: 2,
                idUser: 2,
                cause: "deu mais ruim",
                value: 10000.89,
                date: "2023-05-15",
                type: "conserto"
            },
            {
                id: 3,
                idUser: 3,
                cause: "so uma olhada",
                value: 1200.10,
                date: "2023-05-19",
                type: "revisao"
            }]);
        });
    });
});