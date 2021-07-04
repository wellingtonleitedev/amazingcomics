import React from 'react';
import {render} from '@testing-library/react-native';
import Loading from '../../components/Loading';

describe('Loading Component', () => {
  it('should render loading', () => {
    const {getByTestId} = render(<Loading />);

    const loading = getByTestId('loading');

    expect(loading).toBeTruthy();
  });
});
