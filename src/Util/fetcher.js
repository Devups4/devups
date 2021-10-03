import axios from 'axios';

export const userInfoFetcher = (url) => axios.get(url).then((res) => res.data);

export const userFollowFetcher = (url) =>
  axios.get(url).then((res) => {
    return { follow: res.data.follow, following: res.data.following };
  });
export const articleFetcher = (url) => axios.get(url).then((res) => res.data);
export const articlesFetcher = (url) => axios.get(url).then((res) => res.data);
