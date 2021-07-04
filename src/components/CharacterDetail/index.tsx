import React from 'react';
import {FlatList} from 'react-native';
import {Character} from '../../hooks/characters';
import CharacterCard from '../CharacterCard';
import ComicList from '../ComicList';
import Loading from '../Loading';
import {Container} from './styles';

interface CharacterDetailProps {
  characters: Character[];
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({characters}) => {
  return (
    <FlatList
      testID="character-list"
      keyExtractor={item => String(item.id)}
      data={characters}
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      horizontal
      ListEmptyComponent={<Loading />}
      renderItem={({item}) => (
        <Container>
          <CharacterCard character={item} />
          <ComicList characterId={item.id} />
        </Container>
      )}
    />
  );
};

export default CharacterDetail;
