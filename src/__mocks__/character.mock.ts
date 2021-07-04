import {Character} from '../hooks/characters';
import {comicMock} from './comic.mock';

export const characterMock: Character = {
  id: 1009368,
  name: 'Iron Man',
  description:
    'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
    extension: 'jpg',
  },
  comics: [comicMock],
};
