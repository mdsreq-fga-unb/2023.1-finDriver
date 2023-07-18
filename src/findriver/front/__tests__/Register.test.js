import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';

import Register from '../view/pages/Register/index';

jest.mock('react-native-push-notification', () => ({
    __esModule: true,
    default: {
      configure: jest.fn(),
    },
}));

describe('Register', () => {
    it('should render register information correctly', () =>{
        const { getByText, getByPlaceholderText } = render(<Register/>);

        expect(getByText('Nome')).toBeTruthy();
        expect(getByPlaceholderText('Nome')).toBeTruthy();

        expect(getByText('E-mail')).toBeTruthy();
        expect(getByPlaceholderText('E-mail')).toBeTruthy();

        expect(getByText('Senha')).toBeTruthy();
        expect(getByPlaceholderText('Senha')).toBeTruthy();

        expect(getByText('Confirme sua senha')).toBeTruthy();
        expect(getByPlaceholderText('Confirme sua senha')).toBeTruthy();

        expect(getByText('A senha deve conter ao menos 8 caracteres, sendo um deles um caracter especial!')).toBeTruthy();

        expect(getByText('Continuar')).toBeTruthy();

        expect(getByText('Já possuo conta')).toBeTruthy();
    });

    it('should display error when any field is empty', () => {
        const navigation = {
          navigate: jest.fn(),
        };
        const { getByText } = render(<Register navigation={navigation} />);
        const registerButton = getByText('Continuar');

        const mockAlert = jest.spyOn(Alert, 'alert');

        fireEvent.press(registerButton);
      
        expect(mockAlert).toHaveBeenCalledWith('Erro', 'Por favor, preencha todos os campos obrigatórios.');

        mockAlert.mockRestore();
    });
      
    it('should display error when passwords do not match', () => {
        const navigation = {
        navigate: jest.fn(),
        };
        const { getByText, getByPlaceholderText } = render(<Register navigation={navigation} />);
        const registerButton = getByText('Continuar');
        const nameInput = getByPlaceholderText('Nome');
        const emailInput = getByPlaceholderText('E-mail');
        const passwordInput = getByPlaceholderText('Senha');
        const repeatPasswordInput = getByPlaceholderText('Confirme sua senha');
      
        fireEvent.changeText(nameInput, 'Yaba Bão');
        fireEvent.changeText(emailInput, 'viniciusmendes1019@gmail.com');
        fireEvent.changeText(passwordInput, 'passwo#rd');
        fireEvent.changeText(repeatPasswordInput, 'pa#ssword2');

        const mockAlert = jest.spyOn(Alert, 'alert');

        fireEvent.press(registerButton);
      
        expect(mockAlert).toHaveBeenCalledWith('Erro', 'As senhas não coincidem. Por favor, tente novamente.');

        mockAlert.mockRestore();
    });

    it('should display error when email is not valid', () => {
        const navigation = {
        navigate: jest.fn(),
        };
        const { getByText, getByPlaceholderText } = render(<Register navigation={navigation} />);
        const registerButton = getByText('Continuar');
        const nameInput = getByPlaceholderText('Nome');
        const emailInput = getByPlaceholderText('E-mail');
        const passwordInput = getByPlaceholderText('Senha');
        const repeatPasswordInput = getByPlaceholderText('Confirme sua senha');
      
        fireEvent.changeText(nameInput, 'Yaba Bão');
        fireEvent.changeText(emailInput, 'vini19@@gmail..com');
        fireEvent.changeText(passwordInput, '#@1234598');
        fireEvent.changeText(repeatPasswordInput, '#@1234598');

        const mockAlert = jest.spyOn(Alert, 'alert');

        fireEvent.press(registerButton);
      
        expect(mockAlert).toHaveBeenCalledWith('Erro', 'O email inserido não é válido.');

        mockAlert.mockRestore();
    }); 
      
    it('should navigate to Entrar when all fields are filled correctly', () => {
        const navigation = {
            navigate: jest.fn(),
        };
        const { getByText } = render(<Register navigation={navigation}/>);
        const enterButton = getByText('Já possuo conta');

        fireEvent.press(enterButton);

        expect(navigation.navigate).toHaveBeenCalledWith('Entrar');
    });
});