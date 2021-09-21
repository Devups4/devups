import axios from 'axios';

export const loginFetcher = (url) => axios.get(url).then((res) => res.data);
