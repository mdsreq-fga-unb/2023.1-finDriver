import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';

import Settings from '../view/pages/Settings/index';

jest.mock('react-native-push-notification', () => ({
    __esModule: true,
    default: {
      configure: jest.fn(),
    },
}));

describe('Settings', () => {
    it('should render profile information correctly', () => {
        const { getByText } = render(<Settings/>);

        expect(getByText('Ajustes')).toBeTruthy();
        expect(getByText('Meu Perfil')).toBeTruthy();
        expect(getByText('Meu Carro')).toBeTruthy();
        expect(getByText('Sair')).toBeTruthy();
    });

    it('Should handle perfil correctly', () =>{
        const navigation = {
            navigate: jest.fn(),
        };

        const { getByText } = render(<Settings navigation={navigation} />);
        const perfilButton = getByText('Meu Perfil');

        fireEvent.press(perfilButton);

        expect(navigation.navigate).toHaveBeenCalledWith('Perfil');
    });

    
    it('Should handle exit correctly', () =>{
        const navigation = {
            navigate: jest.fn(),
        };
        const { getByText } = render(<Settings navigation={navigation} />);
        const exitAccountButton = getByText('Sair');

        const mockAlert = jest.spyOn(Alert, 'alert');

        fireEvent.press(exitAccountButton);

        expect(mockAlert).toHaveBeenCalledWith(
            'Confirmação',
            'Tem certeza de que deseja sair?\nVocê será desconectado da sua conta atual.',
            expect.arrayContaining([
                expect.objectContaining({ text: 'Sair' }),
                expect.objectContaining({ text: 'Cancelar' }),
            ]),
            { cancelable: false }
        );

        mockAlert.mockRestore();
    });


});