import axios from 'axios';

// Public Key
const key_secret = '99999999999999999999999';

const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/characters?apikey=${key_secret}&ts=1574817537&hash=577df0864e73ee60100286be26edfa09&limit=4`,
});

export default api;
