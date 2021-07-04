import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import AvengersList from '../../components/AvengersList';

const mockedNavigate = jest.fn();
const mocketFetchCharacters = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
}));

jest.mock('../../hooks/characters', () => ({
  useCharacters: () => ({
    fetchCharacters: mocketFetchCharacters,
  }),
}));

describe('Avengers List Component', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
    mocketFetchCharacters.mockClear();
  });

  it('should render header title', () => {
    const {getByText} = render(<AvengersList />);

    const headerTitle = getByText('Avengers');

    expect(headerTitle.props.children).toEqual('Avengers');
  });

  it('should render avengers list', () => {
    const {getByTestId} = render(<AvengersList />);

    const avengersList = getByTestId('hero-list');

    expect(avengersList).toBeTruthy();
  });

  it('should be able to scroll avengers list', async () => {
    const {getByTestId} = render(<AvengersList />);

    const eventData = {
      nativeEvent: {
        contentOffset: {
          x: 500,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 100,
          width: 500,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 100,
        },
      },
    };

    const avengersList = getByTestId('hero-list');

    waitFor(() =>
      expect(fireEvent.scroll(avengersList, eventData)).toBeTruthy(),
    );
  });

  it('should search a character when click on card', async () => {
    const {getAllByTestId} = render(<AvengersList />);

    const card = getAllByTestId('hero-card');

    fireEvent.press(card[0]);

    await waitFor(() => {
      expect(mocketFetchCharacters).toHaveBeenCalledWith('Iron Man');
    });
  });
});
