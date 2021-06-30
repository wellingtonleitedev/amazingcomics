import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import api from '../../services/api';
import styles from './styles';

interface Character {
  name: string;
  comics: {
    items: [
      {
        name: string;
      },
    ];
  };
}

const ComicsList: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedHero, setSelectedHero] = useState({} as Character);

  useEffect(() => {
    async function getComics() {
      const {data} = await api.get(
        'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=4a0b76c8f145b5143eb462b2cb5d3b6c&hash=ad0f96ad0bcac3e506649ce7b0756a84',
      );

      console.log({data});
      setCharacters(data.results);
      console.log({characters});
    }

    getComics();
  });

  const selectHero = useCallback(() => {
    const hero = characters.find(character => character.name === inputValue);

    console.log({hero});

    if (hero) {
      setSelectedHero(hero);
    }
  }, [characters, inputValue]);

  return (
    <View>
      <Text>Hello World</Text>

      <TextInput
        style={styles.input}
        onChangeText={text => setInputValue(text)}
        onBlur={selectHero}
      />

      <FlatList
        keyExtractor={(_, index) => String(index)}
        data={selectedHero.comics.items}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ComicsList;
