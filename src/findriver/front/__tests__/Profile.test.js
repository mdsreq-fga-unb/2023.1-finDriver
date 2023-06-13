import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AsyncStorage from './__mocks__/@react-native-async-storage/async-storage'

import Profile from '../view/pages/Profile/index';

describe('Profile', () => {
  it('should render profile information correctly', () => {
    const { getByText } = render(<Profile />);

    expect(getByText('Perfil')).toBeTruthy();
    expect(getByText('Nome:')).toBeTruthy();
    expect(getByText('Email:')).toBeTruthy();
    expect(getByText('Editar')).toBeTruthy();
    expect(getByText('Apagar conta')).toBeTruthy();
  });

  it('should handle edit button correctly', () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const { getByText } = render(<Profile navigation={navigation} />);
    const editarButton = getByText('Editar');

    fireEvent.press(editarButton);

    expect(navigation.navigate).toHaveBeenCalledWith('Editar Perfil', {
      "user": {
        "email": "",
        "id": "",
        "name": "",
      },
    }
    );
  });
});
