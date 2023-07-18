jest.mock('../service/carService');

import { Car } from '../model/carModel';

jest.mock('../model/carModel', () => {
    const mockCar = {
        Car: jest.fn().mockImplementation((idUser, year, model, mileage, license_plate, kmPerAlcool, kmPerGas, notes) => {
            return {
                idUser,
                year,
                model,
                mileage,
                license_plate,
                kmPerAlcool,
                kmPerGas,
                notes
            };
        })
    };
    return mockCar;
});

const cars = [
    {
        id: 0,
        idUser: 3,
        year: "2014",
        model: "Ford KA",
        mileage: 457.12,
        license_plate: "DAP1316",
        kmPerAlcool: 8.4,
        kmPerGas: 12.9,
        notes: "Alguma Coisa" 
    },
    {
        id: 1,
        idUser: 7,
        year: "2016",
        model: "Toyota Corolla",
        mileage: 346.98,
        license_plate: "PAD2016",
        kmPerAlcool: 7.3,
        kmPerGas: 13.2,
        notes: "Outra coisa"
    }
]

describe('Funções do carService', () => {
    describe('Caso do createCar', () => {
        test('Adicionar carro em cars', () => {
            const createCarMock = jest.fn((userId, Car) => {
                Car['id'] = cars.length;
                Car['idUser'] = userId;
                cars.push(Car);
            });

            const newCar = new Car(7, "2017", "Chevrolet Onix", 0, "RAD3078", 7.1, 15.1, "Alguma outra coisa");
            createCarMock(7, newCar);
            expect(cars).toEqual([
                {
                    id: 0,
                    idUser: 3,
                    year: "2014",
                    model: "Ford KA",
                    mileage: 457.12,
                    license_plate: "DAP1316",
                    kmPerAlcool: 8.4,
                    kmPerGas: 12.9,
                    notes: "Alguma Coisa" 
                },
                {
                    id: 1,
                    idUser: 7,
                    year: "2016",
                    model: "Toyota Corolla",
                    mileage: 346.98,
                    license_plate: "PAD2016",
                    kmPerAlcool: 7.3,
                    kmPerGas: 13.2,
                    notes: "Outra coisa"
                },
                {
                    id: 2,
                    idUser: 7,
                    year: "2017",
                    model: "Chevrolet Onix",
                    mileage: 0,
                    license_plate: "RAD3078",
                    kmPerAlcool: 7.1,
                    kmPerGas: 15.1,
                    notes: "Alguma outra coisa"
                }
            ]);
        });
    });

    describe('Caso do getCarById', () => {
        test('getCarById deve retornar o carro de id = 1', () => {
            const getCarByIdMock = jest.fn((id) => {
                const car = cars[id];
                return car;
            });

            const result = getCarByIdMock(1);
            expect(result).toEqual(
            {
                id: 1,
                idUser: 7,
                year: "2016",
                model: "Toyota Corolla",
                mileage: 346.98,
                license_plate: "PAD2016",
                kmPerAlcool: 7.3,
                kmPerGas: 13.2,
                notes: "Outra coisa"
            });
        });
    });

    describe('Caso do updateCar', () => {
        test('Atualizar atributos do carro', () => {
            const updateCarMock = jest.fn((Car, carId) => {
                if (cars[carId].id){
                    cars[carId].model = Car.model;
                    cars[carId].year = Car.year;
                    cars[carId].notes = Car.notes;
                    cars[carId].kmPerAlcool = Car.kmPerAlcool;
                    cars[carId].kmPerGas = Car.kmPerGas;
                    cars[carId].license_plate = Car.license_plate;
                    cars[carId].mileage = Car.mileage;
                    return true;
                }
            });

            cars[1].model = "Honda civic";
            cars[1].year = "2018";
            cars[1].notes = "Outras coisas";
            cars[1].mileage = 123.4;
            cars[1].kmPerAlcool = 8.3;
            cars[1].kmPerGas = 14.5;
            cars[1].license_plate = "RAD3456";
            updateCarMock(cars[1], 1);
            expect(cars[1]).toEqual({
                id: 1,
                idUser: 7,
                year: "2018",
                model: "Honda civic",
                mileage: 123.4,
                license_plate: "RAD3456",
                kmPerAlcool: 8.3,
                kmPerGas: 14.5,
                notes: "Outras coisas"
            });
        });
    });

    describe('Função para deletar o carro', () => {
        test('Teste para verificar se o carro foi deletada', () => {
            const deleteCarByIdMock = jest.fn((id) => {
                if (cars[id].id === id){
                    cars.splice(id, 1);
                    return true;
                }
            });
            const result = deleteCarByIdMock(1);
            expect(result).toBe(true);
        });
    });
});