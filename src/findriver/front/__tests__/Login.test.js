import React from 'react';
import renderer from 'react-test-renderer';

import Login from '../view/pages/Login/index';

describe('<Login />', () => {
  it('Renderiza corretamente', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});