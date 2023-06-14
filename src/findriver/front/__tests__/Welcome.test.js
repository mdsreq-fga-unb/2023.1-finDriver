import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';

import Welcome from '../view/pages/Welcome/index';

describe('Welcome', () => {
    it('should render Welcome correctly', () => {
        const { getByText } = render(<Welcome/>);

        const enterButton = getByText('Entrar');
        const registerButton = getByText('Cadastrar-se');

        expect(enterButton).toBeTruthy();
        expect(registerButton).toBeTruthy();
    });

    it('should handle enter button correctly', () => {
        const navigation = {
            navigate: jest.fn(),
        };
        const { getByText } = render(<Welcome navigation={navigation}/>);
        const enterButton = getByText('Entrar');

        fireEvent.press(enterButton);

        expect(navigation.navigate).toHaveBeenCalledWith('Entrar');
    });

    it('should handle register button correctly', () => {
        const navigation = {
            navigate: jest.fn(),
        };
        const { getByText } = render(<Welcome navigation={navigation}/>);
        const registerButton = getByText('Cadastrar-se');

        fireEvent.press(registerButton);

        expect(navigation.navigate).toHaveBeenCalledWith('Registrar');
    });
});