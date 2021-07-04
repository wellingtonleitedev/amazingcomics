import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import Home from '../../screens/Home';

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

describe('Home Screen', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
    mocketFetchCharacters.mockClear();
  });

  it('should search a character and navigate to other screens', async () => {
    const {getByTestId} = render(<Home />);

    const searchInput = getByTestId('search-input');

    act(() => fireEvent.changeText(searchInput, 'Iron Man'));
    act(() => searchInput.props.onBlur());

    await waitFor(() => {
      expect(mocketFetchCharacters).toHaveBeenCalledWith('Iron Man');
      expect(mockedNavigate).toHaveBeenCalledWith('CharacterComics');
    });
  });

  it("shouldn't search a character", async () => {
    const {getByTestId} = render(<Home />);

    const searchInput = getByTestId('search-input');

    searchInput.props.onBlur();

    await waitFor(() => {
      expect(mocketFetchCharacters).not.toHaveBeenCalled();
    });
  });
});
