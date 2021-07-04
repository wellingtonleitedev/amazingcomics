import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {IndicatorsProvider, useIndicators} from '../../hooks/indicators';
import {characterMock} from '../../__mocks__/character.mock';
import {CharactersProvider, useCharacters} from '../../hooks/characters';
import api from '../../services/api';
import {waitFor} from '@testing-library/react-native';

const Providers: React.FC = ({children}) => (
  <IndicatorsProvider>
    <CharactersProvider>{children}</CharactersProvider>
  </IndicatorsProvider>
);

jest.spyOn(api, 'get').mockImplementation((): any => ({
  data: {
    data: {
      results: [characterMock],
    },
  },
}));

describe('Characters Hooks', () => {
  it('should be able to get characters', async () => {
    const {result} = renderHook(() => useCharacters(), {
      wrapper: Providers,
    });

    await act(() => result.current.fetchCharacters('Iron Man'));

    expect(result.current.characters[0].name).toEqual('Iron Man');
  });

  it("shouldn't be able to get characters because don't pass character name", async () => {
    const {result} = renderHook(() => useCharacters(), {
      wrapper: Providers,
    });

    await act(() => result.current.fetchCharacters(''));

    expect(result.current.characters.length).toBeFalsy();
  });

  it("shouldn't be able to get characters because throw an error", async () => {
    jest.spyOn(api, 'get').mockImplementation((): any => {
      throw new Error();
    });

    const {result: charactersHook} = renderHook(() => useCharacters(), {
      wrapper: Providers,
    });
    const {result: indicatorsHooks} = renderHook(() => useIndicators(), {
      wrapper: IndicatorsProvider,
    });

    await act(() => charactersHook.current.fetchCharacters('Iron Man'));

    waitFor(() => expect(indicatorsHooks.current.setModal).toHaveBeenCalled());
  });
});
