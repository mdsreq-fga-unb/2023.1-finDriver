jest.mock('../service/rideService');
import { Ride } from '../model/rideModel';

jest.mock('../model/rideModel', () => {
    const mockRide = {
        Ride: jest.fn().mockImplementation((idUser, value, kilometerage, application, description, date) => {
            return {
                idUser,
                value,
                kilometerage,
                application,
                description,
                date
            };
        }),
    };
    return mockRide;
});

const rides = [
    {
        id: 0,
        idUser: 0,
        value: 12.9,
        kilometerage: 2.9,
        application: 'Uber',
        description: 'Test Ride',
        date: '2023-10-06'
    },
    {
        id: 1,
        idUser: 1,
        value: 20.7,
        kilometerage: 5.7,
        application: '99',
        description: 'Something',
        date: '2023-09-06'
    }
];

describe('Funções do rideService', () => {
    describe('Caso do createRide', () => {
        test('Deve criar uma nova ride em rides', () => {
            const createRideMock = jest.fn((userId, Ride) => {
                Ride['id'] = rides.length;
                Ride['idUser'] = userId;
                rides.push(Ride)
            });

            const newRide = new Ride(2, 17.3, 7.3, "Uber", "Nada", "2023-08-01");
            createRideMock(2, newRide);
            expect(rides).toEqual([
                {
                    id: 0,
                    idUser: 0,
                    value: 12.9,
                    kilometerage: 2.9,
                    application: 'Uber',
                    description: 'Test Ride',
                    date: '2023-10-06'
                },
                {
                    id: 1,
                    idUser: 1,
                    value: 20.7,
                    kilometerage: 5.7,
                    application: '99',
                    description: 'Something',
                    date: '2023-09-06'
                },
                {
                    id: 2,
                    idUser: 2,
                    value: 17.3,
                    kilometerage: 7.3,
                    application: 'Uber',
                    description: 'Nada',
                    date: '2023-08-01'
                }
            ]);

        });
    });

    describe('Caso do getRideById', () => {
        test('getRideById deve retornar a corrida de id = 1', () => {
            const getRideByIdMock = jest.fn((id) => {
                const ride = rides[id];
                return ride;
            });

            const result = getRideByIdMock(1);
            expect(result).toEqual(
            {
                id: 1,
                idUser: 1,
                value: 20.7,
                kilometerage: 5.7,
                application: '99',
                description: 'Something',
                date: '2023-09-06'
            });
        });
    });

    describe('Caso do updateRideById', () => {
        test('Deve atualizar informações da ride de id = 0', () => {
            
            const updateRideByIdMock = jest.fn((Ride, rideId) => {
                if (rides[rideId].id){
                    rides[rideId].application = Ride.application;
                    rides[rideId].date = Ride.date;
                    rides[rideId].description = Ride.description;
                    rides[rideId].kilometerage = Ride.kilometerage;
                    rides[rideId].value = Ride.value;
                    return true;
                }
            });

            //const ride = new Ride(1, 12.9, 25.7, 'Uber', 'Lorem', '2023-07-08');
            rides[0].application = "99"
            rides[0].date = "2023-10-08"
            rides[0].description = "Something"
            rides[0].kilometerage = 40.7
            rides[0].value = 20.7;
            updateRideByIdMock(rides[0], 0);
            expect(rides[0]).toEqual({
                id: 0,
                idUser: 0,
                value: 20.7,
                kilometerage: 40.7,
                application: '99',
                description: 'Something',
                date: '2023-10-08'
            });
        });
    });

    describe('Função para deletar a corrida', () => {
        test('Teste para verificar se a corrida foi deletada', () => {
            const deleteRideByIdMock = jest.fn((id) => {
                if (rides[id].id === id){
                    rides.splice(id, 1);
                    return true;
                }
            });
            const result = deleteRideByIdMock(1);
            expect(result).toBe(true);
        });
    });
});