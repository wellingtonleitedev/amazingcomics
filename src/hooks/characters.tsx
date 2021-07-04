import React, {createContext, useContext} from 'react';
import {useCallback} from 'react';
import {useState} from 'react';
import {Comic} from '../components/ComicList';
import api from '../services/api';
import {useIndicators} from './indicators';

interface CharactersContextData {
  characters: Character[];
  fetchCharacters(value: string): void;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: Comic[];
}

const CharactersContext = createContext<CharactersContextData>(
  {} as CharactersContextData,
);

const CharactersProvider: React.FC = ({children}) => {
  const {setLoading, setModal} = useIndicators();
  const [data, setData] = useState<Character[]>([]);

  const fetchCharacters = useCallback(
    async value => {
      if (value) {
        try {
          setData([]);
          setLoading(true);

          const {data: response} = await api.get(`/characters?name=${value}`);

          setData(response.data.results);
        } catch (error) {
          setModal({
            open: true,
            title: 'Request failed',
            message: 'Character not found',
          });
        } finally {
          setLoading(false);
        }
      }
    },
    [setData, setLoading, setModal],
  );

  return (
    <CharactersContext.Provider value={{characters: data, fetchCharacters}}>
      {children}
    </CharactersContext.Provider>
  );
};

function useCharacters(): CharactersContextData {
  const context = useContext(CharactersContext);

  return context;
}

export {CharactersProvider, useCharacters};
