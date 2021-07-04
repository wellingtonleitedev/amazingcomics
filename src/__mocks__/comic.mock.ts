import {Comic} from '../components/ComicList';

export const comicMock: Comic = {
  id: 27238,
  title: 'Wolverine Saga (2009) #7',
  issueNumber: 7,
  pageCount: 32,
  prices: [
    {
      type: 'printPrice',
      price: 399,
    },
    {
      type: 'digitalPurchasePrice',
      price: 399,
    },
  ],
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
    extension: 'jpg',
  },
};
