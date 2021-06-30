import axios from 'axios';

export default axios.create({
  baseURL:
    'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=4a0b76c8f145b5143eb462b2cb5d3b6c&hash=ad0f96ad0bcac3e506649ce7b0756a84',
  // params: {
  //   ts: Number(new Date()),
  //   apiKey: '4a0b76c8f145b5143eb462b2cb5d3b6c',
  //   hash: 'ad0f96ad0bcac3e506649ce7b0756a84',
  // }
});
