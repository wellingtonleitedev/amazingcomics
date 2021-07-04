import axios from 'axios';
import md5 from 'md5';

const ts = Number(new Date());
const privateKey = 'a7a210d13924557b78df31d899d1934b184130af';
const publicKey = '4a0b76c8f145b5143eb462b2cb5d3b6c';

const hash = md5(`${ts}${privateKey}${publicKey}`);

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    ts: ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
