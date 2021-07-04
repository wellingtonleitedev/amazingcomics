import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import CharacterDetail from '../../components/CharacterDetail';
import InputIcon from '../../components/InputIcon';
import {useCharacters} from '../../hooks/characters';
import {Header} from './styles';

const CharacterComics: React.FC = () => {
  const {fetchCharacters, characters} = useCharacters();
  const {goBack} = useNavigation();
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#EC1D24" />
      <Header>
        <InputIcon
          icon="arrow-left"
          iconColor="#FEFEFE"
          placeholder="Search other hero!"
          placeholderTextColor="#FEFEFE"
          onChangeText={text => setInputValue(text)}
          onBlur={() => fetchCharacters(inputValue)}
          value={inputValue}
          onPress={goBack}
        />
      </Header>
      <CharacterDetail characters={characters} />
    </>
  );
};

export default CharacterComics;
