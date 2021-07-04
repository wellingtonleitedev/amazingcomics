import React, {useState, useCallback} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useCharacters} from '../../hooks/characters';
import SearchInput from '../../components/SearchInput';
import ComicList from '../../components/ComicList';
import {Container, ComicsContainer, ImageBackground} from './styles';
import AvengersList from '../../components/AvengersList';

import ImageBg from '../../../assets/images/bg-image.jpg';

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const {fetchCharacters} = useCharacters();
  const {navigate} = useNavigation();

  const searchCharacter = useCallback(() => {
    if (inputValue) {
      fetchCharacters(inputValue);
      setInputValue('');
      navigate('CharacterComics');
    }
  }, [inputValue, fetchCharacters, navigate]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#671902" />
      <Container>
        <ImageBackground source={ImageBg} resizeMode="cover">
          <SearchInput
            placeholder="Search your favorite hero!"
            placeholderTextColor="#0A0D1C"
            onChangeText={text => setInputValue(text)}
            onBlur={() => searchCharacter()}
            value={inputValue}
          />
          <AvengersList />
          <ComicsContainer>
            <ComicList />
          </ComicsContainer>
        </ImageBackground>
      </Container>
    </>
  );
};

export default Home;
