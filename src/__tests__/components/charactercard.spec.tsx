import React from 'react';
import {render} from '@testing-library/react-native';
import {characterMock} from '../../__mocks__/character.mock';
import CharacterCard from '../../components/CharacterCard';

describe('Character Card Component', () => {
  it('should render character card', () => {
    const {getByTestId, getByText} = render(
      <CharacterCard character={characterMock} />,
    );

    const characterCard = getByTestId('character-card');
    const characterTitle = getByText('Iron Man');

    expect(characterCard).toBeTruthy();
    expect(characterTitle).toBeTruthy();
  });
});
