import React from 'react';
import {render} from '@testing-library/react-native';
import SearchInput from '../../components/SearchInput';

describe('Search Input Component', () => {
  it('should render input and icon', () => {
    const {getByTestId, getByPlaceholderText} = render(
      <SearchInput placeholder="SearchInputMocked" />,
    );

    const icon = getByTestId('search-icon');
    const input = getByPlaceholderText('SearchInputMocked');

    expect(icon.props.style[2].fontFamily).toEqual('Feather');
    expect(input.props.placeholder).toEqual('SearchInputMocked');
  });
});
