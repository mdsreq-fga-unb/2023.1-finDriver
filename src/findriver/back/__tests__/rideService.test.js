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

describe('Funções do rideService', () => {
    describe('Caso do createRide', () => {
        test('Adicionar ride em rides', () => {
            const rides = [];

            const createRideMock = jest.fn((userId, Ride) => {
                if (typeof Ride === 'object') {
                    var newRide = {
                        idUser: userId,
                        value: Ride.value,
                        kilometerage: Ride.kilometerage,
                        application: Ride.application,
                        description: Ride.description,
                        date: Ride.date
                    };

                    rides.push(newRide);
                }
            });
            
            const ride = new Ride(1, 12.9, 2.9, 'Uber', 'Test Ride', '2023-10-06');
            
            createRideMock(1, ride);
            expect(rides).toEqual([{
                idUser: 1,
                value: 12.9,
                kilometerage: 2.9,
                application: 'Uber',
                description: 'Test Ride',
                date: '2023-10-06',
            }]);
        });
    });
    
    describe('Caso do getRideByUserId', () => {
        test('Retornar corrida pelo id de usuario', () => {
            const rides = [{
                idUser: 1,
                value: 20.9,
                kilometerage: 10.9,
                application: "Uber",
                description: "algo",
                date: "date"
            },
            {
                idUser: 2,
                value: 35.7,
                kilometerage: 25.7,
                application: "99",
                description: "exemplo",
                date: "date"
            }];

            const getRideByUserIdMock = jest.fn((userId) => {
                for (let ride of Object.values(rides)){
                    if (userId === ride.idUser) {
                        return ride;
                    }; 
                };
                
                return {};
            });

            const result = getRideByUserIdMock(1);

            expect(result).toMatchObject(rides[0]);
        });

        test('Não deve retornar corrida pelo id de usuario', () => {

            const rides = [{
                idUser: 1,
                value: 20.9,
                kilometerage: 10.9,
                application: "Uber",
                description: "algo",
                date: "date"
            },
            {
                idUser: 2,
                value: 35.7,
                kilometerage: 25.7,
                application: "99",
                description: "exemplo",
                date: "date"
            }];

            const getRideByUserIdMock = jest.fn((userId) => {
                for (let ride of Object.values(rides)){
                    if (userId === ride.idUser) {
                        return ride;
                    }; 
                };
                
                return {};
            });

            const result = getRideByUserIdMock(1);

            expect(result).not.toMatchObject(rides[1]);
        });
    });

    describe('Caso do getRideByRideId', () => {
        test('Retornar corrida pelo id da corrida', () => {
            const rides = [{
                id: 1,
                idUser: 1,
                value: 20.9,
                kilometerage: 10.9,
                application: "Uber",
                description: "algo",
                date: "date"
            },
            {
                id: 2,
                idUser: 2,
                value: 35.7,
                kilometerage: 25.7,
                application: "99",
                description: "exemplo",
                date: "date"
            }];

            const getRideByRideIdMock = jest.fn((rideId) => {
                for (let ride of Object.values(rides)){
                    if (rideId === ride.id) {
                        return ride;
                    }; 
                };
                
                return {};
            });

            const result = getRideByRideIdMock(2);

            expect(result).toMatchObject(rides[1]);
        });

        test('Não deve retornar corrida pelo id da corrida', () => {
            const rides = [{
                id: 1,
                idUser: 1,
                value: 20.9,
                kilometerage: 10.9,
                application: "Uber",
                description: "algo",
                date: "date"
            },
            {
                id: 2,
                idUser: 2,
                value: 35.7,
                kilometerage: 25.7,
                application: "99",
                description: "exemplo",
                date: "date"
            }];

            const getRideByRideIdMock = jest.fn((rideId) => {
                for (let ride of Object.values(rides)){
                    if (rideId === ride.id) {
                        return ride;
                    }; 
                };
                
                return {};
            });

            const result = getRideByRideIdMock(1);

            expect(result).not.toMatchObject(rides[1]);
        });
    });

    describe('Caso do updateRideById', () => {
        test('Deve atualizar informações da ride de id = 1', () => {
            const rides = [{
                id: 1,
                idUser: 1,
                value: 20.9,
                kilometerage: 10.9,
                application: "Uber",
                description: "algo",
                date: "date"
            },
            {
                id: 2,
                idUser: 2,
                value: 35.7,
                kilometerage: 25.7,
                application: "99",
                description: "exemplo",
                date: "date"
            }];

            const updateRideByIdMock = jest.fn((Ride, rideId) => {
                var index = 0;
                for (let ride of Object.values(rides)){
                    if (rideId === ride.id && typeof Ride === 'object') {
                        var newRide = {
                            id: ride.id,
                            idUser: ride.idUser,
                            value: Ride.value,
                            kilometerage: Ride.kilometerage,
                            application: Ride.application,
                            description: Ride.description,
                            date: Ride.date
                        };
                        
                        rides.splice(index, 0, newRide)
                        return newRide, index;
                    };
                    index++;
                };
                
                return {};
            });

            const ride = new Ride(1, 12.9, 25.7, 'Uber', 'Lorem', '2023-07-08');
            updateRideByIdMock(ride, 1);
            expect(rides[0]).toEqual({
                id: 1,
                idUser: 1,
                value: 12.9,
                kilometerage: 25.7,
                application: 'Uber',
                description: 'Lorem',
                date: '2023-07-08'
            });
        });
    });

    describe('Caso do deleteRideById', () => {
        test('Deve excluir a ride de id = 2', () => {
            const rides = [{
                id: 1,
                idUser: 1,
                value: 20.9,
                kilometerage: 10.9,
                application: "Uber",
                description: "algo",
                date: "date"
            },
            {
                id: 2,
                idUser: 2,
                value: 35.7,
                kilometerage: 25.7,
                application: "99",
                description: "exemplo",
                date: "data"
            },
            {
                id: 3,
                idUser: 3,
                value: 56.2,
                kilometerage: 46.2,
                application: "99",
                description: "viagem",
                date: "domingo"
            }];

            const deleteRideByIdMock = jest.fn((rideId) => {
                var index = 0;
                for (let ride of Object.values(rides)){
                    if (rideId === ride.id) {                        
                        rides.splice(index, 1)
                        return "Deletado";
                    };
                    index++;
                };

                return "Não encontrado";
            });

            const result = deleteRideByIdMock(2);
            expect(result).toBe("Deletado");
            expect(rides).toEqual([{
                id: 1,
                idUser: 1,
                value: 20.9,
                kilometerage: 10.9,
                application: "Uber",
                description: "algo",
                date: "date"
            },
            {
                id: 3,
                idUser: 3,
                value: 56.2,
                kilometerage: 46.2,
                application: "99",
                description: "viagem",
                date: "domingo"
            }]);
        });

        test('Não deve deletar nada', () => {
            const rides = [{
                id: 1,
                idUser: 1,
                value: 20.9,
                kilometerage: 10.9,
                application: "Uber",
                description: "algo",
                date: "date"
            },
            {
                id: 2,
                idUser: 2,
                value: 35.7,
                kilometerage: 25.7,
                application: "99",
                description: "exemplo",
                date: "data"
            },
            {
                id: 3,
                idUser: 3,
                value: 56.2,
                kilometerage: 46.2,
                application: "99",
                description: "viagem",
                date: "domingo"
            }];

            const deleteRideByIdMock = jest.fn((rideId) => {
                var index = 0;
                for (let ride of Object.values(rides)){
                    if (rideId === ride.id) {                        
                        rides.splice(index, 1)
                        return "Deletado";
                    };
                    index++;
                };

                return "Não encontrado";
            });

            const result = deleteRideByIdMock(4);
            expect(result).toBe("Não encontrado");
            expect(rides).toEqual([{
                id: 1,
                idUser: 1,
                value: 20.9,
                kilometerage: 10.9,
                application: "Uber",
                description: "algo",
                date: "date"
            },
            {
                id: 2,
                idUser: 2,
                value: 35.7,
                kilometerage: 25.7,
                application: "99",
                description: "exemplo",
                date: "data"
            },
            {
                id: 3,
                idUser: 3,
                value: 56.2,
                kilometerage: 46.2,
                application: "99",
                description: "viagem",
                date: "domingo"
            }]);
        });
    });
});