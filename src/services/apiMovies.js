import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4249ab3b22f63bc9cae3378d32ce7e3b';

export const FetchMovies = async page => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/days${API_KEY}&page=${page}`
  );
  return response.data;
};

export const FetchTrendingMovies = async page => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
  );

  return response.data;
};

export const FetchSearchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false`
  );
  return response.data;
};
export const FetchDetailsMovies = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const FetchCreditsMovies = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
export const FetchReviewsMovies = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
