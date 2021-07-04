import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useCharacters} from '../../hooks/characters';
import {Card, HeaderTitle, HeroImage, HeroList, HeroName} from './styles';

const AvengersList: React.FC = () => {
  const {fetchCharacters} = useCharacters();
  const {navigate} = useNavigation();

  const avengers = [
    {
      value: 'Iron Man',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg',
    },
    {
      value: 'Captain America',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087.jpg',
    },
    {
      value: 'Thor',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg',
    },
    {
      value: 'Hulk',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg',
    },
    {
      value: 'Spider-Man',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg',
    },
    {
      value: 'Black Widow',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b.jpg',
    },
    {
      value: 'Hawkeye',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b.jpg',
    },
    {
      value: 'Doctor Strange',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe.jpg',
    },
    {
      value: 'Falcon',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/f/b0/5111505fb7009.jpg',
    },
    {
      value: 'Winter Soldier',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/d/03/5265478293c1e.jpg',
    },
  ];

  const searchCharacter = (character: string) => {
    fetchCharacters(character);
    navigate('CharacterComics');
  };

  return (
    <>
      <HeaderTitle testID="header-title">Avengers</HeaderTitle>
      <HeroList
        testID="hero-list"
        keyExtractor={item => item.value}
        data={avengers}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Card testID="hero-card" onPress={() => searchCharacter(item.value)}>
            <>
              <HeroImage source={{uri: item.image}} />
              <HeroName>{item.value}</HeroName>
            </>
          </Card>
        )}
      />
    </>
  );
};

export default React.memo(AvengersList);
