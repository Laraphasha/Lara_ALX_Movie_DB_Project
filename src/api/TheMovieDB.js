const API_KEY = '822486a70402691850cc82e1a2669d40';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await res.json();
  return data.results;
};
