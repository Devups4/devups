import axios from 'axios';

export const userInfoFetcher = (url) => axios.get(url).then((res) => res.data);

export const userFollowFetcher = (url) => axios.get(url).then((res) => res.data.follow);

export const userFollowingFetcher = (url) => axios.get(url).then((res) => res.data.following);
