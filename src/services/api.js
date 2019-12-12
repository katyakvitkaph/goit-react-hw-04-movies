import axios from 'axios';

const key = '2df95ba3f4df395febb74bf2085caed3';

export const fetchPopularMovies = (
  mediaType = 'movie',
  timeWindow = 'week',
) => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${key}`,
  );
};

export const fetchMoviesWithId = id => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`);
};

export const fetchCast = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`,
  );
};

export const fetchReviews = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}`,
  );
};

export const searchMovies = (query = 'superman') => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${key}`,
  );
};
