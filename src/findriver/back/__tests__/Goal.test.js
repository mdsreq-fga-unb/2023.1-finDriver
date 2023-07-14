jest.mock('../service/goalService');
import { Goal } from '../model/goalModel';

jest.mock('../model/goalModel', () => {
    const mockGoal = {
        Goal: jest.fn().mockImplementation((idUser, total, got, deadline, description) => {
            return {
                idUser,
                total,
                got,
                deadline,
                description
            };
        }),
    };
    return mockGoal;
});

const goals = [
    {
        id: 0,
        idUser: 3,
        total: 5000.00,
        got: 76.98,
        deadline: "2024-12-25",
        description: "Viagem para o proximo ano"
    },
    {
        id: 1,
        idUser: 5,
        total: 22000.00,
        got: 1201.75,
        deadline: "2025-07-04",
        description: "Trocar de carro"
    }
];

describe('Funções do goalService', () => {
    describe('Caso do createGoal', () => {
        test('Adicionar nova meta em goals', () => {
            const createGoalMock = jest.fn((userId, Goal) => {
                Goal['id'] = goals.length;
                Goal['idUser'] = userId;
                goals.push(Goal);
            });

            const newGoal = new Goal(7, 7000.00, 235.89, "2023-11-05", "Revisão do carro");
            createGoalMock(7, newGoal);
            expect(goals).toEqual([
                {
                    id: 0,
                    idUser: 3,
                    total: 5000.00,
                    got: 76.98,
                    deadline: "2024-12-25",
                    description: "Viagem para o proximo ano"
                },
                {
                    id: 1,
                    idUser: 5,
                    total: 22000.00,
                    got: 1201.75,
                    deadline: "2025-07-04",
                    description: "Trocar de carro"
                },
                {
                    id: 2,
                    idUser: 7,
                    total: 7000.00,
                    got: 235.89,
                    deadline: "2023-11-05",
                    description: "Revisão do carro"
                }
            ]);
        });
    });

    describe('Caso do getGoalById', () => {
        test('getGoalById deve retornar a meta de id = 1', () => {
            const getGoalByIdMock = jest.fn((id) => {
                const goal = goals[id];
                return goal;
            });

            const result = getGoalByIdMock(1);
            expect(result).toEqual(
            {
                id: 1,
                idUser: 5,
                total: 22000.00,
                got: 1201.75,
                deadline: "2025-07-04",
                description: "Trocar de carro"
            });
        });
    });

    describe('Caso do updateGoal', () => {
        test('Atualizar meta em goals', () => {
            const updateGoalMock = jest.fn((Goal, goalId) => {
                if (goals[goalId].id){
                    goals[goalId].total = Goal.total;
                    goals[goalId].got = Goal.got;
                    goals[goalId].deadline = Goal.deadline;
                    goals[goalId].description = Goal.description;
                    return true;
                }
            });

            goals[1].total = 3000.00;
            goals[1].got = 112.90;
            goals[1].deadline = "2023-09-14";
            goals[1].description = "Trocar pneu";
            updateGoalMock(goals[1], 1);
            expect(goals[1]).toEqual({
                id: 1,
                idUser: 5,
                total: 3000.00,
                got: 112.90,
                deadline: "2023-09-14",
                description: "Trocar pneu"
            });
        });
    });

    describe('Função para deletar a meta', () => {
        test('Teste para verificar se a meta foi deletada', () => {
            const deleteGoalByIdMock = jest.fn((id) => {
                if (goals[id].id === id){
                    goals.splice(id, 1);
                    return true;
                }
            });
            const result = deleteGoalByIdMock(1);
            expect(result).toBe(true);
        });
    });
});