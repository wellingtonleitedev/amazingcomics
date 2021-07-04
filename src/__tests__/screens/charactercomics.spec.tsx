import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import CharacterComics from '../../screens/CharacterComics';

const mockedNavigate = jest.fn();
const mocketFetchCharacters = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: mockedNavigate,
  }),
}));

jest.mock('../../hooks/characters', () => ({
  useCharacters: () => ({
    fetchCharacters: mocketFetchCharacters,
  }),
}));

describe('CharacterComics Screen', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
    mocketFetchCharacters.mockClear();
  });

  it('should search a character', async () => {
    const {getByTestId} = render(<CharacterComics />);

    const input = getByTestId('input');

    act(() => fireEvent.changeText(input, 'Iron Man'));
    act(() => input.props.onBlur());

    await waitFor(() => {
      expect(mocketFetchCharacters).toHaveBeenCalledWith('Iron Man');
    });
  });

  it('should go back when click on arrow left', async () => {
    const {getByTestId} = render(<CharacterComics />);

    const icon = getByTestId('icon');
    fireEvent.press(icon);

    await waitFor(() => expect(mockedNavigate).toHaveBeenCalled());
  });
});
