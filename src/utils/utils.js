export const checkResponse = (res) => {
  if (res.ok) {
    return res.json(); 
  }
  return Promise.reject(`Error: ${res.status}`); 
};

export function filterDuration(movies) {
  return movies.filter((movie) => movie.duration >= 40);
}

export function filterMovies(movies, query) {
  return movies.filter(
    (movie) =>
      movie.nameRU.toLowerCase().trim().includes(query) !== false ||
      movie.nameEN.toLowerCase().trim().includes(query) !== false
  );
}