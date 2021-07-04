import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {characterMock} from '../../__mocks__/character.mock';
import CharacterDetail from '../../components/CharacterDetail';

describe('Character Detail Component', () => {
  it('should render character list', () => {
    const {getByTestId} = render(
      <CharacterDetail characters={[characterMock]} />,
    );

    const characterDetail = getByTestId('character-list');

    expect(characterDetail).toBeTruthy();
  });

  it('should be able to scroll characters list', async () => {
    const {getByTestId} = render(
      <CharacterDetail characters={[characterMock]} />,
    );

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

    const characterDetail = getByTestId('character-list');

    waitFor(() =>
      expect(fireEvent.scroll(characterDetail, eventData)).toBeTruthy(),
    );
  });
});
