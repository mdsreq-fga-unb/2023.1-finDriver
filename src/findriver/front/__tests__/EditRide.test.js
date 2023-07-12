import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';

import EditRide from '../view/pages/EditRide';

jest.mock('react-native-push-notification', () => ({
    __esModule: true,
    default: {
        configure: jest.fn(),
    },
}));

describe('EditRide', () => {
    it('should render edit ride correctly', () => {
        const route = {
            params : {
                ride : {
                    application: 'Uber',
                    date: '2023/07/2023',
                    description: 'Corrida de ifood',
                    id: 120,
                    idUser: 249,
                    kilometerage: 12.00,
                    value: 34,
                },
            },
        }

        const { getByText } = render(<EditRide route={route}/>);

        expect(getByText('Editar corrida')).toBeTruthy();
        expect(getByText('Valor')).toBeTruthy();
        expect(getByText('Quilometragem percorrida')).toBeTruthy();
        expect(getByText('Aplicativo utilizado')).toBeTruthy();
        expect(getByText('Data')).toBeTruthy();
        expect(getByText('Descrição')).toBeTruthy();
        expect(getByText('Confirmar')).toBeTruthy();
    });
    
    it('handle input changes', () => {
        const route = {
            params : {
                ride : {
                    application: 'Uber',
                    date: '2023/07/2023',
                    description: 'Corrida de ifood',
                    id: 120,
                    idUser: 249,
                    kilometerage: 12.00,
                    value: 34,
                },
            },
        }

        const { getByPlaceholderText } = render(<EditRide route={route}/>);

        const valueInput = getByPlaceholderText('00.00');
        const quilometersInput = getByPlaceholderText('00.0');
        const appInput = getByPlaceholderText('App de corrida');
        const dateInput = getByPlaceholderText('YYY/MM/DD');
        const descriptionInput = getByPlaceholderText('Descrição (opcional)');

        fireEvent.changeText(valueInput, '34.00');
        fireEvent.changeText(quilometersInput, '7.00');
        fireEvent.changeText(appInput, 'Uber');
        fireEvent.changeText(dateInput, '2023/06/22');
        fireEvent.changeText(descriptionInput, 'Corrida para Valparaiso, pessoa doida');

        expect(valueInput.props.value).toBe('34.00');
        expect(quilometersInput.props.value).toBe('7.00');
        expect(appInput.props.value).toBe('Uber');
        expect(dateInput.props.value).toBe('2023/06/22');
        expect(descriptionInput.props.value).toBe('Corrida para Valparaiso, pessoa doida');
    });

    it('handle value input validation', () => {
        const navigation = {
            navigate: jest.fn(),
        };

        const route = {
            params : {
                ride : {
                    application: 'Uber',
                    date: '2023/07/2023',
                    description: 'Corrida de ifood',
                    id: 120,
                    idUser: 249,
                    kilometerage: 12.00,
                    value: 34,
                },
            },
        }

        const { getByText, getByPlaceholderText } = render(<EditRide navigation={navigation} route={route}/>);
        const confirmButton = getByText('Confirmar');
        
        const valueInput = getByPlaceholderText('00.00');
        const quilometersInput = getByPlaceholderText('00.0');
        const appInput = getByPlaceholderText('App de corrida');
        const dateInput = getByPlaceholderText('YYY/MM/DD');
        const descriptionInput = getByPlaceholderText('Descrição (opcional)');

        fireEvent.changeText(valueInput, '10000000');
        fireEvent.changeText(quilometersInput, '6.0');
        fireEvent.changeText(appInput, 'Uber');
        fireEvent.changeText(dateInput, '2023/06/22');
        fireEvent.changeText(descriptionInput, 'Corrida para Valparaiso, pessoa doida');

        const mockAlert = jest.spyOn(Alert, 'alert');

        fireEvent.press(confirmButton);

        expect(mockAlert).toHaveBeenCalledWith("Erro", "Os valores inseridos não são válidos");

        mockAlert.mockRestore();
    });

});