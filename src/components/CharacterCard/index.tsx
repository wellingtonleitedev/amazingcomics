import React from 'react';
import {Character} from '../../hooks/characters';
import {Card, Thumbnail, CharacterDescription, CharacterTitle} from './styles';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({character}) => {
  return (
    <Card testID="character-card">
      <Thumbnail
        source={{
          uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        }}
      />
      <CharacterTitle>{character.name}</CharacterTitle>
      <CharacterDescription numberOfLines={5}>
        {character.description}
      </CharacterDescription>
    </Card>
  );
};

export default React.memo(CharacterCard);
