const API_KEY = '477b153deaf635e0976015de70de19a9';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
    const response = await fetch (`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch (`${BASE_URL}/search/movie?api_key=${API_KEY} &query=${encodeURIComponent(
        query)}`
    );
    const data = await response.json();
    return data.results;
};