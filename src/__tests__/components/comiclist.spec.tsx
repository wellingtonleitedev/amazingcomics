import React from 'react';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import ComicList from '../../components/ComicList';
import {characterMock} from '../../__mocks__/character.mock';
import api from '../../services/api';
import {comicMock} from '../../__mocks__/comic.mock';
import {IndicatorsProvider} from '../../hooks/indicators';

jest.spyOn(api, 'get').mockImplementation((): any => ({
  data: {
    data: {
      results: [comicMock],
    },
  },
}));

describe('Character Detail Component', () => {
  it('should render comic list', async () => {
    const {getByTestId} = render(<ComicList />);

    const comicContainer = getByTestId('comic-container');

    expect(comicContainer).toBeTruthy();
  });

  it('should render comics list of a specific character', async () => {
    const {getByTestId} = render(<ComicList characterId={characterMock.id} />, {
      wrapper: IndicatorsProvider,
    });

    const comicList = getByTestId('comic-list');

    waitFor(() =>
      expect(act(() => comicList.props.characterId)).toEqual(characterMock.id),
    );
  });

  it('should be able to scroll comics list', async () => {
    const {getByTestId} = render(<ComicList />, {
      wrapper: IndicatorsProvider,
    });

    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 500,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 500,
          width: 100,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 100,
        },
      },
    };

    const comicList = getByTestId('comic-list');

    waitFor(() =>
      expect(act(() => fireEvent.scroll(comicList, eventData))).toBeTruthy(),
    );
  });
});
