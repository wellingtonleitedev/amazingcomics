import React from 'react';
import {render} from '@testing-library/react-native';
import InputIcon from '../../components/InputIcon';

describe('Input with Icon Component', () => {
  it('should render input and icon', () => {
    const {getByTestId, getByPlaceholderText} = render(
      <InputIcon icon="arrow-left" placeholder="InputMocked" />,
    );

    const icon = getByTestId('icon');
    const input = getByPlaceholderText('InputMocked');

    expect(icon.props.style[2].fontFamily).toEqual('Feather');
    expect(input.props.placeholder).toEqual('InputMocked');
  });
});
