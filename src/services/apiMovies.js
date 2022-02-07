import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'key=4249ab3b22f63bc9cae3378d32ce7e3b';

export const FetchMovies = page =>
  axios.get(`${BASE_URL}/trending/movie/days${API_KEY}&page=${page}`);

export const FetchTrendingMovies = () =>
  axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);

export const FetchSearchMovies = query =>
  axios.get(
    `${BASE_URL}/search/movie?${API_KEY}&language=en-US&query=${query}&include_adult=false`
  );
export const FetchDetailsMovies = id =>
  axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);

export const FetchCreditsMovies = id =>
  axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
export const FetchReviewsMovies = id =>
  axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
