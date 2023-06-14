import React from 'react';
import AsyncStorage from '../__mocks__/@react-native-async-storage/async-storage'
import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';

import Login from '../view/pages/Login/index';

jest.mock('react-native-push-notification', () => ({
  __esModule: true,
  default: {
    configure: jest.fn(),
  },
}));

describe('Login', () => {
  it('should render login correctly', () => {
    const { getByText } = render(<Login/>);

    expect(getByText('Email')).toBeTruthy();
    expect(getByText('Senha')).toBeTruthy();
    expect(getByText('Entrar')).toBeTruthy();
    expect(getByText('Cadastre-se')).toBeTruthy();
  });

  /*
  it('should handle forgot password button correctly', () => {
    const { getByText } = render(<Login/>);
    const forgotPasswordButton = getByText('Esqueceu a senha?');

    const mockAlert = jest.spyOn(Alert, 'alert');

    fireEvent.press(forgotPasswordButton);
    
    expect(mockAlert).toHaveBeenCalledWith('Tá muito esquecidinho em');

    mockAlert.mockRestore();
  });
  */

  it('should handle signUp button correctly', () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const { getByText } = render(<Login navigation={navigation}/>);
    const signUpButton = getByText('Cadastre-se');

    fireEvent.press(signUpButton);

    expect(navigation.navigate).toHaveBeenCalledWith('Registrar');

  });
});