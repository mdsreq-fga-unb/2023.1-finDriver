jest.mock('../service/expenseService');
import { Expense } from '../model/expenseModel';

jest.mock('../model/expenseModel', () => {
    const mockExpense = {
        Expense: jest.fn().mockImplementation((idUser, cause, value, date, type, description) => {
            return {
                idUser,
                cause,
                value,
                date,
                type,
                description
            };
        }),
    };
    return mockExpense;
});

const expenses = [
    {
        id: 0,
        idUser: 1,
        cause: "deu ruim",
        value: 5000.99,
        date: "2023-05-04",
        type: "conserto",
        description: "algumacoisa"
    },
    {
        id: 1,
        idUser: 2,
        cause: "deu um pouco ruim",
        value: 2000.00,
        date: "2023-08-02",
        type: "acidente",
        description: "algumacoisa"
    }
];

describe('Funções do expenseService', () => {
    describe('Caso do createExpense', () => {
        test('Adicionar expense em expenses', () => {
            const createExpenseMock = jest.fn((userId, Expense) => {
                Expense['id'] = expenses.length;
                Expense['idUser'] = userId;
                expenses.push(Expense);
            });

            const expense = new Expense(4, "pneu furado", 800.50, "2023-01-12", "troca", "problemas");

            createExpenseMock(4, expense);
            expect(expenses).toEqual([
                {
                    id: 0,
                    idUser: 1,
                    cause: "deu ruim",
                    value: 5000.99,
                    date: "2023-05-04",
                    type: "conserto",
                    description: "algumacoisa"
                },
                {
                    id: 1,
                    idUser: 2,
                    cause: "deu um pouco ruim",
                    value: 2000.00,
                    date: "2023-08-02",
                    type: "acidente",
                    description: "algumacoisa"
                },
                {
                    id: 2,
                    idUser: 4,
                    cause: "pneu furado",
                    value: 800.50,
                    date: "2023-01-12",
                    type: "troca",
                    description: "problemas"
                }
            ]);
        });
    });

    describe('Caso do getExpenseById', () => {
        test('getExpenseById deve retornar a Expense de id = 1', () => {
            const getExpenseByIdMock = jest.fn((id) => {
                const expense = expenses[id];
                return expense;
            });

            const result = getExpenseByIdMock(1);
            expect(result).toEqual(
            {
                id: 1,
                idUser: 2,
                cause: "deu um pouco ruim",
                value: 2000.00,
                date: "2023-08-02",
                type: "acidente",
                description: "algumacoisa"
            });
        });
    });

    describe('Caso do updateExpense', () => {
        test('Deve atualizar a expense em expenses', () => {
            const updateExpenseMock = jest.fn((Expense, expenseId) => {
                if (expenses[expenseId].id){
                    expenses[expenseId].cause = Expense.cause;
                    expenses[expenseId].value = Expense.value;
                    expenses[expenseId].date = Expense.date;
                    expenses[expenseId].type = Expense.type;
                    expenses[expenseId].description = Expense.description;
                    return true;
                }
            });

            expenses[1].cause = "Porta não fecha";
            expenses[1].value = 239.98;
            expenses[1].date = "2023-07-02";
            expenses[1].type = "conserto";
            expenses[1].description = "Rapido de resolver";
            updateExpenseMock(expenses[1], 1);
            expect(expenses[1]).toEqual({
                id: 1,
                idUser: 2,
                cause: "Porta não fecha",
                value: 239.98,
                date: "2023-07-02",
                type: "conserto",
                description: "Rapido de resolver"
            });
        });
    });

    describe('Função para deletar a Expense', () => {
        test('Teste para verificar se a Expense foi deletada', () => {
            const deleteExpenseByIdMock = jest.fn((id) => {
                if (expenses[id].id === id){
                    expenses.splice(id, 1);
                    return true;
                }
            });
            const result = deleteExpenseByIdMock(1);
            expect(result).toBe(true);
        });
    });
});