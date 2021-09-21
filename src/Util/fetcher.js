import axios from 'axios';

export const userInfoFetcher = (url) => axios.get(url).then((res) => res.data);
