import { SEARCH_MOVIE_URL, SEARCH_POPULAR_URL, API_URL, API_KEY } from './config';

export type Movie = {
  backdrop_path: string;
  poster_path: string;
  id: string;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  budget: number;
  runtime: number;
  revenue: number;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

export type Cast = {
  character: string;
  credit: string;
  name: string;
  credit_id: string;
  profile_path: string;
};

export type Crew = {
  job: string;
  name: string;
  credit_id: string;
};

const settings = {
  fetchMovies: async (searchTerm: string, page: number): Promise<Movies> => {
    const endpoint = searchTerm
      ? `${SEARCH_MOVIE_URL}${searchTerm}&page=${page}`
      : `${SEARCH_POPULAR_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId: string): Promise<Movie> => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId: string): Promise<Credits> => {
    const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
};
export default settings;
