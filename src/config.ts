const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

const SEARCH_POPULAR_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const SEARCH_MOVIE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w780';

export {
  API_URL,
  API_KEY,
  SEARCH_MOVIE_URL,
  SEARCH_POPULAR_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
